# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language

All conversation in this repository is in **English**.

## Commands

```bash
npm install      # one-time install
npm run dev      # Next dev server → http://localhost:3000
npm run build    # production build
npm start        # serve production build
npm run lint     # ESLint (next core-web-vitals + typescript)
```

No test runner is configured.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Framer Motion · Lucide React. Path alias `@/*` resolves to repo root (see `tsconfig.json`). `metadataBase` reads `NEXT_PUBLIC_SITE_URL` when set, otherwise falls back to `http://localhost:3000`.

## Architecture

**Content lives in `data/portfolio.ts`.** Almost every piece of visible text — personal info, featured project (POCKITA), CP Group case studies (`cpModules`), experience timeline, CV body, nav items, contact tiles, astronaut popup messages — is exported from this single file as `as const` literals. Section components import from it; editing copy should not require touching JSX.

**Three routes:**
- `/` (`app/page.tsx`) — single-page portfolio composing `<Hero />`, `<About />`, `<Work />`, `<Experience />`, `<Contact />`, `<Footer />`, `<Navigation />`. Each section uses an `id` that matches an entry in `navItems` so the scroll-spy works.
- `/cv` (`app/cv/page.tsx`) — print-optimized resume rendered from `cv` in `data/portfolio.ts`. Driven by the print stylesheet in `app/globals.css` (see below).
- `/work/[slug]` (`app/work/[slug]/page.tsx`) — dynamic case-study pages. `generateStaticParams` enumerates `cpModules`, so **adding a case study = add an entry to `cpModules`** (slug, name, label, year, overview, problem, solution, outcome, tech, screenshots) and the page + metadata are produced at build.

**Client vs server components.** Page/section components are server components by default. Files that need state, effects, or browser APIs are marked `"use client"` at the top: `Navigation` (IntersectionObserver scroll-spy + mobile menu), `PhoneCarousel`, `AstronautDialog`, `PrintButton`. Don't add `"use client"` to a file that doesn't need it.

**Theme & styling — Tailwind v4 CSS-first.** There is no `tailwind.config.js`. Design tokens are CSS custom properties under `:root` in `app/globals.css` and exposed to Tailwind utilities through an `@theme inline { ... }` block. That means classes like `text-violet`, `bg-bg-card`, `border-border-strong`, `font-display`, `font-script` come from this file — if you need a new token, add it to `:root` and mirror it in `@theme inline`. Cosmetic section backgrounds (`.hero-section-bg`, `.about-section-bg`, `.contact-card-bg`, `.cp-card-art`, `.overlay-bottom-art`, `.hero-mobile-fade`) and the global star field on `body::before` also live here.

**Fonts.** Loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables on `<html>`: Inter (`--font-inter`, sans body), Space Grotesk (`--font-space-grotesk`, display), JetBrains Mono (`--font-jetbrains-mono`, mono), Sacramento (`--font-sacramento`, script accent).

**Print pipeline for `/cv`.** A large `@media print` block in `app/globals.css` is what makes the CV print to a single A4 page. It hooks on class names — `cv-root`, `cv-header`, `cv-section`, `cv-section-title`, `cv-body`, `cv-entry`, `cv-bullets`, `cv-skill-group`, `cv-meta`, plus `no-print` to hide elements on paper. When editing the CV page, preserve these class hooks; otherwise the printed PDF will break. The `PrintButton` triggers `window.print()`; users save as PDF from the print dialog.

**Utility.** `lib/utils.ts` exports `cn(...inputs)` = `twMerge(clsx(...))`. Use this for any conditional / merged class strings.

## Conventions

- Content edits → `data/portfolio.ts`, not JSX.
- New tokens → add to `:root` *and* `@theme inline` in `app/globals.css`.
- New case study → append to `cpModules` (slug must be URL-safe; it becomes the route).
- Section `id` on the `<section>` must match the entry in `navItems` for scroll-spy to track it.
- Prefer server components; reach for `"use client"` only when state / effects / browser APIs are required.
