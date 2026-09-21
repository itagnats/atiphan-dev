"use client";

import { useId, useState } from "react";
import {
  BookOpen,
  Receipt,
  Users,
  ClipboardCheck,
  Palette,
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
};

/**
 * The Selected Work grid — the five PRIME modules. Each card expands in place.
 *
 * This replaced four CP Group employer case studies on 2026-09-21. PRIME is a
 * personal project; the block header in sections/Work.tsx is what says so. If
 * these cards are ever reused under another heading, that provenance has to
 * travel with them — see the comment above `selectedWork` in data/portfolio.ts.
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
 * One card open at a time. Several open at once turns the grid into a wall of
 * text and pushes the rest of the section off screen; a visitor comparing two
 * modules is better served by the one-liners, which stay visible either way.
 *
 * A module whose `wide` flag is set spans both columns. That is for the design
 * system, which sits last and describes work that crosses all the others.
 */
export function WorkModuleGrid() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const panelIdPrefix = useId();

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
      {selectedWork.map((mod) => {
        const Icon = MODULE_ICONS[mod.icon] ?? Box;
        const isOpen = openSlug === mod.slug;
        const panelId = `${panelIdPrefix}-${mod.slug}`;

        return (
          <article
            key={mod.slug}
            className={`cp-card-art flex flex-col gap-3 rounded-[18px] border bg-bg-card p-5 transition-colors ${
              isOpen ? "border-border-strong" : "border-border-soft"
            } ${mod.wide ? "md:col-span-2" : ""}`}
          >
            <div className="flex size-10 items-center justify-center rounded-[10px] border border-border-strong bg-(--pill-bg) text-violet">
              <Icon className="size-5" strokeWidth={2} />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet">
              {mod.label}
            </div>
            <h4 className="whitespace-pre-line font-display text-[17px] font-semibold leading-tight">
              {mod.name}
            </h4>
            <div className="text-[12.5px] leading-[1.55] text-text-muted">
              {mod.description}
            </div>

            {/* The whole control is the button, so the hit target is the full
                width of the card rather than a 14px chevron. */}
            <button
              type="button"
              onClick={() => setOpenSlug(isOpen ? null : mod.slug)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="mt-1 flex w-full items-center justify-between gap-3 rounded-lg border border-border-soft bg-(--pill-bg) px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-violet transition hover:border-border-strong"
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
      <p className="text-[13px] leading-[1.65] text-text-muted">{children}</p>
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
