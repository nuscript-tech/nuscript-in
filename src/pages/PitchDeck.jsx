import { useState, useEffect, useCallback } from "react";
import SlideNavigation from "@/components/slides/SlideNavigation";
import SlideWrapper from "@/components/slides/SlideWrapper";
import Slide0Cover from "@/components/slides/Slide0Cover";
import SlideThesis from "@/components/slides/SlideThesis";
import Slide1Founder from "@/components/slides/Slide1Founder";
import SlideFoundation from "@/components/slides/SlideFoundation";
import SlidePortfolio from "@/components/slides/SlidePortfolio";
import Slide2MedScribe from "@/components/slides/Slide2MedScribe";
import SlideBuyersCase from "@/components/slides/SlideBuyersCase";
import SlideMedScribePricing from "@/components/slides/SlideMedScribePricing";
import SlideMedScribeMarket from "@/components/slides/SlideMedScribeMarket";
import Slide4Pharma from "@/components/slides/Slide4Pharma";
import SlidePharmaPricing from "@/components/slides/SlidePharmaPricing";
import SlidePharmaMarket from "@/components/slides/SlidePharmaMarket";
import SlideWhyGlobal from "@/components/slides/SlideWhyGlobal";
import SlideZeraProduct from "@/components/slides/SlideZeraProduct";
import SlideZeraPipeline from "@/components/slides/SlideZeraPipeline";
import SlideZeraMarket from "@/components/slides/SlideZeraMarket";
import SlideZeraCompetitive from "@/components/slides/SlideZeraCompetitive";
import SlideStructure from "@/components/slides/SlideStructure";
import SlideValuationThesis from "@/components/slides/SlideValuationThesis";
import SlideCapitalStrategy from "@/components/slides/SlideCapitalStrategy";
import SlideUseOfFunds from "@/components/slides/SlideUseOfFunds";
import SlideRoadmap from "@/components/slides/SlideRoadmap";
import SlideProjections from "@/components/slides/SlideProjections";
import SlideTeam from "@/components/slides/SlideTeam";
import SlideClose from "@/components/slides/SlideClose";

const SLIDES = [
  Slide0Cover,
  SlideThesis,
  Slide1Founder,
  SlideFoundation,
  SlidePortfolio,
  Slide2MedScribe,
  SlideBuyersCase,
  SlideMedScribePricing,
  SlideMedScribeMarket,
  Slide4Pharma,
  SlidePharmaPricing,
  SlidePharmaMarket,
  SlideWhyGlobal,
  SlideZeraProduct,
  SlideZeraPipeline,
  SlideZeraMarket,
  SlideZeraCompetitive,
  SlideStructure,
  SlideValuationThesis,
  SlideCapitalStrategy,
  SlideUseOfFunds,
  SlideRoadmap,
  SlideProjections,
  SlideTeam,
  SlideClose,
];

export default function PitchDeck() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    if (current < SLIDES.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    }
  }, [current]);

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  }, [current]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const CurrentSlide = SLIDES[current];

  return (
    <div className="relative min-h-screen bg-background font-jakarta overflow-hidden">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/4 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/2 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(158,64%,48%) 1px, transparent 1px), linear-gradient(90deg, hsl(158,64%,48%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-3 border-b border-white/5 bg-background/60 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <img
            src="/nuscript-logo.png"
            alt="NuScript Technologies"
            className="h-11 w-auto object-contain"
          />
          <span className="hidden sm:inline text-xs text-muted-foreground border border-white/10 rounded px-2 py-0.5">
            SBC Sprint2Frontier Acceleration Program 2026
          </span>
        </div>
        <span className="text-xs font-medium text-muted-foreground hidden sm:block">
          Arvind Manohar · Founder & CEO
        </span>
      </div>

      <SlideWrapper slideKey={current} direction={direction}>
        <CurrentSlide />
      </SlideWrapper>

      <SlideNavigation
        current={current}
        total={SLIDES.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
}
