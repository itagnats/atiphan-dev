import { SectionHead } from "@/components/SectionHead";
import { PhoneVideo } from "@/components/PhoneVideo";
import { WorkModuleGrid } from "@/components/WorkModuleGrid";
import { featuredProject, primeProject } from "@/data/portfolio";

export function Work() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-16 md:py-16">
        <SectionHead num="02" label="Work" />

        <div className="flex flex-col gap-9 md:gap-18">
          {/* Featured: POCKITA */}
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

              <PhoneVideo />
            </article>
          </div>

          {/* Selected Work — the five PRIME modules.
              This block used to read "Selected Work at CP Group" over four
              employer case studies. Those were replaced on 2026-09-21 by PRIME,
              which is a personal project. The provenance line below is not
              decoration: without it the heading implies employer work, and a
              side project presented as a job is the kind of thing that comes
              apart in an interview. Do not remove it. */}
          <div>
            <div className="mb-5">
              <h3 className="font-display text-[26px] font-bold leading-none tracking-[-0.03em] md:text-[40px]">
                Selected Work
              </h3>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-(--pill-bg) px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-violet">
                  <span className="size-1.5 rounded-full bg-violet shadow-[0_0_8px_var(--violet)]" />
                  {primeProject.provenance}
                </span>
                {!primeProject.deployed && (
                  <span className="rounded-full border border-border-soft px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-dim">
                    Not deployed
                  </span>
                )}
              </div>

              <h4 className="mt-4 font-display text-[20px] font-semibold tracking-tight md:text-[24px]">
                {primeProject.name}
                <span className="ml-2.5 font-normal text-violet">{primeProject.tagline}</span>
              </h4>
              <p className="mt-2 max-w-180 text-[14px] leading-[1.7] text-text-muted">
                {primeProject.blurb}{" "}
                {/* Rendered only when the repo is public — a dead link on a
                    portfolio is worse than no link. */}
                {primeProject.repoUrl && (
                  <a
                    href={primeProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap border-b border-transparent font-medium text-violet transition hover:border-current hover:text-[#c084fc]"
                  >
                    View source&nbsp;→
                  </a>
                )}
              </p>
            </div>

            <WorkModuleGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
