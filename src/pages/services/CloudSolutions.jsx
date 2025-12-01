import React from "react";
import cloudHeroImg from "../../assets/cloud-hero.jpg"; // Replace with your hero image
import portfolioImg from "../../assets/cloud-portfolio.jpg"; // Replace with portfolio image
import "./CloudDevops.css"
import Navbar from "../Navbar";
const CloudSolutions = () => {
  return (
     <><Navbar/>
    <div className="cloud-page">
      
      {/* HERO SECTION */}
      <section className="cloud-hero">
        <div className="cloud-hero-text">
          <h1 className="cloud-hero-title">
            Reliable Cloud & DevOps Solutions for Seamless Operations
          </h1>
          <p className="cloud-hero-sub">
            Infozire provides end-to-end Cloud and DevOps services to ensure your applications are scalable, secure, and highly available. From cloud setup to CI/CD pipelines, we optimize your infrastructure for performance and reliability.
          </p>
          <div className="cloud-cta">
            <button className="btn-primary">Get a Free Consultation</button>
            <button className="btn-outline">Explore Our Cloud Solutions</button>
          </div>
        </div>
        <div className="cloud-hero-img">
          <img src={cloudHeroImg} alt="Cloud Hero" />
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="cloud-overview">
        <h2>Efficient Cloud & DevOps Management</h2>
        <p>
          Efficient cloud management and DevOps practices are essential for modern businesses. Infozire delivers custom cloud infrastructure setups, server management, automation, and monitoring to keep your applications running smoothly. We ensure high availability, security, and cost-efficiency for your digital solutions.
        </p>

        <div className="cloud-highlights">
          {[
            "Cloud setup on AWS, Azure, or GCP",
            "Server installation, deployment, and management",
            "CI/CD pipelines for faster releases",
            "Auto-scaling and performance optimization",
            "Backup, monitoring, and security",
          ].map((item, index) => (
            <div key={index} className="highlight-card">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="cloud-features">
        <h2>Core Features of Our Cloud & DevOps Services</h2>
        <div className="feature-grid">
          {[
            "Cloud hosting and migration setup",
            "Server configuration, deployment, and management",
            "CI/CD pipeline implementation for faster releases",
            "Performance monitoring, auto-scaling, and optimization",
            "Backup, disaster recovery, and security management",
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="cloud-industries">
        {[
          "E-commerce & Retail",
          "Healthcare & Fitness",
          "Education & Learning",
          "Real Estate",
          "Logistics & Supply Chain",
          "Finance & Banking",
          "Startups & SMEs",
        ].map((industry, index) => (
          <div key={index} className="industry-card">
            {industry}
          </div>
        ))}
      </section>

      {/* PROCESS SECTION */}
      <section className="cloud-process">
        <h2>Our Cloud & DevOps Process</h2>
        {[
          "Assessment & Planning – Analyze infrastructure and business requirements",
          "Cloud Setup & Migration – Configure cloud platforms and migrate applications",
          "Server Installation & Configuration – Set up servers with security and optimization",
          "CI/CD Pipeline Setup – Automate builds, testing, and deployments",
          "Monitoring & Optimization – Ensure high performance, uptime, and cost-efficiency",
          "Backup & Security Management – Implement disaster recovery, backups, and security policies",
          "Ongoing Support – Regular maintenance, monitoring, and troubleshooting",
        ].map((step, index) => (
          <div key={index} className="process-step">
            {step}
          </div>
        ))}
      </section>

      {/* PORTFOLIO / CASE STUDY */}
      <section className="cloud-portfolio">
        <h2>Portfolio / Case Study Highlight</h2>
        <div className="portfolio-card">
          <img src={portfolioImg} alt="Portfolio" />
          <div className="portfolio-text">
            <h3>Cloud Infrastructure for XYZ Startup</h3>
            <p>
              <strong>Challenge:</strong> Improve application reliability and automate deployments
            </p>
            <p>
              <strong>Solution:</strong> AWS cloud setup with CI/CD, auto-scaling, and monitoring
            </p>
            <p>
              <strong>Result:</strong> 99.9% uptime and faster deployment cycles
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="cloud-testimonials">
        <p>
          “Infozire optimized our cloud infrastructure and set up CI/CD pipelines that significantly improved deployment speed and system reliability.” – Client Name
        </p>
      </section>

      {/* CTA SECTION */}
      <section className="cloud-cta">
        <h2>Ready to optimize your infrastructure?</h2>
        <p>
          Partner with Infozire for scalable, secure, and automated cloud and DevOps solutions.
        </p>
        <div className="cloud-cta-buttons">
          <button className="btn-primary">Get a Free Consultation</button>
          <button className="btn-outline">Contact Us Today</button>
        </div>
      </section>

    </div>
    </>
  );
};

export default CloudSolutions;
