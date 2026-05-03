import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { year: "Year 1", MedScribeAI: 84, PharmaStockAI: 21 },
  { year: "Year 2", MedScribeAI: 378, PharmaStockAI: 122 },
  { year: "Year 3", MedScribeAI: 1008, PharmaStockAI: 492 },
];

const milestones = [
  { label: "End Y1", arr: "₹1.05 Cr ARR", detail: "12 tenants · 200 pharm" },
  { label: "End Y2", arr: "₹5.0 Cr ARR", detail: "35 tenants · 1.2K pharm" },
  { label: "End Y3", arr: "₹15.0 Cr ARR", detail: "80 tenants · 4.5K pharm" },
];

const assumptions = [
  "MedScribeAI — Y1: 12 tenants · Y2: 35 · Y3: 80",
  "ARPU — ₹3.5L/mo blended Pro/Ent",
  "PharmaStockAI — Y1: 200 pharm · Y2: 1.2K · Y3: 4.5K",
  "ARPU — ₹1.0K/mo blended",
  "FX-clean · all INR · 18% GST excluded",
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideProjections() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Illustrative 3-Year Projections</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        From ₹1 Cr to ₹15 Cr ARR in 36 months.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-7 max-w-2xl leading-relaxed">
        Bottom-up projection — MedScribeAI tenant ramp + PharmaStockAI pharmacy ramp. Excludes Zera Scribe (separate US entity).
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="lg:col-span-2 bg-card border border-border rounded-xl p-5"
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,88%)" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 11 }} label={{ value: "ARR (₹ Lakhs)", angle: -90, position: "insideLeft", fontSize: 11 }} />
              <Tooltip formatter={(value) => [`₹${value}L`, undefined]} />
              <Legend />
              <Bar dataKey="MedScribeAI" fill="hsl(160,84%,39%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="PharmaStockAI" fill="hsl(199,100%,40%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <h3 className="text-base font-bold text-primary mb-3">Key assumptions</h3>
          <ul className="space-y-2">
            {assumptions.map((a) => (
              <li key={a} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-snug">{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {milestones.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            className="bg-primary/5 border border-primary/20 rounded-xl p-3 text-center"
          >
            <p className="text-xs text-muted-foreground font-medium mb-0.5">{m.label}</p>
            <p className="text-lg font-extrabold text-primary">{m.arr}</p>
            <p className="text-sm text-muted-foreground">{m.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
