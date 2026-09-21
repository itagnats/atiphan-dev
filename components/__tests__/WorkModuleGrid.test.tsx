import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WorkModuleGrid } from "@/components/WorkModuleGrid";
import { selectedWork } from "@/data/portfolio";

const first = selectedWork[0];
const second = selectedWork[1];

/* Module names carry a literal \n so the card can break the title over two
   lines. The DOM collapses that to a space, so a plain getByText(mod.name)
   never matches — compare on collapsed whitespace instead. */
const collapse = (s: string) => s.replace(/\s+/g, " ").trim();

function headingFor(mod: (typeof selectedWork)[number]) {
  return screen.getByText(
    (_, el) => el?.tagName === "H4" && collapse(el.textContent ?? "") === collapse(mod.name),
  );
}

function toggleFor(mod: (typeof selectedWork)[number]) {
  // Each card's toggle is the only button inside that card's article.
  const card = headingFor(mod).closest("article");
  if (!card) throw new Error(`no article wrapping "${collapse(mod.name)}"`);
  return card.querySelector("button")!;
}

describe("WorkModuleGrid", () => {
  it("shows every module's name and one-liner without any clicking", () => {
    render(<WorkModuleGrid />);
    for (const mod of selectedWork) {
      expect(headingFor(mod)).toBeInTheDocument();
      expect(screen.getByText(mod.description)).toBeInTheDocument();
    }
  });

  it("keeps the detail collapsed until asked", () => {
    render(<WorkModuleGrid />);
    // The text is in the DOM so browser find still reaches it, but it must be
    // hidden — from sighted visitors and from the accessibility tree alike.
    expect(screen.getByText(first.overview)).not.toBeVisible();
    expect(toggleFor(first)).toHaveAttribute("aria-expanded", "false");
  });

  it("reveals overview, outcome and tech when a card is opened", async () => {
    const user = userEvent.setup();
    render(<WorkModuleGrid />);

    await user.click(toggleFor(first));

    expect(screen.getByText(first.overview)).toBeVisible();
    expect(screen.getByText(first.outcome)).toBeVisible();
    expect(toggleFor(first)).toHaveAttribute("aria-expanded", "true");
  });

  it("closes the open card when another is opened", async () => {
    const user = userEvent.setup();
    render(<WorkModuleGrid />);

    await user.click(toggleFor(first));
    await user.click(toggleFor(second));

    // Two open cards turn the grid into a wall of text — only one at a time.
    expect(screen.getByText(first.overview)).not.toBeVisible();
    expect(screen.getByText(second.overview)).toBeVisible();
  });

  it("closes a card when its own toggle is pressed again", async () => {
    const user = userEvent.setup();
    render(<WorkModuleGrid />);

    await user.click(toggleFor(first));
    await user.click(toggleFor(first));

    expect(screen.getByText(first.overview)).not.toBeVisible();
  });

  it("ties each toggle to the panel it controls", () => {
    render(<WorkModuleGrid />);
    for (const mod of selectedWork) {
      const toggle = toggleFor(mod);
      const panelId = toggle.getAttribute("aria-controls");
      expect(panelId, `${mod.name} toggle has no aria-controls`).toBeTruthy();
      // A dangling aria-controls is worse than none — a screen reader announces
      // a relationship to an element that is not there.
      expect(document.getElementById(panelId!)).toBeTruthy();
    }
  });

  it("links nowhere — the detail routes are switched off", () => {
    const { container } = render(<WorkModuleGrid />);
    // A leftover /work/... link would 404 now that the route returns no params.
    expect(container.querySelectorAll('a[href^="/work/"]')).toHaveLength(0);
  });
});
