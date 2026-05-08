# Phase 3 / Contact — Drop-in notes

**Status:** Complete. Build passes clean. End-to-end query-param routing verified at desktop and mobile.

This is the first of four Phase 3 page rebuilds (`/contact`, `/medscribeai`, `/pharmastockai`, `/about`). Contact ships first because the home-page CTAs route to `/contact?product=medscribeai` and `/contact?product=pharmastockai` — until this page handled those params, the lead-routing loop wasn't closed.

---

## Files in this drop & where they go

| File from this folder         | Destination in your codebase                                       | Action      |
|-------------------------------|--------------------------------------------------------------------|-------------|
| `Contact.jsx`                 | `src/pages/Contact.jsx`                                            | **Replace** |
| `_primitives/FormField.jsx`   | `src/components/website/_primitives/FormField.jsx`                 | **New**     |

---

## Files to delete from the codebase

The following four components are orphans — nothing in the codebase imports them, and the new `Contact.jsx` is fully self-contained. Safe to delete the entire folder:

```powershell
Remove-Item -Recurse src\components\contact
```

That removes `ContactHero.jsx`, `ContactMain.jsx`, `ContactFounder.jsx`, `ContactFooterBar.jsx`. None of them are imported by any live route.

---

## What changed structurally

| | Before | After |
|---|---|---|
| Hero | `min-h-[80vh]` dark blob hero with gradient-text "Infrastructure." headline + "Schedule a Discovery Call" CTA anchoring to the form | Light header section with deck-style eyebrow + headline + lede. Form is right below — no anchor jump needed. |
| Form layout | Two-column: HQ info left, form right (lg:grid-cols-2) | Same shape but tightened: HQ on a 5/12 column, form on 7/12. Form is the visual anchor; HQ is supporting context. |
| Audience selector | Custom button cards | Radio-style buttons with brand-color rings (emerald / cyan / slate) and check-icon when selected. Pre-selected by `?product=` query param. |
| Form fields | Inline placeholders only, no labels | New `FormField` primitive: uppercase eyebrow label above each input + cyan asterisk for required + cyan focus ring. |
| Founder's Direct | Same content | Same content, restyled to deck card pattern. Cyan top accent, quoted statement in Sora semi-bold, tier-2 visual weight. |
| Submit endpoint | Formspree (`xvzlzbvq`) | **Preserved unchanged.** No backend work required. |

---

## Query-param routing — wiring details

The home page `TalkToUs.jsx` CTAs route to:
- `/contact?product=medscribeai`
- `/contact?product=pharmastockai`

`Contact.jsx` reads `window.location.search` via `useLocation()` from `react-router-dom`, parses with `URLSearchParams`, and calls `setSelected(product)` when the param matches one of the three `INTERESTS` IDs. Unknown values are ignored silently (so a user hitting `/contact?product=foo` just sees the form with nothing pre-selected — no UI break).

The interest IDs match the param values exactly: `medscribeai`, `pharmastockai`, `partnership`. The third one isn't routed to from anywhere right now, but it's there for direct linking later (e.g., from outbound emails).

---

## Decisions made during the build

- **Hero scale:** dropped the `80vh` viewport-height treatment. Internal pages don't need full-height heroes — they need clear section headers. The header is `pt-32 pb-12` to `pt-44 pb-20` responsively, which gives weight without commanding the full viewport.
- **"Schedule a Discovery Call" CTA removed.** It anchored to the inquiry section via `#inquiry`. Replaced with putting the form directly below the header — one less click, more on-brand for the operator-register voice.
- **LinkedIn handle display.** The original showed the full URL `linkedin.com/company/nuscript-technologies`, which wraps ungracefully in narrow columns. Changed to `View on LinkedIn ↗` — cleaner.
- **HQ card top accent is slate, not cyan or emerald.** Operator restraint — the HQ card isn't selling either product, it's anchoring the physical context. Slate signals "company info" rather than "product channel."
- **Founder's Direct kept verbatim** — the quote, the enterprise threshold ("over a million lines monthly"), the founder email link, the NuScript Health reference. All preserved. Restyled to deck card pattern with cyan top accent.
- **Form field labels added.** The original was placeholder-only — accessibility-poor and easy to lose context once you start typing. New labels are uppercase eyebrow style, sit above each field.

---

## Deploy

After dropping the two new files and deleting the contact folder:

```powershell
cd C:\dev\nuscript-tech-website
npm run build
git status
git add -A
git commit -m "Rebuild Contact page on deck design system" -m "Wires the home-page CTA query-param routing (?product=medscribeai|pharmastockai) into the contact form's audience pre-selection. Adds FormField primitive (labeled inputs with cyan focus ring). Replaces the 80vh dark-blob hero with a deck-style light header. Form layout tightened to a 5/7 grid (HQ info left, form right). Existing Formspree endpoint preserved. Deletes orphaned src/components/contact/ folder."
git push origin main
```

---

## What's next in Phase 3

Three pages remain. Recommended next: `/medscribeai`, since that's the highest-traffic prospect destination from the home page and the new home-page hero already chips out to it.

- **`/medscribeai`** — needs a `StatCard` primitive (for any compliance / capability metrics worth featuring), a feature-grid pattern, possibly a workflow/pipeline diagram. ~1 day.
- **`/pharmastockai`** — same primitives as MedScribeAI plus a "before/after" pattern showing inventory chaos vs. controlled inventory. ~1 day.
- **`/about`** — heaviest copy, lightest design — `SectionHead` + `TopAccentCard` already cover most of what's needed. Founder section can lift directly from `WhyItWorks.jsx`. May want a timeline primitive for "NuScript Systems → MedScribeAI → PharmaStockAI." ~1 day.

Tell me when you're ready for the next page and I'll start on MedScribeAI.

---

*— end of Phase 3 / Contact notes*
