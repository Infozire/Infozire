// src/App.jsx
import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AIServices from "./services/AIServices";
export default function App() {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
            <Navbar />

            <div className="pt-16"> {/* Padding to avoid overlap */}
                <HeroSection />


            </div>            <main className="container">
                <section className="py-24 md:py-32">
                    <div className="grid md:grid-cols-2 items-center gap-10">
                        <div className="space-y-6">
                            <p className="inline-block rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 animate-in fade-in duration-700">
                                Introducing our 2025 website kit
                            </p>
                            <h1 className="text-xl md:text-4xl font-bold leading-tight">
                                Technology That Works Smarter for You ✨
                                <span className="block text-slate-100 md:text-2xl font-normal italic mt-4">
                                    At Infozire, we design technology that simplifies, scales, and transforms businesses. From powerful AI solutions to cloud-ready applications and digital branding, we help organizations move faster, grow stronger, and stay future-ready
                                </span>

                            </h1>
                            <div className="flex flex-wrap gap-3 pt-3">
                                <a
                                    href="#contact"
                                    className="rounded-2xl px-5 py-3 bg-orange-500 text-slate-900 font-semibold shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                                >
                                    Start a Project
                                </a>
                                <a
                                    href="/features"
                                    className="rounded-2xl px-5 py-3 border border-white/10 hover:bg-white/5 transition"
                                >
                                    See Features
                                </a>
                            </div>
                            <ul className="grid grid-cols-2 gap-4 pt-6 text-sm text-slate-300">
                                <li className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" /> AI
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-indigo-400" /> Software 
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-pink-400" /> Cloud 
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-amber-400" /> Digital 
                                </li>
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 via-emerald-500/10 to-pink-500/20 blur-3xl rounded-full" />
                            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl animate-in zoom-in-95 duration-500">
                                <div className="h-56 md:h-72 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center">
                                    <div className="text-center">
                                        <div className="text-xs uppercase tracking-wide text-slate-400">Demo Card</div>
                                        <div className="mt-2 text-3xl font-bold">Glassmorphism</div>
                                        <div className="mt-1 text-slate-300">Tailwind + subtle motion</div>
                                    </div>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-3">
                                    <div className="rounded-xl bg-white/5 p-4 text-center hover:bg-white/10 transition animate-in fade-in-50 duration-700">Fast</div>
                                    <div className="rounded-xl bg-white/5 p-4 text-center hover:bg-white/10 transition animate-in fade-in-50 duration-700 delay-100">Lean</div>
                                    <div className="rounded-xl bg-white/5 p-4 text-center hover:bg-white/10 transition animate-in fade-in-50 duration-700 delay-200">Secure</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AIServices />
            </main>

            <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
                © {new Date().getFullYear()} MyCompany. All rights reserved.
            </footer>
        </div>
    );
}
