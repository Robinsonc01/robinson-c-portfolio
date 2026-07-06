import { VOLUNTEER } from "../data";
import { Users, Heart, CheckSquare, Calendar, ShieldCheck, Milestone } from "lucide-react";
import { motion } from "motion/react";

export default function Community() {
  const volunteerHighlights = [
    { title: "Church Event Management", desc: "Successfully organized logistics, food, scheduling, and seating arrangements for social gatherings." },
    { title: "Youth Camp Support", desc: "Organized team building exercises, physical games, and spiritual mentoring classes for youths." },
    { title: "Communication Lead", desc: "Maintained constant and reliable updates between church leadership, volunteers, and participants." }
  ];

  return (
    <section
      id="community"
      className="py-24 bg-[#2B1B12] text-white overflow-hidden relative border-t border-[#5C4033]/20"
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C89B3C]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest font-semibold text-[#C89B3C] bg-[#5C4033]/40 border border-[#C89B3C]/20 px-3 py-1.5 rounded-full">
            Leadership & Values
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Community & Volunteer Leadership
          </h2>
          <div className="mt-2 w-16 h-1 bg-[#C89B3C] mx-auto rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Event Cards Grid */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <h3 className="text-sm uppercase font-mono tracking-widest text-[#C89B3C] font-bold">
              Key Coordination Milestones
            </h3>

            <div className="space-y-4">
              {volunteerHighlights.map((hl, i) => (
                <div
                  key={i}
                  id={`volunteer-hl-${i}`}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C89B3C]/40 hover:bg-white/10 transition-all duration-300 flex items-start space-x-4 group"
                >
                  <div className="p-3 rounded-xl bg-[#5C4033]/30 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-[#2B1B12] transition-colors">
                    {i === 0 ? <Milestone className="w-5 h-5" /> : i === 1 ? <Heart className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
                      {hl.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#D8C3A5] font-light leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Showcase Card */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="p-8 rounded-3xl bg-gradient-to-tr from-[#5C4033]/40 to-[#2B1B12]/80 border border-[#C89B3C]/30 shadow-2xl relative overflow-hidden space-y-6">
              
              {/* Outer light glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#C89B3C]/10 rounded-full blur-xl"></div>

              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#C89B3C]/10 border border-[#C89B3C]/40 rounded-2xl text-[#C89B3C]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-white">
                    {VOLUNTEER.role}
                  </h4>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#C89B3C] font-semibold">
                    Youth Camps & Church Gatherings
                  </span>
                </div>
              </div>

              <hr className="border-white/10" />

              <p className="text-sm text-[#D8C3A5] font-light leading-relaxed">
                Working actively in community event coordination has helped build extreme levels of patience, professional accountability, teamwork, and reliable organizational skills.
              </p>

              {/* Points checklist */}
              <ul className="space-y-3.5">
                {VOLUNTEER.points.map((pt, index) => (
                  <li key={index} className="flex items-start space-x-3 text-xs sm:text-sm text-[#D8C3A5] font-light leading-relaxed">
                    <CheckSquare className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom values badge */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-3 text-xs text-[#D8C3A5]">
                <ShieldCheck className="w-5 h-5 text-[#C89B3C] shrink-0" />
                <span className="font-mono font-medium tracking-wide">
                  Core Values: Patience, Reliability, Punctuality & Team Trust
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
