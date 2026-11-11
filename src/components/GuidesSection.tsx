import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, X } from 'lucide-react';
import { GUIDES } from '../data/constructionData.ts';
import { ConstructionGuide } from '../types/index.ts';

export const GuidesSection: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<ConstructionGuide | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F4F0] border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
              13 · Construction Guides &amp; Knowledge
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance]">
              Architectural &amp; Engineering Field Insights.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555A63] max-w-md leading-relaxed">
            Essential technical knowledge every homeowner should understand before signing a contract or breaking ground.
          </p>
        </div>

        {/* 3 Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUIDES.map((guide) => (
            <div
              key={guide.id}
              onClick={() => setSelectedGuide(guide)}
              className="bg-white border border-[#E2E4E8] hover:border-[#121417] rounded-sm p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer group shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#71767E] mb-3">
                  <span className="text-[#B38E5D] font-bold">{guide.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {guide.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#121417] group-hover:text-[#B38E5D] transition-colors leading-snug mb-3">
                  {guide.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555A63] leading-relaxed mb-6">
                  {guide.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5F4F0] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#121417]">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B38E5D] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Guide Detail Modal */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-sm border border-[#E2E4E8] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedGuide(null)}
              className="absolute top-5 right-5 p-2 text-[#71767E] hover:text-[#121417] hover:bg-[#F5F4F0] rounded-sm cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono text-[#B38E5D] uppercase tracking-wider mb-2">
              {selectedGuide.category} · {selectedGuide.readTime}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#121417] mb-4 pr-6">
              {selectedGuide.title}
            </h3>

            <div className="text-xs text-[#71767E] pb-4 mb-6 border-b border-[#E2E4E8]">
              Published by Valence Architectural Technical Directorate · {selectedGuide.date}
            </div>

            <div className="space-y-4 text-sm text-[#555A63] leading-relaxed">
              {selectedGuide.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E4E8] flex justify-end">
              <button
                onClick={() => setSelectedGuide(null)}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] rounded-sm hover:bg-[#2C3036] cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
