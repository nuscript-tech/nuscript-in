import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/*
 * NuScript Technologies — Hero (landing page)
 *
 * Inherits the deck slide-26 visual language (slate gradient + cyan radial
 * overlay) but adopts standard web-hero layout conventions:
 *
 *   • Single content block: headline → subhead → product chips.
 *   • Vertically centered inside a tall (~88-92vh) section so the hero
 *     "owns" the viewport when the page loads.
 *   • Navbar carries the wordmark; not duplicated inside the hero.
 *   • No deck-style footer-info row — the entity name, email, and domain
 *     belong in the site footer, not in the hero. (Deck close-slides have
 *     that anchor because slides don't have global chrome; web heroes do.)
 *
 * All copy lives at the top of this file. Edit there, not in the JSX.
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

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-hero-gradient text-white"
      aria-label="NuScript Technologies"
    >
      {/* Inner frame — shares the 6xl max-width used elsewhere on the site.
          justify-center vertically centers the single content block inside
          a tall section, giving the hero the breathing room a deck-aligned
          web hero needs. The top padding clears the fixed navbar (~68px)
          with comfortable space; the bottom padding mirrors it for balance. */}
      <div
        className="
          mx-auto flex w-full max-w-6xl flex-col justify-center
          px-6 py-32
          sm:px-10 sm:py-36
          lg:px-12 lg:py-44
          min-h-[88vh] lg:min-h-[92vh]
        "
      >
        <div className="flex flex-col gap-7">
          <motion.h1
            {...fadeUp(0.05)}
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
            {...fadeUp(0.15)}
            className="
              max-w-2xl text-base leading-relaxed text-offwhite/70
              sm:text-lg sm:leading-[1.55]
              lg:text-xl
            "
          >
            {SUBHEAD}
          </motion.p>

          <motion.div {...fadeUp(0.25)} className="flex flex-wrap gap-3 pt-1">
            {PRODUCTS.map((p) => (
              <Chip key={p.label} to={p.to} accent={p.accent}>
                {p.label}
              </Chip>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Product chip ──────────────────────────────────────────────────────
 * Mirrors the deck slide-26 chip pattern:
 *   • 1px brand-colored border at ~22% opacity
 *   • brand color at ~10% as background fill
 *   • brand color at full opacity for text
 *   • mixed-case 14px Sora bold — preserves the camelCase product names
 *     (MedScribeAI, PharmaStockAI) which would lose readability if uppercased.
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
        inline-flex items-center rounded-md border px-4 py-2.5
        font-sora text-[14px] font-bold tracking-[-0.005em]
        transition-colors duration-200
        ${palette}
      `}
    >
      {children}
    </Link>
  );
}
