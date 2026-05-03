import { motion } from "framer-motion";
import { Cpu, Globe, User, Target, ArrowRight } from "lucide-react";

const allocations = [
  {
    icon: Cpu,
    label: "Engineering & Compute",
    amount: "$40K",
    pct: 40,
    detail: "Scaling ZERA's ambient AI compute and fine-tuning regional clinical models.",
  },
  {
    icon: Globe,
    label: "GTM & Deployment",
    amount: "$35K",
    pct: 35,
    detail: "On-the-ground implementation and securing enterprise RCM partnerships.",
  },
  {
    icon: User,
    label: "Founder Focus",
    amount: "$25K",
    pct: 25,
    detail: "Ensuring 100% undivided focus on global infrastructure scaling.",
  },
];

const milestones = [
  { month: "Q1", label: "ZERA Beta Deployment", sub: "First autonomous pipeline live" },
  { month: "Q2", label: "RCM Partnerships", sub: "3–5 enterprise agreements signed" },
  { month: "Q3", label: "Regional Model Tuning", sub: "Multi-specialty fine-tuning complete" },
  { month: "Q4", label: "Infrastructure Standard", sub: "NuScript as the global RCM engine" },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function Slide5Fellowship() {
  return (
    <div className="font-jakarta">
      {/* Eyebrow */}
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Slide 05 · The $100K Fellowship Accelerator
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1 {...fadeUp(0.12)} className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] mb-2 max-w-4xl text-heading">
        Deployment Strategy: From{" "}
        <span className="text-muted-foreground font-semibold">Production-Ready</span> to{" "}
        <span className="text-brand-cyan">Market-Standard</span>
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-base mb-8 max-w-2xl leading-relaxed">
        The OSV Fellowship: Accelerating the path to Autonomous Revenue Cycle Management.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Funding allocation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">
            Funding Allocation · $100,000
          </p>
          <div className="space-y-4">
            {allocations.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.38 + i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <a.icon className="w-4 h-4 text-primary" />
                    <span className="text-base font-semibold text-foreground">{a.label}</span>
                  </div>
                  <span className="text-base font-extrabold text-brand-cyan">{a.amount}</span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${a.pct}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" }}
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
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.month}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.42 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="relative z-10 w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-primary">{m.month}</span>
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

      {/* 12-month goal banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.5 }}
        className="flex items-start gap-4 p-5 rounded-xl bg-primary/10 border border-primary/25"
      >
        <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
            The 12-Month Goal
          </span>
          <p className="text-base sm:text-lg font-medium text-foreground/85 leading-snug">
            Transforming NuScript into the{" "}
            <span className="text-primary font-bold">
              foundational AI engine for a fully autonomous Revenue Cycle Management (RCM) platform
            </span>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
