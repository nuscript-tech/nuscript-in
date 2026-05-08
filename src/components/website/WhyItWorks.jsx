import { motion } from 'framer-motion';
import SectionHead from './_primitives/SectionHead';
import TopAccentCard from './_primitives/TopAccentCard';
import Eyebrow from './_primitives/Eyebrow';

/*
 * Section 4 — Why It Works
 *
 * Four structural-advantage cards in a single grid (deck slide-13 pattern):
 *   1 column on mobile · 2 columns on tablet · 4 columns on desktop.
 *
 * Founder credentials previously anchored the left column — those have been
 * removed from the public site (founder narrative belongs on /about, not on
 * the marketing landing). This section is now exclusively product-facing:
 * four reasons these products land, each card making a customer-side claim
 * rather than an investor-side one.
 *
 * Voice rules applied to every card on this rewrite:
 *   - No "we beat pure-tech competitors" framing.
 *   - No talk of NuScript margins, cost structure, or unit economics.
 *   - Buyer-side concrete benefits over seller-side positioning.
 */

const SECTION = {
  eyebrow:  'WHY IT WORKS',
  headline: 'Built for the realities of the work, not the demo.',
  lede:
    'Four structural advantages baked into how these products are engineered and operated.',
};

const REASONS = [
  {
    accent:  'cyan',
    eyebrow: 'ENGINEERING',
    title:   'US-grade infrastructure today.',
    body:
      "HIPAA-aligned, US East, audit logs, RBAC, BAA-ready. Built to the standard your compliance team will actually audit.",
  },
  {
    accent:  'emerald',
    eyebrow: 'DOMAIN',
    title:   'Operator depth, baked into every surface.',
    body:
      'Two decades inside the work feed into every product decision — what gets denied, where ambient AI breaks, where editor cycles hide.',
  },
  {
    accent:  'cyan',
    eyebrow: 'COST',
    title:   'India engineering, global delivery.',
    body:
      'Coimbatore engineering moves fast. Customer-facing teams in your timezone. Pricing that fits a real pilot, not an enterprise procurement cycle.',
  },
  {
    accent:  'emerald',
    eyebrow: 'MULTI-MARKET',
    title:   'One product, multiple geographies.',
    body:
      'MedScribeAI ships into US, UK, and Australian healthcare via the Indian MTSOs that serve those markets.',
  },
];

const cardFadeUp = (i) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: {
    delay: i * 0.07,
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1],
  },
});

export default function WhyItWorks() {
  return (
    <section
      id="why-it-works"
      className="relative bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHead
          eyebrow={SECTION.eyebrow}
          eyebrowColor="cyan"
          headline={SECTION.headline}
          lede={SECTION.lede}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.eyebrow}
              {...cardFadeUp(i)}
              className="h-full"
            >
              <TopAccentCard accent={reason.accent} className="h-full">
                <Eyebrow color={reason.accent} className="mb-3 block">
                  {reason.eyebrow}
                </Eyebrow>
                <h3 className="font-sora text-[18px] font-bold leading-[1.25] tracking-[-0.018em] text-slate sm:text-[19px]">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.55] text-ink-2 sm:text-[15px]">
                  {reason.body}
                </p>
              </TopAccentCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
