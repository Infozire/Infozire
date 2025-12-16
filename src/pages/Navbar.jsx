import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../assets/infozire.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = ["HOME", "ABOUT", "SERVICES", "FEATURES", "BLOG", "CONTACT"];

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-30">
        <div className="bg-gradient-to-r from-black/90 via-slate-900/90 to-black/90 backdrop-blur-lg shadow-lg">
          
          {/* WIDTH CONTROLLER */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-20 px-3 md:px-6">

              {/* LOGO LEFT */}
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Infozire Logo"
                  className="h-12 w-auto object-contain scale-125 md:scale-150"
                />

                <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
                  INFO<span className="text-orange-500">ZIRE</span>
                </h1>
              </div>

              {/* Toggle Button (Mobile) */}
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="p-2 text-white focus:outline-none md:hidden"
                aria-label="Toggle menu"
              >
                {open ? (
                  <XMarkIcon className="h-7 w-7" />
                ) : (
                  <Bars3Icon className="h-7 w-7" />
                )}
              </button>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center gap-8 text-white font-medium">
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                    className="relative group transition-all duration-300"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}

                <Link
                  to="/services"
                  className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:shadow-orange-500/40 hover:scale-105 transition-all"
                >
                  GET STARTED
                </Link>
              </nav>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 
        bg-gradient-to-b from-slate-900/95 via-slate-800/95 to-black/95 
        backdrop-blur-lg text-white transform transition-transform duration-300 z-50 shadow-xl
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <h2 className="font-semibold text-lg">Menu</h2>
          <XMarkIcon
            className="h-7 w-7 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <nav className="flex flex-col p-4 gap-4">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-orange-400 transition-colors duration-300"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/services"
            className="mt-4 px-5 py-2 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}
    </>
  );
};

export default Navbar;
