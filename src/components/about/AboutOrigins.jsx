import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Rocket } from "lucide-react";

const timeline = [
  { year: "2000", label: "The Genesis", detail: "Our founder enters the HIM/RCM sector, laying the groundwork for two decades of global documentation standards.", icon: Lightbulb },
  { year: "2000–2025", label: "A Legacy of Scale", detail: "Building 8 health-tech ventures and achieving 4 successful exits in the US and Indian markets.", icon: TrendingUp },
  { year: "2026", label: "NuScript Tech is Born", detail: "A specialized hub in Coimbatore dedicated to replacing manual bottlenecks with autonomous AI for MTSOs and Pharmacies.", icon: Rocket },
];

export default function AboutOrigins() {
  return (
    <section id="origins" className="py-24 lg:py-32 border-t" style={{ borderColor: "rgba(96,165,250,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{ color: "#60A5FA" }}
            >
              Our Origins
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-unbounded text-3xl lg:text-4xl font-bold leading-tight mb-6"
              style={{ color: "#F1F5F9" }}
            >
              25 Years of{" "}
              <span className="gradient-text">Domain Mastery.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-sm leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              <p>
                NuScript Technologies wasn't built in a vacuum. Our foundation lies in over two decades of excellence in <strong style={{ color: "#E2E8F0" }}>Health Information Management (HIM)</strong> and <strong style={{ color: "#E2E8F0" }}>Revenue Cycle Management (RCM)</strong> for the US market.
              </p>
              <p>
                We've spent 25+ years mastering the "Truth of the Document" — ensuring that every clinical note is a masterpiece of accuracy and compliance.
              </p>
              <p>
                In 2026, we brought that same obsession with precision to the Indian domestic market. Whether it's empowering Indian MTSOs to serve global clients or helping local pharmacies manage life-saving inventory, we build technology that <strong style={{ color: "#E2E8F0" }}>works when it matters most.</strong>
              </p>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: "rgba(96,165,250,0.2)" }} />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 pl-12 relative"
                >
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(96,165,250,0.15)", border: "1px solid rgba(96,165,250,0.3)" }}>
                    <item.icon className="w-4 h-4" style={{ color: "#60A5FA" }} />
                  </div>
                  <div>
                    <p className="font-unbounded font-bold text-sm mb-1" style={{ color: "#0BDA51" }}>{item.year} — {item.label}</p>
                    <p className="text-sm" style={{ color: "#94A3B8" }}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}