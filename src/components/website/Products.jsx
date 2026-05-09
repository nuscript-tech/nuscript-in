import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHead from './_primitives/SectionHead';
import Eyebrow from './_primitives/Eyebrow';

/*
 * Section 3 — Products
 *
 * Two product cards. Color mapping is deck-canonical (slide 5):
 *   MedScribeAI    → emerald
 *   PharmaStockAI  → cyan
 *
 * Card pattern is the deck slide-5 portfolio card: status eyebrow at the top,
 * large product name, tagline, three bulleted facts, footer pricing line in
 * tabular figures, and a footer CTA link. The card is its own large surface,
 * not a TopAccentCard — it earns more visual weight than the thesis cards.
 *
 * Numbers shown here are the public-defensible set: live status, pricing
 * tiers (already published), and qualitative descriptions of capability.
 * Specific multipliers ("2× this", "saves N hours") have been deliberately
 * removed from the public marketing surface pending substantiated pilot data.
 */

const SECTION = {
  eyebrow:  'TWO PRODUCTS',
  headline: 'Two markets. One engineering team.',
  lede:
    'Each product is purpose-built for its operator profile. Buy the one that matches your business — both are live today.',
};

const PRODUCTS = [
  {
    accent: 'emerald',
    statusEyebrow: 'LIVE · PRODUCTION · CASH-POSITIVE',
    name: 'MedScribeAI',
    tagline:
      'Multi-tenant SaaS for medical transcription operators serving US, UK, and Australian healthcare clients.',
    facts: [
      'Multi-tenant: org-isolated workspaces, RBAC, BAA-ready',
      'Editor-productivity multiplier purpose-built into the chassis',
      'HIPAA-aligned · US East infrastructure · audit logs',
    ],
    cta: 'Explore MedScribeAI',
    href: '/medscribeai',
  },
  {
    accent: 'cyan',
    statusEyebrow: 'LIVE · PHARMACY SUPPLY CHAIN',
    name: 'PharmaStockAI',
    tagline:
      'AI inventory, expiry, and reorder intelligence for Indian pharmacies, multi-location chains, and distributors.',
    facts: [
      'Daily expiry alerts · WhatsApp-pushed reorder lists',
      'Plugs into the billing software pharmacies already run',
      'Cuts hours of manual reorder work each week',
    ],
    cta: 'Explore PharmaStockAI',
    href: '/pharmastockai',
  },
];

const cardFadeUp = (i) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: {
    delay: i * 0.1,
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
  },
});

const PALETTE = {
  emerald: { bar: 'bg-emerald', text: 'text-emerald' },
  cyan:    { bar: 'bg-cyan',    text: 'text-cyan'    },
};

export default function Products() {
  return (
    <section
      id="products"
      className="relative bg-paper-2 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(222, 47%, 11%) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHead
          eyebrow={SECTION.eyebrow}
          eyebrowColor="cyan"
          headline={SECTION.headline}
          lede={SECTION.lede}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {PRODUCTS.map((product, i) => {
            const palette = PALETTE[product.accent];
            return (
              <motion.div key={product.name} {...cardFadeUp(i)} className="h-full">
                <ProductCard product={product} palette={palette} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, palette }) {
  return (
    <div
      className="
        relative flex h-full flex-col overflow-hidden rounded-lg
        border border-rule bg-paper-2
        p-7 sm:p-9
        transition-shadow duration-300 hover:shadow-card
      "
    >
      <div
        aria-hidden="true"
        className={`absolute left-0 top-0 h-[3px] w-full ${palette.bar}`}
      />

      <Eyebrow color={product.accent} className="mb-5 block">
        {product.statusEyebrow}
      </Eyebrow>

      <h3
        className="
          font-sora font-bold text-slate
          text-[34px] leading-[1.05] tracking-[-0.025em]
          sm:text-[40px]
        "
      >
        {product.name}
      </h3>

      <p className="mt-3 text-[16px] leading-[1.55] text-ink-2 sm:text-[17px]">
        {product.tagline}
      </p>

      <ul className="mt-6 space-y-2.5">
        {product.facts.map((fact) => (
          <li
            key={fact}
            className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-ink sm:text-[15px]"
          >
            <span
              className={`mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${palette.bar}`}
              aria-hidden="true"
            />
            <span>{fact}</span>
          </li>
        ))}
      </ul>

      {/* Spacer between bullets and footer divider:
          - min-h-[28px] guarantees a comfortable gap above the divider on the
            taller card (where bullet content nearly fills the card height).
          - flex-grow lets the spacer absorb any extra height on the shorter
            card, keeping both cards' footer rows aligned at the bottom. */}
      <div aria-hidden="true" className="min-h-[28px] flex-grow" />

      <div className="border-t border-rule pt-5 sm:pt-6">
        <Link
          to={product.href}
          className={`
            group inline-flex items-center gap-2
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
    </div>
  );
}
