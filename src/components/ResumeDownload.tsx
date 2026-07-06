import React from "react";
import { PERSONAL_INFO } from "../data";
import { Download, Mail, Eye, Sparkles, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function ResumeDownload() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSec = document.querySelector("#contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="resume"
      className="py-24 bg-[#F8F1E7] text-[#2B1B12] overflow-hidden relative"
    >
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#C89B3C]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest font-semibold text-[#C89B3C] bg-[#5C4033]/5 px-3 py-1.5 rounded-full">
            Ready For Opportunities
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#2B1B12]">
            Resume & Collaboration
          </h2>
          <div className="mt-2 w-16 h-1 bg-[#C89B3C] mx-auto rounded-full"></div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column - CTA and Download Promo */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-2xl font-display font-extrabold text-[#5C4033] tracking-tight leading-tight">
              Let's Build Something Great Together!
            </h3>
            
            <p className="text-sm sm:text-base text-[#5C4033] font-light leading-relaxed">
              Robinson C is a prompt, quick learner and immediate joiner in Coimbatore, with proven values in frontend engineering, UI/UX aesthetics, on-page SEO layouts, and active team organization.
            </p>

            <div className="space-y-3.5">
              <div className="flex items-center space-x-3 text-sm text-[#5C4033]">
                <CheckCircle2 className="w-5 h-5 text-[#C89B3C] shrink-0" />
                <span className="font-medium">Fully validated B.Sc. IT credentials</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#5C4033]">
                <CheckCircle2 className="w-5 h-5 text-[#C89B3C] shrink-0" />
                <span className="font-medium">Coimbatore local, immediate joining availability</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#5C4033]">
                <CheckCircle2 className="w-5 h-5 text-[#C89B3C] shrink-0" />
                <span className="font-medium">Fluent in both English and Tamil</span>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                id="resume-btn-download"
                href="/resume.pdf"
                download="Robinson_C_Resume.pdf"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C89B3C] to-[#a67c2e] hover:from-[#d9ac4e] hover:to-[#C89B3C] text-[#2B1B12] px-6 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              
              <button
                id="resume-btn-hire"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-[#5C4033]/5 border-2 border-[#5C4033]/30 hover:border-[#5C4033] text-[#2B1B12] px-6 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-[#5C4033]" />
                <span>Hire Robinson</span>
              </button>
            </div>
          </div>

          {/* Right Column - Luxury Compact Digital CV Mockup */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-3xl bg-white border border-[#5C4033]/15 shadow-2xl relative overflow-hidden max-w-md mx-auto group">
              
              {/* Paper overlay background strip */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C89B3C] via-[#5C4033] to-[#2B1B12]"></div>

              <div className="space-y-4 pt-2">
                
                {/* Visual Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <h4 className="font-display font-extrabold text-[#2B1B12] text-lg sm:text-xl">
                      {PERSONAL_INFO.name}
                    </h4>
                    <p className="text-[10px] font-semibold text-[#C89B3C] tracking-wide font-mono uppercase">
                      B.Sc. Information Technology
                    </p>
                  </div>
                  <FileText className="w-5 h-5 text-[#5C4033]/40" />
                </div>

                <hr className="border-gray-100" />

                {/* Section blocks in mini format */}
                <div className="space-y-3 text-left">
                  
                  {/* Education block */}
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase font-mono font-bold text-[#C89B3C] tracking-widest">
                      Academic Background
                    </span>
                    <p className="text-xs font-bold text-[#2B1B12]">
                      Sankara College of Science & Commerce
                    </p>
                    <p className="text-[11px] text-[#5C4033] font-light flex items-center justify-between">
                      <span>B.Sc. Information Technology (2023–2025)</span>
                      <span className="font-mono font-bold text-[#C89B3C]">70% GPA</span>
                    </p>
                  </div>

                  {/* Experience block */}
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase font-mono font-bold text-[#C89B3C] tracking-widest">
                      Practical Internship
                    </span>
                    <p className="text-xs font-bold text-[#2B1B12]">
                      Markdot Intellect — Frontend Developer Intern
                    </p>
                    <p className="text-[11px] text-[#5C4033] font-light">
                      Designed and optimized website code interfaces using HTML & CSS.
                    </p>
                  </div>

                  {/* Skills block */}
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase font-mono font-bold text-[#C89B3C] tracking-widest">
                      Key Technical Core
                    </span>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {["HTML5", "CSS3", "JavaScript", "Figma", "SEO Basics", "WordPress"].map(sk => (
                        <span key={sk} className="text-[9px] font-mono font-bold bg-[#F8F1E7] border border-[#5C4033]/10 text-[#2B1B12] px-1.5 py-0.5 rounded">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                <hr className="border-gray-100" />

                {/* Bottom interactive action overlay */}
                <div className="p-3 bg-[#5C4033]/5 rounded-xl flex items-center justify-between text-[11px]">
                  <span className="text-[#5C4033] font-mono flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>Immediate Joiner Status</span>
                  </span>
                  <span className="text-xs font-bold text-[#2B1B12]">Coimbatore</span>
                </div>

              </div>

              {/* Hover visual scan guide indicator */}
              <div className="absolute inset-0 bg-[#2B1B12]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col space-y-2 text-white p-4">
                <Eye className="w-8 h-8 text-[#C89B3C]" />
                <p className="font-bold font-display text-sm">Download Verified PDF Version</p>
                <p className="text-[11px] text-[#D8C3A5] text-center font-light">Get the complete resume version with all contact references.</p>
                <a
                  id="resume-btn-overlay"
                  href="/resume.pdf"
                  download="Robinson_C_Resume.pdf"
                  className="bg-[#C89B3C] text-[#2B1B12] font-bold text-xs px-4 py-2 rounded-xl uppercase tracking-wider"
                >
                  Download Now
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
