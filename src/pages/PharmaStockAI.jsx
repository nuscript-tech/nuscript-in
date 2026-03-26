import React, { useEffect } from "react";
import PageMeta from "@/components/PageMeta";
import PharmaHero from "@/components/pharma/PharmaHero";
import PharmaPillars from "@/components/pharma/PharmaPillars";
import PharmaWhyNow from "@/components/pharma/PharmaWhyNow";
import PharmaBeforeAfter from "@/components/pharma/PharmaBeforeAfter";
import PharmaTechSpecs from "@/components/pharma/PharmaTechSpecs";
import PharmaFeatureSummary from "@/components/pharma/PharmaFeatureSummary";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function PharmaStockAI() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen" style={{ background: "#04142F", color: "#C8D8F0", fontFamily: "var(--font-jakarta)" }}>
      <PageMeta
        title="PharmaStockAI | Predictive Inventory for Indian Pharmacies"
        description="The intelligent inventory engine for Indian retail and distribution. End stockouts, eliminate expiry waste, and automate procurement with PharmaStockAI. Engineered for the Indian market."
      />
      <Navbar />
      <PharmaHero />
      <PharmaPillars />
      <PharmaBeforeAfter />
      <PharmaWhyNow />
      <PharmaTechSpecs />
      <Footer />
    </div>
  );
}