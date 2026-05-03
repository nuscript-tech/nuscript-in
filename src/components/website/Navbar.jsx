import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { label: "MedScribeAI", href: "/medscribeai" },
  { label: "PharmaStockAI", href: "/pharmastockai" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { isDark, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={isDark ? "/nuscript-logo-white.png" : "/nuscript-logo.png"}
            alt="NuScript Technologies"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-sm font-semibold transition-colors relative pb-0.5 ${
                pathname === l.href
                  ? "text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            to="/contact"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4"
          >
            {links.map((l) => (
              <Link key={l.label} to={l.href} className="text-base font-semibold text-foreground" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold" onClick={() => setOpen(false)}>
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
