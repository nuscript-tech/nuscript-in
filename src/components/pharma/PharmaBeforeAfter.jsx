import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { before: "Manual Stocking", after: "Predictive Analytics" },
  { before: "High Expiry Waste", after: "Zero Expiry Loss" },
  { before: "Lost Sales", after: "100% Stock Availability" },
  { before: "Reactive Procurement", after: "Automated Reordering" },
  { before: "Siloed Multi-Store Data", after: "Unified Real-Time Dashboard" },
  { before: "ERP-Dependent Guesswork", after: "AI-Driven Intelligence Layer" },
];

export default function PharmaBeforeAfter() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "rgba(16,185,129,0.03)" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: "#10B981" }}
          >
            The Transformation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-unbounded text-3xl lg:text-4xl font-bold"
            style={{ color: "#F1F5F9" }}
          >
            Before vs.{" "}
            <span className="gradient-text">After.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(16,185,129,0.2)", boxShadow: "0 0 60px rgba(16,185,129,0.08)" }}
        >
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="px-8 py-5 border-r border-b" style={{ background: "rgba(239,68,68,0.06)", borderColor: "rgba(16,185,129,0.15)" }}>
              <span className="font-unbounded text-xs font-bold tracking-widest uppercase" style={{ color: "#EF4444" }}>
                Before PharmaStockAI
              </span>
            </div>
            <div className="px-8 py-5 border-b" style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.15)" }}>
              <span className="font-unbounded text-xs font-bold tracking-widest uppercase" style={{ color: "#10B981" }}>
                After PharmaStockAI
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-b last:border-b-0"
              style={{ borderColor: "rgba(16,185,129,0.1)" }}
            >
              <div className="px-8 py-5 flex items-center gap-3 border-r" style={{ borderColor: "rgba(16,185,129,0.1)", background: i % 2 === 0 ? "rgba(239,68,68,0.02)" : "transparent" }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(239,68,68,0.15)" }}>
                  <X className="w-3 h-3" style={{ color: "#EF4444" }} />
                </div>
                <span className="text-sm" style={{ color: "#94A3B8" }}>{row.before}</span>
              </div>
              <div className="px-8 py-5 flex items-center gap-3" style={{ background: i % 2 === 0 ? "rgba(16,185,129,0.03)" : "transparent" }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(16,185,129,0.15)" }}>
                  <Check className="w-3 h-3" style={{ color: "#10B981" }} />
                </div>
                <span className="text-sm font-medium" style={{ color: "#E2E8F0" }}>{row.after}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}