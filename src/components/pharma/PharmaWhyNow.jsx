import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function PharmaWhyNow() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: "#60A5FA" }}
        >
          The Indian Context
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-unbounded text-3xl lg:text-4xl font-bold mb-12"
          style={{ color: "#F1F5F9" }}
        >
          Why Now?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl p-10 lg:p-14 border text-left"
          style={{
           background: "rgba(96,165,250,0.05)",
           borderColor: "rgba(96,165,250,0.2)",
           boxShadow: "0 0 80px rgba(96,165,250,0.1)"
          }}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px" style={{ background: "linear-gradient(90deg, transparent, #60A5FA, transparent)" }} />

          <Quote className="w-8 h-8 mb-6 opacity-30" style={{ color: "#60A5FA" }} />
          <p className="text-lg lg:text-xl leading-relaxed font-medium" style={{ color: "#CBD5E1" }}>
            "The Indian Pharmacy market is evolving. As consumers demand more reliability and faster
            service, your back-end operations can no longer be manual. PharmaStockAI provides the
            tech-equity you need to{" "}
            <span className="gradient-text">compete with organized giants</span>{" "}
            while maintaining your local edge."
          </p>
        </motion.div>
      </div>
    </section>
  );
}