// src/App.jsx
import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "../pages/features";
import AIAutomation from "./AIServicesPage"
import ai1 from "../assets/ai1.jpg";
import ai2 from "../assets/ai2.jpg";
import ai3 from "../assets/ai3.jpg";
import ai4 from "../assets/ai4.jpg";
import ai5 from "../assets/ai5.jpg";
import python from "../assets/python.jpg"
import react from "../assets/react.jpg"
import node from "../assets/node.jpg"
import aws from "../assets/aws.jpg"
import next from "../assets/next.jpg"
import docker from "../assets/docker.jpg"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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


               <section className="relative overflow-hidden py-24 md:py-32 bg-[#061929]">

    {/* BACKGROUND EFFECTS */}
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl bottom-0 right-0"></div>
        <div className="absolute inset-0 opacity-[0.08] bg-[url('/grid-noise.png')]"></div>
    </div>

    <div className="relative w-full px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE – CONTENT NOT CHANGED */}
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="space-y-6"
        >
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-extrabold leading-tight text-white"
            >
                Technology That <span>Works</span>
                <span className="block text-blue-400 mt-1">Smarter for You ✨</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
                className="text-slate-300 text-lg leading-relaxed max-w-lg"
            >
                At <span className="font-semibold text-white">Infozire</span>, every solution is designed with a single goal—helping businesses work smarter. Whether you are starting a new venture or strengthening existing operations, our digital services deliver clarity, performance, and long-term value.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
                className="text-slate-300 text-lg leading-relaxed max-w-lg"
            >
                We design technology that simplifies, scales, and transforms businesses. Our AI solutions, cloud platforms, and digital branding help companies grow faster and stay future-ready.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 1.5, ease: "easeOut" }}
                className="flex gap-4 pt-4"
            >
                <Link
                    to="/services"
                    className="px-6 py-3 rounded-xl font-semibold text-white 
                    bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg 
                    hover:shadow-blue-500/40 hover:-translate-y-1 transition"
                >
                    Start a Project
                </Link>

                <Link
                    to="/features"
                    className="px-6 py-3 border border-white/20 text-white rounded-xl 
                    hover:bg-white/10 backdrop-blur-xl transition"
                >
                    See Features
                </Link>
            </motion.div>

            {/* TAGS */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 1.5, ease: "easeOut" }}
                className="flex gap-4 pt-3 text-sm"
            >
                {[
                    { name: "AI", path: "/services/ai-solutions" },
                    { name: "Software", path: "/services/software-web-development" },
                    { name: "Cloud", path: "/services/cloud-devops" },
                    { name: "Digital", path: "/services/digital-branding" },
                ].map((item, i) => (
                    <motion.span
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + i * 0.25, duration: 1.2, ease: "easeOut" }}
                        className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 
                        text-slate-300 cursor-pointer backdrop-blur-xl"
                        onClick={() => window.location.href = item.path}
                    >
                        {item.name}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>

        {/* RIGHT SIDE — NEW DESIGN LIKE YOUR IMAGE */}
   {/* RIGHT – Floating Image Bars Like Sample */}
<motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8, duration: 1.6, ease: "easeOut" }}
    className="relative flex flex-col gap-6 items-start"
>
    {/* Background Glow */}
    <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-[90px] rounded-full"></div>

    {/* IMAGE GROUP */}
    {[
        ai1,
        ai2,
        ai3,
        ai4,
        ai5,
    ].map((img, i) => (
        <motion.div
            key={i}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.2, duration: 1.4 }}
            className="w-[380px] h-[90px] rounded-full overflow-hidden border border-white/10 shadow-xl bg-white/5 backdrop-blur-xl"
        >
            <img
                src={img}
                alt="ai"
                className="w-full h-full object-cover"
            />
        </motion.div>
    ))}
</motion.div>


    </div>
</section>

                <section className="py-24 md:py-32 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">

                    {/* Entire Section Fade + Slide */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="container relative z-10 text-center space-y-6"
                    >
                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-4xl md:text-5xl font-bold text-white"
                        >
                            Powering Businesses with Modern Tech
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto"
                        >
                            At Infozire, we leverage cutting-edge technologies to build scalable,
                            secure, and innovative digital products.
                        </motion.p>

                        {/* Grid with stagger animation */}
                        <motion.div
                            className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center"
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

                            {/* CARD ANIMATION VARIANT */}
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
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: { opacity: 1, scale: 1 }
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    whileHover={{ scale: 1.08 }}
                                    className="tech-card w-40 h-40 p-4 rounded-xl bg-cover bg-center flex items-end"
                                    style={{ backgroundImage: `url(${item.img})` }}
                                >
                                    {item.label && (
                                        <p className="text-white text-sm font-medium">{item.label}</p>
                                    )}
                                </motion.div>
                            ))}

                        </motion.div>
                    </motion.div>

                </section>
                
                {/* ============================
    SERVICES OVERVIEW – 6 SERVICES
============================= */}
  <section className="py-24 bg-black">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <h2 className="text-5xl font-extrabold text-white">Our Key Services</h2>
      <p className="mt-3 text-gray-300 text-lg max-w-2xl mx-auto">
        Future-ready digital solutions powered by design, code & intelligence.
      </p>
    </motion.div>

    {/* GRID */}
    <div className="mt-16 grid md:grid-cols-3 gap-10">
      {[
        { code: "WD", title: "Website Development", color: "shadow-blue-500/50", link: "/services/website-development" },
        { code: "MA", title: "Mobile Apps", color: "shadow-purple-500/50", link: "/services/mobile-app-development" },
        { code: "SW", title: "Software Apps", color: "shadow-teal-500/50", link: "/services/software-web-development" },
        { code: "UX", title: "UI/UX Design", color: "shadow-pink-500/50", link: "/services/ui-ux-design" },
        { code: "AI", title: "AI & Automation", color: "shadow-orange-500/50", link: "/services/ai-automation" },
        { code: "CD", title: "Cloud & DevOps", color: "shadow-green-500/50", link: "/services/cloud-devops" }
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className={`p-8 rounded-3xl bg-gray-900 border border-gray-700 
                      shadow-xl hover:${item.color} hover:shadow-2xl transition-all duration-300`}
        >
          <div className="h-16 w-16 rounded-xl bg-white text-black flex items-center justify-center font-bold">
            {item.code}
          </div>

          <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-gray-400">High-performance engineered solutions.</p>

          <Link to={item.link} className="mt-6 inline-block text-pink-400 font-semibold">
            Learn More →
          </Link>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-16">
      <Link
        to="/services"
        className="px-12 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200"
      >
        View All Services →
      </Link>
    </div>

  </div>
</section>



                <AIAutomation />
 <section className="relative py-28 bg-gradient-to-br from-indigo-50 to-pink-50 overflow-hidden">
  {/* Curved background shape */}
  <div className="absolute -top-40 -left-1/2 w-[1000px] h-[800px] bg-indigo-200 rounded-[50%] opacity-20 rotate-[25deg]"></div>
  <div className="absolute -bottom-40 -right-1/3 w-[900px] h-[700px] bg-pink-200 rounded-[50%] opacity-20 rotate-[-15deg]"></div>

  <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-16 relative z-10">

    {/* LEFT SIDE - Feature Highlights */}
    <div className="md:w-1/2 space-y-10">
      <h2 className="text-5xl font-extrabold text-indigo-900 mb-8">
        Why Choose <span className="text-pink-500">Us</span>
      </h2>

      {/* Features as floating pills */}
      {[
        { icon: "💰", title: "Transparent Pricing", desc: "Clear and upfront pricing with no hidden costs ensures trust and transparency.", color: "from-indigo-400 to-indigo-600" },
        { icon: "⏱️", title: "On-time Delivery", desc: "We respect your schedule and deliver projects right on time, every time.", color: "from-pink-400 to-pink-600" },
        { icon: "🎓", title: "Certified Developers", desc: "Our team consists of certified experts skilled in the latest technologies.", color: "from-green-400 to-green-600" },
        { icon: "⚡", title: "Scalable Tech Stack", desc: "Solutions built to scale seamlessly as your business grows.", color: "from-yellow-400 to-yellow-600" },
      ].map((feature, idx) => (
        <div key={idx} className="flex items-center gap-6 bg-white shadow-lg rounded-full p-4 md:p-6 hover:shadow-2xl transition duration-300">
          <div className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl text-white font-bold bg-gradient-to-tr ${feature.color} flex-shrink-0`}>
            {feature.icon}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* RIGHT SIDE - Illustration */}
    <div className="md:w-1/2 relative flex justify-center">
  <div className="relative flex justify-center items-center">
         <div className="relative flex justify-center items-center">
        <div className="w-full md:w-96 h-96 bg-gradient-to-tr from-blue-400 via-indigo-500 to-pink-400 rounded-full shadow-xl animate-[float_6s_ease-in-out_infinite]"></div>
        <img
          src={ai1}
          alt="AI illustration"
          className="absolute w-72 h-72 object-cover rounded-full shadow-2xl -translate-y-4"
        />
      </div>
      </div>
      </div>

  </div>
</section>


<section className="py-24 md:py-32 bg-gradient-to-tr from-indigo-50 via-white to-pink-50 relative overflow-hidden">
  {/* Background Decorative Shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

  <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-indigo-900">
      Testimonials
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Testimonial 1 */}
      <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
        <p className="text-gray-700 mb-6">
          "Infozire Solutions exceeded our expectations! Their team delivered a scalable solution on time and within budget."
        </p>
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Client 1"
            className="w-12 h-12 rounded-full border-2 border-indigo-300"
          />
          <div className="text-left">
            <h4 className="font-bold text-indigo-900">John Doe</h4>
            <p className="text-gray-500 text-sm">CEO, TechCorp</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
        <p className="text-gray-700 mb-6">
          "The team at Infozire is highly professional. Transparent pricing and on-time delivery made working with them seamless."
        </p>
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Client 2"
            className="w-12 h-12 rounded-full border-2 border-pink-300"
          />
          <div className="text-left">
            <h4 className="font-bold text-pink-700">Jane Smith</h4>
            <p className="text-gray-500 text-sm">Founder, InnovateX</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
        <p className="text-gray-700 mb-6">
          "Certified developers and scalable tech stack – Infozire delivered exactly what we needed."
        </p>
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/56.jpg"
            alt="Client 3"
            className="w-12 h-12 rounded-full border-2 border-green-300"
          />
          <div className="text-left">
            <h4 className="font-bold text-green-700">Michael Lee</h4>
            <p className="text-gray-500 text-sm">CTO, SoftSolutions</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative py-24 md:py-32 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 overflow-hidden">
  {/* Background Decorative Shapes */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

  <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
      Let’s Build Something Great Together
    </h2>
    <p className="text-lg md:text-xl text-white/90 mb-12">
      Contact Our Team and turn your ideas into reality with cutting-edge technology.
    </p>

    <div className="flex justify-center gap-6 flex-wrap">
      <a
        href="/contact"
        className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
      >
        Contact Us
      </a>
      <a
        href="/services"
        className="px-8 py-4 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition"
      >
        Explore Services
      </a>
    </div>
  </div>
</section>

            </main>

            <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
                © {new Date().getFullYear()} Infozire. All rights reserved.
            </footer>
        </div>
    );
}
