import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Metrics } from "./components/Metrics";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Capabilities } from "./components/Capabilities";
import { Approach } from "./components/Approach";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomizerPanel } from "./components/CustomizerPanel";
import { ResumeModal } from "./components/ResumeModal";
import { loadPortfolioData, savePortfolioData, resetPortfolioData } from "./data";
import { PortfolioData } from "./types";
import { Sliders, RefreshCw, Sparkles, CheckCircle } from "lucide-react";

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => loadPortfolioData());
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSaveData = (updatedData: PortfolioData) => {
    setData(updatedData);
    savePortfolioData(updatedData);
    triggerNotification();
  };

  const handleResetData = () => {
    const defaultData = resetPortfolioData();
    setData(defaultData);
    triggerNotification();
  };

  const triggerNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#E5E7EB] font-sans flex flex-col relative selection:bg-[#38BDF8]/30 selection:text-white overflow-x-hidden">
      
      {/* Immersive UI Gradient Glows and Radial Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] right-[-5%] w-[600px] h-[600px] bg-[#38BDF8] opacity-[0.05] blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-[#818CF8] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-[#38BDF8] opacity-[0.02] blur-[100px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#38BDF8 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
      </div>

      {/* Sticky Premium Navbar */}
      <Navbar
        data={data}
        customizerOpen={customizerOpen}
        onToggleCustomizer={() => setCustomizerOpen(!customizerOpen)}
        onDownloadResume={() => setResumeModalOpen(true)}
      />

      {/* Main Single-View Sections Scroll Container */}
      <main className="flex-grow">
        
        {/* Hero Banner Section */}
        <Hero data={data} onDownloadResume={() => setResumeModalOpen(true)} />

        {/* Factual Value Statistics Section */}
        <Metrics data={data} />

        {/* Professional Profile Narrative Section */}
        <About data={data} />

        {/* Technical Stack Skill Categories Section */}
        <Skills data={data} />

        {/* Vertical Career Journey Timeline Section */}
        <Experience data={data} />

        {/* Selected Engineering Work Cards Section */}
        <Projects projects={data.projects} />

        {/* Custom capabilities/Value Propositions Section */}
        <Capabilities data={data} />

        {/* Visual engineering workflow path Section */}
        <Approach data={data} />

        {/* Education Credentials Section */}
        <Education data={data} />

        {/* Coordinates contact section */}
        <Contact data={data} />

      </main>

      {/* Branded Footer */}
      <Footer data={data} />

      {/* Slide-in Live Portfolio Customizer Drawers */}
      {customizerOpen && (
        <CustomizerPanel
          isOpen={customizerOpen}
          onClose={() => setCustomizerOpen(false)}
          data={data}
          onSave={handleSaveData}
          onReset={handleResetData}
        />
      )}

      {/* Printable ATS Resume Document Modals */}
      {resumeModalOpen && (
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
          data={data}
        />
      )}

      {/* Customizer Update Status Toast Notification */}
      {showNotification && (
        <div className="fixed bottom-6 left-6 z-50 p-4 bg-[#111318] border border-[#38BDF8]/30 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in font-mono max-w-sm">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              System Matrix Refreshed
            </p>
            <p className="text-[10px] text-zinc-400 mt-1">
              Modifications written to local state successfully.
            </p>
          </div>
        </div>
      )}

      {/* Custom Floating Action to assist recruiters at the bottom corner */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-2.5">
        <button
          id="btn-floating-customizer"
          onClick={() => setCustomizerOpen(!customizerOpen)}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#111318] hover:bg-[#111318]/90 border border-white/5 hover:border-[#38BDF8]/40 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-300 shadow-xl transition-all"
        >
          <Sliders className="w-3.5 h-3.5 text-[#38BDF8]" />
          Edit Data Live
        </button>
      </div>

    </div>
  );
}
