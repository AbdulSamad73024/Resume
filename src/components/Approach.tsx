import React from "react";
import { PortfolioData } from "../types";

interface ApproachProps {
  data: PortfolioData;
}

export const Approach: React.FC<ApproachProps> = ({ data }) => {
  return (
    <section className="py-20 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-radial-gradient(at_bottom_right,rgba(129,140,248,0.01),transparent_30%)" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
            Engineering Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            My Engineering Approach
          </h2>
          <p className="text-xs text-zinc-500 font-mono mt-1">
            Standard operating procedure for delivering resilient enterprise solutions
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {data.approachSteps.map((step, idx) => (
            <div
              key={step.num}
              className="p-5 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all rounded-xl text-left relative flex flex-col justify-between h-48 group"
            >
              {/* Connector line for large screens */}
              {idx < data.approachSteps.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 border-t border-dashed border-white/5 hidden lg:block z-0 translate-x-3" />
              )}
              
              <div>
                <span className="text-3xl font-black text-zinc-800 group-hover:text-[#38BDF8]/20 transition-colors font-mono block leading-none select-none">
                  {step.num}
                </span>
                <h3 className="text-xs font-bold font-mono tracking-wider text-zinc-100 group-hover:text-[#38BDF8] transition-colors uppercase mt-3.5">
                  {step.title}
                </h3>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-sans mt-2">
                  {step.description}
                </p>
              </div>
              
              <div className="text-[8px] font-mono uppercase tracking-widest text-zinc-600 block mt-4">
                Phase Active
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
