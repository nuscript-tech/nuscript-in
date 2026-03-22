import React from "react";
import PageMeta from "../components/PageMeta";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ProductsSection from "../components/landing/ProductsSection";
import AboutSection from "../components/landing/AboutSection";
import TrustStrip from "../components/landing/TrustStrip";
import DualPathCTA from "../components/landing/DualPathCTA";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-grotesk">
      <PageMeta
        title="NuScript Technologies | Intelligence for the Foundations of India"
        description="The autonomous intelligence layer for India's essential sectors. Powering high-performance MTSO documentation and predictive pharmacy inventory from our Coimbatore engineering hub."
      />
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <DualPathCTA />
      <Footer />
    </div>
  );
}