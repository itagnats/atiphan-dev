/**
 * Portfolio content — all editable text, links, and project data.
 * Edit this file to update site content. No markup changes needed.
 */

export const personal = {
  name: "Atiphan",
  lastName: "Charoenphon",
  fullName: "Atiphan Charoenphon",
  // OYW: original role was { primary: "Frontend Developer", secondary: "Product Designer" }
  role: {
    primary: "Software Developer",
    secondary: "",
  },
  // OYW: original intro kept for flip-back —
  //   "Building thoughtful web apps in React and TypeScript. Trained in industrial
  //    product design (B.Tech) and IT management (M.Sc.). Currently at CP Group,
  //    open to mid-level frontend or product-engineer roles in Bangkok or remote."
  intro:
    "Software developer at the CP Leadership Institute. I believe technology should adapt to humans, not force humans to imitate technology — and I’m building tools that help people grow with AI without losing what makes them human.",
  status: "Open to opportunities",
  location: "Bangkok",
  email: "atiphan.ch@gmail.com",
  phone: "+66 61 393 3559",
  phoneRaw: "+66613933559",
  linkedin: "https://linkedin.com/in/itagnats",
  linkedinHandle: "linkedin.com/in/itagnats",
  github: "https://github.com/itagnats",
  githubHandle: "github.com/itagnats",
} as const;

export const stack = [
  { name: "React", short: "⚛", color: "react" },
  { name: "TypeScript", short: "TS", color: "ts" },
  { name: "Tailwind CSS", short: "≋", color: "tw" },
  { name: "Figma", short: "◆", color: "figma" },
] as const;

// OYW: original headline was { line1: "Design-minded.", line2: "Engineering-focused." }
//      (two lines). For OYW it's three lines colored purple / white / purple.
// OYW: original bio paragraphs (kept here for flip-back) —
//   p1: "I'm a frontend developer who came to engineering through industrial product
//        design. That background shapes how I think about software — I care as much
//        about how a system feels to use as how it's built."
//   p2: "At CP Group I ship React/TypeScript modules used by 200–1,500 internal users,
//        work across the seams of frontend and API design, and contribute UX and
//        architecture decisions on adjacent modules. I'm looking for a role where
//        design judgment matters as much as code quality."
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
  phones: [
    {
      type: "home" as const,
      headline: { line1: "Catchy headline", line2: "goes here." },
      sub: "Short app tagline,\nedit me anytime.",
    },
    {
      type: "detail" as const,
      productName: "Premium item name",
      price: "$ 00.00",
      rating: "4.8 · 240 reviews",
    },
  ],
} as const;

export const cpModules = [
  {
    slug: "quotation-module",
    name: "Quotation Module",
    label: "Architecture · UX",
    description:
      "Designed both the UX and architecture from information model to data structure.",
    role: "UX + Architecture + Frontend",
    icon: "box" as const,
    year: "2024",
    overview:
      "An internal quotation builder used by sales teams across CP Group's commercial divisions. The module handles complex multi-line-item quotes with conditional pricing, customer-tier discounts, and integration with the company's master product catalog.",
    problem:
      "The existing quotation flow lived in scattered Excel templates and email threads. Different divisions had different formats, no audit trail, version conflicts when multiple stakeholders edited, and no link between quoted prices and the live product catalog.",
    solution:
      "Designed the information model first — quote → versions → line items → pricing rules — and built the UI around it. Single source of truth backed by a normalized schema. Real-time price lookup from the product catalog. Approval workflow with role-based gates. Auto-generated PDF output.",
    outcome:
      "Reduced quote turnaround from 2-3 days to under 4 hours. Eliminated pricing inconsistencies across divisions. ~400 monthly active users by month 3.",
    tech: ["React", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "React Hook Form"] as readonly string[],
    screenshots: [
      { caption: "Quote builder canvas" },
      { caption: "Approval workflow" },
      { caption: "PDF preview" },
    ],
  },
  {
    slug: "pms-dynamic-roles",
    name: "PMS Evaluation\nDynamic Role System",
    label: "Architecture",
    description:
      "Re-architected fixed-role forms into a dynamic role-assignment system.",
    role: "Architecture + Frontend",
    icon: "users" as const,
    year: "2024",
    overview:
      "The Performance Management System (PMS) is used for annual evaluations across CP Group entities. Previously each form had hard-coded roles (manager, employee, HR) baked into the schema. I re-architected the form engine to support arbitrary role assignments per evaluation cycle.",
    problem:
      "Different business units had different evaluation hierarchies — some had skip-level reviewers, some had peer reviews, some had cross-functional committees. The fixed-role model meant every new structure needed a code change, deploy, and migration. Cycle setup took weeks.",
    solution:
      "Modeled roles as data: each evaluation cycle defines a role schema, assignments map users to roles, and the form UI renders dynamically based on the current user's role(s). Forms now read their structure from configuration, not from JSX. Backend stayed the same — only the rendering layer changed.",
    outcome:
      "New evaluation cycles now ship in 1-2 days vs. 2-3 weeks. Zero code changes needed for org structure variations. Supports up to 5 simultaneous role types per cycle.",
    tech: ["React", "TypeScript", "Form schema (JSON)", "React Hook Form", "Zod"] as readonly string[],
    screenshots: [
      { caption: "Role configuration UI" },
      { caption: "Dynamic form rendering" },
      { caption: "Multi-role evaluation view" },
    ],
  },
  {
    slug: "enrollment-reservation",
    name: "Enrollment &\nAuditorium Reservation",
    label: "UX Design",
    description:
      "Designed user flow, form sequencing and information hierarchy.",
    role: "UX Design",
    icon: "calendar" as const,
    year: "2024",
    overview:
      "Two related internal systems: training-course enrollment for employees, and reservation of corporate auditoriums for events. Both deal with capacity, eligibility rules, and approval chains.",
    problem:
      "The original flows were forms-on-forms — long, intimidating screens with no visible structure. Users dropped off mid-flow, leading to manual recovery work by HR. Information hierarchy buried critical fields (date conflicts, capacity warnings) below the fold.",
    solution:
      "Re-sequenced the flow into 3 progressive disclosure steps: select → confirm details → review. Surfaced eligibility and conflict warnings inline as the user types. Information hierarchy ordered by decision weight, not by data model. Designed in Figma with clickable prototype before any code was written.",
    outcome:
      "Completion rate on first attempt up significantly. Manual recovery tickets to HR dropped meaningfully. Stakeholders adopted the new flow patterns for adjacent modules.",
    tech: ["Figma", "UX research", "Information architecture"] as readonly string[],
    screenshots: [
      { caption: "Enrollment flow steps" },
      { caption: "Reservation calendar view" },
      { caption: "Conflict detection inline" },
    ],
  },
  {
    slug: "invoice-credit-note",
    name: "Invoice &\nCredit Note Module",
    label: "Frontend Ownership",
    description:
      "Bilingual, multi-currency invoicing module with SAP & Qsoft integration.",
    role: "Frontend Ownership",
    icon: "file" as const,
    year: "2025",
    overview:
      "Frontend ownership of the company's invoicing module. Issues invoices and credit notes across multiple currencies and two languages (Thai/English), with downstream integration into SAP for accounting and Qsoft for document management.",
    problem:
      "The previous module was English-only, single-currency, with no credit note flow. International business units issued invoices outside the system entirely, breaking the audit chain. SAP sync was manual.",
    solution:
      "Owned the full frontend redesign: bilingual number/date formatting, multi-currency entry with live FX rates, credit note as a first-class concept (with reverse links to original invoices), and direct sync to SAP via REST API + push to Qsoft for archival. Built with strict TypeScript types matching the SAP IDoc schema.",
    outcome:
      "All international entities now issue inside the system. Manual sync work eliminated. Credit notes are auditable end-to-end.",
    tech: ["React", "TypeScript", "Tailwind CSS", "SAP REST API", "Qsoft DMS", "Day.js"] as readonly string[],
    screenshots: [
      { caption: "Invoice builder (Thai/English toggle)" },
      { caption: "Multi-currency line items" },
      { caption: "Credit note linked to source invoice" },
    ],
  },
] as const;

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
   public/images/leadership/{slug}/, then edit a photo entry to add
   `src: "/images/leadership/{slug}/01.jpg"`. Until then the gradient
   placeholder renders.
   ============================================================ */
export const leadership = [
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
      { src: "/images/leadership/cp-exponential-surge-2025/01.jpg", caption: "Photo 1" },
      { src: "/images/leadership/cp-exponential-surge-2025/02.jpg", caption: "Photo 2" },
      { src: "/images/leadership/cp-exponential-surge-2025/03.jpg", caption: "Photo 3" },
      { src: "/images/leadership/cp-exponential-surge-2025/04.jpg", caption: "Photo 4" },
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
      { src: "/images/leadership/team-building-2026/01.jpg", caption: "Photo 1" },
      { src: "/images/leadership/team-building-2026/02.jpg", caption: "Photo 2" },
      { src: "/images/leadership/team-building-2026/03.jpg", caption: "Photo 3" },
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
      { src: "/images/leadership/td-hackathon-2023/01.jpg", caption: "Photo 1" },
      { src: "/images/leadership/td-hackathon-2023/02.jpg", caption: "Photo 2" },
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
      { src: "/images/leadership/temasek-exchange/01.jpg", caption: "Photo 1" },
      { src: "/images/leadership/temasek-exchange/02.jpg", caption: "Photo 2" },
      { src: "/images/leadership/temasek-exchange/03.jpg", caption: "Photo 3" },
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
      { src: "/images/leadership/asean-young-leader/01.jpg", caption: "Photo 1" },
      { src: "/images/leadership/asean-young-leader/02.jpg", caption: "Photo 2" },
      { src: "/images/leadership/asean-young-leader/03.jpg", caption: "Photo 3" },
    ] as ReadonlyArray<{ src?: string; caption: string }>,
  },
  {
    slug: "floating-market-volunteer",
    tabLabel: "Floating Market Signs",
    topic: "Community volunteer",
    projectName: "Talad Bua Floating Market — Signage",
    organization: "Talad Bua Floating Market, Nonthaburi",
    date: "2018",
    detail:
      "Volunteered design skills as an undergraduate to hand-paint the main signage at Talad Bua floating market in Nonthaburi — contributing visible community-design work to a local trading space frequented by residents and visitors.",
    photos: [
      { src: "/images/leadership/floating-market-volunteer/01.jpg", caption: "Photo 1" },
      { src: "/images/leadership/floating-market-volunteer/02.jpg", caption: "Photo 2" },
    ] as ReadonlyArray<{ src?: string; caption: string }>,
  },
] as const;

export const contactTiles = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: "mail" as const,
  },
  // OYW: LinkedIn + GitHub tiles temporarily hidden — restore when reverting
  // {
  //   label: "LinkedIn",
  //   value: personal.linkedinHandle,
  //   href: personal.linkedin,
  //   icon: "linkedin" as const,
  // },
  // {
  //   label: "GitHub",
  //   value: personal.githubHandle,
  //   href: personal.github,
  //   icon: "github" as const,
  // },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phoneRaw}`,
    icon: "phone" as const,
  },
] as const;

/* ============================================================
   OYW Application — Required Materials
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
  // OYW: "work" entry temporarily replaced by "leadership" — restore when reverting
  // { id: "work", label: "Work", icon: "briefcase" as const },
  { id: "experience", label: "Experience", icon: "activity" as const },
  { id: "leadership", label: "Leadership", icon: "heart" as const },
  // OYW: label was "Contact" — restore when reverting
  { id: "contact", label: "Assignment", icon: "mail" as const },
] as const;

// OYW: original headline { line1: "Let's", line2: "talk" } and the blurb
// "Open to mid-level frontend or product-engineer roles. Bangkok-based,
// comfortable working in English or Thai." are kept in this comment for
// flip-back. The blurb is no longer rendered (Contact.tsx hides it).
export const contactCopy = {
  headline: { line1: "", line2: "Assignment" },
  blurb:
    "Open to mid-level frontend or product-engineer roles. Bangkok-based, comfortable working in English or Thai.",
} as const;

/* ============================================================
   CV — structured resume content
   ============================================================ */
export const cv = {
  summary:
    "Frontend developer with a designer's eye. 3+ years shipping React/TypeScript modules at the CP Leadership Institute, used by 200–1,500 internal users. Background in industrial product design (B.Tech) and IT management (M.Sc., GPA 4.00). Co-author on an IEEE paper on transformer models for cyberbullying detection.",
  skills: {
    Languages: ["TypeScript", "JavaScript", "HTML", "CSS", "Python (basic)"],
    "Frameworks & Libraries": [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "TanStack Query",
      "Zustand",
      "Zod",
    ],
    Design: ["Figma", "Prototyping", "Information architecture", "UX research"],
    Tools: ["Git", "VS Code", "Vercel", "REST APIs", "SAP integration"],
    Languages_spoken: ["Thai (native)", "English (professional)"],
  },
  experience: [
    {
      title: "Software Developer · Frontend",
      org: "CP Leadership Institute, Bangkok",
      date: "Jul 2023 – Present",
      bullets: [
        "Own the frontend for 4 internal modules used by 200–1,500 users across multiple business divisions.",
        "Designed both UX and information architecture for the Quotation Module; reduced quote turnaround from 2-3 days to under 4 hours.",
        "Re-architected the PMS evaluation form engine to support dynamic role assignment — eliminated weeks of cycle setup work.",
        "Built bilingual (Thai/English) multi-currency Invoice & Credit Note module with SAP and Qsoft integration.",
        "Contribute UX and architecture decisions on adjacent modules.",
      ],
    },
    {
      title: "Store Layout Designer",
      org: "TD Tawandang Co., Ltd. (Carabao Group), Bangkok",
      date: "Apr 2021 – Jun 2023",
      bullets: [
        "Designed in-store layouts and POP fixtures across the company's retail footprint.",
        "Translated commercial strategy into spatial design with revenue per square meter as the metric.",
        "Cross-functional work with marketing, merchandising, and operations teams.",
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
      title:
        "Transformer Models for Cyberbullying Detection",
      venue: "TIMES-iCON 2024 (IEEE)",
      role: "Co-author",
      year: "2024",
    },
  ],
} as const;

/* ============================================================
   OYW Resume — tailored content for the One Young World application.
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
// OYW: original messages preserved for flip-back —
//   "Hey! Thanks for floating by. I'm Atiphan — frontend dev, designer, occasional space tourist. Look around, hope you find something cool.",
//   "Welcome aboard! If you came here looking for a frontend engineer who actually cares about design, you're in the right airlock.",
//   "Greetings, traveler. Currently transmitting from the CP Leadership Institute in Bangkok. Open frequencies for new opportunities — feel free to ping me.",
//   "Status update: shipping React modules, sketching ideas in Figma, occasionally questioning life choices. Standard astronaut stuff.",
//   "Hi there! Fun fact — I came to engineering through industrial product design. That's why I care about how things feel, not just how they work.",
export const astronautMessages = [
  "Hey, welcome aboard. I'm Atiphan — software dev at the CP Leadership Institute, currently obsessed with how humans grow alongside AI without losing themselves. Glad you floated by.",
  "Status report: building tools that help people work with AI, not chase it. If that question matters to you too, you'll find more about it across this site.",
  "Greetings, traveler. This is my One Young World 2026 application — the essay, the resume, and the video are all docked at the Assignment section. Take your time exploring.",
  "Fun fact — I came to software through industrial product design. That's why I keep asking how technology should adapt to humans, not the other way around. The full argument is in the essay.",
  "Hi! Transmitting from Bangkok. I believe AI should multiply what makes each person valuable — not pressure everyone to move at machine pace. That belief shapes everything on this site.",
] as const;
