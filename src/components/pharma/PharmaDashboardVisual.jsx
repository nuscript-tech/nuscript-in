import React from "react";
import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, CheckCircle, Package } from "lucide-react";

const alerts = [
  { drug: "Paracetamol 500mg", action: "Reorder triggered", level: "ok", stock: "12 strips" },
  { drug: "Metformin 850mg", action: "Expiry in 14 days", level: "warn", stock: "48 units" },
  { drug: "Atorvastatin 10mg", action: "Demand surge +40%", level: "info", stock: "Restocking" },
  { drug: "Amoxicillin 250mg", action: "Optimal stock level", level: "ok", stock: "320 caps" },
];

const bars = [55, 70, 45, 90, 80, 60, 95, 85, 75, 88, 92, 78];

export default function PharmaDashboardVisual() {
  return (
    <div className="relative w-full max-w-lg ml-auto">
      <div className="absolute -inset-4 rounded-3xl opacity-15 blur-2xl" style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)" }} />

      <div className="relative rounded-2xl overflow-hidden border" style={{ background: "#050A14", borderColor: "rgba(0,191,255,0.25)" }}>
         {/* Header */}
         <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: "rgba(0,191,255,0.15)", background: "rgba(0,0,0,0.3)" }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs font-mono" style={{ color: "#64748B" }}>pharmastockai — inventory ops</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00BFFF" }} />
            <span className="text-xs" style={{ color: "#00BFFF" }}>Live</span>
          </div>
        </div>

        <div className="p-5 space-y-3">
          {/* Forecast chart */}
          <div className="rounded-xl p-3.5 border" style={{ background: "rgba(0,0,0,0.2)", borderColor: "rgba(0,191,255,0.15)" }}>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-semibold" style={{ color: "#7B8FA0" }}>Demand Forecast — Next 30d</span>
              <div className="flex items-center gap-1 text-xs" style={{ color: "#00BFFF" }}>
                <TrendingDown className="w-3 h-3" />
                Waste ↓ 6.2%
              </div>
            </div>
            <div className="flex items-end gap-1 h-12">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="flex-1 rounded-sm"
                   style={{ background: i > 8 ? "#00BFFF" : "rgba(0,191,255,0.3)" }}
                />
              ))}
            </div>
          </div>

          {/* Alert rows */}
          {alerts.map((a, i) => (
            <motion.div
              key={a.drug}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg border"
              style={{ background: "rgba(0,0,0,0.2)", borderColor: "rgba(255,255,255,0.05)" }}
            >
              {a.level === "warn"
                ? <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#F59E0B" }} />
                : a.level === "info"
                ? <Package className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#00BFFF" }} />
                : <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#10B981" }} />
              }
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium" style={{ color: "#7B8FA0" }}>{a.drug}</p>
                <p className="text-[10px]" style={{ color: "#64748B" }}>{a.action}</p>
              </div>
              <span className="text-[10px] font-mono" style={{ color: "#64748B" }}>{a.stock}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}