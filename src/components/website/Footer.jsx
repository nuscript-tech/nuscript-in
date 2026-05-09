import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';

/*
 * Footer — dark slate-2 surface.
 *
 * Quieter than the hero gradient — flat #1E293B with no radial overlay, no
 * gradient stops. Provides a clean dark close to the page without doubling
 * down on the hero's strong brand moment.
 *
 * Color logic on a dark surface:
 *   - Logo: always the white variant (no theme branch)
 *   - Tagline + body text: offwhite/65 — readable but quieter than primary
 *   - Section headings (PRODUCTS, COMPANY): offwhite/45, micro-uppercase
 *   - Nav links default: offwhite/75
 *   - Nav links hover: white (full opacity)
 *   - Inline links (email, etc): cyan-bright on hover
 *   - Top edge: a thin slate-3 rule for the bg-paper → bg-slate-2 transition
 *   - Bottom legal bar: separated by a slate-3 rule, offwhite/40 micro text
 *   - Status dot in legal bar: cyan-bright (matches hero accent)
 */

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

const PRODUCT_LINKS = [
  { label: 'MedScribeAI',    to: '/medscribeai'    },
  { label: 'PharmaStockAI',  to: '/pharmastockai'  },
];

const COMPANY_LINKS = [
  { label: 'About Us',       to: '/about'   },
  { label: 'Contact',        to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Use',   to: '/terms'   },
];

const TAGLINE =
  'Vertical SaaS for healthcare and pharmacy operations. Engineered in Coimbatore.';

const CONTACT = {
  location: 'Coimbatore, Tamil Nadu, India',
  email:    'hello@nuscript.in',
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-2">
      {/* Top edge separator — paper body to slate-2 footer transition.
          Uses slate-3 rather than rule because the contrast against paper
          would be too sharp with rule color, and we want the seam to feel
          like a deliberate transition, not a hard cut. */}
      <div className="h-px w-full bg-slate-3/40" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:px-8 md:grid-cols-12 md:gap-10">
        {/* ─── Brand column ─────────────────────────────────────────────
            Spans 5 of 12. White logo, tagline, and contact rows. */}
        <div className="flex flex-col gap-5 md:col-span-5">
          <Link
            to="/"
            onClick={scrollToTop}
            className="inline-flex items-center transition-opacity hover:opacity-80"
            aria-label="NuScript Technologies — home"
          >
            <img
              src="/nuscript-logo-white.png"
              alt="NuScript Technologies"
              className="h-8 w-auto select-none object-contain"
              draggable={false}
            />
          </Link>

          <p className="max-w-sm text-[14px] leading-[1.55] text-offwhite/65">
            {TAGLINE}
          </p>

          <ul className="flex flex-col gap-2 pt-1">
            <li className="flex items-center gap-2 text-[13px] text-offwhite/55">
              <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span>{CONTACT.location}</span>
            </li>
            <li className="flex items-center gap-2 text-[13px] text-offwhite/55">
              <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-cyan-bright"
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        {/* ─── Products column ─────────────────────────────────────────
            Spans 3 of 12. */}
        <div className="md:col-span-3">
          <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.08em] text-offwhite/45">
            Products
          </h4>
          <ul className="flex flex-col gap-3">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={scrollToTop}
                  className="text-[14px] text-offwhite/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Company column ──────────────────────────────────────────
            Spans 4 of 12. */}
        <div className="md:col-span-4">
          <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.08em] text-offwhite/45">
            Company
          </h4>
          <ul className="flex flex-col gap-3">
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={scrollToTop}
                  className="text-[14px] text-offwhite/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ─── Bottom legal bar ────────────────────────────────────────────
          Separated by a thin slate-3 rule. Micro text in offwhite/40 with a
          cyan-bright status dot tying back to the hero's accent treatment. */}
      <div className="border-t border-slate-3/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <p className="text-[12px] text-offwhite/45">
            © 2026 NuScript Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-cyan-bright"
            />
            <span className="text-[12px] text-offwhite/45">
              Made with precision in Coimbatore, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
