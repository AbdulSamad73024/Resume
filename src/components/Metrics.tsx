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
          {data.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/[0.02] border border-white/5 rounded-xl text-left hover:border-white/10 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight block">
                  {metric.value}
                </span>
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#38BDF8] mt-2.5 block">
                  {metric.label}
                </span>
                <p className="text-xs text-zinc-400 leading-normal font-sans mt-2">
                  {metric.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[9px] font-mono uppercase tracking-wider text-zinc-600">
                Verified Career Stat
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
