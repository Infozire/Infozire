import React from "react";
import "../pages/Blogs.css";
import Navbar from "./Navbar";

const Blogs = () => {
  return (
    <><Navbar/>
    <div className="blogs-container">

      {/* HERO SECTION */}
      <section className="blogs-hero">
        <h1 className="blogs-title">Insights, Tutorials & Tech Trends</h1>
        <p className="blogs-subtitle">
          Explore expert blogs from Infozire on AI, Web Development, UI/UX,
          App Development, Cloud, and Digital Strategy.
        </p>

        <div className="blogs-hero-btns">
          <button className="hero-btn primary">Read Latest Articles</button>
          <button className="hero-btn outline">Subscribe to Newsletter</button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="blog-categories">
        <h2 className="section-title">Categories</h2>
        <div className="category-grid">
          {[
            "AI & Automation",
            "Web Development",
            "Mobile Apps",
            "UI/UX Design",
            "Cloud & DevOps",
            "Digital Branding",
            "Software Engineering",
            "Tech Trends",
          ].map((cat, index) => (
            <div className="category-box" key={index}>
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="blog-list">
        <h2 className="section-title">Latest Blogs</h2>

        <div className="blog-grid">

          {/* BLOG CARD 1 */}
          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1526378722370-54e0bff2f8a0"
              alt="AI"
              className="blog-img"
            />
            <h3 className="blog-card-title">
              How AI is Transforming Modern Business Operations
            </h3>
            <p className="blog-card-excerpt">
              AI is redefining automation, customer experience, and
              decision-making. Learn how businesses use AI to scale
              efficiently.
            </p>
            <p className="blog-meta">By Praburam • Nov 30, 2025</p>
            <button className="read-more-btn">Read More →</button>
          </div>

          {/* BLOG CARD 2 */}
          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
              alt="UI design"
              className="blog-img"
            />
            <h3 className="blog-card-title">
              Top 7 UI/UX Principles Every Designer Should Follow
            </h3>
            <p className="blog-card-excerpt">
              Great design improves usability and user satisfaction. Discover
              the essential principles followed by top designers worldwide.
            </p>
            <p className="blog-meta">By Infozire Team • Nov 21, 2025</p>
            <button className="read-more-btn">Read More →</button>
          </div>

          {/* BLOG CARD 3 */}
          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="mobile app"
              className="blog-img"
            />
            <h3 className="blog-card-title">
              Why Your Business Needs a Mobile App in 2025
            </h3>
            <p className="blog-card-excerpt">
              Mobile apps boost engagement and trust. Explore why 2025 is the
              right time to build your business app.
            </p>
            <p className="blog-meta">By Infozire Insights • Oct 14, 2025</p>
            <button className="read-more-btn">Read More →</button>
          </div>

        </div>
      </section>
    </div>
    </>
  );
};

export default Blogs;
