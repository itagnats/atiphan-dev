"use client";

import { motion } from "motion/react";
import { Briefcase, TrendingUp, Box, type LucideIcon } from "lucide-react";
import { SectionHead } from "@/components/SectionHead";
import { about } from "@/data/portfolio";

const STAT_ICONS: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  "trending-up": TrendingUp,
  box: Box,
};

export function About() {
  return (
    <section id="about" className="about-section-bg">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-16 md:py-16">
        <SectionHead num="01" label="About" />

        <div className="mb-9 grid grid-cols-1 items-center gap-12 md:mb-14">
          <div>
            <h2 className="mb-6 font-display text-[38px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[56px]">
              <span className="block text-violet">{about.headline.line1}</span>
              <span className="block">{about.headline.line2}</span>
              <span className="block text-violet">{about.headline.line3}</span>
            </h2>
            <div className="max-w-155 space-y-4 text-[14px] leading-[1.7] text-text-muted md:text-[15px]">
              {about.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 md:gap-3">
          {about.stats.map((stat, i) => {
            const Icon = STAT_ICONS[stat.icon] ?? Box;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
                className="flex items-center gap-3 rounded-xl border border-border-soft bg-bg-card px-3.5 py-2.5 transition-colors hover:border-border-strong md:px-4 md:py-3"
              >
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-(--pill-bg) text-violet md:size-8">
                  <Icon className="size-3.5 md:size-4" strokeWidth={2} />
                </div>
                <div className="flex min-w-0 flex-col leading-tight">
                  <div className="font-display text-[14px] font-semibold md:text-[15px]">
                    {stat.value}
                  </div>
                  <div className="truncate text-[10.5px] text-text-muted md:text-[11.5px]">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
