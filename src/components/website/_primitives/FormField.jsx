/*
 * FormField — labeled input or textarea with deck-token styling.
 *
 * Pass `rows` to render a textarea; otherwise renders an input. The label
 * sits above the field as an uppercase eyebrow-style block; the field
 * itself uses paper-2 fill, rule border, ink text, and a cyan focus ring.
 *
 * The required asterisk is a subtle cyan dot — present enough to register
 * as "you must fill this" but doesn't shout. Browser-native validation
 * (via the `required` HTML attribute) handles error messaging.
 *
 * Pass everything else (id, value, onChange, placeholder, type, autoComplete)
 * straight through. The component is a thin wrapper, not a state container.
 */

export default function FormField({
  id,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  placeholder,
  autoComplete,
  rows,
  className = '',
}) {
  const isTextarea = !!rows;

  const fieldClasses = `
    block w-full rounded-md border border-rule bg-paper-2
    px-3.5 py-2.5 text-[14px] text-ink
    placeholder:text-ink-4
    transition-colors duration-150
    focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/15
    ${isTextarea ? 'resize-none leading-[1.55]' : ''}
  `;

  return (
    <label htmlFor={id} className={`block ${className}`}>
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.08em] text-ink-3">
        {label}
        {required && <span className="ml-1 text-cyan" aria-hidden="true">*</span>}
      </span>
      {isTextarea ? (
        <textarea
          id={id}
          rows={rows}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={fieldClasses}
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={fieldClasses}
        />
      )}
    </label>
  );
}
