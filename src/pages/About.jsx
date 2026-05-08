import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, MapPin, Globe2, Layers } from 'lucide-react';

import SEO from '@/components/SEO';
import Navbar from '@/components/website/Navbar';
import Footer from '@/components/website/Footer';
import ScrollToTopButton from '@/components/website/ScrollToTopButton';
import ScrollProgressBar from '@/components/website/ScrollProgressBar';

import SectionHead from '@/components/website/_primitives/SectionHead';
import TopAccentCard from '@/components/website/_primitives/TopAccentCard';
import Eyebrow from '@/components/website/_primitives/Eyebrow';
import Timeline from '@/components/website/_primitives/Timeline';

/*
 * /about — company page for NuScript Technologies.
 *
 * Buyer-facing throughout. The founder narrative is reduced to a single
 * restrained "Founded by" card late in the page, demoted from being the
 * page's anchor.
 *
 * Section flow (six):
 *   1. Hero — what NuScript is, who it serves
 *   2. Origins — timeline (3 entries) + lede paragraph
 *   3. Two products — brief portfolio recap with links to product pages
 *   4. Why Coimbatore — three structural reasons
 *   5. Founded by — single card, restrained credentials
 *   6. CTA — get-in-touch banner
 *
 * What was deliberately removed from the previous version of this page:
 *   - "8 Startups Founded · 4 Successful Exits" stats block (investor flex)
 *   - Founder quote that begins "As a founder with eight startups..."
 *   - "venture-backed innovation hub" hero framing
 *   - "Three Principles" virtue-card section (Precision/Automation/Integrity —
 *     reads as values-page filler that says nothing concrete)
 *
 * What was kept and rewritten:
 *   - Coimbatore positioning (pulled out of values-soup, made concrete)
 *   - Timeline structure (rewritten to anchor on the company's birth and
 *     what it does, not the founder's earlier ventures)
 *   - Two-product portfolio recap (lifted with light edits)
 */

const HERO = {
  eyebrow:  'NUSCRIPT TECHNOLOGIES',
  headline: 'Vertical SaaS for healthcare and pharmacy operations.',
  lede:
    "An engineering-first product company in Coimbatore. We build AI for two markets we've operated inside for over two decades — global medical transcription and Indian retail pharmacy. Two live products, one engineering team.",
  primaryCta:   { label: 'Talk to us',          href: '/contact' },
  secondaryCta: { label: 'See our products',    href: '#products' },
};

const ORIGINS_SECTION = {
  eyebrow:  'ORIGINS',
  headline: 'Built where the work is.',
  lede:
    "NuScript Technologies was incorporated in March 2026 in Coimbatore, India. The company exists because the founder has spent over two decades inside the operations these products now automate — first in US healthcare documentation, more recently in Indian pharmacy supply chain. The products were built knowing what actually breaks at scale, not what looks good in a demo.",
};

const TIMELINE = [
  {
    date:  '2000–2025',
    title: 'Operating depth.',
    body:
      'Two decades inside US healthcare documentation operations and Indian pharmacy supply chain — the domains these products now serve. NuScript Systems Inc. (US) is a profitable healthcare services business; the operating knowledge from running it shapes every product decision.',
  },
  {
    date:  'March 2026',
    title: 'NuScript Technologies incorporated.',
    body:
      "Founded as a Private Limited company headquartered in Coimbatore, India. Purpose-built as an engineering-first SaaS company, distinct from the services business — built to ship products, not to take on consulting work.",
  },
  {
    date:  '2026',
    title: 'Two products live.',
    body:
      'MedScribeAI ships as multi-tenant SaaS for medical transcription operators serving US, UK, and Australian healthcare clients. PharmaStockAI ships as inventory and expiry intelligence for Indian retail pharmacies, chains, and distributors. Both in production, both with paying operators.',
  },
];

const PRODUCTS = [
  {
    accent:  'emerald',
    eyebrow: 'FOR MTSOs',
    name:    'MedScribeAI',
    body:
      'Multi-tenant SaaS for medical transcription operators serving US, UK, and Australian healthcare clients. HIPAA-aligned, BAA-ready, US East infrastructure.',
    cta:     'Explore MedScribeAI',
    href:    '/medscribeai',
  },
  {
    accent:  'cyan',
    eyebrow: 'FOR INDIAN PHARMACIES',
    name:    'PharmaStockAI',
    body:
      'Inventory and expiry intelligence that runs alongside your existing billing software. Daily expiry alerts, WhatsApp-pushed reorder lists, stock visibility you can act on.',
    cta:     'Explore PharmaStockAI',
    href:    '/pharmastockai',
  },
];

const COIMBATORE_SECTION = {
  eyebrow:  'WHY COIMBATORE',
  headline: 'A deliberate choice, not a default.',
  lede:
    "Coimbatore is one of India's quieter engineering hubs. Three structural reasons it's the right base for this company.",
};

const COIMBATORE_REASONS = [
  {
    accent:  'cyan',
    icon:    MapPin,
    title:   'Engineering depth without metro overhead.',
    body:
      "Strong engineering talent pool, lower cost-of-operations than Bengaluru or Hyderabad. Capital that would have gone to office overhead and salary inflation goes into product instead.",
  },
  {
    accent:  'emerald',
    icon:    Globe2,
    title:   'Built for global delivery.',
    body:
      'India timezone has natural overlap with Australia, the UK, and the US East Coast across a working day. Engineering in Coimbatore, customers in your timezone — both work.',
  },
  {
    accent:  'cyan',
    icon:    Layers,
    title:   'Vertical SaaS focus.',
    body:
      'No services arm pulling attention away from product work. The company exists to ship and operate two products; everything is structured around that focus.',
  },
];

const FOUNDER = {
  name:    'Arvind Manohar',
  role:    'FOUNDED BY',
  bio:
    "Founder & CEO of NuScript Technologies. Operates NuScript Systems Inc. (US), a profitable healthcare services business, in parallel — the operating knowledge from running it informs every product decision NuScript Technologies makes. Engineering background, two decades inside US healthcare documentation operations, MBA from Madurai Kamaraj University, B.S. Physics from Bharathiar University.",
  linkedin: { label: 'LinkedIn', href: 'https://linkedin.com/in/arvindmanohar' },
  contact:  { label: 'Direct contact', href: 'mailto:arvind.manohar@nuscript.in' },
};

const CTA_BLOCK = {
  eyebrow:  'GET IN TOUCH',
  headline: 'Operator? Investor? Partner? Reach out.',
  body:
    "We respond within one business day. Whether you're evaluating one of our products, exploring a partnership, or just curious about what we're building — we'd like to hear from you.",
  primaryCta: { label: 'Talk to us', href: '/contact' },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <SEO page="about" />
      <ScrollProgressBar />
      <Navbar />

      <main>
        {/* ─── 1. Hero (light) ──────────────────────────────────────────── */}
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

            <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-wrap gap-3">
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

        {/* ─── 2. Origins + Timeline ─────────────────────────────────────── */}
        <section className="relative bg-paper-2 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionHead
                  eyebrow={ORIGINS_SECTION.eyebrow}
                  eyebrowColor="cyan"
                  headline={ORIGINS_SECTION.headline}
                  lede={ORIGINS_SECTION.lede}
                />
              </div>
              <div className="lg:col-span-7">
                <Timeline entries={TIMELINE} />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. Products ───────────────────────────────────────────────── */}
        <section id="products" className="relative bg-paper py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionHead
              eyebrow="WHAT WE BUILD"
              eyebrowColor="cyan"
              headline="Two products. One engineering team."
              lede="Each product is purpose-built for its operator profile. Both are live today."
            />

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
              {PRODUCTS.map((product, i) => (
                <motion.div
                  key={product.name}
                  {...fadeUp(i * 0.08)}
                  className="h-full"
                >
                  <ProductRecapCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. Why Coimbatore ──────────────────────────────────────────── */}
        <section className="relative bg-paper-2 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionHead
              eyebrow={COIMBATORE_SECTION.eyebrow}
              eyebrowColor="cyan"
              headline={COIMBATORE_SECTION.headline}
              lede={COIMBATORE_SECTION.lede}
            />

            <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
              {COIMBATORE_REASONS.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  {...fadeUp(i * 0.08)}
                  className="h-full"
                >
                  <TopAccentCard accent={reason.accent} className="h-full">
                    <reason.icon
                      className={`mb-4 h-5 w-5 ${reason.accent === 'emerald' ? 'text-emerald' : 'text-cyan'}`}
                      aria-hidden="true"
                    />
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

        {/* ─── 5. Founded by ──────────────────────────────────────────────── */}
        <section className="relative bg-paper py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <motion.div
              {...fadeUp(0)}
              className="relative overflow-hidden rounded-lg border border-rule bg-paper-2 p-7 sm:p-9"
            >
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] w-full bg-cyan"
              />

              <Eyebrow color="cyan" className="mb-3 block">{FOUNDER.role}</Eyebrow>
              <h3 className="font-sora text-[24px] font-bold leading-[1.20] tracking-[-0.022em] text-slate sm:text-[28px]">
                {FOUNDER.name}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.55] text-ink-2 sm:text-[16px]">
                {FOUNDER.bio}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
                <a
                  href={FOUNDER.linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-cyan transition-opacity hover:opacity-80"
                >
                  {FOUNDER.linkedin.label}
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
                <a
                  href={FOUNDER.contact.href}
                  className="font-semibold text-cyan transition-opacity hover:opacity-80"
                >
                  {FOUNDER.contact.label}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 6. CTA banner ──────────────────────────────────────────────── */}
        <section className="relative bg-paper-2 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <motion.div
              {...fadeUp(0)}
              className="relative overflow-hidden rounded-lg border border-rule bg-paper-2 p-8 sm:p-12 lg:p-14"
            >
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] w-full bg-cyan"
              />

              <Eyebrow color="cyan" className="mb-3 block">{CTA_BLOCK.eyebrow}</Eyebrow>

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

/* ─── ProductRecapCard ──────────────────────────────────────────────────────
 * Quieter variant of the home page's product card. No status eyebrow, no
 * bullet list of facts — just brand-color top accent, audience eyebrow,
 * product name, body, and a CTA link to the dedicated product page.
 *
 * Content is the recap of what's covered exhaustively on /medscribeai and
 * /pharmastockai; this card exists on /about so a reader of the company
 * page has obvious paths to either product page. */
function ProductRecapCard({ product }) {
  const palette = {
    emerald: { bar: 'bg-emerald', text: 'text-emerald' },
    cyan:    { bar: 'bg-cyan',    text: 'text-cyan'    },
  }[product.accent];

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

      <Eyebrow color={product.accent} className="mb-4 block">
        {product.eyebrow}
      </Eyebrow>

      <h3 className="font-sora text-[28px] font-bold leading-[1.10] tracking-[-0.022em] text-slate sm:text-[32px]">
        {product.name}
      </h3>

      <p className="mt-3 flex-grow text-[15px] leading-[1.55] text-ink-2 sm:text-[16px]">
        {product.body}
      </p>

      <Link
        to={product.href}
        className={`
          group mt-6 inline-flex items-center gap-2
          text-[14px] font-bold tracking-[-0.005em]
          transition-opacity hover:opacity-80
          sm:text-[15px]
          ${palette.text}
        `}
      >
        {product.cta}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
