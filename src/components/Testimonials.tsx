import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/constructionData.ts';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
              10 · Verified Homeowner Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance]">
              Trusted by Homeowners. Appreciated for Our Work.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555A63] max-w-md leading-relaxed">
            Read unfiltered accounts from homeowners who partnered with Valence for their turnkey residential construction projects.
          </p>
        </div>

        {/* Editorial Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-8 sm:p-10 bg-white border border-[#E2E4E8] rounded-sm flex flex-col justify-between shadow-xs hover:border-[#DFD8CC] transition-all"
            >
              <div>
                {/* Rating & Highlight */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#B38E5D]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B38E5D]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#71767E]">
                    {test.year}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#121417] mb-4 text-[#B38E5D]">
                  "{test.highlight}"
                </div>

                {/* Main Quote */}
                <p className="text-sm sm:text-base text-[#121417] leading-relaxed mb-8 italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Attributable Client Metadata (Clean, unboxed) */}
              <div className="pt-6 border-t border-[#F5F4F0] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#121417]">
                    {test.clientName}
                  </h4>
                  <p className="text-xs text-[#71767E] mt-0.5">
                    {test.projectType} · <span className="font-medium text-[#121417]">{test.location}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-xs border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Build</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Summary Strip */}
        <div className="mt-12 p-6 bg-[#EFECE6] border border-[#DFD8CC] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#555A63]">
            <span className="font-bold text-[#121417]">100% Client Reference Check Policy: </span>
            Prospective clients are invited to speak directly with past homeowners and visit completed or active job sites.
          </div>
          <span className="text-xs font-mono font-bold text-[#121417] whitespace-nowrap">
            Schedule a Client Reference Call →
          </span>
        </div>

      </div>
    </section>
  );
};
