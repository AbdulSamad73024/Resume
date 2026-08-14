import React, { useState } from "react";
import { FolderGit2, AlertCircle, CheckCircle2, ChevronRight, Activity, Terminal, ArrowRight, ShieldCheck, FileText, Database } from "lucide-react";
import { ProjectItem } from "../types";

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  // Renders a tailored micro-engineering schema for each project
  const renderProjectVisual = (id: string) => {
    switch (id) {
      case "proj-payroll":
        return (
          <div className="w-full h-24 bg-[#0A0B0E] border border-white/5 rounded-lg p-3 font-mono text-[9px] text-zinc-500 overflow-hidden relative flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[8px]">
              <span>[PAYROLL_ENGINE]</span>
              <span className="text-emerald-400">STATUS: COMPILED</span>
            </div>
            <div className="space-y-0.5 font-mono">
              <p className="text-zinc-400">▷ CALC_NET_SALARY(EmployeeID: 41829) ...</p>
              <p className="text-[#38BDF8]">  ↳ BASIC_SALARY + BONUS - TAX_DEDUCTIONS</p>
              <p className="text-zinc-600">  ↳ LEDGER_ENTRY_RECORDED: SUCCESS_A42</p>
            </div>
            <div className="flex gap-1.5 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[8px] text-zinc-600">Active Payroll Pipeline Thread</span>
            </div>
          </div>
        );
      case "proj-ai":
        return (
          <div className="w-full h-24 bg-[#0A0B0E] border border-white/5 rounded-lg p-3 font-mono text-[9px] text-zinc-500 overflow-hidden relative flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[8px]">
              <span>[COGNITIVE_AI]</span>
              <span className="text-violet-400 animate-pulse">STREAMING_TOKENS</span>
            </div>
            <div className="space-y-1 mt-1 font-mono">
              <div className="flex gap-2 text-zinc-400">
                <span className="text-violet-400 font-bold">Q:</span>
                <span>Summarize audit logs...</span>
              </div>
              <div className="flex gap-2 text-[#38BDF8] italic">
                <span className="text-[#38BDF8] font-bold">A:</span>
                <span>Found 2 risk factors in KYC docs. [94.5% confidence]</span>
              </div>
            </div>
          </div>
        );
      case "proj-kyc":
        return (
          <div className="w-full h-24 bg-[#0A0B0E] border border-white/5 rounded-lg p-3 font-mono text-[9px] text-zinc-500 overflow-hidden relative flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[8px]">
              <span>[SECURITY_AUDITOR]</span>
              <span className="text-red-400 font-bold">SECURE_GATEWAY</span>
            </div>
            <div className="space-y-0.5 text-[8px] text-zinc-400">
              <p className="text-emerald-400">✔ XSS_SANITATION_PASS</p>
              <p className="text-emerald-400">✔ INJECTION_SQL_MUTATOR_BLOCKED</p>
              <p className="text-zinc-500">✔ VULNERABILITY_INDEX: -20% REDUCTION</p>
            </div>
            <div className="text-[7px] text-zinc-600 uppercase tracking-widest text-right">
              SOLID architecture
            </div>
          </div>
        );
      case "proj-infodocs":
        return (
          <div className="w-full h-24 bg-[#0A0B0E] border border-white/5 rounded-lg p-3 font-mono text-[9px] text-zinc-500 overflow-hidden relative flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[8px]">
              <span>[PDF_MUTATOR]</span>
              <span className="text-[#38BDF8]">STREAMING_BUFFER</span>
            </div>
            <div className="space-y-0.5">
              <p className="text-zinc-400">▷ APPEND_PAGE_STREAM(source_id: 112) ...</p>
              <p className="text-zinc-400">▷ STAMP_WATERMARK("HealthAssure SECURE")</p>
              <p className="text-emerald-400">✔ MEMORY_STREAM_EDIT_COMPLETED (2.4ms)</p>
            </div>
          </div>
        );
      case "proj-case":
        return (
          <div className="w-full h-24 bg-[#0A0B0E] border border-white/5 rounded-lg p-3 font-mono text-[9px] text-zinc-500 overflow-hidden relative flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[8px]">
              <span>[CASE_INDEXER]</span>
              <span className="text-amber-500 font-semibold">15% FASTER LOOKUP</span>
            </div>
            <div className="space-y-0.5 font-mono">
              <p className="text-zinc-500">▷ CREATE NONCLUSTERED INDEX IX_Cases ON dbo.Cases</p>
              <p className="text-[#38BDF8]">  ↳ INDEX SEEK ENABLED: CaseID = 40918</p>
              <p className="text-emerald-400">✔ BULK_XML_UPLOAD: 5000 RECORDS IMPORTED</p>
            </div>
          </div>
        );
      case "proj-banking":
        return (
          <div className="w-full h-24 bg-[#0A0B0E] border border-white/5 rounded-lg p-3 font-mono text-[9px] text-zinc-500 overflow-hidden relative flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[8px]">
              <span>[REALTIME_TRANSACTIONS]</span>
              <span className="text-[#38BDF8]">MULTI_USER_HUB</span>
            </div>
            <div className="space-y-0.5">
              <p className="text-zinc-400">▷ PING_ATM_COORDINATE(UnionBank_410)</p>
              <p className="text-[#38BDF8]">  ↳ BROADCAST: TransactionFail_Alert_33</p>
              <p className="text-emerald-400">✔ SIGNALR_CLIENT_BROADCAST: OK</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-24 bg-[#0A0B0E] border border-white/5 rounded-lg p-3 font-mono text-[9px] text-zinc-600 flex items-center justify-center">
            [SCHEMA_VISUAL_NOT_DEFINED]
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-radial-gradient(at_bottom_left,rgba(56,189,248,0.01),transparent_30%)" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
            Engineering Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Selected Engineering Work
          </h2>
          <p className="text-xs text-zinc-500 font-mono mt-1">
            Factual commercial implementations built for enterprise operations
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white/[0.01] border border-white/5 hover:border-[#38BDF8]/20 hover:shadow-[0_0_25px_rgba(56,189,248,0.03)] transition-all duration-300 rounded-xl p-5 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Project Title Block */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 group-hover:border-[#38BDF8]/40 transition-colors">
                    <FolderGit2 className="w-4.5 h-4.5 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-xs font-bold tracking-widest text-zinc-100 group-hover:text-[#38BDF8] transition-colors uppercase font-mono">
                    {proj.title}
                  </h3>
                </div>

                {/* Micro Schematic Visual */}
                {renderProjectVisual(proj.id)}

                {/* Problem Statement Card */}
                <div className="p-3 bg-black/20 border border-white/5 rounded-lg text-left">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-500 uppercase font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Problem
                  </div>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-normal">
                    {proj.problem}
                  </p>
                </div>

                {/* Solution Summary Card */}
                <div className="p-3 bg-black/20 border border-white/5 rounded-lg text-left">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500 uppercase font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Solution
                  </div>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-normal">
                    {proj.solution}
                  </p>
                </div>

                {/* Contribution details */}
                <div className="text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold block mb-1">
                    My Engineering Contribution
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {proj.contribution}
                  </p>
                </div>

              </div>

              {/* Technologies Badges list at bottom */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((techItem, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-0.5 text-[9px] font-mono bg-black/40 border border-white/5 text-zinc-400 rounded"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
