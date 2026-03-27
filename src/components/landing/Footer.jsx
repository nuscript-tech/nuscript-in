import React from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-block">
                <img
                  src="/nuscript-logo.png"
                  alt="NuScript Technologies"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <p className="text-slate-400 text-sm font-jakarta mb-6" style={{ lineHeight: "1.7" }}>
              Building intelligent systems for India's healthcare and pharmaceutical sectors.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:hello@nuscript.in" className="hover:text-white transition-colors">
                  hello@nuscript.in
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-unbounded font-semibold text-xs text-slate-400 mb-5 tracking-widest uppercase">Products</h4>
            <div className="space-y-3">
              {[
                { label: "MedScribeAI", href: "/nuscriptai" },
                { label: "PharmaStockAI", href: "/pharmastockai" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center gap-1 text-slate-400 text-sm hover:text-white transition-colors group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-unbounded font-semibold text-xs text-slate-400 mb-5 tracking-widest uppercase">Company</h4>
            <div className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center gap-1 text-slate-400 text-sm hover:text-white transition-colors group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-jakarta font-normal">
            © {new Date().getFullYear()} NuScript Technologies Private Limited. All rights reserved.
          </p>
          <span className="flex items-center gap-2 text-slate-500 text-xs font-jakarta font-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>
            Made with Precision in Coimbatore, India
          </span>
        </div>
      </div>
    </footer>
  );
}