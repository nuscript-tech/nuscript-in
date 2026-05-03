import { Link } from "react-router-dom";
import { MapPin, Mail, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "instant" });

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className="bg-muted/50 text-foreground relative">
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-brand-cyan via-primary to-brand-cyan" />
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand column */}
        <div className="flex flex-col gap-5">
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-2">
            <img
              src={isDark ? "/nuscript-logo-white.png" : "/nuscript-logo.png"}
              alt="NuScript Technologies"
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Building intelligent systems for India's healthcare and pharmaceutical sectors.
          </p>
          <div className="flex flex-col gap-2 mt-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <a href="mailto:hello@nuscript.in" className="hover:text-foreground transition-colors">hello@nuscript.in</a>
            </div>
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-3 mt-2">
            <a href="https://linkedin.com/company/nuscript-technologies" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com/nuscripttech" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Products column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">Products</h4>
          <div className="flex flex-col gap-3">
            <Link to="/medscribeai" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">MedScribeAI</Link>
            <Link to="/pharmastockai" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">PharmaStockAI</Link>
          </div>
        </div>

        {/* Company column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">Company</h4>
          <div className="flex flex-col gap-3">
            <Link to="/about" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
            <Link to="/contact" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link to="/privacy" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© 2026 NuScript Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground">Made with Precision in Coimbatore, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
