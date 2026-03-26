import React from "react";
import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    label: "Pillar I",
    title: "The Global Standard",
    subtitle: "MedScribeAI — Built for US Healthcare",
    color: "#10B981",
    body: "We understand the high-stakes world of US Healthcare. Our platform, MedScribeAI, is the culmination of years of managing complex transcription workflows. We moved from manual processing to complete automation because we believe technology should liberate human expertise, not burden it.",
    link: "/nuscriptai",
    linkLabel: "Explore MedScribeAI →",
  },
  {
    icon: MapPin,
    label: "Pillar II",
    title: "The Local Mission",
    subtitle: "PharmaStockAI — Built for Indian Pharmacies",
    color: "#2563EB",
    body: "We saw a gap in the Indian pharmacy ecosystem: brilliant pharmacists held back by manual inventory and unpredictable supply chains. PharmaStockAI was created to give the \"Neighborhood Chemist\" and the \"Large Distributor\" the same predictive power used by global retail giants. We are here to ensure that no patient in India ever hears the words \"Out of Stock.\"",
    link: "/pharmastockai",
    linkLabel: "Explore PharmaStockAI →",
  },
];

export default function AboutPillars() {
  return (
    <section className="py-24 lg:py-32 border-t" style={{ borderColor: "rgba(37,99,235,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#2563EB" }}
        >
          Two Pillars of Innovation
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-unbounded text-3xl lg:text-4xl font-bold leading-tight mb-12"
          style={{ color: "#F1F5F9" }}
        >
          One mission. Two{" "}
           <span className="gradient-text">market-defining products.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl p-8 border relative overflow-hidden"
              style={{ background: `rgba(${p.color === "#10B981" ? "16,185,129" : "37,99,235"},0.05)`, borderColor: `rgba(${p.color === "#10B981" ? "16,185,129" : "37,99,235"},0.2)` }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `rgba(${p.color === "#10B981" ? "16,185,129" : "37,99,235"},0.15)` }}>
                <p.icon className="w-5 h-5" style={{ color: p.color }} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: p.color }}>{p.label}</p>
              <h3 className="font-unbounded text-xl font-bold mb-1" style={{ color: "#F1F5F9" }}>{p.title}</h3>
              <p className="text-sm font-medium mb-4" style={{ color: p.color }}>{p.subtitle}</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#D1D5DB" }}>{p.body}</p>
              <a href={p.link} className="text-sm font-semibold transition-opacity hover:opacity-70" style={{ color: p.color }}>{p.linkLabel}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}