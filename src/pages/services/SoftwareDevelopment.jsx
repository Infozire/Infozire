import React from "react";
import heroImg from "../../assets/software-hero.jpg"; // Hero image
import portfolio1 from "../../assets/software1.jpg"; // Portfolio image
import "./SoftwareDevelopment.css"
import Navbar from "../Navbar";
const SoftwareDevelopment = () => {
  return (
    <><Navbar/>
    <div className="software-page">

      {/* HERO */}
      <section className="software-hero">
        <div className="software-hero-text">
          <h1>Tailored Software Solutions to Power Your Business</h1>
          <p className="software-hero-sub">
            Infozire delivers custom software solutions designed to streamline operations, improve efficiency, and support your business growth. From CRM and ERP systems to SaaS products, we build solutions that fit your unique needs.
          </p>
          <div className="software-cta">
            <button className="btn-primary">Get a Free Quote</button>
            <button className="btn-outline">Explore Our Solutions</button>
          </div>
        </div>
        <div className="software-hero-img">
          <img src={heroImg} alt="Software Hero" />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="software-overview">
        <p>
          Every business is unique, and so should be its software. At Infozire, we develop custom applications and tools that automate processes, enhance productivity, and solve real business challenges. Our solutions are scalable, secure, and aligned with your long-term goals.
        </p>
        <div className="software-highlights">
          <div className="highlight-box">Custom CRM, ERP, and SaaS applications</div>
          <div className="highlight-box">Secure backend systems and APIs</div>
          <div className="highlight-box">Business dashboards and reporting tools</div>
          <div className="highlight-box">Inventory and billing systems</div>
          <div className="highlight-box">Integration with existing tools and cloud services</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="software-features">
        <h2>Core Features</h2>
        <div className="features-grid">
          <div className="feature-card">Tailor-made solutions for your business requirements</div>
          <div className="feature-card">Scalable architecture to grow with your business</div>
          <div className="feature-card">Secure and robust backend systems</div>
          <div className="feature-card">Dashboard and analytics for data-driven decisions</div>
          <div className="feature-card">Integration with APIs, payment gateways, and third-party services</div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="software-industries">
        <h2>Industries We Serve</h2>
        <div className="software-industries">
          <div className="industry-card">E-commerce & Retail</div>
          <div className="industry-card">Healthcare & Fitness</div>
          <div className="industry-card">Education & Learning</div>
          <div className="industry-card">Real Estate</div>
          <div className="industry-card">Logistics & Supply Chain</div>
          <div className="industry-card">Finance & Banking</div>
          <div className="industry-card">Startups & SMEs</div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="software-process">
        <h2>Our Development Process</h2>
        <div className="process-step">Requirement Gathering – Analyze business needs and objectives</div>
        <div className="process-step">Planning & Wireframing – Define system architecture and workflows</div>
        <div className="process-step">Design & Prototyping – User interface and experience design</div>
        <div className="process-step">Software Development – Backend and frontend coding</div>
        <div className="process-step">Testing & Quality Assurance – Security, performance, and usability checks</div>
        <div className="process-step">Deployment & Launch – Live deployment and training if needed</div>
        <div className="process-step">Ongoing Support – Updates, bug fixes, and feature enhancements</div>
      </section>

      {/* PORTFOLIO */}
      <section className="software-portfolio">
        <h2>Portfolio Highlights</h2>
        <div className="portfolio-card">
          <img src={portfolio1} alt="Portfolio project" />
          <div className="portfolio-text">
            <h3>ERP System for XYZ Company</h3>
            <p>Challenge: Streamline operations and automate reporting</p>
            <p>Solution: Custom ERP with inventory, billing, and analytics dashboard</p>
            <p>Result: 40% reduction in manual processes and 30% faster reporting</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="software-testimonials">
        <p>“Infozire delivered a custom software solution perfectly aligned with our business needs. The team was professional, proactive, and highly skilled.” – Client Name</p>
      </section>

      {/* CTA */}
      <section className="software-cta">
        <h2>Ready to build custom software for your business?</h2>
        <div className="software-cta-buttons">
          <button className="btn-primary-large">Get a Free Quote</button>
          <button className="btn-outline">Contact Us Today</button>
        </div>
      </section>

    </div>
    </>
  );
};

export default SoftwareDevelopment;
