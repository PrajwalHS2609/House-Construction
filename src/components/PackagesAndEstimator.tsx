import React, { useState, useId } from 'react';
import { ArrowRight, Check, Calculator, Download, Sparkles, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';
import { PACKAGES } from '../data/constructionData.ts';
import { ConstructionPackage } from '../types/index.ts';

interface PackagesAndEstimatorProps {
  onSelectPackageForEnquiry: (packageId: string, estimatedTotal?: number, area?: number) => void;
}

export const PackagesAndEstimator: React.FC<PackagesAndEstimatorProps> = ({
  onSelectPackageForEnquiry,
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('premium');
  const [builtUpArea, setBuiltUpArea] = useState<number>(3500);
  const [numFloors, setNumFloors] = useState<number>(2); // 1 = G, 2 = G+1, 3 = G+2, 4 = G+3
  const [soilCondition, setSoilCondition] = useState<'standard' | 'clay_pile'>('standard');
  const areaRangeId = useId();
  
  // Optional Add-ons
  const [addons, setAddons] = useState({
    solarPv: true, // + $8,500
    smartHome: true, // + $6,500
    terracePergola: false, // + $4,500
    interiorWoodwork: true, // + $14,000
    plungePool: false, // + $18,000
  });

  const activePackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];

  // Calculations
  const baseRate = activePackage.pricePerSqFt;
  const soilSurcharge = soilCondition === 'clay_pile' ? 85 : 0;
  const floorFactor = numFloors > 2 ? (numFloors - 2) * 45 : 0; // slight multi-story pump & staging charge
  const effectiveRate = baseRate + soilSurcharge + floorFactor;
  
  const constructionBaseTotal = builtUpArea * effectiveRate;
  
  let addonTotal = 0;
  if (addons.solarPv) addonTotal += 8500;
  if (addons.smartHome) addonTotal += 6500;
  if (addons.terracePergola) addonTotal += 4500;
  if (addons.interiorWoodwork) addonTotal += 14000;
  if (addons.plungePool) addonTotal += 18000;

  const grandTotal = constructionBaseTotal + addonTotal;

  // Breakdown proportions
  const civilCost = Math.round(constructionBaseTotal * 0.52);
  const finishingCost = Math.round(constructionBaseTotal * 0.38);
  const designAndPermits = Math.round(constructionBaseTotal * 0.10);

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleApplyEstimate = () => {
    onSelectPackageForEnquiry(selectedPackageId, grandTotal, builtUpArea);
  };

  return (
    <section id="packages" className="py-20 lg:py-28 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
              08 · Transparent Pricing &amp; Custom Calculator
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance]">
              Construction Packages Designed Around Your Requirements.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555A63] max-w-md leading-relaxed">
            Transparent per-square-foot baseline rates with defined brand specifications and itemized exclusions. No vague hidden costs.
          </p>
        </div>

        {/* 3 Packages Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {PACKAGES.map((pkg) => {
            const isFeatured = pkg.tier === 'premium';
            const isSelected = pkg.id === selectedPackageId;

            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id)}
                className={`rounded-sm border transition-all duration-300 flex flex-col justify-between cursor-pointer p-6 sm:p-8 relative ${
                  isSelected
                    ? 'border-[#121417] bg-white ring-2 ring-[#121417] shadow-md'
                    : 'border-[#E2E4E8] bg-[#F5F4F0] hover:bg-white hover:border-[#DFD8CC]'
                }`}
              >
                {/* Badge if present */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#121417] text-[#B38E5D] text-[11px] font-mono uppercase font-bold tracking-widest px-3 py-1 rounded-xs border border-[#2C3036]">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono uppercase text-[#71767E] tracking-wider">
                      Tier: {pkg.tier}
                    </span>
                    {isSelected && (
                      <span className="text-xs font-bold text-[#121417] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B38E5D]" /> Active in Calculator
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#121417] mb-2">
                    {pkg.name}
                  </h3>

                  <div className="flex items-baseline gap-1.5 my-4 pb-4 border-b border-[#E2E4E8]">
                    <span className="text-3xl sm:text-4xl font-bold font-display text-[#121417] tabular-nums">
                      {pkg.currency}{pkg.pricePerSqFt.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#71767E] uppercase tracking-wider font-mono">
                      / sq.ft built-up
                    </span>
                  </div>

                  <p className="text-xs text-[#555A63] leading-relaxed mb-6">
                    {pkg.summary}
                  </p>

                  {/* Key Specs Breakdown */}
                  <div className="space-y-3 pt-2 mb-6">
                    <div className="text-xs">
                      <span className="text-[#71767E] block text-[11px] uppercase tracking-wider">Structural Steel</span>
                      <span className="font-medium text-[#121417]">{pkg.specifications.steel}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-[#71767E] block text-[11px] uppercase tracking-wider">Cement Brand</span>
                      <span className="font-medium text-[#121417]">{pkg.specifications.cement}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-[#71767E] block text-[11px] uppercase tracking-wider">Flooring &amp; Surfaces</span>
                      <span className="font-medium text-[#121417]">{pkg.specifications.flooring}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-[#71767E] block text-[11px] uppercase tracking-wider">Fixtures &amp; Windows</span>
                      <span className="font-medium text-[#121417]">{pkg.specifications.doorsWindows}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackageId(pkg.id);
                      onSelectPackageForEnquiry(pkg.id);
                    }}
                    className={`w-full py-3 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-[#121417] text-white hover:bg-[#2C3036]'
                        : 'bg-white text-[#121417] border border-[#121417] hover:bg-[#121417] hover:text-white'
                    }`}
                  >
                    <span>Enquire This Package</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B38E5D]" />
                  </button>
                  <p className="text-[10px] text-center text-[#71767E] mt-2 italic">
                    Final estimate depends on soil, site conditions &amp; municipal bylaws.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Construction Cost Estimator */}
        <div className="bg-[#121417] text-white rounded-sm p-6 sm:p-10 border border-[#2C3036] shadow-xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#2C3036]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#B38E5D] uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" />
                <span>Interactive Cost Simulation Engine</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Instant Residential Construction Estimator
              </h3>
            </div>
            <div className="text-xs text-[#DFD8CC] max-w-xs">
              Simulate your project investment in real time based on your plot area and finish preferences.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Input Controls (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Built Up Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={areaRangeId} className="text-xs font-bold uppercase tracking-wider text-white">
                    Expected Built-Up Area
                  </label>
                  <span className="text-lg font-bold font-display text-[#B38E5D] tabular-nums font-mono">
                    {builtUpArea.toLocaleString()} sq.ft
                  </span>
                </div>
                <input
                  id={areaRangeId}
                  type="range"
                  min="1200"
                  max="10000"
                  step="100"
                  value={builtUpArea}
                  onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                  className="w-full h-2 bg-[#2C3036] rounded-lg appearance-none cursor-pointer accent-[#B38E5D]"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#71767E] mt-1">
                  <span>1,200 sq.ft (Compact)</span>
                  <span>4,500 sq.ft (Family Villa)</span>
                  <span>10,000 sq.ft (Estate)</span>
                </div>
              </div>

              {/* Number of Floors */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                  Building Height / Number of Floors
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { val: 1, label: 'Ground Floor Only' },
                    { val: 2, label: 'G + 1 Floor' },
                    { val: 3, label: 'G + 2 Floors' },
                    { val: 4, label: 'G + 3 Floors' },
                  ].map((fl) => (
                    <button
                      key={fl.val}
                      onClick={() => setNumFloors(fl.val)}
                      className={`py-2 px-2 text-center text-xs font-medium rounded-xs border transition-colors cursor-pointer ${
                        numFloors === fl.val
                          ? 'bg-[#B38E5D] text-[#121417] font-bold border-[#B38E5D]'
                          : 'bg-white/5 border-[#2C3036] text-[#DFD8CC] hover:bg-white/10'
                      }`}
                    >
                      {fl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Package Tier Switcher in Estimator */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                  Selected Specification Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PACKAGES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPackageId(p.id)}
                      className={`p-2.5 text-left rounded-xs border transition-colors cursor-pointer ${
                        selectedPackageId === p.id
                          ? 'bg-white text-[#121417] font-bold border-white'
                          : 'bg-white/5 border-[#2C3036] text-[#DFD8CC] hover:bg-white/10'
                      }`}
                    >
                      <span className="text-[11px] font-mono uppercase block">{p.tier}</span>
                      <span className="text-xs font-bold">${p.pricePerSqFt}/sq.ft</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Curated Custom Add-ons */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                  Optional Architectural &amp; MEP Upgrades
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div
                    onClick={() => toggleAddon('solarPv')}
                    className={`p-2.5 rounded-xs border flex items-center justify-between cursor-pointer ${
                      addons.solarPv ? 'bg-[#2C3E35] border-[#3A5246] text-white' : 'bg-white/5 border-[#2C3036] text-[#DFD8CC]'
                    }`}
                  >
                    <span>8kW Rooftop Solar PV Micro-grid</span>
                    <span className="font-mono text-[11px]">+$8,500</span>
                  </div>

                  <div
                    onClick={() => toggleAddon('smartHome')}
                    className={`p-2.5 rounded-xs border flex items-center justify-between cursor-pointer ${
                      addons.smartHome ? 'bg-[#2C3E35] border-[#3A5246] text-white' : 'bg-white/5 border-[#2C3036] text-[#DFD8CC]'
                    }`}
                  >
                    <span>KNX Smart Home Automation</span>
                    <span className="font-mono text-[11px]">+$6,500</span>
                  </div>

                  <div
                    onClick={() => toggleAddon('interiorWoodwork')}
                    className={`p-2.5 rounded-xs border flex items-center justify-between cursor-pointer ${
                      addons.interiorWoodwork ? 'bg-[#2C3E35] border-[#3A5246] text-white' : 'bg-white/5 border-[#2C3036] text-[#DFD8CC]'
                    }`}
                  >
                    <span>Modular Teak Joinery &amp; Wardrobes</span>
                    <span className="font-mono text-[11px]">+$14,000</span>
                  </div>

                  <div
                    onClick={() => toggleAddon('plungePool')}
                    className={`p-2.5 rounded-xs border flex items-center justify-between cursor-pointer ${
                      addons.plungePool ? 'bg-[#2C3E35] border-[#3A5246] text-white' : 'bg-white/5 border-[#2C3036] text-[#DFD8CC]'
                    }`}
                  >
                    <span>Landscaped Plunge Pool</span>
                    <span className="font-mono text-[11px]">+$18,000</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Live Calculation Output Card (5 Cols) */}
            <div className="lg:col-span-5 bg-[#1A1D21] border border-[#2C3036] rounded-sm p-6 flex flex-col justify-between">
              
              <div>
                <div className="text-[11px] font-mono text-[#71767E] uppercase tracking-wider mb-1">
                  Estimated Total Investment Range
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-display text-white tabular-nums tracking-tight mb-2">
                  ${grandTotal.toLocaleString()}
                </div>
                <div className="text-xs text-[#DFD8CC] pb-4 border-b border-[#2C3036]">
                  Effective Rate: <span className="text-[#B38E5D] font-mono font-bold">${Math.round(grandTotal / builtUpArea)}/sq.ft</span> (Inclusive of upgrades)
                </div>

                {/* Phased Breakdown */}
                <div className="space-y-3 py-4 text-xs">
                  <div className="flex items-center justify-between text-[#DFD8CC]">
                    <span>Civil &amp; Structural Skeleton (52%)</span>
                    <span className="font-mono font-semibold text-white">${civilCost.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#DFD8CC]">
                    <span>Finishing, MEP &amp; Tiling (38%)</span>
                    <span className="font-mono font-semibold text-white">${finishingCost.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#DFD8CC]">
                    <span>Architectural, Soil &amp; Permits (10%)</span>
                    <span className="font-mono font-semibold text-white">${designAndPermits.toLocaleString()}</span>
                  </div>
                  {addonTotal > 0 && (
                    <div className="flex items-center justify-between text-[#B38E5D]">
                      <span>Selected Lifestyle Upgrades</span>
                      <span className="font-mono font-semibold">+${addonTotal.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                {/* Milestone Drawdown Preview */}
                <div className="p-3 bg-[#121417] rounded-xs border border-[#2C3036] text-[11px] text-[#DFD8CC] space-y-1 mb-6">
                  <div className="font-bold text-white uppercase tracking-wider">Payment Schedule:</div>
                  <div>10% Booking &amp; Soil Test · 20% Plinth Casting · 25% Roof Slabs · 25% Brickwork &amp; MEP · 15% Finishes · 5% Final Keys Handover</div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleApplyEstimate}
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#121417] bg-[#B38E5D] hover:bg-[#C5A06F] rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2 font-display"
                >
                  <span>Apply This Estimate to Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#121417]" />
                </button>
                <div className="text-[10px] text-center text-[#71767E] mt-2">
                  We generate a detailed line-item BOQ after reviewing your plot survey.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
