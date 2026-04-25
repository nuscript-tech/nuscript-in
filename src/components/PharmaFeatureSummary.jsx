import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, AlertTriangle, BarChart2, Store, ArrowUpRight, Shield } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Autonomous Procurement",
    description: 'AI-driven reordering that learns your sales velocity to ensure your "Hero Products" never go out of stock.',
  },
  {
    icon: AlertTriangle,
    title: "Expiry Liquidation Engine",
    description: "Advanced 60/90-day early warning systems that suggest smart discounts to clear aging inventory before it becomes a loss.",
  },
  {
    icon: BarChart2,
    title: "Hyper-Local Analytics",
    description: "Track sales trends specific to your neighborhood or region to optimize high-margin stock allocation.",
  },
  {
    icon: Store,
    title: "Multi-Store Synchronization",
    description: "Manage inventory, transfers, and vendor performance across your entire retail chain from a single Coimbatore-engineered hub.",
  },
];

export default function PharmaFeatureSummary() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#2DD4BF" }}>Feature Summary</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-3">
            Predictive Intelligence for the Modern Pharmacy
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl p-6 border border-border"
              style={{ background: "rgba(17,40,54,0.6)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(45,212,191,0.12)" }}>
                <f.icon className="w-5 h-5" style={{ color: "#2DD4BF" }} />
              </div>
              <p className="font-body font-semibold text-sm text-foreground mb-2">{f.title}</p>
              <p className="font-body font-normal text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{f.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl p-6 border border-border"
          style={{ background: "rgba(17,40,54,0.4)" }}
        >
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 flex-shrink-0" style={{ color: "#2DD4BF" }} />
            <p className="text-xs font-body" style={{ color: "#64748B" }}>
              Precision Inventory for the Foundations of India. Built on a decade of deep expertise in pharma and diagnostics.
            </p>
          </div>
          <a
            href="https://pharmastock.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 border text-center"
            style={{ borderColor: "#2DD4BF", color: "#2DD4BF", background: "transparent" }}
          >
            Explore the Full Inventory Platform at pharmastock.co.in
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
