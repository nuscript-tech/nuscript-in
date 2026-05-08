import { motion } from 'framer-motion';

/*
 * DarkBanner — full-width slate banner with cyan-bright accent on a key phrase.
 *
 * Direct port of the deck slide 2 / 6 banner pattern: dark-slate surface,
 * white text, cyan-bright accent on the operative phrase, center-aligned.
 *
 * Use sparingly — one per landing section maximum, ideally one per page.
 * This is the visual shout, the moment where the deck stops describing and
 * starts asserting.
 *
 * Pass two props:
 *   - lead:   the setup text in white
 *   - accent: the operative phrase in cyan-bright (rendered bold)
 *
 * Or pass `children` and inline the <span> manually for fine control.
 */

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function DarkBanner({ lead, accent, children, className = '' }) {
  return (
    <motion.div
      {...fadeUp}
      className={`
        relative overflow-hidden rounded-lg
        bg-slate text-offwhite
        px-7 py-7 sm:px-10 sm:py-9
        text-center
        ${className}
      `}
    >
      {/* subtle cyan radial echo of the hero, dialed way down */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(600px 280px at 80% 20%, rgba(0,191,255,0.10) 0%, rgba(0,191,255,0) 60%)',
        }}
      />
      <p
        className="
          relative font-sora font-medium
          text-[18px] leading-[1.55] tracking-[-0.005em]
          sm:text-[20px]
          lg:text-[22px]
        "
      >
        {children ?? (
          <>
            {lead}{' '}
            <span className="font-bold text-cyan-bright">{accent}</span>
          </>
        )}
      </p>
    </motion.div>
  );
}
