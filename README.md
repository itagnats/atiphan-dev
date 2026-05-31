# Atiphan — Portfolio

Personal portfolio site, built with **Next.js 16**, **React 19**, **Tailwind v4**, **Framer Motion**, and **Lucide**.

## Setup (one-time)

Open a terminal in this folder (`D:\Personal\ita-dev-app`) and run:

```bash
npm install
```

This will install all dependencies into `node_modules/` (~ 1–2 min).

## Run locally

```bash
npm run dev
```

Then open <http://localhost:3000>.

## Project structure

```
app/
  globals.css          ← Tailwind v4 + theme tokens + section bg classes
  layout.tsx           ← Fonts (Inter, Space Grotesk, JetBrains Mono) + metadata
  page.tsx             ← Assembles all sections
components/
  Navigation.tsx       ← Desktop side rail + mobile menu (scroll-spy)
  PhoneCarousel.tsx    ← POCKITA phone carousel (client-side)
  SectionHead.tsx      ← Shared "01 SECTION" label component
  Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    Work.tsx           ← Featured project + CP Group grid
    Experience.tsx
    Contact.tsx
data/
  portfolio.ts         ← ALL CONTENT — edit this file to update text
lib/
  utils.ts             ← cn() class-merge helper
public/images/
  hero-bg.webp         ← AI-generated artwork
  about-bg.webp
  contact-bg.webp
  avatar.webp
  (+ PNG fallbacks)
mockups/
  index.html           ← Original HTML mockup (reference, not deployed)
```

## Editing content

Almost all text lives in `data/portfolio.ts` — name, role, intro, bio, project descriptions, experience entries, contact links. Edit and save; the dev server hot-reloads.

## Replacing the CV

Drop your PDF at `public/atiphan-cv.pdf` and the "Download CV" button will serve it.

## Deployment

When ready, deploy to Vercel:

```bash
npm i -g vercel
vercel
```

…or push to GitHub and import in the Vercel dashboard.

## Build for production

```bash
npm run build
npm start
```
