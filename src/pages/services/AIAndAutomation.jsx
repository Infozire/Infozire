import React from "react";
import "./AIAndAutomation.css";
import heroImg from "../../assets/ai-hero.jpg";
import portfolioImg from "../../assets/ai-portfolio.jpg";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const AIAndAutomation = () => {
  return (
    <>
      <Navbar />

      <motion.div
        className="ai-page"
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        {/* HERO SECTION */}
        <motion.section
          className="ai-hero fade-in"
          variants={fade}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="ai-hero-content">
            <h1 className="ai-hero-title">
              Leverage AI & Automation <br />to Transform Your Business
            </h1>

            <motion.p
              className="ai-hero-sub"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Infozire develops intelligent AI solutions and automation tools that streamline processes,
              improve efficiency, and deliver actionable insights.
            </motion.p>

            <div className="ai-cta">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
              >
                Get a Free Consultation
              </motion.button>

              <motion.button
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
              >
                Explore AI Solutions
              </motion.button>
            </div>
          </div>

          {heroImg && (
            <motion.div
              className="ai-hero-img"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={heroImg} alt="AI & Automation" />
            </motion.div>
          )}
        </motion.section>

        {/* OVERVIEW */}
        <motion.section
          className="ai-overview enhanced-layout"
          variants={fade}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Why AI & Automation?</h2>

          <p className="section-desc">
            In today's fast-paced digital world, businesses rely on automation and AI to stay ahead.
          </p>

          <motion.div
            className="grid-layout"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {[
              "AI chatbots for customer support",
              "Predictive analytics for business insights",
              "Workflow and process automation",
              "AI-powered dashboards and reporting",
              "Scalable, secure AI systems"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="neo-card"
                variants={fade}
                transition={{ duration: 0.6 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          className="ai-features fade-in"
          variants={fade}
          transition={{ duration: 0.8 }}
        >
          <h2>Core Features</h2>

          <div className="feature-grid">
            {[
              "Intelligent chatbots for 24/7 support",
              "Predictive analytics & insights",
              "Automated business workflows",
              "AI-powered tools for task optimization",
              "Integration with existing systems"
            ].map((text, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.div>
            ))}
          </div>

          <h2>Why Choose Infozire</h2>

          <div className="feature-grid">
            {[
              "Expert team in AI, ML, Automation",
              "Custom solutions for business needs",
              "Fast deployment & scalable architecture",
              "Transparent pricing & support",
              "Founder-led high-quality delivery"
            ].map((text, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* INDUSTRIES */}
        <motion.section
          className="ai-industries enhanced-layout"
          variants={fade}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Industries We Serve</h2>

          <motion.div
            className="grid-layout"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {[
              "E-commerce & Retail",
              "Healthcare & Fitness",
              "Education & Learning",
              "Real Estate",
              "Logistics & Supply Chain",
              "Finance & Banking",
              "Startups & SMEs"
            ].map((item, i) => (
              <motion.div
                key={i}
                className="neo-card industry"
                variants={fade}
                transition={{ duration: 0.6 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* PROCESS */}
        <motion.section
          className="ai-process compact"
          variants={fade}
          transition={{ duration: 0.8 }}
        >
          <h2>AI Development Process</h2>

          <div className="process-timeline">
            {[
              "Requirements",
              "Data Analysis",
              "Design",
              "Development",
              "Testing",
              "Deployment",
              "Support"
            ].map((step, i) => (
              <motion.div
                key={i}
                className="step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {step}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PORTFOLIO */}
        <motion.section
          className="ai-portfolio"
          variants={fade}
          transition={{ duration: 0.8 }}
        >
          <h2 className="portfolio-title">Portfolio / Case Study Highlights</h2>

          <div className="portfolio-card">
            {portfolioImg && (
              <motion.div
                className="portfolio-image-wrapper"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img src={portfolioImg} alt="AI Chatbot Project" className="portfolio-image" />
              </motion.div>
            )}

            <div className="portfolio-text">
              <h3>AI Chatbot for E-commerce Store</h3>
              <ul>
                <li><strong>Challenge:</strong> Reduce customer support response time</li>
                <li><strong>Solution:</strong> Built an AI chatbot integrated with Website & WhatsApp</li>
                <li><strong>Result:</strong> 70% faster replies, 50% improved customer satisfaction</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* TESTIMONIALS */}
        <motion.section
          className="ai-testimonials fade-in"
          variants={fade}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Client Feedback</h2>

          <motion.div
            className="testimonial-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="testimonial-text">
              “Infozire’s AI solutions transformed our workflow.”
            </p>
            <h4 className="client-name">— Client Name</h4>
          </motion.div>
        </motion.section>

        {/* CTA SECTION */}
        <motion.section
          className="ai-cta slide-up"
          variants={fade}
          transition={{ duration: 0.8 }}
        >
          <div className="ai-cta-container">
            <h2>Ready to Automate Your Business with AI?</h2>
            <p>Partner with Infozire to implement smart AI solutions.</p>

            <div className="ai-cta-buttons">
              <motion.button className="btn-primary" whileHover={{ scale: 1.05 }}>
                Get Free Consultation
              </motion.button>

              <motion.button className="btn-primary-large" whileHover={{ scale: 1.05 }}>
                Contact Us Today
              </motion.button>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </>
  );
};

export default AIAndAutomation;
