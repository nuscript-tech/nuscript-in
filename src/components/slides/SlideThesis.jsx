import { motion } from "framer-motion";

const pillars = [
  {
    tag: "India Engine",
    title: "MedScribeAI + PharmaStockAI",
    detail: "Cash-generating products in two of India's largest healthcare verticals — MTSO documentation and pharmacy supply chain.",
    color: "border-primary/30 bg-primary/5",
    accent: "text-primary",
    bar: "bg-primary",
  },
  {
    tag: "Global Wedge",
    title: "Zera (US · UK · AU · CA)",
    detail: "Same engineering team. One-third the cost of US competitors. Four English-speaking ambient AI markets, all actively buying.",
    color: "border-brand-zera/30 bg-brand-zera/5",
    accent: "text-brand-zera",
    bar: "bg-brand-zera",
  },
  {
    tag: "The Structure",
    title: "One holdco. Direct exposure.",
    detail: "Sprint2Frontier invests in NuScript Technologies. NuScript Technologies owns 100% of Zera Health Inc. You own the entire portfolio.",
    color: "border-brand-cyan/30 bg-brand-cyan/5",
    accent: "text-brand-cyan",
    bar: "bg-brand-cyan",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideThesis() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">The Thesis</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-1 max-w-3xl text-heading">
        Indian engineering. India-first products.
      </motion.h1>
      <motion.h2 {...fadeUp(0.2)} className="text-3xl sm:text-4xl font-extrabold text-primary leading-[1.2] mb-5 max-w-3xl">
        Built to ship globally.
      </motion.h2>
      <motion.p {...fadeUp(0.26)} className="text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
        We are uniquely positioned to become a <span className="font-bold text-foreground">$50M+ healthcare AI venture in 3–5 years</span> because we have done the hardest part first: shipping production-grade healthcare AI from India, against US compliance standards, with a 25-year domain expert at the helm.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {pillars.map((p, i) => (
          <motion.div
            key={p.tag}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.12, duration: 0.5, ease: "easeOut" }}
            className={`rounded-xl border p-6 relative overflow-hidden ${p.color}`}
          >
            <div className={`absolute top-0 left-0 w-1 h-full rounded-l-xl ${p.bar}`} />
            <div className="pl-3">
              <span className={`text-xs font-bold uppercase tracking-widest block mb-2 ${p.accent}`}>{p.tag}</span>
              <h3 className={`text-xl font-bold mb-3 ${p.accent}`}>{p.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{p.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
