"use client";

import { motion } from "motion/react";
import {
  ChevronRight,
  Sparkles,
  Search,
  Workflow,
  PenTool,
  Blocks,
  Code,
  ClipboardCheck,
  ShieldCheck,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import { process } from "@/data/portfolio";

/* Keyed by the `icon` field on each stage. Named imports rather than a dynamic
   lookup, so the bundler only ships these eight rather than the whole set. */
const STAGE_ICONS: Record<string, LucideIcon> = {
  search: Search,
  workflow: Workflow,
  "pen-tool": PenTool,
  blocks: Blocks,
  code: Code,
  "clipboard-check": ClipboardCheck,
  "shield-check": ShieldCheck,
  "line-chart": LineChart,
};

/**
 * The end-to-end working process, rendered inside the About section under the
 * "Design-led, engineering-minded, AI-augmented" headline.
 *
 * It lives there rather than in a section of its own because the headline is a
 * claim and this is the evidence — separating them weakens both, and it avoids
 * renumbering every section below.
 *
 * Reads as a flow rather than a list through two devices: the step numbers, and
 * a chevron before every card except the first. The chevron is `aria-hidden`
 * and decorative; the numbers are what carry the sequence for a screen reader,
 * which is why they are real text inside each item rather than CSS counters.
 *
 * Laid out as an ordered list, because that is what it is. Four columns on
 * desktop means the chevron before item 05 sits at the start of row two, which
 * still reads correctly: 04 leads to 05.
 */
export function ProcessFlow() {
  return (
    <div className="mt-12 md:mt-16">
      <div className="mb-5 flex items-center gap-3">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet">
          How I work, end to end
        </h3>
        <span className="h-px flex-1 bg-linear-to-r from-violet/25 to-transparent" />
      </div>

      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {process.map((stage, i) => {
          const Icon = STAGE_ICONS[stage.icon] ?? Search;
          return (
          <motion.li
            key={stage.step}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
            className="relative flex flex-col rounded-[14px] border border-border-soft bg-bg-card p-4 transition-colors hover:border-border-strong"
          >
            {/* Decorative only — the step numbers carry the order for anyone
                not seeing the layout. Hidden below lg, where the cards stack
                and the sequence is already unambiguous. */}
            {i > 0 && (
              <ChevronRight
                aria-hidden
                className="absolute -left-3.5 top-1/2 hidden size-4 -translate-y-1/2 text-violet/35 lg:block"
                strokeWidth={2.5}
              />
            )}

            <span className="mb-3 flex items-center gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-[9px] border border-border-strong bg-(--pill-bg) text-violet">
                {/* Decorative: the title next to it already names the stage. */}
                <Icon aria-hidden className="size-4" strokeWidth={2} />
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-violet/70">
                {stage.step}
              </span>
            </span>
            <span className="mb-1.5 font-display text-[15px] font-semibold leading-tight">
              {stage.title}
            </span>
            <span className="text-[12.5px] leading-[1.55] text-text-muted">
              {stage.detail}
            </span>

            {/* What the AI actually did at this stage. Deliberately a separate,
                quieter line rather than a badge on the card: the claim is that
                Ita directed and checked the work, not that the stage is
                "AI-powered". mt-auto pins it to the bottom so the tags line up
                across a row of uneven cards. */}
            <span className="mt-auto flex gap-2 pt-3 text-[11.5px] leading-[1.5] text-violet/75">
              <Sparkles aria-hidden className="mt-0.5 size-3 shrink-0" strokeWidth={2} />
              <span>
                <span className="sr-only">AI-assisted: </span>
                {stage.ai}
              </span>
            </span>
          </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
