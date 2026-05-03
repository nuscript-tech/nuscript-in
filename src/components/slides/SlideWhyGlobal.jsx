import { motion } from "framer-motion";

const conditions = [
  {
    num: 1,
    title: "Engineering already at US standard",
    detail: "MedScribeAI is HIPAA-compliant, runs on US East infrastructure, and serves US health systems today. The hardest part of going global — engineering, compliance, operational maturity — is already done.",
  },
  {
    num: 2,
    title: "Domain depth pure-tech founders cannot copy",
    detail: "25 years inside US healthcare documentation operations means we know exactly which CPT codes get denied, what HCC capture means to a payer, and where the ambient AI breaks. Most ML-first founders don't.",
  },
  {
    num: 3,
    title: "Cost structure that compounds",
    detail: "Engineering at India cost. Customer-facing function at US cost only. At $5M ARR this is the difference between 60% and 85% gross margin — worth $30–50M of enterprise value alone.",
  },
  {
    num: 4,
    title: "Multi-geography demand for one product",
    detail: "US + UK NHS + Australia + Canada — four English-speaking healthcare markets, all actively buying ambient AI right now, with shared clinical workflow (encounter → SOAP → ICD-10 → claim).",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideWhyGlobal() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Why We Can Go Global</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        Four conditions make $50M defensible.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        Most Indian founders claim global ambition. We have the four structural conditions that turn that claim into a plan.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        {conditions.map((c, i) => (
          <motion.div
            key={c.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.1, duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-5 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-base flex-shrink-0">
              {c.num}
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{c.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.72)} className="p-4 rounded-xl bg-primary/5 border-l-4 border-primary">
        <p className="text-base text-muted-foreground ">
          This is what Sprint2Frontier's investor network is buying — not aspiration, but four structural facts that no other applicant can match.
        </p>
      </motion.div>
    </div>
  );
}
