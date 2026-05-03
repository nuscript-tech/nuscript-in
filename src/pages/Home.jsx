import SEO from "@/components/SEO";
import Navbar from "@/components/website/Navbar";
import Hero from "@/components/website/Hero";
import Products from "@/components/website/Products";
import About from "@/components/website/About";
import WhyUs from "@/components/website/WhyUs";
import CTA from "@/components/website/CTA";
import Footer from "@/components/website/Footer";
import ScrollToTopButton from "@/components/website/ScrollToTopButton";
import ScrollProgressBar from "@/components/website/ScrollProgressBar";

export default function Home() {
  return (
    <div className="font-jakarta bg-background text-foreground min-h-screen">
      <SEO page="home" />
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <Products />
      <About />
      <WhyUs />
      <CTA />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
