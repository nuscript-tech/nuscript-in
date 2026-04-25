import React, { useEffect } from "react";
import PageMeta from "@/components/PageMeta";
import Navbar from "@/components/landing/Navbar";
import NuScriptHero from "@/components/nuscript/NuScriptHero";
import NuScriptWorkflow from "@/components/nuscript/NuScriptWorkflow";
import NuScriptTransformation from "@/components/nuscript/NuScriptTransformation";
import NuScriptComparison from "@/components/nuscript/NuScriptComparison";
import NuScriptTechSpecs from "@/components/nuscript/NuScriptTechSpecs";
import Footer from "@/components/landing/Footer";

export default function MedScribeAI() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen" style={{ background: "#060D1A", color: "#E2E8F0", fontFamily: "var(--font-body)" }}>
      <PageMeta
        title="MedScribeAI | Autonomous Transcription & Scribing for Indian MTSOs"
        description="Eliminate manual transcription. MedScribeAI provides 99%+ accurate, high-speed dictation-to-report automation for Indian MTSOs serving the US healthcare market. Scale without hiring."
      />
      <Navbar />
      <NuScriptHero />
      <NuScriptWorkflow />
      <NuScriptTransformation />
      <NuScriptComparison />
      <NuScriptTechSpecs />
      <Footer />
    </div>
  );
}
