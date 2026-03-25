import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactFounder() {
  return (
    <section className="py-16 lg:py-20 border-t" style={{ borderColor: "rgba(14,165,233,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-8 lg:p-12 border relative overflow-hidden"
          style={{ background: "rgba(2,132,199,0.04)", borderColor: "rgba(2,132,199,0.12)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #0EA5E9, transparent)" }} />

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#0284C7" }}>
                Founder's Direct
              </p>
              <h3 className="font-unbounded text-xl lg:text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>
                "We value deep partnerships over vendor contracts."
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                If you are a large-scale distributor or an MTSO processing over <strong style={{ color: "#1E293B" }}>1 million lines monthly</strong>, reach out directly to discuss enterprise-grade integration and custom workflows.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:arvind.manohar@nuscript.in"
                className="group flex items-center gap-4 px-6 py-5 rounded-xl border transition-all duration-300 hover:border-opacity-60"
                style={{ background: "#F8FAFC", borderColor: "rgba(2,132,199,0.15)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(2,132,199,0.10)" }}>
                  <Mail className="w-5 h-5" style={{ color: "#0284C7" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#0284C7" }}>Founder's Office</p>
                  <p className="text-sm font-medium" style={{ color: "#1E293B" }}>arvind.manohar@nuscript.in</p>
                  <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>Enterprise & strategic discussions only</p>
                </div>
              </a>
              <div className="px-6 py-4 rounded-xl" style={{ background: "rgba(2,132,199,0.05)", border: "1px solid rgba(2,132,199,0.08)" }}>
                <p className="text-xs" style={{ color: "#94A3B8" }}>
                  Looking for our US Operations? Visit{" "}
                  <a
                    href="https://nuscripthealth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                    style={{ color: "#0284C7" }}
                  >
                    NuScript Health
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}