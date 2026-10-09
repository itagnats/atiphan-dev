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

export const about = {
  headline: {
    line1: "Design-led,",
    line2: "engineering-minded,",
    line3: "human-centered.",
  },
  bio: [
    "I'm a software developer at the CP Leadership Institute. I work on the tools the company's current and future leaders actually use day-to-day — and I treat each module as a chance to ask how AI should fit into someone's working life, not the other way around.",
    "My background is unusual: a B.Tech in industrial product design before an M.Sc. in IT management. That mix is why I look at software the way I do — every screen is shaped by a person on the other side of it, and the best ones adapt to the person, not the reverse.",
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

     Nothing on the site reads this any more: PhoneCarousel falls back to it, but
     PhoneCarousel is now only reached from ExperimentTabs, which is itself
     unused. Delete all three together or none of them. */
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

/* Header copy for the Selected Work block. `repoUrl` is empty until the PRIME
   repository is public — the UI renders no link while it is, rather than
   shipping a dead one. `deployed` stays false until there is a working URL;
   the badge reads from it, so the page cannot quietly claim more than is true. */
export const primeProject = {
  name: "PRIME",
  tagline: "University ERP",
  blurb:
    "A university management system I designed and built solo — curriculum, enrollment, cost and invoicing, and a 360° evaluation model. The dataset is seeded and fictional; the reasoning behind each decision is the point.",
  provenance: "Personal project · Solo build · 2026",
  deployed: false,
  repoUrl: "",
} as const;

/* ============================================================
   SELECTED WORK — PRIME (2026-09-21)

   These five modules are PRIME, Ita's own university-ERP side project, and
   they REPLACED four CP Group employer case studies that used to live here
   (Quotation Module, PMS Evaluation Dynamic Roles, Enrollment & Auditorium
   Reservation, Invoice & Credit Note). The CP originals cannot be shown
   publicly; PRIME was built to rebuild those patterns in a context that can.

   Provenance matters here and the UI must keep saying so. PRIME is a solo
   personal project with a seeded demo dataset and no production users. Every
   figure below is a seed count, a test count or a measured distribution — not
   usage. Do not let "users" language creep into this copy, and do not move
   these cards back under a CP Group heading.

   `wide: true` makes a card span both grid columns. Reserved for the design
   system, which describes work cutting across all the others.

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
  icon: "book" | "receipt" | "users" | "clipboard" | "palette";
  year: string;
  overview: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: readonly string[];
  wide?: boolean;
}> = [
  {
    slug: "course-and-program",
    name: "Course and Program",
    label: "Domain modeling · Architecture",
    description:
      "A two-level curriculum — programs, their per-semester terms, and the courses inside them — where the thing a student joins is the term.",
    role: "Solo — every product and architecture decision",
    icon: "book",
    year: "2026",
    overview:
      "Academic staff build and maintain the curriculum here: a program holds terms, a term holds a course list and a price, and everything downstream — enrollment, cost, invoicing — reads from it. Seeded at 5 programs, 19 terms, 30 courses and 4 semesters carrying 635 program memberships. No real users; this is a demo dataset, not production traffic.",
    problem:
      "A course list is not a curriculum. Without a level that holds a course set and a price together, there was nothing for indirect cost to be shared across, and no answer to \"what does this program cost to run\". The curriculum could also be read and never changed — adding a course to a term meant editing seed data.",
    solution:
      "The Program → Program Term → Curriculum hierarchy, plus the write paths. Three rules I was about to build got overturned by measuring the seed first: a strict edit lock would have locked every term (0 of 19 are free of dependents); a planning-only lock would have been worse and wrong (5 of 19 planning terms already carry full rosters); and refusing any curriculum containing an archived course would have made 9 terms uneditable over 13 archived courses they already teach, so the check polices additions only. Package price stays typed rather than derived from cost — deriving it makes every program break even by construction and leaves the profitability screens answering a question whose answer is always zero.",
    outcome:
      "No usage number — nothing is in production. What changed: creating a program is now one request that also creates its first term, its curriculum and its cost sheet, replacing a flow whose second step 404'd on its own detail page. 12 contract tests pin the shape, including one that fails if the first term is ever made optional.",
    tech: ["Next.js 16 App Router", "React 19", "TypeScript strict", "Zod 4", "TanStack Query v5", "TanStack Table v9", "In-memory BFF"],
  },
  {
    slug: "cost-management-and-invoice",
    name: "Cost Management\nand Invoice",
    label: "Domain modeling · Money",
    description:
      "Two kinds of cost on two kinds of sheet, a share that cannot fail to total 100, and one invoice per student per semester that prints itself.",
    role: "Solo — the two-sheet split, the derived share, the copy-not-reference rule",
    icon: "receipt",
    year: "2026",
    overview:
      "Course cost sheets carry direct costs and travel with the course; program cost sheets carry indirect costs borne once per term and shared across the curriculum; a master catalog both draw on. Invoicing sits on top: one document per student per semester, billed from the curriculum rather than from what they personally attended. Seeded at 56 course sheets, 19 program sheets and 635 invoices.",
    problem:
      "allocationPercent was typed onto each course and had nothing to be a percentage of. Measured across the seed, 82 of 92 program pools recovered less than the cost they were meant to (median 50%) and 7 recovered more — cost leaked, invisibly, and every screen still added up. Revenue was package price × head count, which is what the price implies rather than what was billed.",
    solution:
      "Split by cost kind and enforced it server-side — adding an indirect item to a course sheet is a 422 — so double-counting is unrepresentable rather than merely detectable. The indirect share is derived from credits using largest-remainder distribution, so parts sum to the pool to the satang. I tested contact hours as the driver first and rejected them: the lecturer-hours quantity has medians of 40/43/43 for 2/3/4-credit courses, which is jitter, not signal. Catalog items copy onto a sheet rather than reference it, so raising a master price cannot silently rewrite an approved sheet from a closed semester; drift is computed on read and deleting a copied item is a 409. Revenue became the sum of billed invoice totals, split collected/outstanding, with net profit stated on the collected basis.",
    outcome:
      "Margins now spread −47.57% to 72.29% across 19 terms, median 45.80%, with 7 losses and 12 profits. Before the fix every program reported a 98–100% margin — arithmetically perfect and completely uninformative. CREDIT_RATE has exactly one definition, which the seed imports, so an invoice cannot disagree with the contract it bills.",
    tech: ["Next.js 16 App Router", "TypeScript strict", "Zod 4", "Code 128 encoder (hand-written)", "date-fns", "Print-to-PDF"],
  },
  {
    slug: "student-enrollment-and-biography",
    name: "Student Enrollment\nand Biography",
    label: "Domain rules · UX",
    description:
      "Enrollment entered at the program level and expanded into course enrollments, plus a student record the student themselves can edit.",
    role: "Solo — program-first enrollment, the three add paths, the one-term-per-semester rule",
    icon: "users",
    year: "2026",
    overview:
      "The enrollment view lists program terms; opening one shows that term's students and, below them, the same term at course grain. A student is added from the term, never from a flat list, because a term is what a student joins. 635 program memberships expand to 1,297 course enrollments across 300 profiles. Students edit their own record — name, contact, major, year level, skills — owner-scoped, and can never change their program or delete themselves.",
    problem:
      "A flat student-to-course list doesn't describe what actually happens — the course enrollments follow from the curriculum, they aren't chosen one at a time. Nothing enforced that a student holds one program and one term per semester, and that rule is what makes \"one invoice per student per semester\" representable at all.",
    solution:
      "Three add paths — an existing profile, a student returning from a previous semester, or a new profile created on the way in — all sending one POST discriminated on source, so there is one write path and not three. Expansion and the conflict rules live in lib/calculations/ rather than in the server layer, specifically so they are unit-testable. Server enforcement: a second term in the same semester is 409, a term on another program is 422, and a withdrawn membership doesn't count, because re-enrolling someone who left is a real act. Status is progress (pending, active, completed, withdrawn) and never how they did — pass and fail derive from grades, and derive to unknown where a term carries no evaluation.",
    outcome:
      "No usage number. The one-program rule was verified to already hold across all 635 seeded memberships before it was enforced, so it is a constraint on reality rather than a constraint the data had to be bent to meet.",
    tech: ["Next.js 16 App Router", "React Hook Form", "Zod 4", "TanStack Table v9", "URL search params for table state"],
  },
  {
    slug: "student-evaluation-and-grade-report",
    name: "Student Evaluation\nand Grade Report",
    label: "Domain modeling · Access control",
    description:
      "A 360° evaluation where any role can be assessed, the weighting is configured per assessee, and the resulting report prints.",
    role: "Solo — corrected the assessee model, the per-assessee blend, two recorded divergences from the reference design",
    icon: "clipboard",
    year: "2026",
    overview:
      "Split by perspective: a staff view where a setup's window, scale, guidance and blend are configured, and an evaluator's own queue. Four evaluation roles — student, inspector, teacher, TA — and they sit on both sides. 36 setups over 134 groups. The report is one document per student per course-semester: means stated on the rating scale rather than converted, a derived percent, a letter grade, pass/fail at 4 out of 5, and written answers grouped by the role that gave them and never scored.",
    problem:
      "The reference design hard-coded the assessee as a student, which is wrong: a teacher is assessed by their students and a TA by both. Calling these evaluator roles instead of evaluation roles is exactly what produced that mistake. Separately, a weight blend that doesn't total 100 raises no error anywhere — it scales every score in the course by the same amount and looks entirely normal, which is the definition of a rule that has to be enforced server-side.",
    solution:
      "One AssesseeConfig per assessed role, each carrying its own assessors and its own blend totaling 100 — which is why the weight meter lives inside the assessee card rather than once at the top of the screen. An ordering is a share of each role's own weight, not a fifth evaluator, so a teacher who both rates and ranks counts once; the headline criteria-versus-ordering split is derived and can never become an input. Two deliberate divergences from the reference, both recorded: orderings are strict permutations with no ties, and self-assessment is never permitted for any role — rendered as a locked control so the rule is visible on screen, and never accepted from a client regardless. Question sets are per relation, so what a student is asked about a peer differs from what they are asked about their teacher.",
    outcome:
      "Closed a real authorization defect: two endpoints inherited a prefix rule that had to stay readable for the queue to work, which meant every signed-in student could read a cohort's grades. Fixed by moving the check into the handler, because no path prefix can name a segment sitting behind a dynamic id. A score with no submissions is null — never zero and never \"not pass\", because has-not-passed and has-not-been-assessed are different claims.",
    tech: ["Next.js 16 App Router", "Zod 4 discriminated unions", "Recharts", "TanStack Query v5", "Print-to-PDF"],
  },
  {
    slug: "design-system-and-architecture",
    name: "Design System and Architecture",
    label: "Design system · Architecture",
    description:
      "Sakura — a token layer, 27 restyled primitives and a one-directional layering rule that all twelve modules are built on.",
    role: "Solo — palette, tokens, the layering rule, the primitive adaptation, the accessibility contract",
    icon: "palette",
    year: "2026",
    overview:
      "A single CSS file holds 347 custom-property declarations across @theme inline, :root and .dark, and the design-system page is living documentation rendered from the shipped tokens rather than a static spec. Everything consumes it: 27 UI primitives, 10 shared patterns, 6 chart components, 10 layout pieces, and the twelve feature modules above them across 32 routes.",
    problem:
      "Before the layering rule there was nothing stopping a feature importing another feature, and the tree had drifted far enough to hold both spellings of the same word in one folder — enrolment-terms-screen.tsx sitting beside enrollment-screen.tsx. Color, spacing and density decisions were being made per screen, and there was no shared answer for the four states every data screen needs.",
    solution:
      "Tailwind v4 CSS-first with no JS config, so the type scale, tokens and custom utilities live in one reviewable file. shadcn/ui on the Radix base, restyled into the system rather than consumed as-is. The action color is a step deeper than the reference mockup's pink, because white text on the mockup pink only reaches 3.5:1. A motion layer of three durations and four curves registered in Tailwind's own namespaces, so duration-* cooperates with transition-* and a raw duration-200 cannot survive a scale change. Four pastel tone grounds that mean grouping, never state — state uses a badge. A decoration layer that is entirely aria-hidden and stripped by the print rule. And the strict layering rule — tokens → theme → ui → decor → data-viz → shared → features → app — with a grep that has to come back empty; the two cross-feature edges that did exist were resolved by moving code to its real owner and by duplicating fifteen lines of plumbing with a comment explaining why, rather than adding the edge.",
    outcome:
      "Twelve modules, 32 routes and 50,701 lines of TypeScript consume it, and the cross-feature import grep is empty. Worst contrast pair computed from the shipped CSS by script: 4.52:1 light and 5.75:1 dark, both above the 4.5:1 floor, and the table is published on the design system page rather than buried in a doc. 349 tests across 22 files pass. What it cost to learn: moving from compact to comfortable density meant rewriting 107 hardcoded pixel classes by hand, which is why nothing carries a pixel size in a class name any more.",
    tech: ["Tailwind CSS v4", "shadcn/ui", "Radix", "next-themes", "Lucide", "Recharts", "Vitest 4"],
    wide: true,
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
      { src: "/images/leadership/cp-exponential-surge-2025/01.webp", caption: "Photo 1" },
      { src: "/images/leadership/cp-exponential-surge-2025/02.webp", caption: "Photo 2" },
      { src: "/images/leadership/cp-exponential-surge-2025/03.webp", caption: "Photo 3" },
      { src: "/images/leadership/cp-exponential-surge-2025/04.webp", caption: "Photo 4" },
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
      { src: "/images/leadership/team-building-2026/01.webp", caption: "Photo 1" },
      { src: "/images/leadership/team-building-2026/02.webp", caption: "Photo 2" },
      { src: "/images/leadership/team-building-2026/03.webp", caption: "Photo 3" },
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
      { src: "/images/leadership/td-hackathon-2023/01.webp", caption: "Photo 1" },
      { src: "/images/leadership/td-hackathon-2023/02.webp", caption: "Photo 2" },
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
      { src: "/images/leadership/temasek-exchange/01.webp", caption: "Photo 1" },
      { src: "/images/leadership/temasek-exchange/02.webp", caption: "Photo 2" },
      { src: "/images/leadership/temasek-exchange/03.webp", caption: "Photo 3" },
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
      { src: "/images/leadership/asean-young-leader/01.webp", caption: "Photo 1" },
      { src: "/images/leadership/asean-young-leader/02.webp", caption: "Photo 2" },
      { src: "/images/leadership/asean-young-leader/03.webp", caption: "Photo 3" },
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
     Dual title as of 2026-09-20 because Ita is applying to both straight
     developer roles and Developer-with-BA hybrids. For a pure-frontend
     application, drop "/ Business Analyst" and regenerate the PDF. */
  headline: "Software Developer / Business Analyst",
  summary:
    "Software Developer with 3+ years of experience, frontend-focused across React and TypeScript, with strong experience in business analysis, UX, and cross-functional delivery. At CP Group, I translate business requirements into production applications, owning features across workflow design, UX/UI, frontend development, API integration, testing, and release. I have owned internal modules serving 200–1,500 employees across CP Group business divisions and regularly collaborate with users, business stakeholders, and vendors to define and refine system requirements. I also own contributions to a shared, brand-customized design system and reusable component architecture. My background in industrial product design and an M.Sc. in IT Management gives me a user- and product-oriented perspective that bridges business and engineering.",
  skills: {
    Core: ["TypeScript", "JavaScript (ES6+)", "React", "Next.js (App Router)", "HTML", "CSS"],
    "Styling & Motion": ["Tailwind CSS", "Motion / Framer Motion", "Responsive design"],
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
        "Own frontend development across four internal business modules serving 200–1,500 users across CP Group business divisions, working across requirements, UX/UI, frontend architecture, API integration, testing, and delivery.",
        "Translate business requirements into system workflows and user experiences, working directly with users, business stakeholders, and external vendors to clarify requirements, resolve edge cases, and align implementation with business processes.",
        "Re-architected the PMS evaluation form engine to support dynamic role assignment and evaluation workflows, removing weeks of manual setup per evaluation cycle and enabling role-based evaluation across participants.",
        "Designed and developed the Quotation Module end to end, including UX, information architecture, and frontend implementation, reducing quotation turnaround from 2–3 days to under 4 hours.",
        "Developed a bilingual Thai/English, multi-currency Invoice & Credit Note module with live FX rates and direct SAP REST integration, enabling international entities to generate documents within the system.",
        "Contributed to the shared frontend design system, proposing and adapting shadcn/ui into a brand-specific component system with reusable components, semantic design tokens, responsive patterns, and light/dark themes used across modules.",
        "Review UX, frontend architecture, and implementation quality across adjacent modules, identifying usability and technical issues and working with developers to improve consistency and maintainability.",
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
  "Hey, welcome aboard. I'm Atiphan — software dev at the CP Leadership Institute, currently obsessed with how humans grow alongside AI without losing themselves. Glad you floated by.",
  "Status report: building tools that help people work with AI, not chase it. If that question matters to you too, you'll find more about it across this site.",
  "Greetings, traveler. Currently transmitting from the CP Leadership Institute in Bangkok. Open frequencies for new opportunities — feel free to ping me.",
  "Fun fact — I came to software through industrial product design. That's why I keep asking how technology should adapt to humans, not the other way around.",
  "Hi! Transmitting from Bangkok. I believe AI should multiply what makes each person valuable — not pressure everyone to move at machine pace. That belief shapes everything on this site.",
] as const;
