import React from "react";
import heroImg from "../../assets/uiux-hero.jpg"; // Replace with your hero image
import portfolio1 from "../../assets/uiux.jpg"; // Replace with your portfolio images
import "./UIUX.css"
import Navbar from "../Navbar";
const UIUXPage = () => {
 
  return (
       <><Navbar/>
    <div className="uiux-page">
      
      {/* HERO SECTION */}
      <section className="uiux-hero">
        <div className="uiux-hero-text">
          <h1 className="uiux-hero-title">
            Designing Intuitive & Engaging Digital Experiences
          </h1>
          <p className="uiux-hero-sub">
            Infozire creates UI/UX designs that delight users and enhance business performance.
            We craft interfaces and user journeys that are visually appealing, seamless, 
            and aligned with your brand identity.
          </p>
          <div className="uiux-cta">
            <button className="btn-primary">Get a Free Consultation</button>
            <button className="btn-outline">View Our Design Portfolio</button>
          </div>
        </div>
        <div className="uiux-hero-img">
          <img src={heroImg} alt="UI/UX Design Hero" />
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="uiux-overview">
        <h2>Overview</h2>
        <p>A great design is more than just visuals — it’s about user experience. At Infozire, we combine creativity, usability, and research to design digital products that users love. Our approach ensures every website, app, or software interface is intuitive, functional, and conversion-focused.</p>
        <div className="uiux-highlights">
          <div className="uiux-highlight-card">Custom UI for websites, apps, and software</div>
          <div className="uiux-highlight-card">User journey mapping and wireframing</div>
          <div className="uiux-highlight-card">Prototypes & design systems</div>
          <div className="uiux-highlight-card">Brand-aligned visual design</div>
          <div className="uiux-highlight-card">Responsive and mobile-first interfaces</div>
        </div>
      </section>

      {/* FEATURES & BENEFITS */}
      <section className="uiux-features">
        <h2>Core Features of Our UI/UX Design Service</h2>
        <div className="uiux-feature-grid">
          <div className="uiux-feature-card">User interface (UI) design with visual consistency</div>
          <div className="uiux-feature-card">User experience (UX) mapping for seamless navigation</div>
          <div className="uiux-feature-card">Wireframes, mockups, and interactive prototypes</div>
          <div className="uiux-feature-card">Brand-consistent design systems and style guides</div>
          <div className="uiux-feature-card">Website and app redesign for improved engagement</div>
        </div>

        <h3>Why Choose Infozire for UI/UX Design</h3>
        <div className="uiux-feature-grid">
          <div className="uiux-feature-card">Design solutions backed by research and best practices</div>
          <div className="uiux-feature-card">Focus on usability, accessibility, and performance</div>
          <div className="uiux-feature-card">Fully customized designs — no templates</div>
          <div className="uiux-feature-card">Fast delivery without compromising quality</div>
          <div className="uiux-feature-card">Founder-led oversight ensures high standards</div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="uiux-industries">
        <h2>Industries We Serve</h2>
        <div className="uiux-industries">
          <div className="uiux-industry-card">E-commerce & Retail</div>
          <div className="uiux-industry-card">Healthcare & Fitness</div>
          <div className="uiux-industry-card">Education & Learning</div>
          <div className="uiux-industry-card">Real Estate</div>
          <div className="uiux-industry-card">Logistics & Supply Chain</div>
          <div className="uiux-industry-card">Finance & Banking</div>
          <div className="uiux-industry-card">Startups & SMEs</div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="uiux-process">
        <h2>Our UI/UX Design Process</h2>
        <div className="uiux-process-step">Requirement Analysis – Understand user needs and business goals</div>
        <div className="uiux-process-step">User Research – Identify target audience, pain points, and preferences</div>
        <div className="uiux-process-step">Wireframing & Prototyping – Map user flow and interface structure</div>
        <div className="uiux-process-step">UI Design – Create visually appealing, brand-aligned designs</div>
        <div className="uiux-process-step">UX Testing – Validate usability and make iterative improvements</div>
        <div className="uiux-process-step">Design Handoff & Implementation – Deliver ready-to-develop assets</div>
        <div className="uiux-process-step">Continuous Improvement – Update and optimize based on user feedback</div>
      </section>

      {/* PORTFOLIO / CASE STUDY */}
      <section className="uiux-portfolio">
        <h2>Portfolio / Case Study Highlights</h2>
        <div className="uiux-portfolio-card">
          <img src={portfolio1} alt="Portfolio project" />
          <div className="portfolio-text">
            <h3>UI/UX Design for XYZ Mobile App</h3>
            <p>Challenge: Improve usability and user engagement</p>
            <p>Solution: Complete wireframe, prototype, and interface redesign</p>
            <p>Result: 60% increase in user engagement and higher retention</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="uiux-testimonials">
        <h2>Client Feedback</h2>
        <p>“Infozire transformed our app design completely. Users find it intuitive, attractive, and easy to navigate. Highly recommend their design team.” – Client Name</p>
      </section>

      {/* CTA */}
      <section className="uiux-cta">
        <h2>Ready to elevate your digital experience?</h2>
        <p>Partner with Infozire to create intuitive, visually stunning UI/UX designs that drive engagement and conversions.</p>
        <div className="uiux-cta-buttons">
          <button className="btn-primary-large">Get a Free Consultation</button>
          <button className="btn-outline">Contact Us Today</button>
        </div>
      </section>
      
    </div>
    </>
  );
};

export default UIUXPage;
