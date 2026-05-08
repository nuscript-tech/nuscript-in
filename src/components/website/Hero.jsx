import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/*
 * NuScript Technologies — Hero (landing page)
 *
 * Replicates slide 26 of the Sprint2Frontier deck (the close slide):
 *   • Diagonal slate gradient with cyan radial overlay (background image
 *     defined as `bg-hero-gradient` in tailwind.config.js).
 *   • NuScript wordmark anchored top-left.
 *   • Two-line headline: white statement, cyan-bright accent on line 2.
 *   • Subhead pulled from existing site voice (Coimbatore-built operator
 *     register), not the deck's investor framing.
 *   • Two product chips — MedScribeAI (emerald) and PharmaStockAI (cyan-bright).
 *     The deck's third chip (Zera) is intentionally absent from the public site.
 *   • Footer-info row mirrors the deck close-slide footer:
 *     entity left, contact right.
 *
 * The hero is permanently dark — there is no theme toggle. The fixed Navbar
 * floats above this section; its translucent paper backdrop will read as a
 * hazy strip over the dark gradient. That's acceptable for Phase 1; full
 * navbar refinement (transparent-over-hero, opaque-on-scroll) is a Phase 2 item.
 *
 * All copy is centralized at the top of this file — edit there, not in JSX.
 */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

const HEADLINE = {
  line1: "Built from India.",
  line2: "Ready to scale globally.",
};

const SUBHEAD =
  "Two live AI products. One Indian holdco. Vertical SaaS for global healthcare and Indian pharmacy — engineered in Coimbatore.";

const PRODUCTS = [
  { label: "MedScribeAI",   to: "/medscribeai",   accent: "emerald" },
  { label: "PharmaStockAI", to: "/pharmastockai", accent: "cyan"    },
];

const FOOTER = {
  entity:  "NuScript Technologies Pvt Ltd · Coimbatore, India",
  tagline: "Engineering-first vertical SaaS for healthcare & pharmacy",
  email:   "arvind.manohar@nuscript.in",
  domain:  "nuscript.in",
};

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-hero-gradient text-white"
      aria-label="NuScript Technologies"
    >
      {/* Inner frame — shares the 6xl max-width used elsewhere on the site. */}
      <div
        className="
          mx-auto flex w-full max-w-6xl flex-col justify-between
          px-6 pt-28 pb-14
          sm:px-10 sm:pt-32 sm:pb-16
          lg:px-12 lg:pt-40 lg:pb-20
          min-h-[88vh] lg:min-h-[92vh]
        "
      >
        {/* Spacer where the wordmark used to anchor — the navbar carries it.
            Keeping a deliberate top region so the headline doesn't sit too
            close to the navbar bar and the slide-26 vertical rhythm is
            preserved. */}
        <div aria-hidden="true" className="h-2 sm:h-4" />

        {/* ─── Middle: headline + subhead + product chips ──────────────── */}
        <div className="flex flex-col gap-7 pt-12 sm:pt-16 lg:pt-20">
          <motion.h1
            {...fadeUp(0.08)}
            className="
              max-w-4xl font-sora font-bold text-white
              leading-[1.04] tracking-[-0.038em]
            "
            style={{ fontSize: "clamp(2.5rem, 4.4vw + 1.25rem, 5.75rem)" }}
          >
            {HEADLINE.line1}
            <br />
            <span className="text-cyan-bright">{HEADLINE.line2}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.18)}
            className="
              max-w-2xl text-base leading-relaxed text-offwhite/70
              sm:text-lg sm:leading-[1.55]
              lg:text-xl
            "
          >
            {SUBHEAD}
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-3 pt-1">
            {PRODUCTS.map((p) => (
              <Chip key={p.label} to={p.to} accent={p.accent}>
                {p.label}
              </Chip>
            ))}
          </motion.div>
        </div>

        {/* ─── Bottom: entity left, contact right ─────────────────────── */}
        <motion.div
          {...fadeUp(0.38)}
          className="
            mt-12 flex flex-col gap-5 border-t border-white/[0.08] pt-7
            sm:mt-16 sm:flex-row sm:items-end sm:justify-between sm:gap-10
          "
        >
          <div className="space-y-1.5">
            <p className="text-[13px] leading-relaxed text-offwhite/60">
              {FOOTER.entity}
            </p>
            <p className="eyebrow text-offwhite/40">
              {FOOTER.tagline}
            </p>
          </div>

          <div className="space-y-1.5 text-left sm:text-right">
            <a
              href={`mailto:${FOOTER.email}`}
              className="block text-[13px] font-medium text-cyan-bright transition-opacity hover:opacity-80"
            >
              {FOOTER.email}
            </a>
            <span className="block text-[13px] text-cyan-bright/65">
              {FOOTER.domain}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Product chip ──────────────────────────────────────────────────────
 * Mirrors the deck slide-26 chip pattern:
 *   • 1px brand-colored border at ~22% opacity
 *   • brand color at ~10% as background fill
 *   • brand color at full opacity for text
 *   • uppercase, 11px, +0.08em tracking, weight 700
 * Hover state nudges border opacity up to 40% — restrained interactivity.
 * ─────────────────────────────────────────────────────────────────────── */
function Chip({ to, accent, children }) {
  const palette =
    accent === "emerald"
      ? "border-emerald/25 bg-emerald/10 text-emerald hover:border-emerald/45 hover:bg-emerald/[0.14]"
      : "border-cyan-bright/25 bg-cyan-bright/10 text-cyan-bright hover:border-cyan-bright/45 hover:bg-cyan-bright/[0.14]";

  return (
    <Link
      to={to}
      className={`
        inline-flex items-center rounded-md border px-3.5 py-2
        text-[11px] font-bold uppercase tracking-[0.08em]
        transition-colors duration-200
        ${palette}
      `}
    >
      {children}
    </Link>
  );
}
