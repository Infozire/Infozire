import React, { useEffect } from "react";
import {
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  CloudIcon,
  UserGroupIcon,
  BoltIcon,
  ChartBarIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import "./Features.css";

const features = [
  {
    title: "Advanced Technology Stack",
    desc: "We utilize AI, automation, and modern frameworks to build high-performance digital products that move businesses forward.",
    icon: CpuChipIcon,
  },
  {
    title: "Cloud-Native & Scalable Architecture",
    desc: "Enterprise-grade cloud solutions optimized for scalability, global access, and long-term business growth.",
    icon: CloudIcon,
  },
  {
    title: "Client-First Engineering",
    desc: "We collaborate closely as strategic partners, ensuring your ideas turn into measurable and meaningful outcomes.",
    icon: UserGroupIcon,
  },
  {
    title: "Innovation at the Core",
    desc: "Every solution is crafted with creativity, future-thinking, and cutting-edge digital capabilities.",
    icon: SparklesIcon,
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Agile development and automation pipelines ensure rapid, precise, and transparent project delivery.",
    icon: BoltIcon,
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Security-first development with compliance, encryption, IAM, and continuous monitoring.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Data-Driven Workflows",
    desc: "Insightful dashboards, analytics, and automation that help businesses make smarter decisions.",
    icon: ChartBarIcon,
  },
  {
    title: "Long-Term Partnership",
    desc: "Consistent post-launch support, upgrades, maintenance, and performance optimization.",
    icon: RocketLaunchIcon,
  },
];

const Features = () => {

  // ✅ Scroll Reveal Animation Logic
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight reveal">
            Why Businesses <span className="text-orange-600">Choose Infozire</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16 reveal">
            We combine innovation, engineering excellence, and strategic execution to build digital
            ecosystems that create real value.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feat, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 reveal"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <feat.icon className="w-14 h-14 text-orange-600 mb-5 mx-auto" />

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feat.title}
                </h3>

                <p className="text-gray-600">{feat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Features;
