/*
 * ComparisonTable — old-way / new-way side-by-side.
 *
 * Three columns: metric label, old behavior, new behavior. The "new" column
 * gets the brand accent color (cyan or emerald), so the eye gravitates to
 * what's changing. Header row uses a lighter slate background; body rows
 * alternate paper-2 / paper for readability on long lists.
 *
 * On mobile (below sm:), the three-column grid collapses to stacked
 * "metric · old · new" cards — keeps each row readable without horizontal
 * scroll.
 *
 * Pass:
 *   accent       — 'cyan' | 'emerald' | 'slate' (default cyan)
 *   headerLeft   — header for the metric column
 *   headerOld    — header for the "without our product" column
 *   headerNew    — header for the "with our product" column
 *   rows         — array of { metric, old, new }
 */

const ACCENT = {
  cyan:    'text-cyan',
  emerald: 'text-emerald',
  slate:   'text-slate',
};

export default function ComparisonTable({
  accent = 'cyan',
  headerLeft = 'Metric',
  headerOld = 'Without',
  headerNew = 'With',
  rows = [],
}) {
  const accentClass = ACCENT[accent] ?? ACCENT.cyan;

  return (
    <div className="overflow-hidden rounded-lg border border-rule">
      {/* Header row — desktop */}
      <div className="hidden grid-cols-12 gap-4 bg-paper px-6 py-3 sm:grid">
        <span className="col-span-3 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-3">
          {headerLeft}
        </span>
        <span className="col-span-4 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-3">
          {headerOld}
        </span>
        <span className={`col-span-5 text-[11px] font-bold uppercase tracking-[0.08em] ${accentClass}`}>
          {headerNew}
        </span>
      </div>

      {/* Body rows — desktop grid */}
      <div className="hidden sm:block">
        {rows.map((row, i) => (
          <div
            key={row.metric}
            className={`
              grid grid-cols-12 gap-4 border-t border-rule px-6 py-4
              ${i % 2 === 0 ? 'bg-paper-2' : 'bg-paper'}
            `}
          >
            <span className="col-span-3 text-[14px] font-semibold leading-[1.55] text-slate">
              {row.metric}
            </span>
            <span className="col-span-4 text-[14px] leading-[1.55] text-ink-2">
              {row.old}
            </span>
            <span className={`col-span-5 text-[14px] font-semibold leading-[1.55] ${accentClass}`}>
              {row.new}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile — stacked cards. Each row becomes a 3-section block:
          metric label, "Without" value, "With" value (brand-colored). */}
      <div className="sm:hidden">
        {rows.map((row, i) => (
          <div
            key={row.metric}
            className={`
              border-t border-rule px-5 py-4
              ${i === 0 ? 'border-t-0' : ''}
              ${i % 2 === 0 ? 'bg-paper-2' : 'bg-paper'}
            `}
          >
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-3">
              {row.metric}
            </p>
            <div className="space-y-1.5">
              <p className="text-[13px] leading-[1.55] text-ink-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-3 mr-2">
                  {headerOld}
                </span>
                {row.old}
              </p>
              <p className={`text-[13px] font-semibold leading-[1.55] ${accentClass}`}>
                <span className={`text-[11px] font-bold uppercase tracking-[0.06em] mr-2 ${accentClass}`}>
                  {headerNew}
                </span>
                {row.new}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
