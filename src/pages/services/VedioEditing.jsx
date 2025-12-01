import React from "react";
import heroImage from "../../assets/video-hero.jpg"; // Replace with your hero image
import portfolioImg from "../../assets/video-portfolio.jpg"; // Replace with your portfolio image
import "./VedioEditing.css"
import Navbar from "../Navbar";
const VideoEditing = () => {
  return (
     <><Navbar/>
    <div className="video-page">

      {/* HERO SECTION */}
      <section className="video-hero">
        <div className="video-hero-content">
          <h1 className="video-hero-title">
            Create Stunning Videos & Motion Graphics That Captivate
          </h1>
          <p className="video-hero-sub">
            Infozire delivers professional video editing, animation, and motion graphic services to bring your ideas to life. We craft engaging visuals that enhance storytelling, marketing campaigns, and brand presence.
          </p>
          <div className="video-cta">
            <button className="btn-primary-video">Get a Free Consultation</button>
            <button className="btn-outline-video">View Portfolio</button>
          </div>
        </div>
        <div className="video-hero-img">
          <img src={heroImage} alt="Video Editing Hero" />
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="video-highlights">
        <div className="highlight-card-video">Professional Video Editing</div>
        <div className="highlight-card-video">Motion Graphics & Animation</div>
        <div className="highlight-card-video">Social Media Videos & Ads</div>
        <div className="highlight-card-video">Explainer Videos & Presentations</div>
        <div className="highlight-card-video">Promo Videos & Reels</div>
      </section>

      {/* FEATURES SECTION */}
      <section className="video-features">
        <div className="feature-card-video">
          <h5>Creative Storytelling</h5>
          <p>Advanced editing techniques to narrate your brand story effectively.</p>
        </div>
        <div className="feature-card-video">
          <h5>Animated Motion Graphics</h5>
          <p>Engaging animations to highlight key messages and products.</p>
        </div>
        <div className="feature-card-video">
          <h5>Brand-Consistent Visuals</h5>
          <p>Typography, color schemes, and style aligned with your brand.</p>
        </div>
        <div className="feature-card-video">
          <h5>Optimized Video Output</h5>
          <p>High-quality videos optimized for all platforms and devices.</p>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="video-industries">
        <div className="industry-grid-video">
          <div className="industry-card-video">E-commerce & Retail</div>
          <div className="industry-card-video">Healthcare & Fitness</div>
          <div className="industry-card-video">Education & Learning</div>
          <div className="industry-card-video">Real Estate</div>
          <div className="industry-card-video">Logistics & Supply Chain</div>
          <div className="industry-card-video">Finance & Banking</div>
          <div className="industry-card-video">Startups & SMEs</div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="video-portfolio" style={{ padding: "80px 10%" }}>
        <div className="portfolio-card">
          <img src={portfolioImg} alt="Portfolio Video Project" />
          <div className="portfolio-text">
            <h3>Social Media Promo Video for XYZ Brand</h3>
            <p>Motion graphic video with animated visuals and voiceover led to 65% higher engagement on social media.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="video-cta-final">
        <p>Ready to create videos that captivate your audience?</p>
        <div className="video-cta">
          <button className="btn-primary-video">Get a Free Consultation</button>
          <button className="btn-outline-video">Contact Us Today</button>
        </div>
      </section>

    </div>
    </>
  );
};

export default VideoEditing;
