import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, FileText, Mic, Zap } from "lucide-react";

const jobs = [
  { id: "JOB-4821", provider: "Dr. Sarah M.", specialty: "Cardiology", status: "complete", time: "0.4s" },
  { id: "JOB-4822", provider: "Dr. Ramesh P.", specialty: "Orthopedics", status: "processing", time: "—" },
  { id: "JOB-4820", provider: "Dr. Liu W.", specialty: "Neurology", status: "complete", time: "0.6s" },
  { id: "JOB-4819", provider: "Dr. Patel A.", specialty: "Pediatrics", status: "complete", time: "0.3s" },
];

export default function NuScriptDashboardVisual() {
  return (
    <div className="relative w-full max-w-lg ml-auto">
      <div className="absolute -inset-4 rounded-3xl opacity-15 blur-2xl" style={{ background: "linear-gradient(135deg, #0BDA51, #0EA5E9)" }} />

      <div className="relative rounded-2xl overflow-hidden border" style={{ background: "#0A1628", borderColor: "rgba(11,218,81,0.25)" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: "rgba(11,218,81,0.15)", background: "rgba(0,0,0,0.3)" }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs font-mono" style={{ color: "#475569" }}>medscribeai — transcription queue</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#0BDA51" }} />
            <span className="text-xs" style={{ color: "#0BDA51" }}>Live</span>
          </div>
        </div>

        <div className="p-5 space-y-3">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: "Processed Today", value: "2,847", color: "#0BDA51" },
              { label: "Avg. Turnaround", value: "0.4s", color: "#0EA5E9" },
              { label: "Accuracy Rate", value: "99.4%", color: "#8B5CF6" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg p-3 border text-center" style={{ background: "rgba(0,0,0,0.2)", borderColor: "rgba(255,255,255,0.06)" }}>
                <p className="font-unbounded font-bold text-sm" style={{ color: s.color }}>{s.value}</p>
                <p className="text-[10px] mt-0.5 leading-tight" style={{ color: "#475569" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Job rows */}
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg border"
              style={{ background: "rgba(0,0,0,0.2)", borderColor: "rgba(255,255,255,0.05)" }}
            >
              {job.status === "complete"
                ? <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0BDA51" }} />
                : <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}>
                    <Zap className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                  </motion.div>
              }
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono" style={{ color: "#94A3B8" }}>{job.id}</p>
                <p className="text-[10px]" style={{ color: "#475569" }}>{job.provider} · {job.specialty}</p>
              </div>
              <span className="text-xs font-mono" style={{ color: job.status === "complete" ? "#0BDA51" : "#0EA5E9" }}>{job.time}</span>
            </motion.div>
          ))}

          {/* Footer */}
          <div className="flex items-center gap-2 pt-1">
            <Mic className="w-3 h-3" style={{ color: "#0BDA51" }} />
            <span className="text-[10px]" style={{ color: "#475569" }}>Voice → Structured Report · Zero Manual Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}