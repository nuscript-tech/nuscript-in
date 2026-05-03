import { motion } from "framer-motion";

const quarters = [
  {
    q: "Q1",
    color: "bg-primary",
    border: "border-primary/30",
    items: [
      "MedScribeAI · 5+ new MTSO tenants",
      "PharmaStockAI · 25+ paying pharmacies",
      "Zera · First 5 US ophthalmology providers",
      "CTO hire onboarded",
    ],
  },
  {
    q: "Q2",
    color: "bg-brand-zera",
    border: "border-brand-zera/30",
    items: [
      "MedScribeAI · 5+ Indian corporate hospital deals",
      "PharmaStockAI · 100+ paying pharmacies",
      "Zera · 10–15 US providers paying",
      "Zera Health Inc. · Series A outreach starts",
    ],
  },
  {
    q: "Q3",
    color: "bg-brand-cyan",
    border: "border-brand-cyan/30",
    items: [
      "MedScribeAI · 15+ MTSOs at scale",
      "PharmaStockAI · First chain Control Tower",
      "Zera · UK NHS pilot conversations",
      "SOC 2 Type II audit complete",
    ],
  },
  {
    q: "Q4",
    color: "bg-primary",
    border: "border-primary/30",
    items: [
      "Combined ARR · ₹1 Cr+ across India products",
      "Zera · 20–30 paying US providers",
      "Zera RCM · 3–5 design partner contracts",
      "Series A close · valuation step-up",
    ],
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideRoadmap() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">12-Month Roadmap</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        From beta to ₹1 Cr+ ARR.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        Quarter-by-quarter milestones across both India products plus the Zera global wedge.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        {quarters.map((q, i) => (
          <motion.div
            key={q.q}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.12, duration: 0.5 }}
            className={`bg-card border rounded-xl p-4 ${q.border}`}
          >
            <div className={`w-12 h-12 rounded-full ${q.color} flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4`}>
              {q.q}
            </div>
            <ul className="space-y-2.5">
              {q.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${q.color}`} />
                  <span className="text-base text-foreground/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.78)} className="p-4 rounded-xl bg-primary text-primary-foreground text-center">
        <p className="text-sm font-bold">
          12-month outcome · ₹1 Cr+ ARR · 20+ paying US providers · UK NHS pilot active · Series A closed
        </p>
      </motion.div>
    </div>
  );
}
