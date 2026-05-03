import { motion } from "framer-motion";

const markets = [
  {
    tag: "TAM · India Pharmacy",
    value: "$27B → $48B",
    title: "India pharmacy retail market",
    detail: "$27.4B in 2024, projected $48B by 2030 (10% CAGR). 1M+ registered pharmacies — top-3 globally by store count.",
    color: "text-brand-cyan",
    border: "border-brand-cyan/30",
    bar: "bg-brand-cyan",
  },
  {
    tag: "SAM · Addressable Stores",
    value: "~250K stores",
    title: "Pharmacies that can buy SaaS",
    detail: "~85K organized chains + ~10K Jan Aushadhi Kendras + ~150K mid-tier independents already running billing software — the realistic SaaS-addressable footprint.",
    color: "text-brand-cyan",
    border: "border-brand-cyan/30",
    bar: "bg-brand-cyan",
  },
  {
    tag: "SOM · 5-Year",
    value: "₹150–300 Cr",
    title: "PharmaStockAI ARR potential",
    detail: "10% of SAM at blended ₹600–1,000/mo per pharmacy. Conservative on independent uptake, aggressive on chain Control Tower deals.",
    color: "text-primary",
    border: "border-primary/30",
    bar: "bg-primary",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlidePharmaMarket() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">PharmaStockAI · Market</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        1 million pharmacies. Almost zero AI penetration.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        India has one of the largest retail pharmacy footprints on Earth — and the lowest software penetration. PharmaStockAI is built for that gap.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
        {markets.map((m, i) => (
          <motion.div
            key={m.tag}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.12, duration: 0.5 }}
            className={`bg-card border rounded-xl p-5 relative overflow-hidden ${m.border}`}
          >
            <div className={`absolute top-0 left-0 w-1 h-full rounded-l-xl ${m.bar}`} />
            <div className="pl-3">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">{m.tag}</span>
              <div className={`text-3xl sm:text-4xl font-extrabold mb-2 ${m.color}`}>{m.value}</div>
              <h3 className="text-lg font-bold text-foreground mb-3">{m.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{m.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.72)} className="p-4 rounded-xl bg-card border border-border">
        <p className="text-base text-muted-foreground">
          <span className="font-bold text-foreground">Reference points</span>{" "}· Apollo Pharmacy ~5,000 stores · MedPlus ~4,600 stores · 88.7% of India pharmacies are still unorganized independents — most have a billing app, none have an AI agent.
        </p>
        <p className="text-xs text-muted-foreground/60  mt-1">Sources: Grand View Research, Statista, Credence Research, MarketResearch Future.</p>
      </motion.div>
    </div>
  );
}
