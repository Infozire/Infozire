import React, { useEffect } from "react";
import "./AboutUs.css";
import Navbar from "../pages/Navbar";

const About = () => {

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

  return (
    <>
      <Navbar />
      <div className="aboutmodern">

        {/* HERO SECTION */}
        <section className="am-hero">
          <div className="am-hero-content fade-down reveal">
            <h1 className="am-title">About Infozire Private Limited</h1>
            <p className="am-subtitle">
              A modern technology company committed to building powerful, reliable,
              and future-ready digital solutions.
            </p>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="am-section">
          <div className="am-block fade-left reveal">
            <h2>
              Who <span className="text-orange-500">We</span> Are
            </h2>
            <p>
              Founded in <strong>September 2024</strong>, Infozire was built to deliver
              high-quality and innovative digital products that help businesses grow and transform.
            </p>
            <p>
              With 5+ years of IT industry experience, Founder{" "}
              <strong>
                <span className="text-orange-500 text-2xl font-bold">Praburam </span>
              </strong>
              created a brand focused on trust, creativity, and next-level execution.
            </p>
          </div>
        </section>

        {/* SPLIT CARDS */}
        <section className="am-split">
          <div className="am-split-card fade-up reveal">
            <h2>Our Mission</h2>
            <p>
              To deliver innovative and reliable digital solutions that empower businesses
              to grow, automate, and succeed — combining creativity, technology, and perfect execution.
            </p>
          </div>

          <div className="am-split-card fade-down reveal">
            <h2>Our Vision</h2>
            <p>
              To become a globally recognized tech brand within 5 years — building world-class products,
              expanding a skilled team, and launching innovative solutions that shape the future.
            </p>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="am-section">
          <div className="am-block fade-right reveal">
            <h2>
              Our <span className="text-orange-500">Story</span>
            </h2>

            <p>
              Infozire began with a strong dream — to build a company that delivers genuine value
              and transparent execution. After 5 years in the IT industry, Praburam realized the major gaps:
            </p>

          <ul className="am-list">
            <li>Transparency</li>
            <li>Skilled Execution</li>
            <li>Passion</li>
            <li>Client-first Approach</li>
            <li>Innovation-driven Work</li>
          </ul>

            <p>
              This vision shaped Infozire — a company where creativity meets engineering,
              and ideas become powerful digital products.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
