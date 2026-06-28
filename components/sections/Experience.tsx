import {
  Briefcase,
  PenTool,
  GraduationCap,
  Box,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { SectionHead } from "@/components/SectionHead";
import { experience } from "@/data/portfolio";

const EXP_ICONS: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  "pen-tool": PenTool,
  "graduation-cap": GraduationCap,
  box: Box,
  "file-text": FileText,
};

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-16 md:py-16">
        <SectionHead num="02" label="Experience" />

        <div className="relative px-0 py-2 md:py-4">
          {/* Timeline line */}
          <div className="exp-line-h" aria-hidden />

          {/* Nodes: horizontal on desktop, vertical centered on mobile */}
          <div className="relative z-10 mx-auto grid max-w-85 grid-cols-1 gap-8 md:max-w-none md:grid-cols-5 md:gap-5">
            {experience.map((exp) => {
              const Icon = EXP_ICONS[exp.icon] ?? Box;
              return (
                <div
                  key={exp.title}
                  className="group flex flex-row items-start gap-5 text-left transition-transform hover:-translate-y-1.5 md:flex-col md:items-center md:gap-0 md:text-center"
                >
                  <div className="relative z-10 mb-0 flex size-16 shrink-0 items-center justify-center rounded-full border border-border-strong bg-linear-to-br from-[#1a0f2e] to-[#0f0820] text-violet shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all group-hover:scale-105 group-hover:border-violet group-hover:shadow-[0_0_50px_rgba(168,85,247,0.45),0_0_0_6px_rgba(168,85,247,0.12)] md:size-20 md:mb-6">
                    <Icon
                      className="size-6.5 transition-transform group-hover:scale-105 md:size-8"
                      strokeWidth={1.6}
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-1 pt-1.5 md:flex-none md:items-center md:pt-0">
                    <span className="mb-1.5 inline-flex items-center rounded-full border border-border-strong bg-(--pill-bg) px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-violet md:text-[10px]">
                      {exp.tag}
                    </span>
                    <div className="mb-1 font-mono text-xs tracking-tight text-text-muted">
                      {exp.date}
                    </div>
                    <div className="whitespace-pre-line font-display text-[16px] font-semibold leading-tight transition-colors group-hover:text-violet">
                      {exp.title}
                    </div>
                    {exp.sub.map((s, i) => (
                      <div
                        key={i}
                        className="text-[13px] leading-normal text-text-muted md:text-[12.5px]"
                      >
                        {s}
                      </div>
                    ))}
                    {"extra" in exp && exp.extra ? (
                      <div className="mt-0.5 text-[12px] leading-normal text-violet md:text-[11.5px]">
                        {exp.extra}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
