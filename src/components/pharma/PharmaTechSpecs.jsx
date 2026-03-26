import React from "react";
import { motion } from "framer-motion";
import { Cloud, Lock, Headphones, ArrowRight } from "lucide-react";
import PharmaFeatureSummary from "./PharmaFeatureSummary";

const specs = [
  {
    icon: Cloud,
    title: "Deployment",
    value: "Cloud-Native / Edge-Ready",
    detail: "Scales with your business whether you run one store or fifty.",
  },
  {
    icon: Lock,
    title: "Security",
    value: "Enterprise-Grade Encryption",
    detail: "End-to-end protection for all patient and transaction data.",
  },
  {
    icon: Headphones,
    title: "Support",
    value: "24/7 Dedicated Support",
    detail: "Direct line to our Coimbatore engineering hub — always.",
  },
];

export default function PharmaTechSpecs() {
  return (
    <section id="contact" className="py-24 lg:py-32" style={{ background: "rgba(11,218,81,0.03)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: "#0BDA51" }}
          >
            For the IT Stakeholder
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-unbounded text-3xl lg:text-4xl font-bold"
            style={{ color: "#F1F5F9" }}
          >
            Built to{" "}
            <span className="gradient-text">enterprise standard.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-8 border transition-all duration-500 group"
              style={{ background: "rgba(11,218,81,0.04)", borderColor: "rgba(11,218,81,0.15)" }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(11,218,81,0.4)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(11,218,81,0.12)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(11,218,81,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(11,218,81,0.12)" }}>
                <spec.icon className="w-5 h-5" style={{ color: "#0BDA51" }} />
              </div>
              <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#7B8FA0" }}>{spec.title}</p>
              <p className="font-unbounded text-base font-bold mb-3" style={{ color: "#E2E8F0" }}>{spec.value}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{spec.detail}</p>
            </motion.div>
          ))}
        </div>

        <PharmaFeatureSummary />

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-12 lg:p-16 text-center border overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(11,218,81,0.12) 0%, rgba(29,78,216,0.06) 100%)",
            borderColor: "rgba(11,218,81,0.3)",
            boxShadow: "0 0 80px rgba(11,218,81,0.12)"
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(11,218,81,0.6), transparent)" }} />
          </div>
          <h3 className="font-unbounded text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#F1F5F9" }}>
            Stop Losing Profit to Expiry & Stockouts.
          </h3>
          <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: "#94A3B8" }}>
            Join the next generation of Indian pharmacies using predictive intelligence to protect margins and serve patients better.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-lg text-sm transition-all duration-300"
              style={{ background: "#0BDA51", color: "#0F172A" }}
            >
              Schedule a Technical Demo
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}