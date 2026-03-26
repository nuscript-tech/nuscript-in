import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function AboutFounder() {
  return (
    <section className="py-24 lg:py-32 border-t" style={{ borderColor: "rgba(96,165,250,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#60A5FA" }}
        >
          Founder's Vision
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl p-8 lg:p-12 border relative overflow-hidden"
          style={{ background: "#1E293B", borderColor: "rgba(96,165,250,0.2)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #60A5FA, transparent)" }} />

          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <Quote className="w-8 h-8 mb-6 opacity-40" style={{ color: "#0EA5E9" }} />
              <p className="text-lg lg:text-xl leading-relaxed font-medium mb-8" style={{ color: "#CBD5E1" }}>
                "As a founder with eight startups and four successful exits in HealthTech, my goal for NuScript Technologies is simple: to build the most reliable technology{" "}
                <span style={{ color: "#F1F5F9" }}>'chassis'</span>{" "}
                for India's healthcare and financial infrastructure. We aren't just building apps; we are building the{" "}
                <span className="gradient-text">connective tissue for modern Indian enterprises.</span>"
              </p>
              <div>
                <p className="font-unbounded font-bold text-base" style={{ color: "#F1F5F9" }}>Arvind Manohar</p>
                <p className="text-sm mt-1" style={{ color: "#94A3B8" }}>Founder & CEO, NuScript Technologies · 8 Startups · 4 Exits</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "8", label: "Startups Founded" },
                { value: "4", label: "Successful Exits" },
                { value: "25+", label: "Years in HealthTech" },
                { value: "2", label: "AI Platforms Built" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-4 border text-center" style={{ background: "rgba(96,165,250,0.05)", borderColor: "rgba(96,165,250,0.15)" }}>
                  <p className="font-unbounded font-bold text-xl" style={{ color: "#0EA5E9" }}>{stat.value}</p>
                  <p className="text-xs mt-1" style={{ color: "#7B8FA0" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}