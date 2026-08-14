import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Sliders, Code2, Sparkles } from "lucide-react";
import { PortfolioData } from "../types";

interface AboutProps {
  data: PortfolioData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  const philosophies = [
    {
      icon: <CheckCircle2 className="w-4.5 h-4.5 text-[#38BDF8]" />,
      title: "SOLID Architecture & Patterns",
      desc: "Deep focus on clean structure, separation of concerns, decoupling, and maintainable enterprise patterns."
    },
    {
      icon: <ShieldCheck className="w-4.5 h-4.5 text-[#38BDF8]" />,
      title: "Secure Development Lifecycle",
      desc: "Enforcing strict authorization pipelines, protecting endpoints, and applying secure standards to reduce vulnerabilities by 20%."
    },
    {
      icon: <Zap className="w-4.5 h-4.5 text-[#38BDF8]" />,
      title: "Performance Optimization",
      desc: "Optimizing database execution, index seeks, stored procedures, and memory allocations for swift interaction."
    },
    {
      icon: <Code2 className="w-4.5 h-4.5 text-[#38BDF8]" />,
      title: "Full-Stack Versatility",
      desc: "Operating smoothly from complex C# controllers and database tables down to responsive React components and state."
    }
  ];

  return (
    <section id="about" className="py-20 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-radial-gradient(at_top_left,rgba(56,189,248,0.01),transparent_30%)" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
            Professional Profile
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight max-w-2xl">
            Engineering Experience That Goes Beyond Code
          </h2>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Summary */}
          <div className="lg:col-span-6 space-y-5 text-left text-zinc-400 text-sm sm:text-base leading-relaxed">
            {data.aboutText.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            
            {/* Direct Fact checklist */}
            <div className="pt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-white/5 mt-6">
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-500 block">Experience Span</span>
                <span className="text-zinc-200 font-mono text-sm font-semibold">8+ Years Professional</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-500 block">Core Environment</span>
                <span className="text-zinc-200 font-mono text-sm font-semibold">.NET Framework & Core</span>
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block">UI Architecture</span>
                <span className="text-zinc-200 font-mono text-sm font-semibold">React.js & Tailwind CSS</span>
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block">Storage Engine</span>
                <span className="text-zinc-200 font-mono text-sm font-semibold">MS SQL Server</span>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Philosophies */}
          <div className="lg:col-span-6 space-y-3">
            {philosophies.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-xl flex gap-4 text-left group"
              >
                <div className="p-2 h-fit rounded-lg bg-black/40 border border-white/5 group-hover:border-[#38BDF8]/40 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-semibold font-mono tracking-wide text-zinc-100 uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
