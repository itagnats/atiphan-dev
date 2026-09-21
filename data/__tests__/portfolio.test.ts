import { describe, expect, it } from "vitest";
import {
  selectedWork,
  primeProject,
  cv,
  experiments,
  featuredProject,
  stack,
  leadership,
  navItems,
  personal,
} from "@/data/portfolio";

/**
 * Content invariants. data/portfolio.ts drives every route and every section,
 * so a typo here breaks the site silently rather than at compile time.
 */
describe("selectedWork", () => {
  it("has unique slugs", () => {
    const slugs = selectedWork.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses URL-safe slugs, since the slug becomes the route", () => {
    for (const m of selectedWork) {
      expect(m.slug, `slug "${m.slug}"`).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it("gives every case study the content the detail page renders", () => {
    for (const m of selectedWork) {
      expect(m.overview.length, `${m.slug} overview`).toBeGreaterThan(0);
      expect(m.problem.length, `${m.slug} problem`).toBeGreaterThan(0);
      expect(m.solution.length, `${m.slug} solution`).toBeGreaterThan(0);
      expect(m.outcome.length, `${m.slug} outcome`).toBeGreaterThan(0);
      expect(m.tech.length, `${m.slug} tech`).toBeGreaterThan(0);
    }
  });

  /* These five describe PRIME, a personal project. They replaced four CP Group
     employer case studies. The two must not blur back together: a side project
     described as employer work is the most damaging thing this file could come
     to contain. */
  it("never attributes this work to CP Group or any employer", () => {
    const blob = JSON.stringify(selectedWork).toLowerCase();
    for (const claim of ["cp group", "cp leadership", "cpli", "my team", "our team"]) {
      expect(blob, `employer attribution "${claim}"`).not.toContain(claim);
    }
  });

  it("claims no production users, because there are none", () => {
    // Every figure in these write-ups is a seed count, a test count or a
    // measured distribution. "1,200 active users" would be a fabrication, and
    // an interviewer asking how it was measured is how that gets found out.
    const blob = JSON.stringify(selectedWork).toLowerCase();
    for (const claim of ["active users", "monthly users", "in production since"]) {
      expect(blob, `usage claim "${claim}"`).not.toContain(claim);
    }
  });
});

describe("primeProject", () => {
  it("keeps the provenance line saying it is personal work", () => {
    // Work.tsx renders this verbatim under a heading that otherwise reads as
    // employer work. If it is ever emptied, the page starts implying a job.
    expect(primeProject.provenance.toLowerCase()).toContain("personal project");
  });

  it("does not describe itself as live while it is not deployed", () => {
    if (!primeProject.deployed) {
      expect(primeProject.blurb.toLowerCase()).not.toContain("live at");
    }
  });

  it("has a real repository URL, or none at all", () => {
    // An empty string is the honest "not public yet" state and renders no link.
    // A half-filled placeholder would render a link that 404s.
    if (primeProject.repoUrl !== "") {
      expect(primeProject.repoUrl).toMatch(/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/);
    }
  });
});

describe("leadership", () => {
  it("has unique slugs", () => {
    const slugs = leadership.map((e) => e.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every photo a caption, because the caption is also its alt text", () => {
    for (const event of leadership) {
      for (const [i, photo] of event.photos.entries()) {
        expect(photo.caption.trim(), `${event.slug} photo ${i}`).not.toBe("");
      }
    }
  });

  // KNOWN GAP: captions are currently "Photo 1", "Photo 2", ... which tells a
  // screen-reader user nothing. Unskip once real descriptions are written.
  it.skip("uses descriptive captions rather than 'Photo N'", () => {
    for (const event of leadership) {
      for (const photo of event.photos) {
        expect(photo.caption, event.slug).not.toMatch(/^Photo \d+$/);
      }
    }
  });
});

describe("navItems", () => {
  it("has unique ids", () => {
    const ids = navItems.map((n) => n.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("cv", () => {
  it("has no unfilled placeholder text", () => {
    const blob = JSON.stringify(cv).toLowerCase();
    for (const marker of ["lorem", "tbd", "todo", "edit me", "goes here", "your name"]) {
      expect(blob, `placeholder "${marker}"`).not.toContain(marker);
    }
  });

  it("lists experience newest first", () => {
    const years = cv.experience.map((job) => Number(job.date.match(/\d{4}/)?.[0]));
    const sorted = [...years].sort((a, b) => b - a);
    expect(years).toEqual(sorted);
  });

  it("gives every project a reachable link", () => {
    for (const proj of cv.projects) {
      expect(proj.url, proj.name).toMatch(/^https:\/\//);
    }
  });
});

describe("personal", () => {
  it("keeps the tel: link and the display phone number in sync", () => {
    expect(personal.phoneRaw).toBe(personal.phone.replace(/\s/g, ""));
  });

  it("keeps the profile handles consistent with their URLs", () => {
    expect(personal.linkedin).toContain(personal.linkedinHandle.split("/").pop()!);
    expect(personal.github).toContain(personal.githubHandle.split("/").pop()!);
  });
});

describe("featuredProject", () => {
  it("points the phone frame at a real video file, not a screenshot", () => {
    // PhoneVideo renders a <video>, so a path under /images/ here would silently
    // produce an empty frame rather than a broken-image icon.
    expect(featuredProject.demo.src).toMatch(/^\/videos\/.+\.mp4$/);
    expect(featuredProject.demo.poster).toMatch(/^\/images\/.+\.(webp|jpg|png)$/);
  });

  it("describes the recording for screen-reader users", () => {
    // The video has no captions and no audio, so this label is the only thing a
    // non-sighted visitor gets. "App demo" would tell them nothing.
    expect(featuredProject.demo.alt.length).toBeGreaterThan(60);
  });

  it("keeps the retired screenshots valid in case the carousel comes back", () => {
    expect(featuredProject.phones.length).toBeGreaterThan(0);
    for (const phone of featuredProject.phones) {
      expect(phone.src, "screenshot path").toMatch(/^\/images\//);
      expect(phone.alt.length, phone.src).toBeGreaterThan(30);
    }
  });

  it("carries no leftover template copy", () => {
    const blob = JSON.stringify(featuredProject).toLowerCase();
    for (const marker of ["edit me", "goes here", "item one", "premium item", "lorem", "$ 00.00"]) {
      expect(blob, `placeholder "${marker}"`).not.toContain(marker);
    }
  });
});

describe("experiments", () => {
  it("has unique slugs", () => {
    const slugs = experiments.map((e) => e.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("points every project at a live https URL", () => {
    for (const e of experiments) {
      expect(e.url, e.slug).toMatch(/^https:\/\//);
    }
  });

  it("gives every cover a real image and descriptive alt text", () => {
    for (const e of experiments) {
      expect(e.cover.src, e.slug).toMatch(/^\/images\/experiments\/.+\.webp$/);
      expect(e.cover.alt.length, e.cover.src).toBeGreaterThan(30);
    }
  });

  it("runs oldest to newest by roman numeral", () => {
    const order = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    const idx = experiments.map((e) => order.indexOf(e.numeral));
    expect(idx).not.toContain(-1);
    expect(idx).toEqual([...idx].sort((a, b) => a - b));
  });
});

describe("hero stack", () => {
  it("uses simple-icons slugs rather than placeholder glyphs", () => {
    expect(stack.length).toBeGreaterThan(0);
    for (const item of stack) {
      // lowercase, no spaces — the shape simple-icons uses
      expect(item.slug, item.name).toMatch(/^[a-z0-9.]+$/);
    }
  });

  it("has a brand mark wired for every stack entry", async () => {
    const si = await import("simple-icons");
    for (const item of stack) {
      const exportName =
        "si" + item.slug.charAt(0).toUpperCase() + item.slug.slice(1);
      expect(si, `${item.name} (${exportName})`).toHaveProperty(exportName);
    }
  });
});
