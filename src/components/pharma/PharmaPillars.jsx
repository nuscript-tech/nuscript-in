import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Gauge } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    number: "I",
    title: "Predictive Inventory & Zero Stockouts",
    subtitle: "Stop losing customers to missing stock.",
    description: "Our AI analyzes your specific sales velocity to ensure your fast-movers are always on the shelf.",
    features: [
      { name: "Dynamic Reordering", detail: "Automated procurement based on real-time consumption." },
      { name: "Safety Stock Alerts", detail: "Instant notifications before you hit critical lows." },
      { name: "Sales Velocity Mapping", detail: "Identifying your \"Hero Products\" to optimize capital allocation." },
    ],
  },
  {
    icon: ShieldCheck,
    number: "II",
    title: "Revenue Protection & Expiry Control",
    subtitle: "Indian pharmacies lose up to 5–8% of revenue to expired stock.",
    description: "We turn that loss into profit.",
    features: [
      { name: "Early Warning System", detail: "60/90-day alerts for aging inventory." },
      { name: "Batch-Level Tracking", detail: "Surgical precision for every unit in your store." },
      { name: "Smart Liquidations", detail: "Automated suggestions for \"Near-Expiry\" sales to clear stock before it's too late." },
    ],
  },
  {
    icon: Gauge,
    number: "III",
    title: "Operational Velocity",
    subtitle: "Remove the \"Manual\" from your management.",
    description: "Designed for the high-speed Indian retail environment.",
    features: [
      { name: "Intelligent Dashboard", detail: "Your entire business health in one view — from sales trends to vendor performance." },
      { name: "Seamless Integration", detail: "Works alongside your existing POS or as a standalone powerhouse." },
      { name: "Multi-Store Sync", detail: "Manage your entire chain from a single Coimbatore-engineered platform." },
    ],
  },
];

export default function PharmaPillars() {
  return (
    <section id="pillars" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: "#00BFFF" }}
          >
            Strategic Outcomes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-unbounded text-3xl lg:text-4xl font-bold leading-tight"
            style={{ color: "#F1F5F9" }}
          >
            Three pillars.{" "}
            <span style={{ color: "#10B981" }}>One platform.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative rounded-2xl p-8 border transition-all duration-500"
              style={{
                background: "rgba(16,185,129,0.04)",
                borderColor: "rgba(16,185,129,0.15)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(16,185,129,0.5)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(16,185,129,0.15), inset 0 0 40px rgba(16,185,129,0.04)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(16,185,129,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Glow orb */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" style={{ background: "#10B981" }} />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(16,185,129,0.12)" }}>
                  <pillar.icon className="w-5 h-5" style={{ color: "#10B981" }} />
                </div>
                <div>
                  <h3 className="font-unbounded font-bold text-base leading-snug" style={{ color: "#F1F5F9" }}>
                    {pillar.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "#D1D5DB" }}>
                <span style={{ color: "#D1D5DB" }}>{pillar.subtitle}</span>{" "}
                {pillar.description}
              </p>

              <ul className="space-y-4">
                {pillar.features.map((f) => (
                  <li key={f.name} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#10B981" }} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#CBD5E1" }}>{f.name}</p>
                      <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "#7B8FA0" }}>{f.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
