import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import NuScriptDashboardVisual from "./NuScriptDashboardVisual";
import AnimatedStat from "../landing/AnimatedStat";

export default function NuScriptHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(11,218,81,0.18) 0%, transparent 70%)" }}
          animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(5,179,68,0.12) 0%, transparent 70%)" }}
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0BDA51" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
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
              The End of Manual<br />
              <span style={{ color: "#0BDA51" }}>Transcription</span> for MTSOs.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base lg:text-lg leading-relaxed mb-10 max-w-2xl"
              style={{ color: "#94A3B8" }}
            >
              Stop managing headcounts and start managing outcomes. MedScribeAI is the high-performance dictation-to-report platform built exclusively for Indian MTSOs to serve the US healthcare market with <strong style={{ color: "#E2E8F0" }}>99%+ accuracy</strong> and <strong style={{ color: "#E2E8F0" }}>zero manual processing.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#workflow"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{ background: "#08CF65", color: "#0F172A" }}
              >
                Automate Your Workflow
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 border"
                style={{ borderColor: "rgba(37,99,235,0.4)", color: "#0BDA51", background: "transparent" }}
              >
                Scale Without Hiring
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex flex-wrap gap-10"
            >
              {[
                { value: "99%+", label: "Transcription Accuracy" },
                { value: "10x", label: "Volume Capacity" },
                { value: "24/7", label: "Uptime SLA" },
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
            <NuScriptDashboardVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}