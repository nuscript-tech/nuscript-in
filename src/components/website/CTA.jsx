import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Package } from "lucide-react";
import { Link } from "react-router-dom";

const paths = [
  {
    audience: "For Indian MTSOs",
    name: "MedScribeAI",
    description: "AI-native transcription chassis that delivers 99%+ accuracy and instant TAT for US healthcare providers.",
    cta: "Scale My MTSO Operations",
    href: "/medscribeai",
    icon: Stethoscope,
    accent: "border-brand-cyan/30",
    tagColor: "text-brand-cyan",
    btnClass: "bg-brand-cyan text-white hover:opacity-90",
  },
  {
    audience: "For Indian Pharmacies",
    name: "PharmaStockAI",
    description: "Predictive intelligence that eliminates expiry waste and stockouts — protecting margins at every shelf.",
    cta: "Optimize My Pharmacy Stock",
    href: "/pharmastockai",
    icon: Package,
    accent: "border-primary/30",
    tagColor: "text-primary",
    btnClass: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Get Started</span>
            <div className="w-10 h-px bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight">
            Choose Your Path to Automation.
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Whether you are serving global healthcare or local retail, NuScript Technologies provides the autonomous engine for your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {paths.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`bg-card border rounded-2xl p-8 flex flex-col gap-5 ${p.accent} hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
            >
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest block mb-2 ${p.tagColor}`}>{p.audience}</span>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-card border ${p.accent} flex items-center justify-center`}>
                    <p.icon className={`w-5 h-5 ${p.tagColor}`} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-heading">{p.name}</h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
              <Link
                to={p.href}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg ${p.btnClass}`}
                style={{ boxShadow: p.name === "MedScribeAI" ? "0 0 18px 2px hsl(199 100% 40% / 0.35)" : "0 0 18px 2px hsl(160 84% 39% / 0.35)" }}
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
