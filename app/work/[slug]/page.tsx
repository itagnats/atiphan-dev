import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { selectedWork } from "@/data/portfolio";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ============================================================
   RETAINED BUT DISABLED — 2026-09-21.

   The case-study write-ups were trimmed to overview / outcome / tech, which
   made a page per module thinner than the card linking to it. Everything moved
   onto the cards in the Work section (components/WorkModuleGrid.tsx), and these
   pages were switched off rather than deleted, because the detail is worth
   adding back once there is enough to say.

   To revive: return `selectedWork.map((mod) => ({ slug: mod.slug }))` below,
   delete `dynamicParams = false`, restore the "Read more" link in
   WorkModuleGrid, and put the /work/* entries back in app/sitemap.ts.

   BOTH lines below are load-bearing. Returning [] on its own still lets
   Next.js render these pages on demand at request time; dynamicParams = false
   is what turns an unlisted slug into a 404. This mirrors how the One Young
   World route in app/assignments/[slug] is held open but unreachable.
   ============================================================ */
export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const mod = selectedWork.find((m) => m.slug === slug);
  if (!mod) return { title: "Not found" };
  const cleanName = mod.name.replace(/\n/g, " ");
  return {
    title: cleanName,
    description: mod.overview,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const mod = selectedWork.find((m) => m.slug === slug);
  if (!mod) notFound();

  // Adjacent modules for the prev/next footer nav
  const idx = selectedWork.findIndex((m) => m.slug === slug);
  const next = selectedWork[(idx + 1) % selectedWork.length];

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

        {/* There is deliberately no "Screens" section. It used to render three
            empty gradient rectangles per module with a caption underneath —
            placeholders that were never filled in, and which read to a visitor
            as images that failed to load. The write-up carries the case study
            on its own. If real screens are ever added, they need to be actual
            files, and CP Group material will need redacting first. */}
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
