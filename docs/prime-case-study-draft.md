# PRIME — portfolio case study, draft copy

**Status: draft for review. Nothing on the site yet.**
Written 2026-09-16 from `README.md`, `docs/architecture.md`, `docs/data-flow.md`
and `docs/process-flow.md`. Every figure below is taken from those documents —
none is invented. Where I was unsure I have marked it **[CHECK]**.

Editorial choices applied:
- **Scope, not defects.** Writes-don't-persist and the open evaluation loop are
  stated as scope. F-1, F-5 and F-6 are not mentioned. This depends on the
  Submit button being wired or removed before launch.
- **Naming.** Your docs say "School Management System"; you now call it a
  university ERP. I have written it as **higher-education programme
  management**, which is true either way. Pick one before launch and I will
  make it consistent. **[CHECK]**

---

## 1 · The card (Work section, featured slot)

> **PRIME**
> Higher-education programme management — built solo
>
> Curriculum, enrolment, costing, invoicing and a 360° evaluation chain, as one
> system rather than four. Twelve domains, thirty-three API endpoints, and a
> design system whose contrast figures are computed from the shipped CSS rather
> than claimed.

Label: `PERSONAL PROJECT · LIVE` *(only once it is)*
Role line: `Role: Product + Architecture + UX + Frontend`

---

## 2 · Overview

A programme management system for a higher-education provider: curriculum and
semesters, student enrolment and records, cost management and pricing,
invoicing, and a 360-degree evaluation chain that runs from a weighted score
through ranking and grade to a printable individual report.

Built solo, front to back — domain model, API design, design system, and the
documentation that explains the reasoning rather than restating the code.

---

## 3 · Problem

I had shipped four modules into production at CP Group — quotation, performance
evaluation, enrolment, invoicing — and each one solved its own problem well
while sharing nothing with the others. Separate ideas of what a status meant.
Separate ways of deriving the same kind of number. Nothing that could answer a
question spanning two of them.

I wanted to know what those four would look like designed as one system from the
domain upward, and I wanted to build it somewhere I could show the result. So
PRIME is the same shape of problem in an entirely different context, with
fictional data and no client constraints.

---

## 4 · Solution

**Three chains off one spine.** Money, people and judgement all hang off
Course → Semester, and they join at three points rather than passing numbers
between each other. Cost per student is computed against the people who actually
enrolled in that course, not the programme head count reused — a student in a
programme has not necessarily taken every course in it.

**Derived beats stored, everywhere it can.** A grade is a pure function of its
score, so the two cannot drift. An indirect cost share comes from credit hours,
so the shares cannot fail to total 100. An evaluation assignment exists because
a setup names your role, not because a row says so. Two screens cannot disagree
when there is no second copy to disagree with.

**A generic component never learns domain vocabulary.** `StatusBadge` knows six
visual tones and nothing about enrolment; each feature maps its own status union
onto a tone in its own constants file. Dependencies point one way only — tokens,
primitives, shared patterns, layout, features, routes — and a component that
needs to import from a feature is a component in the wrong layer.

**Business math lives in a tested calculation layer, never in JSX.** Eleven pure
modules, each with a test file beside it, because that is the part that can be
wrong without looking wrong.

**The rules are refused server-side, not discouraged in the client.** An
unbalanced evaluation blend, an indirect cost item on a course sheet, a second
programme term in the same semester, deleting a catalogue item a sheet has
copied — all rejected by the API. A rule the client alone enforces is a
suggestion.

---

## 5 · Outcome

**A costing model that cannot leak.** The first design let each course type an
allocation percentage of an undefined whole; across the dataset, **82 of 92 cost
pools recovered less than the cost they were meant to cover**. Replacing it with
a share derived from credit hours — distributed by largest remainder so the
parts sum to the pool to the satang — made the failure unrepresentable rather
than merely detectable.

**A revenue number that stopped lying.** Profit was calculated as package price
× enrolled students, which counted **฿4.79M of ฿18.35M — 26% of booked revenue —
from students who had not started**. Moving to an invoiced-and-collected basis
turned one programme term from a reported profit into **−฿28,888**, and the
screen now says why. The regression test that pins it is called *"does not count
outstanding invoices as profit."*

**Documentation that fails the build when it drifts.** Every count in the docs
is checked against the filesystem by a test, so a number that falls behind the
code breaks CI instead of quietly misleading a reader.

**97.56% statement coverage over the calculation layer** — scoped there on
purpose, since the rest is presentation whose tests would mostly assert on
markup.

---

## 6 · Scope block

> **What this is, and what it is not**
>
> PRIME is a portfolio project. The institution, the courses and every student
> record are fictional, generated from a fixed seed so the dataset is identical
> on every load.
>
> There is a demo sign-in with four roles and no password. It is deliberately
> authorisation without authentication: the point is to show where the access
> check belongs — one policy table, one enforcement point, an allowlist that
> falls closed — not to pretend the session is secure. Every surface says so.
>
> **Writes validate and return the correct result, then persist nothing.** The
> deploy target is serverless, so there is no long-lived process to hold state,
> and a shared store would show one visitor another's edits. Every page load
> starts again from the seed.
>
> Evaluation submission is out of scope for this phase: the forms shape their
> answers, and scores are derived so the chain through ranking, grade and report
> can be walked end to end.

---

## 7 · Deep-dive sections (detail page)

Three, in this order. Each is a decision, not a feature.

### The share that could not be typed
`allocationPercent` sat on each course and had nothing to be a percentage *of*.
82 of 92 pools under-recovered. The rebuild moved indirect costs onto the
programme term, derived each course's share from its credit hours, and used
largest-remainder distribution so rounding cannot leak. Markup and rounding
moved to the term, because several per-course markups leave a programme total
that no screen adds up.

### Entitlement is not revenue
Package price × head count is what the price *implies*. Revenue is the sum of
billed invoices; profit is stated on what was actually collected. A student who
has been billed and has not paid is money owed, not money earned. The five terms
whose invoices are all drafts now report no revenue at all rather than the
฿5.49M their prices imply — and say why.

### Null is not zero
Cost per student with no students, a subject with no submissions, a course with
no cost sheet contributing to a programme's profit — each is *unknown*, and the
count of unknowns travels with the result, so an incomplete total is never shown
as a finished one.

---

## 8 · Tech

Next.js 16 (App Router, Turbopack) · TypeScript strict · Tailwind CSS v4
(CSS-first) · shadcn/ui on Radix · TanStack Query · TanStack Table **[CHECK the
version string — your README says v9]** · React Hook Form + Zod · Recharts ·
date-fns · next-themes · Vitest

---

## 9 · Numbers available for the page

Use sparingly — two or three, not all of them.

| Figure | Source |
| --- | --- |
| 12 feature domains · 33 API route handlers | README, architecture.md **[CHECK: README says "eleven modules built"]** |
| 11 calculation modules · 16 test files | README |
| 97.56% statement coverage, calculation layer | README |
| 12 contrast pairs clearing 4.5:1 in both themes | README |
| 300 students · 635 programme enrolments · 1,297 course enrolments · 635 invoices | process-flow.md |
| 82 of 92 pools under-recovered (before the rebuild) | process-flow.md |
| ฿4.79M of ฿18.35M, 26% of booked revenue | process-flow.md |
| −฿28,888 net, collected basis | process-flow.md |

---

## 10 · Screenshot shot list

For your QA pass — capture these and the case study fills itself in:

1. **A programme term with the profit panel** — the money chain visible: invoiced, collected, outstanding, net.
2. **A course cost sheet** — direct costs, the derived share, subtotal, markup, cost per student. The arithmetic shown rather than hidden.
3. **Evaluation results** — per-role contributions before the blended score.
4. **An individual student report** — the end of the longest chain.
5. **`/design-system`** — the token and primitive documentation.
6. **`/system-guide`** — the domain mind map and the money chain re-derived live.
7. **The student role dashboard** — same app, different shape, showing the access model.
8. **Any screen in dark mode** — proves the theme is real.

Portrait phone captures work for the carousel; wide captures suit the detail
page. Both are useful.

---

## Before this ships

- Deploy, then walk it in a browser — desktop and mobile, light and dark.
- Wire or remove the evaluation Submit button. The scope framing above only
  holds if there is no dead control to find.
- Settle school vs university, and the eleven/twelve module count.
- Decide whether the live link goes on the card, the detail page, or both.
