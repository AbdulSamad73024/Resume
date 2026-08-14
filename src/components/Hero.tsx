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
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-[#0A0B0E] font-sans"
    >
      {/* Immersive Background Ambient Orbs and Glowing Spheres */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] bg-[#38BDF8] opacity-[0.06] blur-[100px] rounded-full pointer-events-none select-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[450px] h-[450px] bg-[#818CF8] opacity-[0.04] blur-[120px] rounded-full pointer-events-none select-none" />
      <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] bg-[#38BDF8] opacity-[0.03] blur-[100px] rounded-full pointer-events-none select-none" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#38BDF8 1.5px, transparent 1.5px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text Brand Credentials */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Work Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.02] border border-white/5 hover:border-[#38BDF8]/40 transition-colors text-[10px] font-mono font-bold uppercase tracking-widest text-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.03)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            {data.statusText}
          </motion.div>
 
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold flex items-center gap-2"
            >
              <Code className="w-3.5 h-3.5" />
              {data.title}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
            >
              Senior .NET <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#818CF8] drop-shadow-sm">
                Full-Stack Engineer
              </span>
            </motion.h1>
          </div>
 
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-sans"
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
                className="px-3.5 py-1.5 text-[10.5px] font-mono bg-white/[0.01] border border-white/5 text-zinc-300 rounded-lg hover:border-[#38BDF8]/40 hover:text-white transition-all cursor-default"
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
              className="px-8 py-3.5 bg-[#38BDF8] hover:bg-[#7dd3fc] text-black font-bold rounded-full transition-all duration-300 text-xs font-mono uppercase tracking-wider cursor-pointer shadow-[0_4px_20px_rgba(56,189,248,0.15)] hover:shadow-[0_4px_24px_rgba(56,189,248,0.45)] hover:-translate-y-0.5 select-none"
            >
              View My Experience
            </button>
 
            <button
              id="btn-hero-connect"
              onClick={() => handleScrollTo("#contact")}
              className="px-8 py-3.5 border border-white/10 hover:border-[#38BDF8]/40 hover:text-[#38BDF8] hover:bg-white/[0.02] rounded-full font-bold transition-all duration-300 text-xs font-mono uppercase tracking-wider cursor-pointer hover:-translate-y-0.5 select-none"
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
