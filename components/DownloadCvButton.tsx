import { Download } from "lucide-react";
import { CV_PDF_PATH } from "@/lib/site";

/**
 * Links to a pre-generated PDF instead of calling window.print().
 *
 * A print dialog renders differently per browser and per setting — margins,
 * scale, and whether "background graphics" is ticked all change the result,
 * so two people clicking the same button got two different documents. A static
 * file is the same for everyone.
 *
 * The print stylesheet in globals.css is still what produces that file: open
 * /cv, print to PDF, and save over `public${CV_PDF_PATH}`. Regenerate it
 * whenever the CV content changes, or the download quietly goes stale.
 */
export function DownloadCvButton({ label = "Download CV" }: { label?: string }) {
  return (
    <a
      href={CV_PDF_PATH}
      download
      className="no-print inline-flex items-center gap-2.5 rounded-xl bg-violet-2 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_32px_-8px_var(--violet-glow)] transition hover:-translate-y-px hover:shadow-[0_12px_40px_-8px_var(--violet-glow)]"
    >
      <Download className="size-4" strokeWidth={2} />
      {label}
    </a>
  );
}
