import React, { useState } from 'react';
import { ArrowRight, Check, Clock, Home, Sparkles, Building, Layers, Wrench, Shield, Compass } from 'lucide-react';
import { SERVICES } from '../data/constructionData.ts';
import { ConstructionService } from '../types/index.ts';

interface ServicesSectionProps {
  onSelectService: (service: ConstructionService) => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestQuoteForService,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const categories = [
    { id: 'all', label: 'All 8 Services' },
    { id: 'new-build', label: 'New Construction' },
    { id: 'architecture', label: 'Design & Engineering' },
    { id: 'finishing', label: 'Renovation & Finishes' },
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (activeTab === 'new-build') {
      return ['independent-house', 'custom-home', 'turnkey-home'].includes(service.id);
    }
    if (activeTab === 'architecture') {
      return ['architectural-design', 'structural-engineering'].includes(service.id);
    }
    if (activeTab === 'finishing') {
      return ['renovation-remodeling', 'interior-finishing', 'building-extension'].includes(service.id);
    }
    return true;
  });

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
            02 · Comprehensive Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance] mb-4">
            Complete Home Construction Solutions Under One Roof.
          </h2>
          <p className="text-sm sm:text-base text-[#555A63] leading-relaxed">
            Eliminate fragmented contractors. From greenfield plot surveys and structural engineering to turnkey handover and bespoke joinery, every discipline is synchronized under our licensed project oversight.
          </p>
        </div>

        {/* Filter Navigation (Interactive button segmented tabs) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#EFECE6] border border-[#DFD8CC] rounded-sm max-w-xl mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === cat.id
                  ? 'bg-[#121417] text-white shadow-xs'
                  : 'text-[#555A63] hover:text-[#121417]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Architectural Layout: Featured Large Spotlight Panel + Interactive Catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Quick Navigation List of Services (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {filteredServices.map((service) => {
              const isCurrent = service.id === selectedService.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-5 rounded-sm border transition-all cursor-pointer text-left ${
                    isCurrent
                      ? 'bg-white border-[#121417] shadow-sm'
                      : 'bg-[#F5F4F0] border-[#E2E4E8] hover:border-[#DFD8CC] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#B38E5D]">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-mono text-[#71767E] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B38E5D]" />
                      <span>{service.timeline}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#121417] font-display">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#555A63] line-clamp-2 mt-1">
                    {service.tagline}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-[#F5F4F0]">
                    <span className="text-[11px] text-[#71767E] italic">{service.idealFor}</span>
                    <span className={`font-semibold flex items-center gap-1 text-[11px] uppercase tracking-wider ${
                      isCurrent ? 'text-[#121417]' : 'text-[#71767E]'
                    }`}>
                      View Details <ArrowRight className="w-3 h-3 text-[#B38E5D]" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Focus on Selected Service (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E2E4E8] rounded-sm overflow-hidden sticky top-28 shadow-sm">
              
              {/* Media Header */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#EFECE6]">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/85 via-[#121417]/30 to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 bg-[#121417]/90 text-white text-[11px] font-mono uppercase px-3 py-1 tracking-widest border border-white/10">
                  Service {selectedService.number} of 08
                </div>

                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DFD8CC] mt-1 font-medium">
                    {selectedService.tagline}
                  </p>
                </div>
              </div>

              {/* Service Deep Content */}
              <div className="p-6 sm:p-8">
                
                <p className="text-sm sm:text-base text-[#555A63] leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                {/* Key Benefits Grid */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#121417] mb-3">
                    Key Architectural &amp; Engineering Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 bg-[#F5F4F0] rounded-xs border border-[#E2E4E8]">
                        <Check className="w-3.5 h-3.5 text-[#B38E5D] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#121417] font-medium leading-tight">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="mb-8 pt-4 border-t border-[#E2E4E8]">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#121417] mb-3">
                    Included Deliverables &amp; Artifacts
                  </h4>
                  <ul className="space-y-2 text-xs text-[#555A63]">
                    {selectedService.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#B38E5D] font-mono font-bold">›</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E2E4E8]">
                  <div className="text-xs text-[#71767E]">
                    <span className="font-semibold text-[#121417]">Estimated Timeline: </span>
                    <span className="font-mono tabular-nums">{selectedService.timeline}</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => onSelectService(selectedService)}
                      className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#121417] bg-white border border-[#121417] hover:bg-[#F5F4F0] rounded-sm transition-colors cursor-pointer"
                    >
                      Technical Specs
                    </button>
                    
                    <button
                      onClick={() => onRequestQuoteForService(selectedService.title)}
                      className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Get Service Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B38E5D]" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 3-Pillar Turnkey Differentiator Callout Banner */}
        <div className="bg-[#121417] text-white p-8 sm:p-10 rounded-sm border border-[#2C3036] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-[11px] font-mono text-[#B38E5D] uppercase tracking-wider mb-2">
              Bespoke Architectural Studio
            </div>
            <h4 className="text-lg font-bold font-display text-white mb-2">
              Zero Template Blueprints
            </h4>
            <p className="text-xs text-[#DFD8CC] leading-relaxed">
              Every floor plan is engineered around your lifestyle, sun path calculations, and plot boundaries.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-mono text-[#B38E5D] uppercase tracking-wider mb-2">
              Direct Manufacturer Sourcing
            </div>
            <h4 className="text-lg font-bold font-display text-white mb-2">
              Wholesale Material Integrity
            </h4>
            <p className="text-xs text-[#DFD8CC] leading-relaxed">
              Direct institutional contracts with Tata Tiscon, Ultratech, Grohe, and Saint-Gobain ensure 100% genuine Grade-1 materials.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-mono text-[#B38E5D] uppercase tracking-wider mb-2">
              Contractual Assurance
            </div>
            <h4 className="text-lg font-bold font-display text-white mb-2">
              Milestone Escrow Billing
            </h4>
            <p className="text-xs text-[#DFD8CC] leading-relaxed">
              You only pay as each physical stage is cast, cured, tested, and signed off by your designated site engineer.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
