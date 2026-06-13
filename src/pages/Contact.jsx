import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../pages/Contact.css";

const Contact = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <section className="contact-section">
        <div className="contact-container reveal fade-up">
          <h2 className="contact-title">
            Contact <span>Us</span>
          </h2>

          <p className="contact-subtitle">
            Ready to transform your business with innovative technology?
            Get in touch with our team today.
          </p>

          <div className="contact-card">
            <div className="contact-item">
              <div className="icon">📞</div>
              <h3>Phone</h3>
              <p>+91 8608970518</p>
            </div>

            <div className="contact-item">
              <div className="icon">📧</div>
              <h3>Email</h3>
              <p>infozirehub@gmail.com</p>
            </div>

            <div className="contact-item">
              <div className="icon">📍</div>
              <h3>Location</h3>
              <p>Pondicherry, India</p>
            </div>

            <div className="contact-item">
              <div className="icon">🕒</div>
              <h3>Working Hours</h3>
              <p>Mon - Sat : 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="contact-buttons">
            <a href="tel:+918608970518" className="contact-btn">
              Call Now
            </a>

            <a
              href="mailto:infozirehub@gmail.com"
              className="contact-btn"
            >
              Email Us
            </a>

            <a
              href="https://wa.me/918608970518"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              WhatsApp
            </a>
          </div>

          <div className="why-choose-us">
            <h3>Why Choose Infozire?</h3>

            <div className="features">
              <div>✓ AI & GenAI Solutions</div>
              <div>✓ Custom Software Development</div>
              <div>✓ Mobile App Development</div>
              <div>✓ Cloud & DevOps Services</div>
              <div>✓ UI/UX Design</div>
              <div>✓ Digital Transformation</div>
            </div>
          </div>

          <div className="map-container">
           <iframe
  title="Infozire Location"
  src="https://maps.google.com/maps?q=Puducherry,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="300"
  style={{ border: 0, borderRadius: "20px" }}
  allowFullScreen=""
  loading="lazy"
></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;