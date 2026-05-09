import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Bell, RefreshCw, BarChart3 } from 'lucide-react';

import SEO from '@/components/SEO';
import Navbar from '@/components/website/Navbar';
import Footer from '@/components/website/Footer';
import ScrollToTopButton from '@/components/website/ScrollToTopButton';
import ScrollProgressBar from '@/components/website/ScrollProgressBar';

import SectionHead from '@/components/website/_primitives/SectionHead';
import TopAccentCard from '@/components/website/_primitives/TopAccentCard';
import Eyebrow from '@/components/website/_primitives/Eyebrow';
import ComparisonTable from '@/components/website/_primitives/ComparisonTable';

/*
 * /pharmastockai — product page for PharmaStockAI.
 *
 * Light-surface hero → capabilities → comparison table → operations &
 * integration → CTA banner → footer. Cyan is the dominant product color
 * throughout (matches the home page color mapping); emerald is reserved
 * for the secondary card on the operations section so the page doesn't
 * read mono-cyan.
 *
 * Voice rules carried over from MedScribeAI:
 *   - No specific accuracy or revenue percentages in the marketing copy.
 *     ("5–8% revenue recovered" was on the old version; pulled out
 *     pending substantiated data the marketing team can defend.)
 *   - Every claim should survive a buyer asking "where does that number
 *     come from?"
 *   - Concrete operator-side benefits, not aspirational flourishes.
 *
 * All copy lives in the constants at the top of this file.
 */

const HERO = {
  eyebrow:  'LIVE · PHARMACY SUPPLY CHAIN',
  headline: 'Inventory and expiry intelligence for Indian retail pharmacy.',
  lede:
    "AI that runs alongside your existing billing software — daily expiry alerts, WhatsApp-pushed reorder lists, and stock visibility your team can act on. Built for independent pharmacies, chains, and distributors.",
  primaryCta:   { label: 'Talk to us',         href: '/contact?product=pharmastockai' },
  secondaryCta: { label: 'See how it works',   href: '#how-it-works'                  },
};

const CAPABILITIES_SECTION = {
  eyebrow:  'WHAT IT DOES',
  headline: 'Three tools your team will actually use.',
  lede:
    'Not a new ERP. Not a replacement for your billing software. A layer of intelligence that sits on top of what you already run.',
};

const CAPABILITIES = [
  {
    accent:  'cyan',
    eyebrow: '01 · EXPIRY',
    icon:    Bell,
    title:   'Daily expiry alerts, on WhatsApp.',
    body:
      'Every morning, your team gets a WhatsApp list of stock about to expire — by SKU, by batch, with quantity and shelf location. Act on near-expiry stock before it becomes a writeoff.',
  },
  {
    accent:  'emerald',
    eyebrow: '02 · REORDER',
    icon:    RefreshCw,
    title:   'WhatsApp-pushed reorder lists.',
    body:
      "Reorder recommendations land in your team's WhatsApp — calibrated to your sales velocity, current stock, and lead times. No new app, no training, no friction.",
  },
  {
    accent:  'cyan',
    eyebrow: '03 · VISIBILITY',
    icon:    BarChart3,
    title:   'Stock movement you can act on.',
    body:
      'Fast-movers, slow-movers, dead stock, regional patterns. Visibility your billing software was never designed to give you — at the SKU and batch level, refreshed daily.',
  },
];

const COMPARISON_SECTION = {
  eyebrow:  'THE DIFFERENCE',
  headline: 'How operations change once PharmaStockAI is in the loop.',
  lede:
    'Six structural shifts pharmacies and distributors see across the first 30 days.',
};

const COMPARISON_ROWS = [
  {
    metric: 'Expiry handling',
    old:    'Discovered at the counter or during audit',
    new:    'Daily push, days of lead time to act',
  },
  {
    metric: 'Reordering',
    old:    'Manual review, often guesswork',
    new:    'Velocity-calibrated, WhatsApp-pushed',
  },
  {
    metric: 'Stock visibility',
    old:    'Billing software shows totals, not patterns',
    new:    'SKU, batch, movement — refreshed daily',
  },
  {
    metric: 'Slow-moving stock',
    old:    'Sits until it expires',
    new:    'Flagged early, transferred or returned',
  },
  {
    metric: 'Setup',
    old:    'Replace your ERP, retrain your team',
    new:    'Plugs into existing billing software',
  },
  {
    metric: 'Adoption surface',
    old:    'New dashboard your team has to log into',
    new:    'WhatsApp — already in their pocket',
  },
];

const OPS_SECTION = {
  eyebrow:  'HOW IT WORKS',
  headline: 'No new ERP. No new login. Runs on what you already have.',
};

const OPS_CARDS = [
  {
    accent:  'cyan',
    eyebrow: 'INTEGRATION',
    title:   'Plugs into your existing billing software.',
    bullets: [
      'Reads your sales and stock data through the billing software you already run',
      'No counter-staff retraining, no parallel systems',
      'Daily sync — your team works in the morning with last night\'s patterns',
      'Independent pharmacies, chains, and distributors all supported',
    ],
  },
  {
    accent:  'emerald',
    eyebrow: 'OPERATIONS',
    title:   'WhatsApp-first delivery.',
    bullets: [
      'Reorder lists, expiry alerts, and stock movement land in WhatsApp',
      'No app to install, no dashboard to learn',
      'Pricing tiers calibrated to operation size — independent to multi-location',
      'Coimbatore engineering team — direct support in your timezone',
    ],
  },
];

const CTA_BLOCK = {
  eyebrow:  'TALK TO US',
  headline: 'Built for Indian pharmacy operations. Pilot starts free.',
  body:
    'Whether you run a single counter or a regional chain, the pilot is free to start. We respond within one business day.',
  primaryCta: { label: 'Talk to us about PharmaStockAI', href: '/contact?product=pharmastockai' },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

export default function PharmaStockAI() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <SEO page="pharmastockai" />
      <ScrollProgressBar />
      <Navbar />

      <main>
        {/* ─── Hero (light) ──────────────────────────────────────────── */}
        <section className="relative bg-paper pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <motion.div {...fadeUp(0)}>
              <Eyebrow color="cyan" className="mb-5 block">{HERO.eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="
                max-w-4xl font-sora font-bold text-slate
                text-[36px] leading-[1.10] tracking-[-0.025em]
                sm:text-[44px]
                lg:text-[56px]
              "
            >
              {HERO.headline}
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="
                mt-6 max-w-2xl text-[16px] leading-[1.55] text-ink-2
                sm:text-[18px]
                lg:text-[19px]
              "
            >
              {HERO.lede}
            </motion.p>

            <motion.div
              {...fadeUp(0.24)}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to={HERO.primaryCta.href}
                className="
                  inline-flex items-center gap-2 rounded-md bg-cyan
                  px-5 py-3 text-[14px] font-bold text-white tracking-[-0.005em]
                  transition-colors duration-200 hover:bg-cyan/90
                "
              >
                {HERO.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={HERO.secondaryCta.href}
                className="
                  inline-flex items-center gap-2 rounded-md border border-rule
                  bg-paper-2 px-5 py-3 text-[14px] font-bold text-slate tracking-[-0.005em]
                  transition-colors duration-200 hover:border-rule-2 hover:bg-paper
                "
              >
                {HERO.secondaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ─── Section 2: Capabilities ─────────────────────────────────── */}
        <section
          id="how-it-works"
          className="relative bg-paper-2 py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionHead
              eyebrow={CAPABILITIES_SECTION.eyebrow}
              eyebrowColor="cyan"
              headline={CAPABILITIES_SECTION.headline}
              lede={CAPABILITIES_SECTION.lede}
            />

            <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
              {CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap.eyebrow}
                  {...fadeUp(i * 0.08)}
                  className="h-full"
                >
                  <TopAccentCard accent={cap.accent} className="h-full">
                    <Eyebrow color={cap.accent} className="mb-3 block">
                      {cap.eyebrow}
                    </Eyebrow>
                    <h3 className="font-sora text-[20px] font-bold leading-[1.25] tracking-[-0.018em] text-slate sm:text-[22px]">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.55] text-ink-2 sm:text-[16px]">
                      {cap.body}
                    </p>
                  </TopAccentCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 3: Comparison ───────────────────────────────────── */}
        <section className="relative bg-paper py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionHead
              eyebrow={COMPARISON_SECTION.eyebrow}
              eyebrowColor="cyan"
              headline={COMPARISON_SECTION.headline}
              lede={COMPARISON_SECTION.lede}
            />

            <motion.div {...fadeUp(0.06)} className="mt-12">
              <ComparisonTable
                accent="cyan"
                headerLeft="Dimension"
                headerOld="Without PharmaStockAI"
                headerNew="With PharmaStockAI"
                rows={COMPARISON_ROWS}
              />
            </motion.div>
          </div>
        </section>

        {/* ─── Section 4: Operations & Integration ────────────────────── */}
        <section className="relative bg-paper-2 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionHead
              eyebrow={OPS_SECTION.eyebrow}
              eyebrowColor="cyan"
              headline={OPS_SECTION.headline}
            />

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
              {OPS_CARDS.map((card, i) => (
                <motion.div
                  key={card.eyebrow}
                  {...fadeUp(i * 0.08)}
                  className="h-full"
                >
                  <TopAccentCard accent={card.accent} className="h-full">
                    <Eyebrow color={card.accent} className="mb-4 block">
                      {card.eyebrow}
                    </Eyebrow>
                    <h3 className="font-sora text-[22px] font-bold leading-[1.20] tracking-[-0.022em] text-slate sm:text-[24px]">
                      {card.title}
                    </h3>
                    <ul className="mt-5 space-y-2.5">
                      {card.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-ink sm:text-[15px]"
                        >
                          <span
                            aria-hidden="true"
                            className={`
                              mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full
                              ${card.accent === 'emerald' ? 'bg-emerald'
                                : card.accent === 'cyan'  ? 'bg-cyan'
                                : 'bg-slate'}
                            `}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </TopAccentCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 5: Talk to us (single CTA banner) ──────────────── */}
        <section className="relative bg-paper py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <motion.div
              {...fadeUp(0)}
              className="relative overflow-hidden rounded-lg border border-rule bg-paper-2 p-8 sm:p-12 lg:p-14"
            >
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] w-full bg-cyan"
              />

              <Eyebrow color="cyan" className="mb-3 block">
                {CTA_BLOCK.eyebrow}
              </Eyebrow>

              <h2 className="font-sora text-[28px] font-bold leading-[1.20] tracking-[-0.022em] text-slate sm:text-[32px] lg:text-[36px]">
                {CTA_BLOCK.headline}
              </h2>

              <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-ink-2 sm:text-[16px]">
                {CTA_BLOCK.body}
              </p>

              <div className="mt-7">
                <Link
                  to={CTA_BLOCK.primaryCta.href}
                  className="
                    inline-flex items-center gap-2 rounded-md bg-cyan
                    px-5 py-3 text-[14px] font-bold text-white tracking-[-0.005em]
                    transition-colors duration-200 hover:bg-cyan/90
                  "
                >
                  {CTA_BLOCK.primaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
