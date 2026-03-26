import React from "react";
import { motion } from "framer-motion";
import { Target, Settings, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    detail: "Every product we build is engineered to exceed the highest accuracy benchmarks — because in healthcare and pharma, errors have consequences.",
  },
  {
    icon: Settings,
    title: "Automation",
    detail: "We systematically eliminate every manual bottleneck. If a human is doing something a machine can do better, we fix it.",
  },
  {
    icon: Shield,
    title: "Integrity",
    detail: "HIPAA-grade data standards, compliance-first architecture, and zero-compromise on privacy. Trust is our product.",
  },
];

export default function AboutWay() {
  return (
    <section className="py-24 lg:py-32 border-t" style={{ borderColor: "rgba(0,191,255,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#00BFFF" }}
        >
          The NuScript Way
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-unbounded text-3xl lg:text-4xl font-bold leading-tight mb-12"
          style={{ color: "#F1F5F9" }}
        >
          Three principles. Zero{" "}
           <span className="gradient-text">compromise.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-xl p-7 border text-center"
              style={{ background: "rgba(0,191,255,0.05)", borderColor: "rgba(0,191,255,0.2)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(0,191,255,0.15)" }}>
                <v.icon className="w-6 h-6" style={{ color: "#00BFFF" }} />
              </div>
              <h3 className="font-unbounded font-bold text-lg mb-3" style={{ color: "#F1F5F9" }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{v.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-10 text-center border relative overflow-hidden"
          style={{ background: "rgba(0,191,255,0.06)", borderColor: "rgba(0,191,255,0.2)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #00BFFF, transparent)" }} />
          <h3 className="font-unbounded text-2xl font-bold mb-3" style={{ color: "#F1F5F9" }}>
            Want to be part of the mission?
          </h3>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "#94A3B8" }}>
            We're always looking for engineers, domain experts, and partners who believe in building technology that matters.
          </p>
          <a
            href="mailto:info@nuscript.in"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300"
            style={{ background: "#00BFFF", color: "#0F172A" }}
          >
            Join the Mission →
          </a>
        </motion.div>
      </div>
    </section>
  );
}