import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Terminal, RefreshCw } from "lucide-react";
import { PortfolioData } from "../types";

interface ContactProps {
  data: PortfolioData;
}

interface MessageLog {
  sender: string;
  email: string;
  body: string;
  timestamp: string;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [localLogs, setLocalLogs] = useState<MessageLog[]>(() => {
    try {
      const saved = localStorage.getItem("abdul_samad_recruiter_messages");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    const cleanPhone = data.phone.replace(/[^0-9]/g, "");
    const formattedText = `*New Recruiter Inquiry (Portfolio)*\n\n*Name/Company:* ${name || "Anonymous Recruiter"}\n*Email:* ${email}\n\n*Message:*\n${message}`;
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedText)}`;

    // Simulate network transmission logging
    setTimeout(() => {
      const newLog: MessageLog = {
        sender: name || "Anonymous Recruiter",
        email: email || "no-email@recruiter.com",
        body: message,
        timestamp: new Date().toLocaleTimeString()
      };
      
      const updatedLogs = [newLog, ...localLogs].slice(0, 5); // keep last 5
      setLocalLogs(updatedLogs);
      localStorage.setItem("abdul_samad_recruiter_messages", JSON.stringify(updatedLogs));
      
      setIsSending(false);
      setSendSuccess(true);
      
      // Clear fields
      setName("");
      setEmail("");
      setMessage("");
      
      // Safely redirect to WhatsApp prefilled message window
      window.open(waUrl, "_blank", "noopener,noreferrer");

      setTimeout(() => setSendSuccess(false), 5000);
    }, 800);
  };

  const handleClearLogs = () => {
    localStorage.removeItem("abdul_samad_recruiter_messages");
    setLocalLogs([]);
  };

  return (
    <section id="contact" className="py-20 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-radial-gradient(at_bottom_left,rgba(56,189,248,0.02),transparent_40%)" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
            Secure Connection
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Let's Connect
          </h2>
          <p className="text-xs text-zinc-500 font-mono mt-1">
            Initiate communication or review direct channels
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Vikhroli Location Card */}
            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl text-left flex gap-4">
              <div className="p-2.5 h-fit rounded-lg bg-black/40 border border-white/5 text-[#38BDF8]">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase text-zinc-500 block">Current Location</span>
                <strong className="text-sm font-bold text-zinc-100 font-mono mt-1 block">
                  {data.location}
                </strong>
                <span className="text-xs text-zinc-400 font-mono">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Email Contact Card */}
            <a
              href={`mailto:${data.email}`}
              id="btn-contact-email-card"
              className="p-5 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-xl text-left flex gap-4 block group"
            >
              <div className="p-2.5 h-fit rounded-lg bg-black/40 border border-white/5 text-[#38BDF8] group-hover:border-[#38BDF8]/40 transition-colors">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div className="flex-1">
                <span className="text-[9px] font-mono uppercase text-zinc-500 block">Direct Email</span>
                <strong className="text-sm font-bold text-zinc-100 font-mono mt-1 block group-hover:text-[#38BDF8] transition-colors break-all">
                  {data.email}
                </strong>
                <span className="text-xs text-zinc-400 font-mono">Click to mail instantly</span>
              </div>
            </a>

            {/* Phone Contact Card */}
            <a
              href={`tel:${data.phone.replace(/\s+/g, "")}`}
              id="btn-contact-phone-card"
              className="p-5 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-xl text-left flex gap-4 block group"
            >
              <div className="p-2.5 h-fit rounded-lg bg-black/40 border border-white/5 text-[#38BDF8] group-hover:border-[#38BDF8]/40 transition-colors">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div className="flex-1">
                <span className="text-[9px] font-mono uppercase text-zinc-500 block">Mobile Hotwire</span>
                <strong className="text-sm font-bold text-zinc-100 font-mono mt-1 block group-hover:text-[#38BDF8] transition-colors">
                  {data.phone}
                </strong>
                <span className="text-xs text-zinc-400 font-mono">Available for voice calls & WhatsApp</span>
              </div>
            </a>

            {/* Dynamic Social handles (renders only if populated in Customizer) */}
            {(data.githubUrl || data.linkedinUrl) && (
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl text-left space-y-3">
                <span className="text-[9px] font-mono uppercase text-zinc-500 block border-b border-white/5 pb-2">
                  External Channels
                </span>
                
                <div className="flex flex-wrap gap-2.5">
                  {data.githubUrl && (
                    <a
                      href={data.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer referrer"
                      id="btn-social-github"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/40 border border-white/5 hover:border-[#38BDF8]/40 rounded-lg text-xs font-mono text-zinc-300 hover:text-white transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}

                  {data.linkedinUrl && (
                    <a
                      href={data.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer referrer"
                      id="btn-social-linkedin"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/40 border border-white/5 hover:border-[#38BDF8]/40 rounded-lg text-xs font-mono text-zinc-300 hover:text-white transition-all"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Secure Routing Message Form */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl relative">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block mb-4">
                Message Router Portal
              </span>
              
              <form onSubmit={handleSubmitMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp CTO"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#0A0B0E] border border-white/5 focus:border-[#38BDF8]/50 rounded-lg px-3.5 py-2 text-xs text-white font-mono outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                      Reply Coordinates (Email)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. manager@acme.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0A0B0E] border border-white/5 focus:border-[#38BDF8]/50 rounded-lg px-3.5 py-2 text-xs text-white font-mono outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                    Transmission Body (Message)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, role scope, or request..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#0A0B0E] border border-white/5 focus:border-[#38BDF8]/50 rounded-lg px-3.5 py-2 text-xs text-white font-mono outline-none resize-none"
                    required
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  {sendSuccess ? (
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                      <CheckCircle className="w-4 h-4 animate-bounce" />
                      Transmission routed successfully!
                    </div>
                  ) : (
                    <div className="text-[10px] text-zinc-500 font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse shrink-0" />
                      <span>💬 Submitting will redirect to send via WhatsApp</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    id="btn-contact-submit"
                    disabled={isSending}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#38BDF8] hover:bg-[#7dd3fc] disabled:bg-zinc-800 disabled:text-zinc-500 text-black font-mono text-xs font-bold rounded-full transition-colors cursor-pointer select-none"
                  >
                    {isSending ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Routing...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Transmit Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Recruiter Log Terminal - displays message queue from localStorage */}
            {localLogs.length > 0 && (
              <div className="p-4 bg-[#0A0B0E] border border-white/5 rounded-xl font-mono text-[10px] text-zinc-500 relative">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                  <div className="flex items-center gap-2 text-[#38BDF8]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>LOCAL_TRANSMISSION_LOGGER.log</span>
                  </div>
                  <button
                    id="btn-clear-logs"
                    onClick={handleClearLogs}
                    className="text-[9px] text-zinc-600 hover:text-red-400 transition-colors"
                  >
                    Clear Logs
                  </button>
                </div>

                <div className="space-y-2.5 max-h-[140px] overflow-y-auto scrollbar-thin">
                  {localLogs.map((log, idx) => (
                    <div key={idx} className="border-l border-white/5 pl-2.5 py-0.5 space-y-1">
                      <div className="flex items-center justify-between text-zinc-400 text-[9px]">
                        <span>FROM: {log.sender} ({log.email})</span>
                        <span className="text-[8px]">{log.timestamp}</span>
                      </div>
                      <p className="text-zinc-300 italic">" {log.body} "</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
