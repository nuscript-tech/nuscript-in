import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: 1, label: "Encounter", detail: "Provider sees patient. Mic on.", color: "border-primary/40 bg-primary/10 text-primary" },
  { num: 2, label: "ASR + diarization", detail: "Deepgram Nova-3-Medical, word-level timestamps.", color: "border-primary/40 bg-primary/10 text-primary" },
  { num: 3, label: "Note generation", detail: "Specialty-aware SOAP with linked audio anchors.", color: "border-brand-zera/40 bg-brand-zera/10 text-brand-zera" },
  { num: 4, label: "Auto-coding", detail: "ICD-10 + CPT + HCC + modifier engine.", color: "border-brand-zera/40 bg-brand-zera/10 text-brand-zera" },
  { num: 5, label: "Claim handoff", detail: "Note + codes → EHR or X12 837P claim out.", color: "border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan" },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideZeraPipeline() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-brand-zera" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand-zera">Zera · The Pipeline</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        One encounter. Note + code + claim — in parallel.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-9 max-w-2xl leading-relaxed">
        Most ambient AI scribes stop at the note. Zera carries the same encounter all the way to the claim — the entire reason healthcare AI exists.
      </motion.p>

      <div className="flex flex-wrap items-start justify-center gap-2 mb-7">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.45, ease: "easeOut" }}
              className={`rounded-xl border p-4 w-36 sm:w-44 text-center ${s.color.split(" ").slice(0,2).join(" ")}`}
            >
              <div className={`w-9 h-9 rounded-full mx-auto flex items-center justify-center font-extrabold text-base mb-3 ${s.color}`}>
                {s.num}
              </div>
              <p className={`text-base font-bold mb-2 ${s.color.split(" ")[2]}`}>{s.label}</p>
              <p className="text-sm text-muted-foreground leading-snug">{s.detail}</p>
            </motion.div>
            {i < steps.length - 1 && (
              <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 hidden sm:block" />
            )}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.45 }}
        className="p-5 rounded-xl bg-brand-zera/5 border-l-4 border-brand-zera"
      >
        <p className="text-lg font-bold text-foreground ">
          Most AI scribes stop at step 3. Zera carries the same encounter all the way to step 5 — note → code → claim, no handoffs.
        </p>
      </motion.div>
    </div>
  );
}
