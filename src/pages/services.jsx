import { motion } from "framer-motion";
import {
  Code2, Cloud, Cpu, Workflow,
  Briefcase, Palette, Headphones, TrendingUp,
  Search, BrainCircuit, Factory
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const categories = [
    {
      title: "Technology Solutions",
      services: [
        { icon: <Code2 className="w-6 h-6 text-blue-400" />, name: "Custom Web & Mobile Development" },
        { icon: <Cloud className="w-6 h-6 text-cyan-400" />, name: "Cloud Infrastructure & Hosting" },
        { icon: <Cpu className="w-6 h-6 text-green-400" />, name: "Artificial Intelligence Integration" },
        { icon: <Workflow className="w-6 h-6 text-yellow-400" />, name: "Automation & Workflow Enhancements" },
      ],
    },
    {
      title: "Business Services",
      services: [
        { icon: <Briefcase className="w-6 h-6 text-purple-400" />, name: "Digital Transformation Consulting" },
        { icon: <Palette className="w-6 h-6 text-pink-400" />, name: "Brand Identity & Strategy" },
        { icon: <Headphones className="w-6 h-6 text-red-400" />, name: "Business Process Outsourcing (BPO)" },
        { icon: <TrendingUp className="w-6 h-6 text-orange-400" />, name: "Customer Experience Solutions" },
      ],
    },
    {
      title: "Innovation Edge",
      services: [
        { icon: <Search className="w-6 h-6 text-indigo-400" />, name: "Research on Emerging Tech" },
        { icon: <BrainCircuit className="w-6 h-6 text-teal-400" />, name: "AI-Driven Business Insights" },
        { icon: <Factory className="w-6 h-6 text-lime-400" />, name: "Industry-Specific Smart Solutions" },
      ],
    },
  ];

 const container = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.15, 
      ease: "easeInOut" 
    } 
  },
};

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};


  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h1>

        {/* Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-10"
        >
          {categories.map((category, i) => (
            <motion.div
              key={i}
              variants={card}
              className="bg-gray-800/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm hover:bg-gray-700/70 transition"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gradient bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                {category.title}
              </h2>

              <ul className="space-y-4">
                {category.services.map((service, j) => (
                  <motion.li
                    key={j}
                    whileHover={{ x: 6, scale: 1.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition cursor-pointer"
                  >
                    {service.icon}
                    <span className="text-lg text-gray-200">{service.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Service Descriptions as Animated Grid */}
        <motion.div
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* AI Solutions */}
          <motion.div variants={card} className="bg-gray-800/60 rounded-xl shadow-lg p-8 backdrop-blur-md hover:bg-gray-700/70 transition">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">AI Solutions</h2>
            <p className="text-gray-300 mb-4">
              Smarter Businesses, Powered by AI. Infozire AI helps businesses automate, predict, and personalize like never before.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>AI Chatbots & Assistants</li>
              <li>Predictive Analytics</li>
              <li>Process Automation (RPA + AI)</li>
              <li>Recommendation Systems</li>
              <li>AI-Powered Marketing</li>
            </ul>
            <Link to="/services/ai-solutions">
              <button className="mt-4 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-black font-semibold">
                👉 Talk to Our AI Team
              </button>
            </Link>

          </motion.div>

          {/* Custom Software Development */}
          <motion.div variants={card} className="bg-gray-800/60 rounded-xl shadow-lg p-8 backdrop-blur-md hover:bg-gray-700/70 transition">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Custom Software Development</h2>
            <p className="text-gray-300 mb-4">
              Software That Fits Your Business. From workflow automation to enterprise platforms, we build applications that simplify and scale.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>ERP, CRM & Portals</li>
              <li>Custom Mobile & Web Apps</li>
              <li>Secure & Scalable Architecture</li>
            </ul>
            <Link to="/services/software-development">
              <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-black font-semibold">
                👉 Start Building Software
              </button>
            </Link>
          </motion.div>

          {/* Website Development */}
          <motion.div variants={card} className="bg-gray-800/60 rounded-xl shadow-lg p-8 backdrop-blur-md hover:bg-gray-700/70 transition">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Website Development</h2>
            <p className="text-gray-300 mb-4">
              Websites That Work Beyond Design. We create websites that blend creativity with performance.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Corporate Websites</li>
              <li>E-Commerce Platforms</li>
              <li>Landing Pages & Microsites</li>
            </ul>
            <Link to="/services/website-development">

              <button className="mt-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-black font-semibold">
                👉 Get Your Website Built
              </button>
            </Link>
          </motion.div>

          {/* Cloud Solutions */}
          <motion.div variants={card} className="bg-gray-800/60 rounded-xl shadow-lg p-8 backdrop-blur-md hover:bg-gray-700/70 transition">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Cloud Solutions</h2>
            <p className="text-gray-300 mb-4">
              Scale Without Limits. Adopt secure and flexible cloud infrastructure to power the future of work.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>SaaS Deployment</li>
              <li>Cloud Migration</li>
              <li>Data Security & Backup</li>
            </ul>
            <Link to="/services/cloud-solutions">

              <button className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-black font-semibold">
                👉 Move to the Cloud
              </button>
            </Link>
          </motion.div>

          {/* Digital Marketing */}
          <motion.div variants={card} className="bg-gray-800/60 rounded-xl shadow-lg p-8 backdrop-blur-md hover:bg-gray-700/70 transition">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">Digital Marketing</h2>
            <p className="text-gray-300 mb-4">
              Marketing That Converts, Not Just Reaches. Creative campaigns powered by data.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>SEO & Content</li>
              <li>Paid Ads (Google, Meta, LinkedIn)</li>
              <li>Branding & Social Media Campaigns</li>
            </ul>
            <Link to="/services/digital-marketing">

              <button className="mt-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-black font-semibold">
                👉 Boost Your Growth
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
