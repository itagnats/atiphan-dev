import { describe, expect, it } from "vitest";
import {
  selectedWork,
  selectedWorkContext,
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

  /* These describe CP Group internal systems. The risk here is the mirror of
     the one that applied when this block held PRIME: not that side work gets
     claimed as employer work, but that an employer's internals get published
     past what was agreed, or that an unsourced figure gets stated as fact. */
  it("keeps internal systems unlinkable", () => {
    // No screenshots, no internal URLs. A link to an intranet host would be
    // dead to every reader and a disclosure to the one who recognises it.
    const blob = JSON.stringify(selectedWork).toLowerCase();
    for (const claim of ["http://", "https://", "screenshot", ".local", "intranet"]) {
      expect(blob, `internal reference "${claim}"`).not.toContain(claim);
    }
  });

  it("states no figure that was never sourced", () => {
    // The 2023-era copy of this block carried these three. None could be
    // traced to anything Ita confirmed, so none were carried over. If one
    // comes back, it should come back because he supplied it.
    const blob = JSON.stringify(selectedWork).toLowerCase();
    for (const claim of ["400 monthly", "monthly active users", "5 simultaneous role"]) {
      expect(blob, `unsourced figure "${claim}"`).not.toContain(claim);
    }
  });

  it("does not inflate what was contributed into what was led", () => {
    // The migration was contributed to, the cutover participated in, risks
    // raised rather than registered. These are the exact phrasings an
    // interviewer will test, and the ones a rewrite tends to quietly upgrade.
    const migration = selectedWork.find((m) => m.slug === "erp-migration");
    expect(migration, "the migration entry").toBeTruthy();
    const blob = JSON.stringify(migration).toLowerCase();
    for (const claim of ["led the migration", "ran the cutover", "risk register", "drove the migration"]) {
      expect(blob, `overclaim "${claim}"`).not.toContain(claim);
    }
  });
});

describe("selectedWorkContext", () => {
  it("names the employer, because the heading above it does not", () => {
    // Work.tsx renders this verbatim under a bare "Selected Work" heading.
    // Emptied, the section stops saying whose systems these are.
    expect(selectedWorkContext.provenance.toLowerCase()).toContain("cp leadership institute");
  });

  it("keeps the internal flag set while there is nothing public to link", () => {
    // The flag is what renders the "no public links" note. Clearing it without
    // adding links leaves a portfolio section that looks like it forgot them.
    expect(selectedWorkContext.internal).toBe(true);
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
  it("uses descriptive captions rather than 'Photo N'", () => {
    // The caption is also the image's alt text, so "Photo 3" leaves a
    // screen-reader user with nothing. Unskipped on 2026-10-12 once all
    // fifteen were written from the images themselves.
    for (const event of leadership) {
      for (const photo of event.photos) {
        expect(photo.caption, event.slug).not.toMatch(/^Photo \d+$/);
        expect(photo.caption.length, event.slug).toBeGreaterThan(24);
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
    // The handle is what a reader types from a printed CV, so a drift between
    // the two means someone lands on the wrong page or nowhere at all.
    expect(personal.website).toContain(personal.websiteHandle);
  });

  it("gives the site a real https URL", () => {
    expect(personal.website).toMatch(/^https:\/\//);
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

  it("has a mark wired for every stack entry", async () => {
    // simple-icons only ships brand marks, so a concept like REST has no entry
    // there and uses a generic Lucide glyph instead. Either source is fine; a
    // slug in neither renders an empty box with a tooltip and nothing in it.
    const si = await import("simple-icons");
    const { GENERIC_SLUGS } = await import("@/components/BrandIcon");

    for (const item of stack) {
      const exportName =
        "si" + item.slug.charAt(0).toUpperCase() + item.slug.slice(1);
      const hasMark =
        Object.hasOwn(si, exportName) || GENERIC_SLUGS.includes(item.slug);
      expect(hasMark, `${item.name} has neither ${exportName} nor a generic glyph`).toBe(true);
    }
  });
});
