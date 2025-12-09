import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../pages/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Scroll Reveal Animation
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
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <section className="contact-section">
        <div className="contact-container reveal fade-up">
          <h2 className="text-l font-extrabold  mb-4 pb-8 tracking-tight reveal">Contact <span className="text-orange-600">Us</span></h2>
          <p>Have a question or project in mind? Let’s connect!</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Mobile Number Input */}
            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile Number"
              value={formData.mobile || ""}
              onChange={handleChange}
              pattern="[0-9]{10}" // Only 10 digits
              maxLength="10"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
              Send Message
            </button>

            {submitted && <p className="success-msg">Message sent successfully!</p>}
          </form>

        </div>
      </section>
    </>
  );
};

export default Contact;
