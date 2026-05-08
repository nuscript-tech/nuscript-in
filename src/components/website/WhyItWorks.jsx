import { motion } from 'framer-motion';
import SectionHead from './_primitives/SectionHead';
import TopAccentCard from './_primitives/TopAccentCard';
import Eyebrow from './_primitives/Eyebrow';

/*
 * Section 4 — Why It Works
 *
 * Combines two deck slides into one block:
 *   - Slide 3 (founder credentials) → left column: a single large card
 *     anchoring the section with the founder's domain depth.
 *   - Slide 13 (structural reasons) → right column: a 2×2 grid of small
 *     cards explaining why these specific products land.
 *
 * The asymmetric layout is deliberate. The founder card is the anchor
 * of the section because the entire thesis rests on the founder's
 * 25 years of operating depth; the structural reasons amplify that.
 *
 * Photo: monogram placeholder in cyan-tinted square. Replace with a real
 * headshot when we have one — drop a /public/founder.jpg and swap the
 * <Monogram> component for <img src="/founder.jpg" />.
 */

const SECTION = {
  eyebrow:  'WHY IT LANDS',
  headline: "The reason this works isn't just engineering. It's domain depth.",
  lede:
    'NuScript Technologies is a small team. The reason MedScribeAI and PharmaStockAI ship into two distinct markets is that the founder has operated inside both for over two decades.',
};

const FOUNDER = {
  name:    'Arvind Manohar',
  role:    'FOUNDER & CEO · COIMBATORE',
  initials: 'AM',
  credentials: [
    '25 years inside US healthcare documentation operations.',
    'Founder of NuScript Systems Inc., a profitable US healthcare services company providing the operational depth behind every product decision.',
    'Solo technical builder of MedScribeAI and PharmaStockAI — both in production today.',
    'MBA, Madurai Kamaraj University · B.S. Physics, Bharathiar University.',
  ],
};

const REASONS = [
  {
    accent:  'cyan',
    eyebrow: 'ENGINEERING',
    title:   'US-grade infrastructure today.',
    body:
      "HIPAA-aligned, US East, audit logs, RBAC, BAA-ready. Built to the standard the buyer's compliance team will actually audit.",
  },
  {
    accent:  'emerald',
    eyebrow: 'DOMAIN',
    title:   'Depth pure-tech founders cannot copy.',
    body:
      '25 years of operating knowledge feeds into every product surface — what gets denied, where ambient AI breaks, where editor cycles hide.',
  },
  {
    accent:  'cyan',
    eyebrow: 'COST',
    title:   'India engineering, global delivery.',
    body:
      'Engineering at India cost structure. Customer-facing where the customer is. Margin compounds at scale.',
  },
  {
    accent:  'emerald',
    eyebrow: 'MULTI-MARKET',
    title:   'One product, multiple geographies.',
    body:
      "MedScribeAI ships into US, UK, and Australian healthcare via the Indian MTSOs that serve those markets — same product, multiple end markets.",
  },
];

const founderFadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const reasonFadeUp = (i) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: {
    delay: 0.05 + i * 0.06,
    duration: 0.5,
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

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
          {/* Founder card — spans 5 columns on desktop, full width on mobile. */}
          <motion.div {...founderFadeUp} className="lg:col-span-5">
            <FounderCard founder={FOUNDER} />
          </motion.div>

          {/* Structural-reasons grid — spans 7 columns, internal 2×2. */}
          <div className="lg:col-span-7">
            <div className="grid h-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {REASONS.map((reason, i) => (
                <motion.div key={reason.eyebrow} {...reasonFadeUp(i)} className="h-full">
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
        </div>
      </div>
    </section>
  );
}

/* ─── FounderCard ─────────────────────────────────────────────────────────
 * Larger card pattern, cyan top accent, photo block + name + role + 4 lines.
 * The photo block is currently a monogram; replace with <img> once a
 * headshot is supplied. Aspect ratio is locked at 1:1 to avoid layout
 * thrash on swap. */
function FounderCard({ founder }) {
  return (
    <div
      className="
        relative flex h-full flex-col overflow-hidden rounded-lg
        border border-rule bg-paper-2 p-7 sm:p-9
      "
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-[3px] w-full bg-cyan"
      />

      <Monogram initials={founder.initials} />

      <div className="mt-6">
        <Eyebrow color="cyan">{founder.role}</Eyebrow>
        <h3 className="mt-2 font-sora text-[28px] font-bold leading-[1.10] tracking-[-0.022em] text-slate sm:text-[32px]">
          {founder.name}
        </h3>
      </div>

      <ul className="mt-6 space-y-3">
        {founder.credentials.map((line) => (
          <li
            key={line}
            className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-ink-2 sm:text-[15px]"
          >
            <span
              aria-hidden="true"
              className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan"
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Monogram ────────────────────────────────────────────────────────────
 * Two-letter monogram on a cyan-tinted square. Designed-in placeholder
 * for the founder photo — looks intentional, not like a missing asset.
 *
 * The square is sized as a width-relative aspect-ratio so it stays
 * proportional at any column width. Letters are in Sora Bold, ink-3 color
 * (gentle, not screaming for attention). */
function Monogram({ initials }) {
  return (
    <div
      className="
        relative flex aspect-square w-full max-w-[180px] items-center justify-center
        overflow-hidden rounded-lg
        border border-cyan/15 bg-cyan/5
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, hsl(195 100% 40% / 0.10), transparent 60%)',
        }}
      />
      <span
        className="
          relative font-sora text-[64px] font-bold tracking-[-0.04em] text-cyan/40
          sm:text-[72px]
        "
        aria-hidden="true"
      >
        {initials}
      </span>
    </div>
  );
}
