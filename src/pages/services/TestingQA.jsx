import React from "react";
import testingImage from "../../assets/testing-qa.jpg"; // Import your illustration
import "./TestingQA.css"
import Navbar from "../Navbar";
const TestingQA = () => {
  return (
     <><Navbar/>
    <div className="qa-page">
      {/* HERO SECTION */}
      <section className="qa-hero">
        <div className="qa-hero-content">
          <h1 className="qa-hero-title">Ensure High-Quality Digital Products with Rigorous Testing & QA</h1>
          <p className="qa-hero-sub">
            Infozire provides comprehensive testing and QA services for websites, apps, and software to guarantee performance, security, and reliability across platforms.
          </p>
          <div className="qa-cta">
            <button className="btn-primary-qa">Get a Free Consultation</button>
            <button className="btn-outline-qa">Request QA Services</button>
          </div>
        </div>
        <div className="qa-hero-img">
          <img src={testingImage} alt="Testing & QA Illustration" />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="qa-overview">
        <h2 className="qa-section-title">Our QA Approach</h2>
        <p className="qa-section-sub">
          We ensure your digital products perform flawlessly. Infozire’s QA team follows structured processes including manual testing, automation, and continuous validation to deliver bug-free, high-performance solutions.
        </p>
        <div className="qa-highlights">
          <div className="highlight-card-qa">Functional Testing</div>
          <div className="highlight-card-qa">Performance & Load Testing</div>
          <div className="highlight-card-qa">Security & Vulnerability Testing</div>
          <div className="highlight-card-qa">Cross-Browser / Cross-Platform QA</div>
          <div className="highlight-card-qa">Automated Regression Testing</div>
        </div>
      </section>

      {/* CTA */}
      <section className="qa-cta-final">
        <p className="qa-cta-text">Ready to deliver flawless digital products?</p>
        <div className="qa-cta-buttons">
          <button className="btn-primary-qa">Get a Free Consultation</button>
          <button className="btn-outline-qa">Request QA Services</button>
        </div>
      </section>
    </div>
    </>
  );
};

export default TestingQA;
