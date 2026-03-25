/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			heading: ['var(--font-heading)', 'sans-serif'],
  			body: ['var(--font-body)', 'sans-serif'],
  			// legacy aliases — all resolve to Space Grotesk now
  			unbounded: ['var(--font-heading)', 'sans-serif'],
  			jakarta: ['var(--font-body)', 'sans-serif'],
  		},
  		fontWeight: {
  			heading: '600',
  			body: '400',
  		},
  		letterSpacing: {
  			heading: '-0.015em',
  			body: '0.01em',
  		},
  		fontSize: {
  			// ── Tailwind default overrides (SaaS-scale) ──
  			'xs':   ['0.8125rem', { lineHeight: '1.4' }],    // 13px (was 12px)
  			'sm':   ['1rem', { lineHeight: '1.5' }],          // 16px (was 14px)
  			'base': ['1.125rem', { lineHeight: '1.6' }],      // 18px (was 16px)
  			'lg':   ['1.25rem', { lineHeight: '1.55' }],      // 20px (was 18px)
  			'xl':   ['1.375rem', { lineHeight: '1.4' }],      // 22px (was 20px)
  			'2xl':  ['1.625rem', { lineHeight: '1.35' }],     // 26px (was 24px)
  			// ── Design-system tokens ──
  			'heading-1': ['3.25rem', { lineHeight: '1.15' }],
  			'heading-2': ['2.5rem', { lineHeight: '1.2' }],
  			'heading-3': ['1.875rem', { lineHeight: '1.25' }],
  			'heading-4': ['1.5rem', { lineHeight: '1.3' }],
  			'heading-5': ['1.3rem', { lineHeight: '1.35' }],
  			'heading-6': ['1.15rem', { lineHeight: '1.35' }],
  			'body-base': ['1.125rem', { lineHeight: '1.6' }],
  			'body-sm': ['1rem', { lineHeight: '1.5' }],
  			'body-xs': ['0.8125rem', { lineHeight: '1.4' }],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			// ── Shadcn/ui tokens (mapped to CSS vars) ──────────────────────────
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: '#059669',
  				hover: '#047857',
  				active: '#065F46',
  				foreground: '#FFFFFF',
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			subheading: {
  				DEFAULT: '#536379',
  				tertiary: '#64748B',
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: {
  				DEFAULT: '#E2E8F0',
  				subtle: '#F1F5F9',
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// ── Design-system tokens (light theme) ──────────────────────────
  			surface: {
  				DEFAULT: '#FFFFFF',
  				secondary: '#F8FAFC',
  				tertiary: '#F1F5F9',
  			},
  			text: {
  				DEFAULT: '#0F172A',
  				muted: '#64748B',
  				subtle: '#94A3B8',
  			},
  			success: '#059669',
  			warning: '#D97706',
  			danger: '#DC2626',
  			info: '#2563EB',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}