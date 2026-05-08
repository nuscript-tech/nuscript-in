import { motion } from 'framer-motion';

/*
 * Timeline — vertical timeline pattern.
 *
 * Each entry is a row with:
 *   - A circular marker on the left (cyan-bordered, paper-2 fill)
 *   - A vertical connector line running through the column behind markers
 *   - Date eyebrow (uppercase, micro-tracked) + title + body on the right
 *
 * Entries fade up in sequence so the timeline reads as a progression rather
 * than appearing all at once. The connector line has 1.5px width and uses
 * the rule color so it reads as structure rather than a feature.
 *
 * Pass `entries` as an array of { date, title, body } objects.
 */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
});

export default function Timeline({ entries = [] }) {
  return (
    <div className="relative">
      {/* Vertical connector line — sits behind markers. The top/bottom
          insets keep it from extending past the first/last marker. */}
      <div
        aria-hidden="true"
        className="absolute left-[19px] top-3 bottom-3 w-px bg-rule"
      />

      <ol className="space-y-9">
        {entries.map((entry, i) => (
          <motion.li
            key={`${entry.date}-${i}`}
            {...fadeUp(i * 0.08)}
            className="relative flex items-start gap-5"
          >
            {/* Marker — circular dot in cyan-tinted ring */}
            <span
              aria-hidden="true"
              className="
                relative z-10 mt-0.5 inline-flex h-10 w-10 flex-shrink-0
                items-center justify-center rounded-full
                border border-cyan/30 bg-paper-2
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
            </span>

            <div className="pt-1">
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.08em] text-cyan">
                {entry.date}
              </p>
              <h3 className="font-sora text-[18px] font-bold leading-[1.25] tracking-[-0.018em] text-slate sm:text-[19px]">
                {entry.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-ink-2 sm:text-[15px]">
                {entry.body}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
