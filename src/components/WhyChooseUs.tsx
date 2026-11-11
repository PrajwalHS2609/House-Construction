import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, FileSpreadsheet, Eye, Clock, Award, Hammer, Headphones } from 'lucide-react';
import { IMAGES } from '../data/constructionData.ts';

interface WhyChooseUsProps {
  onOpenEstimator: () => void;
  onRequestConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEstimator, onRequestConsultation }) => {
  const advantages = [
    {
      icon: Hammer,
      title: "Experienced Construction Engineers",
      desc: "Licensed civil engineers with over 15 years of residential structural expertise on-site, not just in offices."
    },
    {
      icon: ShieldCheck,
      title: "Certified Materials & Workmanship",
      desc: "Fe550D TMT rebar, 53-grade OPC cement, and slump-tested RMC concrete backed by 28-day compression test certificates."
    },
    {
      icon: Award,
      title: "100% Customized Architectural Designs",
      desc: "Every blueprint is custom-sculpted to optimize solar orientation, cross-ventilation, and lifestyle privacy."
    },
    {
      icon: Eye,
      title: "Transparent Digital Project Logs",
      desc: "Access daily photographic logs, material delivery invoices, and weekly drone/CCTV updates from your phone."
    },
    {
      icon: FileSpreadsheet,
      title: "Guaranteed Itemized BOQ Costing",
      desc: "Transparent Bill of Quantities with locked unit rates and zero ambiguous lump sums to eliminate mid-project surprises."
    },
    {
      icon: Clock,
      title: "Milestone-Driven Timely Coordination",
      desc: "Gantt-chart scheduling tied to milestone payments ensures our 99.4% on-time residential handover track record."
    },
    {
      icon: ShieldCheck,
      title: "10-Year Structural Stability Warranty",
      desc: "Comprehensive post-handover guarantee protecting your foundations, columns, beams, and waterproofing integrity."
    },
    {
      icon: Headphones,
      title: "Dedicated Single-Point Client Manager",
      desc: "One dedicated project director from groundbreaking to key handover ensures rapid answers without contractor blame games."
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F5F4F0] border-t border-[#E2E4E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
              03 · Structural &amp; Operational Integrity
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance]">
              Built on Quality. Driven by Trust. Designed for Life.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555A63] max-w-md leading-relaxed">
            We don’t treat homebuilding as a transactional contract. We treat it as the construction of your family's generational sanctuary.
          </p>
        </div>

        {/* Asymmetric Content + High-Impact Construction Craft Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Construction Structural Craft Photography (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-sm overflow-hidden border border-[#DFD8CC] shadow-md bg-white flex-1 min-h-[460px]">
              <img
                src={IMAGES.construction}
                alt="Reinforced structural concrete framing and masonry precision at a Valence residential site"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[11px] font-mono text-[#DFD8CC] uppercase tracking-wider mb-1">
                  Active Site Inspection · Sector 4
                </div>
                <h4 className="text-lg font-bold font-display text-white">
                  Laser Alignment &amp; Seismic Rebar Tying
                </h4>
                <p className="text-xs text-[#EFECE6]/80 mt-1">
                  Every beam cage is inspected by licensed civil engineers prior to concrete pour approval.
                </p>
              </div>
            </div>

            {/* Quality Standard Bar */}
            <div className="mt-4 p-4 bg-white border border-[#E2E4E8] rounded-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#121417] block">IS Code &amp; RERA Compliant</span>
                <span className="text-[11px] text-[#71767E]">All structures engineered to withstand seismic zone parameters</span>
              </div>
              <button
                onClick={onRequestConsultation}
                className="text-xs font-semibold text-[#121417] hover:text-[#B38E5D] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Audit Sample BOQ</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 8 Competitive Advantages Bento (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div
                  key={index}
                  className="p-5 bg-white border border-[#E2E4E8] hover:border-[#121417] transition-all rounded-sm flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-8 h-8 rounded-xs bg-[#F5F4F0] flex items-center justify-center text-[#121417] group-hover:bg-[#121417] group-hover:text-white transition-colors mb-3">
                      <Icon className="w-4 h-4 text-[#B38E5D] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-sm font-bold text-[#121417] font-display mb-1.5">
                      {adv.title}
                    </h3>
                    <p className="text-xs text-[#555A63] leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#F5F4F0] flex items-center text-[11px] font-mono text-[#71767E]">
                    <span>Advantage 0{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA Bar */}
        <div className="p-6 bg-white border border-[#E2E4E8] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#B38E5D] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-[#121417]">Ready to compare with traditional contractors?</h4>
              <p className="text-xs text-[#71767E]">Get a complimentary structural feasibility review of your land and drawings.</p>
            </div>
          </div>
          <button
            onClick={onOpenEstimator}
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Calculate Your Construction Cost
          </button>
        </div>

      </div>
    </section>
  );
};
