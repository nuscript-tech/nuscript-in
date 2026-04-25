import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const NODES = [
  { id: "core", x: 50, y: 50, r: 22, label: "AI Core", color: "#10B981", pulse: true },
  { id: "n1", x: 18, y: 22, r: 12, label: "NuScriptAI", color: "#10B981" },
  { id: "n2", x: 82, y: 22, r: 12, label: "PharmaStockAI", color: "#10B981" },
  { id: "n3", x: 15, y: 72, r: 10, label: "Voice Engine", color: "#6EE7B7" },
  { id: "n4", x: 85, y: 72, r: 10, label: "Demand AI", color: "#34D399" },
  { id: "n5", x: 50, y: 88, r: 9, label: "Analytics", color: "#10B981" },
  { id: "n6", x: 50, y: 12, r: 9, label: "Data Layer", color: "#A3E635" },
];

const EDGES = [
  ["core", "n1"], ["core", "n2"], ["core", "n3"],
  ["core", "n4"], ["core", "n5"], ["core", "n6"],
  ["n1", "n3"], ["n2", "n4"],
];

function getNode(id) {
  return NODES.find((n) => n.id === id);
}

const PACKETS = [
  { edge: ["core", "n1"], delay: 0 },
  { edge: ["core", "n2"], delay: 0.6 },
  { edge: ["core", "n3"], delay: 1.2 },
  { edge: ["core", "n4"], delay: 1.8 },
  { edge: ["core", "n5"], delay: 2.4 },
  { edge: ["core", "n6"], delay: 0.9 },
  { edge: ["n1", "n3"], delay: 1.5 },
  { edge: ["n2", "n4"], delay: 2.1 },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg ml-auto select-none">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.5) 0%, rgba(16,185,129,0.2) 50%, transparent 80%)" }}
      />

      <div
        className="relative rounded-2xl border overflow-hidden"
        style={{ background: "rgba(10,20,35,0.85)", borderColor: "rgba(16,185,129,0.2)", backdropFilter: "blur(12px)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3 border-b"
          style={{ borderColor: "rgba(16,185,129,0.15)", background: "rgba(0,0,0,0.3)" }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs font-mono" style={{ color: "#34D399" }}>
            nuscript · AI Neural Graph
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono" style={{ color: "#6EE7B7" }}>LIVE</span>
          </div>
        </div>

        {/* Neural graph SVG */}
        <div className="p-4">
          <svg
            viewBox="0 0 100 100"
            className="w-full"
            style={{ height: "260px" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#05A050" stopOpacity="0.6" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Edges */}
            {EDGES.map(([aId, bId], i) => {
              const a = getNode(aId);
              const b = getNode(bId);
              return (
                <line
                  key={i}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke="rgba(16,185,129,0.18)"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
              );
            })}

            {/* Animated packets */}
            {PACKETS.map((p, i) => {
              const a = getNode(p.edge[0]);
              const b = getNode(p.edge[1]);
              return (
                <motion.circle
                  key={i}
                  r="1"
                  fill="#10B981"
                  filter="url(#glow)"
                  initial={{ cx: a.x, cy: a.y, opacity: 0 }}
                  animate={{
                    cx: [a.x, b.x, a.x],
                    cy: [a.y, b.y, a.y],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2.4,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            })}

            {/* Nodes */}
            {NODES.map((node) => (
              <g key={node.id}>
                {/* Pulse ring for core */}
                {node.pulse && (
                  <motion.circle
                    cx={node.x} cy={node.y} r={node.r + 4}
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="0.5"
                    initial={{ opacity: 0.6, r: node.r + 2 }}
                    animate={{ opacity: 0, r: node.r + 10 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <circle
                  cx={node.x} cy={node.y} r={node.r}
                  fill={node.id === "core" ? "url(#coreGrad)" : `${node.color}22`}
                  stroke={node.color}
                  strokeWidth={node.id === "core" ? "1.2" : "0.7"}
                  filter={node.id === "core" ? "url(#glow)" : undefined}
                />
                <text
                  x={node.x} y={node.y + (node.id === "core" ? 1 : 0.5)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={node.id === "core" ? "4.5" : "3.2"}
                  fill={node.id === "core" ? "#0F172A" : node.color}
                  fontWeight={node.id === "core" ? "700" : "600"}
                  fontFamily="monospace"
                >
                  {node.id === "core" ? "AI" : node.label.split(" ")[0]}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Bottom stats bar */}
        <div
          className="grid grid-cols-3 divide-x border-t"
          style={{ borderColor: "rgba(16,185,129,0.15)", divideColor: "rgba(16,185,129,0.1)" }}
        >
          {[
            { label: "Accuracy", value: "99.4%", color: "#10B981" },
            { label: "Uptime", value: "99.99%", color: "#10B981" },
            { label: "TAT", value: "< 2 min", color: "#6EE7B7" },
          ].map((s) => (
            <div key={s.label} className="px-4 py-3 text-center" style={{ borderColor: "rgba(16,185,129,0.12)" }}>
              <p className="text-xs font-bold font-mono" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs mt-0.5" style={{ color: "#4A6A6A" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
