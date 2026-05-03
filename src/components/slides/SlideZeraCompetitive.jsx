import { motion } from "framer-motion";

const competitors = [
  { name: "Microsoft Dragon", x: 18, y: 15, size: 18 },
  { name: "Heidi Health", x: 22, y: 30, size: 13 },
  { name: "TORTUS", x: 13, y: 45, size: 10 },
  { name: "Lyrebird", x: 33, y: 22, size: 12 },
  { name: "Abridge", x: 37, y: 35, size: 13 },
  { name: "Suki", x: 47, y: 18, size: 12 },
  { name: "Ambience", x: 47, y: 35, size: 13 },
  { name: "Scribetech", x: 16, y: 65, size: 10 },
  { name: "T-Pro", x: 35, y: 65, size: 10 },
  { name: "Lexacom", x: 16, y: 78, size: 9 },
  { name: "Dictate IT", x: 35, y: 78, size: 9 },
  { name: "Corti", x: 65, y: 65, size: 11 },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideZeraCompetitive() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-brand-zera" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand-zera">Zera · Competitive Landscape</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        Where Zera fits in a crowded category.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-6 max-w-2xl leading-relaxed">
        The NHS registry alone has 19 approved vendors. None lead with specialty depth + revenue cycle in a single pipeline. That empty quadrant is Zera's wedge.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.5 }}
        className="relative bg-card border border-border rounded-xl overflow-hidden"
        style={{ height: 320 }}
      >
        {/* Axis labels */}
        <div className="absolute top-2 left-3 text-xs font-semibold text-muted-foreground">Multi-market</div>
        <div className="absolute bottom-2 left-3 text-xs font-semibold text-muted-foreground">Single-market</div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-muted-foreground">← General-purpose</div>
        <div className="absolute bottom-6 right-4 text-xs font-bold text-foreground">Specialty + revenue cycle →</div>

        {/* Quadrant lines */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-border" />

        {/* Zera's wedge highlight */}
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-primary/8 border-2 border-primary/30 rounded-br-none rounded-bl-none rounded-tl-none rounded-tr-xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-1">Z</div>
            <span className="text-base font-extrabold text-primary">Zera</span>
            <p className="text-xs text-primary/70  mt-0.5">The empty quadrant —<br/>our wedge.</p>
          </div>
        </div>

        {/* Competitors */}
        {competitors.map((c) => (
          <div
            key={c.name}
            className="absolute flex flex-col items-center gap-0.5"
            style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div
              className="rounded-full bg-muted-foreground/40"
              style={{ width: c.size, height: c.size }}
            />
            <span className="text-[9px] text-muted-foreground whitespace-nowrap font-medium">{c.name}</span>
          </div>
        ))}
      </motion.div>

      <motion.div {...fadeUp(0.72)} className="mt-4 p-4 rounded-xl bg-card border border-border">
        <p className="text-base text-muted-foreground">
          <span className="font-bold text-brand-zera">The wedge:</span>{" "}
          We don't compete head-on with Microsoft Dragon. We win specialty practices in four markets that need note + code + claim — not just notes.
        </p>
      </motion.div>
    </div>
  );
}
