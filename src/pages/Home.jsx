import SEO from '@/components/SEO';
import Navbar from '@/components/website/Navbar';
import Hero from '@/components/website/Hero';
import Approach from '@/components/website/Approach';
import Products from '@/components/website/Products';
import WhyItWorks from '@/components/website/WhyItWorks';
import TalkToUs from '@/components/website/TalkToUs';
import Footer from '@/components/website/Footer';
import ScrollToTopButton from '@/components/website/ScrollToTopButton';
import ScrollProgressBar from '@/components/website/ScrollProgressBar';

/*
 * Home — the landing page composition.
 *
 * Six sections in deck-flow order:
 *
 *   1. Hero        (dark, slide-26 close-slide aesthetic)
 *   2. Approach    (light, deck slide 2 thesis pattern)
 *   3. Products    (light, deck slide 5 portfolio pattern)
 *   4. WhyItWorks  (light, deck slide 3 + 13 combined)
 *   5. TalkToUs    (light, deck slide 25 ask)
 *   6. Footer      (light, structural)
 *
 * The hero → approach transition is a hard cut, no gradient fade. The deck
 * does the same thing between slide 1 and slide 2 — it reads as deliberate
 * because the brand colors carry across the seam.
 *
 * The Navbar receives `transparent={true}` so it stays transparent over
 * the dark hero and turns opaque (paper-2 background, ink text) once the
 * user scrolls 80px past the top of the page.
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <SEO page="home" />
      <ScrollProgressBar />
      <Navbar transparent />
      <main>
        <Hero />
        <Approach />
        <Products />
        <WhyItWorks />
        <TalkToUs />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
