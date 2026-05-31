"use client";

import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { personal, stack } from "@/data/portfolio";

const STACK_COLORS: Record<string, string> = {
  react: "text-[#61dafb]",
  ts: "text-[#3178c6]",
  tw: "text-[#38bdf8]",
  figma: "text-[#a259ff]",
};

export function Hero() {
  return (
    <section
      id="home"
      className="hero-section-bg relative"
    >
      {/* Mobile-only full-bleed astronaut image at top */}
      <div
        className="hero-mobile-image hero-mobile-fade order-first h-130 w-screen relative md:hidden"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 pt-0 pb-14 md:px-16 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative grid grid-cols-1 items-start md:min-h-[90vh] md:items-center md:gap-12"
        >
          {/* Left content */}
          <div className="relative z-10 pt-2 md:pt-0">
            {/* Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-(--pill-bg) px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-violet md:mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-violet shadow-[0_0_8px_var(--violet)]" />
              {personal.status}
            </div>

            <div className="text-[22px] font-normal text-text-muted md:text-[28px]">
              Hi, I&apos;m
            </div>
            <h1 className="font-display text-[64px] font-bold leading-[0.95] tracking-[-0.04em] md:text-[96px]">
              {personal.name}
            </h1>
            <div
              className="-mt-1 font-script text-[52px] leading-none text-violet md:-mt-2 md:text-[72px]"
              aria-hidden
            >
              {personal.lastName}
            </div>
            <div className="mt-5 font-display text-[22px] font-medium leading-tight text-violet md:mt-6 md:text-[32px]">
              {personal.role.primary}
              <span className="mx-1 inline-block font-normal text-text-muted md:mx-1.5">×</span>
              {personal.role.secondary}
            </div>

            <p className="mt-7 max-w-115 text-[14px] leading-[1.7] text-text-muted md:mt-9 md:text-[15px]">
              {personal.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3 md:mt-9">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-violet-2 px-5 py-3 text-[13px] font-medium text-white shadow-[0_8px_32px_-8px_var(--violet-glow)] transition hover:-translate-y-px hover:shadow-[0_12px_40px_-8px_var(--violet-glow)] md:px-6 md:py-3.5 md:text-sm"
              >
                View Work
                <ArrowRight className="size-3.5" strokeWidth={2.5} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-border-strong bg-transparent px-5 py-3 text-[13px] font-medium text-text transition hover:bg-[rgba(168,85,247,0.08)] md:px-6 md:py-3.5 md:text-sm"
              >
                Get in Touch
                <Mail className="size-3.5" strokeWidth={2} />
              </a>
            </div>

            <div className="mt-12 text-[11px] uppercase tracking-[0.15em] text-text-dim">
              Stack
            </div>
            <div className="mt-3.5 flex flex-wrap items-center gap-3.5">
              {stack.map((s) => (
                <div
                  key={s.name}
                  title={s.name}
                  className={`flex size-9.5 items-center justify-center rounded-[10px] border border-border-soft bg-bg-card text-lg font-semibold ${STACK_COLORS[s.color] ?? "text-text-muted"}`}
                >
                  {s.short}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop-only CODE decoration */}
          <div className="absolute top-20 left-1/2 z-10 hidden translate-x-[-10%] rounded-xl border border-border-soft bg-bg-card px-5 py-4 font-mono text-[11px] text-violet md:block xl:translate-x-[-30%]">
            <div>
              <span className="text-text-muted">&lt;</span>CODE{" "}
              <span className="text-text-muted">/&gt;</span>
            </div>
            <div className="mt-2 text-[10px] tracking-widest text-text-dim">
              DESIGN.
            </div>
            <div className="text-[10px] tracking-widest text-text-dim">
              DEVELOP.
            </div>
            <div className="text-[10px] tracking-widest text-text-dim">
              DEPLOY.
            </div>
            <div className="text-[10px] tracking-widest text-text-dim">
              REPEAT.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
