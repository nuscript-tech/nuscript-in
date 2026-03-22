import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import PharmaStockAI from './pages/PharmaStockAI';
import MedScribeAI from './pages/MedScribeAI';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Navigate to="/" replace />} />
        <Route path="/pharmastockai" element={<PharmaStockAI />} />
        <Route path="/nuscriptai" element={<MedScribeAI />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;
