import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        isScrolled || setIsScrolled(true);
      } else {
        !isScrolled || setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

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
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#2B1B12]/90 backdrop-blur-md shadow-lg border-b border-[#5C4033]/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center space-x-2 group"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C89B3C] to-[#5C4033] flex items-center justify-center text-white font-bold font-display text-sm border border-[#C89B3C]/40 group-hover:scale-105 transition-transform">
              R
            </span>
            <span className="font-display font-bold tracking-wider text-white text-lg sm:text-xl group-hover:text-[#C89B3C] transition-colors">
              ROBINSON <span className="text-[#C89B3C]">C</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  id={`nav-link-${item.href.slice(1)}`}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-[#C89B3C] bg-[#5C4033]/30 font-semibold"
                      : "text-[#D8C3A5] hover:text-[#FFFFFF] hover:bg-[#5C4033]/15"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              id="nav-cta-hire-me"
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C89B3C] to-[#a67c2e] hover:from-[#d9ac4e] hover:to-[#C89B3C] text-[#2B1B12] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-[#C89B3C]/20 transition-all duration-300"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="nav-mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#D8C3A5] hover:text-white hover:bg-[#5C4033]/40 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#2B1B12] border-b border-[#5C4033]/40 px-4 pt-2 pb-6 space-y-1 shadow-inner overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  id={`nav-mobile-link-${item.href.slice(1)}`}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all ${
                    isActive
                      ? "text-[#C89B3C] bg-[#5C4033]/40 font-bold border-l-4 border-[#C89B3C]"
                      : "text-[#D8C3A5] hover:text-[#FFFFFF] hover:bg-[#5C4033]/20"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 px-4">
              <a
                id="nav-mobile-cta"
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C89B3C] to-[#a67c2e] text-[#2B1B12] py-3 rounded-xl font-bold uppercase tracking-wider text-sm shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Hire Me</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
