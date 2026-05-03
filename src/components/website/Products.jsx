import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Package } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    tag: "Global Pillar · Healthcare",
    name: "MedScribeAI",
    tagline: "Documentation at the Speed of Thought.",
    description:
      "Built exclusively for Indian MTSOs serving the US Healthcare market. Complete removal of manual transcription. Our platform transforms dictation into structured clinical reports with unbeatable speed and 99%+ accuracy.",
    cta: "Scale Your MTSO",
    href: "/medscribeai",
    icon: Stethoscope,
    accent: "border-brand-cyan/30 bg-brand-cyan/5",
    tagColor: "text-brand-cyan",
    iconColor: "text-brand-cyan",
    barColor: "bg-brand-cyan",
  },
  {
    tag: "Domestic Pillar · Pharma",
    name: "PharmaStockAI",
    tagline: "Precision Inventory. Zero Waste.",
    description:
      "Built for Indian Pharmacies & Distributors serving the population of India. An autonomous inventory engine that ends stockouts and eliminates expiry waste through predictive intelligence.",
    cta: "Optimize Your Pharmacy",
    href: "/pharmastockai",
    icon: Package,
    accent: "border-primary/30 bg-primary/5",
    tagColor: "text-primary",
    iconColor: "text-primary",
    barColor: "bg-primary",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-muted/40 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle, hsl(160,84%,39%) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Dual Engine Platform</span>
            <div className="w-10 h-px bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight">
            Two markets. Two purpose-built AI platforms.
          </h2>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className={`rounded-2xl border p-8 relative overflow-hidden ${p.accent} hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${p.barColor} opacity-60`} />
              <span className={`text-xs font-bold uppercase tracking-widest block mb-3 ${p.tagColor}`}>{p.tag}</span>
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl border ${p.accent} flex items-center justify-center flex-shrink-0`}>
                  <p.icon className={`w-6 h-6 ${p.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-heading mb-1">{p.name}</h3>
                  <p className={`text-base font-semibold ${p.tagColor}`}>{p.tagline}</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">{p.description}</p>
              <Link
                to={p.href}
                className={`inline-flex items-center gap-2 text-sm font-bold ${p.tagColor} hover:opacity-80 transition-opacity`}
              >
                {p.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
