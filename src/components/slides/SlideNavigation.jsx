import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const SLIDE_TITLES = [
  "Cover",
  "The Thesis",
  "The Founder",
  "Foundation",
  "Portfolio",
  "MedScribeAI",
  "Buyer's Case",
  "MSA Pricing",
  "MSA Market",
  "PharmaStockAI",
  "PSA Pricing",
  "PSA Market",
  "Why Global",
  "Zera Product",
  "Zera Pipeline",
  "Zera Market",
  "Competitive",
  "Structure",
  "Valuation",
  "Capital",
  "Use of Funds",
  "Roadmap",
  "Projections",
  "Team",
  "Close",
];

export default function SlideNavigation({ current, total, onPrev, onNext }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="h-0.5 bg-muted">
        <motion.div
          className="h-full bg-primary"
          initial={false}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
      <div className="bg-background/90 backdrop-blur-xl border-t border-border px-4 py-2.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide max-w-[70vw]">
            {SLIDE_TITLES.map((title, i) => (
              <motion.div
                key={i}
                animate={{
                  width: i === current ? 20 : 6,
                  backgroundColor:
                    i === current
                      ? "hsl(158,64%,48%)"
                      : i < current
                      ? "hsl(160,84%,39%)"
                      : "hsl(214,20%,80%)",
                }}
                transition={{ duration: 0.3 }}
                className="h-1.5 rounded-full flex-shrink-0"
              />
            ))}
            {SLIDE_TITLES[current] && (
              <motion.span
                key={current}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs font-semibold text-primary hidden sm:inline tracking-wide ml-1 whitespace-nowrap"
              >
                {SLIDE_TITLES[current]}
              </motion.span>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-muted-foreground font-medium tabular-nums mr-1">
              {current + 1} / {total}
            </span>
            <button
              onClick={onPrev}
              disabled={current === 0}
              className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              disabled={current === total - 1}
              className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
