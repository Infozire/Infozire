import React from "react";
import "./MeetOurTeam.css";
import Navbar from "./Navbar";
import { FaUserCircle, FaLinkedin, FaEnvelope } from "react-icons/fa";
import teamImage from "../assets/Team.jpg";
const teamMembers = [
 {
  name: "Praburam M",
  role: "Founder & CEO",
  skills: [
    "Full Stack Development",
    "Business Leadership",
    "Technology Strategy",
    "Product Development",
    "Innovation"
  ],
},
  {
  name: "Anbarasi P",
  role: "Director",
  skills: [
    "Accounts Management",
    "Team Management",
    "Client Relations",
    "Research & Development"
  ],
},
{
  name: "Santhosh Kumar",
  role: "Chief Technology Officer (CTO)",
  skills: [
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "Python Development",
    "System Architecture"
  ],
}
];

const MeetOurTeam = () => {
  return (
    <>
      <Navbar />

      <div className="team-page">

        {/* HERO */}
        <section className="team-hero">
          <span className="team-tag">OUR EXPERTS</span>

          <h1>
            Meet The Team Behind
            <span> Infozire</span>
          </h1>

          <p>
            We are a passionate group of developers, designers,
            strategists, and innovators dedicated to building
            digital experiences that transform businesses.
          </p>
        </section>
 {/* Team Group Image */}
  <div className="team-group-image">
    <img src={teamImage} alt="Infozire Team" />
  </div>
        {/* STATS */}
        <section className="stats-section">
          <div className="stat-card">
            <h2>15+</h2>
            <p>Projects Delivered</p>
          </div>

          <div className="stat-card">
            <h2>10+</h2>
            <p>Experts</p>
          </div>

          <div className="stat-card">
            <h2>100%</h2>
            <p>Client Satisfaction</p>
          </div>

          <div className="stat-card">
            <h2>6+</h2>
            <p>Years Experience</p>
          </div>
        </section>

        {/* TEAM MEMBERS */}
        <section className="team-section">
          <h2 className="section-heading">
            Our Leadership & Experts
          </h2>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>

                {/* Profile Icon */}
                <div className="image-wrapper">
                  <FaUserCircle className="profile-icon" />
                </div>

                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>

                <div className="skill-tags">
                  {member.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                </div>

                {/* <div className="social-links">
                  <a href="#">
                    <FaLinkedin />
                  </a>

                  <a href="#">
                    <FaEnvelope />
                  </a>
                </div> */}

              </div>
            ))}
          </div>
        </section>

        {/* CULTURE */}
        <section className="culture-section">
          <div className="culture-content">
            <h2>Why Work With Infozire?</h2>

            <p>
              We combine innovation, technology, and creativity
              to deliver impactful digital solutions. Our team
              focuses on quality, collaboration, and continuous
              growth to ensure every project exceeds expectations.
            </p>

            <button className="join-btn">
              Join Our Team
            </button>
          </div>
        </section>

      </div>
    </>
  );
};

export default MeetOurTeam;