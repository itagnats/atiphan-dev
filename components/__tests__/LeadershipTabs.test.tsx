import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LeadershipTabs } from "@/components/LeadershipTabs";

const events = [
  {
    slug: "first-event",
    tabLabel: "First",
    topic: "Company program",
    projectName: "First Project",
    organization: "Org One",
    date: "2025",
    detail: "Detail about the first event.",
    photos: [{ src: "/images/a.jpg", caption: "First photo" }],
  },
  {
    slug: "second-event",
    tabLabel: "Second",
    topic: "Volunteer",
    projectName: "Second Project",
    organization: "Org Two",
    date: "2024",
    detail: "Detail about the second event.",
    photos: [{ caption: "Placeholder caption" }],
  },
  {
    slug: "third-event",
    tabLabel: "Third",
    topic: "Global program",
    projectName: "Third Project",
    organization: "Org Three",
    date: "2026",
    detail: "Detail about the third event.",
    // One Young World has no photos — it was an essay, a video and a prototype.
    photos: [],
    press: { url: "https://example.com/coverage", label: "News coverage" },
  },
];

describe("LeadershipTabs", () => {
  it("renders a tab per event and opens on the first", () => {
    render(<LeadershipTabs events={events} />);

    expect(screen.getAllByRole("button")).toHaveLength(3);
    expect(screen.getByText("First Project")).toBeInTheDocument();
    expect(screen.queryByText("Second Project")).not.toBeInTheDocument();
  });

  it("swaps the panel content when another tab is clicked", async () => {
    const user = userEvent.setup();
    render(<LeadershipTabs events={events} />);

    await user.click(screen.getByRole("button", { name: "Second" }));

    expect(screen.getByText("Second Project")).toBeInTheDocument();
    expect(screen.getByText("Detail about the second event.")).toBeInTheDocument();
    expect(screen.queryByText("First Project")).not.toBeInTheDocument();
  });

  it("shows the photo caption as alt text so the carousel is described", async () => {
    render(<LeadershipTabs events={events} />);
    expect(screen.getByAltText("First photo")).toBeInTheDocument();
  });

  it("drops the carousel entirely for an event with no photos", async () => {
    const user = userEvent.setup();
    render(<LeadershipTabs events={events} />);

    await user.click(screen.getByRole("button", { name: "Third" }));

    // An empty carousel renders as a blank frame taking half the row — worse
    // than no carousel at all. The write-up should take the full width.
    expect(screen.getByText("Detail about the third event.")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /previous|next/i })).not.toBeInTheDocument();
  });

  it("links press coverage in a new tab, safely, and only where there is any", async () => {
    const user = userEvent.setup();
    render(<LeadershipTabs events={events} />);

    // The first event has no press link; nothing should be rendered for it.
    expect(screen.queryByRole("link")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Third" }));
    const link = screen.getByRole("link", { name: /news coverage/i });
    expect(link).toHaveAttribute("href", "https://example.com/coverage");
    // Outbound link on someone else's site — rel must block reverse-tabnabbing.
    expect(link.getAttribute("rel") ?? "").toContain("noopener");
  });

  it("renders nothing rather than crashing when given no events", () => {
    const { container } = render(<LeadershipTabs events={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
