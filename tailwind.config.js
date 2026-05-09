/** @type {import('tailwindcss').Config} */
//
// NuScript Technologies — design system tokens
// Aligned to the Sprint2Frontier deck design system spec (light theme).
// Single-theme: no `dark:` variants, no class toggle. The hero block is
// permanently dark via the `bg-hero-gradient` background image, defined below.
//
// Token reference: see /docs/NuScript_Design_System.md (sections 1, 2, 4, 9).
//
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Sora is the canonical brand font (weights 400–800).
        // Inter is loaded second specifically for the ₹ glyph (U+20B9),
        // which Sora does not include — see index.css and index.html.
        sans:    ['Sora', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        sora:    ['Sora', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        // Legacy aliases — pre-existing components reference these.
        // They now resolve to Sora so the migration is non-breaking.
        jakarta:  ['Sora', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        satoshi:  ['Sora', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        // ─── Deck core tokens ────────────────────────────────────────────
        // CSS vars hold raw HSL components (e.g. "195 100% 40%") so that
        // Tailwind's slash-opacity syntax works: bg-cyan/10, border-emerald/20, etc.
        cyan: {
          DEFAULT: 'hsl(var(--cyan))',          // #0099CC — primary on light surfaces
          bright:  'hsl(var(--cyan-bright))',   // #00BFFF — primary on dark surfaces (hero)
          tint:    '#E5F4FA',                   // very light cyan background
          'tint-2':'#CCE9F5',                   // hover background
        },
        emerald: {
          DEFAULT: 'hsl(var(--emerald))',       // #10B981 — secondary brand
          tint:    '#D1FAE5',                   // very light emerald background
        },
        slate: {
          DEFAULT: 'hsl(var(--slate))',         // #0F172A — dark surface, headings
          2:       'hsl(var(--slate-2))',       // #1E293B — gradient mid-tone
          3:       'hsl(var(--slate-3))',       // #334155
        },
        ink: {
          DEFAULT: 'hsl(var(--ink))',           // #0F172A — body text
          2:       'hsl(var(--ink-2))',         // #475069 — secondary body
          3:       'hsl(var(--ink-3))',         // #6B7494 — captions, footers
          4:       'hsl(var(--ink-4))',         // #94A3B8 — placeholders
        },
        paper: {
          DEFAULT: 'hsl(var(--paper))',         // #F7F9FB — page background
          2:       'hsl(var(--paper-2))',       // #FFFFFF — elevated cards
        },
        rule: {
          DEFAULT: 'hsl(var(--rule))',          // #E2E6EF — borders
          2:       'hsl(var(--rule-2))',        // #C8CFDD — emphasis borders
        },
        offwhite:  'hsl(var(--offwhite))',      // #EBF1FF — primary text on dark

        // ─── shadcn/ui semantic tokens — wired to deck values ────────────
        background:   'hsl(var(--background))',
        foreground:   'hsl(var(--foreground))',
        heading:      'hsl(var(--heading))',
        card:         { DEFAULT: 'hsl(var(--card))',         foreground: 'hsl(var(--card-foreground))' },
        popover:      { DEFAULT: 'hsl(var(--popover))',      foreground: 'hsl(var(--popover-foreground))' },
        primary:      { DEFAULT: 'hsl(var(--primary))',      foreground: 'hsl(var(--primary-foreground))' },
        secondary:    { DEFAULT: 'hsl(var(--secondary))',    foreground: 'hsl(var(--secondary-foreground))' },
        muted:        { DEFAULT: 'hsl(var(--muted))',        foreground: 'hsl(var(--muted-foreground))' },
        accent:       { DEFAULT: 'hsl(var(--accent))',       foreground: 'hsl(var(--accent-foreground))' },
        destructive:  { DEFAULT: 'hsl(var(--destructive))',  foreground: 'hsl(var(--destructive-foreground))' },
        border:       'hsl(var(--border))',
        input:        'hsl(var(--input))',
        ring:         'hsl(var(--ring))',

        // ─── Legacy aliases — preserved for non-breaking compatibility ───
        // Pre-existing components use bg-brand-cyan / bg-brand-green etc.
        // These continue to work; values are deck-exact.
        'brand-cyan':  'hsl(var(--brand-cyan))',
        'brand-green': 'hsl(var(--brand-green))',
        'brand-zera':  'hsl(var(--brand-zera))',
      },
      fontSize: {
        // Deck-derived web type scale. Pair with the letter-spacing rules
        // baked into the bracket arguments here so utilities like
        // `text-display` apply tracking automatically.
        'display-lg': ['88px', { lineHeight: '0.95', letterSpacing: '-0.04em',  fontWeight: '700' }],
        'display':    ['64px', { lineHeight: '1.05', letterSpacing: '-0.036em', fontWeight: '700' }],
        'headline':   ['48px', { lineHeight: '1.10', letterSpacing: '-0.025em', fontWeight: '700' }],
        'title':      ['32px', { lineHeight: '1.20', letterSpacing: '-0.022em', fontWeight: '700' }],
        'subtitle':   ['18px', { lineHeight: '1.50', letterSpacing: '-0.005em', fontWeight: '500' }],
        'body-lg':    ['16px', { lineHeight: '1.55', letterSpacing: '-0.003em', fontWeight: '400' }],
        'body':       ['14px', { lineHeight: '1.55', letterSpacing: '-0.003em', fontWeight: '400' }],
        'small':      ['13px', { lineHeight: '1.50', letterSpacing: '-0.003em', fontWeight: '400' }],
        'micro':      ['11px', { lineHeight: '1.40', letterSpacing: '0.08em',   fontWeight: '700' }],
      },
      borderRadius: {
        sm:    '6px',
        md:    '8px',
        lg:    '10px',  // deck card default — also bound to var(--radius)
        xl:    '12px',
        '2xl': '16px',
        full:  '9999px',
      },
      boxShadow: {
        feature: '0 8px 32px rgba(0, 153, 204, 0.10)',  // cyan-tinted, featured cards
        card:    '0 2px 8px rgba(15, 23, 42, 0.04)',    // subtle hover lift
        modal:   '0 16px 48px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        // The deck close-slide aesthetic. Used by the Hero block.
        // Layered: cyan radial overlay + diagonal slate gradient.
        'hero-gradient':
          'radial-gradient(1100px 650px at 78% 20%, rgba(0,191,255,0.18) 0%, rgba(0,191,255,0) 60%), linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #020617 100%)',
        // Subtle dot grid for light section interiors (used optionally).
        'dot-grid':
          'radial-gradient(circle, rgba(15,23,42,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
