import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ChevronRight,
  FileText,
  PenLine,
  Video,
  type LucideIcon,
} from "lucide-react";
import { assignments, personal } from "@/data/portfolio";
import { PrintButton } from "@/components/PrintButton";
import { ResumeContent } from "@/components/ResumeContent";
import { VideoContent, VIDEO_SRC } from "@/components/VideoContent";
import { Download } from "lucide-react";

/**
 * Read essay.md and split into title / topic / paragraphs.
 * Convention: first block is `# Title`, second block is the topic line,
 * remaining blocks (separated by blank lines) are body paragraphs.
 * Paragraphs prefixed with `> ` render as pull-quotes.
 */
type Paragraph = { type: "prose" | "quote"; text: string };

function loadEssay() {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "data", "essay.md"),
    "utf8",
  );
  const blocks = raw
    .trim()
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);
  const title = (blocks[0] ?? "").replace(/^#\s+/, "");
  const topic = blocks[1] ?? "";
  const body: Paragraph[] = blocks.slice(2).map((block) => {
    if (block.startsWith("> ")) {
      return { type: "quote", text: block.replace(/^>\s+/, "") };
    }
    return { type: "prose", text: block };
  });
  return { title, topic, body };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const ASSIGNMENT_ICONS: Record<string, LucideIcon> = {
  "file-text": FileText,
  video: Video,
  "pen-line": PenLine,
};

export function generateStaticParams() {
  return assignments.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = assignments.find((a) => a.slug === slug);
  if (!item) return { title: "Not found" };
  return {
    title: `${item.title} — OYW Application`,
    description: item.description,
  };
}

export default async function AssignmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = assignments.find((a) => a.slug === slug);
  if (!item) notFound();

  const Icon = ASSIGNMENT_ICONS[item.icon] ?? FileText;

  const idx = assignments.findIndex((a) => a.slug === slug);
  const next = assignments[(idx + 1) % assignments.length];

  return (
    <main className="assignment-root relative mx-auto max-w-230 px-5 pb-24 pt-14 md:px-10 md:pt-20">
      {/* Back link */}
      <Link
        href="/#contact"
        className="no-print group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted transition hover:text-violet"
      >
        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
        Back to assignments
      </Link>

      {/* Header */}
      <header className="no-print mt-8 border-b border-border-soft pb-10 md:mt-12 md:pb-14">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-[12px] border border-border-strong bg-(--pill-bg) text-violet">
            <Icon className="size-5" strokeWidth={2} />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet">
            OYW Application
          </span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4 gap-y-5">
          <h1 className="font-display text-[36px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[56px]">
            {item.title}
          </h1>
          {(slug === "essay" || slug === "resume") && <PrintButton label="Download" />}
          {slug === "video" && (
            <a
              href={VIDEO_SRC}
              download
              className="no-print inline-flex items-center gap-2.5 rounded-xl bg-violet-2 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_32px_-8px_var(--violet-glow)] transition hover:-translate-y-px hover:shadow-[0_12px_40px_-8px_var(--violet-glow)]"
            >
              <Download className="size-4" strokeWidth={2} />
              Download
            </a>
          )}
        </div>
      </header>

      {/* Content area — essay renders body, resume renders CV, video renders player, others placeholder */}
      {slug === "essay" ? (
        <EssayContent />
      ) : slug === "resume" ? (
        <ResumeContent />
      ) : slug === "video" ? (
        <VideoContent />
      ) : (
        <section className="mt-10 md:mt-14">
          <div className="rounded-3xl border border-dashed border-border-strong bg-bg-card/40 p-8 text-center md:p-14">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full border border-border-strong bg-(--pill-bg) text-violet">
              <Icon className="size-5" strokeWidth={2} />
            </div>
            <div className="mb-2 font-display text-[20px] font-semibold tracking-tight md:text-[24px]">
              Content placeholder
            </div>
            <p className="mx-auto max-w-130 text-[13.5px] leading-[1.65] text-text-muted md:text-[14.5px]">
              Add the actual {item.title.toLowerCase()} content here — embed,
              upload link, or written body. This page is wired up and ready;
              just drop the material in.
            </p>
          </div>
        </section>
      )}

      {/* Next assignment */}
      <footer className="no-print mt-20 border-t border-border-soft pt-10 md:mt-24">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
          Next material
        </div>
        <Link
          href={`/assignments/${next.slug}`}
          className="group mt-3 inline-flex items-center gap-3 font-display text-[24px] font-semibold tracking-tight transition hover:text-violet md:text-[32px]"
        >
          <span>{next.title}</span>
          <ChevronRight
            className="size-6 shrink-0 transition-transform group-hover:translate-x-1"
            strokeWidth={2.2}
          />
        </Link>
      </footer>
    </main>
  );
}

function EssayContent() {
  const { title, topic, body } = loadEssay();
  // Topic line in essay.md is "<category> — <question>"; the category becomes
  // the tag, the question shows below the title. If no em-dash, fall back.
  const [categoryRaw, ...questionParts] = topic.split("—");
  const category = categoryRaw.trim() || topic;
  const question = questionParts.join("—").trim();

  return (
    <article className="essay-root mt-10 md:mt-14">
      <div className="essay-card rounded-3xl border border-border-strong bg-bg-card p-7 shadow-[0_0_80px_-30px_var(--violet-glow)] md:p-12 lg:p-14">
        {/* Category tag — screen only (hidden in print) */}
        <span className="essay-category no-print mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-(--pill-bg) px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-violet">
          <span className="size-1.5 rounded-full bg-violet shadow-[0_0_8px_var(--violet)]" />
          {category}
        </span>

        {/* Title + question */}
        <div className="mb-8 md:mb-12">
          <h2 className="essay-title font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[40px]">
            {title}
          </h2>
          {question && (
            <div className="essay-question mt-3 max-w-180 text-[14px] leading-[1.55] text-text-muted md:text-[15.5px]">
              {question}
            </div>
          )}
        </div>

        {/* Body paragraphs */}
        <div className="essay-body space-y-5 text-[14.5px] leading-[1.8] text-text md:text-[16px] md:leading-[1.85]">
          {body.map((p, i) =>
            p.type === "quote" ? (
              <blockquote
                key={i}
                className="essay-quote my-8 max-w-180 border-l-2 border-violet pl-5 font-display text-[18px] font-medium leading-snug text-violet md:my-10 md:text-[22px]"
              >
                {p.text}
              </blockquote>
            ) : (
              <p key={i} className="max-w-180">
                {p.text}
              </p>
            ),
          )}
        </div>

        {/* Signature — plain text, right-aligned */}
        <div className="essay-signature mt-10 border-t border-border-soft pt-6 text-right md:mt-14 md:pt-8">
          <div className="text-[15px] text-text md:text-[17px]">
            {personal.fullName}
          </div>
        </div>
      </div>
    </article>
  );
}
