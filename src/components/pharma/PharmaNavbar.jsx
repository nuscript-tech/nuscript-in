import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PharmaNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: "rgba(5,10,20,0.85)", borderColor: "rgba(0,192,255,0.15)", backdropFilter: "blur(16px)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mr-4" style={{ color: "#4678CD" }}>
            <ArrowLeft className="w-4 h-4" />
            NuScript
          </Link>
          <div className="w-px h-5 bg-white/10" />
          <span className="font-unbounded font-bold text-sm tracking-tight" style={{ color: "#00C0FF" }}>
            PharmaStock<span style={{ color: "#C8D8F0" }}>AI</span>
          </span>
        </div>
        <a
          href="#contact"
          className="text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-300"
          style={{ background: "#00C0FF", color: "#fff" }}
        >
          Get Intelligence Report
        </a>
      </div>
    </nav>
  );
}