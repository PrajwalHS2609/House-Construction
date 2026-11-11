import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Award, Users, HardHat } from 'lucide-react';
import { IMAGES } from '../data/constructionData.ts';

interface CompanyIntroProps {
  onLearnMore: () => void;
  onRequestConsultation: () => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ onLearnMore, onRequestConsultation }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F4F0] border-y border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
              01 · Company Introduction &amp; Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance]">
              Creating Homes That Reflect Your Vision.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555A63] max-w-md leading-relaxed">
            We are an architectural construction firm founded on engineering precision, unyielding material honesty, and single-point project accountability.
          </p>
        </div>

        {/* Split Screen Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#DFD8CC] shadow-md bg-white">
              <img
                src={IMAGES.finishing}
                alt="Architectural residential craftsmanship and interior finishing"
                className="w-full h-[420px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              
              {/* Bottom Project Marker */}
              <div className="p-5 bg-white border-t border-[#E2E4E8]">
                <div className="flex items-center justify-between text-xs text-[#71767E] mb-1">
                  <span className="font-mono uppercase tracking-wider">Oakridge Duplex Sanctuary</span>
                  <span className="text-[#121417] font-semibold">Handover 2024</span>
                </div>
                <p className="text-xs text-[#555A63]">
                  Double-height living atrium featuring chevron white oak and hand-cut stone masonry.
                </p>
              </div>
            </div>

            {/* Overlapping Engineering Callout Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#121417] text-white p-5 rounded-sm shadow-xl max-w-xs border border-[#2C3036]">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-[#B38E5D]" />
                <span className="text-xs font-bold uppercase tracking-wider">Certified Stability</span>
              </div>
              <p className="text-[12px] text-[#DFD8CC] leading-relaxed">
                Every residential slab and column is poured with licensed structural oversight and 28-day compression certification.
              </p>
            </div>
          </div>

          {/* Editorial Content & Approach (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="prose prose-neutral max-w-none text-[#555A63] space-y-5 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                At <strong className="text-[#121417] font-semibold">Valence Residential</strong>, we believe building a custom home is one of life’s most significant personal investments. Too often, residential construction is marred by fragmented contractors, unpredictable cost escalations, and ambiguous timelines.
              </p>
              <p>
                We dismantle this broken model by uniting <strong className="text-[#121417] font-semibold">award-winning architectural planning</strong> with <strong className="text-[#121417] font-semibold">in-house structural engineering and civil execution</strong> under one disciplined roof. From the moment our surveyor stakes your plot boundary to the day we present your engraved keys, every milestone is managed with military-grade precision.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              
              <div className="p-4 bg-white border border-[#E2E4E8] rounded-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <HardHat className="w-4 h-4 text-[#B38E5D]" />
                  <h4 className="text-sm font-bold text-[#121417]">Precision Engineering</h4>
                </div>
                <p className="text-xs text-[#71767E] leading-relaxed">
                  RCC frames calculated for high seismic resistance, soil bearing capacity, and acoustic quietness.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#E2E4E8] rounded-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Award className="w-4 h-4 text-[#B38E5D]" />
                  <h4 className="text-sm font-bold text-[#121417]">Zero-Escalation Contracts</h4>
                </div>
                <p className="text-xs text-[#71767E] leading-relaxed">
                  Transparent Bill of Quantities (BOQ) with fixed prices. No midway renegotiations.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#E2E4E8] rounded-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Users className="w-4 h-4 text-[#B38E5D]" />
                  <h4 className="text-sm font-bold text-[#121417]">Dedicated Site Engineer</h4>
                </div>
                <p className="text-xs text-[#71767E] leading-relaxed">
                  A full-time civil engineer stationed at your property ensuring strict adherence to architectural blueprints.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#E2E4E8] rounded-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B38E5D]" />
                  <h4 className="text-sm font-bold text-[#121417]">10-Year Warranty</h4>
                </div>
                <p className="text-xs text-[#71767E] leading-relaxed">
                  Formal structural warranty backed by registered civil engineers and continuous support.
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onRequestConsultation}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] rounded-sm transition-colors cursor-pointer flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#B38E5D]"
              >
                <span>Discuss Your Home Design</span>
                <ArrowRight className="w-4 h-4 text-[#B38E5D]" />
              </button>

              <button
                onClick={onLearnMore}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#121417] bg-transparent border border-[#121417] hover:bg-[#121417] hover:text-white rounded-sm transition-colors cursor-pointer"
              >
                <span>Explore Construction Process</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
