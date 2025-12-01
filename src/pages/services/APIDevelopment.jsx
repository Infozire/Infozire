import React from 'react'
import "./APIDevelopment.css"
import apiDevelopmentHero from "../../assets/apiDeveloment-hero.jpg"; // optional hero image
import Navbar from '../Navbar';

const APIDevelopment = () => {
  return (
     <><Navbar/>
   <div className="api-page">
  {/* HERO SECTION */}
  <section className="api-hero">
    <div className="api-hero-content">
      <h1 className="api-hero-title">Seamless API Development for Scalable Digital Solutions</h1>
      <p className="api-hero-sub">
        Infozire delivers robust API development services to connect applications, automate workflows, and enhance integration capabilities.
      </p>
      <div className="api-cta">
        <button className="btn-primary-api">Get a Free Consultation</button>
        <button className="btn-outline-api">Explore Our API Services</button>
      </div>
    </div>
    <div className="api-hero-img">
      <img src={apiDevelopmentHero} alt="API Development Illustration" />
    </div>
  </section>

  {/* OVERVIEW */}
  <section className="api-overview">
    <h2 className="api-section-title">Overview</h2>
    <p className="api-section-sub">
      APIs are the backbone of modern digital services. Infozire provides custom API solutions to enable secure data exchange, system integration, and business automation. Our APIs are scalable, well-documented, and optimized for high performance.
    </p>
    <div className="api-highlights">
      <div className="highlight-card-api">RESTful & GraphQL API development</div>
      <div className="highlight-card-api">Third-party integrations & system connectivity</div>
      <div className="highlight-card-api">Authentication & security protocols</div>
      <div className="highlight-card-api">High-performance & scalable architecture</div>
      <div className="highlight-card-api">API documentation & developer support</div>
    </div>
  </section>

  {/* FEATURES */}
  <section className="api-features">
    <h2 className="api-section-title">Core Features</h2>
    <div className="feature-grid-api">
      <div className="feature-card-api">
        <h5>Custom API Design</h5>
        <p>Tailored endpoints and integrations for your applications.</p>
      </div>
      <div className="feature-card-api">
        <h5>Secure & Scalable</h5>
        <p>High-performance APIs with robust authentication and access control.</p>
      </div>
      <div className="feature-card-api">
        <h5>Developer Friendly</h5>
        <p>Comprehensive documentation and support for smooth integration.</p>
      </div>
      <div className="feature-card-api">
        <h5>Integration Ready</h5>
        <p>Seamlessly connect web, mobile, and cloud platforms.</p>
      </div>
      <div className="feature-card-api">
        <h5>Monitoring & Analytics</h5>
        <p>Real-time monitoring for uptime, performance, and optimization.</p>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="api-cta-final">
    <p className="api-cta-text">Ready to enhance your digital ecosystem with custom APIs?</p>
    <div className="api-cta-buttons">
      <button className="btn-primary-api">Get a Free Consultation</button>
      <button className="btn-outline-api">Contact Us Today</button>
    </div>
  </section>
</div>
</>
  )
}

export default APIDevelopment