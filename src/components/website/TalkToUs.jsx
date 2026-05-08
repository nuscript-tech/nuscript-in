import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHead from './_primitives/SectionHead';
import Eyebrow from './_primitives/Eyebrow';

/*
 * Section 5 — Talk to Us
 *
 * Two CTA cards, audience-routed:
 *   • MTSOs       → /contact?product=medscribeai      (emerald)
 *   • Pharmacies  → /contact?product=pharmastockai    (cyan)
 *
 * Routing through /contact (with a product query param) rather than mailto
 * keeps lead capture in one place. The Contact page can detect the param
 * and pre-populate the subject / pre-select the product on its form.
 *
 * The cards are buttons-with-context — solid action, brief setup. Centered
 * section header here (as opposed to left-aligned elsewhere) because this
 * is the page's "ask moment" — the visual rhythm shifts to match the intent.
 */

const SECTION = {
  eyebrow:  'GET IN TOUCH',
  headline: 'Choose the product that matches your business.',
  lede:
    "Both products are live and accepting new operators. Whether you run an MTSO or a pharmacy, we'll respond within one business day.",
};

const CTAS = [
  {
    accent: 'emerald',
    audience: 'FOR MEDICAL TRANSCRIPTION OPERATORS',
    headline: 'Scale your editor capacity without scaling headcount.',
    body:
      'MedScribeAI is purpose-built for MTSOs serving US, UK, and Australian clients. 14-day pilot, no commitment.',
    cta: 'Talk to us about MedScribeAI',
    href: '/contact?product=medscribeai',
  },
  {
    accent: 'cyan',
    audience: 'FOR INDIAN PHARMACIES & CHAINS',
    headline: 'End expiry waste. Stop stocking out. Save hours.',
    body:
      'PharmaStockAI runs alongside your existing billing software. Pilot starts free.',
    cta: 'Talk to us about PharmaStockAI',
    href: '/contact?product=pharmastockai',
  },
];

const cardFadeUp = (i) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: {
    delay: i * 0.1,
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1],
  },
});

const PALETTE = {
  emerald: {
    bar:    'bg-emerald',
    text:   'text-emerald',
    btn:    'bg-emerald text-white hover:bg-emerald/90',
  },
  cyan: {
    bar:    'bg-cyan',
    text:   'text-cyan',
    btn:    'bg-cyan text-white hover:bg-cyan/90',
  },
};

export default function TalkToUs() {
  return (
    <section
      id="contact"
      className="relative bg-paper-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHead
          eyebrow={SECTION.eyebrow}
          eyebrowColor="cyan"
          headline={SECTION.headline}
          lede={SECTION.lede}
          align="center"
          className="max-w-3xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {CTAS.map((card, i) => {
            const palette = PALETTE[card.accent];
            return (
              <motion.div key={card.audience} {...cardFadeUp(i)} className="h-full">
                <CtaCard card={card} palette={palette} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaCard({ card, palette }) {
  return (
    <div
      className="
        relative flex h-full flex-col overflow-hidden rounded-lg
        border border-rule bg-paper-2 p-7 sm:p-9
        transition-shadow duration-300 hover:shadow-card
      "
    >
      <div
        aria-hidden="true"
        className={`absolute left-0 top-0 h-[3px] w-full ${palette.bar}`}
      />

      <Eyebrow color={card.accent} className="mb-4 block">
        {card.audience}
      </Eyebrow>

      <h3 className="font-sora text-[24px] font-bold leading-[1.20] tracking-[-0.022em] text-slate sm:text-[26px]">
        {card.headline}
      </h3>

      <p className="mt-3 flex-grow text-[15px] leading-[1.55] text-ink-2 sm:text-[16px]">
        {card.body}
      </p>

      <Link
        to={card.href}
        className={`
          mt-7 inline-flex items-center justify-center gap-2 self-start rounded-md
          px-5 py-3 text-[14px] font-bold tracking-[-0.005em]
          transition-colors duration-200
          ${palette.btn}
        `}
      >
        {card.cta}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
