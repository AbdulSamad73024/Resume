import React from "react";
import { Cpu, Terminal, Database, ShieldAlert, Sparkles, LayoutGrid } from "lucide-react";
import { PortfolioData } from "../types";

interface SkillsProps {
  data: PortfolioData;
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "backend engineering":
        return <Cpu className="w-4.5 h-4.5 text-[#38BDF8]" />;
      case "frontend engineering":
        return <Terminal className="w-4.5 h-4.5 text-[#818CF8]" />;
      case "database engineering":
        return <Database className="w-4.5 h-4.5 text-[#38BDF8]" />;
      case "engineering practices":
        return <LayoutGrid className="w-4.5 h-4.5 text-[#818CF8]" />;
      case "emerging tech & ai":
        return <Sparkles className="w-4.5 h-4.5 text-[#818CF8]" />;
      default:
        return <Cpu className="w-4.5 h-4.5 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-radial-gradient(at_bottom_right,rgba(129,140,248,0.01),transparent_30%)" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
            Technical Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Comprehensive Core Expertise
          </h2>
          <p className="text-xs text-zinc-500 font-mono mt-1">
            Standard technology stacks verified from enterprise contributions
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.skills.map((category, idx) => (
            <div
              key={idx}
              className="p-5 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all rounded-xl flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-white/5 mb-4">
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    {getCategoryIcon(category.category)}
                  </div>
                  <h3 className="text-xs font-semibold font-mono tracking-wider text-zinc-200 uppercase">
                    {category.category}
                  </h3>
                </div>

                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2.5 py-1.5 text-xs font-mono bg-black/40 border border-white/5 text-zinc-300 rounded hover:text-white hover:border-[#38BDF8]/40 hover:-translate-y-0.5 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Detail */}
              <div className="mt-6 pt-3 border-t border-white/5 text-[9px] font-mono uppercase tracking-wider text-zinc-600 text-right">
                Verified Skill Set
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
