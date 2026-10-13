"use client";

import { useId, useState } from "react";
import {
  BookOpen,
  Receipt,
  Users,
  ClipboardCheck,
  Palette,
  Workflow,
  Box,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { selectedWork } from "@/data/portfolio";

const MODULE_ICONS: Record<string, LucideIcon> = {
  book: BookOpen,
  receipt: Receipt,
  users: Users,
  clipboard: ClipboardCheck,
  palette: Palette,
  workflow: Workflow,
};

/**
 * The Selected Work grid — CP Group internal modules. Each card expands in
 * place.
 *
 * These are an employer's internal systems: no screenshots, no links, no
 * customer or employee data. The block header in sections/Work.tsx carries the
 * provenance and the "no public links" note, and both have to travel with
 * these cards if they are ever rendered under a different heading — see the
 * comment above `selectedWork` in data/portfolio.ts for the full history and
 * for which figures may and may not be stated.
 *
 * These used to link out to /work/[slug] detail pages. Those pages are now
 * switched off: with the write-ups trimmed to overview / outcome / tech, a
 * detail page held barely more than the card that linked to it, and clicking
 * through to three sentences reads as an unfinished page. Everything lives on
 * the card instead.
 *
 * The route still exists on disk, disabled, so detail pages can come back once
 * there is enough to say — see app/work/[slug]/page.tsx.
 *
 * One card open at a time. Several open at once turns the list into a wall of
 * text and pushes the rest of the section off screen; a visitor comparing two
 * modules is better served by the one-liners, which stay visible either way.
 *
 * Single column at every width, as of 2026-10-13. It was a two-column grid with
 * a `wide` flag for the cards that spanned both; that flag now does nothing and
 * the data no longer sets it.
 *
 * Full-width cards need their own restraint. The header becomes a row on md+ so
 * the icon does not sit alone above a short title, and the running text is
 * capped near 75 characters — a line that runs the full 1,280px is measurably
 * harder to read, which is the whole reason the two-column layout looked fine.
 */
export function WorkModuleGrid() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const panelIdPrefix = useId();

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      {selectedWork.map((mod) => {
        const Icon = MODULE_ICONS[mod.icon] ?? Box;
        const isOpen = openSlug === mod.slug;
        const panelId = `${panelIdPrefix}-${mod.slug}`;

        return (
          <article
            key={mod.slug}
            className={`cp-card-art flex flex-col gap-3 rounded-[18px] border bg-bg-card p-5 transition-colors md:p-6 ${
              isOpen ? "border-border-strong" : "border-border-soft"
            }`}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-border-strong bg-(--pill-bg) text-violet">
                <Icon className="size-5" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet">
                  {mod.label}
                </div>
                <h4 className="whitespace-pre-line font-display text-[17px] font-semibold leading-tight md:text-[19px]">
                  {mod.name}
                </h4>
                <div className="max-w-[70ch] text-[12.5px] leading-[1.55] text-text-muted">
                  {mod.description}
                </div>
              </div>
            </div>

            {/* The whole control is the button rather than a 14px chevron. It
                stops growing at md and sits at the right edge: stretched across
                a full-width card it reads as a banner, not a control. Still
                full width below md, where the card is narrow enough for that to
                be the comfortable target rather than an overbearing one. */}
            <button
              type="button"
              onClick={() => setOpenSlug(isOpen ? null : mod.slug)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="mt-1 flex w-full items-center justify-between gap-3 rounded-lg md:w-62 md:self-end border border-border-soft bg-(--pill-bg) px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-violet transition hover:border-border-strong"
            >
              {isOpen ? "Hide details" : "Read more"}
              <Plus
                aria-hidden
                className={`size-3.5 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
                strokeWidth={2.5}
              />
            </button>

            {/* Kept in the DOM and hidden, rather than unmounted: the text stays
                findable with the browser's own Ctrl+F, which a visitor skimming
                for "SAP" or "TypeScript" will reach for before they click
                anything. `hidden` keeps it out of the accessibility tree too. */}
            <div
              id={panelId}
              hidden={!isOpen}
              className="flex flex-col gap-4 border-t border-border-soft pt-4"
            >
              <Field label="Overview">{mod.overview}</Field>
              <Field label="Outcome">{mod.outcome}</Field>
              <div>
                <FieldLabel>Tech</FieldLabel>
                <div className="flex flex-wrap gap-1.5">
                  {mod.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border-soft bg-bg-card-2 px-2.5 py-1 text-[11px] text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <p className="max-w-[80ch] text-[13px] leading-[1.65] text-text-muted">{children}</p>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
      {children}
    </div>
  );
}
