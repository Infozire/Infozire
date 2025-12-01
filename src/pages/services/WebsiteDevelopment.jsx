import React from "react";
import { motion } from "framer-motion";
import "./WebsiteDevelopment.css";
import heroImage from "../../assets/web-hero.jpg"; // Replace with your hero image
import Navbar from "../Navbar";

const Section = ({ title, children }) => (
  <motion.div
    className="section"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="section-title">{title}</h2>
    <div className="section-content">{children}</div>
  </motion.div>
);

const WebsiteDevelopment = () => {
  return (
    <><Navbar/>
    <div className="service-detail">

      {/* HERO */}
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-text">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Custom, Modern & High-Performance Websites That Drive Results
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Infozire creates websites that are visually stunning, fast, secure, 
            and optimized for conversions. From business websites to e-commerce 
            stores, we build solutions that scale with your growth.
          </motion.p>

          <div className="hero-buttons">
            <button className="primary-btn">Get a Free Quote</button>
            <button className="secondary-btn">View Our Portfolio</button>
          </div>
        </div>

        <motion.img
          src={heroImage}
          className="hero-img"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          alt="Hero"
        />
      </motion.div>

      {/* -------------------------------------- */}
      {/* OVERVIEW */}
      <Section title="Overview">
        <p>
          Your website is your digital storefront. At Infozire, we craft 
          responsive, SEO-friendly, and visually engaging websites tailored 
          to your brand. Whether it's an e-commerce store, business site, or 
          landing page, we focus on user experience, performance & scalability.
        </p>

        <ul className="bullet-list">
          <li>Fully custom designs (no templates)</li>
          <li>Mobile-first & responsive UI</li>
          <li>SEO & speed optimized</li>
          <li>Secure & scalable architecture</li>
        </ul>
      </Section>

      {/* -------------------------------------- */}
      {/* FEATURES */}
      <Section title="Features & Benefits">
        <div className="grid-2">
          <ul className="bullet-list">
            <li>Custom UI/UX design tailored to your brand</li>
            <li>Fast-loading & optimized performance</li>
            <li>Responsive on all devices</li>
            <li>SEO-friendly structure</li>
          </ul>

          <ul className="bullet-list">
            <li>API integrations</li>
            <li>Secure backend</li>
            <li>Affordable pricing</li>
            <li>On-time delivery</li>
          </ul>
        </div>
      </Section>

      {/* -------------------------------------- */}
      {/* INDUSTRIES */}
      <Section title="Industries We Serve">
        <div className="chips">
          {[
            "E-commerce & Retail",
            "Healthcare",
            "Education",
            "Real Estate",
            "Logistics",
            "Finance",
            "Startups & SMEs",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="chip"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* -------------------------------------- */}
      {/* PROCESS */}
      <Section title="Our Development Process">
        <ol className="process-list">
          <li>Requirement Gathering & Analysis</li>
          <li>Planning & Wireframing</li>
          <li>UI/UX Design</li>
          <li>Development & Coding</li>
          <li>Testing & Quality Assurance</li>
          <li>Deployment & Launch</li>
          <li>Maintenance & Support</li>
        </ol>
      </Section>

      {/* -------------------------------------- */}
      {/* CTA */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to build your website?</h2>
        <p>
          Let Infozire transform your digital presence with a high-performing, 
          beautifully designed website tailored for your business.
        </p>

        <button className="cta-btn">Get a Free Quote</button>
      </motion.div>
    </div>
    </>
  );
};

export default WebsiteDevelopment;
