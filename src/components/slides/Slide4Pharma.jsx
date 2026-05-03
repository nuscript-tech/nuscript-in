import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Package, Clock, Zap } from "lucide-react";

const stats = [
  { value: "70%", label: "Reduction in expiry losses" },
  { value: "5–7 hrs", label: "Saved per week per pharmacy" },
  { value: "Zero", label: "Friction · plugs into existing billing" },
];

const bleed = [
  "Manual expiry tracking — losses only seen post-fact",
  "Stockouts on chronic-care SKUs cost repeat-visit revenue",
  "Owner spends 5–7 hours/week on inventory paperwork",
  "Billing software shows sales — never margin or expiry risk",
];

const solutions = [
  "Daily expiry alerts — proactive intelligence before losses occur",
  "Smart To-Order list pushed via WhatsApp to distributors",
  "Auto-detect low-stock + reorder suggestions ('sourcing agent')",
  "'Today's 3 Actions' dashboard — one-screen owner view",
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function Slide4Pharma() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">PharmaStockAI · The Product</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        An AI brain on top of every Indian pharmacy.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg sm:text-xl mb-7 max-w-2xl leading-relaxed">
        Indian pharmacies bleed margin to expiry and stockouts. PharmaStockAI is the layer that fixes both — without changing the billing software they already use.
      </motion.p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.08, duration: 0.45 }}
            className="bg-card border border-border rounded-xl p-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-brand-cyan" />
            <div className="text-3xl sm:text-4xl font-extrabold text-brand-cyan mb-1">{s.value}</div>
            <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.45 }}
          className="rounded-xl bg-destructive/5 border border-destructive/20 p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-bold text-destructive">The bleed</span>
          </div>
          <ul className="space-y-2.5">
            {bleed.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 flex-shrink-0" />
                <span className="text-base text-foreground/80 leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55, duration: 0.45 }}
          className="rounded-xl bg-primary/5 border border-primary/25 p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-4 h-4 text-brand-cyan" />
            <span className="text-sm font-bold text-brand-cyan">What PharmaStockAI does</span>
          </div>
          <ul className="space-y-2.5">
            {solutions.map((s) => (
              <li key={s} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span className="text-base text-foreground/80 leading-snug">{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
