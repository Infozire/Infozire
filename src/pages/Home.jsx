// src/App.jsx
import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "../pages/features";
import AIAutomation from "./AIServicesPage"
import Services from "./services";
import python from "../assets/python.jpg"
import react from "../assets/react.jpg"
import node from "../assets/node.jpg"
import aws from "../assets/aws.jpg"
import next from "../assets/next.jpg"
import docker from "../assets/docker.jpg"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function App() {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen from-slate-900 via-slate-900 to-slate-950 text-slate-100">
            <Navbar />

            <div className="pt-16"> {/* Padding to avoid overlap */}
                <HeroSection />


            </div>         <main className="w-full">

       
        <section className="py-24 md:py-32 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">

            <div className="w-full px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT */}
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
                        Technology That Works
                        <span className="block text-blue-400 mt-1">Smarter for You ✨</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 45 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
                        className="text-slate-300 text-lg leading-relaxed max-w-lg"
                    >
                        At <span className="font-semibold text-white">Infozire</span>, we design technology that
                        simplifies, scales, and transforms businesses. Our AI solutions, cloud
                        platforms, and digital branding help companies grow faster and stay
                        future-ready.
                    </motion.p>
<motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.1, duration: 1.5, ease: "easeOut" }}
    className="flex gap-4 pt-4"
>
    <Link
        to="/services"
        className="px-6 py-3 bg-blue-500 text-black font-semibold rounded-xl hover:bg-blue-400 shadow-lg transition"
    >
        Start a Project
    </Link>
    <Link
        to="/features"
        className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition"
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
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 cursor-pointer"
            onClick={() => window.location.href = item.path}
        >
            {item.name}
        </motion.span>
    ))}
</motion.div>
</motion.div>
                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 1.8, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="absolute -inset-10 bg-blue-500/10 blur-3xl rounded-full"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1.8, ease: "easeOut" }}
                        className="relative bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl"
                    >
                        <div className="h-72 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: 1.5 }}
                                className="text-center"
                            >
                                <p className="text-xs uppercase text-slate-400">Professional</p>
                                <h3 className="text-3xl font-bold text-white">Corporate UI</h3>
                                <p className="text-slate-300 mt-1">Clean · Modern · Premium</p>
                            </motion.div>
                        </div>
                    </motion.div>
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

                <Services />
                 <Features />
                 <AIAutomation/>
            </main>

            <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
                © {new Date().getFullYear()} Infozire. All rights reserved.
            </footer>
        </div>
    );
}
