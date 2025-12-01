import React from "react";
import graphicHero from "../../assets/graphic-hero.jpg"; // optional hero image
import "./GraphicDesign.css"
import Navbar from "../Navbar";
const GraphicDesign = () => {
  const highlights = [
    "Logo & brand identity design",
    "Social media visuals & campaigns",
    "Posters, flyers, brochures, and print designs",
    "Motion graphics & animations",
    "Custom illustrations & icons",
  ];

  const features = [
    {
      title: "Creative Visuals",
      desc: "Custom graphics that resonate with your audience and strengthen your brand.",
    },
    {
      title: "Typography & Colors",
      desc: "Expert use of fonts, colors, and layouts to enhance brand identity.",
    },
    {
      title: "Motion Graphics",
      desc: "Animated graphics and motion design for digital campaigns.",
    },
    {
      title: "Print & Digital Assets",
      desc: "Deliverables ready for web, social media, and print media.",
    },
    {
      title: "Brand Alignment",
      desc: "Every design is consistent with your brand style and guidelines.",
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
    <div className="graphic-page">
      {/* HERO */}
      <section className="graphic-hero">
        <div className="hero-text">
          <h1 className="graphic-hero-title">
            Create Visual Masterpieces That Elevate Your Brand
          </h1>
          <p className="graphic-hero-sub">
            Infozire’s graphic design team crafts stunning visuals, branding assets, and marketing creatives that leave a lasting impression.
          </p>
          <div className="graphic-cta">
            <button className="btn-primary-graphic">Get a Free Design Consultation</button>
            <button className="btn-outline-graphic">View Our Portfolio</button>
          </div>
        </div>
        {graphicHero && (
          <img
            src={graphicHero}
            alt="Graphic Design"
            className="graphic-hero-img"
          />
        )}
      </section>

      {/* HIGHLIGHTS */}
      <section className="graphic-highlights">
        {highlights.map((item, index) => (
          <div className="highlight-card-graphic" key={index}>
            <h4>🎨</h4>
            <p>{item}</p>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="graphic-features">
        {features.map((feature, index) => (
          <div className="feature-card-graphic" key={index}>
            <h5>{feature.title}</h5>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* INDUSTRIES */}
      <section className="graphic-industries">
        <div className="industry-grid-graphic">
          {industries.map((industry, index) => (
            <div className="industry-card-graphic" key={index}>
              <h6>{industry}</h6>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="graphic-cta-final">
        <p>
          Bring your brand to life with stunning visuals. Partner with Infozire for impactful, creative, and modern graphic designs.
        </p>
        <div className="graphic-cta">
          <button className="btn-primary-graphic">Get a Free Design Consultation</button>
          <button className="btn-outline-graphic">Contact Us Today</button>
        </div>
      </section>
    </div>
    </>
  );
};

export default GraphicDesign;
