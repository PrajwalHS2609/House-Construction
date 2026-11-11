import React from 'react';
import { ArrowRight, Home, Building, Sparkles, Compass } from 'lucide-react';

interface ResidentialExpertiseProps {
  onExploreCategory: (category: string) => void;
}

export const ResidentialExpertise: React.FC<ResidentialExpertiseProps> = ({ onExploreCategory }) => {
  const typologies = [
    {
      title: "1 & 2 BHK Compact Homes",
      sqft: "1,200 – 1,800 sq.ft",
      desc: "Intelligent multi-functional spaces, high ceilings, concealed storage, and lightwells optimized for urban plots.",
      tag: "urban"
    },
    {
      title: "3 & 4 BHK Family Residences",
      sqft: "2,400 – 3,800 sq.ft",
      desc: "Spacious independent family homes with private courtyard gardens, family lounges, and guest suites.",
      tag: "independent"
    },
    {
      title: "Duplex Houses with Double Height",
      sqft: "3,200 – 4,800 sq.ft",
      desc: "Two-level living sanctuaries featuring cantilevered staircases, internal atriums, and private terrace lounges.",
      tag: "duplex"
    },
    {
      title: "Contemporary Luxury Villas",
      sqft: "4,500 – 8,000+ sq.ft",
      desc: "Private estates with swimming pools, home automation, double-height glazing, and extensive landscaping.",
      tag: "villa"
    },
    {
      title: "Multi-Generational Compounds",
      sqft: "5,000 – 12,000 sq.ft",
      desc: "Thoughtfully zoned homes with private independent wings for parents, children, and collective entertainment spaces.",
      tag: "luxury"
    },
    {
      title: "Modern Architectural Retrofits",
      sqft: "Custom Scope",
      desc: "Structural strengthening, wall knockouts, open-plan transformations, and facade modernizations for older homes.",
      tag: "renovation"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F4F0] border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
              09 · Residential Typologies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance]">
              Building Different Homes for Different Lifestyles.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555A63] max-w-md leading-relaxed">
            Whether constructing on a tight city footprint or an expansive suburban parcel, our structural systems adapt to your lifestyle requirements.
          </p>
        </div>

        {/* 6 Typology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {typologies.map((typ, i) => (
            <div
              key={i}
              onClick={() => onExploreCategory(typ.tag)}
              className="p-6 sm:p-7 bg-white border border-[#E2E4E8] hover:border-[#121417] rounded-sm transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#71767E] mb-3">
                  <span className="text-[#B38E5D] font-bold">0{i + 1}</span>
                  <span className="tabular-nums">{typ.sqft}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#121417] mb-2 group-hover:text-[#B38E5D] transition-colors">
                  {typ.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555A63] leading-relaxed mb-6">
                  {typ.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5F4F0] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#121417]">
                <span>View Matching Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B38E5D] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
