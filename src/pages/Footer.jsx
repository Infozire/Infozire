import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const services = [
    "Website Development",
    "Mobile App Development",
    "Software & Web App Development",
    "UI/UX Designing",
    "AI & Automation",
    "Digital Branding & Marketing",
    "Cloud & DevOps",
    "IT Consulting",
    "Maintenance & Support",
    "Testing & QA",
    "API Development & Integrations",
    "E-commerce Development",
    "Video Editing & Motion Graphics",
    "Graphic Design Services",
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* COMPANY INFO */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Infozire</h2>
          <p className="text-gray-400 text-sm">
            We build intelligent, scalable, and future-ready digital solutions — 
            from AI automation to modern software and cloud platforms.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 transition">Services</Link></li>
            <li><Link to="/features" className="hover:text-orange-500 transition">Features</Link></li>
            <li><Link to="/blog" className="hover:text-orange-500 transition">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Our Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {services.slice(0, 7).map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
          <ul className="space-y-2 text-gray-400 text-sm mt-2">
            {services.slice(7).map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>

        {/* CONTACT & SOCIAL */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p>Email: <a href="mailto:info@infozire.com" className="hover:text-orange-500 transition">info@infozire.com</a></p>
          <p>Phone: <a href="tel:+911234567890" className="hover:text-orange-500 transition">+91 123 456 7890</a></p>
          <p>Address: 123 Infozire Tech Park, Chennai, India</p>

          <div className="flex gap-4 mt-4 text-gray-400">
            <a href="#" className="hover:text-white transition"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaGithub size={20} /></a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {currentYear} Infozire Private Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
