import { motion } from "framer-motion";

const products = [
  {
    group: "India Engine",
    market: "Live · Production · Cash-positive",
    name: "MedScribeAI",
    tagline: "The production engine",
    bullets: [
      "Multi-tenant SaaS for MTSOs + corporate hospitals",
      "60+ active users · 2,000+ min/day clinical audio",
      "₹25K–₹1L base + ₹0.50–0.70/line per tenant",
    ],
    border: "border-primary/30",
    accent: "text-primary",
    bg: "bg-primary/5",
    bar: "bg-primary",
  },
  {
    group: "India Engine",
    market: "Live · Pharmacy supply chain",
    name: "PharmaStockAI",
    tagline: "The margin moat",
    bullets: [
      "AI inventory + expiry intelligence for pharmacies",
      "70% reduction in expiry losses · 5–7 hrs/wk saved",
      "₹499 / ₹1,499 / month per pharmacy",
    ],
    border: "border-primary/30",
    accent: "text-primary",
    bg: "bg-primary/5",
    bar: "bg-primary",
  },
  {
    group: "Global Wedge",
    market: "Clinical documentation · HCC capture · revenue integrity",
    name: "Zera",
    tagline: "The global wedge",
    bullets: [
      "Ambient AI scribe with auto ICD-10 / CPT coding",
      "US · UK · AU · CA — four English-speaking healthcare markets",
      "$199/provider/month · contracts in USD",
    ],
    border: "border-brand-zera/30",
    accent: "text-brand-zera",
    bg: "bg-brand-zera/5",
    bar: "bg-brand-zera",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlidePortfolio() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">The Portfolio</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        Two India-market engines. One global wedge.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        MedScribeAI and PharmaStockAI are the cash engines we operate inside India. Zera is the product the same engineering team takes global.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.12, duration: 0.5 }}
            className={`rounded-xl border p-5 relative overflow-hidden ${p.border} ${p.bg}`}
          >
            <div className={`absolute top-0 left-0 w-1 h-full rounded-l-xl ${p.bar}`} />
            <div className="pl-3">
              <span className={`text-xs font-bold uppercase tracking-widest ${p.accent} mb-1 block`}>{p.group}</span>
              <h3 className="text-2xl font-extrabold text-foreground mb-0.5">{p.name}</h3>
              <p className={`text-sm  font-semibold ${p.accent} mb-4`}>{p.market}</p>
              <ul className="space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${p.bar}`} />
                    <span className="text-base text-foreground/80 leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.72 }}
        className="text-sm text-muted-foreground  text-center"
      >
        <span className="font-bold text-foreground not-italic">Structure:</span> All three products sit inside NuScript Technologies Pvt Ltd. Zera Health Inc. (Delaware) is a wholly-owned subsidiary. Sprint2Frontier's investment buys exposure to the entire portfolio.
      </motion.p>
    </div>
  );
}
