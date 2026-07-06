import { EDUCATION } from "../data";
import { BookOpen, Award, CheckCircle2, Milestone } from "lucide-react";
import { motion } from "motion/react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-[#F8F1E7] text-[#2B1B12] overflow-hidden relative"
    >
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest font-semibold text-[#C89B3C] bg-[#5C4033]/5 px-3 py-1.5 rounded-full">
            Learning Pathways
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#2B1B12]">
            Educational Qualification
          </h2>
          <div className="mt-2 w-16 h-1 bg-[#C89B3C] mx-auto rounded-full"></div>
        </div>

        {/* Academic Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C89B3C] via-[#5C4033]/40 to-transparent"></div>

          {/* Map over items */}
          {EDUCATION.map((edu, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={edu.degree}
                id={`education-item-${idx}`}
                className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                
                {/* Desktop Left-aligned or Right-aligned spacer context */}
                <div className={`hidden md:flex md:col-span-5 items-center ${
                  isEven ? "justify-end text-right" : "col-start-8 justify-start text-left"
                }`}>
                  <div className="space-y-1">
                    <span className="inline-flex bg-[#5C4033]/10 text-[#5C4033] border border-[#5C4033]/20 px-3 py-1 rounded-full text-xs font-mono font-semibold">
                      {edu.period}
                    </span>
                    {edu.score && (
                      <p className="text-sm font-semibold font-mono text-[#C89B3C]">
                        Score Obtained: {edu.score}
                      </p>
                    )}
                  </div>
                </div>

                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#F8F1E7] border-4 border-[#C89B3C] flex items-center justify-center shadow-md">
                    <BookOpen className="w-3.5 h-3.5 text-[#5C4033]" />
                  </div>
                </div>

                {/* Content Card container */}
                <div className={`pl-12 md:pl-0 md:col-span-6 ${
                  isEven ? "md:col-start-7" : "md:col-start-1"
                }`}>
                  <div className="p-6 rounded-3xl bg-white border border-[#5C4033]/15 shadow-md hover:border-[#C89B3C] hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#5C4033]/10 group-hover:bg-[#C89B3C] transition-colors"></div>

                    {/* Mobile top period row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 md:hidden mb-3">
                      <span className="inline-flex bg-[#5C4033]/10 text-[#5C4033] border border-[#5C4033]/20 px-2.5 py-0.5 rounded-full text-[10px] font-mono">
                        {edu.period}
                      </span>
                      {edu.score && (
                        <span className="text-xs font-mono font-bold text-[#C89B3C]">
                          Score: {edu.score}
                        </span>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#2B1B12] leading-snug">
                          {edu.degree}
                        </h3>
                        <p className="text-[#5C4033] font-semibold text-sm sm:text-base">
                          {edu.institution}
                        </p>
                      </div>

                      {edu.score && (
                        <div className="p-3.5 rounded-xl bg-[#F8F1E7] border border-[#5C4033]/10 flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-[#5C4033]/80 font-medium">Academic Score Performance</span>
                          <span className="font-mono font-extrabold text-[#C89B3C] bg-white border border-[#C89B3C]/30 px-2 py-0.5 rounded-lg text-xs">
                            {edu.score}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#C89B3C]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Completed Successfully</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
