# Prompt — build my CV as an editable design

Copy everything below the line into Claude Design (or any Claude session with
the `design` skill). It carries your real content verbatim, so nothing has to
be invented or remembered.

Generated 2026-09-20 from `data/portfolio.ts`. **If you edit the CV data on the
site, update this file too, or the two will drift.**

---

I need my CV designed as a two-page A4 document that I can edit myself
afterwards. Please build it as a design canvas with one artboard per page.

## Hard requirements

- **A4 portrait, exactly two pages.** 210 × 297 mm, margins 10 mm top/bottom,
  12 mm left/right.
- **The text must be real, selectable text — never outlined, never an image.**
  This CV goes through applicant tracking systems that extract text from the
  PDF. If the words cannot be copy-pasted out of the exported file, the CV is
  useless to me. This is the single most important constraint.
- **Page 1 must end after the "Store Layout Designer" role.** Never split a job
  or a degree across the page break, and never leave a section heading alone at
  the bottom of a page.
- Body text no smaller than **8.5 pt**. I would rather run slightly long than
  become unreadable.

## Visual direction

Clean, print-first, restrained. White background, near-black body text
(`#111111`), mid-grey secondary text (`#3f3f46`), and a single violet accent
(`#6d28d9`) used **only** for section labels, organisation names and links.

- Headings: **Space Grotesk**, semibold.
- Body: **Inter**, regular.
- Dates, section labels and URLs: **JetBrains Mono**, uppercase for labels with
  wide letter-spacing (~0.15em) at ~7 pt.
- Hairline rules in `#d4d4d8` only where they genuinely separate things. No
  boxes, no shading, no icons beyond small contact glyphs, no photo.
- Section labels are small mono uppercase (SUMMARY, SKILLS, EXPERIENCE…), not
  large headings — the content should dominate, not the furniture.

## Layout

**Header** — a circular photo (~20 mm, thin violet ring) above the name, then
the name large, the role beneath it in violet, then one compact row of contact
details. Thai employers conventionally expect a photo on a CV. No "Curriculum
Vitae" title; the document is self-evidently a CV and the line wastes a
centimetre.

I will supply the photo file — place it top-left of the header. If you are
producing a version for a market where CV photos are discouraged (most of the
UK, US, Canada, Australia), leave it out and close the gap.

**Skills** — two columns, each group a small mono label with its items on the
line below, separated by middots.

**Experience** — role title left, dates right-aligned on the same line,
organisation in violet underneath, then bullets.

**Selected Projects** — same shape as Experience, with the project name and a
short tagline on one line, the URL right-aligned, bullets, then a tech line.

**Education and Publications** — compact, two or three lines each.

---

# CONTENT — use exactly as written, do not rewrite or embellish

## Header

[circular photo, ~20 mm]

**Atiphan Charoenphon**
Software Developer / Business Analyst

atiphan.ch@gmail.com · +66 61 393 3559 · Bangkok
linkedin.com/in/atiphan-charoenphon-a0630b243 · github.com/itagnats

## SUMMARY

Software Developer with 3+ years of experience, frontend-focused across React and TypeScript, with strong experience in business analysis, UX, and cross-functional delivery. At CP Group, I translate business requirements into production applications, owning features across workflow design, UX/UI, frontend development, API integration, testing, and release. I have owned internal modules serving 200–1,500 employees across CP Group business divisions and regularly collaborate with users, business stakeholders, and vendors to define and refine system requirements. I also own contributions to a shared, brand-customized design system and reusable component architecture. My background in industrial product design and an M.Sc. in IT Management gives me a user- and product-oriented perspective that bridges business and engineering.

## SKILLS

**Core** — TypeScript · JavaScript (ES6+) · React · Next.js (App Router) · HTML · CSS
**Styling & Motion** — Tailwind CSS · Motion / Framer Motion · Responsive design
**State, Forms & Data** — TanStack Query · Zustand · React Hook Form · Zod · REST APIs
**Testing & Quality** — Jest · Vitest · React Testing Library · Scenario testing · SonarQube · Checkmarx (SAST)
**Tooling** — Git · GitLab · Vercel · VS Code
**Integration & Design** — SAP REST · Qsoft DMS · Supabase · Figma · Information architecture · UX research
**Data & Analysis** — Power BI · Python (pandas) · In-product reporting and dashboards · Data Analyst Level 4 (TPQI)
**Languages** — Thai (native) · English (professional working)

## EXPERIENCE

### Software Development and Testing — CP Leadership Institute, Bangkok
Jul 2023 – Present

- Own frontend development across four internal business modules serving 200–1,500 users across CP Group business divisions, working across requirements, UX/UI, frontend architecture, API integration, testing, and delivery.
- Translate business requirements into system workflows and user experiences, working directly with users, business stakeholders, and external vendors to clarify requirements, resolve edge cases, and align implementation with business processes.
- Re-architected the PMS evaluation form engine to support dynamic role assignment and evaluation workflows, removing weeks of manual setup per evaluation cycle and enabling role-based evaluation across participants.
- Designed and developed the Quotation Module end to end, including UX, information architecture, and frontend implementation, reducing quotation turnaround from 2–3 days to under 4 hours.
- Developed a bilingual Thai/English, multi-currency Invoice & Credit Note module with live FX rates and direct SAP REST integration, enabling international entities to generate documents within the system.
- Contributed to the shared frontend design system, proposing and adapting shadcn/ui into a brand-specific component system with reusable components, semantic design tokens, responsive patterns, and light/dark themes used across modules.
- Review UX, frontend architecture, and implementation quality across adjacent modules, identifying usability and technical issues and working with developers to improve consistency and maintainability.
- Support release quality through functional testing, unit testing, security/code-quality remediation, and test-case development, including structured test coverage across the modules owned by the team.

### Store Layout Designer — TD Tawandang Co., Ltd. (Carabao Group), Bangkok
Apr 2021 – Jun 2023

- Designed in-store layouts and point-of-purchase fixtures across the company's retail footprint, optimising for revenue per square metre.
- Ran the full design cycle — brief, concept, technical drawing, production handoff — with marketing, merchandising and operations stakeholders.
- Spatial and user-flow design work that directly shapes how I approach interface and information architecture today.

## SELECTED PROJECTS

### POCKITA — Personal investment tracker
pockita.vercel.app

- Tracks crypto, US and Thai equities, ETFs, gold, mutual funds, bonds, government savings and cash in one Baht-denominated view, with an optional USD toggle.
- Anonymous-first authentication — users start with no email, and can add email-OTP recovery later.

React · Vite · TypeScript · Tailwind · shadcn/ui · TanStack Query · Zustand · Supabase · Recharts · i18next

### Interactive experiments (VI–IX) — Four live single-purpose sites
happyninemonth.vercel.app

- A monthly series of self-contained interactive sites: a 78-card tarot deck with four reading modes and 3D flip animation, a five-step isometric room configurator, a point-and-click hunt with drag-and-drop jigsaws, and a tap-to-reveal game.
- The tarot deck is built without a framework or backend — local JSON, a build script for card assets, and hand-written animation.

Vite · TypeScript · CSS · GitHub Pages · Vercel

## EDUCATION

**M.Sc. Information Technology Management** — Mahidol University · 2023
GPA 4.00, First-Class Honors

**B.Tech. Industrial Product Design** — Rajamangala University of Technology Rattanakosin · 2020
GPA 3.61, Second-Class Honors

## PUBLICATIONS

**Transformer Models for Cyberbullying Detection**
TIMES-iCON 2024 (IEEE) · Co-author · 2024

---

## Before you finish, check these

1. Copy text out of the exported PDF and paste it into a plain text editor. If
   the words do not come through, the export has rasterised and I cannot use
   it — fix that before anything else.
2. Confirm it is exactly two A4 pages.
3. Confirm no job, degree or publication is split across the page break, and no
   section heading sits alone at the foot of a page.
4. Check nothing has been paraphrased. Every figure — 200–1,500 users, 2–3 days
   to under 4 hours, GPA 4.00 — must read exactly as given above.
