import { motion } from "framer-motion";

const streams = [
  {
    tag: "India Engine",
    arr: "₹15 Cr ARR (~$1.8M)",
    detail: "MedScribeAI 80 tenants · PharmaStockAI 4.5K pharmacies",
    multiple: "8–12x revenue",
    valuation: "$15—22M",
    color: "border-primary/30 bg-primary/5",
    accent: "text-primary",
    val_color: "text-primary",
  },
  {
    tag: "Global Wedge",
    arr: "$3—5M ARR",
    detail: "Zera · 1,500–2,500 paying providers across US + UK + AU + CA",
    multiple: "10–15x revenue",
    valuation: "$30—75M",
    color: "border-brand-zera/30 bg-brand-zera/5",
    accent: "text-brand-zera",
    val_color: "text-brand-zera",
  },
  {
    tag: "Combined",
    arr: "Base case",
    detail: "Low end of both ranges, conservatively combined",
    multiple: "Floor",
    valuation: "$50M+",
    color: "border-brand-cyan/30 bg-brand-cyan/5",
    accent: "text-brand-cyan",
    val_color: "text-brand-cyan",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideValuationThesis() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">The Valuation Thesis</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        A $50M+ healthcare AI venture in 3—5 years.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        The math is defensible from two independent revenue streams — with optionality on top.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
        {streams.map((s, i) => (
          <motion.div
            key={s.tag}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.14, duration: 0.5 }}
            className={`rounded-xl border p-5 relative overflow-hidden ${s.color}`}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-current opacity-20" />
            <span className={`text-xs font-bold uppercase tracking-widest block mb-2 ${s.accent}`}>{s.tag}</span>
            <p className="text-lg font-extrabold text-foreground mb-1">{s.arr}</p>
            <p className="text-sm text-muted-foreground mb-4 leading-snug">{s.detail}</p>
            <p className={`text-xs  mb-1 ${s.accent}`}>{s.multiple}</p>
            <p className={`text-4xl font-extrabold ${s.val_color}`}>{s.valuation}</p>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.72)} className="p-5 rounded-xl bg-card border border-border">
        <p className="text-base text-muted-foreground">
          <span className="font-bold text-primary">Optionality on top:</span>{" "}
          $50M is the defensible base case. Zera entering its second and third global markets, or M&A activity (we already have inbound interest from a $2M ARR US healthcare AI platform with 2,600+ providers), can push us materially higher.
        </p>
      </motion.div>
    </div>
  );
}
