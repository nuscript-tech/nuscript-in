import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import MedScribeAI from './pages/MedScribeAI';
import PharmaStockAI from './pages/PharmaStockAI';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import PitchDeck from './pages/PitchDeck';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medscribeai" element={<MedScribeAI />} />
        <Route path="/pharmastockai" element={<PharmaStockAI />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/pitchdeck" element={<PitchDeck />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
