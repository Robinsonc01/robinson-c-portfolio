import { PERSONAL_INFO } from "../data";
import { GraduationCap, Percent, Zap, Briefcase, Users2 } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const highlightIcons = [
    <GraduationCap className="w-6 h-6 text-[#C89B3C]" />,
    <Percent className="w-6 h-6 text-[#C89B3C]" />,
    <Zap className="w-6 h-6 text-[#C89B3C]" />,
    <Briefcase className="w-6 h-6 text-[#C89B3C]" />,
    <Users2 className="w-6 h-6 text-[#C89B3C]" />
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#F8F1E7] text-[#2B1B12] overflow-hidden relative"
    >
      {/* Decorative vector shape backgrounds */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#5C4033]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C89B3C]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest font-semibold text-[#C89B3C] bg-[#5C4033]/5 px-3 py-1.5 rounded-full">
            Get To Know Me
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#2B1B12]">
            About Robinson C
          </h2>
          <div className="mt-2 w-16 h-1 bg-[#C89B3C] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left bio card */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#5C4033] tracking-wide">
              Hardworking & Adaptable IT Professional
            </h3>
            <p className="text-[#5C4033] text-base sm:text-lg leading-relaxed font-light">
              {PERSONAL_INFO.aboutLong}
            </p>
            
            {/* Visual statement box */}
            <div className="p-6 rounded-2xl bg-[#5C4033]/5 border-l-4 border-[#C89B3C] space-y-3">
              <p className="italic text-[#5C4033] text-sm sm:text-base font-medium">
                "I strive to translate technical complexities into intuitive and gorgeous frontend applications, while optimizing visibility through practical CMS and SEO solutions."
              </p>
              <div className="flex items-center space-x-3">
                <span className="w-5 h-px bg-[#C89B3C]"></span>
                <span className="text-xs uppercase font-mono tracking-wider text-[#C89B3C] font-bold">
                  Coimbatore, India
                </span>
              </div>
            </div>
          </div>

          {/* Right highlights grid */}
          <div className="lg:col-span-6">
            <h4 className="text-sm uppercase font-mono tracking-widest text-[#C89B3C] font-bold mb-6">
              Quick Highlights
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PERSONAL_INFO.highlights.map((highlight, index) => (
                <div
                  key={index}
                  id={`about-highlight-${index}`}
                  className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#5C4033]/10 shadow-sm hover:shadow-md hover:border-[#C89B3C]/40 transition-all duration-300 flex items-start space-x-4 group"
                >
                  <div className="p-3 rounded-xl bg-[#F8F1E7] border border-[#5C4033]/10 group-hover:bg-[#C89B3C]/10 group-hover:border-[#C89B3C]/30 transition-colors">
                    {highlightIcons[index % highlightIcons.length]}
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-mono text-[#C89B3C] font-bold tracking-wider">
                      Point {index + 1}
                    </span>
                    <p className="text-[#2B1B12] font-semibold text-sm sm:text-base leading-tight">
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Status indicators */}
            <div className="mt-8 p-5 bg-gradient-to-br from-[#2B1B12] to-[#5C4033] rounded-2xl text-white flex items-center justify-between shadow-lg">
              <div className="space-y-1">
                <p className="text-xs font-mono text-[#C89B3C] font-bold tracking-wider uppercase">
                  Current Status
                </p>
                <p className="font-semibold text-sm sm:text-base">
                  Actively Interviewing
                </p>
              </div>
              <a
                id="about-cta-contact"
                href="#contact"
                className="bg-[#C89B3C] hover:bg-[#d9ac4e] text-[#2B1B12] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Let's Chat
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
