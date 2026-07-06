import { SERVICES, Service } from "../data";
import { Code, Globe, TrendingUp, Figma, Users, LayoutGrid, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

// Mapping helper for Lucide Icons
const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Code":
      return <Code className={className} />;
    case "Globe":
      return <Globe className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "FigmaIcon":
      return <Figma className={className} />;
    case "Users":
      return <Users className={className} />;
    case "LayoutGrid":
      return <LayoutGrid className={className} />;
    default:
      return <Code className={className} />;
  }
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[#F8F1E7] text-[#2B1B12] overflow-hidden relative"
    >
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest font-semibold text-[#C89B3C] bg-[#5C4033]/5 px-3 py-1.5 rounded-full">
            Key Competencies
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#2B1B12]">
            Areas I Can Support
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C4033]/80 font-light max-w-2xl mx-auto">
            Leveraging my theoretical B.Sc. IT education, practical tools experience, and active adaptability to provide reliable value to your team.
          </p>
          <div className="mt-2 w-16 h-1 bg-[#C89B3C] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="p-8 rounded-3xl bg-white border border-[#5C4033]/10 shadow-sm hover:shadow-xl hover:border-[#C89B3C]/50 transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden"
            >
              {/* Subtle top background highlight */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#5C4033]/10 group-hover:bg-[#C89B3C] transition-colors duration-300"></div>

              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-[#5C4033]/5 group-hover:bg-[#C89B3C]/10 flex items-center justify-center border border-[#5C4033]/10 group-hover:border-[#C89B3C]/40 text-[#5C4033] group-hover:text-[#C89B3C] transition-all duration-300">
                  <IconMapper name={service.iconName} className="w-6 h-6" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#2B1B12] tracking-wide group-hover:text-[#C89B3C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C4033] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Feature bullet */}
              <div className="mt-6 pt-6 border-t border-[#5C4033]/5 flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#C89B3C]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Reliable Execution</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
