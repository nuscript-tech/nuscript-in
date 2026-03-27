import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { metric: "Turnaround Time", old: "Slow TAT (hours to days)", new: "Instant Reports (minutes)" },
  { metric: "Labor Cost", old: "High — per-transcriptionist", new: "Zero manual processing cost" },
  { metric: "Error Rate", old: "Human error inevitable", new: "100% Precision with validation" },
  { metric: "Scalability", old: "Hard to scale — more volume = more hires", new: "Infinite Scalability — same team, 10x volume" },
  { metric: "HIPAA Compliance", old: "Dependent on individual staff", new: "Enterprise-grade, always enforced" },
  { metric: "EMR Integration", old: "Manual re-entry into systems", new: "Direct push to EHR/EMR" },
  { metric: "Client Management", old: "Fragmented, per-client manual ops", new: "Unified MTSO Dashboard" },
];

export default function NuScriptComparison() {
  return (
    <section id="comparison" className="py-24 lg:py-32 border-t" style={{ borderColor: "rgba(16,185,129,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#589aaf" }}
        >
          The MedScribeAI Difference
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-unbounded text-3xl lg:text-4xl font-bold leading-tight mb-12"
          style={{ color: "#F1F5F9" }}
        >
          The Old Way vs.{" "}
          <span style={{ color: "#10B981" }}>The MedScribeAI Way.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border overflow-hidden"
          style={{ borderColor: "rgba(16,185,129,0.2)" }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 text-xs font-semibold tracking-widest uppercase" style={{ background: "rgba(16,185,129,0.1)" }}>
            <div className="px-6 py-4" style={{ color: "#7B8FA0" }}>Metric</div>
            <div className="px-6 py-4 border-l" style={{ color: "#EF4444", borderColor: "rgba(16,185,129,0.15)" }}>The Old Way</div>
            <div className="px-6 py-4 border-l" style={{ color: "#10B981", borderColor: "rgba(16,185,129,0.15)" }}>The MedScribeAI Way</div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="grid grid-cols-3 border-t"
              style={{ borderColor: "rgba(16,185,129,0.1)", background: i % 2 === 0 ? "rgba(6,13,26,0.4)" : "transparent" }}
            >
              <div className="px-6 py-4 text-sm font-medium" style={{ color: "#7B8FA0" }}>{row.metric}</div>
              <div className="px-6 py-4 border-l flex items-start gap-2" style={{ borderColor: "rgba(16,185,129,0.1)" }}>
                <X className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#EF4444" }} />
                <span className="text-sm" style={{ color: "#7B8FA0" }}>{row.old}</span>
              </div>
              <div className="px-6 py-4 border-l flex items-start gap-2" style={{ borderColor: "rgba(16,185,129,0.1)" }}>
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#10B981" }} />
                <span className="text-sm font-medium" style={{ color: "#CBD5E1" }}>{row.new}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}