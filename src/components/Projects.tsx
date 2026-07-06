import { useState } from "react";
import { PROJECTS } from "../data";
import { Code, CheckCircle, Cpu, Play, Award, HelpCircle, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

interface Volunteer {
  name: string;
  skills: string[];
  availability: 'High' | 'Medium' | 'Low';
  experience: number; // in years / count
}

export default function Projects() {
  const project = PROJECTS[0];

  // Simulator State
  const [selectedEventSkill, setSelectedEventSkill] = useState<string>("Frontend Web Development");
  const [results, setResults] = useState<any[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Core list of volunteers to match
  const volunteers: Volunteer[] = [
    { name: "Robinson C", skills: ["Frontend Web Development", "Event Coordination", "Figma UI/UX"], availability: "High", experience: 3 },
    { name: "Suresh Kumar", skills: ["Figma UI/UX", "Basic SEO Support"], availability: "Medium", experience: 2 },
    { name: "Priya Dharshini", skills: ["WordPress Website Support", "Basic SEO Support"], availability: "High", experience: 1 },
    { name: "Dennis Ritchie", skills: ["Frontend Web Development", "Digital Content Support"], availability: "Low", experience: 5 },
    { name: "Grace Hopper", skills: ["Event Coordination", "Digital Content Support"], availability: "High", experience: 4 }
  ];

  const eventSkills = [
    "Frontend Web Development",
    "WordPress Website Support",
    "Basic SEO Support",
    "Figma UI/UX",
    "Event Coordination"
  ];

  const handleSimulateAllocation = () => {
    setIsSimulating(true);
    setResults([]);
    
    setTimeout(() => {
      // Run the Recommendation Algorithm
      const calculatedMatches = volunteers.map(vol => {
        let skillScore = vol.skills.includes(selectedEventSkill) ? 50 : 15;
        let availabilityScore = vol.availability === 'High' ? 30 : vol.availability === 'Medium' ? 20 : 10;
        let experienceScore = Math.min(vol.experience * 4, 20); // capped at 20%
        
        let totalScore = skillScore + availabilityScore + experienceScore;
        
        return {
          ...vol,
          score: totalScore,
          breakdown: { skill: skillScore, avail: availabilityScore, exp: experienceScore }
        };
      });

      // Sort by score descending
      calculatedMatches.sort((a, b) => b.score - a.score);
      setResults(calculatedMatches);
      setIsSimulating(false);
    }, 800);
  };

  return (
    <section
      id="projects"
      className="py-24 bg-[#F8F1E7] text-[#2B1B12] overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest font-semibold text-[#C89B3C] bg-[#5C4033]/5 px-3 py-1.5 rounded-full">
            Featured Platform
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#2B1B12]">
            Academic Research Project
          </h2>
          <div className="mt-2 w-16 h-1 bg-[#C89B3C] mx-auto rounded-full"></div>
        </div>

        {/* Project Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-[#5C4033]/15 shadow-md space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#5C4033]/5 text-[#C89B3C] border border-[#5C4033]/10 px-3 py-1 rounded-full text-xs font-mono font-semibold">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI Recommendation Core</span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#2B1B12] tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-[#5C4033] text-sm sm:text-base leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Technologies List */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#C89B3C]">
                  Technologies Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#F8F1E7] border border-[#5C4033]/10 text-xs font-mono text-[#2B1B12] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-[#C89B3C]">
                  Platform Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-[#5C4033]">
                      <CheckCircle className="w-4 h-4 text-[#C89B3C] shrink-0" />
                      <span className="font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  id="project-btn-view"
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSimulateAllocation();
                  }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#2B1B12] to-[#5C4033] hover:from-[#5C4033] hover:to-[#2B1B12] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Play className="w-3.5 h-3.5 text-[#C89B3C] fill-[#C89B3C]" />
                  <span>Test Matching Engine</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Side - Matching Simulator (Interactive Widget) */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[#2B1B12] text-white border border-[#5C4033]/30 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C89B3C]/5 rounded-full blur-2xl"></div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C89B3C] font-bold">
                    Interactive Simulator
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    Recommendation Matching
                  </h3>
                </div>
                <RefreshCw className={`w-5 h-5 text-[#C89B3C] ${isSimulating ? "animate-spin" : ""}`} />
              </div>

              <p className="text-xs sm:text-sm text-[#D8C3A5] font-light leading-relaxed">
                This widget runs the recommendation scoring logic designed for the project. Select a role's target skill to find the best-matched volunteers based on skills (50%), availability (30%), and experience (20%).
              </p>

              {/* Selector */}
              <div className="space-y-2">
                <label className="block text-xs uppercase font-mono font-bold tracking-wider text-[#D8C3A5]">
                  Select Required Event Skill:
                </label>
                <select
                  id="simulator-skill-select"
                  value={selectedEventSkill}
                  onChange={(e) => setSelectedEventSkill(e.target.value)}
                  className="w-full bg-[#5C4033]/30 border border-[#C89B3C]/30 hover:border-[#C89B3C] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C89B3C]"
                >
                  {eventSkills.map((sk) => (
                    <option key={sk} value={sk} className="bg-[#2B1B12] text-white text-sm">
                      {sk}
                    </option>
                  ))}
                </select>
              </div>

              {/* Run Button */}
              <button
                id="simulator-btn-run"
                onClick={handleSimulateAllocation}
                disabled={isSimulating}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#a67c2e] hover:from-[#d9ac4e] hover:to-[#C89B3C] text-[#2B1B12] font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
              >
                <span>{isSimulating ? "Calculating Scores..." : "Run Recommendation Engine"}</span>
              </button>

              {/* Simulation Output */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-[#D8C3A5]">
                  {results.length > 0 ? "Sorted Allocation Recommendations:" : "Click above to run allocation"}
                </h4>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {results.length > 0 ? (
                    results.map((res, idx) => (
                      <div
                        key={res.name}
                        className={`p-4 rounded-xl border transition-colors ${
                          idx === 0
                            ? "bg-[#C89B3C]/10 border-[#C89B3C] shadow-md shadow-[#C89B3C]/5"
                            : "bg-[#5C4033]/20 border-[#5C4033]/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              idx === 0 ? "bg-[#C89B3C] text-[#2B1B12]" : "bg-white/10 text-white"
                            }`}>
                              {idx + 1}
                            </span>
                            <span className="font-bold text-sm sm:text-base">{res.name}</span>
                            {idx === 0 && (
                              <span className="text-[9px] uppercase font-mono bg-[#C89B3C]/20 border border-[#C89B3C]/50 px-1.5 py-0.5 rounded text-[#C89B3C] font-semibold">
                                Best Match
                              </span>
                            )}
                          </div>
                          <span className="font-mono font-bold text-sm text-[#C89B3C] bg-[#C89B3C]/10 px-2.5 py-0.5 rounded border border-[#C89B3C]/20">
                            Score: {res.score}%
                          </span>
                        </div>

                        {/* Skills and Info tags */}
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          <span className="text-[10px] font-mono text-[#D8C3A5] bg-white/5 px-2 py-0.5 rounded">
                            Avail: {res.availability}
                          </span>
                          <span className="text-[10px] font-mono text-[#D8C3A5] bg-white/5 px-2 py-0.5 rounded">
                            Exp: {res.experience} yrs
                          </span>
                        </div>

                        {/* Breakdown bar */}
                        <div className="mt-3 flex h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="bg-[#C89B3C] h-full" style={{ width: `${res.breakdown.skill}%` }} title="Skill match"></div>
                          <div className="bg-[#D8C3A5] h-full opacity-80" style={{ width: `${res.breakdown.avail}%` }} title="Availability"></div>
                          <div className="bg-white h-full opacity-60" style={{ width: `${res.breakdown.exp}%` }} title="Experience"></div>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Default preview row before clicking run
                    <div className="text-center py-8 text-[#D8C3A5]/50 border border-dashed border-[#5C4033]/40 rounded-2xl">
                      <HelpCircle className="w-8 h-8 mx-auto opacity-30 mb-2" />
                      <p className="text-xs">Click the button above to run the matching engine and view live recommendation scoring lists.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
