import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function SlideStructure() {
  return (
    <div className="font-jakarta">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">The Structure</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.12)} className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] mb-2 max-w-3xl text-heading">
        One holdco. The entire portfolio.
      </motion.h1>
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
        Sprint2Frontier invests in NuScript Technologies, the Indian holdco. NuScript Technologies would own 100% of Zera Health Inc being formed as a Delaware corporation in the US.
      </motion.p>

      {/* Org chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.5 }}
        className="flex flex-col items-center gap-0"
      >
        {/* Founders */}
        <div className="bg-card border border-border rounded-xl px-8 py-3 text-center mb-0">
          <p className="text-base font-bold text-foreground">Arvind Manohar · Chitra Manohar</p>
          <p className="text-sm text-muted-foreground">70% / 30% founders</p>
        </div>
        <div className="w-px h-5 bg-border" />

        {/* Holdco */}
        <div className="bg-primary/8 border-2 border-primary/40 rounded-xl px-6 py-4 text-center w-full max-w-lg mb-0">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Indian Holdco · Where Sprint2Frontier Invests</span>
          <h3 className="text-2xl font-extrabold text-foreground">NuScript Technologies Pvt Ltd</h3>
          <p className="text-sm text-muted-foreground ">Owns MedScribeAI, PharmaStockAI, and 100% of Zera Health Inc.</p>
        </div>

        {/* Connector lines */}
        <div className="flex gap-0 w-full max-w-2xl">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-px h-5 bg-border" />
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-px h-5 bg-border" />
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-px h-5 bg-border" />
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
          {[
            { tag: "Product · India", name: "MedScribeAI", sub: "Multi-tenant SaaS · MTSOs + corporate hospitals", border: "border-primary/30 bg-primary/5", accent: "text-primary" },
            { tag: "Product · India", name: "PharmaStockAI", sub: "AI inventory · 1M+ pharmacy market", border: "border-primary/30 bg-primary/5", accent: "text-primary" },
            { tag: "Subsidiary · US", name: "Zera Health Inc.", sub: "Delaware C-Corp · 100% owned · global wedge", border: "border-brand-zera/30 bg-brand-zera/5", accent: "text-brand-zera" },
          ].map((p) => (
            <div key={p.name} className={`rounded-xl border p-4 text-center ${p.border}`}>
              <span className={`text-[10px] font-bold uppercase tracking-widest block mb-1 ${p.accent}`}>{p.tag}</span>
              <h4 className="text-base font-extrabold text-foreground mb-1">{p.name}</h4>
              <p className="text-xs text-muted-foreground leading-snug">{p.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div {...fadeUp(0.72)} className="mt-5 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-sm text-muted-foreground  text-center">
          <span className="font-bold text-primary not-italic">The pitch:</span>{" "}
          "Sprint2Frontier invests in the Indian holdco that owns the entire global healthcare AI portfolio. One investment. Direct exposure."
        </p>
      </motion.div>
    </div>
  );
}
