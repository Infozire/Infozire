import React from 'react';

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
                <source src="https://websites.godaddy.com/categories/v4/videos/raw/video/uA41GmyyG8IMaxXdb" type="video/mp4" />
            </video>

            {/* Dark Overlay */}

            {/* Center Content */}
            <div className="relative z-10 flex flex-col justify-center items-center text-white h-full text-center px-4">
                {/* <h1 className="text-3xl tracking-widest mb-4">INFOZIRE</h1> */}
                <h1 className="text-5xl font-bold mb-4">Empowering Businesses with Digital Solutions</h1>
                <p className="block text-slate-50 md:text-2xl font-normal italic mt-4">
                    At Infozire, we build smart, scalable, and secure digital products that help your business grow.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
