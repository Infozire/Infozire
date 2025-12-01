import React from "react";
import heroImage from "../../assets/ecommerce-hero.jpg"; // Replace with your hero image
import portfolioImg from "../../assets/ecommerce-portfolio.jpg"; // Replace with your portfolio image
import "./EcommerceDevelopment.css"
import Navbar from "../Navbar";
const EcommerceDevelopment = () => {
  return (
     <><Navbar/>
    <div className="ecommerce-page">

      {/* HERO SECTION */}
      <section className="ecommerce-hero">
        <div className="ecommerce-hero-content">
          <h1 className="ecommerce-hero-title">
            Build High-Performing E-commerce Platforms That Convert
          </h1>
          <p className="ecommerce-hero-sub">
            Infozire develops customized e-commerce websites and apps with scalable architecture, secure payment integration, and intuitive user experiences to maximize conversions and growth.
          </p>
          <div className="ecommerce-cta">
            <button className="btn-primary-ecommerce">Get a Free Quote</button>
            <button className="btn-outline-ecommerce">View Our Projects</button>
          </div>
        </div>
        <div className="ecommerce-hero-img">
          <img src={heroImage} alt="E-commerce Hero" />
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="ecommerce-highlights">
        <div className="highlight-card-ecommerce">Custom E-commerce Websites</div>
        <div className="highlight-card-ecommerce">Secure Payment Gateways</div>
        <div className="highlight-card-ecommerce">Mobile-Friendly & Responsive</div>
        <div className="highlight-card-ecommerce">Product Management & Analytics</div>
        <div className="highlight-card-ecommerce">Multi-Vendor Platforms</div>
      </section>

      {/* FEATURES SECTION */}
      <section className="ecommerce-features">
        <div className="feature-card-ecommerce">
          <h5>Scalable Architecture</h5>
          <p>Built to handle thousands of users and products without performance issues.</p>
        </div>
        <div className="feature-card-ecommerce">
          <h5>Secure Payments</h5>
          <p>Integrated with trusted payment gateways for smooth transactions.</p>
        </div>
        <div className="feature-card-ecommerce">
          <h5>User-Centric Design</h5>
          <p>Optimized for seamless navigation and higher conversion rates.</p>
        </div>
        <div className="feature-card-ecommerce">
          <h5>Analytics & Insights</h5>
          <p>Track sales, users, and performance for smarter business decisions.</p>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="ecommerce-industries">
        <div className="industry-grid-ecommerce">
          <div className="industry-card-ecommerce">Fashion & Apparel</div>
          <div className="industry-card-ecommerce">Electronics & Gadgets</div>
          <div className="industry-card-ecommerce">Food & Beverages</div>
          <div className="industry-card-ecommerce">Healthcare Products</div>
          <div className="industry-card-ecommerce">Home & Furniture</div>
          <div className="industry-card-ecommerce">Beauty & Personal Care</div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="ecommerce-portfolio" style={{ padding: "80px 10%" }}>
        <div className="portfolio-card">
          <img src={portfolioImg} alt="E-commerce Portfolio Project" />
          <div className="portfolio-text">
            <h3>Multi-Vendor Marketplace for XYZ Startup</h3>
            <p>Custom e-commerce platform with payment integration and analytics leading to 80% faster order management.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="ecommerce-cta-final">
        <p>Ready to launch your e-commerce platform?</p>
        <div className="ecommerce-cta">
          <button className="btn-primary-ecommerce">Get a Free Quote</button>
          <button className="btn-outline-ecommerce">Contact Us Today</button>
        </div>
      </section>

    </div>
    </>
  );
};

export default EcommerceDevelopment;
