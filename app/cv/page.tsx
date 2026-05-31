import Link from "next/link";
import { ArrowLeft, Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { PrintButton } from "@/components/PrintButton";
import { personal, cv, experience } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "CV — Atiphan Charoenphon",
  description:
    "Resume / CV for Atiphan Charoenphon — Frontend Developer × Product Designer.",
};

export default function CvPage() {
  return (
    <main className="cv-root mx-auto max-w-215 px-5 py-10 md:px-10 md:py-14">
      {/* Top bar: back + print, hidden on print */}
      <div className="no-print mb-10 flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted transition hover:text-violet"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
          Back to site
        </Link>
        <PrintButton />
      </div>

      {/* HEADER */}
      <header className="cv-header border-b border-border-soft pb-8">
        <h1 className="font-display text-[40px] font-bold leading-none tracking-[-0.02em] md:text-[52px]">
          {personal.fullName}
        </h1>
        <div className="mt-2 font-display text-[18px] text-violet md:text-[20px]">
          {personal.role.primary} × {personal.role.secondary}
        </div>
        <div className="cv-meta mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12.5px] text-text-muted">
          <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-1.5 hover:text-violet">
            <Mail className="size-3.5" strokeWidth={2} />
            {personal.email}
          </a>
          <a href={`tel:${personal.phoneRaw}`} className="inline-flex items-center gap-1.5 hover:text-violet">
            <Phone className="size-3.5" strokeWidth={2} />
            {personal.phone}
          </a>
          <a href={personal.linkedin} className="inline-flex items-center gap-1.5 hover:text-violet">
            <Linkedin className="size-3.5" strokeWidth={2} />
            {personal.linkedinHandle}
          </a>
          <a href={personal.github} className="inline-flex items-center gap-1.5 hover:text-violet">
            <Github className="size-3.5" strokeWidth={2} />
            {personal.githubHandle}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" strokeWidth={2} />
            {personal.location}
          </span>
        </div>
      </header>

      {/* SUMMARY */}
      <CvSection title="Summary">
        <p className="cv-body leading-[1.65] text-text-muted">{cv.summary}</p>
      </CvSection>

      {/* SKILLS */}
      <CvSection title="Skills">
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(cv.skills).map(([group, items]) => (
            <div key={group}>
              <div className="cv-skill-group font-mono text-[10px] uppercase tracking-[0.18em] text-violet">
                {group.replace(/_/g, " ")}
              </div>
              <div className="mt-1.5 cv-body leading-[1.65] text-text-muted">
                {(items as readonly string[]).join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </CvSection>

      {/* EXPERIENCE */}
      <CvSection title="Experience">
        <div className="space-y-7">
          {cv.experience.map((job) => (
            <article key={job.title} className="cv-entry">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-[16px] font-semibold md:text-[17px]">
                  {job.title}
                </h3>
                <div className="font-mono text-[11px] text-text-dim">{job.date}</div>
              </div>
              <div className="mt-0.5 text-[13px] text-violet">{job.org}</div>
              <ul className="cv-bullets mt-2.5 space-y-1.5 pl-5">
                {job.bullets.map((b, i) => (
                  <li key={i} className="cv-body list-disc leading-[1.6] text-text-muted">
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </CvSection>

      {/* EDUCATION */}
      <CvSection title="Education">
        <div className="space-y-4">
          {cv.education.map((ed) => (
            <article key={ed.degree} className="cv-entry">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-[15px] font-semibold md:text-[16px]">
                  {ed.degree}
                </h3>
                <div className="font-mono text-[11px] text-text-dim">{ed.date}</div>
              </div>
              <div className="text-[13px] text-violet">{ed.school}</div>
              <div className="cv-body mt-0.5 text-[12.5px] text-text-muted">{ed.detail}</div>
            </article>
          ))}
        </div>
      </CvSection>

      {/* PUBLICATIONS */}
      <CvSection title="Publications">
        <div className="space-y-3">
          {cv.publications.map((p) => (
            <article key={p.title} className="cv-entry">
              <div className="font-display text-[15px] font-semibold">{p.title}</div>
              <div className="cv-body mt-0.5 text-[12.5px] text-text-muted">
                {p.venue} · {p.role} · {p.year}
              </div>
            </article>
          ))}
        </div>
      </CvSection>
    </main>
  );
}

function CvSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cv-section mt-8 md:mt-10">
      <h2 className="cv-section-title mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-violet">
        {title}
      </h2>
      {children}
    </section>
  );
}
