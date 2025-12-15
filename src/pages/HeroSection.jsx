import React from 'react';
import heroVideo from "../assets/officehero.mp4";

const HeroSection = () => {
    return (
        
        <section className="relative w-full h-[600px] overflow-hidden">
            {/* Background Video */}
        <video
  className="absolute top-0 left-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src={heroVideo} type="video/mp4" />
</video>


            {/* Dark Overlay */}

            {/* Center Content */}
            <div className="relative z-10 flex flex-col justify-center items-center text-white h-full text-center px-4">
                {/* <h1 className="text-3xl tracking-widest mb-4">INFOZIRE</h1> */}
                <h1 className="text-5xl font-bold mb-4">Where Innovation Meets Intelligent Engineering</h1>
                <p className="block text-slate-50 md:text-2xl font-normal italic mt-4">
                   We build modern, scalable digital products through next-generation technology, automation, and AI-driven solutions.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
