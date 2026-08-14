import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { PortfolioData } from "../types";

interface EducationProps {
  data: PortfolioData;
}

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section id="education" className="py-20 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-radial-gradient(at_top_left,rgba(56,189,248,0.01),transparent_30%)" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Education & Credentials
          </h2>
        </div>

        {/* Credentials Cards List */}
        <div className="space-y-4">
          {data.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 group-hover:border-[#38BDF8]/40 transition-colors">
                  <GraduationCap className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-wide text-zinc-100 group-hover:text-[#38BDF8] transition-colors uppercase font-mono">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-sans">
                    {edu.school}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.02] border border-white/5 text-[10px] font-mono text-[#38BDF8] rounded-md self-start sm:self-center">
                <Calendar className="w-3 h-3" />
                {edu.year}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
