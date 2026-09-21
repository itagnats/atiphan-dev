# Portfolio Audit — target role: mid-level Frontend Developer

**Date:** 2026-09-01
**Reviewed at commit:** `34d9191` + uncommitted OYW revert
**Lens:** what a FE hiring manager / recruiter sees in the first 90 seconds, and what they look for next.

---

## P0 — Fix before sending this link to anyone

### 1. The POCKITA phone mockup shows literal template placeholder text

This is on the homepage, inside your **featured** project — the highest-attention element on the site.

Rendered right now (`data/portfolio.ts` → `featuredProject.phones`, and hardcoded in `components/PhoneCarousel.tsx`):

| Where | Text shown |
|---|---|
| Home phone headline | **"Catchy headline goes here."** |
| Home phone subtitle | **"Short app tagline, edit me anytime."** |
| Home phone cards | **"Item one" ★★★★★ · "Item two" ★★★★☆**, both priced **"$ 00.00"** (hardcoded, `PhoneCarousel.tsx:151-152`) |
| Detail phone | **"Premium item name"**, **"$ 00.00"**, **"4.8 · 240 reviews"** |

Two separate problems:

- **It reads as unfinished.** "edit me anytime" on a portfolio's flagship project is the single most damaging thing on this site.
- **It's the wrong product.** POCKITA is a personal *investment tracker*. The mockup is a generic **e-commerce** UI — product cards, star ratings, a price, a "Save" bookmark, a "Featured for you" shelf. It actively misrepresents what you built.

**Fix:** replace the mockup content with real POCKITA screens — a portfolio total in Baht, an asset-allocation breakdown, a holdings list (crypto / US stocks / gold / Thai funds). The two phone layouts (`home`, `detail`) can stay; only the copy and the card contents need to change. `PhoneCarousel.tsx` needs editing too, since "Item one/two" and `$ 00.00` are hardcoded in JSX rather than driven by data.

**Better still:** POCKITA is live at `pockita.vercel.app`. Take two real screenshots and render those instead of a hand-drawn mockup. Real screens beat a stylised mockup for a FE role every time.

### 2. Every case-study screenshot is a purple gradient placeholder

All 4 `/work/[slug]` pages render a "Screens" section of 3 gradient rectangles with a caption underneath — 12 placeholders total. Nothing visual exists anywhere in the CP Group work.

For a frontend role this is the biggest content gap on the site. The job is *making interfaces*; a portfolio with zero interface imagery asks the reader to take your word for it.

Options, best to worst:
1. Real screenshots with sensitive data replaced by realistic dummy values.
2. Redacted/blurred screenshots — enough to read the layout, not the data.
3. Rebuild one screen as a clean Figma-style mockup.
4. If genuinely nothing can be shown: **delete the "Screens" section** and add a one-line note ("Screens omitted — internal CP Group systems"). An honest absence reads far better than a placeholder.

### 3. Leadership photo captions are all "Photo 1", "Photo 2", "Photo 3"

18 photos, every caption a generic number (`data/portfolio.ts:234-310`). The caption is also passed to `alt` in `PhotoCarousel.tsx:60`, so this is an accessibility failure as well as a polish one — a screen-reader user hears "Photo 1" and learns nothing.

**Fix:** one descriptive line each ("Pitching ASAP at the Surging Star round", "Team workshop, Temasek Foundation exchange, Singapore").

---

## P1 — Content a mid-level FE hiring manager will look for and not find

### 4. There is no code to read

Not one link to a repository anywhere on the site. POCKITA has a `liveUrl` but no GitHub link; the CP modules have neither (understandable — internal). The GitHub icon in the nav points at your profile, which is a different thing from "here is the code for the project I just described."

For mid-level FE this is usually the deciding artifact. If POCKITA's repo is private, consider making it public, or extracting one interesting piece (the multi-currency FX logic, the anonymous-auth flow) into a small public repo.

### 5. The Hero stack row undersells you

Shows four: React, TypeScript, Tailwind, Figma. Missing from the site's front door but present in your CV: **Next.js**, React Hook Form, TanStack Query, Framer Motion, Zustand, Supabase.

Next.js in particular is a keyword recruiters filter on — and this very site is Next 16. Add at least Next.js.

### 6. "Software Developer" vs the role you're targeting

`personal.role` is `{ primary: "Software Developer", secondary: "" }`. If the target is mid-level **Frontend**, the H1 area should say so. "Frontend Developer" is the phrase in the job description and the phrase a recruiter scans for. Your CV summary already opens "Frontend developer with a designer's eye" — the site should match.

### 7. Contact blurb contradicts the Hero

Contact reads *"Open to mid-level frontend or product-engineer roles"* while the Hero says "Software Developer" and the About section is framed around human-centered AI. Pick one story. Given the goal, the frontend framing is the right one to lead with.

### 8. No CV file to download

`/cv` opens the browser print dialog and asks the user to "Save as PDF". Recruiters want a file to drop into an ATS. Generate `public/atiphan-charoenphon-cv.pdf` and link it directly, keeping the print view as a bonus.

### 9. Nothing about how you work

The case studies cover problem/solution/outcome well — that's genuinely strong. What's missing is the engineering craft signal: testing approach, code review, accessibility, performance work, how you handle state, why you chose a library. One short "How I work" block, or a paragraph per case study, would carry a lot of weight at mid-level.

### 10. No writing

Optional, but a single well-written technical post ("What I learned shipping a dynamic role system") differentiates strongly at this level and you clearly can write — the OYW essay is evidence.

---

## P2 — Technical quality (a FE reviewer will check these)

### 11. `next.config.ts` sets no security headers

The file is an empty stub. A frontend candidate whose own site scores badly on securityheaders.io is a small but real negative signal.

Add: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` (or CSP `frame-ancestors 'none'`), and a basic `Content-Security-Policy`.

### 12. No `robots.ts`, no `sitemap.ts`

Neither exists. Next's App Router makes both a ~10-line file. Without a sitemap the `/work/*` case studies are much less likely to be indexed.

### 13. `metadataBase` silently falls back to localhost

`app/layout.tsx` uses `process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"`. If that variable isn't set in the Vercel project, **every Open Graph image URL resolves to localhost** and link previews break on LinkedIn, Slack and Twitter — the exact places you'd share this. Verify it's set in production.

### 14. Page title is "Atiphan C."

Weak for search and weak in a browser tab full of candidates. Use "Atiphan Charoenphon — Frontend Developer" and give `/work/[slug]` pages an OG image.

### 15. Leadership images are heavy

18 JPGs, several 300–420 KB (`cp-exponential-surge-2025/01.jpg` is 401 KB, `team-building-2026/03.jpg` is 421 KB) — about 3.5 MB of source images. `next/image` resizes on delivery so this isn't a runtime disaster, but converting to WebP at sensible dimensions would cut the repo and speed up first build. The rest of the site already uses `.webp`.

### 16. No tests

No test runner configured. At mid-level, even a handful of component tests (Vitest + Testing Library) on the carousel or the nav scroll-spy is a visible signal that you think about correctness.

---

## What is already good — don't lose this in a rewrite

- **The case-study structure is genuinely strong.** Problem → solution → outcome, with concrete numbers ("200–1,500 internal users", "manual sync work eliminated"). Most junior/mid portfolios list technologies; yours describes impact. This is your best asset.
- **Content is fully separated from markup.** `data/portfolio.ts` drives everything; a reviewer who opens the repo sees deliberate architecture.
- **Design is coherent and distinctive.** The space theme, the script surname, the astronaut easter egg — memorable without being unprofessional.
- **The CV page's print pipeline is real engineering.** A single-page A4 `@media print` stylesheet is a nice, unusual detail.
- **Accessibility basics are present** — `aria-` attributes across 9 components, `alt` on every `next/image`.
- **Modern, current stack**, honestly applied: Next 16, React 19, Tailwind v4 CSS-first, strict TypeScript.

---

## Suggested order of work

| Priority | Item | Effort |
|---|---|---|
| 1 | POCKITA mockup — real content or real screenshots (#1) | M |
| 2 | Case-study screens — real, redacted, or honestly removed (#2) | M–L |
| 3 | Leadership photo captions (#3) | S |
| 4 | "Frontend Developer" + stack row + contact blurb alignment (#5, #6, #7) | S |
| 5 | Repo link(s) for POCKITA (#4) | S |
| 6 | Security headers, robots, sitemap, title/OG (#11–#14) | S |
| 7 | Downloadable CV PDF (#8) | S |
| 8 | Image optimization (#15) | S |
| 9 | "How I work" content (#9) | M |
| 10 | A few component tests (#16) | M |

Items 3–8 are all small and would take the site from "clearly unfinished in places" to "tight" in one sitting. Items 1 and 2 are the ones that actually change a hiring decision.
