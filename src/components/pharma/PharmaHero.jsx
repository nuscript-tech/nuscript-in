import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import PharmaDashboardVisual from "./PharmaDashboardVisual";
import AnimatedStat from "../landing/AnimatedStat";

export default function PharmaHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)" }}
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(5,179,68,0.10) 0%, transparent 70%)" }}
          animate={{ x: [0, -50, 0], y: [0, 35, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-unbounded text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ color: "#F1F5F9" }}
            >
              The Autonomous Engine{" "}
              for{" "}
              <span className="gradient-text">Indian Pharmacy.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base lg:text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: "#94A3B8" }}
            >
              Moving beyond traditional ERPs. PharmaStockAI is a predictive intelligence layer built to
              automate procurement, eliminate expiry waste, and maximize margins for Indian retailers and distributors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-sm transition-all duration-300"
                style={{ background: "#10B981", color: "#0F172A" }}
              >
                Get the Intelligence Report
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#pillars"
                className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-sm border transition-all duration-300"
                style={{ borderColor: "rgba(16,185,129,0.4)", color: "#6EF797", background: "transparent" }}
              >
                View Demo
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-14 flex flex-wrap gap-10"
            >
              {[
                { value: "5–8%", label: "Revenue Recovered from Expiry Loss" },
                { value: "100%", label: "Stock Visibility" },
                { value: "24/7", label: "Engineering Support" },
              ].map((stat) => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="hidden lg:block"
          >
            <PharmaDashboardVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}