import React, { useEffect } from "react";
import PageMeta from "@/components/PageMeta";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutOrigins from "@/components/about/AboutOrigins";
import AboutPillars from "@/components/about/AboutPillars";
import AboutFounder from "@/components/about/AboutFounder";
import AboutCoimbatore from "@/components/about/AboutCoimbatore";
import AboutWay from "@/components/about/AboutWay";

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen" style={{ background: "#04142F", color: "#C8D8F0", fontFamily: "var(--font-jakarta)" }}>
      <PageMeta
        title="About NuScript Technologies | 25 Years of Domain Excellence"
        description="From US healthcare standards to Indian domestic innovation. Meet the team in Coimbatore building the next generation of HealthTech, FinTech, and Pharmaceutical infrastructure."
      />
      <Navbar />
      <AboutHero />
      <AboutOrigins />
      <AboutPillars />
      <AboutFounder />
      <AboutCoimbatore />
      <AboutWay />
      <Footer />
    </div>
  );
}