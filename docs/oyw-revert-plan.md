# OYW → Portfolio Revert Plan

**Date:** 2026-09-01
**Baseline:** `34d9191` (HEAD, clean working tree)
**Pre-OYW reference:** `01623be`
**Strategy:** Surgical flip-back using the `// OYW:` markers. No `git revert`, no history rewrite.
**Status:** EXECUTED 2026-09-01. See "Outcome" at the bottom.

## Decisions already made
- Keep `<Leadership />` as a permanent portfolio section (alongside a restored `<Work />`).
- Keep all OYW files on disk; only unlink them from navigation/UI.

## Target page order & section numbering

| Order | Section | SectionHead | Nav id |
|---|---|---|---|
| 1 | Hero | — | `home` |
| 2 | About | `01 About` | `about` |
| 3 | Work | `02 Work` | `work` |
| 4 | Experience | `03 Experience` | `experience` |
| 5 | Leadership | `04 Leadership / Volunteer` | `leadership` |
| 6 | Contact | `05 Contact` | `contact` |

> Numbering must change: `Work` and `Experience` are both `02` today, and `Contact` is `04`.

---

## File-by-file changes

### 1. `app/page.tsx`
- Uncomment `<Work />`; drop the `eslint-disable` + OYW comment on the import.
- Keep `<Leadership />`, placed after `<Experience />`.

### 2. `data/portfolio.ts`
- `personal.role` → `{ primary: "Frontend Developer", secondary: "Product Designer" }`  **(OPEN — see D1)**
- `personal.intro` → restore original copy from the flip-back comment  **(OPEN — see D1)**
- `about.headline` → `{ line1: "Design-minded.", line2: "Engineering-focused." }` (2 lines)  **(OPEN — see D1)**
- `about.bio` → restore original two paragraphs  **(OPEN — see D1)**
- `contactTiles` → uncomment LinkedIn + GitHub tiles.
- `navItems` → restore `{ id: "work", label: "Work", icon: "briefcase" }`; keep `leadership`; `contact` label back to `"Contact"`.
- `contactCopy.headline` → `{ line1: "Let's", line2: "talk" }`.
- `astronautMessages` → restore the 5 original messages; remove the 5 OYW ones.
- `assignments` and `oywResume` exports: **kept as-is** (still imported by the unlinked `/assignments` routes).
- Remove the now-stale `// OYW:` flip-back comment blocks that have been applied.

### 3. `components/sections/Hero.tsx`
- Re-enable the status pill (`{false && …}` → rendered).
- Re-enable the "View Work" button (`href="#work"`).
- Re-enable the Stack row.
- Replace the "View assignments" button with the original "Get in Touch" (`href="#contact"`, `Mail` icon); drop the `ClipboardList` import and the `eslint-disable` on `Mail`.

### 4. `components/sections/Contact.tsx`
- Re-enable the blurb and the "View CV" button.
- **Remove the "Required Materials" assignment tiles block** (the only link into `/assignments`).
- Drop now-unused imports: `assignments`, `ChevronRight`, `FileText`, `PenLine`, `Video`, `ASSIGNMENT_ICONS`.
- `SectionHead` → `num="05" label="Contact"`.

### 5. `components/sections/Work.tsx`
- `SectionHead` → `num="02"` (unchanged label "Work").

### 6. `components/sections/Experience.tsx`
- `SectionHead` → `num="03"`.

### 7. `components/sections/Leadership.tsx`
- `SectionHead` → `num="04"`.

### 8. `components/Navigation.tsx`
- Uncomment the `Github` / `Linkedin` lucide imports and the two social `<a>` blocks.
- Remove the OYW comment markers.

### 9. `app/layout.tsx`
- `metadata.description` → drop the trailing `"One Young World 2026 application."` sentence.

### 10. `app/assignments/[slug]/page.tsx`  *(security hardening — see S1)*
- Add `robots: { index: false, follow: false }` to `generateMetadata`.
- Change the "Back to assignments" link `href` from `/#contact` to `/`.
- No other change; route stays buildable.

### 11. `README.md`
- Refresh the project-structure block: add `/cv`, `/assignments/[slug]`, and the components added since (`ResumeContent`, `VideoContent`, `LeadershipTabs`, `PhotoCarousel`, `AstronautDialog`, `PrintButton`, `SectionHead`).
- Remove the stale `mockups/index.html` entry (folder no longer exists).
- Note that `/assignments` is retained but unlinked and noindexed.

### 12. `CLAUDE.md`
- Update the "Three routes" section → four routes, documenting `/assignments/[slug]` as retained-but-unlinked.
- Note the section-numbering convention so it doesn't drift again.

---

## Open decisions (need Ita's answer before I execute)

**D1 — Positioning copy.** The OYW commit rewrote the site's core identity:

| | Pre-OYW | Current (OYW) |
|---|---|---|
| Role | Frontend Developer × Product Designer | Software Developer |
| Intro | "Building thoughtful web apps in React and TypeScript… open to mid-level frontend or product-engineer roles" | "…technology should adapt to humans, not force humans to imitate technology" |
| About headline | Design-minded. / Engineering-focused. | Design-led, / engineering-minded, / human-centered. |
| About bio | frontend-dev framing | CPLI / human-centered-AI framing |

The OYW copy may simply be *more current and more accurate*. Reverting it is a positioning choice, not a cleanup. Options: revert all, keep all, or mix.
*If D1 = "keep current copy", `About.tsx` keeps its 3-line render and `data/portfolio.ts` changes shrink to nav/tiles/astronaut only.*

**D2 — Astronaut messages.** Message #3 and #4 explicitly reference the OYW application and the Assignment section — those must change regardless. #1, #2, #5 are generic and could stay. Revert all 5, or only the two that name OYW?

**D3 — Video file.** `public/oyw-video.mp4` is 7 MB and is served publicly at `/oyw-video.mp4` by direct URL no matter what the UI links to. Keep as-is, or move it out of `public/`?

---

## Security notes

**S1 — Unlinked ≠ private.** `/assignments/resume`, `/assignments/video` and `/assignments/essay` are statically generated by `generateStaticParams` and remain publicly reachable by direct URL after unlinking. They expose the full essay, the OYW-tailored resume, and the pitch video. Mitigations, weakest to strongest:
1. `robots: { index: false, follow: false }` — blocks search indexing only. *(in the plan above)*
2. Remove the slugs from `generateStaticParams` so the pages 404 in a static export.
3. Move the route out of `app/` entirely (files preserved on disk, zero exposure).

Given the "keep files, unlink" choice I've planned for (1). Say the word if you want (2) or (3) instead.

**S2 — PII on a public site.** `personal.phone` (`+66 61 393 3559`) and `personal.email` are rendered in plain text and, with the LinkedIn/GitHub tiles restored, the contact surface widens. This is normal for a portfolio, but worth a conscious yes.

**S3 — No security headers.** `next.config.ts` is effectively empty. Recommend adding `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` (or CSP `frame-ancestors 'none'`). Out of scope for this revert — flagging as a separate follow-up.

---

## Verification steps
1. `npm run lint` — must pass clean (several `eslint-disable` lines are being removed; unused imports must go with them).
2. `npm run build` — must succeed; confirm `/`, `/cv`, `/work/[slug]`, `/assignments/[slug]` all generate.
3. `npm run dev` — visual check: nav shows Home / About / Work / Experience / Leadership / Contact; scroll-spy tracks all six; Hero pill + View Work + Stack render; Contact shows blurb, View CV, 4 tiles, no assignment tiles.
4. Print check on `/cv` — the `cv-*` class hooks are untouched, but confirm one-page A4 still holds.
5. `git diff --stat` review before commit.

## Rollback
Working tree is clean at `34d9191`. If anything goes wrong: `git checkout -- .` restores instantly. Nothing is deleted, so full OYW state stays recoverable from git regardless.


---

# Outcome — executed 2026-09-01

## Decisions taken

| ID | Decision |
|---|---|
| D1 | **Keep the current positioning copy.** "Software Developer" / human-centered-AI framing retained. `personal.role`, `personal.intro`, `about.headline` (3 lines) and `about.bio` unchanged; `About.tsx` untouched. Stale `// OYW: original …` comments removed — the originals remain in git at `01623be`. |
| D2 | **Replaced only the 2 OYW-specific astronaut messages.** #3 restored to the pre-OYW CPLI line; #4 kept but with the trailing "The full argument is in the essay." removed. #1, #2, #5 unchanged. |
| D3 | **Moved `public/oyw-video.mp4` → `assets/oyw-video.mp4`** (git mv). No longer served over HTTP, no longer in the deploy bundle. |
| S1 | **`/assignments/*` now 404s**, not just noindexed. |
| — | **Leadership kept** as a permanent portfolio section, alongside a restored Work section. |
| — | **OYW files kept on disk**, documented in place as retained-but-disabled. |

## Correction to the original plan

The plan proposed `robots: { index: false, follow: false }`. That was superseded by the 404 decision, and the implementation needed one thing the plan did not name:

> `generateStaticParams` returning `[]` is **not sufficient**. The App Router defaults to `dynamicParams = true`, so Next.js would still server-render `/assignments/essay` on demand and the page would stay publicly reachable. `export const dynamicParams = false` is what actually produces the 404. Both lines are load-bearing and are commented as such in the route file.

## Files changed

```
app/page.tsx                      restore <Work />, drop OYW comments
app/layout.tsx                    drop "One Young World 2026 application." from description
app/assignments/[slug]/page.tsx   dynamicParams = false; generateStaticParams -> []; back-link -> "/"
components/sections/Hero.tsx      re-enable pill / View Work / Stack; View assignments -> Get in Touch
components/sections/Contact.tsx   re-enable blurb + View CV; remove Required Materials tiles; 05 Contact
components/sections/Work.tsx      SectionHead 02
components/sections/Experience.tsx SectionHead 03
components/sections/Leadership.tsx SectionHead 04
components/Navigation.tsx         restore GitHub + LinkedIn icons
components/VideoContent.tsx       document the disabled state + moved asset path
data/portfolio.ts                 restore LinkedIn/GitHub tiles, work nav item, "Let's talk" headline,
                                  swap 2 astronaut messages, remove stale OYW comments,
                                  document assignments/oywResume as retained-but-disabled
README.md                         rewritten: routes table, real structure, section numbering, OYW note
CLAUDE.md                         four routes, section-numbering convention, dead-code + public/ warnings
public/oyw-video.mp4 -> assets/oyw-video.mp4
docs/oyw-revert-plan.md           this file
```

## Verification performed

`npm run lint` and `npm run build` exceed the 3-minute shell cap on the Windows-mounted filesystem, so verification ran on a copy in the cloud container (source only; `node_modules` reinstalled from `package-lock.json`).

| Check | Result |
|---|---|
| `npx tsc --noEmit` (on the real working tree, on device) | pass |
| `npm run lint` | pass, 0 problems |
| `npm run build` | success, 11 static pages |
| `/assignments/[slug]` in build output | listed with **zero** prerendered paths |
| `GET /`, `/cv`, `/work/quotation-module` | 200 |
| `GET /assignments/essay`, `/resume`, `/video` | **404** |
| `GET /oyw-video.mp4` | **404** |
| Rendered `/` section ids | `home, about, work, experience, leadership, contact` |
| Rendered SectionHead numbers | `01 02 03 04 05` |
| Rendered content | View Work, Get in Touch, Stack, status pill, "Let's talk", View CV, LinkedIn + GitHub all present; "Required Materials" and assignment links absent |

Note: the container has no egress to Google Fonts, so `next/font/google` was stubbed **in the container copy only** to let the build complete. The real `app/layout.tsx` on disk is unchanged and still loads all four fonts.

## Follow-ups not done (out of scope)

1. **`next.config.ts` has no security headers.** Recommend `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` (or CSP `frame-ancestors 'none'`).
2. **`contactCopy.blurb` is visible again** and reads "Open to mid-level frontend or product-engineer roles" — pre-OYW wording that sits slightly at odds with the retained "Software Developer" positioning from D1. Worth a copy pass.
3. **Contact section renders phone and email in plain text** on a public page. Normal for a portfolio, but a deliberate choice.
4. **`assets/oyw-video.mp4` is still a 7 MB blob in git history** at `293186a`. Removing it would require history rewriting; not recommended unless the repo goes public and size matters.
5. **No test runner configured.**


---

# Follow-up fix — 2026-09-01 (same day)

## Miss found by Ita

The Work section was restored, but its **Featured Project (POCKITA)** block was still
disabled and did not render.

**Why the first pass missed it.** The revert relied on grepping for `// OYW:` markers.
The POCKITA block was wrapped in `{false && ( … )}` during commit `293186a` with only a
plain comment — `{/* Featured: POCKITA — temporarily disabled */}` — and no `OYW` token,
so it never appeared in the marker sweep.

**Fix.** `git checkout 01623be -- components/sections/Work.tsx`. That commit's version of
the file is byte-identical to the intended state (the OYW commit's only change to this
file was the `{false && …}` wrapper plus its indentation; `SectionHead num="02"` was
already correct), so the restore is exact rather than hand-edited.

**Lesson for future sweeps:** grep for the *mechanism* (`{false &&`, commented-out JSX),
not only for the project tag. A marker-based search only finds what was politely labelled.

## Post-fix sweep — nothing else hidden

| Check | Result |
|---|---|
| `git grep "false &&"` in `app/` + `components/` | none remaining |
| `git grep "{/* <[A-Z]"` (commented-out JSX) | none |
| `display: none` outside `@media print` | none |
| `featuredProject` data vs `01623be` | identical |
| `cpModules` case studies | all 4 present (quotation-module, pms-dynamic-roles, enrollment-reservation, invoice-credit-note) |
| Remaining diffs vs `01623be` in About / Hero / Experience / Contact | reviewed — all genuine post-OYW improvements (framer-motion → motion/react, 3-line About headline per D1, Experience role tags, compact stat chips, conditional `role.secondary`), not disabled content |

## Re-verification

| Check | Result |
|---|---|
| `npm run lint` | pass, 0 problems |
| `npm run build` | success, 11 static pages |
| `GET /work/quotation-module` | 200 |
| `GET /assignments/essay` | 404 |
| `GET /oyw-video.mp4` | 404 |
| Rendered `/` sections | `home, about, work, experience, leadership, contact` |
| Rendered Work content | "Featured Project", POCKITA, tagline, `pockita.vercel.app`, "View site", CP Group cards — all present |
