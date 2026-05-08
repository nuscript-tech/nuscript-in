# Landing Page — Phase 1 Restructure Outline

**Status:** Phase 1 deliverable for review. Nothing in this document is implemented yet.
**Sister deliverables:** updated `tailwind.config.js`, `src/index.css`, `index.html`, and the new `Hero.jsx`.
**Phase 2 will be:** taking your edits to this outline and producing the drop-in section components.

---

## 1. Page composition (proposed)

Six sections, parallel to the current page count. Section order roughly mirrors the deck flow.

| # | Section          | Deck reference          | Surface | Purpose on the public site                                                |
|---|------------------|-------------------------|---------|---------------------------------------------------------------------------|
| 1 | Hero             | Slide 26 (close)        | Dark    | Brand image, two products signaled, contact surfaced. **Built in Phase 1.** |
| 2 | Approach / Thesis| Slide 2 (thesis)        | Light   | Three-card statement of how NuScript ships. No investor framing.          |
| 3 | Products         | Slide 5 (portfolio)     | Light   | Two product cards, deck-faithful comparison pattern. The heart of the page.|
| 4 | Why this works   | Slides 3 + 13 (combined)| Light + dark banner | Founder credibility plus the structural reasons the products land. |
| 5 | Talk to us       | Slide 25 (the ask)      | Light   | Two product-routed CTAs: MTSO buyer, pharmacy buyer.                      |
| 6 | Footer           | (existing footer pattern)| Light  | Minor token swap; structure preserved.                                    |

### Hard cut between hero and section 2

The hero is full-bleed dark; section 2 starts with `bg-paper` (light) directly below. No gradient fade between them. The deck does the same thing between slide 1 and slide 2 — it reads as deliberate, not abrupt.

### What got dropped from the current page

- The typing-word animation in the hero (`Healthcare. / Pharmacies. / Enterprise.`) — replaced by a static two-line headline.
- The animated neural canvas behind the hero — replaced by the deck's gradient + radial pattern.
- The live AI ticker (`Transcription accuracy: 99.2%` etc.) — these claims are unsupported in their current form; if we want metric callouts, they belong in the Products section as deck-style stat cards with sourced numbers.
- The "Institutional Trust" stats block on the current `About` section — folded into section 4 (founder credibility), with copy rewritten to operator register.
- The "Why NuScript Technologies?" pillar section (`Engineering-First / Zero-Friction / Future-Proof`) — replaced by the deck's structural-reasons pattern, scoped to the public site.

### What stayed and got reworked

- Two-product framing — preserved, but card design and copy adopt the deck slide-5 pattern.
- Two-path CTA at the bottom — preserved, but visual treatment moves to the deck slide-25 pattern.
- Footer — kept structurally; fonts and tokens swap to deck-aligned values automatically via the new Tailwind config.

---

## 2. Section-by-section copy

> **Voice rules** for everything below: operator register, restraint, no fundraising claims, no "$50M+" language, no "8x founder · multiple exits" on the public site (that's deck-only). Numbers must be defensible if a customer or journalist asks where they come from.

---

### Section 2 — Approach / Thesis

**Pattern:** Three cards, white background, 3px brand-colored top border, eyebrow + headline + body. Direct port of deck slide 2.

**Eyebrow + section headline:**

> **HOW WE SHIP**
> Engineering-first vertical SaaS, built where the work is.

**Lede paragraph (under headline, max-w-2xl, ink-2):**

> NuScript Technologies builds AI products for two markets we have operated inside for over two decades — global medical transcription and Indian retail pharmacy. We don't ship general-purpose tools.

**Three cards:**

| # | Eyebrow (color)        | Card headline                              | Card body                                                                                                                                          |
|---|------------------------|--------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | `01 · ENGINEERING` (cyan) | Coimbatore-built AI on a shared foundation. | One engineering team. Two production products. A shared medical-AI and infrastructure stack underneath both, so improvements compound across the portfolio. |
| 2 | `02 · OPERATOR-FOUNDED` (emerald) | 25 years inside the work we now automate.  | The founder has spent 25 years inside US healthcare documentation operations. Every product decision is informed by what actually breaks at scale, not what looks good in a demo.|
| 3 | `03 · ALREADY SHIPPING` (slate) | Production today, not a roadmap.           | MedScribeAI is live with paying tenants. PharmaStockAI is live with pilot pharmacies. We invoice for what we ship.                                |

> **Optional banner below the three cards** (deck-style dark-slate banner, white text, cyan-bright accent on the "what we ship" phrase):
>
> > Most healthcare AI startups pitch what they will build. **We invoice for what we already ship.**

This is the one place I'd lift a phrase verbatim from the deck (slide 6) — it captures the operator register exactly. Flag if you'd rather omit; the section reads fine without it.

---

### Section 3 — Products

**Pattern:** Two large cards in a 2-column grid (1-column mobile). Each card uses the deck slide-5 portfolio pattern: status eyebrow + product name + tagline + bulleted key facts + bottom pricing/status line.

**Section eyebrow + headline:**

> **TWO PRODUCTS**
> Two markets. One engineering team.

**Lede paragraph:**

> Each product is purpose-built for its operator profile. Buy the one that matches your business — both are live today.

#### Card 1 — MedScribeAI (emerald top border)

- **Eyebrow (emerald):** `LIVE · PRODUCTION · CASH-POSITIVE`
- **Product name (large):** MedScribeAI
- **Tagline (ink-2, ~16px):** Multi-tenant SaaS for medical transcription operators serving US, UK, and Australian healthcare clients.
- **Bulleted facts** (3 items, emerald `•` markers):
  - Multi-tenant: org-isolated workspaces, RBAC, BAA-ready
  - Editor-productivity multiplier — observed 2× in pilot tenants
  - HIPAA-aligned · US East infrastructure · audit logs
- **Footer line (emerald, mono-feel):** `₹25,000 – ₹1,00,000 / mo base + ₹0.50–0.70 / line`
- **CTA:** `Explore MedScribeAI →` (links to `/medscribeai`)

#### Card 2 — PharmaStockAI (cyan top border)

- **Eyebrow (cyan):** `LIVE · PHARMACY SUPPLY CHAIN`
- **Product name (large):** PharmaStockAI
- **Tagline (ink-2):** AI inventory and expiry intelligence for India's retail pharmacy ecosystem.
- **Bulleted facts** (3 items, cyan `•` markers):
  - Daily expiry alerts · WhatsApp-pushed reorder lists
  - Plugs into the billing software pharmacies already run
  - Pilot results: 5–7 hours saved per pharmacy per week
- **Footer line (cyan):** `₹499 / ₹1,499 / ₹1,999 per month`
- **CTA:** `Explore PharmaStockAI →` (links to `/pharmastockai`)

> **Note on numbers:** every metric above is taken from the deck. If any of them are deck-only and not defensible on a public marketing surface, mark them up here and I'll soften or remove. Specifically I'd flag "5–7 hours saved per pharmacy per week" — fine to publish if you have pilot data; replace with "Save hours of manual reorder work each week" if not yet substantiated.

---

### Section 4 — Why this works

**Pattern:** This section combines two deck slides (founder credentials from slide 3, structural reasons from slide 13) into a single block. Two-column on desktop:
- Left column: a vertical "founder card" — photo placeholder + name + role + 4 short credential lines.
- Right column: four small structural-reason cards in a 2×2 grid (deck slide-13 pattern).

**Section eyebrow + headline:**

> **WHY IT LANDS**
> The reason this works isn't just engineering. It's domain depth.

**Lede paragraph:**

> NuScript Technologies is a small team. The reason MedScribeAI and PharmaStockAI ship into two distinct markets is that the founder has operated inside both for over two decades.

#### Left column — Founder card (large, white card with cyan top border)

- Photo placeholder (square, 200×200)
- **Name:** Arvind Manohar
- **Role (cyan eyebrow):** FOUNDER & CEO · COIMBATORE
- **Credential lines** (each 1 sentence):
  - 25 years inside US healthcare documentation operations.
  - Founder of NuScript Systems Inc., a profitable US healthcare services company providing the operational depth behind every product decision.
  - Solo technical builder of MedScribeAI and PharmaStockAI — both in production today.
  - MBA, Madurai Kamaraj University · B.S. Physics, Bharathiar University.

#### Right column — Four structural-reason cards (2×2 grid, smaller)

| #  | Eyebrow (color)     | Card title                          | Body                                                                                                                       |
|----|---------------------|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| 01 | `ENGINEERING` (cyan)    | US-grade infrastructure today.       | HIPAA-aligned, US East, audit logs, RBAC, BAA-ready. Built to the standard the buyer's compliance team will actually audit.|
| 02 | `DOMAIN` (emerald)      | Depth pure-tech founders cannot copy.| 25 years of operating knowledge feeds into every product surface — what gets denied, where ambient AI breaks, where editor cycles hide.|
| 03 | `COST` (cyan)           | India engineering, global delivery. | Engineering at India cost structure. Customer-facing where the customer is. Margin compounds at scale.                     |
| 04 | `MULTI-MARKET` (emerald)| One product, multiple geographies.   | MedScribeAI ships into US, UK, and Australian healthcare via the Indian MTSOs that serve those markets — same product, four end markets.|

> **Note on card 04:** the "multiple geographies" card is true even with Zera removed from the public site, because MedScribeAI's MTSO buyers themselves serve US/UK/AU clients. Worth keeping. If it reads as overstated, alternative copy: "MedScribeAI is built for the cross-border workflow Indian MTSOs already operate inside — US/UK/AU clients on Indian engineering."

---

### Section 5 — Talk to us

**Pattern:** Section eyebrow + headline + two-column CTA, each card routed to a product. Direct port of the existing CTA section, restyled to the deck slide-25 pattern.

**Section eyebrow + headline:**

> **GET IN TOUCH**
> Choose the product that matches your business.

**Two CTA cards:**

#### Card 1 — For MTSOs (emerald accent)

- **Audience eyebrow (emerald):** `FOR MEDICAL TRANSCRIPTION OPERATORS`
- **Headline:** Scale your editor capacity without scaling headcount.
- **Body:** MedScribeAI is purpose-built for MTSOs serving US, UK, and Australian clients. 14-day pilot, no commitment.
- **Button:** `Talk to us about MedScribeAI` → mailto or `/contact?product=medscribeai`

#### Card 2 — For pharmacies (cyan accent)

- **Audience eyebrow (cyan):** `FOR INDIAN PHARMACIES & CHAINS`
- **Headline:** End expiry waste. Stop stocking out. Save hours.
- **Body:** PharmaStockAI runs alongside your existing billing software. Pilot starts free.
- **Button:** `Talk to us about PharmaStockAI` → mailto or `/contact?product=pharmastockai`

---

### Section 6 — Footer

**No structural change.** The existing Footer composition is fine — three columns (brand / products / company), bottom legal bar. Token migration handles the visual update automatically.

**Two micro-edits suggested:**

1. The current brand-column tagline reads `Building intelligent systems for India's healthcare and pharmaceutical sectors.` Tighten to: `Vertical SaaS for healthcare and pharmacy operations. Engineered in Coimbatore.`
2. Drop the `useTheme` import and the `isDark ? logo-white : logo` conditional — single theme means we always use the dark-bg-friendly logo on the dark hero and the light logo everywhere else. The footer sits on light surface, so it should always use `/nuscript-logo.png`.

---

## 3. Component patterns to build (Phase 2)

These are the reusable pieces I'd build once and reuse across the page (and later, across the four other site pages). Naming uses the deck pattern terminology so it's portable.

| Pattern        | Used in sections | Description                                                                                       |
|----------------|------------------|---------------------------------------------------------------------------------------------------|
| `<Eyebrow>`    | 2, 3, 4, 5       | 11px uppercase 0.08em-tracked label. Color prop: cyan / emerald / slate / muted.                  |
| `<SectionHead>`| 2, 3, 4, 5       | Eyebrow + h2 (Sora 700, -0.025em) + optional lede paragraph. Centered or left variant.            |
| `<TopAccentCard>`| 2, 3, 4         | White card, 1px rule border, 3px brand-colored top border, 22×24 padding, radius-lg.              |
| `<StatCard>`   | (future)         | Tabular-numeric large number + label. Cyan/emerald/slate variant. For metric callouts.            |
| `<DarkBanner>` | 2 (optional), elsewhere | Slate background, white text, cyan-bright accent on key phrase. Center-aligned.            |
| `<TintBanner>` | (future)         | Cyan-tint background, ink-2 text, cyan accent on key phrase.                                      |

I'll bake all of these into `src/components/website/_primitives/` in Phase 2 so the four other pages (`/medscribeai`, `/pharmastockai`, `/about`, `/contact`) can compose from them in Phases 3a–3d.

---

## 4. Open items needing your call before Phase 2 starts

These are decisions I'm not making for you. Mark each one and I'll fold the answers into the Phase 2 build:

1. **Section 2 dark banner** — keep the "We invoice for what we already ship" line, or omit?
2. **Section 3 metrics** — is "5–7 hours saved per pharmacy per week" defensible to publish, or soften?
3. **Section 4 founder photo** — do you have a headshot we should use, or use a placeholder until you provide one?
4. **Section 4 card 04 ("Multi-market")** — keep with current copy, or swap to the softer alternative I noted?
5. **Section 5 CTA destinations** — `mailto:arvind.manohar@nuscript.in?subject=…`, or route through `/contact` with a query param? (The Contact page already exists; routing through it captures the lead in one place.)
6. **Navbar over the dark hero** — Phase 1 leaves the navbar as-is (translucent paper backdrop floating over dark hero, which will read as a hazy strip). Three options for Phase 2: (a) leave it, (b) make navbar transparent over hero and opaque on scroll, (c) restyle the navbar dark on the home page only. My recommendation is (b) — it's the standard modern web pattern and matches the deck-faithful aesthetic.
7. **Theme toggle removal** — I've left the toggle button in `Navbar.jsx` and `useTheme.jsx` untouched in Phase 1 (since the new tokens are single-theme, the toggle is now inert — clicking it does nothing visible). For Phase 2 I'll remove the toggle button, the `useTheme` hook, and the `isDark` conditional on the logo. Confirm.
8. **Page length** — six sections including hero is roughly 5,500–6,500px tall on desktop. If you want a tighter page (more landing-page-y), we can collapse sections 4 and 5 into one or move section 4 to a separate `/why-us` page. Default plan is to keep all six.

---

## 5. What Phase 2 will deliver

Once you've reviewed this outline and answered the open items above, Phase 2 will produce:

1. Six new component files under `src/components/website/_primitives/` (the patterns table in §3).
2. Five new section component files under `src/components/website/`: `Approach.jsx`, `Products.jsx` (rewrite), `WhyItWorks.jsx`, `TalkToUs.jsx` (rewrite of `CTA.jsx`), and a refreshed `Footer.jsx`.
3. An updated `Home.jsx` composing the new sections in order.
4. A small `Navbar.jsx` patch implementing whichever option you pick from open item #6.
5. Removal of `useTheme.jsx` and the theme toggle button per open item #7.

All deliverables as complete files, drop-in. No partial diffs.

---

*— end of Phase 1 outline*
