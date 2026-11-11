import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER, PHONE_CLEAN, WHATSAPP_NUMBER } from '../data/constructionData.ts';

interface NavbarProps {
  onOpenEstimator: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'Process', target: 'process' },
    { label: 'Packages & Estimator', target: 'packages' },
    { label: 'Why Valence', target: 'why-us' },
  ];

  const handleNavClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E2E4E8] shadow-xs'
          : 'bg-[#FAFAF8]/90 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element, no subtitle clutter) */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B38E5D] rounded-sm py-1"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-6 bg-[#121417] group-hover:bg-[#B38E5D] transition-colors" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#121417] whitespace-nowrap shrink-0 font-display">
                VALENCE <span className="font-light text-[#71767E]">RESIDENTIAL</span>
              </span>
            </div>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#71767E]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 hover:text-[#121417] cursor-pointer text-[13.5px] uppercase tracking-wider font-semibold ${
                    isActive ? 'text-[#121417]' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B38E5D]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Quick phone */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${PHONE_CLEAN}`}
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-[#121417] hover:text-[#B38E5D] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#B38E5D]" />
              <span className="tabular-nums font-mono">{PHONE_NUMBER}</span>
            </a>

            <button
              onClick={onOpenEstimator}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] active:bg-[#000000] transition-colors whitespace-nowrap shrink-0 rounded-sm cursor-pointer shadow-xs flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#B38E5D]"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B38E5D]" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEstimator}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] rounded-sm sm:hidden"
            >
              Estimate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#121417] hover:bg-[#EFECE6] rounded-sm transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFAF8] border-b border-[#E2E4E8] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-left py-2 text-base font-semibold text-[#121417] hover:text-[#B38E5D] border-b border-[#EFECE6] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#71767E]" />
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] rounded-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Get a Free Construction Estimate</span>
              <ArrowRight className="w-4 h-4 text-[#B38E5D]" />
            </button>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <a
                href={`tel:${PHONE_CLEAN}`}
                className="py-2.5 px-3 text-center text-xs font-medium border border-[#E2E4E8] bg-white text-[#121417] rounded-sm flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#B38E5D]" />
                <span>Call Expert</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Valence%20Residential,%20I'd%20like%20to%20discuss%20a%20home%20construction%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 text-center text-xs font-medium border border-[#2C3E35] bg-[#2C3E35] text-white rounded-sm flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
