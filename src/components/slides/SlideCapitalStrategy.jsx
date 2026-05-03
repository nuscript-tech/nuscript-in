import { motion } from "framer-motion";

const rounds = [
  {
    tag: "Round 1 · 2026",
    amount: "₹3.5 Cr",
    entity: "NuScript Technologies (India)",
    investors: "Sprint2Frontier · Indian ecosystem",
    goal: "Build the engine. Scale India. Get to ₹1 Cr+ ARR.",
    bullets: ["CTO + engineering hires", "MedScribeAI India scale", "PharmaStockAI pilots", "Zera US deployment"],
    color: "border-primary/30 bg-primary/5",
    amountColor: "text-primary",
    bar: "bg-primary",
  },
  {
    tag: "Round 2 · 2026–27",
    amount: "$8—12M Series A",
    entity: "Zera Health Inc. (US)",
    investors: "US healthcare VCs",
    goal: "Acquire $2M ARR US healthcare AI platform with 2,600+ providers.",
    bullets: ["M&A — primary target", "US sales hire", "UK NHS entry", "SOC 2 + HIPAA hardening"],
    color: "border-brand-zera/30 bg-brand-zera/5",
    amountColor: "text-brand-zera",
    bar: "bg-brand-zera",
  },
  {
    tag: "Round 3 · 2027–28",
    amount: "$20—30M Series B",
    entity: "Zera Health Inc. (US)",
    investors: "Growth-stage healthcare investors",
    goal: "Scale to 10K+ providers. Launch Zera RCM. Cross-sell into acquired base.",
    bullets: ["Sales team buildout", "Zera RCM GA", "AU + CA expansion", "Strategic acquisitions"],
    color: "border-brand-cyan/30 bg-brand-cyan/5",
    amountColor: "text-brand-cyan",
    bar: "bg-brand-cyan",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideCapitalStrategy() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Capital Strategy</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        Three rounds. Three different jobs.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        Each round has a clean, defensible thesis — different money buying different things, all flowing through the same Indian holdco.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
        {rounds.map((r, i) => (
          <motion.div
            key={r.tag}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.14, duration: 0.5 }}
            className={`rounded-xl border p-5 relative overflow-hidden ${r.color}`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${r.bar}`} />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2 mt-1">{r.tag}</span>
            <div className={`text-3xl font-extrabold mb-2 ${r.amountColor}`}>{r.amount}</div>
            <p className="text-base font-bold text-foreground mb-0.5">{r.entity}</p>
            <p className="text-sm text-muted-foreground  mb-3">{r.investors}</p>
            <p className="text-base font-semibold text-foreground/90 leading-snug mb-4">{r.goal}</p>
            <ul className="space-y-1.5">
              {r.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${r.bar}`} />
                  <span className="text-base text-foreground/75 leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p {...fadeUp(0.75)} className="text-sm text-muted-foreground/70  text-center">
        Round 2 will likely require a 'flip' — at which point NuScript Technologies' 100% stake in Zera converts to a marked-up minority position. Sprint2Frontier's investment gets repriced upward.
      </motion.p>
    </div>
  );
}
