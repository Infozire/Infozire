import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop.jsx";
import Layout from "./pages/Layout.jsx";

// Pages
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
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment.jsx";
import AIAndAutomation from "./pages/services/AIAndAutomation.jsx";
import UIUXPage from "./pages/services/UIUXPage.jsx";
import MaintenanceSupport from "./pages/services/MaintenanceSupport.jsx";
import GraphicDesign from "./pages/services/GraphicDesign.jsx";
import VideoEditing from "./pages/services/VedioEditing.jsx";
import EcommerceDevelopment from "./pages/services/EcommerceDevelopment.jsx";
import ITConsulting from "./pages/services/ITConsulting.jsx";
import APIDevelopment from "./pages/services/APIDevelopment.jsx";
import TestingQA from "./pages/services/TestingQA.jsx";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/features" element={<Layout><Features /></Layout>} />
        <Route path="/blog" element={<Layout><Blogs /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/hero" element={<Layout><HeroSection /></Layout>} />
        <Route path="/services/software-web-development" element={<Layout><SoftwareDevelopment /></Layout>} />
        <Route path="/services/website-development" element={<Layout><WebsiteDevelopment /></Layout>} />
        <Route path="/services/mobile-app-development" element={<Layout><MobileAppDevelopment /></Layout>} />
        <Route path="/services/cloud-devops" element={<Layout><CloudSolutions /></Layout>} />
        <Route path="/services/digital-branding" element={<Layout><DigitalMarketing /></Layout>} />
        <Route path="/services/ai-solutions" element={<Layout><AISolutions /></Layout>} />
        <Route path="/services/ai-automation" element={<Layout><AIAndAutomation /></Layout>} />
        <Route path="/services/ui-ux-design" element={<Layout><UIUXPage /></Layout>} />
        <Route path="/services/maintenance-support" element={<Layout><MaintenanceSupport /></Layout>} />
        <Route path="/services/graphic-design" element={<Layout><GraphicDesign /></Layout>} />
        <Route path="/services/video-editing" element={<Layout><VideoEditing /></Layout>} />
        <Route path="/services/ecommerce-development" element={<Layout><EcommerceDevelopment /></Layout>} />
        <Route path="/services/it-consulting" element={<Layout><ITConsulting /></Layout>} />
        <Route path="/services/api-development" element={<Layout><APIDevelopment /></Layout>} />
        <Route path="/services/testing-qa" element={<Layout><TestingQA /></Layout>} />
      </Routes>
    </Router>
  );
}
