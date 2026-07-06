import { INTERNSHIP } from "../data";
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from "lucide-react";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#2B1B12] text-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest font-semibold text-[#C89B3C] bg-[#5C4033]/40 border border-[#C89B3C]/20 px-3 py-1.5 rounded-full">
            Industry Experience
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Internship Background
          </h2>
          <div className="mt-2 w-16 h-1 bg-[#C89B3C] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C89B3C] via-[#5C4033] to-transparent"></div>

          {/* Timeline Item */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Left side spacer / Date on desktop */}
            <div className="hidden md:flex md:col-span-5 justify-end text-right items-center">
              <div className="space-y-1.5">
                <span className="inline-flex items-center space-x-1.5 bg-[#C89B3C]/20 text-[#C89B3C] border border-[#C89B3C]/30 px-3 py-1 rounded-full text-xs font-mono font-semibold">
                  <Calendar className="w-3 h-3" />
                  <span>{INTERNSHIP.duration}</span>
                </span>
                <p className="text-sm text-[#D8C3A5] font-mono">{INTERNSHIP.location}</p>
              </div>
            </div>

            {/* Timeline point indicator */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#2B1B12] border-4 border-[#C89B3C] flex items-center justify-center shadow-lg shadow-[#C89B3C]/10">
                <Briefcase className="w-3.5 h-3.5 text-[#C89B3C]" />
              </div>
            </div>

            {/* Right side Card */}
            <div className="pl-12 md:pl-0 md:col-span-6 md:col-start-7">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#5C4033]/30 to-[#2B1B12] border border-[#5C4033]/40 shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-[#C89B3C]/50 transition-all duration-300">
                
                {/* Mobile top header row */}
                <div className="flex flex-wrap items-center justify-between gap-2 md:hidden mb-4">
                  <span className="inline-flex items-center space-x-1.5 bg-[#C89B3C]/20 text-[#C89B3C] border border-[#C89B3C]/30 px-2.5 py-1 rounded-full text-[10px] font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{INTERNSHIP.duration}</span>
                  </span>
                  <span className="text-xs text-[#D8C3A5] font-mono flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{INTERNSHIP.location}</span>
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-wide">
                      {INTERNSHIP.role}
                    </h3>
                    <p className="text-[#C89B3C] font-semibold text-sm sm:text-base tracking-wide">
                      {INTERNSHIP.company}
                    </p>
                  </div>

                  <hr className="border-white/10" />

                  {/* Duties list */}
                  <ul className="space-y-3">
                    {INTERNSHIP.description.map((point, index) => (
                      <li key={index} className="flex items-start space-x-3 text-sm sm:text-base text-[#D8C3A5] font-light leading-relaxed">
                        <CheckCircle className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlights of internship */}
                  <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-3 text-xs sm:text-sm text-white/90">
                    <Award className="w-5 h-5 text-[#C89B3C] shrink-0" />
                    <span className="font-semibold text-xs uppercase tracking-wider font-mono text-[#C89B3C]">
                      Outcome: Professional Team Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
