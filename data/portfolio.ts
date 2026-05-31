/**
 * Portfolio content — all editable text, links, and project data.
 * Edit this file to update site content. No markup changes needed.
 */

export const personal = {
  name: "Atiphan",
  lastName: "Charoenphon",
  fullName: "Atiphan Charoenphon",
  role: {
    primary: "Frontend Developer",
    secondary: "Product Designer",
  },
  intro:
    "Building thoughtful web apps in React and TypeScript. Trained in industrial product design (B.Tech) and IT management (M.Sc.). Currently at CP Group, open to mid-level frontend or product-engineer roles in Bangkok or remote.",
  status: "Open to opportunities",
  location: "Bangkok",
  email: "atiphan.ch@gmail.com",
  phone: "+66 61 393 3559",
  phoneRaw: "+66613933559",
  linkedin: "https://linkedin.com/in/itagnats",
  linkedinHandle: "linkedin.com/in/itagnats",
  github: "https://github.com/itagnats",
  githubHandle: "github.com/itagnats",
  cvUrl: "/atiphan-cv.pdf",
} as const;

export const stack = [
  { name: "React", short: "⚛", color: "react" },
  { name: "TypeScript", short: "TS", color: "ts" },
  { name: "Tailwind CSS", short: "≋", color: "tw" },
  { name: "Figma", short: "◆", color: "figma" },
] as const;

export const about = {
  headline: { line1: "Design-minded.", line2: "Engineering-focused." },
  bio: [
    "I'm a frontend developer who came to engineering through industrial product design. That background shapes how I think about software — I care as much about how a system feels to use as how it's built.",
    "At CP Group I ship React/TypeScript modules used by 200–1,500 internal users, work across the seams of frontend and API design, and contribute UX and architecture decisions on adjacent modules. I'm looking for a role where design judgment matters as much as code quality.",
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
  tagline: "Tagline goes here — edit me",
  description:
    "Short description of POCKITA — what it does, who it's for, what makes it interesting. This text is a placeholder; swap it for the real pitch when ready.",
  liveUrl: "#",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI API"],
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
    date: "Jul 2023 – Present",
    title: "Software Developer",
    sub: ["Frontend (React / TypeScript)", "CP Group, Bangkok"],
    icon: "briefcase" as const,
  },
  {
    date: "Apr 2021 – Jun 2023",
    title: "Store Layout Designer",
    sub: ["TD Tawandang Co., Ltd.", "(Carabao Group), Bangkok"],
    icon: "pen-tool" as const,
  },
  {
    date: "2023",
    title: "M.Sc. Information\nTechnology Management",
    sub: ["Mahidol University"],
    extra: "GPA 4.00, First-Class Honors",
    icon: "graduation-cap" as const,
  },
  {
    date: "2020",
    title: "B.Tech. Industrial\nProduct Design",
    sub: [
      "Rajamangala University of",
      "Technology Rattanakosin",
    ],
    extra: "GPA 3.61, Second-Class Honors",
    icon: "box" as const,
  },
  {
    date: "2024",
    title: "IEEE Publication —\nTransformer Models for\nCyberbullying Detection",
    sub: ["Co-author · TIMES-iCON 2024"],
    icon: "file-text" as const,
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

export const navItems = [
  { id: "home", label: "Home", icon: "home" as const },
  { id: "about", label: "About", icon: "user" as const },
  { id: "work", label: "Work", icon: "briefcase" as const },
  { id: "experience", label: "Experience", icon: "activity" as const },
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
  summary:
    "Frontend developer with a designer's eye. 3+ years shipping React/TypeScript modules at CP Group, used by 200–1,500 internal users. Background in industrial product design (B.Tech) and IT management (M.Sc., GPA 4.00). Co-author on an IEEE paper on transformer models for cyberbullying detection.",
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
      org: "CP Group, Bangkok",
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
   Astronaut dialog popup — random rotation of messages
   ============================================================ */
export const astronautMessages = [
  "Hey! Thanks for floating by. I'm Atiphan — frontend dev, designer, occasional space tourist. Look around, hope you find something cool.",
  "Welcome aboard! If you came here looking for a frontend engineer who actually cares about design, you're in the right airlock.",
  "Greetings, traveler. Currently transmitting from CP Group HQ in Bangkok. Open frequencies for new opportunities — feel free to ping me.",
  "Status update: shipping React modules, sketching ideas in Figma, occasionally questioning life choices. Standard astronaut stuff.",
  "Hi there! Fun fact — I came to engineering through industrial product design. That's why I care about how things feel, not just how they work.",
] as const;
