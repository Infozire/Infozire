import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/services";
import Features from "./pages/features";
import Blogs from "./pages/Blogs";
import HeroSection from "./pages/HeroSection";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import CloudSolutions from "./pages/services/CloudSolutions";
import DigitalMarketing from "./pages/services/DigitalMarketing.jsx";
import AISolutions from "./pages/services/AISolutions.jsx";
import AIServicesPage from './pages/AIServicesPage.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hero" element={<HeroSection />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/ai-solutions" element={<AISolutions />} />
        <Route path="/ai-services" element={<AIServicesPage />} />


      </Routes>
    </Router>
  );
}
