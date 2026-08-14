import React from "react";
import { X, Printer, FileText, Smartphone, Mail, MapPin } from "lucide-react";
import { PortfolioData } from "../types";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      window.print();
      return;
    }

    const skillsList = data.skills.map((category) => `
      <div style="margin-bottom: 8px;">
        <strong style="font-family: Arial, sans-serif; font-size: 10px; text-transform: uppercase; color: #4b5563; letter-spacing: 0.05em; display: block;">
          ${category.category}
        </strong>
        <span style="font-family: Georgia, serif; font-size: 11px; color: #030712; display: block; margin-top: 2px;">
          ${category.items.join(", ")}
        </span>
      </div>
    `).join("");

    const experienceList = data.experiences.map((exp) => `
      <div style="margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; font-family: Arial, sans-serif; font-size: 11px;">
          <div>
            <strong style="color: #111827; font-size: 12px;">${exp.company}</strong>
            ${exp.client ? `<span style="color: #4b5563; font-style: italic; margin-left: 8px; font-size: 10px;">(Client: ${exp.client})</span>` : ""}
          </div>
          <span style="color: #6b7280; font-weight: 500; font-size: 10px; white-space: nowrap;">${exp.period}</span>
        </div>
        <div style="font-family: Arial, sans-serif; font-style: italic; color: #374151; font-size: 10px; margin-top: 2px;">${exp.role}</div>
        <ul style="list-style-type: disc; padding-left: 16px; margin-top: 6px; margin-bottom: 0;">
          ${exp.highlights.map((h) => `
            <li style="font-family: Georgia, serif; font-size: 11px; color: #1f2937; line-height: 1.5; margin-bottom: 4px; text-align: justify;">
              ${h}
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");

    const educationList = data.education.map((edu) => `
      <div style="display: flex; justify-content: space-between; align-items: center; font-family: Arial, sans-serif; font-size: 11px; margin-bottom: 8px;">
        <div>
          <strong style="color: #111827;">${edu.degree}</strong>
          <span style="color: #6b7280; margin-left: 8px;">— ${edu.school}</span>
        </div>
        <span style="color: #6b7280; font-size: 10px; font-weight: 500;">${edu.year}</span>
      </div>
    `).join("");

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${data.name} - Resume</title>
          <style>
            @page {
              size: A4;
              margin: 15mm;
            }
            @media print {
              body {
                background: white !important;
                color: black !important;
                padding: 0 !important;
              }
              .no-print {
                display: none !important;
              }
            }
            body {
              background-color: #f3f4f6;
              color: #111827;
              margin: 0;
              padding: 40px 20px;
              display: flex;
              justify-content: center;
            }
            .resume-card {
              background: white;
              width: 100%;
              max-width: 210mm;
              box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
              border: 1px solid #e5e7eb;
              border-radius: 4px;
              padding: 40px;
              box-sizing: border-box;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #111827;
              padding-bottom: 20px;
              margin-bottom: 20px;
            }
            .name {
              font-family: Arial, sans-serif;
              font-size: 26px;
              font-weight: bold;
              text-transform: uppercase;
              margin: 0;
            }
            .title {
              font-family: Arial, sans-serif;
              font-size: 13px;
              font-weight: 600;
              text-transform: uppercase;
              color: #374151;
              margin-top: 4px;
              margin-bottom: 0;
            }
            .contacts {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 15px;
              font-family: Arial, sans-serif;
              font-size: 11px;
              color: #4b5563;
              margin-top: 14px;
            }
            .section-title {
              font-family: Arial, sans-serif;
              font-size: 12px;
              font-weight: bold;
              text-transform: uppercase;
              color: #111827;
              border-bottom: 1px solid #d1d5db;
              padding-bottom: 4px;
              margin-top: 20px;
              margin-bottom: 10px;
            }
            .summary-text {
              font-family: Georgia, serif;
              font-size: 11px;
              line-height: 1.6;
              color: #1f2937;
              margin-top: 8px;
              text-align: justify;
            }
            .grid-2 {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
            }
            @media (max-width: 600px) {
              .grid-2 {
                grid-template-columns: 1fr;
              }
            }
          </style>
        </head>
        <body>
          <div class="resume-card">
            <div class="header">
              <h1 class="name">${data.name}</h1>
              <p class="title">${data.title}</p>
              <div class="contacts">
                <span>📍 ${data.location}</span>
                <span>•</span>
                <span>✉️ ${data.email}</span>
                <span>•</span>
                <span>📱 ${data.phone}</span>
              </div>
            </div>
            <div>
              <div class="section-title">Professional Summary</div>
              <p class="summary-text">
                Dedicated and security-focused Senior .NET Full-Stack Engineer with 8+ years of experience designing, developing, and maintaining high-performance enterprise applications. Expert across C#, .NET Core, ASP.NET MVC, React.js, and SQL Server. Proven capability to implement robust software patterns, apply secure coding techniques, optimize database architectures, and deliver modern web applications with seamless REST APIs and emerging AI integrations.
              </p>
            </div>
            <div>
              <div class="section-title">Technical Capabilities & Tools</div>
              <div class="grid-2">
                ${skillsList}
              </div>
            </div>
            <div>
              <div class="section-title">Professional Experience</div>
              ${experienceList}
            </div>
            <div>
              <div class="section-title">Education & Credentials</div>
              ${educationList}
            </div>
          </div>
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 300);
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans flex items-center justify-center p-4">
      {/* Background overlay with absolutely NO backdrop-blur to prevent Safari/mobile rendering glitches */}
      <div className="fixed inset-0 bg-black/85 transition-opacity" onClick={onClose} />

      {/* Modal container - fully responsive and centered */}
      <div className="relative w-full max-w-4xl bg-[#0A0B0E] border border-white/5 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10 animate-fade-in">
        
        {/* Header bar */}
        <div className="px-6 py-4 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#38BDF8]" />
            <div>
              <h3 className="text-sm font-semibold font-mono tracking-wider text-white uppercase">
                RESUME DOCUMENT PREVIEW
              </h3>
              <p className="text-[10px] text-zinc-500 font-mono mt-0.5">
                Official high-resolution print template
              </p>
            </div>
          </div>
          
          <button
            id="btn-close-resume-modal"
            onClick={onClose}
            className="p-2 rounded-full border border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Document Area */}
        <div className="p-4 sm:p-6 bg-[#07080a] overflow-y-auto flex-1">
          <div className="w-full overflow-x-auto pb-4">
            <div 
              id="resume-printable-area" 
              className="bg-white text-zinc-900 p-6 sm:p-12 shadow-inner rounded-md mx-auto w-full max-w-[210mm] min-w-[280px] text-left border border-zinc-200"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              {/* Header */}
              <div className="text-center border-b-2 border-zinc-900 pb-5">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 uppercase">
                  {data.name}
                </h1>
                <p className="text-xs font-semibold tracking-wide text-zinc-700 mt-1 uppercase font-sans">
                  {data.title}
                </p>
                
                {/* Contacts block */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mt-3.5 text-[11px] text-zinc-600 font-sans">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-400" /> {data.location}
                  </span>
                  <span className="text-zinc-300 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-zinc-400" /> {data.email}
                  </span>
                  <span className="text-zinc-300 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-zinc-400" /> {data.phone}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 font-sans">
                  Professional Summary
                </h2>
                <p className="text-[11px] leading-relaxed text-zinc-800 mt-2 font-serif text-justify">
                  Dedicated and security-focused Senior .NET Full-Stack Engineer with 8+ years of experience designing, developing, and maintaining high-performance enterprise applications. Expert across C#, .NET Core, ASP.NET MVC, React.js, and SQL Server. Proven capability to implement robust software patterns, apply secure coding techniques, optimize database architectures, and deliver modern web applications with seamless REST APIs and emerging AI integrations.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 font-sans">
                  Technical Capabilities & Tools
                </h2>
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[11px] text-zinc-800">
                  {data.skills.map((category, idx) => (
                    <div key={idx} className="leading-tight">
                      <strong className="font-sans text-[10px] uppercase text-zinc-700 tracking-wide block">
                        {category.category}
                      </strong>
                      <span className="font-serif mt-0.5 block text-zinc-950">
                        {category.items.join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 font-sans">
                  Professional Experience
                </h2>
                <div className="mt-2.5 space-y-4">
                  {data.experiences.map((exp, idx) => (
                    <div key={idx} className="text-[11px] text-zinc-800">
                      <div className="flex justify-between items-start font-sans flex-col sm:flex-row gap-0.5 sm:gap-4">
                        <div>
                          <strong className="text-zinc-900 text-xs">{exp.company}</strong>
                          {exp.client && (
                            <span className="text-zinc-600 italic block sm:inline sm:ml-2 text-[10px]">
                              (Client: {exp.client})
                            </span>
                          )}
                        </div>
                        <span className="text-zinc-500 font-medium whitespace-nowrap text-[10px]">
                          {exp.period}
                        </span>
                      </div>
                      <div className="font-sans italic text-zinc-700 text-[10px] mt-0.5">
                        {exp.role}
                      </div>
                      <ul className="list-disc pl-4 mt-1.5 space-y-1 font-serif text-zinc-800">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-justify leading-relaxed">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 font-sans">
                  Education & Credentials
                </h2>
                <div className="mt-2.5 space-y-2 font-sans">
                  {data.education.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-center text-[11px] text-zinc-800 flex-col sm:flex-row gap-0.5 sm:gap-4">
                      <div className="self-start sm:self-auto">
                        <strong className="text-zinc-900">{edu.degree}</strong>
                        <span className="text-zinc-500 ml-2">— {edu.school}</span>
                      </div>
                      <span className="text-zinc-500 text-[10px] font-medium self-start sm:self-auto">{edu.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action bar footer */}
        <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[11px] text-zinc-500 font-mono text-center sm:text-left">
            💡 Select **"Save as PDF"** in the print dialog. Turn off headers & footers for perfect A4 sheets.
          </p>
          
          <button
            id="btn-print-resume"
            onClick={handlePrint}
            className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-[#38BDF8] hover:bg-[#7dd3fc] text-black font-mono text-xs font-bold rounded-full transition-colors cursor-pointer select-none"
          >
            <Printer className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>

      </div>
    </div>
  );
};
