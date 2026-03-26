import React from "react";
import { motion } from "framer-motion";
import { Mic, FileText, LayoutDashboard, Plug, ArrowUpRight, Shield } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Neural Voice Capture",
    description: "High-fidelity processing engineered to handle diverse clinical accents and complex medical terminology with 99.9% accuracy.",
  },
  {
    icon: FileText,
    title: "Structured Intelligence",
    description: "Beyond simple text, our AI maps dictations directly into SOAP notes, H&P reports, and consultation summaries.",
  },
  {
    icon: LayoutDashboard,
    title: "MTSO Multi-Tenant Dashboard",
    description: "A centralized command center to manage multiple US provider feeds, track SLAs, and monitor real-time throughput.",
  },
  {
    icon: Plug,
    title: "EMR-Ready Integration",
    description: "Finalized reports are formatted for instant injection into major US Electronic Health Record systems via HL7 or secure XML.",
  },
];

export default function NuScriptFeatureSummary() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#10B981" }}>Feature Summary</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-3">
            The Architecture of Autonomous Documentation
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl p-6 border border-border"
              style={{ background: "rgba(17,40,54,0.6)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(16,185,129,0.12)" }}>
                <f.icon className="w-5 h-5" style={{ color: "#10B981" }} />
              </div>
              <p className="font-body font-semibold text-sm text-foreground mb-2">{f.title}</p>
              <p className="font-body font-normal text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{f.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl p-6 border border-border"
          style={{ background: "rgba(17,40,54,0.4)" }}
        >
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 flex-shrink-0" style={{ color: "#10B981" }} />
            <p className="text-xs font-body" style={{ color: "#7B8FA0" }}>
              Built on 25 years of HIM/RCM expertise. Engineered in Coimbatore for 2026 standards.
            </p>
          </div>
          <a
            href="https://medscribeai.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 border text-center"
            style={{ borderColor: "#10B981", color: "#10B981", background: "transparent" }}
          >
            View Technical Specs & Live Demo at medscribeai.in
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}