import React from "react";
import { Briefcase, Calendar, MapPin, User, CheckCircle2 } from "lucide-react";
import { PortfolioData } from "../types";

interface ExperienceProps {
  data: PortfolioData;
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-20 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-radial-gradient(at_top_right,rgba(56,189,248,0.01),transparent_30%)" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
            Career Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Professional Journey
          </h2>
          <p className="text-xs text-zinc-500 font-mono mt-1">
            Over 8 years of certified full-stack achievements in enterprise and fintech spaces
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/5 ml-3 sm:ml-6 space-y-12 pb-4 text-left">
          {data.experiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline dot / bubble */}
              <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-lg bg-[#0A0B0E] border border-white/5 group-hover:border-[#38BDF8]/50 flex items-center justify-center transition-colors z-10 shadow-lg">
                <Briefcase className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#38BDF8] transition-colors" />
              </div>

              {/* Node content structure */}
              <div className="space-y-3">
                {/* Meta details header line */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white tracking-tight group-hover:text-[#38BDF8] transition-colors">
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 font-mono mt-0.5">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-zinc-500" />
                        {exp.role}
                      </span>
                      {exp.client && (
                        <span className="text-zinc-500 font-mono italic">
                          (Client: {exp.client})
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.02] border border-white/5 text-[10px] font-mono text-[#38BDF8] rounded-md self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                {/* Highlights bullet list */}
                <ul className="space-y-2 mt-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed text-justify">
                      <span className="text-[#38BDF8] shrink-0 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
