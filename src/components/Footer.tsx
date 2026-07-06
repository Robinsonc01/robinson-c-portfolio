import React from "react";
import { PERSONAL_INFO } from "../data";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#2B1B12] border-t border-[#5C4033]/30 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#5C4033]/20">
          
          {/* Column 1 - Owner branding info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-full bg-[#C89B3C] flex items-center justify-center text-white font-bold font-display text-sm">
                R
              </span>
              <span className="font-display font-extrabold tracking-wider text-xl">
                ROBINSON <span className="text-[#C89B3C]">C</span>
              </span>
            </div>
            <p className="text-sm text-[#D8C3A5] font-semibold">
              Frontend Developer | UI/UX Enthusiast | SEO & WordPress Learner
            </p>
            <p className="text-xs sm:text-sm text-[#D8C3A5]/70 font-light leading-relaxed max-w-sm">
              An adaptable B.Sc. IT graduate passionate about crafting clean code structures, beautiful design frameworks, and reliable digital experiences.
            </p>
          </div>

          {/* Column 2 - Quick navigation links */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#C89B3C]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D8C3A5]">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "#home")}
                  className="hover:text-white transition-colors"
                >
                  Home Showcase
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "#about")}
                  className="hover:text-white transition-colors"
                >
                  About Profile
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleLinkClick(e, "#skills")}
                  className="hover:text-white transition-colors"
                >
                  Technical Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => handleLinkClick(e, "#experience")}
                  className="hover:text-white transition-colors"
                >
                  Internship
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, "#projects")}
                  className="hover:text-white transition-colors"
                >
                  Portfolio Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Direct Contact references */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#C89B3C]">
              Connect Direct
            </h4>
            
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#D8C3A5]/90">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white font-mono transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white font-mono transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>{PERSONAL_INFO.location}, Tamil Nadu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row - Copyright and Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C3A5]/60 font-light">
          <p>
            &copy; {currentYear} Robinson C. All rights reserved. Designed with premium coffee & gold styling.
          </p>
          
          <button
            id="btn-scroll-top"
            onClick={handleScrollToTop}
            className="p-3 rounded-full bg-[#5C4033]/30 border border-[#5C4033]/50 hover:border-[#C89B3C] hover:bg-[#5C4033]/60 text-[#D8C3A5] hover:text-white transition-all shadow-md flex items-center justify-center group"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
