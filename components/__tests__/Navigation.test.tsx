import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navigation } from "@/components/Navigation";
import { astronautMessages, navItems, personal } from "@/data/portfolio";

/** The socials and the mailto link live inside the mobile menu, which is closed by default. */
async function openMobileMenu(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole("button", { name: /open menu/i }));
}

describe("Navigation", () => {
  beforeEach(() => {
    try {
      window.localStorage.clear();
    } catch {
      /* jsdom always allows this; the guard mirrors the component */
    }
    vi.useRealTimers();
  });

  it("links every nav item to its section anchor", () => {
    render(<Navigation />);
    for (const item of navItems) {
      const links = screen
        .getAllByRole("link", { name: new RegExp(item.label, "i") })
        .filter((el) => el.getAttribute("href") === `#${item.id}`);
      expect(links.length, `no link to #${item.id}`).toBeGreaterThan(0);
    }
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    expect(screen.queryByRole("button", { name: /close menu/i })).not.toBeInTheDocument();

    await openMobileMenu(user);
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /close menu/i }));
    expect(screen.queryByRole("button", { name: /close menu/i })).not.toBeInTheDocument();
  });

  it("gives every external link a rel that blocks reverse-tabnabbing", async () => {
    const user = userEvent.setup();
    render(<Navigation />);
    await openMobileMenu(user);

    const external = screen
      .getAllByRole("link")
      .filter((el) => el.getAttribute("href")?.startsWith("http"));

    expect(external.length, "expected external social links").toBeGreaterThan(0);
    for (const link of external) {
      expect(link, link.getAttribute("href") ?? "").toHaveAttribute(
        "rel",
        expect.stringContaining("noopener"),
      );
    }
  });

  it("takes the email from the content file rather than hardcoding it", async () => {
    const user = userEvent.setup();
    render(<Navigation />);
    await openMobileMenu(user);

    const mailto = screen
      .getAllByRole("link")
      .find((el) => el.getAttribute("href")?.startsWith("mailto:"));
    expect(mailto).toHaveAttribute("href", `mailto:${personal.email}`);
  });

  it("opens the astronaut dialog from the avatar", async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    await user.click(screen.getAllByRole("button", { name: /open astronaut dialog/i })[0]);
    expect(screen.getByAltText(/astronaut/i)).toBeInTheDocument();
  });
});

describe("Navigation — first-visit greeting", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("greets a first-time visitor with the welcome message, unprompted", async () => {
    render(<Navigation />);
    // Nothing on screen immediately — the greeting waits for the hero to settle.
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    const dialog = await screen.findByRole("dialog", {}, { timeout: 4000 });
    expect(dialog).toBeInTheDocument();
    // It is the introduction, not a random line from the rotation.
    expect(astronautMessages[0]).toMatch(/welcome aboard/i);
  });

  it("does not greet a returning visitor", async () => {
    window.localStorage.setItem("ita-dev:astronaut-greeted-v1", "1");
    render(<Navigation />);
    await new Promise((r) => setTimeout(r, 1800));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("marks the visitor as greeted so it only happens once", async () => {
    render(<Navigation />);
    await screen.findByRole("dialog", {}, { timeout: 4000 });
    expect(window.localStorage.getItem("ita-dev:astronaut-greeted-v1")).toBe("1");
  });

  it("gives the greeting a dismissable, labelled dialog", async () => {
    const user = userEvent.setup();
    render(<Navigation />);
    const dialog = await screen.findByRole("dialog", {}, { timeout: 4000 });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAccessibleName(/message from/i);

    await user.click(screen.getByRole("button", { name: /close dialog/i }));
    // AnimatePresence keeps the node mounted for the exit transition.
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
    );
  });
});
