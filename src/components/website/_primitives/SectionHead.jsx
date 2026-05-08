import { motion } from 'framer-motion';
import Eyebrow from './Eyebrow';

/*
 * SectionHead — eyebrow + h2 + optional lede paragraph.
 *
 * Deck-faithful pattern, used at the top of every body section. Left-aligned
 * by default (deck convention — slides 2, 3, 5, 13 all left-align headings).
 * Centered variant available for sections where the section is more "moment"
 * than "page" — e.g. the Talk-to-us call-to-action.
 *
 * Headline uses Sora 700 with -0.025em tracking, scaled responsively from
 * 32px → 48px → 56px. The lede paragraph below it is ink-2, max-w-2xl,
 * 18px / 1.55 — matches the deck's body-paragraph treatment.
 */

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export default function SectionHead({
  eyebrow,
  eyebrowColor = 'cyan',
  headline,
  lede,
  align = 'left',
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const ledeAlignClass = align === 'center' ? 'mx-auto' : '';

  return (
    <motion.div {...fadeUp} className={`${alignClass} ${className}`}>
      {eyebrow && (
        <Eyebrow color={eyebrowColor} className="mb-4 block">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className="
          font-sora font-bold text-slate
          leading-[1.10] tracking-[-0.025em]
          text-[32px] sm:text-[40px] lg:text-[48px]
        "
      >
        {headline}
      </h2>
      {lede && (
        <p
          className={`
            mt-5 max-w-2xl text-[17px] leading-[1.55] text-ink-2
            sm:text-[18px]
            ${ledeAlignClass}
          `}
        >
          {lede}
        </p>
      )}
    </motion.div>
  );
}
