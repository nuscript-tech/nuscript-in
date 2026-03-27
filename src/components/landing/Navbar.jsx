import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "MedScribeAI", href: "/nuscriptai" },
  { label: "PharmaStockAI", href: "/pharmastockai" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = `flex items-center gap-0.5 text-sm font-medium transition-colors duration-300 hover:text-primary group ${
    scrolled ? "text-muted-foreground" : "text-foreground/70"
  }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
            <img
              src="/nuscript-logo.png"
              alt="NuScript Technologies"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => window.scrollTo(0, 0)}
                className={linkClass}
              >
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -mt-0.5" />
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm font-medium bg-slate-950 text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium bg-slate-950 text-white px-5 py-2.5 rounded-lg text-center"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}