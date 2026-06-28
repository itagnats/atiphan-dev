import Link from "next/link";
import { ArrowLeft, Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { PrintButton } from "@/components/PrintButton";
import { personal, cv } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "CV — Atiphan Charoenphon",
  description:
    "Resume / CV for Atiphan Charoenphon — Frontend Developer × Product Designer.",
};

export default function CvPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07040f]">
      {/* Star field */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        {/* Static star dots via box-shadow trick using pseudo-like spans */}
        <span className="absolute inset-0 bg-[radial-gradient(1px_1px_at_10%_15%,rgba(255,255,255,0.55)_0%,transparent_100%),radial-gradient(1px_1px_at_25%_40%,rgba(255,255,255,0.4)_0%,transparent_100%),radial-gradient(1.5px_1.5px_at_40%_8%,rgba(255,255,255,0.6)_0%,transparent_100%),radial-gradient(1px_1px_at_55%_30%,rgba(255,255,255,0.35)_0%,transparent_100%),radial-gradient(1px_1px_at_70%_55%,rgba(255,255,255,0.5)_0%,transparent_100%),radial-gradient(1.5px_1.5px_at_80%_12%,rgba(255,255,255,0.65)_0%,transparent_100%),radial-gradient(1px_1px_at_90%_70%,rgba(255,255,255,0.4)_0%,transparent_100%),radial-gradient(1px_1px_at_15%_75%,rgba(255,255,255,0.45)_0%,transparent_100%),radial-gradient(1px_1px_at_35%_90%,rgba(255,255,255,0.3)_0%,transparent_100%),radial-gradient(1.5px_1.5px_at_60%_80%,rgba(255,255,255,0.55)_0%,transparent_100%),radial-gradient(1px_1px_at_5%_50%,rgba(255,255,255,0.4)_0%,transparent_100%),radial-gradient(1px_1px_at_48%_60%,rgba(255,255,255,0.3)_0%,transparent_100%),radial-gradient(1px_1px_at_75%_35%,rgba(255,255,255,0.45)_0%,transparent_100%),radial-gradient(1px_1px_at_92%_20%,rgba(255,255,255,0.5)_0%,transparent_100%),radial-gradient(1.5px_1.5px_at_20%_25%,rgba(255,255,255,0.35)_0%,transparent_100%)]" />
        {/* Nebula glows */}
        <span className="absolute left-[-20%] top-[-10%] h-150 w-150 rounded-full bg-violet/10 blur-[120px]" />
        <span className="absolute right-[-15%] top-[30%] h-125 w-125 rounded-full bg-indigo-600/8 blur-[100px]" />
        <span className="absolute bottom-[-10%] left-[30%] h-100 w-100 rounded-full bg-violet/8 blur-[80px]" />
      </div>

      <main className="cv-root relative z-10 mx-auto max-w-215 px-5 py-10 md:px-10 md:py-14">

        {/* Top bar */}
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
        <header className="cv-header relative overflow-hidden rounded-2xl border border-violet/20 bg-[rgba(120,60,220,0.07)] p-8 pb-9 shadow-[0_0_60px_-20px_rgba(139,92,246,0.25)] md:p-12 md:pb-11">
          {/* Corner constellation dots */}
          <span aria-hidden className="absolute right-6 top-6 flex gap-1.5 opacity-40">
            <span className="size-1 rounded-full bg-violet" />
            <span className="size-1.5 rounded-full bg-violet/60" />
            <span className="size-1 rounded-full bg-violet" />
          </span>

          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet/60 mb-3">
            ✦ Curriculum Vitae
          </div>
          <h1 className="font-display text-[40px] font-bold leading-none tracking-[-0.02em] text-white md:text-[56px]">
            {personal.fullName}
          </h1>
          <div className="mt-3 font-display text-[17px] text-violet md:text-[20px]">
            {personal.role.primary}
            {personal.role.secondary && (
              <>
                <span className="mx-2 text-violet/40">×</span>
                {personal.role.secondary}
              </>
            )}
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-linear-to-r from-violet/30 to-transparent" />
            <span className="size-1 rounded-full bg-violet/50" />
            <span className="h-px flex-1 bg-linear-to-l from-violet/30 to-transparent" />
          </div>

          <div className="cv-meta flex flex-wrap gap-x-6 gap-y-2.5 text-[12.5px] text-text-muted">
            <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-1.5 transition hover:text-violet">
              <Mail className="size-3.5 text-violet/60" strokeWidth={2} />
              {personal.email}
            </a>
            <a href={`tel:${personal.phoneRaw}`} className="inline-flex items-center gap-1.5 transition hover:text-violet">
              <Phone className="size-3.5 text-violet/60" strokeWidth={2} />
              {personal.phone}
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-violet">
              <Linkedin className="size-3.5 text-violet/60" strokeWidth={2} />
              {personal.linkedinHandle}
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-violet">
              <Github className="size-3.5 text-violet/60" strokeWidth={2} />
              {personal.githubHandle}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-violet/60" strokeWidth={2} />
              {personal.location}
            </span>
          </div>
        </header>

        {/* SUMMARY */}
        <CvSection title="Summary" icon="◎">
          <p className="cv-body leading-[1.75] text-text-muted">{cv.summary}</p>
        </CvSection>

        {/* SKILLS */}
        <CvSection title="Skills" icon="◈">
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(cv.skills).map(([group, items]) => (
              <div key={group} className="rounded-xl border border-border-soft bg-[rgba(120,60,220,0.05)] px-4 py-3.5">
                <div className="cv-skill-group font-mono text-[10px] uppercase tracking-[0.2em] text-violet">
                  {group.replace(/_/g, " ")}
                </div>
                <div className="mt-2 cv-body text-[13px] leading-[1.7] text-text-muted">
                  {(items as readonly string[]).join(" · ")}
                </div>
              </div>
            ))}
          </div>
        </CvSection>

        {/* EXPERIENCE */}
        <CvSection title="Experience" icon="◉">
          <div className="relative space-y-0">
            {/* Timeline line */}
            <div aria-hidden className="absolute left-1.25 top-2 bottom-2 w-px bg-linear-to-b from-violet/40 via-violet/20 to-transparent" />
            {cv.experience.map((job, idx) => (
              <article key={job.title} className={`cv-entry relative pl-8 ${idx !== 0 ? "mt-8" : ""}`}>
                {/* Timeline dot */}
                <span aria-hidden className="absolute left-0 top-1.5 flex size-2.75 items-center justify-center rounded-full border border-violet/60 bg-[#07040f] shadow-[0_0_8px_2px_rgba(139,92,246,0.3)]">
                  <span className="size-1.25 rounded-full bg-violet" />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-[16px] font-semibold text-white md:text-[17px]">
                    {job.title}
                  </h3>
                  <div className="font-mono text-[10px] tracking-[0.12em] text-violet/50">{job.date}</div>
                </div>
                <div className="mt-0.5 text-[13px] font-medium text-violet">{job.org}</div>
                <ul className="cv-bullets mt-2.5 space-y-1.5 pl-4">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="cv-body relative list-none text-[13px] leading-[1.65] text-text-muted before:absolute before:-left-4 before:top-[0.55em] before:size-1 before:rounded-full before:bg-violet/40 before:content-['']">
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </CvSection>

        {/* EDUCATION */}
        <CvSection title="Education" icon="◇">
          <div className="space-y-4">
            {cv.education.map((ed) => (
              <article key={ed.degree} className="cv-entry rounded-xl border border-border-soft bg-[rgba(120,60,220,0.04)] px-5 py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-[15px] font-semibold text-white md:text-[16px]">
                    {ed.degree}
                  </h3>
                  <div className="font-mono text-[10px] tracking-[0.12em] text-violet/50">{ed.date}</div>
                </div>
                <div className="mt-0.5 text-[13px] font-medium text-violet">{ed.school}</div>
                <div className="cv-body mt-1 text-[12.5px] leading-[1.6] text-text-muted">{ed.detail}</div>
              </article>
            ))}
          </div>
        </CvSection>

        {/* PUBLICATIONS */}
        <CvSection title="Publications" icon="◆">
          <div className="space-y-3">
            {cv.publications.map((p) => (
              <article key={p.title} className="cv-entry rounded-xl border border-border-soft bg-[rgba(120,60,220,0.04)] px-5 py-4">
                <div className="font-display text-[15px] font-semibold text-white">{p.title}</div>
                <div className="cv-body mt-1 text-[12.5px] text-text-muted">
                  {p.venue}
                  <span className="mx-1.5 text-violet/40">·</span>
                  {p.role}
                  <span className="mx-1.5 text-violet/40">·</span>
                  {p.year}
                </div>
              </article>
            ))}
          </div>
        </CvSection>

        {/* Footer signature */}
        <div className="no-print mt-14 flex items-center gap-3 opacity-40">
          <span className="h-px flex-1 bg-linear-to-r from-transparent via-violet/30 to-transparent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet">✦ ita-dev ✦</span>
          <span className="h-px flex-1 bg-linear-to-r from-transparent via-violet/30 to-transparent" />
        </div>

      </main>
    </div>
  );
}

function CvSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cv-section mt-10 md:mt-12">
      <div className="mb-5 flex items-center gap-3">
        <span aria-hidden className="font-mono text-[12px] text-violet/50">{icon}</span>
        <h2 className="cv-section-title font-mono text-[11px] uppercase tracking-[0.25em] text-violet">
          {title}
        </h2>
        <span className="h-px flex-1 bg-linear-to-r from-violet/25 to-transparent" />
      </div>
      {children}
    </section>
  );
}
