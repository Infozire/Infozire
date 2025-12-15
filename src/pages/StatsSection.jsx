import { motion } from "framer-motion";

export default function StatsSection() {
    return (
        <section className="py-20 bg-[#fafbff]">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-5xl mx-auto px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1.4, ease: "easeOut" }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                    {[
                        {
                            value: "5+",
                            title: "Years Experience",
                            desc: "Building reliable digital solutions",
                        },
                        {
                            value: "15+",
                            title: "Projects Delivered",
                            desc: "Across startups & enterprises",
                        },
                        {
                            value: "99.9%",
                            title: "System Reliability",
                            desc: "Secure & scalable platforms",
                        },
                        {
                            value: "24/7",
                            title: "Support",
                            desc: "Continuous technical assistance",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.15, duration: 0.8 }}
                            className="bg-white border border-slate-200 rounded-2xl p-6
                                       shadow-sm hover:shadow-lg transition-all
                                       max-w-sm mx-auto"
                        >
                            <div className="text-3xl font-extrabold text-orange-500">
                                {item.value}
                            </div>

                            <div className="mt-2 text-lg font-semibold text-slate-900">
                                {item.title}
                            </div>

                            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
