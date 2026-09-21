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
];

describe("LeadershipTabs", () => {
  it("renders a tab per event and opens on the first", () => {
    render(<LeadershipTabs events={events} />);

    expect(screen.getAllByRole("button")).toHaveLength(2);
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

  it("renders nothing rather than crashing when given no events", () => {
    const { container } = render(<LeadershipTabs events={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
