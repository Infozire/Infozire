import React from "react";
import heroVideo from "../assets/officehero.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[75vh] md:h-[600px] overflow-hidden">

      {/* Background Video */}
   <video
  className="
    absolute inset-0
    w-full h-full
    object-cover
    object-top md:object-center
    scale-[1.15] md:scale-100
  "
  autoPlay
  loop
  muted
  playsInline
>

        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div
        className="
          relative z-10
          flex flex-col
          items-center
          justify-end md:justify-center
          h-full
          text-center
          px-4
          pb-12 md:pb-0
          text-white
        "
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Where Innovation Meets Intelligent Engineering
        </h1>

        <p className="text-sm md:text-2xl italic text-slate-200 max-w-3xl">
          We build modern, scalable digital products through next-generation technology, automation, and AI-driven solutions.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
