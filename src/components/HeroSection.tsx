import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Ruler, CheckCircle2, Building2 } from 'lucide-react';
import { TRUST_STATS, IMAGES } from '../data/constructionData.ts';

interface HeroSectionProps {
  onOpenEstimator: () => void;
  onExploreProjects: () => void;
  onRequestConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEstimator,
  onExploreProjects,
  onRequestConsultation,
}) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#FAFAF8] overflow-hidden">
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#121417_1px,transparent_1px)] [background-size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Subheader Kicker - Zero pill, clean unboxed text */}
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[#71767E] font-medium mb-6">
          <span className="text-[#121417] font-semibold">Residential Architecture & Construction</span>
          <span aria-hidden="true" className="text-[#B38E5D]">/</span>
          <span>Turnkey House Builders</span>
          <span aria-hidden="true" className="text-[#B38E5D]">/</span>
          <span>Structural Precision</span>
        </div>

        {/* Hero Main Grid (Asymmetric Editorial Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Bold Typography & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-[#121417] tracking-tight leading-[1.08] font-display mb-6 [text-wrap:balance]">
                Building Your Dream Home with Quality, Trust &amp; Precision.
              </h1>
              
              <p className="text-base sm:text-lg text-[#555A63] leading-relaxed max-w-2xl mb-8">
                From architectural planning to the final finishing touches, we deliver thoughtfully designed homes through professional construction, quality workmanship, and reliable project management.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
                <button
                  onClick={onOpenEstimator}
                  className="px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] active:bg-[#000000] rounded-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B38E5D]"
                >
                  <span>Get a Free Construction Estimate</span>
                  <ArrowRight className="w-4 h-4 text-[#B38E5D]" />
                </button>

                <button
                  onClick={onExploreProjects}
                  className="px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#121417] bg-white border border-[#E2E4E8] hover:border-[#121417] hover:bg-[#F5F4F0] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B38E5D]"
                >
                  <span>Explore Our Projects</span>
                </button>
              </div>
            </div>

            {/* Trust Indicators Strip (Clean, unboxed) */}
            <div className="pt-6 border-t border-[#E2E4E8] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B38E5D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#121417] tracking-wide uppercase">Residential Experts</h4>
                  <p className="text-[12px] text-[#71767E] leading-snug">Engineered standalone &amp; custom residences</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-[#B38E5D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#121417] tracking-wide uppercase">Quality-Focused</h4>
                  <p className="text-[12px] text-[#71767E] leading-snug">42-point site QA with material batch tests</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Ruler className="w-4 h-4 text-[#B38E5D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#121417] tracking-wide uppercase">Complete Solutions</h4>
                  <p className="text-[12px] text-[#71767E] leading-snug">Architectural design to key handover</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Resolution Architectural Frame (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative group overflow-hidden rounded-sm border border-[#E2E4E8] bg-[#EFECE6] flex-1 min-h-[380px] sm:min-h-[440px]">
              <img
                src={IMAGES.hero}
                alt="Contemporary luxury independent residential house at twilight by Valence"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Subtle architectural gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/90 via-[#121417]/20 to-transparent pointer-events-none" />

              {/* In-Frame Editorial Architectural Marker */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-auto">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#DFD8CC] mb-1.5">
                  <span className="w-1.5 h-1.5 bg-[#B38E5D]" />
                  <span>Featured Case Residence · Highland Estates</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white tracking-tight">The Solarium Villa</h3>
                    <p className="text-xs text-[#EFECE6]/80 mt-0.5">5,400 sq.ft Cantilevered Modern House</p>
                  </div>
                  <button
                    onClick={onExploreProjects}
                    className="px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold bg-white/10 hover:bg-white text-white hover:text-[#121417] backdrop-blur-md rounded-xs border border-white/20 transition-all cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Corner Architectural Stamp */}
              <div className="absolute top-4 right-4 bg-[#121417]/80 backdrop-blur-xs text-[#FAFAF8] px-3 py-1 text-[10px] uppercase font-mono tracking-wider border border-white/10">
                10-Year Structural Warranty
              </div>
            </div>

            {/* Quick Consultation Ribbon */}
            <div className="mt-3 bg-[#EFECE6] border border-[#DFD8CC] p-3.5 rounded-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#121417] shrink-0" />
                <span className="text-xs font-medium text-[#121417]">
                  Have a residential plot ready for construction?
                </span>
              </div>
              <button
                onClick={onRequestConsultation}
                className="text-xs font-bold text-[#121417] hover:text-[#B38E5D] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1"
              >
                <span>Book Site Audit</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Full-width Metric Proof Strip Below Split */}
        <div className="mt-14 pt-8 border-t border-[#E2E4E8] grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_STATS.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#121417] tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-[#71767E] uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
