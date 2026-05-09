import { motion } from 'framer-motion';
import SectionHead from './_primitives/SectionHead';
import TopAccentCard from './_primitives/TopAccentCard';
import DarkBanner from './_primitives/DarkBanner';
import Eyebrow from './_primitives/Eyebrow';

/*
 * Section 2 — Approach / Thesis
 *
 * Direct port of deck slide 2: section header (eyebrow + bold headline + lede)
 * followed by three white cards with brand-colored top borders, then a
 * dark-slate banner asserting the operator-register positioning.
 *
 * All copy lives at the top of this file. Numbers must be defensible if a
 * customer or journalist asks where they come from — no claim here that
 * isn't backed by an actual artifact (live products, founder background).
 */

const SECTION = {
  eyebrow:  'HOW WE SHIP',
  headline: 'Engineering-first vertical SaaS, built where the work is.',
  lede:
    "NuScript Technologies builds AI products for two markets we've operated inside for over two decades — global medical transcription and Indian retail pharmacy. We don't ship general-purpose tools.",
};

const CARDS = [
  {
    eyebrow: '01 · ENGINEERING',
    eyebrowColor: 'cyan',
    accent: 'cyan',
    title: 'Coimbatore-built AI on a shared foundation.',
    body:
      'One engineering team. Two production products. A shared medical-AI and infrastructure stack underneath both, so improvements compound across the portfolio.',
  },
  {
    eyebrow: '02 · OPERATOR-FOUNDED',
    eyebrowColor: 'emerald',
    accent: 'emerald',
    title: '25 years inside the work we now automate.',
    body:
      'The founder has spent 25 years inside US healthcare documentation operations. Every product decision is informed by what actually breaks at scale, not what looks good in a demo.',
  },
  {
    eyebrow: '03 · ALREADY SHIPPING',
    eyebrowColor: 'slate',
    accent: 'slate',
    title: 'Production today, not a roadmap.',
    body:
      'MedScribeAI is live with paying tenants. PharmaStockAI is live with pilot pharmacies. We invoice for what we ship.',
  },
];

const cardFadeUp = (i) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: {
    delay: i * 0.08,
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1],
  },
});

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHead
          eyebrow={SECTION.eyebrow}
          eyebrowColor="cyan"
          headline={SECTION.headline}
          lede={SECTION.lede}
        />

        {/* Three cards — equal grid on desktop, stacks on mobile */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 sm:gap-6">
          {CARDS.map((card, i) => (
            <motion.div key={card.eyebrow} {...cardFadeUp(i)} className="h-full">
              <TopAccentCard accent={card.accent} className="h-full">
                <Eyebrow color={card.eyebrowColor} className="mb-3 block">
                  {card.eyebrow}
                </Eyebrow>
                <h3 className="font-sora text-[20px] font-bold leading-[1.25] tracking-[-0.018em] text-slate sm:text-[22px]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-ink-2 sm:text-[16px]">
                  {card.body}
                </p>
              </TopAccentCard>
            </motion.div>
          ))}
        </div>

        {/* Dark banner — the operator-register signature line. */}
        <div className="mt-10 sm:mt-12">
          <DarkBanner
            lead="In healthcare AI, most products are still roadmap."
            accent="We invoice for what we already ship."
          />
        </div>
      </div>
    </section>
  );
}
