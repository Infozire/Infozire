import React from 'react'
import consultingHero from "../../assets/consulting-hero.jpg"; // optional hero image

import "./ITConsulting.css"
import Navbar from '../Navbar';
const ITConsulting = () => {
  return (
     <><Navbar/>
   <div className="it-page">
  {/* HERO SECTION */}
  <section className="it-hero">
    <div className="it-hero-content">
      <h1 className="it-hero-title">Strategic IT Consulting to Accelerate Your Business</h1>
      <p className="it-hero-sub">
        Infozire provides expert IT consulting services to optimize technology strategy, reduce costs, and drive business growth.
      </p>
      <div className="it-cta">
        <button className="btn-primary-it">Get a Free Consultation</button>
        <button className="btn-outline-it">Learn About Our Consulting</button>
      </div>
    </div>
    <div className="it-hero-img">
      <img src={consultingHero} alt="IT Consulting Illustration" />
    </div>
  </section>

  {/* OVERVIEW */}
  <section className="it-overview">
    <h2>Overview</h2>
    <p>Successful businesses rely on strategic technology guidance...</p>
    <div className="it-highlights">
      <div className="highlight-card-it">Technology assessments & audits</div>
      <div className="highlight-card-it">IT strategy & roadmap development</div>
      <div className="highlight-card-it">Risk management & compliance consulting</div>
      <div className="highlight-card-it">Digital transformation guidance</div>
      <div className="highlight-card-it">Cloud & infrastructure advisory</div>
    </div>
  </section>

  {/* FEATURES */}
  <section className="it-features">
    <div className="feature-card-it">
      <h5>Expert IT Strategy & Planning</h5>
      <p>Guiding your business to adopt the right technology solutions and frameworks.</p>
    </div>
    <div className="feature-card-it">
      <h5>Infrastructure Optimization</h5>
      <p>Ensure scalable, cost-effective, and secure IT infrastructure.</p>
    </div>
    <div className="feature-card-it">
      <h5>Digital Transformation Roadmaps</h5>
      <p>Plan and implement technology initiatives for long-term growth.</p>
    </div>
  </section>

  {/* CTA */}
  <section className="it-cta-final">
    <p>Ready to optimize your IT strategy?</p>
    <div className="it-cta-buttons">
      <button className="btn-primary-it">Get a Free Consultation</button>
      <button className="btn-outline-it">Contact Us Today</button>
    </div>
  </section>
</div>
</>

  )
}

export default ITConsulting