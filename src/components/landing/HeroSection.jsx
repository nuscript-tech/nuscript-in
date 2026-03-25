import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DOTS = [
  { x: "10%", y: "20%", size: 4, delay: 0, duration: 6 },
  { x: "85%", y: "15%", size: 3, delay: 1, duration: 8 },
  { x: "75%", y: "70%", size: 5, delay: 2, duration: 7 },
  { x: "20%", y: "75%", size: 3, delay: 0.5, duration: 9 },
  { x: "50%", y: "10%", size: 4, delay: 1.5, duration: 6.5 },
  { x: "92%", y: "45%", size: 3, delay: 3, duration: 8.5 },
  { x: "5%", y: "50%", size: 5, delay: 2.5, duration: 7.5 },
  { x: "60%", y: "85%", size: 3, delay: 0.8, duration: 9.5 },
  { x: "38%", y: "60%", size: 2, delay: 1.2, duration: 11 },
  { x: "68%", y: "30%", size: 2, delay: 3.5, duration: 10 },
  { x: "25%", y: "40%", size: 3, delay: 2, duration: 7 },
  { x: "88%", y: "80%", size: 4, delay: 0.3, duration: 8 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #059669 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Soft vignette over dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Ambient glow orbs */}
      <motion.div
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)" }}
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Floating dots */}
      {DOTS.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            background: "#059669",
            boxShadow: `0 0 ${dot.size * 3}px rgba(8,207,101,0.6)`,
          }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: dot.duration, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Content — left aligned */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-36 pb-16 lg:pt-0 lg:pb-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-medium"
            style={{ borderColor: "rgba(5,150,105,0.3)", color: "#059669", background: "rgba(5,150,105,0.06)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            AI-Native · Built in Coimbatore · Serving India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-unbounded text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-foreground leading-tight mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Intelligence for the{" "}
            <span className="text-primary">Foundations of India.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base lg:text-lg text-muted-foreground font-jakarta mb-10"
            style={{ lineHeight: "1.75" }}
          >
            From automating global clinical documentation for MTSOs to powering autonomous inventory for domestic pharmacies — we build the technology that runs the backbone of Indian enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
              style={{ color: "#FFFFFF" }}
            >
              Explore our Platforms
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg text-sm font-semibold hover:border-primary/40 transition-all duration-300"
            >
              Our Coimbatore Hub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}