// AutoServiceCarousel.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* =======================
   SERVICES DATA
======================= */
const services = [
  {
    title: "Website Development",
    short: "Business, portfolio & e-commerce websites.",
    link: "/services/website-development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Mobile App Development",
    short: "Android, iOS & hybrid apps.",
    link: "/services/mobile-app-development",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    title: "Software & Web Apps",
    short: "CRM, SaaS, dashboards & custom apps.",
    link: "/services/software-web-development",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "UI/UX Design",
    short: "Wireframes, UX, UI screens & design systems.",
    link: "/services/ui-ux-design",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
  },
  {
    title: "AI & Automation",
    short: "Chatbots, automation & intelligent systems.",
    link: "/services/ai-automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    title: "Cloud & DevOps",
    short: "Cloud setup, CI/CD, scaling & deployment.",
    link: "/services/cloud-devops",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
];

export default function AutoServiceCarousel() {
  const [index, setIndex] = useState(0);

  const spacing = 380;
  const cardWidth = 360;

  /* =======================
     AUTO SLIDE
  ======================= */
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % services.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const getPos = (i) => {
    const prev = (index - 1 + services.length) % services.length;
    const next = (index + 1) % services.length;
    if (i === index) return "center";
    if (i === prev) return "left";
    if (i === next) return "right";
    return "hidden";
  };

  const variants = {
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 50,
    },
    left: {
      x: -spacing,
      scale: 0.92,
      opacity: 0.85,
      zIndex: 40,
    },
    right: {
      x: spacing,
      scale: 0.92,
      opacity: 0.85,
      zIndex: 40,
    },
    hidden: {
      opacity: 0,
      scale: 0.8,
      zIndex: 10,
      pointerEvents: "none",
    },
  };

  return (
    <section className="relative pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"></div>

      {/* TITLE */}
     <div className="relative z-10 text-center pt-10">

        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Our Key Services
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-2">
          Future-ready digital solutions powered by design, code & intelligence.
        </p>

        <div className="flex justify-center mt-5">
          <Link
            to="/services"
            className="px-6 py-3 rounded-full bg-orange-500 text-black font-semibold
                       hover:bg-orange-400 shadow-lg transition"
          >
            View All Services →
          </Link>
        </div>
      </div>

      {/* =======================
         DESKTOP CAROUSEL
      ======================= */}
<div className="relative min-h-[420px] mt-10 flex items-center justify-center">
  <div className="relative w-full max-w-4xl flex items-center justify-center">
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={variants}
              animate={getPos(i)}
              transition={{ type: "spring", stiffness: 200, damping: 28 }}
              className="absolute rounded-[32px] shadow-2xl overflow-hidden border border-white/20"
              style={{
                width: cardWidth,
                height: 420,
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

              {/* CONTENT */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-200 text-lg leading-relaxed">
                    {item.short}
                  </p>
                </div>

             <div className="flex justify-center">
  <Link
    to={item.link}
    className="inline-block px-7 py-3 rounded-full
               bg-gradient-to-r from-orange-500 to-indigo-600
               text-white font-semibold shadow-lg
               hover:scale-105 transition"
  >
    Learn More →
  </Link>
</div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =======================
         MOBILE VIEW (STACKED)
      ======================= */}
      <div className="md:hidden mt-12 px-4 grid grid-cols-1 gap-6 relative z-10">
        {services.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl bg-slate-800 border border-white/10 p-6"
          >
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-gray-300 mt-2">{item.short}</p>
            <Link
              to={item.link}
              className="inline-block mt-4 text-orange-400 font-semibold"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="hidden md:flex justify-center mt-8 gap-3 relative z-10">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all ${
              i === index ? "bg-orange-500 w-8" : "bg-gray-400 w-3"
            }`}
          ></button>
        ))}
      </div>

    </section>
  );
}
