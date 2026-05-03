import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const currentBullets = [
  "Already live with 60+ users across 30+ healthcare practices",
  "Processing 2,000+ minutes of clinical audio daily for US-based hospitals",
  "Doubling human productivity: 500 → 1,000+ lines per shift",
];

const futureBullets = [
  "Ambient AI generates chart-ready notes from live patient encounters — no dictation needed",
  "Auto-Coding integration (ICD-10 / CPT) bridges clinical documentation directly to Revenue Cycle (RCM)",
  "Full autonomous pipeline: Encounter → Notes → Billing in real time",
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function Slide3aComparison() {
  return (
    <div className="font-jakarta">
      {/* Eyebrow */}
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          The ZERA Leap — Part I
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1 {...fadeUp(0.12)} className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] mb-2 max-w-4xl text-heading">
        From <span className="text-muted-foreground font-semibold">Assisted Efficiency</span> to{" "}
        <span className="text-brand-cyan">Ambient Autonomy</span>
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-base mb-9 max-w-2xl leading-relaxed">
        Two products. One trajectory — built on 25 years of domain mastery in clinical documentation.
      </motion.p>

      {/* Comparison columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7">
        {/* Left: MedScribeAI */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-muted-foreground" />
            <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
              Current State
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-5">
            MedScribeAI —{" "}
            <span className="text-muted-foreground font-semibold">The Production Workhorse</span>
          </h3>
          <ul className="space-y-4">
            {currentBullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-base text-muted-foreground leading-relaxed">{b}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: ZERA */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.32, duration: 0.5 }}
          className="rounded-xl border border-primary/30 bg-primary/5 p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/6 blur-3xl" />
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-bold text-primary">
              The Frontier
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-5">
            ZERA Scribe —{" "}
            <span className="text-primary font-semibold">The Autonomous Future</span>
          </h3>
          <ul className="space-y-4">
            {futureBullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.44 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-base text-foreground/80 leading-relaxed">{b}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Transition teaser */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.78, duration: 0.45 }}
        className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
        <p className="text-base text-muted-foreground">
          <span className="font-semibold text-foreground">Next:</span>{" "}
          See the technical pipeline — how ZERA converts a single patient encounter into chart-ready notes and autonomous billing codes.
        </p>
      </motion.div>
    </div>
  );
}
