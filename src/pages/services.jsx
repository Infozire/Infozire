import React, { useEffect } from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const services = [
  { id: 1, title: "Website Development", path: "/services/website-development" },
  { id: 2, title: "Mobile App Development", path: "/services/mobile-app-development" },
  { id: 3, title: "Software & Web App Development", path: "/services/software-web-development" },
  { id: 4, title: "UI/UX Designing", path: "/services/ui-ux-design" },
  { id: 5, title: "AI & Automation", path: "/services/ai-automation" },
  { id: 6, title: "Digital Branding & Marketing", path: "/services/digital-branding" },
  { id: 7, title: "Cloud & DevOps", path: "/services/cloud-devops" },
  { id: 8, title: "IT Consulting", path: "/services/it-consulting" },
  { id: 9, title: "Maintenance & Support", path: "/services/maintenance-support" },
  { id: 10, title: "Testing & QA", path: "/services/testing-qa" },
  { id: 11, title: "API Development & Integrations", path: "/services/api-development" },
  { id: 12, title: "E-commerce Development", path: "/services/ecommerce-development" },
  { id: 13, title: "Video Editing & Motion Graphics", path: "/services/video-editing" },
  { id: 14, title: "Graphic Design Services", path: "/services/graphic-design" },
];

const Services = () => {
  const navigate = useNavigate();

  /* ------------------------------
      SCROLL REVEAL ANIMATIONS
  -------------------------------*/
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
      <section className="services-section">
        <div className="services-container">

          {/* LEFT SIDE */}
          <div className="left-side">
            <h1 className="am-title fade-up reveal">
              Our <span className="am-title">Services</span>
            </h1>

            <div className="services-list">

              <div className="column fade-left reveal">
                {services.slice(0, 7).map((s) => (
                  <div
                    className="service-box"
                    key={s.id}
                    onClick={() => navigate(s.path)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="service-number">
                      {String(s.id).padStart(2, "0")}
                    </span>
                    <span className="service-text">{s.title}</span>
                  </div>
                ))}
              </div>

              <div className="column fade-right reveal">
                {services.slice(7, 14).map((s) => (
                  <div
                    className="service-box"
                    key={s.id}
                    onClick={() => navigate(s.path)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="service-number">
                      {String(s.id).padStart(2, "0")}
                    </span>
                    <span className="service-text">{s.title}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-side zoom-in reveal">
            <div className="curve-layer layer1"></div>
            <div className="curve-layer layer2"></div>
            <div className="curve-layer layer3"></div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;
