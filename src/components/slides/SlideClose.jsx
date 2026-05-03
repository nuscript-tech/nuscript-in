import { motion } from "framer-motion";

const weBring = [
  "Three live AI products in production",
  "$750K+ ARR services backbone funding development",
  "60+ active platform users · 30+ practices",
  "25-yr operator with 4 prior exits",
  "Public competitive intelligence in 4 markets",
];

const unlocks = [
  "₹3.5 Cr to fund the next 12 months in India",
  "Indian investor network for downstream rounds",
  "Enterprise hospital + MTSO customer introductions",
  "AI X Enterprise track credibility + brand",
  "Mentorship on scaling India-built global SaaS",
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideClose() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Why Sprint2Frontier · Why Now</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-1 max-w-3xl text-heading">
        We are not asking for validation.
      </motion.h1>
      <motion.h2 {...fadeUp(0.2)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold text-primary leading-[1.15] mb-9">
        We are asking for fuel.
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-4">What We Bring</span>
          <ul className="space-y-3">
            {weBring.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-lg text-foreground/80 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="bg-primary/5 border border-primary/25 rounded-xl p-5"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-4">What Sprint2Frontier Unlocks</span>
          <ul className="space-y-3">
            {unlocks.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-lg text-foreground/80 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div {...fadeUp(0.72)} className="p-4 rounded-xl bg-primary text-primary-foreground text-center">
        <p className="text-sm font-bold">
          Arvind Manohar · arvind.manohar@nuscript.in · app.medscribeai.in · pharmastock.co.in
        </p>
      </motion.div>
    </div>
  );
}
