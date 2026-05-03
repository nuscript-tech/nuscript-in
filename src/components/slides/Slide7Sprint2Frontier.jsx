import { motion } from "framer-motion";
import { Cpu, Globe, Building2, Shield, Target, Zap } from "lucide-react";

const allocations = [
  {
    icon: Cpu,
    label: "Engineering & Compute",
    amount: "₹1.2 Cr",
    pct: 34,
    detail: "CTO hire + Zera Scribe SaaS build + Zera RCM Phase 1",
  },
  {
    icon: Globe,
    label: "GTM & US Deployment",
    amount: "₹1.0 Cr",
    pct: 29,
    detail: "Head of sales + first 20 ophthalmology practices onboarded",
  },
  {
    icon: Building2,
    label: "India Market Expansion",
    amount: "₹75L",
    pct: 21,
    detail: "MedScribeAI — corporate hospitals + MTSO scale",
  },
  {
    icon: Shield,
    label: "Compliance & Runway",
    amount: "₹55L",
    pct: 16,
    detail: "HIPAA BAA, SOC 2, entity setup + 12-month operating buffer",
  },
];

const milestones = [
  { quarter: "Q1", label: "Zera Scribe Beta", sub: "First paying providers live in the US" },
  { quarter: "Q2", label: "MedScribeAI India Scale", sub: "5+ Indian MTSO and hospital clients signed" },
  { quarter: "Q3", label: "Zera RCM Phase 1", sub: "Denial prediction engine in beta" },
  { quarter: "Q4", label: "Combined ARR Target", sub: "₹1 Cr+ ARR across both platforms" },
];

const unlocks = [
  "₹2 Cr funding",
  "Indian investor network",
  "Global VC access",
  "Enterprise customer introductions",
  "AI X Enterprise credibility",
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function Slide7Sprint2Frontier() {
  return (
    <div className="font-jakarta">
      {/* Eyebrow */}
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          The Sprint2Frontier Partnership
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1 {...fadeUp(0.12)} className="text-3xl sm:text-4xl lg:text-[2.4rem] font-extrabold leading-[1.15] mb-2 max-w-4xl text-heading">
        Why <span className="text-brand-cyan">Sprint2Frontier</span> +{" "}
        <span className="text-primary">NuScript Technologies</span>
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-base mb-7 max-w-2xl leading-relaxed">
        AI X Enterprise track — accelerating India-built healthcare AI to global scale.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {/* Funding allocation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">
            Funding Allocation · ₹3.5 Crore
          </p>
          <div className="space-y-3.5">
            {allocations.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.38 + i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <a.icon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{a.label}</span>
                  </div>
                  <span className="text-sm font-extrabold text-brand-cyan">{a.amount}</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${a.pct}%` }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{a.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 12-month roadmap */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.32, duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">
            12-Month Roadmap
          </p>
          <div className="relative">
            <div className="absolute left-[22px] top-3 bottom-3 w-px bg-border" />
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.quarter}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.42 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="relative z-10 w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-primary">{m.quarter}</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-base font-bold text-foreground leading-tight">{m.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{m.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* What Sprint2Frontier Unlocks */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.82, duration: 0.5 }}
        className="flex items-start gap-4 p-5 rounded-xl bg-primary/10 border border-primary/25"
      >
        <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
            What Sprint2Frontier Unlocks
          </span>
          <div className="flex flex-wrap gap-2">
            {unlocks.map((u) => (
              <span key={u} className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20">
                {u}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* What We Bring */}
      <motion.div
        {...fadeUp(0.92)}
        className="mt-3 flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
      >
        <Target className="w-4 h-4 text-primary flex-shrink-0" />
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">What We Bring:</span>{" "}
          Live products · 60+ users · $750K+ revenue from NuScript · 25 years healthcare ops · 4 exits · India + US operations
        </p>
      </motion.div>
    </div>
  );
}
