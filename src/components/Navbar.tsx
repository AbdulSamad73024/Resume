import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Settings, Sparkles } from "lucide-react";
import { PortfolioData } from "../types";

interface NavbarProps {
  data: PortfolioData;
  onToggleCustomizer: () => void;
  customizerOpen: boolean;
  onDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
  onToggleCustomizer,
  customizerOpen,
  onDownloadResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0B0E]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="nav-logo"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 font-sans group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#38BDF8] to-[#818CF8] rounded-lg flex items-center justify-center font-bold text-white tracking-tighter text-xl shadow-lg shadow-[#38BDF8]/10 group-hover:scale-105 transition-transform">
            AS
          </div>
          <span className="font-bold tracking-tight text-base text-white hidden sm:block uppercase">
            ABDUL SAMAD
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              id={`nav-link-${item.href.replace("#", "")}`}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-gray-400 hover:text-[#38BDF8] transition-colors relative py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side CTAs */}
        <div className="hidden md:flex items-center gap-4">
          {/* Customizer Toggle Button */}
          <button
            id="btn-toggle-customizer-nav"
            onClick={onToggleCustomizer}
            title="Toggle Live Content Customizer"
            className={`p-2 rounded-full border transition-all ${
              customizerOpen
                ? "bg-[#38BDF8]/10 border-[#38BDF8]/40 text-[#38BDF8]"
                : "bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:border-white/20"
            }`}
          >
            <Settings className={`w-4 h-4 ${customizerOpen ? "animate-spin" : ""}`} />
          </button>

          {/* Premium Download CTA */}
          <button
            id="btn-nav-resume-download"
            onClick={onDownloadResume}
            className="px-5 py-2 border border-[#38BDF8]/40 text-[#38BDF8] hover:bg-[#38BDF8]/10 bg-transparent rounded-full text-sm font-semibold transition-all cursor-pointer select-none"
          >
            Download Resume
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          {/* Customizer Toggle Button for Mobile */}
          <button
            id="btn-toggle-customizer-mobile"
            onClick={onToggleCustomizer}
            className={`p-1.5 rounded-lg border transition-all ${
              customizerOpen
                ? "bg-[#38BDF8]/10 border-[#38BDF8]/40 text-[#38BDF8]"
                : "bg-white/[0.02] border-white/5 text-gray-400"
            }`}
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Menu Toggle */}
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/5 bg-[#0A0B0E]/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                id={`mobile-nav-link-${item.href.replace("#", "")}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-2 text-sm font-medium text-gray-400 hover:text-[#38BDF8] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
              <button
                id="btn-mobile-resume-download"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadResume();
                }}
                className="w-full justify-center inline-flex items-center gap-2 px-5 py-2.5 border border-[#38BDF8]/40 text-[#38BDF8] hover:bg-[#38BDF8]/10 bg-transparent rounded-full text-sm font-semibold transition-all"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
