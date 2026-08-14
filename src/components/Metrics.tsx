import React from "react";
import { PortfolioData } from "../types";

interface MetricsProps {
  data: PortfolioData;
}

export const Metrics: React.FC<MetricsProps> = ({ data }) => {
  return (
    <section className="py-16 bg-transparent border-t border-white/5 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(56,189,248,0.02),transparent_70%)" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.metrics.map((metric, idx) => {
            // Determine gauge fills for premium high-tech visualization
            const percentage = idx === 0 ? "90%" : idx === 1 ? "95%" : "85%";
            const glowColor = idx === 0 ? "bg-[#38BDF8]" : idx === 1 ? "bg-[#818CF8]" : "bg-[#38BDF8]";
            return (
              <div
                key={idx}
                className="p-6 bg-white/[0.01] border border-white/5 hover:border-[#38BDF8]/20 transition-all duration-300 rounded-xl text-left flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Micro accent top glowing line */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight block group-hover:text-[#38BDF8] transition-colors">
                    {metric.value}
                  </span>
                  <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#38BDF8] mt-2.5 block">
                    {metric.label}
                  </span>
                  
                  {/* Premium Live Telemetry Gauge Indicator */}
                  <div className="mt-3.5 h-1.5 w-full bg-white/[0.03] border border-white/5 rounded-full overflow-hidden relative">
                    <div 
                      className={`h-full ${glowColor} rounded-full shadow-[0_0_8px_rgba(56,189,248,0.3)] transition-all duration-1000`} 
                      style={{ width: percentage }} 
                    />
                  </div>

                  <p className="text-xs text-zinc-400 leading-normal font-sans mt-3.5">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 text-[9px] font-mono uppercase tracking-widest text-zinc-600 flex items-center justify-between">
                  <span>Verified Career Stat</span>
                  <span className="text-[8px] text-[#38BDF8]/40 font-bold group-hover:text-[#38BDF8] transition-colors font-mono">
                    ONLINE // {percentage}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
