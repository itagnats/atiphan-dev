import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { cpModules } from "@/data/portfolio";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render all 4 detail pages at build time
export function generateStaticParams() {
  return cpModules.map((mod) => ({ slug: mod.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const mod = cpModules.find((m) => m.slug === slug);
  if (!mod) return { title: "Not found" };
  const cleanName = mod.name.replace(/\n/g, " ");
  return {
    title: `${cleanName} — Atiphan`,
    description: mod.overview,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const mod = cpModules.find((m) => m.slug === slug);
  if (!mod) notFound();

  // Adjacent modules for the prev/next footer nav
  const idx = cpModules.findIndex((m) => m.slug === slug);
  const next = cpModules[(idx + 1) % cpModules.length];

  return (
    <main className="relative mx-auto max-w-230 px-5 pb-24 pt-14 md:px-10 md:pt-20">
      {/* Back link */}
      <Link
        href="/#work"
        className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted transition hover:text-violet"
      >
        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
        Back to work
      </Link>

      {/* Header */}
      <header className="mt-8 border-b border-border-soft pb-10 md:mt-12 md:pb-14">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-border-strong bg-(--pill-bg) px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-violet">
            {mod.label}
          </span>
          <span className="font-mono text-[11px] text-text-dim">{mod.year}</span>
        </div>
        <h1 className="whitespace-pre-line font-display text-[36px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[56px]">
          {mod.name}
        </h1>
        <p className="mt-5 max-w-180 text-[15px] leading-[1.7] text-text-muted md:text-[17px]">
          {mod.overview}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
          <span className="text-text-dim">Role</span>
          <span className="text-violet">{mod.role}</span>
        </div>
      </header>

      {/* Case study sections */}
      <div className="mt-10 space-y-12 md:mt-14 md:space-y-16">
        <Section heading="The problem">{mod.problem}</Section>
        <Section heading="What I built">{mod.solution}</Section>
        <Section heading="Outcome">{mod.outcome}</Section>

        {/* Tech stack */}
        <section>
          <SectionHeading>Tech stack</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {mod.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border-soft bg-bg-card-2 px-3 py-1.5 text-xs text-text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Screenshot placeholders */}
        <section>
          <SectionHeading>Screens</SectionHeading>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {mod.screenshots.map((s, i) => (
              <figure
                key={i}
                className="overflow-hidden rounded-2xl border border-border-soft bg-bg-card"
              >
                <div
                  className="aspect-4/3 w-full"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 35%, rgba(168, 85, 247, 0.28), transparent 60%), linear-gradient(135deg, #2a1147, #1a0f2e)",
                  }}
                />
                <figcaption className="px-5 py-3 text-[12.5px] text-text-muted">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      {/* Next module */}
      <footer className="mt-20 border-t border-border-soft pt-10 md:mt-24">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
          Next case study
        </div>
        <Link
          href={`/work/${next.slug}`}
          className="group mt-3 inline-flex items-center gap-3 font-display text-[24px] font-semibold tracking-tight transition hover:text-violet md:text-[32px]"
        >
          <span className="whitespace-pre-line">{next.name.replace(/\n/g, " ")}</span>
          <ChevronRight
            className="size-6 shrink-0 transition-transform group-hover:translate-x-1"
            strokeWidth={2.2}
          />
        </Link>
      </footer>
    </main>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <SectionHeading>{heading}</SectionHeading>
      <p className="max-w-180 text-[15px] leading-[1.7] text-text-muted md:text-[16px]">
        {children}
      </p>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-display text-[20px] font-semibold tracking-tight md:text-[24px]">
      {children}
    </h2>
  );
}
