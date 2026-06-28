import Link from "next/link";
import {
  Box,
  Users,
  Calendar,
  FileText,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHead } from "@/components/SectionHead";
import { PhoneCarousel } from "@/components/PhoneCarousel";
import { featuredProject, cpModules } from "@/data/portfolio";

const CP_ICONS: Record<string, LucideIcon> = {
  box: Box,
  users: Users,
  calendar: Calendar,
  file: FileText,
};

export function Work() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-16 md:py-16">
        <SectionHead num="02" label="Work" />

        <div className="flex flex-col gap-9 md:gap-18">
          {/* Featured: POCKITA — temporarily disabled */}
          {false && (
            <div>
              <h3 className="mb-4 font-display text-[36px] font-bold leading-none tracking-[-0.03em] md:text-[52px]">
                Featured Project
              </h3>

              <article className="relative grid grid-cols-1 items-center gap-6 overflow-hidden rounded-3xl border border-border-soft bg-bg-card p-6 md:grid-cols-[1fr_280px] md:gap-8 md:p-9">
                {/* decorative glows */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.18) 0%, transparent 45%), radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.12) 0%, transparent 50%)",
                  }}
                />

                <div className="relative z-10 flex flex-col">
                  <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-(--pill-bg) px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-violet">
                    <span className="size-1.5 rounded-full bg-violet shadow-[0_0_8px_var(--violet)]" />
                    {featuredProject.tag}
                  </span>
                  <h4 className="mb-1.5 font-display text-[32px] font-bold leading-tight tracking-[-0.02em] md:text-[40px]">
                    {featuredProject.name}
                  </h4>
                  <div className="mb-4 text-sm text-violet">{featuredProject.tagline}</div>
                  <p className="mb-5 max-w-95 text-[14px] leading-[1.7] text-text-muted">
                    {featuredProject.description}{" "}
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-nowrap border-b border-transparent font-medium text-violet transition hover:border-current hover:text-[#c084fc]"
                    >
                      View site&nbsp;→
                    </a>
                  </p>
                  <div className="flex max-w-sm flex-wrap gap-2">
                    {featuredProject.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-soft bg-bg-card-2 px-3 py-1.5 text-xs text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <PhoneCarousel />
              </article>
            </div>
          )}

          {/* CP Group cards */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-[26px] font-bold leading-none tracking-[-0.03em] md:text-[40px]">
                Selected Work at CP Group
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
              {cpModules.map((mod) => {
                const Icon = CP_ICONS[mod.icon] ?? Box;
                return (
                  <article
                    key={mod.name}
                    className="cp-card-art flex flex-col gap-3 rounded-[18px] border border-border-soft bg-bg-card p-5 transition-transform hover:-translate-y-0.5 hover:border-border-strong"
                  >
                    <Link
                      href={`/work/${mod.slug}`}
                      aria-label={`View ${mod.name.replace(/\n/g, " ")} detail`}
                      className="absolute right-4 top-4 z-2 flex size-9 items-center justify-center rounded-full border border-border-strong bg-violet/10 text-violet transition hover:translate-x-0.5 hover:bg-violet/20"
                    >
                      <ChevronRight className="size-3.5" strokeWidth={2.5} />
                    </Link>
                    <div className="flex size-10 items-center justify-center rounded-[10px] border border-border-strong bg-(--pill-bg) text-violet">
                      <Icon className="size-5" strokeWidth={2} />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet">
                      {mod.label}
                    </div>
                    <div className="whitespace-pre-line font-display text-[17px] font-semibold leading-tight">
                      {mod.name}
                    </div>
                    <div className="text-[12.5px] leading-[1.55] text-text-muted">
                      {mod.description}
                    </div>
                    <div className="pt-1 text-xs text-violet">Role: {mod.role}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
