import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Home from "@/app/page";
import { navItems } from "@/data/portfolio";

/**
 * The side-rail scroll-spy matches each navItems entry to a <section id="...">.
 * If a section is renamed, reordered or commented out, the nav link silently
 * stops working — there is no compile error. This test is the guard.
 */
describe("home page structure", () => {
  it("renders a section for every nav item", () => {
    const { container } = render(<Home />);
    const ids = Array.from(container.querySelectorAll("section[id]")).map(
      (el) => el.id,
    );

    for (const item of navItems) {
      expect(ids, `nav item "${item.id}" has no matching section`).toContain(
        item.id,
      );
    }
  });

  it("numbers the section headings consecutively from 01", () => {
    const { container } = render(<Home />);
    const nums = Array.from(container.querySelectorAll("section[id]"))
      .map((section) => section.textContent?.match(/^\s*(\d{2})/)?.[1])
      .filter(Boolean);

    const expected = nums.map((_, i) => String(i + 1).padStart(2, "0"));
    expect(nums).toEqual(expected);
  });

  it("links every experiment to its live site in a new tab, safely", () => {
    const { container } = render(<Home />);
    const external = Array.from(
      container.querySelectorAll('#experiments a[target="_blank"]'),
    );
    expect(external.length).toBeGreaterThan(0);
    for (const link of external) {
      expect(link.getAttribute("rel") ?? "").toContain("noopener");
    }
  });

  it("exposes exactly one h1", () => {
    const { container } = render(<Home />);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
  });
});
