import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Target, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Mic,
    number: "I",
    title: "Voice-to-Structured-Report",
    subtitle: "Not ambient. Not approximate. Exact.",
    description:
      "While ambient tools struggle with complex clinical contexts, MedScribeAI excels at structured dictation. It captures the physician's intent and transforms it into a formatted, peer-review-ready medical report instantly.",
    features: [
      { label: "High-Fidelity Capture", detail: "Optimized for diverse accents and complex medical terminology." },
      { label: "Structured Output", detail: "Automatically maps data to SOAP notes, H&Ps, and Consultation reports." },
      { label: "Format Flexibility", detail: "Tailored to meet the specific documentation standards of US-based clinics." },
    ],
  },
  {
    icon: Target,
    number: "II",
    title: "Unbeatable Accuracy & Speed",
    subtitle: "Remove the human bottleneck.",
    description:
      "Our AI doesn't just \"guess\"; it processes clinical data with surgical precision, delivering results in minutes that used to take days.",
    features: [
      { label: "99%+ Accuracy", detail: "Engineered to exceed traditional human transcription benchmarks." },
      { label: "Instant Turnaround (TAT)", detail: "Meet and exceed the most demanding US provider SLAs." },
      { label: "Validation Engine", detail: "Integrated clinical logic checks to ensure data integrity before delivery." },
    ],
  },
  {
    icon: TrendingUp,
    number: "III",
    title: "Built for MTSO Scalability",
    subtitle: "Grow with ambition, not payroll.",
    description:
      "Your business should grow with your ambition, not your payroll. MedScribeAI allows you to take on 10x the volume with your existing team.",
    features: [
      { label: "MTSO Dashboard", detail: "Manage multiple US clients and provider feeds from a single, secure Coimbatore-engineered hub." },
      { label: "HIPAA-Compliant Security", detail: "Enterprise-grade encryption and data privacy protocols to protect US patient data." },
      { label: "Seamless EMR Integration", detail: "Push finalized reports directly into the provider's EHR/EMR system." },
    ],
  },
];

export default function NuScriptWorkflow() {
  const [active, setActive] = useState(0);
  const pillar = pillars[active];
  const Icon = pillar.icon;

  return (
    <section id="workflow" className="py-24 lg:py-32 border-t" style={{ borderColor: "rgba(5,150,105,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#059669" }}
        >
          Autonomous Workflow
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-unbounded text-3xl lg:text-4xl font-bold leading-tight mb-12"
          style={{ color: "#0F172A" }}
        >
          Three pillars of{" "}
          <span style={{ color: "#059669" }}>zero-touch documentation.</span>
        </motion.h2>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-3 mb-12">
          {pillars.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
              style={
                active === i
                  ? { background: "#059669", color: "#FFFFFF" }
                  : { background: "rgba(5,150,105,0.08)", color: "#94A3B8", border: "1px solid rgba(8,207,101,0.2)" }
              }
            >
              {p.number}. {p.title.split(" ").slice(0, 2).join(" ")}…
            </button>
          ))}
        </div>

        {/* Active pillar content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(5,150,105,0.15)" }}>
              <Icon className="w-6 h-6" style={{ color: "#059669" }} />
            </div>
            <h3 className="font-unbounded text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
              {pillar.title}
            </h3>
            <p className="text-sm font-medium mb-4" style={{ color: "#059669" }}>{pillar.subtitle}</p>
            <p className="leading-relaxed" style={{ color: "#334155" }}>{pillar.description}</p>
          </div>

          <div className="space-y-4">
            {pillar.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl p-5 border"
                style={{ background: "rgba(5,150,105,0.04)", borderColor: "rgba(5,150,105,0.15)" }}
              >
                <p className="font-semibold text-sm mb-1" style={{ color: "#1E293B" }}>{f.label}</p>
                <p className="text-sm" style={{ color: "#475569" }}>{f.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}