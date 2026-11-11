import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Calculator, ArrowUp } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_CLEAN } from '../data/constructionData.ts';

interface FloatingActionsProps {
  onOpenEstimator: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEstimator }) => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 bg-white/90 hover:bg-white text-[#121417] border border-[#E2E4E8] rounded-full shadow-md backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer hover:border-[#121417]"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Quick Cost Estimator Button */}
      <button
        onClick={onOpenEstimator}
        className="hidden sm:flex items-center gap-2 bg-[#121417] hover:bg-[#2C3036] text-white px-3.5 py-2.5 rounded-full shadow-lg border border-[#2C3036] text-xs font-semibold uppercase tracking-wider cursor-pointer group transition-all"
      >
        <Calculator className="w-4 h-4 text-[#B38E5D]" />
        <span>Cost Estimator</span>
      </button>

      {/* WhatsApp Floating Action Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Valence%20Residential,%20I'd%20like%20to%20discuss%20a%20home%20construction%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="flex items-center gap-2 bg-[#2C3E35] hover:bg-[#1F2E27] text-white px-3.5 py-3 rounded-full shadow-xl transition-all cursor-pointer group border border-[#3A5246]"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold uppercase tracking-wider pr-1 hidden md:inline">
          WhatsApp Us
        </span>
      </a>

      {/* Mobile-Only Click-to-call Floating Trigger */}
      <a
        href={`tel:${PHONE_CLEAN}`}
        aria-label="Call Construction Expert"
        className="sm:hidden w-11 h-11 bg-[#B38E5D] hover:bg-[#C5A06F] text-[#121417] rounded-full shadow-lg flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
