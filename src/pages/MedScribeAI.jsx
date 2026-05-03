import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, BarChart3, Shield, Monitor, Cpu, Users, Globe, ShieldCheck } from "lucide-react";
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
  { value: "99.4%", label: "Accuracy Rate" },
  { value: "0.4s", label: "Avg. Turnaround" },
  { value: "4x", label: "Volume Capacity" },
  { value: "24/7", label: "Uptime SLA" },
];

const pillars = [
  {
    icon: Cpu,
    title: "Voice-to-Structured-Report",
    desc: "Not ambient. Not approximate. Exact. MedScribeAI captures the physician's intent and transforms it into a formatted, peer-review-ready medical report instantly — optimized for diverse accents and complex medical terminology.",
    bullets: ["High-Fidelity Capture", "SOAP / H&P / Consultation output", "Format tailored to US clinic standards"],
  },
  {
    icon: BarChart3,
    title: "Unbeatable Accuracy",
    desc: "Neural voice capture engineered to handle diverse clinical accents and complex medical terminology with 99.9% accuracy — validated at every step.",
    bullets: ["100% precision with validation", "Zero manual review required", "Enterprise-grade always enforced"],
  },
  {
    icon: Users,
    title: "Built for MTSOs",
    desc: "A centralized command center to manage multiple US provider feeds, track SLAs, and monitor real-time throughput — turning your MTSO into a technology-led documentation powerhouse.",
    bullets: ["MTSO Multi-Tenant Dashboard", "Client growth without scaling headcount", "Unified SLA management"],
  },
];

const comparison = [
  { metric: "Turnaround Time", old: "Hours to days", new: "Minutes (instant)" },
  { metric: "Labor Cost", old: "High — per-transcriptionist", new: "Zero manual processing cost" },
  { metric: "Error Rate", old: "Human error inevitable", new: "100% precision with validation" },
  { metric: "Scalability", old: "More volume = more hires", new: "Same team, 10x volume" },
  { metric: "HIPAA Compliance", old: "Dependent on individual staff", new: "Enterprise-grade, always enforced" },
  { metric: "EMR Integration", old: "Manual re-entry", new: "Direct push to EHR/EMR" },
];

const features = [
  { icon: Cpu, title: "Neural Voice Capture", desc: "High-fidelity processing for diverse clinical accents and complex medical terminology with 99.9% accuracy." },
  { icon: Zap, title: "Structured Intelligence", desc: "Beyond simple text — AI maps dictations directly into SOAP notes, H&P reports, and consultation summaries." },
  { icon: Monitor, title: "MTSO Multi-Tenant Dashboard", desc: "Centralized command center to manage multiple US provider feeds, track SLAs, and monitor real-time throughput." },
  { icon: Globe, title: "EMR-Ready Integration", desc: "Finalized reports formatted for instant injection into major US Electronic Health Record systems via HL7 or secure XML." },
];

const techSpecs = [
  { label: "Platform", value: "Cloud-Native, Secure, High-Availability" },
  { label: "Input", value: "Multi-device — Mobile, Digital Recorder, Web" },
  { label: "Output", value: "HL7, XML, PDF, Direct EMR Injection" },
  { label: "Support", value: "Direct access to our Coimbatore engineering team" },
];

export default function MedScribeAI() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center pt-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-brand-cyan/5 blur-3xl" />
          <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Live · MedScribeAI · Built for MTSOs</span>
          </motion.div>
          <motion.h1 {...fadeUp(0.18)} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6 text-heading max-w-4xl">
            The End of Manual Transcription <span className="bg-gradient-to-r from-brand-cyan to-primary bg-clip-text text-transparent">for MTSOs.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.26)} className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Stop managing headcounts and start managing outcomes. MedScribeAI is the high-performance dictation-to-report platform built exclusively for Indian MTSOs to serve the US healthcare market with <strong className="text-foreground">99%+ accuracy</strong> and <strong className="text-foreground">zero manual processing.</strong>
          </motion.p>
          <motion.div {...fadeUp(0.34)} className="flex flex-wrap gap-4">
            <a href="https://medscribeai.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan text-white font-bold text-base hover:opacity-90 transition-all">
              View Live Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://nuscript.in/contact" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-bold text-base hover:bg-muted transition-colors">
              Schedule a Technical Demo
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.42)} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {stats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-brand-cyan/60" />
                <div className="text-3xl font-extrabold text-brand-cyan mb-1">{s.value}</div>
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
              <div className="w-10 h-px bg-brand-cyan" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">Autonomous Workflow</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight max-w-2xl">
              Three pillars of zero-touch documentation.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.1)} className="bg-card border border-border rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-cyan/50 rounded-l-2xl" />
                <div className="pl-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-5">
                    <p.icon className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h3 className="text-xl font-extrabold text-heading mb-3">{p.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
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

      {/* Comparison Table */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-14 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-brand-cyan" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">The MedScribeAI Difference</span>
              <div className="w-10 h-px bg-brand-cyan" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight">The Old Way vs. The MedScribeAI Way.</h2>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/60 px-6 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span>Metric</span>
              <span>The Old Way</span>
              <span className="text-brand-cyan">The MedScribeAI Way</span>
            </div>
            {comparison.map((row, i) => (
              <div key={row.metric} className={`grid grid-cols-3 px-6 py-4 gap-4 border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-background"}`}>
                <span className="text-sm font-semibold text-foreground">{row.metric}</span>
                <span className="text-sm text-muted-foreground">{row.old}</span>
                <span className="text-sm font-semibold text-brand-cyan">{row.new}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-14 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-brand-cyan" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">Feature Summary</span>
              <div className="w-10 h-px bg-brand-cyan" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight">The Architecture of Autonomous Documentation.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i * 0.08)} className="bg-card border border-border rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-brand-cyan" />
                </div>
                <h3 className="text-lg font-extrabold text-heading mb-2">{f.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-brand-cyan" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">Technical Pillar</span>
            </div>
            <h2 className="text-4xl font-extrabold text-heading">Enterprise-grade infrastructure, built for scale.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {techSpecs.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.08)} className="bg-card border border-border rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{s.label}</p>
                <p className="text-base font-semibold text-foreground">{s.value}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp(0.2)} className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <ShieldCheck className="w-4 h-4 text-brand-cyan flex-shrink-0" />
            Built on 25 years of HIM/RCM expertise. Engineered in Coimbatore for 2026 standards.
          </motion.p>

          {/* CTA Banner */}
          <motion.div {...fadeUp(0.28)} className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-extrabold text-heading mb-3">Ready to Eliminate the Manual Bottleneck?</h3>
            <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              Don't let staffing shortages cap your growth. See how our AI-native chassis delivers 99%+ accuracy and instant TAT for US healthcare providers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://nuscript.in/contact" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan text-white font-bold hover:opacity-90 transition-all">
                Schedule a Technical Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://medscribeai.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-bold hover:bg-muted transition-colors">
                View Technical Specs & Live Demo
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
