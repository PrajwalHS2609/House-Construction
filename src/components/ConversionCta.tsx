import React from 'react';
import { ArrowRight, Phone, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';
import { PHONE_NUMBER, PHONE_CLEAN, WHATSAPP_NUMBER } from '../data/constructionData.ts';

interface ConversionCtaProps {
  onRequestConsultation: () => void;
  onOpenEstimator: () => void;
}

export const ConversionCta: React.FC<ConversionCtaProps> = ({
  onRequestConsultation,
  onOpenEstimator,
}) => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#121417] text-white overflow-hidden border-t border-[#2C3036]">
      {/* Background Architectural Scrim with subtle texture */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#B38E5D_1px,transparent_1px)] [background-size:28px_28px]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B38E5D] mb-4">
          <span className="w-1.5 h-1.5 bg-[#B38E5D]" />
          <span>Begin Your Construction Journey</span>
          <span className="w-1.5 h-1.5 bg-[#B38E5D]" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight [text-wrap:balance] mb-6 max-w-3xl mx-auto">
          Let's Turn Your Dream Home into Reality.
        </h2>

        <p className="text-base sm:text-lg text-[#DFD8CC] leading-relaxed max-w-2xl mx-auto mb-10">
          Planning to build your own house? Talk to our construction experts and get a personalized consultation for your project.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onRequestConsultation}
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#121417] bg-[#B38E5D] hover:bg-[#C5A06F] rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2 font-display shadow-lg"
          >
            <span>Request a Free Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#121417]" />
          </button>

          <button
            onClick={onOpenEstimator}
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-transparent border border-white/30 hover:border-white hover:bg-white/10 rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Get Construction Estimate</span>
          </button>
        </div>

        {/* Quick Contact & Trust Strip */}
        <div className="pt-8 border-t border-[#2C3036] flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-[#DFD8CC]">
          <a
            href={`tel:${PHONE_CLEAN}`}
            className="flex items-center gap-2 hover:text-[#B38E5D] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#B38E5D]" />
            <span className="font-mono tabular-nums">{PHONE_NUMBER}</span>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Valence%20Residential,%20I'd%20like%20to%20request%20a%20construction%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#B38E5D] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#B38E5D]" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B38E5D]" />
            <span>10-Year Post-Handover Warranty</span>
          </div>
        </div>

      </div>
    </section>
  );
};
