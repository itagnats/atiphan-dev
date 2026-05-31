"use client";

import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2.5 rounded-xl bg-violet-2 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_32px_-8px_var(--violet-glow)] transition hover:-translate-y-px hover:shadow-[0_12px_40px_-8px_var(--violet-glow)]"
    >
      <Download className="size-4" strokeWidth={2} />
      Download CV
    </button>
  );
}
