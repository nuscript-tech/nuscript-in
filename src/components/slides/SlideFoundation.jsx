import { motion } from "framer-motion";
import { Users, Building2, DollarSign, TrendingUp } from "lucide-react";

const stats = [
  { value: "$750K+", label: "ARR · NuScript Systems", icon: TrendingUp, green: false },
  { value: "30+", label: "US healthcare practice clients", icon: Building2, green: false },
  { value: "90+", label: "Operations team in India", icon: Users, green: false },
  { value: "Yes", label: "Profitable · self-funded since inception", icon: DollarSign, green: true },
];

const advantages = [
  {
    title: "Captive customer",
    detail: "NuScript Systems became MedScribeAI's first paying tenant on Day 1 — and validates every product change.",
  },
  {
    title: "Deep domain data",
    detail: "20+ years of clinical documentation, RCM, and US healthcare operational know-how feed every model and template.",
  },
  {
    title: "Cash on the books",
    detail: "Services revenue funds engineering. We build because we're profitable, not because we just raised.",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideFoundation() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">The Foundation</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        We aren't pre-revenue. We're pre-scale.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        NuScript Systems Inc. is a profitable services company that gives NuScript Technologies a captive customer, deep domain data, and a real cash backbone.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-7">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.08, duration: 0.45 }}
            className="bg-card border border-border rounded-xl p-4 relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-0.5 ${s.green ? "bg-brand-cyan" : "bg-primary/60"}`} />
            <div className={`text-2xl sm:text-3xl font-extrabold mb-1 ${s.green ? "text-brand-cyan" : "text-primary"}`}>{s.value}</div>
            <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.h3 {...fadeUp(0.55)} className="text-xl font-bold text-foreground mb-4">The unfair advantage</motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {advantages.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.45 }}
            className="bg-card border border-border rounded-xl p-5 relative"
          >
            <div className="absolute top-0 left-0 w-1 h-full rounded-l-xl bg-primary/50" />
            <div className="pl-3">
              <h4 className="text-lg font-bold text-primary mb-2">{a.title}</h4>
              <p className="text-base text-muted-foreground leading-relaxed">{a.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
