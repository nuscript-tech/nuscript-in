import { motion } from "framer-motion";
import { Cpu, Globe, Building2, Shield } from "lucide-react";

const buckets = [
  {
    icon: Cpu,
    label: "Engineering & Compute",
    amount: "₹1.2 Cr",
    pct: 34,
    detail: "CTO hire (₹70–80L for 12 mo) · Zera Scribe SaaS build (₹25–30L) · Zera RCM Phase 1 (₹20–25L) · DevOps + HIPAA hardening (₹15L)",
    color: "text-primary",
    bar: "bg-primary",
  },
  {
    icon: Globe,
    label: "GTM & US Deployment",
    amount: "₹1.0 Cr",
    pct: 29,
    detail: "Head of US Sales (₹45–50L) · US travel + ophthalmology conferences (₹20L) · Marketing/SEO (₹10L) · Channel partners (₹10L) · Implementation support (₹15L)",
    color: "text-amber-500",
    bar: "bg-amber-400",
  },
  {
    icon: Building2,
    label: "India Market Expansion",
    amount: "₹75 L",
    pct: 21,
    detail: "Indian corporate hospital sales (₹30L) · MTSO expansion — onboarding 5+ MTSOs (₹20L) · PharmaStockAI pilots (₹15L) · India BD hire (₹10L)",
    color: "text-brand-cyan",
    bar: "bg-brand-cyan",
  },
  {
    icon: Shield,
    label: "Compliance & Runway",
    amount: "₹55 L",
    pct: 16,
    detail: "HIPAA BAA audit (₹8L) · SOC 2 Type II (₹15L) · Zera Health Inc. setup + IP transfer (₹10L) · Insurance + BAAs (₹5L) · 12-mo operating buffer (₹17L)",
    color: "text-muted-foreground",
    bar: "bg-muted-foreground/50",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideUseOfFunds() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Round 1 · Use of Funds</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        Every rupee defended.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        ₹3.5 Cr, broken into four buckets — engineering, GTM, India market, and compliance/runway.
      </motion.p>

      <div className="space-y-4">
        {buckets.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.28 + i * 0.1, duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <b.icon className={`w-5 h-5 ${b.color} flex-shrink-0`} />
                <span className="text-lg font-bold text-foreground">{b.label}</span>
              </div>
              <span className={`text-xl font-extrabold ${b.color}`}>{b.amount}</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${b.pct}%` }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: "easeOut" }}
                className={`h-full rounded-full ${b.bar}`}
              />
            </div>
            <p className="text-base text-muted-foreground leading-snug">{b.detail}</p>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.82)} className="mt-4 p-4 rounded-xl bg-primary/5 border-l-4 border-primary">
        <p className="text-sm font-medium text-foreground/85 ">
          One third builds the product deeper. One third gets it in front of customers. One fifth expands India. The rest makes it enterprise-grade.
        </p>
      </motion.div>
    </div>
  );
}
