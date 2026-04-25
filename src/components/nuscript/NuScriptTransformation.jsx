import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function NuScriptTransformation() {
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
          MTSO Transformation
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-unbounded text-3xl lg:text-4xl font-bold leading-tight mb-12"
          style={{ color: "#F1F5F9" }}
        >
          From cost centre to{" "}
          <span style={{ color: "#10B981" }}>technology powerhouse.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl p-8 lg:p-12 border overflow-hidden"
          style={{ background: "rgba(16,185,129,0.05)", borderColor: "rgba(16,185,129,0.2)" }}
        >
          {/* Top glow */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #10B981, transparent)" }} />

          <Quote className="w-8 h-8 mb-6 opacity-40" style={{ color: "#10B981" }} />

          <p className="text-lg lg:text-xl leading-relaxed font-medium" style={{ color: "#CBD5E1" }}>
            Traditional transcription is a race to the bottom on price.{" "}
            <span style={{ color: "#F1F5F9" }}>MedScribeAI turns your MTSO into a technology-led documentation powerhouse.</span>{" "}
            By removing manual typing, we allow you to focus on{" "}
            <span style={{ color: "#10B981" }}>Quality Assurance and Client Growth</span>,
            driving higher margins and faster delivery.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { value: "Higher Margins", desc: "Eliminate the cost of manual processing per report" },
              { value: "Faster Delivery", desc: "Meet aggressive TAT requirements without more headcount" },
              { value: "Client Growth", desc: "Scale your client base without scaling your team" },
            ].map((item) => (
              <div key={item.value} className="rounded-xl p-5 border" style={{ background: "rgba(6,13,26,0.6)", borderColor: "rgba(16,185,129,0.15)" }}>
                <p className="font-unbounded font-bold text-base mb-2" style={{ color: "#10B981" }}>{item.value}</p>
                <p className="text-sm" style={{ color: "#D1D5DB" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
