import { motion } from "framer-motion";

const topStats = [
  { value: "2x", label: "Editor productivity multiplier", color: "text-primary" },
  { value: "15% → 30%", label: "EBITDA margin shift", color: "text-brand-cyan" },
  { value: "₹1+ Cr", label: "Annualized savings*", color: "text-brand-cyan" },
];

const rows = [
  { metric: "Active editors on payroll", before: "50–60", after: "25–30", highlight: false },
  { metric: "Effective editor capacity", before: "50–60", after: "50–60 (same output)", highlight: false },
  { metric: "Monthly editor labor cost", before: "₹25–30L", after: "₹12–15L", highlight: false },
  { metric: "MedScribeAI platform cost", before: "—", after: "~₹4.7L", highlight: false },
  { metric: "Total operating cost", before: "₹25–30L", after: "₹17–20L", highlight: true },
  { metric: "EBITDA margin", before: "~15%", after: "~28–32%", highlight: true },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideBuyersCase() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">MedScribeAI · The Buyer's Case</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        We sell EBITDA expansion, not software.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-7 max-w-2xl leading-relaxed">
        Labor is 60–70% of an MTSO's cost base. MedScribeAI doubles editor capacity — and a 15% margin becomes a 30% margin.
      </motion.p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {topStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.1, duration: 0.45 }}
            className="bg-card border border-border rounded-xl p-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/70" />
            <div className={`text-3xl sm:text-4xl font-extrabold mb-1 ${s.color}`}>{s.value}</div>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="rounded-xl overflow-hidden border border-border"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-foreground text-background">
              <th className="text-left p-3 font-bold">Metric (illustrative · 700K lines/mo)</th>
              <th className="text-left p-3 font-bold">Before MedScribeAI</th>
              <th className="text-left p-3 font-bold">With MedScribeAI</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.metric} className={`${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                <td className={`p-3 ${r.highlight ? "font-bold text-foreground" : "text-foreground/80"}`}>{r.metric}</td>
                <td className={`p-3 ${r.highlight ? "font-bold text-foreground" : "text-muted-foreground"}`}>{r.before}</td>
                <td className={`p-3 ${r.highlight ? "font-bold text-brand-cyan" : "text-muted-foreground"}`}>{r.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.p {...fadeUp(0.75)} className="text-xs text-muted-foreground  mt-2">
        * Illustrative at 700,000 lines/month. Actual results vary by volume and baseline efficiency.
      </motion.p>
    </div>
  );
}
