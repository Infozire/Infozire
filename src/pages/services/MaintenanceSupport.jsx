import React from "react";
import maintenanceHero from "../../assets/maintenance-hero.jpg"; // optional hero image
import "./Maintainance.css"
import Navbar from "../Navbar";
const MaintenanceSupport = () => {
  const highlights = [
    "Website and mobile app updates",
    "Bug fixing and code optimization",
    "Security patches and vulnerability fixes",
    "Performance monitoring and improvements",
    "Monthly and annual support plans",
  ];

  const features = [
    {
      title: "Regular Updates",
      desc: "Keep your websites, apps, and software up-to-date with latest improvements.",
    },
    {
      title: "Bug Detection & Resolution",
      desc: "Identify and fix issues quickly to maintain optimal performance.",
    },
    {
      title: "Security Management",
      desc: "Regular security patches and vulnerability fixes to protect your systems.",
    },
    {
      title: "Performance Optimization",
      desc: "Improve speed, responsiveness, and usability across all platforms.",
    },
    {
      title: "Monitoring & Alerts",
      desc: "Real-time monitoring with instant alerts to prevent downtime.",
    },
  ];

  const industries = [
    "E-commerce & Retail",
    "Healthcare & Fitness",
    "Education & Learning",
    "Real Estate",
    "Logistics & Supply Chain",
    "Finance & Banking",
    "Startups & SMEs",
  ];

  return (
     <><Navbar/>
    <div className="maintenance-page">
      {/* HERO SECTION */}
      <section className="maintenance-hero">
        <h1 className="maintenance-hero-title">
          Reliable Maintenance & Support to Keep Your Digital Assets Running Smoothly
        </h1>
        <p className="maintenance-hero-sub">
          Infozire provides ongoing maintenance and technical support for websites, apps, and software to ensure optimal performance, security, and reliability. We help businesses stay updated, secure, and problem-free.
        </p>
        <div className="maintenance-cta">
          <button className="btn-primary-maintenance">Get a Free Consultation</button>
          <button className="btn-outline-maintenance">Request Support</button>
        </div>
        {maintenanceHero && (
          <img
            src={maintenanceHero}
            alt="Maintenance & Support"
            style={{ marginTop: "40px", borderRadius: "20px", maxWidth: "600px", width: "100%" }}
          />
        )}
      </section>

      {/* OVERVIEW */}
      <section className="maintenance-overview">
        <p>
          Digital products need continuous care to perform at their best. Infozire offers comprehensive maintenance and support services, including bug fixes, updates, security patches, and optimization. With proactive monitoring and dedicated support, we ensure your systems are always up-to-date and running efficiently.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="maintenance-highlights">
        {highlights.map((item, index) => (
          <div className="highlight-card-maintenance" key={index}>
            <h4>✔</h4>
            <p>{item}</p>
          </div>
        ))}
      </section>

      {/* FEATURES & BENEFITS */}
      <section className="maintenance-features">
        {features.map((feature, index) => (
          <div className="feature-card-maintenance" key={index}>
            <h5>{feature.title}</h5>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* INDUSTRIES */}
      <section className="maintenance-industries">
        <div className="industry-grid-maintenance">
          {industries.map((industry, index) => (
            <div className="industry-card-maintenance" key={index}>
              <h6>{industry}</h6>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="maintenance-cta-final">
        <p>Keep your digital assets secure and optimized. Partner with Infozire for reliable, ongoing maintenance and support services.</p>
        <div className="maintenance-cta">
          <button className="btn-primary-maintenance">Get a Free Consultation</button>
          <button className="btn-outline-maintenance">Contact Us Today</button>
        </div>
      </section>
    </div>
    </>
  );
};

export default MaintenanceSupport;
