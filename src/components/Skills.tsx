import { useState } from "react";
import { SKILLS, Skill } from "../data";
import { Layers, Server, Palette, Search, CheckCircle, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type CategoryFilter = 'all' | 'frontend' | 'backend' | 'design' | 'seo' | 'productivity' | 'soft';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Layers className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Layers className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend & DB', icon: <Server className="w-4 h-4" /> },
    { id: 'design', label: 'Design & UI/UX', icon: <Palette className="w-4 h-4" /> },
    { id: 'seo', label: 'CMS & SEO', icon: <Search className="w-4 h-4" /> },
    { id: 'soft', label: 'Soft Skills', icon: <Award className="w-4 h-4" /> },
  ];

  const filteredSkills = SKILLS.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "from-[#C89B3C]/25 to-[#5C4033]/20 border-[#C89B3C]/40 text-white";
      case "backend":
        return "from-[#5C4033]/30 to-[#2B1B12]/30 border-[#5C4033]/50 text-white";
      case "design":
        return "from-[#C89B3C]/15 to-[#5C4033]/35 border-[#C89B3C]/30 text-white";
      case "seo":
        return "from-[#5C4033]/40 to-[#2B1B12]/40 border-[#D8C3A5]/25 text-[#D8C3A5]";
      default:
        return "from-[#2B1B12]/80 to-[#5C4033]/40 border-[#D8C3A5]/15 text-white";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "frontend": return "Frontend";
      case "backend": return "Backend & DB";
      case "design": return "Design Tools";
      case "seo": return "CMS & SEO";
      case "productivity": return "Productivity";
      case "soft": return "Soft Skills";
      default: return "";
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-[#2B1B12] text-white relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C89B3C]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#5C4033]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest font-semibold text-[#C89B3C] bg-[#5C4033]/40 border border-[#C89B3C]/20 px-3 py-1.5 rounded-full">
            Expertise Matrix
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Technical & Professional Skills
          </h2>
          <div className="mt-2 w-16 h-1 bg-[#C89B3C] mx-auto rounded-full"></div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skill-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id as CategoryFilter)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-[#C89B3C] text-[#2B1B12] border-[#C89B3C] shadow-lg shadow-[#C89B3C]/10"
                  : "bg-[#5C4033]/20 text-[#D8C3A5] border-[#5C4033]/40 hover:bg-[#5C4033]/40 hover:text-white"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${getCategoryColor(
                  skill.category
                )} border flex flex-col justify-between h-32 hover:scale-[1.02] hover:shadow-lg transition-transform`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] uppercase font-mono bg-white/10 px-2 py-1 rounded text-white/80 tracking-widest font-semibold">
                    {getCategoryLabel(skill.category)}
                  </span>
                  <CheckCircle className="w-4 h-4 text-[#C89B3C]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-wide leading-tight">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#C89B3C] h-full rounded-full w-[85%]"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Professional summary badge */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 bg-[#5C4033]/20 border border-[#5C4033]/40 rounded-3xl backdrop-blur-sm">
          <p className="text-sm text-[#D8C3A5] font-light italic">
            "These skills combine strong technical IT basics from academic training with practical, self-taught web tools and soft-skills for event coordination, team integration, and digital execution."
          </p>
        </div>

      </div>
    </section>
  );
}
