/*
 * Eyebrow — micro-uppercase label.
 *
 * The deck's signature "01 · ENGINEERING" / "HOW WE SHIP" / "FOR MTSOs" pattern.
 * 11px, 700 weight, 0.08em tracking, uppercase. See index.css `.eyebrow`.
 *
 * Color is the only variant. Default is muted ink-3 for "soft" eyebrows;
 * brand variants (cyan / emerald) are used to color-code sections or cards.
 */

const COLORS = {
  cyan:    'text-cyan',
  emerald: 'text-emerald',
  slate:   'text-slate',
  ink:     'text-ink-2',
  muted:   'text-ink-3',
};

export default function Eyebrow({
  children,
  color = 'muted',
  as: Tag = 'span',
  className = '',
}) {
  const colorClass = COLORS[color] ?? COLORS.muted;
  return (
    <Tag className={`eyebrow ${colorClass} ${className}`}>
      {children}
    </Tag>
  );
}
