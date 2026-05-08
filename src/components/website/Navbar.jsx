import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

/*
 * Navbar — fixed, top-of-page.
 *
 * Two states:
 *   1. Transparent — used when a page passes `transparent={true}` AND the
 *      user hasn't scrolled past the dark hero. Background is fully
 *      transparent, text and logo are white, hover is white-with-bright-cyan.
 *   2. Opaque — default. Used on internal pages (which have light heroes,
 *      not dark ones) and on the home page after the user scrolls past the
 *      hero block. Background is paper-2 with a thin rule border, text is
 *      ink-2, logo is the dark variant.
 *
 * The scroll threshold for the transition is 80px — short enough that the
 * navbar feels responsive when scrolling past the hero, long enough that
 * tiny scroll wiggles don't trigger the flip.
 *
 * Theme toggle removed — single-theme design system.
 */

const NAV_LINKS = [
  { label: 'MedScribeAI',   href: '/medscribeai'   },
  { label: 'PharmaStockAI', href: '/pharmastockai' },
  { label: 'About',         href: '/about'         },
];

const SCROLL_THRESHOLD = 80;

export default function Navbar({ transparent = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Track scroll only when the page declares it has a dark hero behind us.
  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);

  // Close mobile menu on route change.
  useEffect(() => { setOpen(false); }, [pathname]);

  const isOverDarkHero = transparent && !scrolled;

  /* ─── Conditional class sets ───────────────────────────────────────────
   * Hoisted into named consts so the JSX below stays readable. */
  const headerCls = isOverDarkHero
    ? 'bg-transparent border-transparent'
    : 'bg-paper-2/90 backdrop-blur-md border-rule shadow-[0_1px_0_rgba(0,0,0,0.02)]';

  const linkBaseCls = isOverDarkHero
    ? 'text-offwhite/80 hover:text-white'
    : 'text-ink-2 hover:text-slate';

  const linkActiveCls = isOverDarkHero
    ? 'text-white after:bg-cyan-bright'
    : 'text-slate after:bg-cyan';

  const ctaCls = isOverDarkHero
    ? 'bg-cyan-bright/10 text-cyan-bright border border-cyan-bright/30 hover:bg-cyan-bright/15 hover:border-cyan-bright/50'
    : 'bg-cyan text-white hover:bg-cyan/90';

  const iconBtnCls = isOverDarkHero
    ? 'text-offwhite/80 hover:text-white'
    : 'text-ink-2 hover:text-slate';

  const logoSrc = isOverDarkHero ? '/nuscript-logo-white.png' : '/nuscript-logo.png';

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300
        ${headerCls}
      `}
    >
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="NuScript Technologies — home">
          <img
            src={logoSrc}
            alt="NuScript Technologies"
            className="h-8 w-auto select-none object-contain sm:h-9"
            draggable={false}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`
                  relative pb-0.5 text-[14px] font-semibold transition-colors duration-200
                  after:absolute after:bottom-[-2px] after:left-0 after:h-[2px]
                  after:transition-all after:duration-200
                  ${active
                    ? `${linkActiveCls} after:w-full`
                    : `${linkBaseCls} after:w-0 after:bg-transparent`
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side — desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className={`
              inline-flex items-center rounded-md px-4 py-2 text-[13px] font-bold
              tracking-[-0.005em] transition-colors duration-200
              ${ctaCls}
            `}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`md:hidden ${iconBtnCls}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`
              overflow-hidden border-t md:hidden
              ${isOverDarkHero ? 'border-white/10 bg-slate/95' : 'border-rule bg-paper-2'}
            `}
          >
            <div className="flex flex-col gap-4 px-6 py-5 sm:px-8">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                const itemCls = isOverDarkHero
                  ? active ? 'text-white' : 'text-offwhite/80'
                  : active ? 'text-slate' : 'text-ink-2';
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-[15px] font-semibold ${itemCls}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className={`
                  inline-flex items-center justify-center rounded-md px-4 py-2.5
                  text-[13px] font-bold transition-colors duration-200
                  ${ctaCls}
                `}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
