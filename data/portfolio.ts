/**
 * Portfolio content — all editable text, links, and project data.
 * Edit this file to update site content. No markup changes needed.
 */

export const personal = {
  name: "Atiphan",
  lastName: "Charoenphon",
  fullName: "Atiphan Charoenphon",
  role: {
    primary: "Software Developer",
    secondary: "",
  },
  intro:
    "Software developer at the CP Leadership Institute. I believe technology should adapt to humans, not force humans to imitate technology — and I’m building tools that help people grow with AI without losing what makes them human.",
  status: "Open to opportunities",
  openTo: ["Software Developer", "Project Manager", "Business Analyst"],
  location: "Bangkok",
  email: "atiphan.ch@gmail.com",
  phone: "+66 61 393 3559",
  phoneRaw: "+66613933559",
  linkedin: "https://www.linkedin.com/in/atiphan-charoenphon-a0630b243/",
  linkedinHandle: "linkedin.com/in/atiphan-charoenphon-a0630b243",
  github: "https://github.com/itagnats",
  githubHandle: "github.com/itagnats",
  /* The portfolio itself. On a CV this is the strongest single link — the only
     one that shows the work rather than listing it — so it sits above LinkedIn
     and GitHub in the contact row on /cv. The pre-generated PDF in public/
     already carries it; this adds it to the web version. */
  website: "https://atiphan-dev.vercel.app",
  websiteHandle: "atiphan-dev.vercel.app",
} as const;

/* Hero stack row. `slug` is a simple-icons slug — the mark is drawn from the
   official brand path, so these are real logos rather than stand-in glyphs.
   Adding one also needs a line in the ICONS map in components/BrandIcon.tsx. */
export const stack = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Figma", slug: "figma" },
  /* Not a brand, so there is no simple-icons mark for it — BrandIcon falls back
     to a generic Lucide glyph for any slug not in its ICONS map. Listed here
     because API integration is a real part of the job the stack row is meant to
     advertise, not just a library choice. */
  { name: "RESTful API", slug: "rest" },
] as const;

/* How Ita works, end to end — rendered inside the About section, directly under
   the headline. It sits there on purpose: the headline makes a claim about how
   he works and this is the evidence for it.

   `ai` is what the AI actually did at that stage, never a badge. Every line is
   phrased as assistance Ita directed and checked, because that is what happened
   and because the alternative invites an interviewer to ask whether he could do
   it without the tool. In particular: enumerating frontend actions SUPPORTED a
   permission review — it did not prove the permissions correct. Do not let
   that phrasing drift.

   Stage 06 said "roughly 560 buttons" until 2026-10-12. The figure arrived
   second-hand and was never traced to a count anyone had run, so it is now
   "hundreds of permission-gated actions". Do not put a number back without
   one. */
export const process = [
  {
    step: "01",
    icon: "search" as const,
    title: "Understand the requirements",
    detail:
      "Work with users, stakeholders and vendors to clarify what is needed and find the gaps — including reading the legacy system's own workflows and business rules where one already exists.",
    ai: "Summarising meeting notes, organising requirements, breaking work down and classifying priorities.",
  },
  {
    step: "02",
    icon: "workflow" as const,
    title: "Model the solution",
    detail:
      "Translate business rules into system and data flows, and map legacy data onto the new schema.",
    ai: "Drafting candidate workflows and data structures, which I then review against the real requirements and system constraints.",
  },
  {
    step: "03",
    icon: "pen-tool" as const,
    title: "Design the experience",
    detail:
      "Build on the shared brand design system, shaping UX and information architecture around the decisions a user actually has to make.",
    ai: "Generating UX/UI alternatives and interactive demos, refined against the established design standards.",
  },
  {
    step: "04",
    icon: "blocks" as const,
    title: "Establish engineering standards",
    detail:
      "Reusable project workflows for scaffolding, data-table architecture, BFF patterns, commit review, unit-test coverage and module-specific conventions.",
    ai: "Built as Claude Code skills, so a convention is applied the same way every time instead of being re-explained per task.",
  },
  {
    step: "05",
    icon: "code" as const,
    title: "Build and integrate",
    detail:
      "Frontend features and API integrations implemented against those standards and shared components, so modules stay consistent with each other.",
    ai: "Module-specific guidance drawn from the project's own documentation.",
  },
  {
    step: "06",
    icon: "clipboard-check" as const,
    title: "Validate the workflow",
    detail:
      "Test scenarios drawn from the business process, business-rule verification, and an implementation-quality audit before manual review.",
    ai: "Generating scenarios, and enumerating frontend actions to support a systematic review of role-based permissions across hundreds of permission-gated actions.",
  },
  {
    step: "07",
    icon: "shield-check" as const,
    title: "Coordinate release quality",
    detail:
      "Code-quality and security checks moved into the development workflow — SonarQube rules and pre-commit scanning surface reliability and security issues earlier.",
    ai: "Findings triaged before release; which ones matter is still my call.",
  },
  {
    step: "08",
    icon: "line-chart" as const,
    title: "Track, fix and improve",
    detail:
      "Lightweight dashboards to track UAT test cases, watch outstanding issues and prioritise fixes.",
    ai: "Post-release findings fed back into the standards so the same problem does not resurface.",
  },
] as const;

export const about = {
  headline: {
    line1: "Design-led,",
    line2: "engineering-minded,",
    line3: "AI-augmented.",
  },
  bio: [
    "I'm a software developer at the CP Leadership Institute, working where frontend engineering, business analysis, UX and delivery meet. Most of what I do starts before any code: reading the system that already runs, and finding the real problem behind what was asked for.",
    "My background is unusual — a B.Tech in industrial product design before an M.Sc. in IT management — and it is why I work this way. Every screen has a person on the other side of it, and the best ones adapt to the person rather than the reverse.",
    "I use AI across that whole process: analysis, design exploration, implementation standards, test coverage and release checks. The workflows are ones I built and validated myself, and the technical decisions stay mine.",
  ],
  stats: [
    { value: "3+", label: "Years Experience", icon: "briefcase" as const },
    { value: "200–1500", label: "Users Impacted", icon: "trending-up" as const },
    { value: "10+", label: "Modules Shipped", icon: "box" as const },
  ],
} as const;

export const featuredProject = {
  tag: "Personal project · Live",
  name: "POCKITA",
  tagline: "Your portfolio, in your pocket.",
  description:
    "Personal investment tracker for Thai users. Tracks crypto, US stocks, ETFs, gold, Thai stocks, mutual funds, bonds, gov savings, plus cash accounts — all in Baht, with optional USD view. Anonymous-first authentication (no email required to start), with optional email-OTP recovery.",
  liveUrl: "https://pockita.vercel.app/",
  stack: ["React 18", "Vite 5", "TypeScript 5.6", "Tailwind 3.4", "shadcn/ui", "TanStack Query 5", "Zustand 4", "Supabase", "Recharts", "i18next"],
  /* Screen recording of the live app, played on a silent loop inside the phone
     frame in the Work section. This replaced the screenshot carousel below on
     2026-09-20.

     Cut from a 2m11s recording, starting at 22s. Everything before that is the
     sign-in flow — a Gmail inbox and a live one-time code — and must not come
     back into the clip. The balances shown are demo data, not real holdings.

     Encoded to 540x1156 to match the phone frame's content box exactly; see the
     comment in components/PhoneVideo.tsx before changing the frame's CSS. */
  demo: {
    src: "/videos/pockita-demo.mp4",
    poster: "/images/pockita/demo-poster.webp",
    alt: "Screen recording of the POCKITA app: the net-worth dashboard toggling between Baht and US dollars, an asset-allocation donut split across crypto, government savings, US stocks, gold, cash, ETFs and Thai stocks, a cash summary by bank account, a live market snapshot, the holdings list with best and worst performers, and the transaction history.",
  },
  /* RETAINED BUT NO LONGER RENDERED. These are real screenshots of the live app
     and were the phone carousel until the recording above took over. Kept so the
     carousel can be restored in one line, and because the case study may want
     stills later. The files are still in public/images/pockita/.

     Nothing reads this any more. PhoneCarousel and ExperimentTabs, the two
     components that did, were deleted on 2026-10-12. This data stayed because
     the stills themselves are still useful; it is the only thing left of that
     path, so deleting it loses them. */
  phones: [
    {
      src: "/images/pockita/pokita4.jpg",
      alt: "POCKITA dashboard: net worth in USD with a THB/USD toggle, net-worth trend chart, and a holdings-versus-cash split.",
    },
    {
      src: "/images/pockita/pokita5.jpg",
      alt: "POCKITA asset allocation: a donut chart breaking the portfolio into crypto, government savings, US stocks, gold, cash, ETFs and Thai stocks, with a cash summary by bank account.",
    },
    {
      src: "/images/pockita/pokita6.jpg",
      alt: "POCKITA holdings list: total value, best and worst performers, and per-asset rows with live prices, filterable by asset class.",
    },
    {
      src: "/images/pockita/pokita9.jpg",
      alt: "POCKITA asset detail for Bitcoin: live price in USD and THB, a selectable 1M/3M/1Y/ALL price chart, and an add-to-portfolio action.",
    },
    {
      src: "/images/pockita/pokita10.jpg",
      alt: "POCKITA goal view: progress toward a net-worth target with a projection chart and a what-if control for increasing monthly DCA.",
    },
  ],
} as const;

/* The Selected Work block header. Renamed from `primeProject` on 2026-10-11,
   when the five PRIME cards were replaced by the CP Group modules they were
   originally built to stand in for. PRIME came out because it has never been
   deployed and has no public repository, so nothing in it can be opened by a
   reader; the CP work is real, shipped and in daily use, and that is worth
   more on a portfolio than a side project no one can click. */
export const selectedWorkContext = {
  name: "CP Leadership Institute",
  tagline: "Internal platforms · CP Group",
  blurb:
    "Modules I own or co-own inside CP Group's internal systems, serving 200–1,500 employees across the group's business divisions. These are internal tools, so there are no screenshots and no links — what follows is the problem each one solved and what changed because of it.",
  provenance: "Employer work · CP Leadership Institute · 2023–present",
  /* Internal systems. No live URLs, no repository, no screenshots — the copy
     has to carry the work on its own, and the UI must not imply otherwise. */
  internal: true,
} as const;

/* ============================================================
   SELECTED WORK — CP Group modules (2026-10-11)

   History, because this block has now swung twice and the reasoning matters
   more than the current state:

   - Until 2026-09-21 these were four CP Group case studies.
   - On 2026-09-21 they were replaced by five PRIME modules, on the view that
     employer internals should not be published.
   - On 2026-10-11 Ita reversed that: PRIME is not deployed and has no public
     repo, so it cannot be opened by a reader, while the CP work is real and
     shipped. He also decided the outcome figures can be stated publicly.

   What that decision does NOT license:

   - No screenshots, no internal URLs, no customer or employee names, no
     pricing data, no internal process detail beyond what a module's purpose
     requires. `internal: true` above is what the UI reads to keep links off.
   - Every figure here must be one Ita has confirmed. The 2023-era copy
     carried "~400 monthly active users by month 3", "1-2 days vs 2-3 weeks"
     and "supports up to 5 simultaneous role types"; none could be sourced, so
     none were carried over. Do not reinstate a number without asking him.
   - "Contributed to" and "co-own" are deliberate where they appear. The
     migration was contributed to, not led; the cutover was participated in,
     not run; risks were raised as they surfaced, not tracked in a register.

   The cards are a single full-width column as of 2026-10-13. There used to be
   a `wide: true` flag for cards spanning both columns of a two-column grid;
   it is gone from the type and the data along with the grid.

   `overview`, `outcome` and `tech` are what an expanded card shows.
   `problem`, `solution` and `role` are not rendered anywhere right now; they
   are kept because app/work/[slug] can be switched back on later.
   ============================================================ */
export const selectedWork: ReadonlyArray<{
  slug: string;
  name: string;
  label: string;
  description: string;
  role: string;
  icon: "book" | "receipt" | "users" | "clipboard" | "palette" | "workflow";
  year: string;
  overview: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: readonly string[];
}> = [
  {
    slug: "erp-migration",
    name: "ERP Migration\nMendix to Next.js and C#",
    label: "System analysis · Migration",
    description:
      "Ten modules moved off a low-code platform, starting from the workflows the old system was already running.",
    role: "Contributor — workflow analysis, data mapping, module demos",
    icon: "workflow",
    year: "2024–present",
    overview:
      "CP Group's internal ERP ran on Mendix. The replacement is Next.js and C#, covering ten modules: Course, Cost Sheet & Allocation, Quotation, Biography, Enrollment, Invitation, Seat Reservation, Invoice & Credit Note, Login/Account/Role Permission, and PMS Evaluation.",
    problem:
      "A low-code platform that had accreted over 100 workflows and business rules across those ten modules. Much of that logic was documented nowhere except in the running system, so a rewrite that started from the requirements rather than from the system would have silently dropped behaviour people depend on.",
    solution:
      "Read the legacy system's own workflows and business rules and translated them into the new one, analysing over 100 of them. Mapped legacy data onto the new schema for Master Data and Invoice across more than 20 table relations, working old-to-new so migrated behaviour matched the rules it replaced.",
    outcome:
      "Demonstrated the PMS Evaluation module end to end to stakeholders and reviewed adjacent modules alongside their owners. Tracked milestones and deliverables and raised delivery risks as they surfaced. Took part in cutover planning and in post-migration fixes.",
    tech: ["Next.js", "C#", "ASP.NET Razor (.cshtml)", "TypeScript", "REST APIs", "Mendix (legacy)"],
  },
  {
    slug: "quotation-module",
    name: "Quotation Module",
    label: "Architecture · UX",
    description:
      "Designed both the UX and the architecture, from the information model down to the data structure.",
    role: "UX, architecture and frontend",
    icon: "clipboard",
    year: "2024",
    overview:
      "An internal quotation builder used by commercial teams across CP Group's divisions. It handles multi-line-item quotes with conditional pricing, customer-tier discounts, and lookup against the master product catalog.",
    problem:
      "Quotations lived in scattered spreadsheet templates and email threads. Every division had its own format, there was no audit trail, simultaneous edits collided, and a quoted price had no link to the live catalog it was supposed to come from.",
    solution:
      "Designed the information model first — quote, versions, line items, pricing rules — and built the interface around it rather than the reverse. One source of truth on a normalised schema, price lookup against the catalog, an approval workflow with role-based gates, and generated document output.",
    outcome:
      "Quotation turnaround went from 2–3 days to under 4 hours, and the pricing inconsistencies between divisions stopped, because there was no longer more than one place for a price to live.",
    tech: ["React", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "React Hook Form"],
  },
  {
    slug: "pms-evaluation-dynamic-roles",
    name: "PMS Evaluation\nDynamic Role System",
    label: "Architecture · Full ownership",
    description:
      "Re-architected fixed-role evaluation forms into a system where roles are data, not code.",
    role: "Full design ownership of the module",
    icon: "users",
    year: "2024",
    overview:
      "The Performance Management System runs evaluations across CP Group entities. Each form previously had its roles — manager, employee, HR — hard-coded into the schema. I own the full design of this module, and re-architected the form engine to take arbitrary role assignments per evaluation cycle.",
    problem:
      "Business units evaluate differently: skip-level reviewers in one, peer review in another, cross-functional committees in a third. With roles fixed in code, every structure that did not already exist needed a code change, a deploy and a migration, and cycle setup ran into weeks.",
    solution:
      "Modelled roles as data. Each cycle declares a role schema, assignments map people onto those roles, and the form renders from the current user's roles rather than from hard-coded branches. The form reads its structure from configuration; the backend contract did not have to move.",
    outcome:
      "A new org structure no longer needs a code change and a deploy, which removed weeks of manual setup per evaluation cycle and made role-based evaluation work across participants without engineering involvement.",
    tech: ["React", "TypeScript", "JSON form schema", "React Hook Form", "Zod"],
  },
  {
    slug: "invoice-and-credit-note",
    name: "Invoice &\nCredit Note",
    label: "Frontend ownership · Integration",
    description:
      "Bilingual, multi-currency invoicing with live FX and direct SAP integration.",
    role: "Frontend ownership",
    icon: "receipt",
    year: "2025",
    overview:
      "Frontend ownership of invoicing: invoices and credit notes across multiple currencies and in both Thai and English, integrated into SAP for accounting and Qsoft for document management.",
    problem:
      "The previous module was English-only, single-currency, and had no credit note flow at all. International entities were issuing documents outside the system entirely, which broke the audit chain, and the SAP sync was done by hand.",
    solution:
      "Rebuilt the frontend around bilingual number and date formatting, multi-currency entry with live FX rates, and credit notes as a first-class object that links back to the invoice it reverses. Documents sync directly to SAP over REST and push to Qsoft for archival, with TypeScript types matching the integration schema.",
    outcome:
      "International entities issue inside the system now instead of around it, the manual sync work is gone, and a credit note can be traced end to end back to its source invoice.",
    tech: ["React", "TypeScript", "Tailwind CSS", "SAP REST API", "Qsoft DMS", "Day.js"],
  },
  {
    slug: "enrollment-and-seat-reservation",
    name: "Enrollment &\nSeat Reservation",
    label: "UX design · Information architecture",
    description:
      "Re-sequenced two long form flows around the decisions users actually make.",
    role: "UX design and information architecture",
    icon: "book",
    year: "2024",
    overview:
      "Two related internal systems: training-course enrollment for employees, and reservation of corporate auditorium seating for events. Both deal with capacity, eligibility rules and approval chains.",
    problem:
      "Both were forms on forms — long, undifferentiated screens with no visible structure. People abandoned them midway and HR picked up the recovery by hand. The fields that actually decided the outcome, date conflicts and capacity warnings, sat below the fold.",
    solution:
      "Re-sequenced each flow into three steps — select, confirm, review — and surfaced eligibility and conflict warnings inline as the user types. Ordered the information by how much weight it carries in the decision rather than by the shape of the data model. Prototyped in Figma and tested before any code was written.",
    outcome:
      "Drop-off and recovery work were never instrumented, so there is no number to quote here. What did carry: stakeholders took the step-and-inline-warning pattern into adjacent modules, and it is now how those flows are built.",
    tech: ["Figma", "UX research", "Information architecture", "React"],
  },
  {
    slug: "design-system",
    name: "Shared Design System",
    label: "Design system · Cross-module",
    description:
      "shadcn/ui adapted into a brand-specific component set with semantic tokens and light/dark themes.",
    role: "Contributor — proposed the approach, built and adapted components",
    icon: "palette",
    year: "2024–present",
    overview:
      "A shared frontend component system used across the internal modules, rather than each module arriving at its own buttons, tables and form controls.",
    problem:
      "Modules built at different times by different people drifted apart visually and behaviourally. The same control behaved differently depending on where you met it, and every new screen restated decisions that had already been made elsewhere.",
    solution:
      "Proposed adapting shadcn/ui rather than writing a component library from nothing, then built it out as a brand-specific set: reusable components, semantic design tokens rather than raw colour values, responsive patterns, and light and dark themes.",
    outcome:
      "New screens start from the shared components instead of from scratch, and a change to a token moves every module that uses it rather than one.",
    tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Radix", "Design tokens"],
  },
];

export const experience = [
  {
    tag: "Full-time job",
    date: "Jul 2023 – Present",
    title: "Software Developer",
    sub: ["Frontend (React / TypeScript)", "CP Leadership Institute, Bangkok"],
    icon: "briefcase" as const,
  },
  {
    tag: "Full-time job",
    date: "Apr 2021 – Jun 2023",
    title: "Store Layout Designer",
    sub: ["TD Tawandang Co., Ltd.", "(Carabao Group), Bangkok"],
    icon: "pen-tool" as const,
  },
  {
    tag: "Publication",
    date: "2024",
    title: "IEEE Publication —\nTransformer Models for\nCyberbullying Detection",
    sub: ["Co-author · TIMES-iCON 2024"],
    icon: "file-text" as const,
  },
  {
    tag: "Education",
    date: "2023",
    title: "M.Sc. Information\nTechnology Management",
    sub: ["Mahidol University"],
    extra: "GPA 4.00, First-Class Honors",
    icon: "graduation-cap" as const,
  },
  {
    tag: "Education",
    date: "2020",
    title: "B.Tech. Industrial\nProduct Design",
    sub: [
      "Rajamangala University of",
      "Technology Rattanakosin",
    ],
    extra: "GPA 3.61, Second-Class Honors",
    icon: "box" as const,
  },
] as const;

/* ============================================================
   Leadership / Volunteer work
   Each event renders as a tab. Drop photos at
   public/images/leadership/{slug}/ as WebP, then edit a photo entry to add
   `src: "/images/leadership/{slug}/01.webp"`. Until then the gradient
   placeholder renders. Use WebP, not JPEG — the originals were 3.7 MB of
   JPEG and are 1.6 MB as WebP at the same visible quality.
   ============================================================ */
export const leadership = [
  {
    slug: "one-young-world-2026",
    tabLabel: "One Young World '26",
    topic: "Global program",
    projectName: "One Young World 2026",
    organization: "CP Group · Cape Town delegation",
    date: "2026",
    /* Deliberately stops at "final selection round". That is accurate and
       strong on its own, and it does not imply the trip happened — Ita did not
       pass the final panel interview and did not go to Cape Town. Do not let a
       later edit round this up to "represented CP Group at One Young World". */
    detail:
      "Built ChoomChon AI (CP LocalAI Connect), an AI platform for Thai OTOP and community enterprises — ten agents covering stock, cost, sales, packaging, marketing and sustainability, paired with a \"Local First\" retail model placing community products into 7-Eleven, Lotus's and Makro province by province, on an 18-month roadmap from an Ayutthaya pilot to 100 communities. ChoomChon AI won the One Young World Thailand Future Sustain Hack Bootcamp, which carried me through to the final selection round for CP Group's One Young World 2026 delegation to Cape Town.",
    photos: [
      {
        src: "/images/leadership/one-young-world-2026/01.webp",
        caption:
          "Participants of the One Young World Thailand Future Sustain Hack Bootcamp holding their certificates at the CP Group selection event, Bangkok. Photo: One Young World Thailand / CP Group.",
      },
      {
        src: "/images/leadership/one-young-world-2026/02.webp",
        caption:
          "Certificates presented on stage at the bootcamp, under the One Young World Thailand Future Sustain Hack Bootcamp banner. Still from TNN News coverage of CP Group's One Young World 2026 selection.",
      },
    ] as ReadonlyArray<{ src?: string; caption: string }>,
    /* TNN News covered the bootcamp and CP's One Young World 2026 selection.
       Linked rather than screenshotted: the footage is TNN's, and a news report
       is better evidence than a photo we would be republishing without rights.
       It also keeps ~40 other people's faces off this site. */
    press: {
      url: "https://youtu.be/NoeL1qndpf0",
      label: "TNN News coverage",
    },
  },
  {
    slug: "cp-exponential-surge-2025",
    tabLabel: "Exponential Surge ’25",
    topic: "Company program",
    projectName: "CP Exponential Surge 2025",
    organization: "CP Group",
    date: "2025",
    detail:
      "Co-led two projects in the CP Exponential Surge 2025 program — ASAP, an AI shopping assistant designed as a partner product for e-commerce platforms, and a Personal Data System exploring how AI could turn personal data into a digital asset in future markets. Both advanced to the Surging Star round — among the final 11 teams selected from over 1,700 across CP Group.",
    photos: [
      { src: "/images/leadership/cp-exponential-surge-2025/01.webp", caption:
          "Programme participants on the steps of the CP Leadership Institute, a cohort of around a hundred in dark blazers and lanyards below the building's domed rotunda and gold elephant statues." },
      { src: "/images/leadership/cp-exponential-surge-2025/02.webp", caption:
          "Two presenters on stage at the Exponential Surge first pitching day, in front of a bilingual slide introducing Team ASAP — “AI Shopping Assistant Partner for E-commerce Platform”." },
      { src: "/images/leadership/cp-exponential-surge-2025/03.webp", caption:
          "The Work Together team pitching “Personal Data System for AI — Road to Personal Digital Asset” to a filled auditorium on the same pitching day." },
      { src: "/images/leadership/cp-exponential-surge-2025/04.webp", caption:
          "Eight team members lined up on stage for the judging round, one speaking into a microphone while the projection behind magnifies the panel." },
    ] as ReadonlyArray<{ src?: string; caption: string }>,
  },
  {
    slug: "team-building-2026",
    tabLabel: "Team Building ’26",
    topic: "Company event",
    projectName: "Company Team Building 2026",
    organization: "CP Leadership Institute",
    date: "2026",
    detail:
      "Co-led the process improvement workshop at the 2026 company team-building program, guiding colleagues through mapping workflow friction and sketching concrete fixes. Took part in every sports and games session — the moments that turn coworkers into a team.",
    photos: [
      { src: "/images/leadership/team-building-2026/01.webp", caption:
          "Group 6 at work during the D1 “Process Scope & SLA” exercise, colleagues gathered at a whiteboard mapping a process flow with the brief and a countdown timer projected behind them." },
      { src: "/images/leadership/team-building-2026/02.webp", caption:
          "The yellow team in the sports hall with a hand-painted team sign and the pyramid of stacked cups they built during a game." },
      { src: "/images/leadership/team-building-2026/03.webp", caption:
          "The yellow team with the PVC-pipe cart they built and decorated for the engineering challenge, one member seated in it." },
    ] as ReadonlyArray<{ src?: string; caption: string }>,
  },
  {
    slug: "td-hackathon-2023",
    tabLabel: "TD Hackathon ’23",
    topic: "Hackathon",
    projectName: "TD Hackathon 2023",
    organization: "TD Tawandang Co., Ltd. (Carabao Group)",
    date: "2023",
    detail:
      "3rd runner-up at the 2023 TD Hackathon with BaoBar — a Carabao draft beer membership package designed for the TD convenience store format, pairing a recurring membership model with on-tap fresh beer service.",
    photos: [
      { src: "/images/leadership/td-hackathon-2023/01.webp", caption:
          "The BaoBar team presenting to judges and fellow participants at the TD Platform Technology Campus, the business model and revenue streams projected behind them." },
      { src: "/images/leadership/td-hackathon-2023/02.webp", caption:
          "The BaoBar team holding the 3rd runner-up board at the TD Platform Technology Campus." },
    ] as ReadonlyArray<{ src?: string; caption: string }>,
  },
  {
    slug: "temasek-exchange",
    tabLabel: "Temasek Exchange",
    topic: "Exchange program",
    projectName: "Temasek Foundation Exchange",
    organization: "Nanyang Polytechnic, Singapore",
    date: "2018",
    detail:
      "Selected from across four university campuses to represent the institution on a four-month engineering exchange at Nanyang Polytechnic, Singapore — collaborating with Singaporean engineering students on robotics, drone, and machine-building workshops, alongside speech projects exploring engineering solutions for an aging society.",
    photos: [
      { src: "/images/leadership/temasek-exchange/01.webp", caption:
          "Line-following and obstacle-avoidance robots built during the exchange, laid out on a table at Nanyang Polytechnic's School of Engineering." },
      { src: "/images/leadership/temasek-exchange/02.webp", caption:
          "Nanyang Polytechnic's campus at dusk, the reflecting pool in front of the main building." },
      { src: "/images/leadership/temasek-exchange/03.webp", caption:
          "A participant in the robotics lab holding a small tracked robot, an industrial robot arm on the bench behind, captioned “I like ROBOT”." },
    ] as ReadonlyArray<{ src?: string; caption: string }>,
  },
  {
    slug: "asean-young-leader",
    tabLabel: "ASEAN Young Leader",
    topic: "Leadership program",
    projectName: "ASEAN Young Leader",
    organization: "Rajamangala University of Technology Rattanakosin",
    date: "2017",
    detail:
      "Selected as a Thai student representative on a 10-day ASEAN Plus Three Young Leader program hosted in Thailand — exchanging culture and joining leadership lectures alongside delegates from ASEAN member states plus China, Japan, and South Korea.",
    photos: [
      { src: "/images/leadership/asean-young-leader/01.webp", caption:
          "Delegates crowded into a selfie between sessions of the programme." },
      { src: "/images/leadership/asean-young-leader/02.webp", caption:
          "Delegates on stage in national dress during the cultural exchange night." },
      { src: "/images/leadership/asean-young-leader/03.webp", caption:
          "The full delegation in the ballroom — participants from ASEAN member states plus China, Japan and South Korea." },
    ] as ReadonlyArray<{ src?: string; caption: string }>,
  },
] as const;

/* ============================================================
   Interactive Experiments — a monthly series of small, self-contained
   interactive sites, each one live. Ordered oldest to newest so the
   section reads as sustained practice rather than a one-off.

   `tech` renders only when non-empty — fill in the stacks for VI–VIII
   rather than leaving a guess on a public page.
   ============================================================ */
export const experiments = [
  {
    slug: "dumpling-fortune",
    numeral: "VI",
    name: "Dumpling Fortune",
    tagline: "Tap-to-reveal memory game",
    url: "https://itagnats.github.io/happysixmonth/",
    urlLabel: "happysixmonth",
    detail:
      "A steamer of nine dumplings. Tapping one squeezes it open to reveal the memory inside, with a progress bar tracking the set and an audio toggle running throughout. Per-item state, squeeze animation, and a completion path.",
    tech: [] as readonly string[],
    cover: {
      src: "/images/experiments/dumpling-fortune-cover.webp",
      alt: "Dumpling Fortune cover: an ornate purple-and-pink plaque showing a bamboo steamer of nine smiling dumplings under a crescent moon.",
    },
  },
  {
    slug: "missing-memories",
    numeral: "VII",
    name: "The Missing Memories",
    tagline: "Point-and-click hunt with jigsaw puzzles",
    url: "https://itagnats.github.io/happysevenmonth/",
    urlLabel: "happysevenmonth",
    detail:
      "Seven glowing hotspots hidden across an illustrated room. Finding one opens a drag-and-drop jigsaw with a hint system; restored memories persist across the session and unlock a final reward. Hotspot hit areas, drag state, and progress tracking.",
    tech: [] as readonly string[],
    cover: {
      src: "/images/experiments/missing-memories-cover.webp",
      alt: "The Missing Memories cover: an ornate plaque showing a warmly lit bedroom at night with a detective dumpling holding a letter in the foreground.",
    },
  },
  {
    slug: "home-sweet-home",
    numeral: "VIII",
    name: "Home Sweet Home",
    tagline: "Isometric room configurator",
    url: "https://itagnats.github.io/happyeightmonth/",
    urlLabel: "happyeightmonth",
    detail:
      "A five-step room builder. Each step swaps a furniture piece and re-renders the isometric room live above the picker, and tapping any piece already in the room jumps straight to its step — so the wizard is navigable in both directions rather than strictly linear.",
    tech: [] as readonly string[],
    cover: {
      src: "/images/experiments/home-sweet-home-cover.webp",
      alt: "Home Sweet Home cover: an ornate house-shaped plaque showing a pink bedroom with a cat and a dumpling asleep on the bed.",
    },
  },
  {
    slug: "our-fate",
    numeral: "IX",
    name: "Our Fate — The Couple Tarot",
    tagline: "78-card tarot deck, four reading modes",
    url: "https://happyninemonth.vercel.app/",
    urlLabel: "happyninemonth",
    detail:
      "A full 78-card deck — 22 major arcana, 40 numbered cards, 16 courts — with four reading modes, shuffle, fan and 3D card-flip animation, and a gallery filterable by arcana and suit. Built without a framework or a backend: the deck is local JSON and the card art is wired in by a build script.",
    tech: ["Vite", "TypeScript", "CSS"] as readonly string[],
    cover: {
      src: "/images/experiments/our-fate-cover.webp",
      alt: "Our Fate cover: an ornate plaque showing three crescent-moon tarot cards fanned above a wax-sealed letter and a quill.",
    },
  },
] as const;

export const contactTiles = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: "mail" as const,
  },
  {
    label: "LinkedIn",
    value: personal.linkedinHandle,
    href: personal.linkedin,
    icon: "linkedin" as const,
  },
  {
    label: "GitHub",
    value: personal.githubHandle,
    href: personal.github,
    icon: "github" as const,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phoneRaw}`,
    icon: "phone" as const,
  },
] as const;

/* ============================================================
   Assignments — RETAINED BUT DISABLED.
   Kept from the One Young World 2026 application. The /assignments
   routes no longer build (see app/assignments/[slug]/page.tsx:
   generateStaticParams returns [] and dynamicParams = false), and
   nothing in the UI links here. To bring the section back, restore
   those two and re-add the tiles to Contact.tsx.
   ============================================================ */
export const assignments = [
  {
    slug: "resume",
    title: "Resume",
    description:
      "Highlight your leadership, volunteer work, or CSR/sustainability experience.",
    icon: "file-text" as const,
  },
  {
    slug: "video",
    title: "30-Second Video",
    description:
      "Introduce yourself and tell us why you should represent CP Group.",
    icon: "video" as const,
  },
  {
    slug: "essay",
    title: "Essay",
    description:
      "Intelligence Jobs",
    icon: "pen-line" as const,
  },
] as const;

export const navItems = [
  { id: "home", label: "Home", icon: "home" as const },
  { id: "about", label: "About", icon: "user" as const },
  { id: "work", label: "Work", icon: "briefcase" as const },
  { id: "experiments", label: "Experiments", icon: "sparkles" as const },
  { id: "experience", label: "Experience", icon: "activity" as const },
  { id: "leadership", label: "Leadership", icon: "heart" as const },
  { id: "contact", label: "Contact", icon: "mail" as const },
] as const;

export const contactCopy = {
  headline: { line1: "Let's", line2: "talk" },
  blurb:
    "Open to mid-level frontend or product-engineer roles. Bangkok-based, comfortable working in English or Thai.",
} as const;

/* ============================================================
   CV — structured resume content
   ============================================================ */
export const cv = {
  /* The CV carries its own headline, separate from personal.role on the Hero.
     Change this, not personal.role, to retitle the CV without retitling the
     homepage. Kept broad because the work spans API integration and system
     flow as well as UI; the "frontend-focused" keyword that recruiters and
     ATS filters search for is carried by the first line of `summary` below.
     Three titles as of 2026-10-11, matching personal.openTo on the Hero so
     the CV and the site header make the same claim. For a pure-frontend
     application, trim to "Software Developer" and regenerate the PDF —
     and regenerate docs/cv-design-prompt.md with it. */
  headline: "Software Developer | Business Analyst | Project Manager",
  summary:
    "Software Developer with 3+ years of experience spanning business and system analysis, frontend engineering, and end-to-end delivery. At CP Group I contributed to the migration of an internal ERP from Mendix to Next.js and C# across ten modules, analysing over 100 existing workflows and mapping legacy data into the new schema. I translate business requirements into production applications, owning features across workflow design, UX/UI, frontend development, API integration, testing, and release. I have owned internal modules serving 200–1,500 employees across CP Group business divisions and regularly collaborate with users, business stakeholders, and vendors to define and refine system requirements. I also own contributions to a shared, brand-customized design system and reusable component architecture. My background in industrial product design and an M.Sc. in IT Management gives me a user- and product-oriented perspective that bridges business and engineering.",
  skills: {
    Core: ["TypeScript", "JavaScript (ES6+)", "React", "Next.js (App Router)", "HTML", "CSS", "ASP.NET Razor (.cshtml)"],
    "Styling & Motion": ["Tailwind CSS", "Bootstrap", "shadcn/ui", "Motion / Framer Motion", "Responsive design"],
    "State, Forms & Data": ["TanStack Query", "Zustand", "React Hook Form", "Zod", "REST APIs"],
    "Testing & Quality": ["Jest", "Vitest", "React Testing Library", "Scenario testing", "SonarQube", "Checkmarx (SAST)"],
    Tooling: ["Git", "GitLab", "Vercel", "VS Code"],
    "Integration & Design": ["SAP REST", "Qsoft DMS", "Supabase", "Figma", "Information architecture", "UX research"],
    "Data & Analysis": ["Power BI", "Python (pandas)", "In-product reporting and dashboards", "Data Analyst L4 (depa / GBDi)"],
    Languages: ["Thai (native)", "English (professional working)", "IELTS 6.5 overall"],
  },
  experience: [
    {
      title: "Software Development and Testing",
      org: "CP Leadership Institute, Bangkok",
      date: "Jul 2023 – Present",
      bullets: [
        "Contributed to the migration of CP Group's internal ERP from Mendix to Next.js and C# across ten modules — Course, Cost Sheet & Allocation, Quotation, Biography, Enrollment, Invitation, Seat Reservation, Invoice & Credit Note, Login/Account/Role Permission, and PMS Evaluation — analysing over 100 existing workflows and business rules and translating legacy behaviour into the new system.",
        "Mapped legacy data onto the new schema for Master Data and Invoice across more than 20 table relations, working through old-to-new schema mapping so migrated behaviour matched the business rules it replaced.",
        "Tracked milestones and deliverables and raised delivery risks as they surfaced, took part in cutover planning and post-migration fixes, and demonstrated the PMS Evaluation module end to end to stakeholders while reviewing adjacent modules.",
        "Own frontend development across four internal business modules serving 200–1,500 users across CP Group business divisions, working across requirements, UX/UI, frontend architecture, API integration, testing, and delivery.",
        "Owned the full design of the PMS Evaluation module, and of the smaller Biography module. Re-architected the PMS evaluation form engine to support dynamic role assignment and evaluation workflows, removing weeks of manual setup per evaluation cycle and enabling role-based evaluation across participants.",
        "Designed and developed the Quotation Module end to end, including UX, information architecture, and frontend implementation, reducing quotation turnaround from 2–3 days to under 4 hours.",
        "Developed a bilingual Thai/English, multi-currency Invoice & Credit Note module with live FX rates and direct SAP REST integration, enabling international entities to generate documents within the system.",
        "Contributed to the shared frontend design system, proposing and adapting shadcn/ui into a brand-specific component system with reusable components, semantic design tokens, responsive patterns, and light/dark themes used across modules.",
        "Support release quality through functional testing, unit testing, security/code-quality remediation, and test-case development, including structured test coverage across the modules owned by the team.",
      ],
    },
    {
      title: "Store Layout Designer",
      org: "TD Tawandang Co., Ltd. (Carabao Group), Bangkok",
      date: "Apr 2021 – Jun 2023",
      bullets: [
        "Designed in-store layouts and point-of-purchase fixtures across the company's retail footprint, optimising for revenue per square metre.",
        "Ran the full design cycle — brief, concept, technical drawing, production handoff — with marketing, merchandising and operations stakeholders.",
        "Spatial and user-flow design work that directly shapes how I approach interface and information architecture today.",
      ],
    },
  ],
  projects: [
    {
      name: "POCKITA",
      tagline: "Personal investment tracker",
      url: "https://pockita.vercel.app/",
      urlLabel: "pockita.vercel.app",
      bullets: [
        "Tracks crypto, US and Thai equities, ETFs, gold, mutual funds, bonds, government savings and cash in one Baht-denominated view, with an optional USD toggle.",
        "Anonymous-first authentication — users start with no email, and can add email-OTP recovery later.",
      ],
      tech: ["React", "Vite", "TypeScript", "Tailwind", "shadcn/ui", "TanStack Query", "Zustand", "Supabase", "Recharts", "i18next"],
    },
    {
      name: "Interactive experiments (VI–IX)",
      tagline: "Four live single-purpose sites",
      url: "https://happyninemonth.vercel.app/",
      urlLabel: "happyninemonth.vercel.app",
      bullets: [
        "A monthly series of self-contained interactive sites: a 78-card tarot deck with four reading modes and 3D flip animation, a five-step isometric room configurator, a point-and-click hunt with drag-and-drop jigsaws, and a tap-to-reveal game.",
        "The tarot deck is built without a framework or backend — local JSON, a build script for card assets, and hand-written animation.",
      ],
      tech: ["Vite", "TypeScript", "CSS", "GitHub Pages", "Vercel"],
    },
  ],
  education: [
    {
      degree: "M.Sc. Information Technology Management",
      school: "Mahidol University",
      date: "2023",
      detail: "GPA 4.00, First-Class Honors",
    },
    {
      degree: "B.Tech. Industrial Product Design",
      school: "Rajamangala University of Technology Rattanakosin",
      date: "2020",
      detail: "GPA 3.61, Second-Class Honors",
    },
  ],
  publications: [
    {
      title:
        "Transformer Models for Cyberbullying Detection",
      venue: "TIMES-iCON 2024 (IEEE)",
      role: "Co-author",
      year: "2024",
    },
  ],
} as const;

/* ============================================================
   Resume data — RETAINED BUT DISABLED. Written for the One Young World
   2026 application; consumed only by the now-unreachable /assignments/resume
   route. Kept so the page can be revived without rewriting the content.
   Order: Profile → Leadership & Impact → Volunteer/CSR → Professional
   Experience → Education → Skills. Reviewers scan for leadership and
   impact, not stack — quantify everything, frame technical work as
   ownership/outcome, not duties.
   ============================================================ */
export const oywResume = {
  profile:
    "Software developer at the CP Leadership Institute, focused on human-centered AI adoption. Building tools that help people grow alongside technology without losing what makes them human — and making the case inside CPLI that AI should adapt to people, not the other way around.",

  leadership: [
    {
      title: "Frontend & UX Architect · Internal Platforms",
      org: "CP Leadership Institute, Bangkok",
      date: "Jul 2023 – Present",
      bullets: [
        "Co-own frontend of 4 internal modules used by 200–1,500 employees across CP Group business divisions — driving architecture, UX, and design judgment end-to-end.",
        "Drove the UX and information architecture for the Quotation Module, Invoice & Credit Note module, Auditorium seat reservation module, making better user experiences.",
        "Led re-architecture of the PMS evaluation form engine to support dynamic role assignment — reducing new-cycle setup and removing weeks of recurring engineering work.",
        "Influence UX and architecture decisions on adjacent modules used by 1,000+ employees; advocate for human-centered design principles in cross-team reviews.",
      ],
    },
    {
      title: "Co-Lead · CP Exponential Surge 2025",
      org: "CP Group",
      date: "2025",
      bullets: [
        "Co-led two product concepts in CP Group's Exponential Surge 2025 innovation program; both advanced to the Surging Star round — among the final 11 teams selected from over 1,700 across CP Group.",
        "ASAP — AI shopping assistant designed as a partner integration for e-commerce platforms, conecting with CP e-commerce ecosystem.",
        "Personal Data System — explored how AI could enable individuals to own and trade personal data as a digital asset in future markets.",
      ],
    },
    {
      title: "Project Lead · TD Hackathon 2023",
      org: "TD Tawandang Co., Ltd. (Carabao Group)",
      date: "2023",
      bullets: [
        "Led the project team behind BaoBar — a Carabao draft beer membership package designed for the TD convenience store format, pairing a recurring membership model with on-tap fresh beer service.",
        "Earned 3rd runner-up across competing teams; sharpened my instinct for matching a product idea to the customer ritual it actually fits into.",
      ],
    },
    {
      title: "Exchange Student · Temasek Foundation Engineering Exchange",
      org: "Nanyang Polytechnic, Singapore",
      date: "2018",
      bullets: [
        "Selected from across four bachelor's campuses to represent the institution on a four-month engineering exchange at Nanyang Polytechnic, Singapore — collaborating with Singaporean engineering students on robotics, drone, and machine-building workshops, plus speech projects on engineering solutions for an aging society.",
      ],
    },
    {
      title: "Thai Delegate · ASEAN Plus Three Young Leader",
      org: "Rajamangala University of Technology Rattanakosin",
      date: "2017",
      bullets: [
        "Selected as one of Thailand's student representatives for a 10-day ASEAN Plus Three Young Leader program hosted in Thailand — exchanging culture and joining leadership lectures alongside delegates from ASEAN member states plus China, Japan, and South Korea.",
      ],
    },
  ],

  volunteer: [
    {
      title: "Community Volunteer · Floating Market Signage",
      org: "Talad Bua Floating Market, Nonthaburi",
      date: "2018",
      bullets: [
        "Volunteered design skills as an undergraduate to hand-paint the main signage at Talad Bua floating market in Nonthaburi — contributing visible community-design work to a local trading space serving residents and visitors.",
      ],
    },
  ],

  experience: [
    {
      title: "Software Developer · Frontend",
      org: "CP Leadership Institute, Bangkok",
      date: "Jul 2023 – Present",
      bullets: [
        "Ship and maintain React/TypeScript modules used by 200–1,500 internal users across CP Group divisions.",
        "Work across the seams of frontend, API design, and external integrations (SAP, Qsoft) with strict typing matching upstream schemas.",
      ],
    },
    {
      title: "Store Layout Designer",
      org: "TD Tawandang Co., Ltd. (Carabao Group), Bangkok",
      date: "Apr 2021 – Jun 2023",
      bullets: [
        "Designed in-store layouts and POP fixtures across 200+ retail locations, translating commercial strategy into spatial design measured by revenue per square meter.",
        "Cross-functional work with marketing, merchandising, and operations to take concepts from sketch to installation.",
      ],
    },
  ],

  education: [
    {
      degree: "M.Sc. Information Technology Management",
      school: "Mahidol University",
      date: "2023",
      detail: "GPA 4.00, First-Class Honors",
    },
    {
      degree: "B.Tech. Industrial Product Design",
      school: "Rajamangala University of Technology Rattanakosin",
      date: "2020",
      detail: "GPA 3.61, Second-Class Honors",
    },
  ],

  publications: [
    {
      title: "Transformer Models for Cyberbullying Detection",
      venue: "TIMES-iCON 2024 (IEEE)",
      role: "Co-author",
      year: "2024",
    },
  ],

  skills: {
    Engineering: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs", "SAP integration"],
    "Design & Product": ["Figma", "UX research", "Information architecture", "Prototyping"],
    "Soft Skills": ["Leadership", "Communication", "Dedication", "Ownership", "Empathy"],
    Languages: ["Thai (native)", "English (professional)"],
  },
} as const;

/* ============================================================
   Astronaut dialog popup — random rotation of messages
   ============================================================ */
export const astronautMessages = [
  "Hey, welcome aboard. I'm Atiphan — I turn tangled internal systems into software people actually want to use. AI runs through my whole process; the judgement stays mine. Glad you floated by.",
  "Status report: building tools that help people work with AI, not chase it. If that question matters to you too, you'll find more about it across this site.",
  "Greetings, traveler. Currently transmitting from the CP Leadership Institute in Bangkok. Open frequencies for new opportunities — feel free to ping me.",
  "Fun fact — I came to software through industrial product design. That's why I keep asking how technology should adapt to humans, not the other way around.",
  "Hi! Transmitting from Bangkok. I believe AI should multiply what makes each person valuable — not pressure everyone to move at machine pace. That belief shapes everything on this site.",
] as const;
