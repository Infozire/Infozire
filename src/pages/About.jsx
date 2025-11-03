import { motion } from "framer-motion";
import { Zap, Globe, Lightbulb, Handshake } from "lucide-react";

export default function About() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          INFO<span className="text-orange-500">ZIRE</span>
        </motion.h1>

        {/* Who We Are */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Infozire is a technology company founded by a young entrepreneur with a bold vision: to make digital transformation affordable, scalable, and impactful.
          </p>
        </motion.div>

        {/* CEO Section */}
        <motion.div
          className="bg-gray-800/60 rounded-2xl shadow-lg p-8 md:p-12 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our <span className="text-orange-500">CEO</span>– PRABURAM
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At the heart of Infozire is <span className="font-bold text-white">Praburam</span>, 
            a dynamic leader with outstanding expertise in technology and management. 
            With extraordinary skills to analyze, strategize, and execute ideas swiftly, 
            he represents a new generation of leadership that inspires confidence and progress.
          </p>
          <br/>
          <p>We empower businesses with solutions in AI, software, cloud, websites, and marketing, built for simplicity and growth.</p>
        </motion.div>
    

        {/* Values */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            className="flex items-start gap-4 bg-gray-800/40 p-6 rounded-xl shadow hover:shadow-lg transition"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          >
            <Zap className="text-yellow-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="text-gray-400">To democratize technology and make innovation accessible to every business.
</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 bg-gray-800/40 p-6 rounded-xl shadow hover:shadow-lg transition"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          >
            <Globe className="text-blue-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold">Global Vision</h3>
              <p className="text-gray-400">A future where even the smallest entrepreneur has the power of advanced digital tools.</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 bg-gray-800/40 p-6 rounded-xl shadow hover:shadow-lg transition"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          >
            <Lightbulb className="text-green-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold">Innovation with Purpose</h3>
              <p className="text-gray-400">Every solution is designed to make real impact.</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 bg-gray-800/40 p-6 rounded-xl shadow hover:shadow-lg transition"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          >
            <Handshake className="text-purple-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold">Partnership with Trust</h3>
              <p className="text-gray-400">We build long-term collaborations based on trust.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
