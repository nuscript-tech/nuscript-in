/*
 * TopAccentCard — the deck's signature card pattern.
 *
 * White (paper-2) surface with a 3px brand-colored top edge, 1px rule border
 * everywhere else, radius-lg (10px), 24px padding, and a subtle shadow on
 * hover. This is the card style on slide 2, slide 5, slide 13, slide 25 of
 * the Sprint2Frontier deck.
 *
 * The accent prop drives the top-edge color: cyan / emerald / slate / cyan-bright.
 * The hoverable prop turns the lift+shadow on (default true). Set false for
 * cards that aren't clickable / linked.
 *
 * Padding ratio is intentionally lean — the deck uses ~22-24px inner padding
 * and we mirror that. Sections handle the outer spacing.
 */

const ACCENTS = {
  cyan:        'bg-cyan',
  emerald:     'bg-emerald',
  clay:        'bg-clay',
  slate:       'bg-slate',
  'cyan-bright': 'bg-cyan-bright',
};

export default function TopAccentCard({
  accent = 'cyan',
  hoverable = true,
  className = '',
  children,
}) {
  const barColor = ACCENTS[accent] ?? ACCENTS.cyan;
  const hover = hoverable
    ? 'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card'
    : '';

  return (
    <div
      className={`
        relative overflow-hidden rounded-lg
        border border-rule bg-paper-2
        p-6 sm:p-7
        ${hover}
        ${className}
      `}
    >
      <div
        className={`absolute left-0 top-0 h-[3px] w-full ${barColor}`}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
