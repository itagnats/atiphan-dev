"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Home,
  User,
  Briefcase,
  Activity,
  Mail,
  Menu,
  X,
  ChevronRight,
  Github,
  Linkedin,
  type LucideIcon,
} from "lucide-react";
import { navItems, personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { AstronautDialog } from "@/components/AstronautDialog";

const NAV_ICONS: Record<string, LucideIcon> = {
  home: Home,
  user: User,
  briefcase: Briefcase,
  activity: Activity,
  mail: Mail,
};

export function Navigation() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setMenuOpen(false);
    setDialogOpen(true);
  };

  // Scroll-spy with IntersectionObserver
  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Close mobile menu on hash change (scroll into section)
  useEffect(() => {
    const closeOnHash = () => setMenuOpen(false);
    window.addEventListener("hashchange", closeOnHash);
    return () => window.removeEventListener("hashchange", closeOnHash);
  }, []);

  return (
    <>
      {/* ============================================================
          DESKTOP SIDE RAIL
          ============================================================ */}
      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 rounded-[20px] border border-border-strong bg-[rgba(20,8,33,0.85)] p-2.5 backdrop-blur-md md:flex">
        {navItems.map((item) => {
          const Icon = NAV_ICONS[item.icon];
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "flex h-16 w-20 flex-col items-center justify-center gap-1 rounded-[14px] no-underline transition-all",
                isActive
                  ? "bg-violet/15 text-violet"
                  : "text-text-muted hover:bg-violet/10 hover:text-text",
              )}
            >
              <Icon className="size-4.5" strokeWidth={2} />
              <span className="text-[9px] uppercase tracking-[0.08em]">{item.label}</span>
            </a>
          );
        })}
        <div className="mx-2 my-1 h-px bg-border-soft" />
        <button
          onClick={openDialog}
          aria-label="Open astronaut dialog"
          className="nav-pulse mx-auto mt-1.5 mb-0.5 block size-10 cursor-pointer overflow-hidden rounded-full border border-border-strong shadow-[0_0_16px_var(--violet-glow)] transition hover:shadow-[0_0_24px_var(--violet-glow)]"
        >
          <Image
            src="/images/avatar.webp"
            alt="Avatar"
            width={40}
            height={40}
            priority
            className="size-full object-cover"
          />
        </button>
      </nav>

      {/* ============================================================
          MOBILE HAMBURGER BUTTON (floating, over hero image)
          ============================================================ */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        className="fixed right-4 top-4 z-70 flex size-12 items-center justify-center rounded-full border border-border-strong bg-[rgba(20,8,33,0.85)] text-text backdrop-blur-md md:hidden"
      >
        <Menu className="size-5.5" strokeWidth={2} />
      </button>

      {/* ============================================================
          MOBILE OVERLAY MENU
          ============================================================ */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-80 flex items-start justify-center overflow-y-auto bg-[rgba(10,6,18,0.65)] px-4 pb-4 pt-19 backdrop-blur-sm md:hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMenuOpen(false);
          }}
        >
          <div className="overlay-bottom-art relative w-full max-w-90 rounded-3xl border border-border-strong bg-[rgba(15,8,28,0.96)] px-4 pb-6 pt-5">
            {/* Header: avatar + name + close */}
            <div className="relative z-10 mb-4 flex items-start justify-between border-b border-border-soft pb-4">
              <div className="flex items-center gap-3.5">
                <button
                  onClick={openDialog}
                  aria-label="Open astronaut dialog"
                  className="nav-pulse size-15 shrink-0 cursor-pointer overflow-hidden rounded-full border border-border-strong transition hover:scale-105"
                >
                  <Image
                    src="/images/avatar.webp"
                    alt="Avatar"
                    width={60}
                    height={60}
                    className="size-full object-cover"
                  />
                </button>
                <div>
                  <div className="font-display text-lg font-medium">{personal.name}</div>
                  <div className="text-xs leading-snug text-text-muted">
                    {personal.role.primary}
                    <br />× {personal.role.secondary}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex size-9 items-center justify-center text-text"
              >
                <X className="size-6" strokeWidth={2} />
              </button>
            </div>

            {/* Items */}
            <nav className="relative z-10 flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = NAV_ICONS[item.icon];
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3.5 rounded-[14px] px-4 py-3.5 font-display text-lg font-medium no-underline transition",
                      isActive ? "bg-violet/20 text-violet" : "text-text hover:bg-violet/6",
                    )}
                  >
                    <span className={cn("flex size-6 items-center justify-center", isActive ? "text-violet" : "text-text-muted")}>
                      <Icon className="size-5" strokeWidth={2} />
                    </span>
                    <span className="flex-1">{item.label}</span>
                    {isActive ? (
                      <span className="size-2 rounded-full bg-violet shadow-[0_0_10px_var(--violet)]" />
                    ) : (
                      <ChevronRight className="size-4 text-text-dim" strokeWidth={2} />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Socials */}
            <div className="relative z-10 mt-5 flex gap-3 border-t border-border-soft pt-5">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-11 items-center justify-center rounded-full border border-border-soft bg-[rgba(26,15,46,0.7)] text-text transition hover:border-border-strong hover:bg-violet/12"
              >
                <Github className="size-4.5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center rounded-full border border-border-soft bg-[rgba(26,15,46,0.7)] text-text transition hover:border-border-strong hover:bg-violet/12"
              >
                <Linkedin className="size-4.5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="flex size-11 items-center justify-center rounded-full border border-border-soft bg-[rgba(26,15,46,0.7)] text-text transition hover:border-border-strong hover:bg-violet/12"
              >
                <Mail className="size-4.5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          ASTRONAUT DIALOG POPUP (opens on avatar click)
          ============================================================ */}
      <AstronautDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
