import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { PortfolioData } from "../types";

interface FooterProps {
  data: PortfolioData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = 2026;

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-transparent border-t border-white/5 py-12 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/5 pb-10">
          
          {/* Main Info Block */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="font-mono text-white font-bold tracking-wider text-sm flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center font-bold text-xs text-[#38BDF8]">
                AS
              </div>
              <span>{data.name.toUpperCase()}</span>
            </a>
            <p className="text-xs text-zinc-500 font-mono tracking-wider uppercase">
              {data.title}
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Designing, building, and maintaining high-performance full-stack web architectures from database tables up to reactive interfaces.
            </p>
          </div>

          {/* Quick Technical labels list */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">
              Core Stack
            </span>
            <div className="text-xs text-zinc-400 font-mono flex flex-wrap gap-x-3 gap-y-1">
              <span>C#</span>
              <span className="text-zinc-800">•</span>
              <span>.NET Core</span>
              <span className="text-zinc-800">•</span>
              <span>ASP.NET MVC</span>
              <span className="text-zinc-800">•</span>
              <span>React.js</span>
              <span className="text-zinc-800">•</span>
              <span>SQL Server</span>
              <span className="text-zinc-800">•</span>
              <span>REST APIs</span>
              <span className="text-zinc-800">•</span>
              <span>AI Integration</span>
            </div>
          </div>

          {/* Location Block */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">
              Base Office
            </span>
            <div className="text-xs text-zinc-400 font-mono space-y-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                Vikhroli East, Mumbai, India
              </span>
              <span className="flex items-center gap-1.5 break-all">
                <Mail className="w-3.5 h-3.5 text-zinc-600" />
                {data.email}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-500">
          <p>© {currentYear} Abdul Samad Abdul Majeed. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            {data.githubUrl && (
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38BDF8] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {data.linkedinUrl && (
              <a
                href={data.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38BDF8] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            <span className="text-zinc-800">|</span>
            <span className="uppercase tracking-widest text-zinc-600">
              Senior Full-Stack Brand
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
