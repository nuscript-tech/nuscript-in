import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Layers } from "lucide-react";

const points = [
  {
    icon: Code2,
    title: "Local Engineering",
    detail: "Our R&D center is strategically located in Coimbatore, tapping into a rich pool of engineering talent building world-class AI.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    detail: "We bridge the gap between US-grade quality standards and Indian operational realities — serving both markets with excellence.",
  },
  {
    icon: Layers,
    title: "SaaS-First",
    detail: "100% focused on Vertical SaaS — building deep, industry-specific solutions that solve real problems, not generic tools.",
  },
];

export default function AboutCoimbatore() {
  return (
    <section className="py-24 lg:py-32 border-t" style={{ borderColor: "rgba(0,192,255,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#00C0FF" }}
        >
          Why Coimbatore?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-unbounded text-3xl lg:text-4xl font-bold leading-tight mb-12"
          style={{ color: "#E8F1FF" }}
        >
          India's quietly rising{" "}
           <span className="gradient-text">deep-tech hub.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {points.map((pt, i) => (
            <motion.div
              key={pt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-xl p-7 border"
              style={{ background: "rgba(0,192,255,0.05)", borderColor: "rgba(0,192,255,0.15)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: "rgba(0,192,255,0.15)" }}>
                <pt.icon className="w-5 h-5" style={{ color: "#00C0FF" }} />
              </div>
              <h3 className="font-unbounded font-bold text-base mb-3" style={{ color: "#E8F1FF" }}>{pt.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9CB2D8" }}>{pt.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}