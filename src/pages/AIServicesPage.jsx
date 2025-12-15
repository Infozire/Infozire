import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import aiImage from "../assets/aiImage.jpg";

const AIServicesPage = () => {
  const navigate = useNavigate();

  return (
    
<div className="min-h-screen bg-gradient-to-b from-[#0A0F1C] to-[#0A1F2F] text-white px-8 py-16 ">

      {/* TITLE */}
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold mb-12 text-center text-white"
      >
        Industries We Serve with AI
      </motion.h1>


      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        {/* LEFT LIST */}
        <div className="space-y-6">
          {[
            {
              title: "Retail & E-Commerce",
              desc: "Personalized shopping, chatbots, AI-driven promotions",
            },
            {
              title: "Education",
              desc: "Adaptive learning systems, student performance tracking",
            },
            {
              title: "Healthcare",
              desc: "Predictive analytics, appointment bots, AI medical insights",
            },
            {
              title: "Finance",
              desc: "Fraud detection, risk analysis, automated reporting",
            },
            {
              title: "Hospitality",
              desc: "Virtual concierge, smart booking systems",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-orange-500">{item.title}</h3>
              <p className="text-slate-300 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT IMAGE */}
        <motion.img
          src={aiImage}
          alt="AI Example"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl shadow-2xl border border-white/10"
        />
      </div>

   
{/* WHY CHOOSE SECTION */}
<motion.div
    className="max-w-4xl mx-auto mt-20"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
>
    <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-3xl font-bold text-white mb-6"
    >
        Why Choose Infozire AI?
    </motion.h2>

    <div className="space-y-4 text-lg text-slate-300">
        {[
            "Custom-Built – AI solutions designed for your exact business needs",
            "Affordable & Scalable – Enterprise-grade AI for SMEs & startups",
            "Reliable Leadership – Guided by CEO Praburam",
            "End-to-End Service – Consultation → Deployment → Support",
        ].map((text, i) => (
            <motion.p
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            >
                ⚡ <strong className="text-white">{text.split(" – ")[0]}</strong> – {text.split(" – ")[1]}
            </motion.p>
        ))}
    </div>
</motion.div>

{/* FUTURE READY */}
<motion.div
    className="max-w-4xl mx-auto mt-16"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
>
    <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-3xl font-bold text-orange-500 mb-4"
    >
        Future-Ready with Infozire AI
    </motion.h2>

    <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-slate-300 text-lg leading-relaxed"
    >
        Our AI isn’t just technology—it empowers businesses to be efficient, smart and competitive.
        From small shops to enterprises, Infozire AI gives you the future advantage.
    </motion.p>
</motion.div>

      {/* CTA BUTTON */}
      <div className="text-center mt-14">
        <button
          onClick={() => navigate("/services/ai-automation")}
          className="px-10 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
        >
          🚀 Explore AI Solutions with Infozire
        </button>
      </div>

    </div>
  );
};

export default AIServicesPage;
