import React, { useState, useEffect } from "react";
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

const TERMINAL_LINES = [
  { type: "input", text: "▸ Processing clinical dictation...", color: "#10B981" },
  { type: "dim", text: "  Audio stream: 2m 34s · Nova-3 Medical", color: "#64748B" },
  { type: "output", text: "  ✓ Transcript generated — 99.2% confidence", color: "#10B981" },
  { type: "blank", text: "" },
  { type: "input", text: "▸ Running AI formatting pipeline...", color: "#00BFFF" },
  { type: "dim", text: "  Pass 1: Structure extraction", color: "#64748B" },
  { type: "dim", text: "  Pass 2: Clinical terminology normalization", color: "#64748B" },
  { type: "dim", text: "  Pass 3: Template mapping — Ophthalmology", color: "#64748B" },
  { type: "output", text: "  ✓ Structured note ready — 4 sections", color: "#10B981" },
  { type: "blank", text: "" },
  { type: "input", text: "▸ Auto-coding encounter...", color: "#00BFFF" },
  { type: "output", text: "  CPT: 92014  ·  ICD-10: H40.11X2", color: "#E2E8F0" },
  { type: "output", text: "  E/M Level: 99214  ·  Modifier: -25", color: "#E2E8F0" },
  { type: "output", text: "  ✓ Coding confidence: 96%", color: "#10B981" },
  { type: "blank", text: "" },
  { type: "input", text: "▸ Claim validation...", color: "#00BFFF" },
  { type: "output", text: "  ✓ Clean claim — ready to submit", color: "#10B981" },
  { type: "dim", text: "  Medical necessity: verified", color: "#64748B" },
  { type: "dim", text: "  Prior auth: not required", color: "#64748B" },
  { type: "blank", text: "" },
  { type: "status", text: "  ● Pipeline complete — 0 handoffs", color: "#10B981" },
];

function AITerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= TERMINAL_LINES.length) {
          // Reset after a pause
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 280);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        background: "rgba(2, 6, 18, 0.85)",
        border: "1px solid rgba(16, 185, 129, 0.15)",
        borderRadius: "16px",
        padding: 0,
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: "12px",
        lineHeight: "1.7",
        overflow: "hidden",
        backdropFilter: "blur(12px)",
        boxShadow: "0 0 60px rgba(16, 185, 129, 0.08), 0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {/* Terminal header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 16px",
          borderBottom: "1px solid rgba(16, 185, 129, 0.1)",
          background: "rgba(16, 185, 129, 0.03)",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF4444", opacity: 0.7 }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B", opacity: 0.7 }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", opacity: 0.7 }} />
        </div>
        <span style={{ color: "#64748B", fontSize: "10px", marginLeft: "8px", letterSpacing: "0.05em" }}>
          nuscript-ai — engine v4.2
        </span>
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            marginLeft: "auto",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#10B981",
            boxShadow: "0 0 8px rgba(16,185,129,0.6)",
          }}
        />
      </div>

      {/* Terminal body */}
      <div style={{ padding: "16px 20px", minHeight: "340px", maxHeight: "340px", overflowY: "hidden" }}>
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={`${i}-${visibleLines > TERMINAL_LINES.length ? "r" : ""}`}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              color: line.color,
              minHeight: line.type === "blank" ? "12px" : "auto",
              fontWeight: line.type === "input" ? 600 : line.type === "status" ? 600 : 400,
            }}
          >
            {line.text}
          </motion.div>
        ))}
        {visibleLines < TERMINAL_LINES.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            style={{ color: "#10B981", fontWeight: 700 }}
          >
            ▍
          </motion.span>
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #10B981 1px, transparent 1px)",
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
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)" }}
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
            background: "#10B981",
            boxShadow: `0 0 ${dot.size * 3}px rgba(16,185,129,0.6)`,
          }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: dot.duration, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-36 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-medium"
              style={{ borderColor: "rgba(16,185,129,0.3)", color: "#10B981", background: "rgba(16,185,129,0.06)" }}
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
              <span className="gradient-text">Foundations of India.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base lg:text-lg text-muted-foreground mb-10"
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
                style={{ color: "#0F172A" }}
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

          {/* Right — AI Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hidden lg:block"
          >
            <AITerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
