import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { CV_PDF_PATH } from "@/lib/site";

/**
 * The CV download is a static file rather than a print dialog, which means it
 * can be missing — and a 404 behind a "Download CV" button on a job-hunting
 * site is worse than no button at all. This test is the guard.
 *
 * If it fails: open /cv, print to PDF, and save it at the path below.
 * Re-run it whenever the CV content changes, so the file cannot go stale
 * silently.
 */
describe("CV download", () => {
  it("has the PDF the download button points at", () => {
    const file = path.join(process.cwd(), "public", CV_PDF_PATH);
    expect(
      existsSync(file),
      `Missing ${file} — generate it from /cv (print to PDF) and save it there.`,
    ).toBe(true);
  });
});
