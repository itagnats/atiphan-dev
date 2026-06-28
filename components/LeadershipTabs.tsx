"use client";

import { useState } from "react";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { cn } from "@/lib/utils";

interface LeadershipEvent {
  slug: string;
  tabLabel: string;
  topic: string;
  projectName: string;
  organization: string;
  date: string;
  detail: string;
  photos: ReadonlyArray<{ src?: string; caption: string }>;
}

interface LeadershipTabsProps {
  events: ReadonlyArray<LeadershipEvent>;
}

export function LeadershipTabs({ events }: LeadershipTabsProps) {
  const [activeSlug, setActiveSlug] = useState(events[0]?.slug ?? "");
  const active = events.find((e) => e.slug === activeSlug) ?? events[0];

  if (!active) return null;

  return (
    <article className="relative overflow-hidden rounded-3xl border border-border-soft bg-bg-card p-6 md:p-9">
      {/* Decorative violet glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(168, 85, 247, 0.16) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(124, 58, 237, 0.10) 0%, transparent 55%)",
        }}
      />

      {/* Tabs row */}
      <div className="no-scrollbar relative z-10 -mx-6 mb-6 flex gap-2 overflow-x-auto px-6 md:-mx-9 md:mb-8 md:px-9">
        {events.map((e) => {
          const isActive = e.slug === active.slug;
          return (
            <button
              key={e.slug}
              type="button"
              onClick={() => setActiveSlug(e.slug)}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] transition",
                isActive
                  ? "border-violet bg-violet/15 text-violet shadow-[0_0_16px_-4px_var(--violet-glow)]"
                  : "border-border-soft bg-transparent text-text-muted hover:border-border-strong hover:text-text",
              )}
            >
              {e.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Body: carousel + text */}
      <div className="relative z-10 grid grid-cols-1 items-start gap-7 md:grid-cols-[1.15fr_1fr] md:gap-10">
        <PhotoCarousel photos={active.photos} />

        <div className="flex flex-col">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-(--pill-bg) px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-violet">
            <span className="size-1.5 rounded-full bg-violet shadow-[0_0_8px_var(--violet)]" />
            {active.topic}
            {active.date && (
              <>
                <span className="text-text-dim">·</span>
                {active.date}
              </>
            )}
          </span>
          <h3 className="mb-2 font-display text-[24px] font-bold leading-tight tracking-[-0.02em] md:text-[30px]">
            {active.projectName}
          </h3>
          {active.organization && (
            <div className="mb-5 text-[13px] font-medium text-violet md:text-[14px]">
              {active.organization}
            </div>
          )}
          <p className="max-w-95 text-[14px] leading-[1.7] text-text-muted md:text-[15px]">
            {active.detail}
          </p>
        </div>
      </div>
    </article>
  );
}
