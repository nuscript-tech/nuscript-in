import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function ContactFooterBar() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t py-8"
      style={{ borderColor: "rgba(96,165,250,0.1)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs" style={{ color: "#475569" }}>
          Looking for our US Operations? Visit{" "}
          <a
            href="https://nuscripthealth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            style={{ color: "#60A5FA" }}
          >
            NuScript Health
          </a>.
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/company/nuscripthealth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs transition-opacity hover:opacity-80"
            style={{ color: "#64748B" }}
          >
            <Linkedin className="w-4 h-4" style={{ color: "#60A5FA" }} />
            LinkedIn
          </a>
        </div>
      </div>
    </motion.footer>
  );
}