import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProcessFlow } from "@/components/ProcessFlow";
import { process } from "@/data/portfolio";

describe("ProcessFlow", () => {
  it("shows every stage, with its number and its description", () => {
    render(<ProcessFlow />);
    for (const stage of process) {
      expect(screen.getByText(stage.step), stage.title).toBeInTheDocument();
      expect(screen.getByText(stage.title)).toBeInTheDocument();
      expect(screen.getByText(stage.detail), stage.title).toBeInTheDocument();
      expect(screen.getByText(stage.ai), stage.title).toBeInTheDocument();
    }
  });

  it("marks it up as an ordered list", () => {
    const { container } = render(<ProcessFlow />);
    // This is a sequence, not a set. A <div> soup would read to a screen reader
    // as eight unrelated blocks, losing the one thing the section is about.
    const list = container.querySelector("ol");
    expect(list).toBeTruthy();
    expect(list!.querySelectorAll("li")).toHaveLength(process.length);
  });

  it("keeps the step order the data declares", () => {
    const { container } = render(<ProcessFlow />);
    const rendered = Array.from(container.querySelectorAll("li")).map(
      (li) => li.textContent?.match(/^(\d{2})/)?.[1],
    );
    expect(rendered).toEqual(process.map((s) => s.step));
  });

  it("numbers the stages consecutively from 01", () => {
    // A gap or a duplicate here would be invisible on the page but would make
    // the flow wrong for anyone reading it as a process.
    const expected = process.map((_, i) => String(i + 1).padStart(2, "0"));
    expect(process.map((s) => s.step)).toEqual(expected);
  });

  it("never claims the AI did the judging", () => {
    // The distinction that matters in an interview: these workflows were
    // directed and checked by a person. Wording that implies the tool
    // guaranteed correctness is the one thing this section must not do.
    const blob = process.map((s) => s.ai).join(" ").toLowerCase();
    for (const claim of ["automatically ensures", "guarantees", "proves", "fully automated"]) {
      expect(blob, `overclaim "${claim}"`).not.toContain(claim);
    }
  });

  it("hides the decorative icons from assistive tech", () => {
    const { container } = render(<ProcessFlow />);
    // The numbers carry the sequence; the chevrons are decoration and would
    // otherwise be announced as meaningless graphics between every stage.
    for (const svg of Array.from(container.querySelectorAll("svg"))) {
      expect(svg.getAttribute("aria-hidden")).toBe("true");
    }
  });
});
