import { motion } from "framer-motion";
import { Cpu, Cloud, Users, Lightbulb, Rocket, Lock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Cpu className="w-10 h-10 text-blue-400" />,
      title: "Cutting-Edge Technology",
      desc: "We leverage AI, automation, and modern frameworks to deliver solutions that redefine industries.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-cyan-400" />,
      title: "Cloud-Native Solutions",
      desc: "Scalable, secure, and globally optimized cloud infrastructure tailored for enterprise growth.",
    },
    {
      icon: <Users className="w-10 h-10 text-purple-400" />,
      title: "Client-Centric Approach",
      desc: "We partner with clients as trusted advisors, ensuring their vision transforms into measurable results.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-yellow-400" />,
      title: "Innovation First",
      desc: "Every feature is designed with creativity and future-proofing, making businesses smarter and adaptive.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-pink-400" />,
      title: "Fast & Reliable Delivery",
      desc: "Agile development and robust workflows ensure projects are executed with speed and precision.",
    },
    {
      icon: <Lock className="w-10 h-10 text-green-400" />,
      title: "Enterprise-Grade Security",
      desc: "Security and compliance are at the heart of every solution, protecting data and building trust.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our <span className="text-orange-500">Features</span>
        </motion.h1>

        <motion.p
          className="text-center text-lg text-gray-300 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Infozire Solutions, we blend technology, innovation, and strategy to create impactful digital ecosystems.
        </motion.p>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-gray-800/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm hover:bg-gray-700/70 transition"
            >
              <div className="flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-indigo-300">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
