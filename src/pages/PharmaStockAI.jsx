import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, BarChart3, RefreshCw, Store, Layers, Bell } from "lucide-react";
import Navbar from "@/components/website/Navbar";
import Footer from "@/components/website/Footer";
import ScrollToTopButton from "@/components/website/ScrollToTopButton";
import ScrollProgressBar from "@/components/website/ScrollProgressBar";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.55, ease: "easeOut" },
});

const stats = [
  { value: "5–8%", label: "Revenue Recovered from Expiry Loss" },
  { value: "56%", label: "Improved Stock Visibility" },
  { value: "100%", label: "Stock Availability" },
  { value: "24/7", label: "Engineering Support" },
];

const pillars = [
  {
    icon: BarChart3,
    title: "Predictive Inventory & Zero Stockouts",
    desc: "Stop losing customers to missing stock. Our AI analyzes your specific sales velocity to ensure your fast-movers are always on the shelf.",
    bullets: ["Dynamic Reordering — automated procurement based on real-time consumption", "Safety Stock Alerts — instant notifications before critical lows", "Sales Velocity Mapping — optimize capital allocation for hero products"],
  },
  {
    icon: ShieldCheck,
    title: "Revenue Protection & Expiry Control",
    desc: "Indian pharmacies lose up to 5–8% of revenue to expired stock. We turn that loss into profit with surgical precision for every unit.",
    bullets: ["Early Warning System — 60/90-day alerts for aging inventory", "Batch-Level Tracking — precision for every unit in your store", "Smart Liquidations — automated near-expiry discount suggestions"],
  },
  {
    icon: RefreshCw,
    title: "Operational Velocity",
    desc: "Remove the \"Manual\" from your management. Designed for the high-speed Indian retail environment.",
    bullets: ["Intelligent Dashboard — entire business health in one view", "Seamless Integration — works with your existing POS", "Multi-Store Sync — manage your entire chain from one platform"],
  },
];

const comparison = [
  { before: "Manual Stocking", after: "Predictive Analytics" },
  { before: "High Expiry Waste", after: "Zero Expiry Loss" },
  { before: "Lost Sales", after: "100% Stock Availability" },
  { before: "Reactive Procurement", after: "Automated Reordering" },
  { before: "Siloed Multi-Store Data", after: "Unified Real-Time Dashboard" },
  { before: "ERP-Dependent Guesswork", after: "AI-Driven Intelligence Layer" },
];

const features = [
  { icon: RefreshCw, title: "Autonomous Procurement", desc: "AI-driven reordering that learns your sales velocity to ensure your Hero Products never go out of stock." },
  { icon: Bell, title: "Expiry Liquidation Engine", desc: "Advanced 60/90-day early warning systems that suggest smart discounts to clear aging inventory before it becomes a loss." },
  { icon: Store, title: "Hyper-Local Analytics", desc: "Track sales trends specific to your neighborhood or region to optimize high-margin stock allocation." },
  { icon: Layers, title: "Multi-Store Synchronization", desc: "Manage inventory, transfers, and vendor performance across your entire retail chain from a single Coimbatore-engineered hub." },
];

const techSpecs = [
  { label: "Deployment", value: "Cloud-Native / Edge-Ready — scales from one store to fifty" },
  { label: "Security", value: "Enterprise-Grade Encryption — end-to-end protection" },
  { label: "Support", value: "24/7 Dedicated Support — direct line to our Coimbatore engineering hub" },
];

export default function PharmaStockAI() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center pt-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/6 blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Live · PharmaStockAI · Built for Indian Pharmacies</span>
          </motion.div>
          <motion.h1 {...fadeUp(0.18)} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6 text-heading max-w-4xl">
            The Autonomous Engine for <span className="bg-gradient-to-r from-brand-cyan to-primary bg-clip-text text-transparent">Indian Pharmacy.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.26)} className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Moving beyond traditional ERPs. PharmaStockAI is a predictive intelligence layer built to automate procurement, eliminate expiry waste, and maximize margins for Indian retailers and distributors.
          </motion.p>
          <motion.div {...fadeUp(0.34)} className="flex flex-wrap gap-4">
            <a href="https://pharmastock.co.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-colors">
              Explore the Platform <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://nuscript.in/contact" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-bold text-base hover:bg-muted transition-colors">
              Schedule a Technical Demo
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.42)} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {stats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/60" />
                <div className="text-3xl font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Strategic Outcomes</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight max-w-2xl">
              Three pillars. One platform.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.1)} className="bg-card border border-border rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 rounded-l-2xl" />
                <div className="pl-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-extrabold text-heading mb-3">{p.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-14 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">The Transformation</span>
              <div className="w-10 h-px bg-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight">Before vs. After.</h2>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-2 bg-muted/60 px-6 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span>Before PharmaStockAI</span>
              <span className="text-primary">After PharmaStockAI</span>
            </div>
            {comparison.map((row, i) => (
              <div key={row.before} className={`grid grid-cols-2 px-6 py-4 border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-background"}`}>
                <span className="text-sm text-muted-foreground">{row.before}</span>
                <span className="text-sm font-semibold text-primary">{row.after}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.blockquote {...fadeUp()} className="text-xl sm:text-2xl font-normal text-muted-foreground leading-relaxed mb-6">
            "The Indian Pharmacy market is evolving. As consumers demand more reliability and faster service, your back-end operations can no longer be manual. PharmaStockAI provides the tech-equity you need to compete with organized giants while maintaining your local edge."
          </motion.blockquote>
          <motion.p {...fadeUp(0.1)} className="text-sm text-muted-foreground font-semibold uppercase tracking-widest">The Indian Context — Why Now?</motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-14 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Feature Summary</span>
              <div className="w-10 h-px bg-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight">Predictive Intelligence for the Modern Pharmacy.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i * 0.08)} className="bg-card border border-border rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-extrabold text-heading mb-2">{f.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs + CTA */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">For the IT Stakeholder</span>
            </div>
            <h2 className="text-4xl font-extrabold text-heading">Built to enterprise standard.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {techSpecs.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.08)} className="bg-card border border-border rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{s.label}</p>
                <p className="text-base font-semibold text-foreground">{s.value}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp(0.2)} className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
            Precision Inventory for the Foundations of India. Built on a decade of deep expertise in pharma and diagnostics.
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-extrabold text-heading mb-3">Stop Losing Profit to Expiry & Stockouts.</h3>
            <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              Join the next generation of Indian pharmacies using predictive intelligence to protect margins and serve patients better.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://nuscript.in/contact" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">
                Schedule a Technical Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://pharmastock.co.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-bold hover:bg-muted transition-colors">
                Explore the Full Inventory Platform
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
