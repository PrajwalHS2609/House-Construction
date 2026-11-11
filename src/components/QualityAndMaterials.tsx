import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Check, FlaskConical, Droplets, Zap, Sparkles, Building2 } from 'lucide-react';

interface QualityAndMaterialsProps {
  onRequestMaterialSpecs: () => void;
}

export const QualityAndMaterials: React.FC<QualityAndMaterialsProps> = ({ onRequestMaterialSpecs }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const qualityStages = [
    {
      title: "Foundation & Substructure",
      icon: Building2,
      specs: "Borehole soil testing, isolated/raft footings, anti-termite chemical soil barrier with 5-year guarantee, M25/M30 grade concrete.",
      checks: ["Soil bearing capacity test", "Plinth beam water-curing logs", "Bituminous coating on subterranean surfaces"]
    },
    {
      title: "Concrete & Reinforcement",
      icon: FlaskConical,
      specs: "Primary Fe550D TMT rebar (Tata Tiscon / Jindal), Ultratech 53-grade OPC cement, calibrated water-cement ratio.",
      checks: ["Slump cone consistency tests on-site", "7-day & 28-day cube compression lab tests", "Concrete cover blocks inspection"]
    },
    {
      title: "Masonry & Acoustic Walls",
      icon: ShieldCheck,
      specs: "Wienerberger Porotherm thermally insulated clay hollow blocks or Class-A 6\" solid concrete blocks with polymer bonding mortar.",
      checks: ["Laser plumb line verticality checks", "Wire-mesh reinforcement at column-brick joints to prevent cracks", "Lintel beam casting over all openings"]
    },
    {
      title: "3-Layer Waterproofing",
      icon: Droplets,
      specs: "Elastomeric acrylic/polyurethane polymer membrane with non-woven geotextile scrim across terrace, balconies, and sunken wet zones.",
      checks: ["72-hour ponding flood test with colored water", "Chamfered angle fillets at all wall-to-floor junctions", "Anti-efflorescence primer coating"]
    },
    {
      title: "Concealed MEP Systems",
      icon: Zap,
      specs: "Astral / Supreme CPVC SDR-11 plumbing lines, Polycab Fire-Resistant FRLS copper cables, Schneider / Legrand modular fittings.",
      checks: ["Hydrostatic pressure testing at 10 bar for 24 hours", "Megger insulation resistance testing", "Acoustically insulated drainage stacks"]
    },
    {
      title: "Finishing & Precision Tiling",
      icon: Sparkles,
      specs: "Italian marble or large-format GVT vitrified tiles laid with epoxy grout; Asian Paints Royale / Oikos breathable Italian stucco plasters.",
      checks: ["Laser level verification for zero lippage", "Hollow-tile percussion hammer acoustic audit", "Oblique raking light paint smoothness test"]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F4F0] border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
              07 · Material Sourcing &amp; Quality Control
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance]">
              Strong Foundations. Quality Materials. Better Construction.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555A63] max-w-md leading-relaxed">
            A house is only as permanent as what lies beneath the plaster. We enforce laboratory-verified materials and strict stage-gate audits at every phase.
          </p>
        </div>

        {/* Quality Stages Navigation & Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Stage Selector (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {qualityStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isCurrent = idx === activeCategory;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`p-4 rounded-sm border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isCurrent
                      ? 'bg-[#121417] text-white border-[#121417] shadow-sm'
                      : 'bg-white text-[#121417] border-[#E2E4E8] hover:border-[#DFD8CC]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xs ${isCurrent ? 'bg-white/10 text-[#B38E5D]' : 'bg-[#F5F4F0] text-[#121417]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className={`text-[11px] font-mono block ${isCurrent ? 'text-[#DFD8CC]' : 'text-[#71767E]'}`}>
                        Stage 0{idx + 1}
                      </span>
                      <h4 className="text-sm font-bold font-display">{stage.title}</h4>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isCurrent ? 'text-[#B38E5D] translate-x-1' : 'text-[#71767E]'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Stage Detail & Testing Protocols (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E2E4E8] rounded-sm p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-[#B38E5D] mb-3 pb-3 border-b border-[#F5F4F0]">
              <span>Quality Control Protocol · Stage 0{activeCategory + 1}</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs font-semibold">
                Lab Tested &amp; Certified
              </span>
            </div>

            <h3 className="text-2xl font-bold font-display text-[#121417] mb-3">
              {qualityStages[activeCategory].title}
            </h3>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#121417] mb-2">
                Engineered Material Specification
              </h4>
              <p className="text-sm text-[#555A63] leading-relaxed bg-[#F5F4F0] p-4 rounded-xs border border-[#E2E4E8]">
                {qualityStages[activeCategory].specs}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#121417] mb-3">
                Mandatory On-Site Quality Checks Before Approval
              </h4>
              <div className="space-y-2.5">
                {qualityStages[activeCategory].checks.map((chk, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-[#121417] p-3 border border-[#E2E4E8] rounded-xs bg-[#FAFAF8]">
                    <Check className="w-4 h-4 text-[#B38E5D] shrink-0" />
                    <span className="font-medium">{chk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E4E8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#71767E]">
                All reports archived in homeowner portal.
              </span>
              <button
                onClick={onRequestMaterialSpecs}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] rounded-sm transition-colors cursor-pointer"
              >
                Request Material Brands Checklist
              </button>
            </div>
          </div>

        </div>

        {/* Tier-1 Brand Partnership Strip */}
        <div className="p-6 bg-white border border-[#E2E4E8] rounded-sm">
          <div className="text-xs font-mono uppercase tracking-widest text-[#71767E] text-center mb-4">
            Institutional Procurement Partnerships with Certified Industry Leaders
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold font-display text-[#121417] uppercase tracking-wider opacity-80">
            <span>Tata Tiscon Rebar</span>
            <span aria-hidden="true" className="text-[#DFD8CC]">·</span>
            <span>Ultratech Cement</span>
            <span aria-hidden="true" className="text-[#DFD8CC]">·</span>
            <span>Saint-Gobain Glass</span>
            <span aria-hidden="true" className="text-[#DFD8CC]">·</span>
            <span>Kohler &amp; Grohe</span>
            <span aria-hidden="true" className="text-[#DFD8CC]">·</span>
            <span>Schneider Electric</span>
            <span aria-hidden="true" className="text-[#DFD8CC]">·</span>
            <span>Asian Paints Royale</span>
          </div>
        </div>

      </div>
    </section>
  );
};
