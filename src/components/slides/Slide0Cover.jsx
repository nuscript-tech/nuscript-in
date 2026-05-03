import { motion } from "framer-motion";

const products = [
  { name: "MedScribeAI", sub: "India · Production · Cash-positive", color: "border-primary/40 bg-primary/5" },
  { name: "PharmaStockAI", sub: "India · Pharmacy supply chain", color: "border-primary/30 bg-primary/5" },
  { name: "Zera", sub: "US · UK · AU · CA · Global wedge", color: "border-brand-zera/40 bg-brand-zera/5" },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: "easeOut" },
});

export default function Slide0Cover() {
  return (
    <div className="font-jakarta flex flex-col items-center justify-center min-h-[60vh] text-center">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-6 justify-center">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Sprint2Frontier Fundraise Program 2026
        </span>
        <div className="w-10 h-px bg-primary" />
      </motion.div>

      <motion.h1
        {...fadeUp(0.15)}
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-3 max-w-3xl text-heading"
      >
        NuScript Technologies
      </motion.h1>

      <motion.p {...fadeUp(0.22)} className="text-2xl sm:text-3xl text-muted-foreground mb-10 leading-relaxed">
        Building the AI pipes for{" "}
        <span className="text-primary font-semibold">global healthcare</span>
      </motion.p>

      <motion.div
        {...fadeUp(0.32)}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 w-full max-w-3xl"
      >
        {products.map((p) => (
          <div key={p.name} className={`rounded-xl border p-5 text-left ${p.color}`}>
            <p className="text-lg font-bold text-foreground mb-1">{p.name}</p>
            <p className="text-base text-muted-foreground">{p.sub}</p>
          </div>
        ))}
      </motion.div>

      <motion.div {...fadeUp(0.45)} className="mb-2">
        <p className="text-lg text-muted-foreground">
          Arvind Manohar · Founder & CEO · Coimbatore, India
        </p>
      </motion.div>

      <motion.p {...fadeUp(0.52)} className="text-sm text-muted-foreground/60  mt-3">
        Confidential — prepared for SBC Sprint2Frontier Acceleration Program 2026
      </motion.p>
    </div>
  );
}
