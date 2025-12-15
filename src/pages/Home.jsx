// src/App.jsx
import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "../pages/features";
import AIAutomation from "./AIServicesPage"
import ai1 from "../assets/ai1.jpg";
import banner2 from "../assets/banner2.png"
import python from "../assets/python.jpg"
import react from "../assets/react.jpg"
import node from "../assets/node.jpg"
import aws from "../assets/aws.jpg"
import next from "../assets/next.jpg"
import docker from "../assets/docker.jpg"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCarousel from "./services/CircularServices";
import StatsSection from "./StatsSection";
import WhyChooseUs from "./WhyChooseUs";
const industries = [
  { key: "healthcare", name: "Healthcare", icon: "hospital" },
  { key: "education", name: "Education", icon: "book" },
  { key: "retail", name: "Retail", icon: "bag" },
  { key: "finance", name: "Finance", icon: "wallet" },
  { key: "realestate", name: "Real Estate", icon: "building" },
];

const Icon = ({ name }) => {
  if (name === "hospital")
    return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M12 7v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M9 10h6M4 7h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (name === "book")
    return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>;
  if (name === "bag")
    return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M6 9v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9" stroke="currentColor" strokeWidth="1.4"/><path d="M9 9a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.4"/></svg>;
  if (name === "wallet")
    return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M16 12h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
  return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/></svg>;
};

export default function App() {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen from-slate-900 via-slate-900 to-slate-950 text-slate-100">
            <Navbar />

            <div className="pt-16"> {/* Padding to avoid overlap */}
                <HeroSection />


            </div>         <main className="w-full">


<section className="relative overflow-hidden pt-14 pb-10 bg-white">

    {/* BACKGROUND EFFECTS */}
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -top-24 -left-24"></div>
        <div className="absolute w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl bottom-0 right-0"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/grid-noise.png')]"></div>
    </div>

    <div className="relative w-full px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE – CONTENT */}
      <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }} // animate when 30% of element is visible, only once
    transition={{ duration: 1.8, ease: "easeOut" }}
    className="space-y-6"
>
    <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900"
    >
        Technology That Works
        <span className="block text-4xl text-orange-600 italic mt-1">
            Smarter for You ✨
        </span>
    </motion.h1>

    <motion.p
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
        className="text-slate-600 text-lg leading-relaxed max-w-lg"
    >
        At <span className="font-semibold text-orange-500">Infozire</span>, every solution is designed with a single goal—helping businesses work smarter. Whether you are starting a new venture or strengthening existing operations, our digital services deliver clarity, performance, and long-term value.
    </motion.p>

    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 1.1, duration: 1.5, ease: "easeOut" }}
        className="flex gap-4 pt-4"
    >
        <Link
            to="/services"
            className="px-6 py-3 rounded-xl font-semibold text-white 
            bg-gradient-to-r from-orange-500 to-indigo-600 shadow-lg 
            hover:shadow-indigo-500/30 hover:-translate-y-1 transition"
        >
            Start a Project
        </Link>

        <Link
            to="/features"
            className="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl 
            hover:bg-orange-100 transition"
        >
            See Features
        </Link>
    </motion.div>
</motion.div>

{/* Right side image */}
<motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: 0.8, duration: 1.6, ease: "easeOut" }}
    className="relative flex justify-center items-center"
>
    <div className="absolute w-80 h-80 bg-gradient-to-tr 
                    from-orange-400 via-indigo-400 to-cyan-400 
                    rounded-full blur-3xl opacity-30">
    </div>

    <img
      src={banner2}
      alt="AI Technology Illustration"
      className="relative w-80 md:w-[500px] lg:w-[560px]
                 rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
    />
</motion.div>


    </div>
</section>



             <section className="py-16 md:py-32 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="container mx-auto px-4 relative z-10 text-center space-y-6"
  >

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
    >
      Powering Businesses with Modern Tech
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
    >
      At Infozire, we leverage cutting-edge technologies to build scalable,
      secure, and innovative digital products.
    </motion.p>

    {/* Tech Grid */}
    <motion.div
      className="
        mt-10
        grid grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-4 sm:gap-6 md:gap-8
        items-center justify-items-center
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 }
        }
      }}
    >

      {[ 
        { img: react, label: "React" },
        { img: node, label: "Node" },
        { img: aws, label: "AWS" },
        { img: next, label: "Next JS" },
        { img: python, label: "Python" },
        { img: docker, label: "" },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, scale: 0.85 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          className="
            tech-card
            w-28 h-28
            sm:w-32 sm:h-32
            md:w-36 md:h-36
            lg:w-40 lg:h-40
            p-3 sm:p-4
            rounded-xl
            bg-cover bg-center
            flex items-end
          "
          style={{ backgroundImage: `url(${item.img})` }}
        >
          {item.label && (
            <p className="text-white text-xs sm:text-sm font-medium">
              {item.label}
            </p>
          )}
        </motion.div>
      ))}

    </motion.div>

  </motion.div>
</section>

        <ServiceCarousel/> 
                <AIAutomation />
<WhyChooseUs/>

<StatsSection/>
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="py-24 md:py-32 bg-gradient-to-tr from-indigo-50 via-white to-pink-50 relative overflow-hidden"
>
  {/* Background Decorative Shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

  <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-indigo-900"
    >
      Testimonials
    </motion.h2>

    {/* Testimonials Grid */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
    >

      {/* Testimonial Card */}
      {[ 
        {
          text: `"Infozire Solutions exceeded our expectations! Their team delivered a scalable solution on time and within budget."`,
          img: "https://randomuser.me/api/portraits/men/32.jpg",
          name: "John Doe",
          role: "CEO, TechCorp",
          border: "border-indigo-300",
          color: "text-indigo-900",
        },
        {
          text: `"The team at Infozire is highly professional. Transparent pricing and on-time delivery made working with them seamless."`,
          img: "https://randomuser.me/api/portraits/women/44.jpg",
          name: "Jane Smith",
          role: "Founder, InnovateX",
          border: "border-pink-300",
          color: "text-pink-700",
        },
        {
          text: `"Certified developers and scalable tech stack – Infozire delivered exactly what we needed."`,
          img: "https://randomuser.me/api/portraits/men/56.jpg",
          name: "Michael Lee",
          role: "CTO, SoftSolutions",
          border: "border-green-300",
          color: "text-green-700",
        },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -12 }}
          className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition"
        >
          <p className="text-gray-700 mb-6">{item.text}</p>

          <div className="flex items-center gap-4">
            <img
              src={item.img}
              alt={item.name}
              className={`w-12 h-12 rounded-full border-2 ${item.border}`}
            />
            <div className="text-left">
              <h4 className={`font-bold ${item.color}`}>{item.name}</h4>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>
          </div>
        </motion.div>
      ))}

    </motion.div>
  </div>
</motion.section>

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative py-24 md:py-32 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 overflow-hidden"
>
  {/* Background Decorative Shapes */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

  <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">

    {/* Content Wrapper for Stagger */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {/* Heading */}
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-6"
      >
        Let’s Build Something Great Together
      </motion.h2>

      {/* Subtext */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-lg md:text-xl text-white/90 mb-12"
      >
        Contact Our Team and turn your ideas into reality with cutting-edge technology.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center gap-6 flex-wrap"
      >
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:shadow-2xl transition"
        >
          Contact Us
        </motion.a>

        <motion.a
          href="/services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition"
        >
          Explore Services
        </motion.a>
      </motion.div>
    </motion.div>

  </div>
</motion.section>


            </main>

            <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
                © {new Date().getFullYear()} Infozire. All rights reserved.
            </footer>
        </div>
    );
}
