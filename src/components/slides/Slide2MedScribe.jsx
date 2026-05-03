import { motion } from "framer-motion";
import { Users, Clock, Activity, CheckCircle, Mic, FileText, Edit, Upload } from "lucide-react";

const stats = [
  { value: "60+", label: "Active editors on platform" },
  { value: "30+", label: "Healthcare practices served" },
  { value: "2,000+", label: "Min/day clinical audio" },
  { value: "<12 hrs", label: "Turnaround time" },
];

const steps = [
  { num: 1, label: "Audio ingest" },
  { num: 2, label: "AI first-pass draft" },
  { num: 3, label: "Editor review" },
  { num: 4, label: "EHR-ready output" },
];

const production = [
  "Live with paying tenants — not a demo",
  "100% cloud · operational by next business morning",
  "HIPAA compliant · US East infrastructure",
  "Audit logs, RBAC, BAA-ready",
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function Slide2MedScribe() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">MedScribeAI · The Product</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        Already in production. Already paying.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-7 max-w-2xl leading-relaxed">
        MedScribeAI is the AI layer Indian medical transcription companies (MTSOs) and corporate hospitals plug into to double editor productivity.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.08, duration: 0.45 }}
            className="bg-card border border-border rounded-xl p-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/70" />
            <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1 tabular-nums">{s.value}</div>
            <div className="text-sm text-muted-foreground leading-snug">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55, duration: 0.45 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <h3 className="text-lg font-bold text-foreground mb-4">How the platform works</h3>
          <div className="flex items-center justify-between gap-2">
            {steps.map((s, i) => (
              <div key={s.num} className="flex flex-col items-center gap-2 flex-1">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-sm">{s.num}</div>
                <p className="text-sm text-muted-foreground text-center leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.45 }}
          className="bg-primary/5 border border-primary/20 rounded-xl p-5"
        >
          <h3 className="text-lg font-bold text-foreground mb-4">What 'production' really means</h3>
          <ul className="space-y-2.5">
            {production.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base text-foreground/80 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.82)}
        className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/25 text-center"
      >
        <p className="text-base font-bold text-primary ">
          Most healthcare AI startups pitch what they will build. We invoice for what we already ship.
        </p>
      </motion.div>
    </div>
  );
}
