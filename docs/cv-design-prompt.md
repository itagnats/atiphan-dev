# Prompt — build my CV as an editable design

Copy everything below the first `---` into Claude Design (or any Claude session
with the `design` skill). It carries real content verbatim, so nothing has to be
invented or remembered.

Regenerated **2026-10-11** from `data/portfolio.ts`. **If you edit the CV data on
the site, update this file too, or the two will drift.** They had drifted badly
before this rewrite: the migration content existed only as a margin note, the
summary and bullets were the pre-migration versions, and the shipped PDF carried
a headline and a stack that appeared in neither.

## What changed on 2026-10-11, and why

- The **ERP migration now leads the CP entry as real bullets**, not as an
  editorial note buried in the skills block where a generator would skip it.
- **Headline** is now `Software Developer | Business Analyst | Project Manager`,
  matching the three "Open to" pills on the site header.
- **Date of birth removed, nationality kept.** Date of birth earns nothing and
  the PDF is published on a public site.
- **ASP.NET Razor (.cshtml), Bootstrap and shadcn/ui restored** to the stack.
- **Certificates & Training added** — it was missing entirely, including the
  depa / GBDi L4 that a note in the old file said belonged there.
- All editorial instructions moved out of the CONTENT block. Anything the
  designer must not do is now in "Boundaries" below, where it cannot be mistaken
  for text to typeset.

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
  boxes, no shading, no icons beyond small contact glyphs.
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

**Education, Certificates and Publications** — compact, two or three lines each.

---

# CONTENT — use exactly as written, do not rewrite or embellish

## Header

[circular photo, ~20 mm]

**Atiphan Charoenphon**
Software Developer | Business Analyst | Project Manager

atiphan.ch@gmail.com · +66 61 393 3559 · Bangkok, Thailand · Thai nationality
atiphan-dev.vercel.app · linkedin.com/in/atiphan-charoenphon-a0630b243 · github.com/itagnats

## SUMMARY

Software Developer with 3+ years of experience spanning business and system analysis, frontend engineering, and end-to-end delivery. At CP Group I contributed to the migration of an internal ERP from Mendix to Next.js and C# across ten modules, analysing over 100 existing workflows and mapping legacy data into the new schema. I translate business requirements into production applications, owning features across workflow design, UX/UI, frontend development, API integration, testing, and release. I have owned internal modules serving 200–1,500 employees across CP Group business divisions and regularly collaborate with users, business stakeholders, and vendors to define and refine system requirements. I also own contributions to a shared, brand-customized design system and reusable component architecture. My background in industrial product design and an M.Sc. in IT Management gives me a user- and product-oriented perspective that bridges business and engineering.

## SKILLS

**Core** — TypeScript · JavaScript (ES6+) · React · Next.js (App Router) · HTML · CSS · ASP.NET Razor (.cshtml)
**Styling & Motion** — Tailwind CSS · Bootstrap · shadcn/ui · Motion / Framer Motion · Responsive design
**State, Forms & Data** — TanStack Query · Zustand · React Hook Form · Zod · REST APIs
**Testing & Quality** — Jest · Vitest · React Testing Library · Scenario testing · SonarQube · Checkmarx (SAST)
**Tooling** — Git · GitLab · Vercel · VS Code
**Integration & Design** — SAP REST · Qsoft DMS · Supabase · Figma · Information architecture · UX research
**Data & Analysis** — Power BI · Python (pandas) · In-product reporting and dashboards
**Languages** — Thai (native) · English (professional working) · IELTS 6.5 overall

## EXPERIENCE

### Software Development and Testing — CP Leadership Institute, Bangkok
Jul 2023 – Present

- Contributed to the migration of CP Group's internal ERP from Mendix to Next.js and C# across ten modules — Course, Cost Sheet & Allocation, Quotation, Biography, Enrollment, Invitation, Seat Reservation, Invoice & Credit Note, Login/Account/Role Permission, and PMS Evaluation — analysing over 100 existing workflows and business rules and translating legacy behaviour into the new system.
- Mapped legacy data onto the new schema for Master Data and Invoice across more than 20 table relations, working through old-to-new schema mapping so migrated behaviour matched the business rules it replaced.
- Tracked milestones and deliverables and raised delivery risks as they surfaced, took part in cutover planning and post-migration fixes, and demonstrated the PMS Evaluation module end to end to stakeholders while reviewing adjacent modules.
- Own frontend development across four internal business modules serving 200–1,500 users across CP Group business divisions, working across requirements, UX/UI, frontend architecture, API integration, testing, and delivery.
- Owned the full design of the PMS Evaluation module, and of the smaller Biography module. Re-architected the PMS evaluation form engine to support dynamic role assignment and evaluation workflows, removing weeks of manual setup per evaluation cycle and enabling role-based evaluation across participants.
- Designed and developed the Quotation Module end to end, including UX, information architecture, and frontend implementation, reducing quotation turnaround from 2–3 days to under 4 hours.
- Developed a bilingual Thai/English, multi-currency Invoice & Credit Note module with live FX rates and direct SAP REST integration, enabling international entities to generate documents within the system.
- Contributed to the shared frontend design system, proposing and adapting shadcn/ui into a brand-specific component system with reusable components, semantic design tokens, responsive patterns, and light/dark themes used across modules.
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

## CERTIFICATES & TRAINING

**Data Analyst Level 4** — depa / GBDi / Mahidol University · Jul 2023
Certificate of Completion (course and examination)

**Data Analyst** — Thailand Professional Qualification Institute (TPQI) · Dec 2021

**Cloud Essentials+** — CompTIA · Dec 2021

**Full Stack Engineer Bootcamp** — CODESTAR · Apr – May 2023

**TF-SCALE Engineering Programme** — Nanyang Polytechnic × Temasek Foundation, Singapore · Nov 2018 – Mar 2019

## PUBLICATIONS

**Transformer Models for Cyberbullying Detection**
TIMES-iCON 2024 (IEEE) · Co-author · 2024

---

## Before you finish, check these

1. Copy text out of the exported PDF and paste it into a plain text editor. If
   the words do not come through, the export has rasterised and I cannot use
   it — fix that before anything else.
2. Confirm it is exactly two A4 pages.
3. Confirm no job, degree, certificate or publication is split across the page
   break, and no section heading sits alone at the foot of a page.
4. Check nothing has been paraphrased. Every figure — ten modules, over 100
   workflows, 20+ table relations, 200–1,500 users, 2–3 days to under 4 hours,
   GPA 4.00 — must read exactly as given above.
5. Confirm the two Data Analyst entries are still two separate lines and that
   no level has been attached to the TPQI one.

---

# Boundaries — for the designer, not for the page

These are constraints on what may be written. None of this text goes into the
CV.

**The ERP migration leads the CP Leadership Institute entry and must survive any
trimming.** If the document runs long, cut from the bottom of that bullet list,
never from the top.

**Claims that must not be inflated:**

- Risks were **identified and raised as they surfaced**, not formally
  documented. Do not write "maintained a risk register" or similar.
- The cutover was **participated in**, not run or led.
- Demonstrations were **to stakeholders**. Do not upgrade to "led the UAT" or
  "ran acceptance".
- No ERD, SRS, user story or acceptance-criteria claims — none of those
  artefacts were produced, and an interviewer will ask to see them.
- "Contributed to the migration" is deliberate. Do not promote it to "led" or
  "drove".

**Two separate Data Analyst credentials exist and must not be merged:**

- **Data Analyst Level 4** — Certificate of Completion (course and
  examination), depa / GBDi / Mahidol University, 14 July 2023. Verified against
  the certificate itself, ID 5B5UDG-CE000080. This is the L4.
- **TPQI professional qualification**, December 2021 — a separate award from the
  Thailand Professional Qualification Institute. **Its level is not confirmed.**
  State no level until the certificate has been checked. An earlier version of
  the site and an earlier PDF both merged these into one line; that was wrong.

**Personal data:** nationality is included because Thai employers screen on
work authorisation. Date of birth is deliberately omitted — this PDF is
published on a public website. Do not add it back, and do not add marital
status, religion or a national ID number, whatever a Thai CV template suggests.
