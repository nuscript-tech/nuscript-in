import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const cards = [
  {
    tag: "OPERATOR",
    stat: "25 yrs",
    label: "Healthcare ops veteran",
    detail: "Clinical documentation, RCM, BPO operations across US health systems and India delivery.",
    accent: false,
  },
  {
    tag: "BUILDER",
    stat: "8x · 4 exits",
    label: "Repeat founder",
    detail: "Founded across US and India. Proven across multiple cycles in healthcare technology.",
    accent: true,
  },
  {
    tag: "SHIPPER",
    stat: "3 products",
    label: "Production AI",
    detail: "MedScribeAI, Zera, PharmaStockAI — all live, all built solo in under 6 months.",
    accent: false,
  },
  {
    tag: "ACADEMIC",
    stat: "Physics → AI",
    label: "MBA + BS Physics",
    detail: "MBA · Madurai Kamaraj University. BS Physics · Bharathiar University.",
    accent: false,
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function Slide1Founder() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">The Founder</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        25 years inside US healthcare documentation.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed">
        The reason Zera works isn't ML. It's domain depth that pure-tech founders cannot replicate.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.tag}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
            className={`rounded-xl border p-5 relative ${c.accent ? "bg-primary/8 border-primary/30" : "bg-card border-border"}`}
          >
            <div className="absolute top-0 left-0 w-1 h-full rounded-l-xl bg-primary/60" />
            <div className="pl-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{c.tag}</span>
                <span className={`text-xl font-extrabold ${c.accent ? "text-primary" : "text-brand-cyan"}`}>{c.stat}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{c.label}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{c.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/20"
      >
        <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <p className="text-lg font-medium text-foreground/85 leading-snug ">
          <span className="font-bold not-italic text-primary">The insight:</span>{" "}
          When Zera carries the encounter all the way to the claim, it's because I've spent 25 years watching that exact handoff fail. Most founders don't even know there's a handoff to fail at.
        </p>
      </motion.div>
    </div>
  );
}
