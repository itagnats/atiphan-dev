import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { personal, oywResume } from "@/data/portfolio";

/**
 * OYW-tailored resume. Reviewers scan for leadership and impact, not
 * stack — so the order is: Profile → Leadership & Impact → Volunteer/CSR
 * → Professional Experience → Education → Skills. Skills last on purpose.
 *
 * Reuses the `.cv-root` / `.cv-*` class hooks so the existing print
 * stylesheet still applies for the Download button on the assignment page.
 */
export function ResumeContent() {
  return (
    <div className="cv-root mt-10 md:mt-14">
      {/* HEADER — name + contact, no role-tagline (the profile carries the message) */}
      <header className="cv-header relative overflow-hidden rounded-2xl bg-[rgba(120,60,220,0.07)] p-8 pb-9 pr-32 shadow-[0_0_60px_-20px_rgba(139,92,246,0.25)] md:p-12 md:pb-11 md:pr-48">
        <div className="absolute right-6 top-6 size-24 overflow-hidden rounded-full border-2 border-violet/30 shadow-[0_0_24px_-4px_var(--violet-glow)] md:right-8 md:top-8 md:size-36">
          <Image
            src="/images/profile.jpg"
            alt={personal.fullName}
            width={144}
            height={144}
            priority
            className="size-full object-cover"
          />
        </div>

        <h1 className="font-display text-[36px] font-bold leading-none tracking-[-0.02em] text-white md:text-[52px]">
          {personal.fullName}
        </h1>
        <div className="mt-3 font-display text-[16px] text-violet md:text-[18px]">
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
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-violet/60" strokeWidth={2} />
            {personal.location}
          </span>
        </div>
      </header>

      {/* 1. PROFILE */}
      <ResumeSection title="Profile" icon="◎">
        <p className="cv-body leading-[1.75] text-text-muted">{oywResume.profile}</p>
      </ResumeSection>

      {/* 2. LEADERSHIP & IMPACT — the main draw */}
      <ResumeSection title="Leadership & Impact" icon="✦">
        <ResumeEntries entries={oywResume.leadership} timeline />
      </ResumeSection>

      {/* 3. VOLUNTEER / CSR / SUSTAINABILITY */}
      <ResumeSection title="Volunteer / CSR" icon="❍">
        <ResumeEntries entries={oywResume.volunteer} timeline />
      </ResumeSection>

      {/* 4. PROFESSIONAL EXPERIENCE — concise, achievement-focused */}
      <ResumeSection title="Professional Experience" icon="◉">
        <ResumeEntries entries={oywResume.experience} timeline />
      </ResumeSection>

      {/* 5. EDUCATION */}
      <ResumeSection title="Education" icon="◇">
        <div className="space-y-4">
          {oywResume.education.map((ed) => (
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
      </ResumeSection>

      {/* PUBLICATIONS — sits between Education and Skills as a credential */}
      <ResumeSection title="Publications" icon="◆">
        <div className="space-y-3">
          {oywResume.publications.map((p) => (
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
      </ResumeSection>

      {/* 6. SKILLS — last, table stakes */}
      <ResumeSection title="Skills" icon="◈">
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(oywResume.skills).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-border-soft bg-[rgba(120,60,220,0.05)] px-4 py-3.5">
              <div className="cv-skill-group font-mono text-[10px] uppercase tracking-[0.2em] text-violet">
                {group}
              </div>
              <div className="mt-2 cv-body text-[13px] leading-[1.7] text-text-muted">
                {(items as readonly string[]).join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </ResumeSection>
    </div>
  );
}

interface ResumeEntry {
  title: string;
  org: string;
  date: string;
  bullets: ReadonlyArray<string>;
}

function ResumeEntries({
  entries,
  timeline,
}: {
  entries: ReadonlyArray<ResumeEntry>;
  timeline?: boolean;
}) {
  return (
    <div className="relative space-y-0">
      {timeline && (
        <div aria-hidden className="absolute left-1.25 top-2 bottom-2 w-px bg-linear-to-b from-violet/40 via-violet/20 to-transparent" />
      )}
      {entries.map((entry, idx) => (
        <article
          key={`${entry.title}-${entry.org}`}
          className={`cv-entry relative ${timeline ? "pl-8" : ""} ${idx !== 0 ? "mt-8" : ""}`}
        >
          {timeline && (
            <span aria-hidden className="absolute left-0 top-1.5 flex size-2.75 items-center justify-center rounded-full border border-violet/60 bg-[#07040f] shadow-[0_0_8px_2px_rgba(139,92,246,0.3)]">
              <span className="size-1.25 rounded-full bg-violet" />
            </span>
          )}
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-[16px] font-semibold text-white md:text-[17px]">
              {entry.title}
            </h3>
            {entry.date && (
              <div className="font-mono text-[10px] tracking-[0.12em] text-violet/50">{entry.date}</div>
            )}
          </div>
          {entry.org && (
            <div className="mt-0.5 text-[13px] font-medium text-violet">{entry.org}</div>
          )}
          {entry.bullets.length > 0 && (
            <ul className="cv-bullets mt-2.5 space-y-1.5 pl-4">
              {entry.bullets.map((b, i) => (
                <li key={i} className="cv-body relative list-none text-[13px] leading-[1.65] text-text-muted before:absolute before:-left-4 before:top-[0.55em] before:size-1 before:rounded-full before:bg-violet/40 before:content-['']">
                  {b}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

function ResumeSection({
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
