import { motion } from "framer-motion";

const markets = [
  {
    code: "US",
    name: "United States",
    highlight: "$600M → $27.8B",
    sub: "48% CAGR · 2034",
    detail: "62.6% of US Epic-running hospitals using ambient AI. 70% of UCSF physicians active users. Largest single market.",
    color: "text-primary",
    border: "border-primary/30",
    bar: "bg-primary",
  },
  {
    code: "GB",
    name: "United Kingdom · NHS",
    highlight: "19 vendors approved",
    sub: "DTAC + DCB framework",
    detail: "NHS registry of approved ambient AI vendors. ~250 Trusts + 6,500 GP practices in scope. Procurement framework defined.",
    color: "text-brand-zera",
    border: "border-brand-zera/30",
    bar: "bg-brand-zera",
  },
  {
    code: "AU",
    name: "Australia",
    highlight: "MBS-reimbursed",
    sub: "Telehealth ecosystem",
    detail: "Active ambient AI adoption across private practice and Medicare-reimbursed telehealth. Heidi Health, Lyrebird are local incumbents.",
    color: "text-brand-cyan",
    border: "border-brand-cyan/30",
    bar: "bg-brand-cyan",
  },
  {
    code: "CA",
    name: "Canada",
    highlight: "Provincial pilots",
    sub: "Ontario + BC",
    detail: "Provincial health authorities piloting ambient AI in primary care networks (2025). Following the US trajectory at 12–18 month lag.",
    color: "text-brand-cyan",
    border: "border-brand-cyan/30",
    bar: "bg-brand-cyan",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideZeraMarket() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-brand-zera" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand-zera">Zera · Four-Market Wedge</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-4xl text-heading">
        Four English-speaking markets. One product.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-7 max-w-2xl leading-relaxed">
        All four are actively procuring ambient AI right now. Same clinical workflow, minor coding variations — Zera ships into all four from one engineering team.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {markets.map((m, i) => (
          <motion.div
            key={m.code}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.1, duration: 0.45 }}
            className={`bg-card border rounded-xl p-5 relative overflow-hidden ${m.border}`}
          >
            <div className={`absolute top-0 left-0 w-1 h-full rounded-l-xl ${m.bar}`} />
            <div className="pl-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg font-black text-muted-foreground/50">{m.code}</span>
                <span className="text-base font-bold text-foreground">{m.name}</span>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className={`text-xl font-extrabold ${m.color}`}>{m.highlight}</span>
                <span className="text-sm text-muted-foreground">{m.sub}</span>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">{m.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p {...fadeUp(0.78)} className="text-sm text-muted-foreground/60  mt-3">
        Sources: Grand View Research, Marketintelo, NHS England digital, AHA, AMA. UK NHS vendor registry as of 2025.
      </motion.p>
    </div>
  );
}
