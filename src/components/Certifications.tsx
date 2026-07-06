import { CERTIFICATIONS } from "../data";
import { Award, Landmark, Calendar, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-[#2B1B12] text-white relative overflow-hidden border-t border-b border-[#5C4033]/20"
    >
      <div className="absolute inset-0 bg-[#C89B3C]/5 opacity-30 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest font-semibold text-[#C89B3C] bg-[#5C4033]/40 border border-[#C89B3C]/20 px-3 py-1.5 rounded-full">
            Verified Credentials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Professional Certifications
          </h2>
          <div className="mt-2 w-16 h-1 bg-[#C89B3C] mx-auto rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.name}
              id={`certification-card-${index}`}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#5C4033]/30 to-[#2B1B12] border border-[#5C4033]/40 hover:border-[#C89B3C]/60 shadow-xl relative overflow-hidden group hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner decorative light element */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#C89B3C]/10 rounded-full blur-xl group-hover:bg-[#C89B3C]/25 transition-all"></div>

              <div className="space-y-6">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#C89B3C]/10 border border-[#C89B3C]/30 text-[#C89B3C]">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#C89B3C] bg-[#C89B3C]/10 border border-[#C89B3C]/20 px-2.5 py-1 rounded">
                    Verified ID
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wide leading-snug group-hover:text-[#C89B3C] transition-colors">
                    {cert.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-[#D8C3A5]">
                      <Landmark className="w-4 h-4 text-[#C89B3C]/80" />
                      <span className="font-medium">{cert.organization}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-[#D8C3A5]/70 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-[#C89B3C]/60" />
                      <span>Issued: {cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom decorative badge */}
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center space-x-1.5 text-xs font-mono text-[#C89B3C]/80 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>Skill Enhancement Success</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
