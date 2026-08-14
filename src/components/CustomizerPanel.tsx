import React, { useState } from "react";
import { motion } from "motion/react";
import { Save, RotateCcw, X, Edit, Sliders, Info } from "lucide-react";
import { PortfolioData } from "../types";

interface CustomizerPanelProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (updatedData: PortfolioData) => void;
  onReset: () => void;
}

export const CustomizerPanel: React.FC<CustomizerPanelProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<PortfolioData>({ ...data });

  if (!isOpen) return null;

  const handleChange = (field: keyof PortfolioData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTextareaChange = (index: number, value: string) => {
    const updatedAbout = [...formData.aboutText];
    updatedAbout[index] = value;
    setFormData((prev) => ({
      ...prev,
      aboutText: updatedAbout,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleResetToDefault = () => {
    if (confirm("Are you sure you want to reset all modifications to default resume data?")) {
      onReset();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
          className="w-screen max-w-md bg-zinc-950 border-l border-zinc-900 shadow-2xl flex flex-col h-full"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-zinc-900/40 border-b border-zinc-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <h2 className="text-sm font-semibold font-mono tracking-wider text-white">
                LIVE CUSTOMIZER
              </h2>
            </div>
            <button
              id="btn-close-customizer"
              onClick={onClose}
              className="p-1 rounded-md text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 p-5 overflow-y-auto space-y-5 scrollbar-thin">
              
              <div className="p-3.5 bg-zinc-900/30 border border-zinc-900 rounded-lg flex gap-2 text-xs text-zinc-400">
                <Info className="w-4 h-4 text-cyan-500 shrink-0" />
                <p>
                  Update any text or connection coordinates below to tailor the profile. Changes persist locally.
                </p>
              </div>

              {/* Personal Brand */}
              <div className="space-y-3.5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-500 font-bold">
                  Personal Brand
                </h3>
                
                <div>
                  <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-lg px-3 py-1.5 text-xs text-white font-mono outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                    Primary Brand Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-lg px-3 py-1.5 text-xs text-white font-mono outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                    Main Tagline
                  </label>
                  <textarea
                    rows={2}
                    value={formData.tagline}
                    onChange={(e) => handleChange("tagline", e.target.value)}
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-lg px-3 py-1.5 text-xs text-white font-mono outline-none resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                    Work Availability Message
                  </label>
                  <input
                    type="text"
                    value={formData.statusText}
                    onChange={(e) => handleChange("statusText", e.target.value)}
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-lg px-3 py-1.5 text-xs text-white font-mono outline-none"
                    required
                  />
                </div>
              </div>

              {/* Contact Coordinates */}
              <div className="space-y-3.5 pt-4 border-t border-zinc-900">
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-500 font-bold">
                  Contact Coordinates
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-lg px-3 py-1.5 text-xs text-white font-mono outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-lg px-3 py-1.5 text-xs text-white font-mono outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-lg px-3 py-1.5 text-xs text-white font-mono outline-none"
                    required
                  />
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3.5 pt-4 border-t border-zinc-900">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-500 font-bold">
                    Social Connection Channels
                  </h3>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">
                    Leave empty to hide
                  </span>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                    GitHub Profile Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/username"
                    value={formData.githubUrl}
                    onChange={(e) => handleChange("githubUrl", e.target.value)}
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-lg px-3 py-1.5 text-xs text-white font-mono outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                    LinkedIn Profile Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedinUrl}
                    onChange={(e) => handleChange("linkedinUrl", e.target.value)}
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-lg px-3 py-1.5 text-xs text-white font-mono outline-none"
                  />
                </div>
              </div>

              {/* Bio Summary */}
              <div className="space-y-3.5 pt-4 border-t border-zinc-900">
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-500 font-bold">
                  Bio / Professional Profile
                </h3>

                {formData.aboutText.map((paragraph, index) => (
                  <div key={index}>
                    <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                      Bio Paragraph {index + 1}
                    </label>
                    <textarea
                      rows={3}
                      value={paragraph}
                      onChange={(e) => handleTextareaChange(index, e.target.value)}
                      className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-cyan-500/50 rounded-lg px-3 py-1.5 text-xs text-white font-mono outline-none resize-none"
                    />
                  </div>
                ))}
              </div>

            </div>

            {/* Actions Footer */}
            <div className="px-5 py-4 bg-zinc-900/60 border-t border-zinc-900 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleResetToDefault}
                className="inline-flex items-center gap-1.5 px-3 py-2 border border-zinc-800 hover:border-red-500/40 text-zinc-400 hover:text-red-400 transition-colors font-mono text-[10px] rounded-lg"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Defaults
              </button>

              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-mono text-[10px] font-bold rounded-lg transition-colors cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                Apply Modifications
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  );
};
