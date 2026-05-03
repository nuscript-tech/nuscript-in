import { motion } from "framer-motion";
import { Mic, Code, DollarSign, Shield } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Ambient capture",
    detail: "Passively listens to the visit. No dictation. No clicking. Specialty-aware.",
  },
  {
    icon: Code,
    title: "HCC + auto-coding",
    detail: "ICD-10, CPT, and HCC codes generated alongside the note, in real time.",
  },
  {
    icon: DollarSign,
    title: "Revenue integrity",
    detail: "Built around the full encounter-to-claim workflow — not just notes.",
  },
  {
    icon: Shield,
    title: "Traceable Truth",
    detail: "Every line in the note links back to the moment in the audio. Provider trusts what they sign.",
  },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideZeraProduct() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-brand-zera" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand-zera">Zera · The Product</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        Clinical documentation, HCC capture, revenue integrity.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-9 max-w-2xl leading-relaxed">
        One ambient AI platform that captures the encounter, codes it, and carries it through to clean revenue — built for English-speaking healthcare markets globally.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.1, duration: 0.5 }}
            className="bg-brand-zera/5 border border-brand-zera/25 rounded-xl p-5 relative"
          >
            <div className="absolute top-0 left-0 w-1 h-full rounded-l-xl bg-brand-zera" />
            <div className="pl-3">
              <h3 className="text-lg font-bold text-brand-zera mb-3">{f.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{f.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.72)} className="p-4 rounded-xl bg-card border border-brand-zera/25">
        <p className="text-base text-muted-foreground">
          <span className="font-bold text-brand-zera">Pricing</span>{" "}· <span className="font-bold text-foreground">$199 / provider / month</span> · transparent, US-priced — sold by Zera Health Inc., a wholly-owned Delaware subsidiary of NuScript Technologies.
        </p>
      </motion.div>
    </div>
  );
}
