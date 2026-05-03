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

const NODES = [
  { id: 0, x: 60, y: 80, r: 6, layer: "input" },
  { id: 1, x: 60, y: 160, r: 5, layer: "input" },
  { id: 2, x: 60, y: 240, r: 6, layer: "input" },
  { id: 3, x: 60, y: 320, r: 5, layer: "input" },
  { id: 4, x: 180, y: 60, r: 7, layer: "hidden1" },
  { id: 5, x: 180, y: 140, r: 8, layer: "hidden1" },
  { id: 6, x: 180, y: 220, r: 7, layer: "hidden1" },
  { id: 7, x: 180, y: 300, r: 6, layer: "hidden1" },
  { id: 8, x: 180, y: 370, r: 5, layer: "hidden1" },
  { id: 9, x: 300, y: 100, r: 8, layer: "hidden2" },
  { id: 10, x: 300, y: 200, r: 10, layer: "hidden2" },
  { id: 11, x: 300, y: 300, r: 8, layer: "hidden2" },
  { id: 12, x: 420, y: 140, r: 7, layer: "output" },
  { id: 13, x: 420, y: 240, r: 7, layer: "output" },
];

const CONNECTIONS = [
  [0,4],[0,5],[0,6],
  [1,4],[1,5],[1,6],[1,7],
  [2,5],[2,6],[2,7],[2,8],
  [3,6],[3,7],[3,8],
  [4,9],[4,10],
  [5,9],[5,10],[5,11],
  [6,9],[6,10],[6,11],
  [7,10],[7,11],
  [8,11],
  [9,12],[9,13],
  [10,12],[10,13],
  [11,12],[11,13],
];

function NeuralNetworkViz() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 480 }}>
      <div
        style={{
          position: "absolute",
          inset: "-40px",
          background: "radial-gradient(ellipse at center, rgba(16,185,129,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
        <defs>
          <linearGradient id="emeraldLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0099CC" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#0099CC" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0099CC" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGlowCyan">
            <stop offset="0%" stopColor="#0099CC" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0099CC" stopOpacity="0" />
          </radialGradient>
        </defs>

        {CONNECTIONS.map(([fromId, toId], i) => {
          const from = NODES[fromId];
          const to = NODES[toId];
          const useCyan = to.layer === "output" || from.layer === "hidden2";
          return (
            <g key={`conn-${i}`}>
              <motion.line
                x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                stroke={useCyan ? "url(#cyanLine)" : "url(#emeraldLine)"}
                strokeWidth={1.2}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.04 }}
              />
              <motion.circle
                r={2}
                fill={useCyan ? "#0099CC" : "#10B981"}
                initial={{ opacity: 0 }}
                animate={{
                  cx: [from.x, to.x],
                  cy: [from.y, to.y],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 1.8 + Math.random() * 1.2,
                  delay: 2 + i * 0.15 + Math.random() * 2,
                  repeat: Infinity,
                  repeatDelay: 3 + Math.random() * 4,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {NODES.map((node, i) => {
          const isCyan = node.layer === "output" || node.layer === "hidden2";
          const color = isCyan ? "#0099CC" : "#10B981";
          const glowId = isCyan ? "nodeGlowCyan" : "nodeGlow";
          return (
            <g key={`node-${node.id}`}>
              <motion.circle
                cx={node.x} cy={node.y} r={node.r * 3}
                fill={`url(#${glowId})`}
                opacity={0.15}
                animate={{ opacity: [0.1, 0.25, 0.1], r: [node.r * 2.5, node.r * 3.5, node.r * 2.5] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx={node.x} cy={node.y} r={node.r}
                fill="none"
                stroke={color}
                strokeWidth={1.5}
                strokeOpacity={0.4}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
              />
              <motion.circle
                cx={node.x} cy={node.y} r={node.r * 0.5}
                fill={color}
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{
                  scale: { duration: 2 + i * 0.2, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 2 + i * 0.2, repeat: Infinity, ease: "easeInOut" },
                  delay: 0.3 + i * 0.06,
                }}
              />
            </g>
          );
        })}

        <text x="60" y="405" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="'Satoshi', sans-serif" fontWeight="500" letterSpacing="0.08em">INPUT</text>
        <text x="180" y="405" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="'Satoshi', sans-serif" fontWeight="500" letterSpacing="0.08em">PROCESS</text>
        <text x="300" y="405" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="'Satoshi', sans-serif" fontWeight="500" letterSpacing="0.08em">REASON</text>
        <text x="420" y="405" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="'Satoshi', sans-serif" fontWeight="500" letterSpacing="0.08em">OUTPUT</text>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #10B981 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, hsl(var(--background)) 100%)",
        }}
      />

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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-36 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <NeuralNetworkViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
