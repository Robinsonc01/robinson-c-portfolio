import React from "react";
import { PERSONAL_INFO } from "../data";
import { Mail, Download, MapPin, Calendar, Languages, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import robin from "../../assets/robin2.jpeg";

export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSec = document.querySelector("#contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToResume = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const resumeSec = document.querySelector("#resume");
    if (resumeSec) {
      resumeSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-gradient-to-b from-[#2B1B12] via-[#2B1B12] to-[#3D2619] overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Dynamic Background Light Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#5C4033]/30 rounded-full blur-[100px] animate-pulse-slow"></div>

      {/* Floating Geometric Wireframes */}
      <div className="absolute top-24 left-10 w-12 h-12 border border-[#C89B3C]/20 rounded-full animate-float opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#5C4033]/20 rounded-3xl animate-float-reverse opacity-40"></div>
      <div className="absolute top-1/3 right-12 w-6 h-6 bg-[#C89B3C]/10 rounded rotate-45 animate-float opacity-20"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 space-y-8 text-left order-2 lg:order-1">
          {/* Accent Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#5C4033]/40 border border-[#C89B3C]/30 px-4 py-1.5 rounded-full backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#C89B3C] animate-ping"></span>
            <span className="text-[#D8C3A5] text-xs sm:text-sm font-semibold tracking-wide">
              {PERSONAL_INFO.availability}
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Hi, I’m <span className="text-gradient bg-gradient-to-r from-[#C89B3C] to-[#E3C687] bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl font-sans font-medium text-[#C89B3C] tracking-wide"
            >
              {PERSONAL_INFO.title}
            </motion.h2>
          </div>

          {/* Short Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#D8C3A5] text-base sm:text-lg leading-relaxed max-w-xl font-light"
          >
            {PERSONAL_INFO.shortIntro}
          </motion.p>

          {/* Location / Lang Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <span className="flex items-center space-x-2 bg-[#2B1B12]/80 border border-[#5C4033]/50 px-3.5 py-1.5 rounded-xl text-xs text-[#D8C3A5] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
            <span className="flex items-center space-x-2 bg-[#2B1B12]/80 border border-[#5C4033]/50 px-3.5 py-1.5 rounded-xl text-xs text-[#D8C3A5] font-mono">
              <Languages className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{PERSONAL_INFO.languages.join(" & ")}</span>
            </span>
            <span className="flex items-center space-x-2 bg-[#2B1B12]/80 border border-[#5C4033]/50 px-3.5 py-1.5 rounded-xl text-xs text-[#D8C3A5] font-mono">
              <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{PERSONAL_INFO.availability}</span>
            </span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              id="hero-cta-contact"
              onClick={handleScrollToContact}
              className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C89B3C] to-[#a67c2e] hover:from-[#d9ac4e] hover:to-[#C89B3C] text-[#2B1B12] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-[#C89B3C]/20 transition-all duration-300"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="hero-cta-resume"
              onClick={handleScrollToResume}
              className="inline-flex items-center justify-center space-x-2 bg-[#5C4033]/30 hover:bg-[#5C4033]/60 border border-[#C89B3C]/40 text-white hover:text-[#C89B3C] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 backdrop-blur-sm"
            >
              <Download className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Right Side (Profile Frame) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            {/* Outer Decorative Floating Orbits */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-tr from-[#C89B3C] to-[#5C4033] rounded-full animate-float opacity-80 flex items-center justify-center shadow-lg border border-white/15">
              <span className="text-white text-xs font-bold font-mono">IT</span>
            </div>
            ``

            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-0 bg-[#C89B3C]/20 rounded-full blur-xl scale-105"></div>

            {/* Stylish Premium Circular Photo Frame */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-3 bg-gradient-to-tr from-[#C89B3C] via-[#5C4033] to-[#2B1B12] shadow-2xl flex items-center justify-center">
              {/* Internal circular borders */}
              <div className="w-full h-full rounded-full bg-[#2B1B12] p-1 flex items-center justify-center border-4 border-[#2B1B12]/80 relative overflow-hidden group">
               
                {/* <img
                    id="hero-profile-image"
                    src={robin}
                    alt="Robinson C Professional Profile"
                    className="w-full h-full rounded-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://picsum.photos/seed/robinson/500/500";
                    }}
                  /> */}
                   <img
                    id="hero-profile-image"
                    src={robin}
                    alt="Robinson C Professional Profile"
                    className="w-full h-full rounded-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                {/* Image overlay glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Outer floating golden spinner dash ring */}
              <div className="absolute -inset-1 border-2 border-dashed border-[#C89B3C]/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
