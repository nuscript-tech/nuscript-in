import { motion } from "framer-motion";
import { Cpu, Zap, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Engineering-First",
    description: "Our Coimbatore R&D hub is dedicated to building Vertical SaaS that solves deep, industry-specific problems.",
  },
  {
    icon: Zap,
    title: "Zero-Friction",
    description: "Our platforms don't just \"add features\" — they remove manual bottlenecks entirely.",
  },
  {
    icon: TrendingUp,
    title: "Future-Proof",
    description: "Built on a scalable AI-native chassis ready for the next evolution of HealthTech and FinTech.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-muted/40 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle, hsl(160,84%,39%) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Why NuScript Technologies?</span>
            <div className="w-10 h-px bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight">
            Built different. By design.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-7 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-primary/50" />
              <div className="pl-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-extrabold text-heading mb-3">{p.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
