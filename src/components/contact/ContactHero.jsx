import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl" style={{ background: "#10B981" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10B981" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cgrid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-36 pb-16 lg:pt-0 lg:pb-0">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-unbounded text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-3xl"
            style={{ color: "#F1F5F9" }}
          >
            Let's Build the Future of India's{" "}
            <span className="gradient-text">Infrastructure.</span>
          </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base lg:text-lg leading-relaxed mb-10 max-w-2xl"
          style={{ color: "#94A3B8" }}
        >
          Whether you are looking to automate your MTSO workflow or optimize your Pharmacy operations, our Coimbatore-based engineering team is ready to help you scale.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          href="#inquiry"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-300"
          style={{ background: "#10B981", color: "#0F172A" }}
        >
          Schedule a Discovery Call
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
          </div>
          </div>
          </section>
          );
          }
