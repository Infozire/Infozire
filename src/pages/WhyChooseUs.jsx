import React from "react";
import { motion } from "framer-motion";
import ai1 from "../assets/infologo.png";
import transparent from "../assets/transparent.png"
import certified from "../assets/certified.png"
import scale from "../assets/scale.png"
import delivery from "../assets/delivery.png"
const features = [
  {
    image: transparent,
    title: "Transparent Pricing",
    desc: "Clear and upfront pricing with no hidden costs ensures trust and transparency.",
    color: "from-indigo-400 to-indigo-600",
  },
  {
  image: delivery,
    title: "On-time Delivery",
    desc: "We respect your schedule and deliver projects right on time, every time.",
    color: "from-pink-400 to-pink-600",
  },
  {
  image: certified,
    title: "Certified Developers",
    desc: "Our team consists of certified experts skilled in the latest technologies.",
    color: "from-green-400 to-green-600",
  },
  {
   image: scale,
    title: "Scalable Tech Stack",
    desc: "Solutions built to scale seamlessly as your business grows.",
    color: "from-yellow-400 to-yellow-600",
  },
];

const WhyChooseUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-20 bg-gradient-to-br from-indigo-50 to-pink-50 overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute -top-40 -left-1/2 w-[800px] h-[600px] bg-indigo-200 rounded-[50%] opacity-20 rotate-[25deg]" />
      <div className="absolute -bottom-40 -right-1/3 w-[700px] h-[500px] bg-pink-200 rounded-[50%] opacity-20 rotate-[-15deg]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-16 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="md:w-1/2 space-y-6"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-8"
          >
            Why Choose <span className="text-pink-500">Us</span>
          </motion.h2>

          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-6 bg-white shadow-lg rounded-full p-3 md:p-4 hover:shadow-2xl transition duration-300"
            >
          <div
  className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr ${feature.color} flex-shrink-0`}
>
  <img
    src={feature.image}
    alt={feature.title}
    className="w-12 h-12 object-contain"
  />
</div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-1/2 relative flex justify-center"
        >
          <div className="relative flex justify-center items-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full md:w-80 h-80 bg-gradient-to-tr from-blue-400 via-indigo-500 to-pink-400 rounded-full shadow-xl"
            />
            <motion.img
              src={ai1}
              alt="AI illustration"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute w-60 h-60 object-cover rounded-full shadow-2xl -translate-y-2"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
