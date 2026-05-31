import Link from "next/link";
import { Download, Mail, Phone, Linkedin, Github, type LucideIcon } from "lucide-react";
import { SectionHead } from "@/components/SectionHead";
import { contactCopy, contactTiles } from "@/data/portfolio";

const TILE_ICONS: Record<string, LucideIcon> = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  phone: Phone,
};

export function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-16 md:py-16">
        <SectionHead num="04" label="Contact" />

        <div className="contact-card-bg relative min-h-145 overflow-hidden rounded-3xl border border-border-soft p-8 md:p-14">
          <div className="relative z-10 flex max-w-145 flex-col">
            <h2 className="mb-4 font-display text-[32px] font-bold leading-[1.04] tracking-[-0.03em] md:text-[56px]">
              {contactCopy.headline.line1}{" "}
              <span className="text-violet">{contactCopy.headline.line2}</span>
            </h2>
            <p className="mb-5 max-w-115 text-[14px] leading-[1.7] text-text-muted md:mb-7 md:text-[15px]">
              {contactCopy.blurb}
            </p>

            <Link
              href="/cv"
              className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-xl bg-violet-2 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_32px_-8px_var(--violet-glow)] transition hover:-translate-y-px hover:shadow-[0_12px_40px_-8px_var(--violet-glow)] md:mb-8"
            >
              <Download className="size-4" strokeWidth={2} />
              View CV
            </Link>

            <div className="grid grid-cols-1 gap-2.5 md:gap-3 md:grid-cols-[repeat(2,minmax(220px,260px))]">
              {contactTiles.map((tile) => {
                const Icon = TILE_ICONS[tile.icon] ?? Mail;
                return (
                  <a
                    key={tile.label}
                    href={tile.href}
                    target={tile.href.startsWith("http") ? "_blank" : undefined}
                    rel={tile.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3.5 rounded-2xl border border-border-soft bg-[rgba(15,8,28,0.7)] px-4 py-3.5 text-text backdrop-blur-md transition hover:translate-x-0.5 hover:border-border-strong hover:bg-violet/12"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-border-strong bg-(--pill-bg) text-violet">
                      <Icon className="size-4.5" strokeWidth={2} />
                    </div>
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet">
                        {tile.label}
                      </div>
                      <div className="truncate text-[13px] text-text">{tile.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
