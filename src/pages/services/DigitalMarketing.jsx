import React from "react";
import heroImg from "../../assets/branding-hero.jpg"; // Hero image
import portfolio1 from "../../assets/branding1.jpg"; // Portfolio image
import "./DigitalMarketting.css"
import Navbar from "../Navbar";
const DigitalMarketing = () => {
  return (
     <><Navbar/>
    <div className="branding-page">

      {/* HERO */}
      <section className="branding-hero">
        <div className="branding-hero-text">
          <h1 className="branding-hero-title">
            Build a Strong Brand & Grow Your Business Digitally
          </h1>
          <p className="branding-hero-sub">
            Infozire helps businesses establish a compelling digital presence through creative branding, social media strategies, SEO, and content marketing that drives engagement and growth.
          </p>
          <div className="branding-cta">
            <button className="btn-primary">Get a Free Consultation</button>
            <button className="btn-outline">View Our Branding Portfolio</button>
          </div>
        </div>
        <div className="branding-hero-img">
          <img src={heroImg} alt="Digital Branding Hero" />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="branding-overview">
        <h2>Overview</h2>
        <p>In the modern digital world, your brand identity is everything. Infozire offers end-to-end digital branding and marketing solutions that help businesses stand out, engage their audience, and convert leads into loyal customers.</p>
        <div className="branding-highlights">
          <div className="highlight-card">Logo design & brand identity kits</div>
          <div className="highlight-card">Social media management and content creation</div>
          <div className="highlight-card">SEO optimization for higher visibility</div>
          <div className="highlight-card">Paid ad creatives & campaign management</div>
          <div className="highlight-card">Video, reels, and motion graphics for engagement</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="branding-features">
        <h2>Core Features</h2>
        <div className="features-grid">
          <div className="feature-card">Logo & Brand Identity</div>
          <div className="feature-card">Social Media Management</div>
          <div className="feature-card">SEO & Website Optimization</div>
          <div className="feature-card">Content Creation</div>
          <div className="feature-card">Paid Ads & Campaigns</div>
          <div className="feature-card">Video & Motion Graphics</div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="branding-industries">
        <h2>Industries We Serve</h2>
        <div className="branding-industries">
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
      <section className="branding-process">
        <h2>Our Marketing Process</h2>
        <div className="process-step">Brand Analysis – Understand your identity, competitors, and audience</div>
        <div className="process-step">Strategy Development – Define objectives, platforms, and campaigns</div>
        <div className="process-step">Content & Design Creation – Logos, graphics, posts, and videos</div>
        <div className="process-step">Campaign Launch – Execute SEO, social media, and paid ads</div>
        <div className="process-step">Monitoring & Optimization – Track performance and improve campaigns</div>
        <div className="process-step">Reporting & Feedback – Regular insights and strategy adjustments</div>
      </section>

      {/* PORTFOLIO */}
      <section className="branding-portfolio">
        <h2>Portfolio Highlights</h2>
        <div className="portfolio-card">
          <img src={portfolio1} alt="Portfolio project" />
          <div className="portfolio-text">
            <h3>Social Media Branding for XYZ Startup</h3>
            <p>Challenge: Establish an online presence and increase engagement</p>
            <p>Solution: Complete brand identity & social media campaigns</p>
            <p>Result: 70% growth in social media followers and higher engagement</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="branding-testimonials">
        <h2>Client Feedback</h2>
        <p>“Infozire’s branding and marketing services transformed our online presence. Our engagement and leads increased significantly. Highly professional team!” – Client Name</p>
      </section>

      {/* CTA */}
      <section className="branding-cta">
        <h2>Ready to build a strong digital brand?</h2>
        <p>Partner with Infozire to create creative, measurable, and impactful branding and marketing solutions.</p>
        <div className="branding-cta-buttons">
          <button className="btn-primary-large">Get a Free Consultation</button>
          <button className="btn-outline">Contact Us Today</button>
        </div>
      </section>

    </div>
    </>
  );
};

export default DigitalMarketing;
