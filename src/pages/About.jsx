import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, ShieldCheck, MapPin, Globe, Layers, Lightbulb, TrendingUp, Rocket } from "lucide-react";
import SEO from "@/components/SEO";
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

const timeline = [
  { year: "2000", title: "The Genesis", desc: "Our founder enters the HIM/RCM sector, laying the groundwork for two decades of global documentation standards.", icon: Lightbulb },
  { year: "2000–2025", title: "A Legacy of Scale", desc: "Building 8 health-tech ventures and achieving 4 successful exits in the US and Indian markets.", icon: TrendingUp },
  { year: "2026", title: "NuScript Tech is Born", desc: "A specialized hub in Coimbatore dedicated to replacing manual bottlenecks with autonomous AI for MTSOs and Pharmacies.", icon: Rocket },
];

const founderStats = [
  { value: "8", label: "Startups Founded" },
  { value: "4", label: "Successful Exits" },
  { value: "25+", label: "Years in HealthTech" },
  { value: "2", label: "AI Platforms Built" },
];

const coimbatoreReasons = [
  { icon: MapPin, title: "Local Engineering", desc: "Our R&D center is strategically located in Coimbatore, tapping into a rich pool of engineering talent building world-class AI." },
  { icon: Globe, title: "Global Delivery", desc: "We bridge the gap between US-grade quality standards and Indian operational realities — serving both markets with excellence." },
  { icon: Layers, title: "SaaS-First", desc: "100% focused on Vertical SaaS — building deep, industry-specific solutions that solve real problems, not generic tools." },
];

const principles = [
  { icon: Target, title: "Precision", desc: "Every product we build is engineered to exceed the highest accuracy benchmarks — because in healthcare and pharma, errors have consequences." },
  { icon: Zap, title: "Automation", desc: "We systematically eliminate every manual bottleneck. If a human is doing something a machine can do better, we fix it." },
  { icon: ShieldCheck, title: "Integrity", desc: "HIPAA-grade data standards, compliance-first architecture, and zero-compromise on privacy. Trust is our product." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEO page="about" />
      <ScrollProgressBar />
      <Navbar />

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center pt-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-cyan/5 blur-3xl" />
          <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Born in Coimbatore · Proven in Global Healthcare</span>
          </motion.div>
          <motion.h1 {...fadeUp(0.18)} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6 text-heading max-w-4xl">
            Engineering Precision for <span className="bg-gradient-to-r from-brand-cyan to-primary bg-clip-text text-transparent">India's Essential Sectors.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.26)} className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            We are NuScript Technologies — a venture-backed innovation hub dedicated to replacing manual bottlenecks with <strong className="text-foreground">autonomous intelligence.</strong>
          </motion.p>
          <motion.div {...fadeUp(0.34)} className="flex flex-wrap gap-4">
            <a href="/medscribeai" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-colors">
              Explore MedScribeAI <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/pharmastockai" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-bold text-base hover:bg-muted transition-colors">
              Explore PharmaStockAI
            </a>
          </motion.div>
        </div>
      </section>

      {/* Origins & Timeline */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp()}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our Origins</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight mb-6">25 Years of Domain Mastery.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              NuScript Technologies wasn't built in a vacuum. Our foundation lies in over two decades of excellence in Health Information Management (HIM) and Revenue Cycle Management (RCM) for the US market.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In 2026, we brought that same obsession with precision to the Indian domestic market — building technology that works when it matters most.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[22px] top-3 bottom-3 w-px bg-border" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <motion.div key={t.year} {...fadeUp(0.1 + i * 0.1)} className="flex items-start gap-5">
                  <div className="relative z-10 w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <t.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="pt-1">
                    <p className="text-base font-extrabold text-heading mb-1">
                      <span className="text-primary">{t.year}</span> — {t.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Two Pillars of Innovation</span>
              <div className="w-10 h-px bg-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-heading">One mission. Two market-defining products.</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                tag: "Pillar I · The Global Standard",
                name: "MedScribeAI",
                sub: "Built for US Healthcare",
                desc: "We understand the high-stakes world of US Healthcare. Our platform is the culmination of years of managing complex transcription workflows — moving from manual processing to complete automation because technology should liberate human expertise, not burden it.",
                cta: "Explore MedScribeAI →",
                href: "/medscribeai",
                accent: "border-brand-cyan/30",
                tagColor: "text-brand-cyan",
                btnClass: "text-brand-cyan hover:underline",
              },
              {
                tag: "Pillar II · The Local Mission",
                name: "PharmaStockAI",
                sub: "Built for Indian Pharmacies",
                desc: "We saw a gap in the Indian pharmacy ecosystem: brilliant pharmacists held back by manual inventory and unpredictable supply chains. PharmaStockAI was created to give the \"Neighborhood Chemist\" the same predictive power used by global retail giants.",
                cta: "Explore PharmaStockAI →",
                href: "/pharmastockai",
                accent: "border-primary/30",
                tagColor: "text-primary",
                btnClass: "text-primary hover:underline",
              },
            ].map((p, i) => (
              <motion.div key={p.name} {...fadeUp(i * 0.12)} className={`bg-card border rounded-2xl p-8 ${p.accent}`}>
                <span className={`text-xs font-bold uppercase tracking-widest block mb-3 ${p.tagColor}`}>{p.tag}</span>
                <h3 className="text-2xl font-extrabold text-heading mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.sub}</p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <a href={p.href} className={`text-sm font-bold ${p.btnClass}`}>{p.cta}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote + Stats */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="bg-card border border-border rounded-2xl p-8 sm:p-12 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Founder's Vision</span>
            </div>
            <blockquote className="text-xl sm:text-2xl font-normal text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              "As a founder with eight startups and four successful exits in HealthTech, my goal for NuScript Technologies is simple: to build the most reliable technology 'chassis' for India's healthcare and financial infrastructure. We aren't just building apps; we are building the connective tissue for modern Indian enterprises."
            </blockquote>
            <div>
              <p className="text-base font-extrabold text-heading">Arvind Manohar</p>
              <p className="text-sm text-muted-foreground">Founder & CEO, NuScript Technologies · 8 Startups · 4 Exits</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {founderStats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.08)} className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/60" />
                <div className="text-4xl font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Coimbatore */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Why Coimbatore?</span>
              <div className="w-10 h-px bg-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-heading">India's quietly rising deep-tech hub.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {coimbatoreReasons.map((r, i) => (
              <motion.div key={r.title} {...fadeUp(i * 0.1)} className="bg-card border border-border rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 rounded-l-2xl" />
                <div className="pl-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <r.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-extrabold text-heading mb-3">{r.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Principles */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">The NuScript Way</span>
              <div className="w-10 h-px bg-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-heading">Three principles. Zero compromise.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {principles.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.1)} className="bg-card border border-border rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-extrabold text-heading mb-3">{p.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Join CTA */}
          <motion.div {...fadeUp(0.3)} className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-extrabold text-heading mb-3">Want to be part of the mission?</h3>
            <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              We're always looking for engineers, domain experts, and partners who believe in building technology that matters.
            </p>
            <a href="mailto:info@nuscript.in" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">
              Join the Mission <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
