# Phase 2 — Landing page rebuild

**Status:** Complete. Build passes clean. Visual QA done at 1440px desktop and 390px mobile.

This phase rebuilt the entire `/` route to match the Sprint2Frontier deck's design language. The hero replicates slide 26 (dark, slate gradient, cyan-bright accent). Sections 2–5 replicate the deck's light body slides (slate text on paper, brand-colored top-accent cards, dark-slate banner pulled forward as a punctuating moment).

---

## 1. Files in this drop & where they go

All files are drop-in. No partial diffs. Paths below are relative to the project root.

| File in this folder            | Destination path in your codebase                                  | Action          |
|--------------------------------|--------------------------------------------------------------------|-----------------|
| `Hero.jsx`                     | `src/components/website/Hero.jsx`                                  | **Replace** (Phase 1 version had a duplicate logo; this version removes it since the navbar now carries it) |
| `Navbar.jsx`                   | `src/components/website/Navbar.jsx`                                | **Replace**     |
| `Footer.jsx`                   | `src/components/website/Footer.jsx`                                | **Replace**     |
| `Approach.jsx`                 | `src/components/website/Approach.jsx`                              | **New**         |
| `Products.jsx`                 | `src/components/website/Products.jsx`                              | **Replace**     |
| `WhyItWorks.jsx`               | `src/components/website/WhyItWorks.jsx`                            | **New**         |
| `TalkToUs.jsx`                 | `src/components/website/TalkToUs.jsx`                              | **New**         |
| `_primitives/Eyebrow.jsx`      | `src/components/website/_primitives/Eyebrow.jsx`                   | **New**         |
| `_primitives/SectionHead.jsx`  | `src/components/website/_primitives/SectionHead.jsx`               | **New**         |
| `_primitives/TopAccentCard.jsx`| `src/components/website/_primitives/TopAccentCard.jsx`             | **New**         |
| `_primitives/DarkBanner.jsx`   | `src/components/website/_primitives/DarkBanner.jsx`                | **New**         |
| `Home.jsx`                     | `src/pages/Home.jsx`                                               | **Replace**     |

The Phase 1 design-system files (`tailwind.config.js`, `src/index.css`, `index.html`) are also in this output folder. If you haven't already applied them, do so first — Phase 2 components depend on the tokens they define (`bg-paper`, `text-cyan`, `bg-emerald/10`, the font stack, etc.).

---

## 2. Files to delete from the codebase

These are now orphaned. `Home.jsx` no longer imports them and nothing else does either.

| Delete                                          | Why                                                                                                |
|-------------------------------------------------|----------------------------------------------------------------------------------------------------|
| `src/components/website/About.jsx`              | Replaced — its content is folded into `WhyItWorks.jsx` (founder credentials).                      |
| `src/components/website/WhyUs.jsx`              | Replaced — the 3-pillar section is replaced by the structural-reasons grid in `WhyItWorks.jsx`.   |
| `src/components/website/CTA.jsx`                | Replaced by `TalkToUs.jsx` (deck slide-25 pattern).                                                 |
| `src/hooks/useTheme.jsx`                        | Removed in this build (single-theme design system).                                                 |

After deleting, run `npm run build` to confirm nothing accidentally still imports them. The build I ran on my end after deleting `useTheme.jsx` passed clean (2630 modules, no errors).

---

## 3. Decisions made during the build

You said "rest in your hands" — so I called the eight open items from the Phase 1 outline myself. Here's what I decided and why. Mark anything you'd like reverted.

| # | Open item                                       | Decision                                                                                                       |
|---|------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| 1 | Dark banner ("We invoice for what we already ship") | **Kept.** It's the operator-register signature line and lands hard. Sits inside the Approach section, between the three cards and the next section. |
| 2 | "5–7 hours saved per pharmacy/week"             | **Softened** to *"Cuts hours of manual reorder work each week."* Defensible without specific pilot data. The hours figure can return when we have data we can publish. |
| 3 | Founder photo                                   | **Cyan-tinted "AM" monogram** designed in. Looks deliberate, not like a missing asset. To swap in a real headshot, replace the `<Monogram>` component in `WhyItWorks.jsx` with `<img src="/founder.jpg" />` — drop a square image into `/public/`. |
| 4 | Multi-market card 04 copy                       | **Kept,** softened slightly: *"MedScribeAI ships into US, UK, and Australian healthcare via the Indian MTSOs that serve those markets — same product, multiple end markets."* |
| 5 | CTA destinations                                | **Routed through `/contact?product=medscribeai`** and `/contact?product=pharmastockai`. When you rebuild the Contact page in Phase 3, read the `product` query param and pre-select the form's product field / pre-populate the subject. |
| 6 | Navbar over dark hero                           | **Option (b): transparent over hero, opaque on scroll.** Threshold is 80px. White logo + offwhite text when transparent; deck logo + ink-2 text when opaque. The flip is driven by `transparent={true}` on the Home page only — internal pages stay opaque from the start. |
| 7 | Theme toggle removal                            | **Removed.** No more `Sun`/`Moon` icons in the navbar, no `useTheme` import anywhere on the public site. |
| 8 | Page length / six sections                      | **Kept all six.** Page is roughly 5,000px tall on desktop, 15,600px on mobile. Reads as a deliberate flow rather than a long scroll because each section is visually distinct. |

---

## 4. Implementation details worth knowing

### Navbar transparent-on-hero pattern

`Navbar.jsx` accepts a `transparent` prop. When `true`, it attaches a `scroll` listener and flips to opaque mode after the user scrolls past 80px. The new `Home.jsx` passes `<Navbar transparent />`. Other pages call `<Navbar />` (no prop) and stay opaque from the start — exactly the behavior you want for `/medscribeai`, `/pharmastockai`, etc., which don't have dark heroes.

When you rebuild those pages in Phase 3, just keep them as `<Navbar />` and the navbar will behave correctly.

### Card height alignment in 2-column grids

All multi-card grids on this page use `<motion.div className="h-full"><Card>...</Card></motion.div>`. The `h-full` on the `motion.div` is required — without it, framer-motion's wrapper shrinks to its content and the inner card's `h-full` becomes meaningless. The `<p>` body text in `TalkToUs.jsx` cards uses `flex-grow` to push the CTA button to the bottom; the footer row in `Products.jsx` uses `mt-auto` (above sm:) to push pricing+CTA to the bottom of the card.

The result: in any side-by-side card grid where one card has more content than the other, both cards stretch to equal height and their footer rows align horizontally.

### Color mapping (deck-canonical, do not swap)

| Brand        | Color        | Used for                                                            |
|--------------|--------------|---------------------------------------------------------------------|
| MedScribeAI  | **Emerald**  | Card top accents, CTAs, eyebrows on MTSO-facing surfaces            |
| PharmaStockAI| **Cyan**     | Card top accents, CTAs, eyebrows on pharmacy-facing surfaces        |
| Section heads, accent rules, hyperlinks | **Cyan**  | Default brand-accent color for everything not product-specific |

### Animation policy

Every motion-animated element uses `whileInView` with `once: true` and `margin: '-60px'`. That means animations fire when an element gets within 60px of the viewport edge, and they don't replay on scroll-back-up. Easing is `[0.22, 1, 0.36, 1]` everywhere — the same easing used in the hero, so animation feels uniform across the page.

The framer-motion `whileInView` pattern has one footgun: server-side rendered or screenshot-tested pages (like Playwright's `fullPage: true` capture) won't actually scroll the page, so anything below the initial viewport stays at opacity 0 in the screenshot. This is purely a screenshot artifact — real users see all sections animate in normally as they scroll.

### Pricing rendering & the ₹ glyph

Sora doesn't include the U+20B9 Indian rupee glyph. The font stack chains to Inter, which does. So `₹25,000 – ₹1,00,000 / mo base + ₹0.50–0.70 / line` renders correctly: digits and punctuation in Sora, the ₹ falls through to Inter. The visual mismatch between the two fonts is small enough at 14px that it reads fine.

If you ever want pixel-perfect ₹ rendering matched to Sora's metrics, the Phase-2-deferred fix is to self-host an Inter `unicode-range` subset that only loads for U+20B9. Not urgent.

---

## 5. Known cosmetic items not addressed

These were judgement calls — not bugs, but worth flagging in case you want different.

| # | Item                                                  | Note                                                                                                  |
|---|------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| 1 | Anchor-link scroll padding                            | If a future link uses `#products` etc., the navbar (~70px tall when opaque) will partially cover the section heading. Easy fix when you add such a link: `html { scroll-padding-top: 80px; }` in `index.css`. Not added yet because the page has no fragment links currently. |
| 2 | ScrollProgressBar at top                              | Existing `<ScrollProgressBar />` component is preserved on `Home.jsx`. It draws a thin cyan progress bar across the very top of the page, including across the navbar. Looks fine but if you want it removed, drop the line from `Home.jsx`. |
| 3 | Scroll-to-top button                                  | Same — `<ScrollToTopButton />` preserved. Floats bottom-right. Cyan-tinted circle with up-arrow. |
| 4 | Footer social icons                                   | Removed. The original code had links to LinkedIn and Twitter handles I couldn't verify exist. Add back when the handles are confirmed by dropping `Linkedin` / `Twitter` icons from `lucide-react` into the brand column of `Footer.jsx`. |

---

## 6. Phase 3 prep

The four other public pages (`/medscribeai`, `/pharmastockai`, `/about`, `/contact`) will continue to render with the new `Navbar` and `Footer` automatically (they import the same files), but their internal sections still use the old design language and will look mismatched against the new home page.

When you're ready to start Phase 3, the primitive set (`Eyebrow`, `SectionHead`, `TopAccentCard`, `DarkBanner`) plus three more I'll add (`StatCard`, `TintBanner`, `FormField`) cover ~90% of what those pages need. Each page rebuild will be one section of `_primitives/` additions plus one page-level composition file.

Estimated rebuilds:
- `/medscribeai` — needs `StatCard` (for "Editor productivity 2×" type metrics if you have data to back them) and a comparison-table primitive. ~1 day.
- `/pharmastockai` — same primitives as MedScribeAI plus a "before/after" pattern. ~1 day.
- `/about` — heaviest copy, lightest design — uses `SectionHead` + `TopAccentCard` + a timeline primitive (NuScript Systems → NuScript Tech → MedScribeAI → PharmaStockAI). ~1 day.
- `/contact` — lightest of all four, just a form + the audience-routing logic from `?product=` query param. ~half day.

---

*— end of Phase 2 notes*
