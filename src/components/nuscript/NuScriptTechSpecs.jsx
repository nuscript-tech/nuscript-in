import React from "react";
import { motion } from "framer-motion";
import { Cloud, Smartphone, FileOutput, Headphones } from "lucide-react";
import NuScriptFeatureSummary from "./NuScriptFeatureSummary";

const specs = [
  { icon: Cloud, label: "Platform", value: "Cloud-Native, Secure, and High-Availability" },
  { icon: Smartphone, label: "Input", value: "Multi-device — Mobile, Digital Recorder, Web" },
  { icon: FileOutput, label: "Output", value: "HL7, XML, PDF, and Direct EMR Injection" },
  { icon: Headphones, label: "Support", value: "Direct access to our Coimbatore engineering team" },
];

export default function NuScriptTechSpecs() {
  return (
    <section className="py-24 lg:py-32 border-t" style={{ borderColor: "rgba(16,185,129,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#10B981" }}
        >
          Technical Pillar
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-unbounded text-3xl lg:text-4xl font-bold leading-tight mb-12"
          style={{ color: "#F1F5F9" }}
        >
          Enterprise-grade infrastructure,{" "}
          <span style={{ color: "#10B981" }}>built for scale.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl p-6 border"
              style={{ background: "rgba(16,185,129,0.05)", borderColor: "rgba(16,185,129,0.2)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(16,185,129,0.15)" }}>
                <spec.icon className="w-5 h-5" style={{ color: "#10B981" }} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7B8FA0" }}>{spec.label}</p>
              <p className="text-sm font-medium" style={{ color: "#CBD5E1" }}>{spec.value}</p>
            </motion.div>
          ))}
        </div>

        <NuScriptFeatureSummary />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-10 text-center border relative overflow-hidden"
          style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.25)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #10B981, transparent)" }} />
          <h3 className="font-unbounded text-2xl font-bold mb-3" style={{ color: "#F1F5F9" }}>
            Ready to Eliminate the Manual Bottleneck?
          </h3>
          <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: "#94A3B8" }}>
            Don't let staffing shortages cap your growth. See how our AI-native chassis delivers 99%+ accuracy and instant TAT for US healthcare providers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300"
              style={{ background: "#10B981", color: "#0F172A" }}
            >
              Schedule a Technical Demo
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
