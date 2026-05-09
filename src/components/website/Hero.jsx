import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/*
 * NuScript Technologies — Hero (landing page)
 *
 * Inherits the deck slide-26 visual language (slate gradient + cyan radial
 * overlay) but adopts standard web-hero layout conventions:
 *
 *   • Single content block: headline → subhead → CTA pair.
 *   • Vertically centered inside a tall (~88-92vh) section so the hero
 *     "owns" the viewport when the page loads.
 *   • Navbar carries the wordmark; not duplicated inside the hero.
 *   • CTA pattern: solid primary + offwhite secondary link. Primary scrolls
 *     to the products section anchor (#products) — low-commitment next step
 *     for a visitor still gathering information. Secondary routes to
 *     /contact for the rare pre-qualified visitor ready to skip ahead.
 *   • The hero deliberately uses a different CTA pattern than the products
 *     section below (which uses link-style "Explore X →" CTAs per product).
 *     Repeating the same pattern twice within ~600px would dilute both.
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
  "Two live AI products. One Indian company. Vertical SaaS for global healthcare and Indian pharmacy — engineered in Coimbatore.";

const CTAS = {
  primary:   { label: "See our products", to: "#products" },
  secondary: { label: "Talk to us",       to: "/contact"  },
};

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
              max-w-5xl font-sora font-semibold text-white
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

          <motion.div
            {...fadeUp(0.25)}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1"
          >
            {/* Primary — solid cyan-bright fill. Scrolls to the products
                section anchor below. Native <a> not <Link> because in-page
                anchors need the browser's default scroll-behavior. */}
            <a
              href={CTAS.primary.to}
              className="
                inline-flex items-center gap-2 rounded-md
                bg-cyan-bright px-6 py-3
                font-sora text-[15px] font-bold text-slate tracking-[-0.005em]
                transition-colors duration-200
                hover:bg-cyan-bright/90
              "
            >
              {CTAS.primary.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            {/* Secondary — offwhite link with subtle arrow. Routes via
                react-router to /contact, so use Link for client-side nav. */}
            <Link
              to={CTAS.secondary.to}
              className="
                group inline-flex items-center gap-2
                font-sora text-[14px] font-bold tracking-[-0.005em]
                text-offwhite/75 transition-colors duration-200
                hover:text-white
              "
            >
              {CTAS.secondary.label}
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
