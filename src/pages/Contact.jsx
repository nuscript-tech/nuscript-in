import React, { useEffect } from "react";
import PageMeta from "@/components/PageMeta";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactMain from "@/components/contact/ContactMain";
import ContactFounder from "@/components/contact/ContactFounder";
import ContactFooterBar from "@/components/contact/ContactFooterBar";

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen" style={{ background: "#060D1A", color: "#E2E8F0", fontFamily: "var(--font-body)" }}>
      <PageMeta
        title="Contact NuScript Technologies | Partner with our Coimbatore Hub"
        description="Ready to move from manual to autonomous? Contact our engineering team at Tristar Towers, Coimbatore, to discuss NuScriptAI and PharmaStockAI integrations."
      />
      <Navbar />
      <ContactHero />
      <ContactMain />
      <ContactFounder />
      <ContactFooterBar />
      <Footer />
    </div>
  );
}
