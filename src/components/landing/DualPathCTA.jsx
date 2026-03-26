import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const paths = [
  {
    label: "MedScribeAI",
    tag: "For Indian MTSOs",
    description: "AI-native transcription chassis that delivers 99%+ accuracy and instant TAT for US healthcare providers.",
    cta: "Scale My MTSO Operations",
    href: "/nuscriptai",
    color: "#00C0FF",
    bg: "rgba(0,192,255,0.07)",
    border: "rgba(0,192,255,0.25)",
  },
  {
    label: "PharmaStockAI",
    tag: "For Indian Pharmacies",
    description: "Predictive intelligence that eliminates expiry waste and stockouts — protecting margins at every shelf.",
    cta: "Optimize My Pharmacy Stock",
    href: "/pharmastockai",
    color: "#00C0FF",
    bg: "rgba(0,192,255,0.07)",
    border: "rgba(0,192,255,0.25)",
  },
];

export default function DualPathCTA() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-3 text-primary">Get Started</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Choose Your Path to Automation.
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "#9CB2D8" }}>
            Whether you are serving global healthcare or local retail, NuScript Technologies provides the autonomous engine for your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {paths.map((path, i) => (
            <motion.div
              key={path.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 border flex flex-col"
              style={{ background: path.bg, borderColor: path.border }}
            >
              <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: path.color }}>{path.tag}</p>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{path.label}</h3>
              <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: "#9CB2D8" }}>{path.description}</p>
              <Link
                to={path.href}
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 self-start"
                style={{ background: path.color, color: "#04142F" }}
              >
                {path.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}