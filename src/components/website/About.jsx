import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "100%", label: "Autonomous Workflows" },
  { value: "CBE", label: "Coimbatore-Based Engineering" },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Institutional Trust</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight mb-6">
            25 Years of Domain Mastery. Formed for the Future.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            While NuScript Technologies was founded in 2026 to lead India's autonomous revolution, our DNA spans over two decades. Our founding vision began in Health Information Management in 2000, building a legacy of 8 startups and 4 successful exits. We aren't just a new company; we are the culmination of a quarter-century of global healthcare expertise.
          </p>
        </motion.div>

        {/* Right — stats */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/60" />
              <div className="text-4xl font-extrabold text-primary mb-1 tabular-nums">{s.value}</div>
              <div className="text-base text-muted-foreground font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
