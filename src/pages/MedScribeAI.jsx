import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, ShieldCheck, Layers, Zap } from 'lucide-react';

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
 * /medscribeai — product page for MedScribeAI.
 *
 * Light-surface hero → capabilities → comparison table → compliance &
 * architecture → CTA banner → footer. Emerald is the dominant product
 * color throughout; cyan stays as the site-wide section eyebrow color.
 *
 * Voice rules carried over from the home page rewrite:
 *   - No specific accuracy percentages in the marketing copy. The product
 *     itself can publish numbers; this page leaves them to the demo.
 *   - No multipliers ("10x volume", "4x productivity") without sourced data.
 *   - Every claim should survive a buyer asking "where does that number
 *     come from?"
 *
 * All copy lives in the constants at the top of this file.
 */

const HERO = {
  eyebrow: 'LIVE · MULTI-TENANT SAAS',
  headline: 'Documentation infrastructure for MTSOs serving global healthcare.',
  lede:
    'A multi-tenant transcription chassis built for medical transcription operators serving US, UK, and Australian clients. Production today, with HIPAA-aligned infrastructure and an editor-productivity multiplier purpose-built into the workflow.',
  primaryCta:   { label: 'Schedule a demo',    href: '/contact?product=medscribeai' },
  secondaryCta: { label: 'Visit live product', href: 'https://medscribeai.in/' },
};

const CAPABILITIES_SECTION = {
  eyebrow:  'WHAT IT DOES',
  headline: 'Three capabilities. One unified chassis.',
  lede:
    'A purpose-built platform — not a general-purpose ambient-AI tool retro-fitted to healthcare.',
};

const CAPABILITIES = [
  {
    accent:  'emerald',
    eyebrow: '01 · CAPTURE',
    icon:    Zap,
    title:   'Voice-to-structured-report.',
    body:
      "Not ambient. Not approximate. Captures the physician's intent and transforms it into a formatted, peer-review-ready report. Optimized for diverse clinical accents and complex medical terminology.",
  },
  {
    accent:  'cyan',
    eyebrow: '02 · OPERATE',
    icon:    Layers,
    title:   'One platform, many clients.',
    body:
      'Org-isolated workspaces. Role-based access. SLA tracking. A centralized command center for managing multiple provider feeds across US, UK, and Australian clients — one MTSO, multiple geographies, one chassis.',
  },
  {
    accent:  'clay',
    eyebrow: '03 · SCALE',
    icon:    ShieldCheck,
    title:   'Editor productivity, multiplied.',
    body:
      'The chassis is engineered around editor workflow — shorter cycles, fewer manual touches, throughput that grows without headcount. The exact multiplier depends on your current operation; we calibrate during the pilot.',
  },
];

const COMPARISON_SECTION = {
  eyebrow:  'THE DIFFERENCE',
  headline: 'How MTSOs change once MedScribeAI is in the chassis.',
  lede:
    'Six structural shifts buyers see across the first 30–60 days of operation.',
};

const COMPARISON_ROWS = [
  {
    metric: 'Turnaround',
    old:    'Hours to days',
    new:    'Minutes from dictation to draft',
  },
  {
    metric: 'Cost structure',
    old:    'Headcount-bound, per-transcriptionist',
    new:    'Volume-priced, per-line',
  },
  {
    metric: 'Error pattern',
    old:    'Human error scales with volume',
    new:    'Validated AI, edge cases escalate to editor',
  },
  {
    metric: 'Scaling new clients',
    old:    'More clients require more hires',
    new:    'More clients, same chassis',
  },
  {
    metric: 'Compliance',
    old:    'Per-staff training and audit cycles',
    new:    'Built into infrastructure, audit-logged',
  },
  {
    metric: 'EMR integration',
    old:    'Out-of-band re-entry into EHR',
    new:    'Direct push via HL7, XML, PDF',
  },
];

const COMPLIANCE_SECTION = {
  eyebrow:  'BUILT TO AUDIT',
  headline: "The infrastructure your buyer's compliance team will actually approve.",
};

const COMPLIANCE_CARDS = [
  {
    accent:  'emerald',
    eyebrow: 'COMPLIANCE & TRUST',
    title:   'HIPAA-aligned by default.',
    bullets: [
      'BAA-ready · audit logs · RBAC',
      'US East infrastructure',
      'Org-isolated tenant data',
      "Built on two decades of HIM/RCM operating depth",
    ],
  },
  {
    accent:  'cyan',
    eyebrow: 'ARCHITECTURE',
    title:   'Cloud-native, integration-ready.',
    bullets: [
      'Multi-device capture: mobile, digital recorder, web',
      'HL7 · XML · PDF · direct EMR injection',
      'High-availability, scalable across tenants',
      'Coimbatore engineering team — direct access',
    ],
  },
];

const CTA_BLOCK = {
  eyebrow:  'TALK TO US',
  headline: 'Built for MTSOs. Pilot it before you commit.',
  body:
    '14-day pilot, no commitment. We respond within one business day.',
  primaryCta:   { label: 'Schedule a technical demo', href: '/contact?product=medscribeai' },
  secondaryCta: { label: 'Visit live product',        href: 'https://medscribeai.in/'        },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

export default function MedScribeAI() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <SEO page="medscribeai" />
      <ScrollProgressBar />
      <Navbar />

      <main>
        {/* ─── Hero (light) ──────────────────────────────────────────── */}
        <section className="relative bg-paper pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <motion.div {...fadeUp(0)}>
              <Eyebrow color="emerald" className="mb-5 block">{HERO.eyebrow}</Eyebrow>
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
                  inline-flex items-center gap-2 rounded-md bg-emerald
                  px-5 py-3 text-[14px] font-bold text-white tracking-[-0.005em]
                  transition-colors duration-200 hover:bg-emerald/90
                "
              >
                {HERO.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={HERO.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2 rounded-md border border-rule
                  bg-paper-2 px-5 py-3 text-[14px] font-bold text-slate tracking-[-0.005em]
                  transition-colors duration-200 hover:border-rule-2 hover:bg-paper
                "
              >
                {HERO.secondaryCta.label}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ─── Section 2: Capabilities ─────────────────────────────────── */}
        <section className="relative bg-paper-2 py-20 sm:py-24 lg:py-28">
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
                accent="emerald"
                headerLeft="Dimension"
                headerOld="Without MedScribeAI"
                headerNew="With MedScribeAI"
                rows={COMPARISON_ROWS}
              />
            </motion.div>
          </div>
        </section>

        {/* ─── Section 4: Compliance & Architecture ───────────────────── */}
        <section className="relative bg-paper-2 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionHead
              eyebrow={COMPLIANCE_SECTION.eyebrow}
              eyebrowColor="cyan"
              headline={COMPLIANCE_SECTION.headline}
            />

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
              {COMPLIANCE_CARDS.map((card, i) => (
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
                className="absolute left-0 top-0 h-[3px] w-full bg-emerald"
              />

              <Eyebrow color="emerald" className="mb-3 block">
                {CTA_BLOCK.eyebrow}
              </Eyebrow>

              <h2 className="font-sora text-[28px] font-bold leading-[1.20] tracking-[-0.022em] text-slate sm:text-[32px] lg:text-[36px]">
                {CTA_BLOCK.headline}
              </h2>

              <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-ink-2 sm:text-[16px]">
                {CTA_BLOCK.body}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to={CTA_BLOCK.primaryCta.href}
                  className="
                    inline-flex items-center gap-2 rounded-md bg-emerald
                    px-5 py-3 text-[14px] font-bold text-white tracking-[-0.005em]
                    transition-colors duration-200 hover:bg-emerald/90
                  "
                >
                  {CTA_BLOCK.primaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={CTA_BLOCK.secondaryCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2 rounded-md border border-rule
                    bg-paper-2 px-5 py-3 text-[14px] font-bold text-slate tracking-[-0.005em]
                    transition-colors duration-200 hover:border-rule-2 hover:bg-paper
                  "
                >
                  {CTA_BLOCK.secondaryCta.label}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
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
