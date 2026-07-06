/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Community from "./components/Community";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ResumeDownload from "./components/ResumeDownload";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Dynamic Scroll & Section Active Tracker
  useEffect(() => {
    const sections = ["home", "about", "skills", "services", "experience", "projects", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // offset of header/viewport trigger
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="portfolio-root" className="min-h-screen bg-[#F8F1E7] text-[#2B1B12] font-sans antialiased selection:bg-[#C89B3C] selection:text-[#2B1B12]">
      {/* Sleek top navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main visual sections */}
      <main id="portfolio-content">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Community />
        <Education />
        <Certifications />
        <ResumeDownload />
        <Contact />
      </main>

      {/* Global structured footer */}
      <Footer />
    </div>
  );
}

