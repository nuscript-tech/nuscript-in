import { motion } from "framer-motion";
import { Mic, FileText, DollarSign, Zap, ArrowRight, CheckCircle, Brain } from "lucide-react";

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

function FlowNode({ icon: Icon, label, sublabel, delay, green }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className={`flex flex-col items-center text-center gap-2 ${green ? "text-primary" : ""}`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
          green
            ? "bg-primary/20 border-primary/40"
            : "bg-muted border-border"
        }`}
      >
        <Icon className={`w-5 h-5 ${green ? "text-primary" : "text-muted-foreground"}`} />
      </div>
      <div>
        <p className={`text-xs font-bold leading-tight ${green ? "text-primary" : "text-foreground"}`}>
          {label}
        </p>
        {sublabel && (
          <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{sublabel}</p>
        )}
      </div>
    </motion.div>
  );
}

function FlowArrow({ delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay, duration: 0.35 }}
      className="flex items-center flex-shrink-0"
    >
      <div className="w-6 h-px bg-primary/40" />
      <ArrowRight className="w-4 h-4 text-primary/60 -ml-1" />
    </motion.div>
  );
}

export default function Slide3Zera() {
  return (
    <div className="font-jakarta">
      {/* Eyebrow */}
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Slide 03 · The ZERA Leap
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1 {...fadeUp(0.12)} className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold leading-[1.15] mb-2 max-w-4xl">
        Scaling 25 Years of Domain Mastery into{" "}
        <span className="text-primary">Ambient Autonomy</span>
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-base mb-7 max-w-2xl leading-relaxed">
        Two products. One trajectory — from human-assisted efficiency to full autonomous healthcare finance.
      </motion.p>

      {/* Comparison columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Left: MedScribeAI */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="rounded-xl border border-border bg-card p-5"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-muted-foreground" />
            <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
              Current State
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-4">
            MedScribeAI —{" "}
            <span className="text-muted-foreground font-semibold">The Production Workhorse</span>
          </h3>
          <ul className="space-y-3">
            {currentBullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-2.5"
              >
                <CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: ZERA */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.32, duration: 0.5 }}
          className="rounded-xl border border-primary/30 bg-primary/5 p-5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/5 blur-2xl" />
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-bold text-primary">
              The Frontier
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-4">
            ZERA Scribe —{" "}
            <span className="text-primary font-semibold">The Autonomous Future</span>
          </h3>
          <ul className="space-y-3">
            {futureBullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.44 + i * 0.1 }}
                className="flex items-start gap-2.5"
              >
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80 leading-relaxed">{b}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Flowchart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="bg-card border border-border rounded-xl p-5 mb-5"
      >
        <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">
          ZERA Pipeline · Clinical Encounter → Autonomous Output
        </p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <FlowNode icon={Mic} label="Clinical Encounter" sublabel="Live patient visit" delay={0.75} />
          <FlowArrow delay={0.82} />
          <FlowNode icon={Brain} label="ZERA Ambient AI" sublabel="Real-time processing" delay={0.85} green />
          <FlowArrow delay={0.92} />
          {/* Two outputs */}
          <div className="flex flex-col gap-3">
            <FlowNode icon={FileText} label="Chart-Ready Notes" sublabel="Auto-generated" delay={0.95} green />
            <FlowNode icon={DollarSign} label="ICD-10 / CPT Codes" sublabel="Automatic billing" delay={1.0} green />
          </div>
        </div>
      </motion.div>

      {/* Bottom banner */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.45 }}
        className="flex items-start gap-3 p-5 rounded-xl bg-primary/10 border border-primary/25"
      >
        <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
            The Fellowship Unlock
          </span>
          <p className="text-sm font-medium text-foreground/85 leading-snug">
            Transforming ZERA from a Production-Ready Demo into the{" "}
            <span className="text-primary font-bold">
              Global Infrastructure Standard for Autonomous Healthcare Finance
            </span>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
