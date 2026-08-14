import React from "react";
import { Layers, Cpu, ShieldCheck, Terminal, Link2, Sparkles } from "lucide-react";
import { PortfolioData } from "../types";

interface CapabilitiesProps {
  data: PortfolioData;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ data }) => {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "layers":
        return <Layers className="w-5 h-5 text-[#38BDF8]" />;
      case "cpu":
        return <Cpu className="w-5 h-5 text-[#818CF8]" />;
      case "shield":
        return <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />;
      case "terminal":
        return <Terminal className="w-5 h-5 text-[#818CF8]" />;
      case "link":
        return <Link2 className="w-5 h-5 text-[#38BDF8]" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-[#818CF8]" />;
      default:
        return <Layers className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <section className="py-20 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-radial-gradient(at_top_left,rgba(129,140,248,0.01),transparent_30%)" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
            Value Addition
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            What I Bring to Engineering Teams
          </h2>
          <p className="text-xs text-zinc-500 font-mono mt-1">
            Proven competencies that elevate systems engineering speed and quality
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.capabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all rounded-xl text-left flex gap-4 group"
            >
              <div className="p-2.5 h-fit rounded-lg bg-black/40 border border-white/5 group-hover:border-[#38BDF8]/40 transition-colors shrink-0">
                {getIcon(item.iconName)}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold font-mono tracking-wider text-zinc-100 group-hover:text-[#38BDF8] transition-colors uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
