import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Shield } from "lucide-react";

const metrics = [
  { value: "25+", label: "Years of Excellence" },
  { value: "100%", label: "Autonomous Workflows" },
  { value: "CBE", label: "Coimbatore-Based Engineering" },
];

const pillars = [
  {
    icon: Cpu,
    title: "Engineering-First",
    description:
      "Our Coimbatore R&D hub is dedicated to building Vertical SaaS that solves deep, industry-specific problems.",
  },
  {
    icon: Zap,
    title: "Zero-Friction",
    description:
      "Our platforms don\u2019t just \u201cadd features\u201d\u2014they remove manual bottlenecks entirely.",
  },
  {
    icon: Shield,
    title: "Future-Proof",
    description:
      "Built on a scalable AI-native chassis ready for the next evolution of HealthTech and FinTech.",
  },
];

export default function AboutSection() {
  return (
    <>
      {/* Institutional Trust */}
      <section id="about" className="py-24 lg:py-32 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#00C0FF" }}>
                 Institutional Trust
               </p>
              <h2
                className="font-unbounded text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                25 Years of Domain Mastery. Formed for the Future.
              </h2>
              <p className="font-jakarta" style={{ lineHeight: "1.7", color: "#9CB2D8" }}>
                While NuScript Technologies was founded in 2026 to lead India's autonomous revolution, our DNA spans over two decades. Our founding vision began in Health Information Management in 2000, building a legacy of 8 startups and 4 successful exits. We aren't just a new company; we are the culmination of a quarter-century of global healthcare expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-6">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <p
                    className="font-unbounded text-2xl font-bold text-primary mb-2"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {m.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-jakarta leading-snug">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why NuScript */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mb-14"
          >
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#00C0FF" }}>
              Why NuScript Technologies?
            </p>
            <h2
              className="font-unbounded text-3xl lg:text-4xl font-bold text-foreground leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Built different. By design.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <h3
                  className="font-unbounded text-base font-bold text-card-foreground mb-3"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm font-jakarta" style={{ lineHeight: "1.7", color: "#9CB2D8" }}>
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}