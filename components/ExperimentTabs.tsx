"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PhoneCarousel } from "@/components/PhoneCarousel";
import { cn } from "@/lib/utils";

interface Experiment {
  slug: string;
  numeral: string;
  name: string;
  tagline: string;
  url: string;
  urlLabel: string;
  detail: string;
  tech: readonly string[];
  screens: ReadonlyArray<{ src: string; alt: string }>;
}

interface ExperimentTabsProps {
  experiments: ReadonlyArray<Experiment>;
}

export function ExperimentTabs({ experiments }: ExperimentTabsProps) {
  const [activeSlug, setActiveSlug] = useState(experiments[0]?.slug ?? "");
  const active = experiments.find((e) => e.slug === activeSlug) ?? experiments[0];

  if (!active) return null;

  return (
    <article className="relative overflow-hidden rounded-3xl border border-border-soft bg-bg-card p-6 md:p-9">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 15%, rgba(168, 85, 247, 0.16) 0%, transparent 50%), radial-gradient(circle at 85% 85%, rgba(124, 58, 237, 0.10) 0%, transparent 55%)",
        }}
      />

      {/* Tabs */}
      <div className="no-scrollbar relative z-10 -mx-6 mb-6 flex gap-2 overflow-x-auto px-6 md:-mx-9 md:mb-8 md:px-9">
        {experiments.map((e) => {
          const isActive = e.slug === active.slug;
          return (
            <button
              key={e.slug}
              type="button"
              onClick={() => setActiveSlug(e.slug)}
              aria-current={isActive}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] transition",
                isActive
                  ? "border-violet bg-violet/15 text-violet shadow-[0_0_16px_-4px_var(--violet-glow)]"
                  : "border-border-soft bg-transparent text-text-muted hover:border-border-strong hover:text-text",
              )}
            >
              <span className="mr-1.5 opacity-60">{e.numeral}</span>
              {e.name.split(" — ")[0]}
            </button>
          );
        })}
      </div>

      <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_300px] md:gap-10">
        <div className="flex flex-col">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-(--pill-bg) px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-violet">
            <span className="size-1.5 rounded-full bg-violet shadow-[0_0_8px_var(--violet)]" />
            {active.numeral} · Live
          </span>

          <h3 className="mb-1.5 font-display text-[24px] font-bold leading-tight tracking-[-0.02em] md:text-[30px]">
            {active.name}
          </h3>
          <div className="mb-4 text-[13px] font-medium text-violet md:text-[14px]">
            {active.tagline}
          </div>

          <p className="mb-5 max-w-115 text-[14px] leading-[1.7] text-text-muted md:text-[15px]">
            {active.detail}
          </p>

          {active.tech.length > 0 && (
            <div className="mb-5 flex max-w-115 flex-wrap gap-2">
              {active.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border-soft bg-bg-card-2 px-3 py-1.5 text-xs text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <a
            href={active.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2.5 rounded-xl bg-violet-2 px-5 py-3 text-[13px] font-medium text-white shadow-[0_8px_32px_-8px_var(--violet-glow)] transition hover:-translate-y-px hover:shadow-[0_12px_40px_-8px_var(--violet-glow)] md:text-sm"
          >
            Open {active.name.split(" — ")[0]}
            <ArrowUpRight className="size-3.5" strokeWidth={2.5} />
          </a>
        </div>

        {/* Screens — the carousel remounts per project so it starts at screen 1 */}
        <PhoneCarousel key={active.slug} screens={active.screens} />
      </div>
    </article>
  );
}
