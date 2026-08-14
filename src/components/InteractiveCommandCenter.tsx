import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Database, Cpu, Link, Sparkles, ChevronRight, Check } from "lucide-react";

interface Node {
  id: string;
  name: string;
  type: string;
  icon: React.ReactNode;
  color: string;
  code: string;
  language: string;
  fileName: string;
  desc: string;
}

const ARCHITECTURE_NODES: Node[] = [
  {
    id: "frontend",
    name: "Frontend (React.js)",
    type: "UI Layer",
    icon: <Terminal className="w-5 h-5 text-[#38BDF8]" />,
    color: "from-[#38BDF8]/20 to-[#38BDF8]/5 hover:border-[#38BDF8]/50",
    fileName: "UserProfile.tsx",
    language: "typescript",
    desc: "Modern React.js UI optimized for speed, responsive bento grids, and fluid motion state management.",
    code: `import React, { useEffect, useState } from 'react';\nimport { fetchKYCStatus } from '@/services/api';\n\nexport const KYCVerification: React.FC = () => {\n  const [status, setStatus] = useState<'pending' | 'approved'>('pending');\n\n  useEffect(() => {\n    const loadKYC = async () => {\n      const res = await fetchKYCStatus();\n      if (res.isVerified) setStatus('approved');\n    };\n    loadKYC();\n  }, []);\n\n  return (\n    <div className="p-6 border border-white/5 rounded-xl bg-[#0A0B0E]/40">\n      <h3 className="text-sm font-semibold text-zinc-100">KYC Verification Status</h3>\n      <span className="mt-2 inline-flex items-center text-xs font-medium text-[#38BDF8]">\n        {status.toUpperCase()}\n      </span>\n    </div>\n  );\n};`
  },
  {
    id: "api",
    name: "API (REST Gateway)",
    type: "Ingress Router",
    icon: <Link className="w-5 h-5 text-[#38BDF8]" />,
    color: "from-[#38BDF8]/20 to-[#38BDF8]/5 hover:border-[#38BDF8]/50",
    fileName: "KycController.cs",
    language: "csharp",
    desc: "Secure C# REST API controllers implementing strict bearer tokens, routing, and schema validation.",
    code: `[ApiController]\n[Route("api/[controller]")]\n[Authorize(Roles = "User,Admin")]\npublic class KycController : ControllerBase\n{\n    private readonly IKycService _kycService;\n\n    public KycController(IKycService kycService)\n    {\n        _kycService = kycService ?? throw new ArgumentNullException(nameof(kycService));\n    }\n\n    [HttpGet("status")]\n    [ProducesResponseType(StatusCodes.Status200OK)]\n    public async Task<IActionResult> GetKycStatusAsync()\n    {\n        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;\n        var result = await _kycService.GetStatusByUserIdAsync(userId);\n        return Ok(result);\n    }\n}`
  },
  {
    id: "backend",
    name: "Backend (.NET Core)",
    type: "Logic Domain",
    icon: <Cpu className="w-5 h-5 text-[#818CF8]" />,
    color: "from-[#818CF8]/20 to-[#818CF8]/5 hover:border-[#818CF8]/50",
    fileName: "KycService.cs",
    language: "csharp",
    desc: "Robust business logic conforming strictly to SOLID principles, dependency injection, and secure memory handles.",
    code: `public interface IKycService\n{\n    Task<KycStatusDto> GetStatusByUserIdAsync(string userId);\n}\n\npublic class KycService : IKycService\n{\n    private readonly IKycRepository _repository;\n    private readonly ILogger<KycService> _logger;\n\n    public KycService(IKycRepository repository, ILogger<KycService> logger)\n    {\n        _repository = repository;\n        _logger = logger;\n    }\n\n    public async Task<KycStatusDto> GetStatusByUserIdAsync(string userId)\n    {\n        if (string.IsNullOrWhiteSpace(userId))\n            throw new ArgumentException("User ID cannot be null or empty", nameof(userId));\n\n        _logger.LogInformation("Retrieving KYC record for secure UID: {userId}", userId);\n        var record = await _repository.GetByUserIdAsync(userId);\n        return new KycStatusDto { IsVerified = record?.Status == "Verified" };\n    }\n}`
  },
  {
    id: "database",
    name: "Database (SQL Server)",
    type: "Persistence Engine",
    icon: <Database className="w-5 h-5 text-[#38BDF8]" />,
    color: "from-[#38BDF8]/20 to-[#38BDF8]/5 hover:border-[#38BDF8]/50",
    fileName: "GetKycStatus.sql",
    language: "sql",
    desc: "Stored procedures engineered with primary keys, explicit joins, strict transaction isolation, and index seeking.",
    code: `CREATE PROCEDURE dbo.sp_GetKycStatusByUserId\n    @UserId NVARCHAR(450)\nAS\nBEGIN\n    SET NOCOUNT ON;\n\n    SELECT \n        k.KycId, \n        k.UserId, \n        k.Status, \n        k.UpdatedAt\n    FROM dbo.KycRecords k WITH (NOLOCK)\n    INNER JOIN dbo.Users u ON k.UserId = u.Id\n    WHERE k.UserId = @UserId\n      AND u.IsActive = 1;\nEND;\nGO`
  },
  {
    id: "ai",
    name: "AI Integration",
    type: "Cognitive Module",
    icon: <Sparkles className="w-5 h-5 text-[#818CF8]" />,
    color: "from-[#818CF8]/20 to-[#818CF8]/5 hover:border-[#818CF8]/50",
    fileName: "AiSummaryService.cs",
    language: "csharp",
    desc: "Integrating enterprise systems with LLM endpoints via API pipelines to automate analytics and data extraction.",
    code: `public class AiSummaryService\n{\n    private readonly HttpClient _httpClient;\n    private readonly string _apiEndpoint;\n\n    public async Task<string> GenerateDocumentInsightAsync(string documentText)\n    {\n        var payload = new \n        {\n            model = "gemini-1.5-flash",\n            prompt = $"Extract core risk indicators from this KYC text: {documentText}"\n        };\n        \n        var response = await _httpClient.PostAsJsonAsync(_apiEndpoint, payload);\n        response.EnsureSuccessStatusCode();\n        \n        var result = await response.Content.ReadFromJsonAsync<AiResponse>();\n        return result?.GeneratedText ?? string.Empty;\n    }\n}`
  }
];

export const InteractiveCommandCenter: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>("frontend");
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const activeNode = ARCHITECTURE_NODES.find((n) => n.id === activeNodeId) || ARCHITECTURE_NODES[0];

  // Auto-cycle nodes to keep visual organic and engaging
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveNodeId((prev) => {
        const currentIndex = ARCHITECTURE_NODES.findIndex((n) => n.id === prev);
        const nextIndex = (currentIndex + 1) % ARCHITECTURE_NODES.length;
        return ARCHITECTURE_NODES[nextIndex].id;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  const handleNodeClick = (id: string) => {
    setActiveNodeId(id);
    setIsAutoCycling(false); // Stop auto cycle once user interacts
  };

  const copyCode = () => {
    navigator.clipboard.writeText(activeNode.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="command-center" className="w-full h-full flex flex-col justify-between bg-[#111318] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative">
      
      {/* Visual Header */}
      <div className="px-5 py-3.5 bg-black/25 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
          </span>
          <span className="text-xs font-mono text-zinc-500 pl-2">ARCH_ENGINE_CONSOLES.exe</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
          <span className="text-[10px] font-mono tracking-wider uppercase text-[#38BDF8]">
            {isAutoCycling ? "Live Stream Active" : "User Monitored"}
          </span>
        </div>
      </div>

      {/* Main Console Grid */}
      <div className="p-4 flex-1 grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Left Side: System Architecture Nodes */}
        <div className="md:col-span-5 flex flex-col justify-center gap-2.5 z-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">
            Application Pipeline Flow
          </span>
          
          <div className="relative space-y-2">
            {ARCHITECTURE_NODES.map((node, idx) => {
              const isActive = node.id === activeNodeId;
              return (
                <button
                  key={node.id}
                  id={`btn-node-${node.id}`}
                  onClick={() => handleNodeClick(node.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-center justify-between group ${
                    isActive
                      ? "border-[#38BDF8]/40 bg-[#0A0B0E]/80 text-white shadow-lg"
                      : "border-white/5 bg-[#0A0B0E]/20 text-zinc-400 hover:bg-[#0A0B0E]/40 hover:text-zinc-200"
                  }`}
                >
                  {/* Left border active highlight indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBorder"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#38BDF8]"
                    />
                  )}

                  {/* Flow connection path indicator */}
                  {idx < ARCHITECTURE_NODES.length - 1 && (
                    <div className="absolute left-6 top-12 h-6 w-0.5 border-l border-dashed border-white/5 pointer-events-none hidden md:block" />
                  )}

                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-[#0A0B0E] border border-white/5 transition-colors ${isActive ? "border-white/10 bg-[#111318]" : ""}`}>
                      {node.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wide font-mono">{node.name}</h4>
                      <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{node.type}</p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 text-zinc-600 transition-transform ${isActive ? "translate-x-1 text-[#38BDF8]" : "group-hover:translate-x-0.5"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Advanced Code Terminal View */}
        <div className="md:col-span-7 flex flex-col h-full bg-[#0A0B0E] border border-white/5 rounded-xl overflow-hidden relative min-h-[320px]">
          
          {/* Terminal File Header */}
          <div className="px-4 py-2 bg-black/20 border-b border-white/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 font-mono">File:</span>
              <span className="text-zinc-300 font-mono font-medium">{activeNode.fileName}</span>
            </div>
            <button
              id="btn-copy-code"
              onClick={copyCode}
              className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 hover:text-[#38BDF8] transition-colors px-2 py-1 rounded bg-black/20 border border-white/5 hover:border-[#38BDF8]/30 flex items-center gap-1"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  Copied
                </>
              ) : (
                "Copy Module"
              )}
            </button>
          </div>

          {/* Code Viewer Body */}
          <div className="flex-1 p-4 font-mono text-[11px] overflow-auto leading-relaxed text-zinc-300 bg-[#0A0B0E] relative selection:bg-[#38BDF8]/20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0A0B0E]/20 pointer-events-none" />
            
            {/* Context line numbers & text */}
            <div className="grid grid-cols-12 gap-3 min-w-[400px]">
              <div className="col-span-1 text-zinc-600 select-none text-right border-r border-white/5 pr-2">
                {activeNode.code.split("\n").map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="col-span-11 overflow-x-auto whitespace-pre font-mono scrollbar-thin scrollbar-thumb-zinc-800">
                {activeNode.code.split("\n").map((line, idx) => {
                  // Basic colorizing of key syntax
                  const colorized = line
                    .replace(/(\bimport\b|\bexport\b|\bfrom\b|\bpublic\b|\bprivate\b|\bclass\b|\binterface\b|\busing\b|\bnamespace\b|\breturn\b|\bawait\b|\basync\b|\bconst\b|\blet\b|\bvar\b|\bnew\b|\bthrow\b|\bstring\b|\bvoid\b|\bint\b)/g, '<span class="text-[#818CF8]">$1</span>')
                    .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="text-emerald-400">$1</span>')
                    .replace(/(\bKYCVerification\b|\bKycController\b|\bKycService\b|\bsp_GetKycStatusByUserId\b|\bAiSummaryService\b)/g, '<span class="text-[#38BDF8] font-semibold">$1</span>')
                    .replace(/(\/\/.*)/g, '<span class="text-zinc-600 italic">$1</span>');

                  return (
                    <div 
                      key={idx} 
                      className="hover:bg-[#111318]/40 px-1 rounded transition-colors"
                      dangerouslySetInnerHTML={{ __html: colorized || "&nbsp;" }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Architecture Details Footer */}
          <div className="p-3 bg-black/10 border-t border-white/5">
            <p className="text-[10px] text-zinc-400 leading-normal">
              <span className="text-[#38BDF8] font-mono font-semibold uppercase tracking-wider block mb-1">
                Engineering Summary
              </span>
              {activeNode.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
