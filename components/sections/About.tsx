"use client";

import { motion } from "framer-motion";
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
              {about.headline.line1}
              <span className="block text-violet">{about.headline.line2}</span>
            </h2>
            <div className="max-w-155 space-y-4 text-[14px] leading-[1.7] text-text-muted md:text-[15px]">
              {about.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {about.stats.map((stat, i) => {
            const Icon = STAT_ICONS[stat.icon] ?? Box;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -2 }}
                className="flex flex-col gap-2.5 rounded-[18px] border border-border-soft bg-bg-card p-4 transition-colors hover:border-border-strong md:gap-3 md:p-6"
              >
                <div className="flex size-9 items-center justify-center rounded-xl border border-border-strong bg-(--pill-bg) text-violet md:size-11">
                  <Icon className="size-4.5 md:size-5.5" strokeWidth={2} />
                </div>
                <div className="font-display text-2xl font-bold leading-none md:text-[32px]">
                  {stat.value}
                </div>
                <div className="text-[11px] text-text-muted md:text-[13px]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
