import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';

/*
 * Footer — light surface, deck-aligned.
 *
 * Structure preserved from the existing site (three-column nav + bottom
 * legal bar). Visual refresh is automatic via the new design tokens:
 *   - Surface uses paper instead of muted-tinted gray.
 *   - Top edge is a thin slate rule rather than a cyan gradient bar
 *     (the gradient was too loud against the body sections).
 *   - Light logo always (footer sits on light surface, so no theme branch).
 *
 * Tagline rewritten to operator register: vertical SaaS for healthcare &
 * pharmacy operations, engineered in Coimbatore. The original copy
 * ("Building intelligent systems...") was generic; this is concrete.
 *
 * Social icons dropped pending confirmation that the LinkedIn / Twitter
 * handles in the original code actually exist. Cleaner without them, and
 * matches the deck close-slide aesthetic which is contact-info-only.
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
  email:    'arvind.manohar@nuscript.in',
};

export default function Footer() {
  return (
    <footer className="relative bg-paper">
      {/* thin top rule — deck convention for light section breaks */}
      <div className="h-px w-full bg-rule" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:px-8 md:grid-cols-12 md:gap-10">
        {/* Brand column — spans 5 of 12 on desktop */}
        <div className="flex flex-col gap-5 md:col-span-5">
          <Link to="/" onClick={scrollToTop} className="inline-flex items-center">
            <img
              src="/nuscript-logo.png"
              alt="NuScript Technologies"
              className="h-8 w-auto select-none object-contain"
              draggable={false}
            />
          </Link>

          <p className="max-w-sm text-[14px] leading-[1.55] text-ink-2">
            {TAGLINE}
          </p>

          <ul className="flex flex-col gap-2 pt-1">
            <li className="flex items-center gap-2 text-[13px] text-ink-3">
              <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span>{CONTACT.location}</span>
            </li>
            <li className="flex items-center gap-2 text-[13px] text-ink-3">
              <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-cyan"
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Products column — spans 3 of 12 */}
        <div className="md:col-span-3">
          <h4 className="eyebrow text-ink-3 mb-5">Products</h4>
          <ul className="flex flex-col gap-3">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={scrollToTop}
                  className="text-[14px] text-ink-2 transition-colors hover:text-slate"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column — spans 4 of 12 */}
        <div className="md:col-span-4">
          <h4 className="eyebrow text-ink-3 mb-5">Company</h4>
          <ul className="flex flex-col gap-3">
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={scrollToTop}
                  className="text-[14px] text-ink-2 transition-colors hover:text-slate"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <p className="text-[12px] text-ink-3">
            © 2026 NuScript Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-cyan"
            />
            <span className="text-[12px] text-ink-3">
              Made with precision in Coimbatore, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
