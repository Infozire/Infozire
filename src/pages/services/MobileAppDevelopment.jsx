import React from "react";
import "./MobileAppDevelopment.css";
// import mobileHero from "../assets/mobile-dev-hero.png"; 
// import uiShowcase from "../assets/mobile-ui-screens.png";
import mobileHero from "../../assets/mobilehero.jpg"; 
import uiShowcase from "../../assets/showCase.jpg";
import Navbar from "../Navbar";

const MobileAppDevelopment = () => {
  return (
      <><Navbar/>
    <div className="mobile-app-page">

      {/* 🔥 HERO SECTION */}
      <section className="mobile-hero">
        <div className="mobile-hero-content fade-in">
          <h1 className="mobile-hero-title slide-up">
            Custom Mobile Apps<br />That Elevate Your Business
          </h1>
          <p className="mobile-hero-sub slide-up" style={{ animationDelay: "0.2s" }}>
            Infozire builds Android, iOS, and hybrid mobile apps designed for performance,
            stunning UI/UX, and real business impact.
          </p>

          <div className="mobile-cta fade-in" style={{ animationDelay: "0.4s" }}>
            <button className="btn-primary">Get a Free Quote</button>
            <button className="btn-outline">View App Portfolio</button>
          </div>
        </div>

        <div className="mobile-hero-img fade-in" style={{ animationDelay: "0.6s" }}>
          <img src={mobileHero} alt="Mobile App UI" />
        </div>
      </section>

      {/* 🔥 OVERVIEW */}
      <section className="mobile-overview fade-in">
        <h2 className="slide-up">Build Apps That Users Love</h2>
        <p className="fade-in" style={{ animationDelay: "0.2s" }}>
          At Infozire, we design and develop mobile apps that are intuitive, scalable,
          and user-centric. From startups to enterprise apps, our solutions deliver high
          performance and seamless experience.
        </p>

        <div className="mobile-highlights">
          {["Native Android & iOS", "Hybrid (Flutter / React Native)", "Scalable Architecture", "Stunning UI/UX"].map((item, index) => (
            <div
              key={index}
              className="highlight-box slide-up"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 FEATURE GRID */}
      <section className="mobile-features slide-up">
        <h2>Features & Benefits</h2>

        <div className="feature-grid">
          {[
            "Native Android & iOS Apps",
            "Hybrid Cross-Platform Apps",
            "Custom App UI/UX Design",
            "Secure Backend Integrations",
            "Push Notifications + Analytics",
            "High-Performance Architecture"
          ].map((feature, index) => (
            <div
              key={index}
              className="feature-card slide-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 INDUSTRY SHOWCASE */}
      <section className="industry-section fade-in">
        <h2>Industries We Build Apps For</h2>

        <div className="industry-grid">
          {["E-Commerce & Retail", "Healthcare & Fitness", "Education & Learning", "Real Estate", "Logistics & Delivery", "Finance & Banking"].map((industry, index) => (
            <div
              key={index}
              className="industry-card slide-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 PROCESS SECTION */}
      <section className="process-section slide-up">
        <h2>Our App Development Process</h2>

        <div className="process-timeline">
          {["Requirement Analysis", "Wireframing & Planning", "UI/UX Design", "App Development", "Testing & QA", "Deployment", "Maintenance & Updates"].map((step, index) => (
            <div
              key={index}
              className="step slide-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 UI SHOWCASE */}
      <section className="ui-showcase parallax fade-in" style={{ animationDelay: "0.3s" }}>
        <img src={uiShowcase} alt="App UI Mockups" />
      </section>

      {/* 🔥 CTA SECTION */}
      <section className="mobile-cta-final fade-in" style={{ animationDelay: "0.2s" }}>
        <h2>Ready to launch your mobile app?</h2>
        <p>Let Infozire build a high-performing mobile app for your business.</p>
        <button className="btn-primary-large">Contact Us Today</button>
      </section>

    </div>
    </>
  );
};

export default MobileAppDevelopment;
