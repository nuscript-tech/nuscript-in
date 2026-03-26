import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#3B82F6" }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-8 blur-3xl" style={{ background: "#0D9488" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="agrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#agrid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-36 pb-16 lg:pt-0 lg:pb-0">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-unbounded text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            style={{ color: "#F1F5F9" }}
          >
            Engineering Precision for<br />
            India's <span className="gradient-text">Essential Sectors.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base lg:text-lg leading-relaxed mb-10 max-w-2xl"
            style={{ color: "#94A3B8" }}
          >
            Born in Coimbatore. Proven in Global Healthcare. We are NuScript Technologies — a venture-backed innovation hub dedicated to replacing manual bottlenecks with <strong style={{ color: "#E2E8F0" }}>autonomous intelligence.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#origins"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300"
              style={{ background: "#3B82F6", color: "#0F172A" }}
            >
              Our Journey
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 border"
              style={{ borderColor: "rgba(59,130,246,0.4)", color: "#3B82F6" }}
            >
              Join the Mission
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}