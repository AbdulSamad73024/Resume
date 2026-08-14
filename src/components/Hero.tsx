import React from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText, Mail, ShieldAlert, Sparkles, Code } from "lucide-react";
import { PortfolioData } from "../types";
import { InteractiveCommandCenter } from "./InteractiveCommandCenter";

interface HeroProps {
  data: PortfolioData;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onDownloadResume }) => {
  const techBadges = [
    "C#",
    ".NET",
    "ASP.NET MVC",
    ".NET Core",
    "React.js",
    "TypeScript",
    "SQL Server",
    "REST APIs",
    "AI Integration",
  ];

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-transparent font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text Brand Credentials */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Work Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[10px] font-mono font-bold uppercase tracking-widest text-[#38BDF8]"
          >
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            {data.statusText}
          </motion.div>
 
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold"
            >
              {data.title}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              Senior .NET <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#818CF8]">Full-Stack Engineer</span>
            </motion.h1>
          </div>
 
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            Building Scalable Web Applications, Modern React Experiences & AI-Powered Solutions. {data.experienceYears}. Specialist in designing, developing, and maintaining high-performance enterprise systems using C#, .NET Core, React, and SQL Server.
          </motion.p>
 
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2 pt-2 max-w-xl"
          >
            {techBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-[11px] font-mono bg-white/[0.02] border border-white/5 text-zinc-300 rounded-full"
              >
                {badge}
              </span>
            ))}
          </motion.div>
 
          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              id="btn-hero-view-experience"
              onClick={() => handleScrollTo("#experience")}
              className="px-8 py-3 bg-[#38BDF8] text-black font-bold rounded-lg hover:bg-[#7dd3fc] transition-all text-sm cursor-pointer"
            >
              View My Experience
            </button>
 
            <button
              id="btn-hero-connect"
              onClick={() => handleScrollTo("#contact")}
              className="px-8 py-3 border border-white/10 hover:border-white/30 rounded-lg font-bold transition-all text-sm cursor-pointer"
            >
              Let's Connect
            </button>
          </motion.div>
        </div>

        {/* Right Side: Interactive Architecture Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 h-[480px] w-full"
        >
          <InteractiveCommandCenter />
        </motion.div>

      </div>
    </section>
  );
};
