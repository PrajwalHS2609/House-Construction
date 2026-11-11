import React, { useState } from 'react';
import { X, Calculator, ArrowRight, Check, Send } from 'lucide-react';
import { PACKAGES } from '../data/constructionData.ts';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitLead: (data: { name: string; phone: string; area: number; packageId: string; total: number }) => void;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose, onSubmitLead }) => {
  const [area, setArea] = useState<number>(3200);
  const [selectedTier, setSelectedTier] = useState<string>('premium');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const activePkg = PACKAGES.find((p) => p.id === selectedTier) || PACKAGES[1];
  const estimatedCost = area * activePkg.pricePerSqFt;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    onSubmitLead({
      name,
      phone,
      area,
      packageId: selectedTier,
      total: estimatedCost,
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-sm border border-[#E2E4E8] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#71767E] hover:text-[#121417] rounded-sm cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#B38E5D] uppercase tracking-wider mb-1">
          <Calculator className="w-4 h-4" />
          <span>Quick Construction Estimate</span>
        </div>

        <h3 className="text-2xl font-bold font-display text-[#121417] mb-2">
          Calculate Your Home Investment
        </h3>

        <p className="text-xs text-[#555A63] mb-6">
          Instant calculation based on verified per-square-foot baseline rates and brand specifications.
        </p>

        {submitted ? (
          <div className="text-center py-8 text-emerald-700 space-y-2">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-[#121417]">Estimate Sent to Project Desk</h4>
            <p className="text-xs text-[#71767E]">Our structural team will call you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Built up area input */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <label className="font-medium text-[#121417]">Built-Up Area</label>
                <span className="font-mono font-bold text-[#121417] tabular-nums">{area.toLocaleString()} sq.ft</span>
              </div>
              <input
                type="range"
                min="1200"
                max="8000"
                step="100"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-[#E2E4E8] rounded-lg appearance-none cursor-pointer accent-[#121417]"
              />
            </div>

            {/* Package selection */}
            <div>
              <label className="block text-xs font-medium text-[#121417] mb-1.5">
                Specification Package
              </label>
              <div className="grid grid-cols-3 gap-2">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedTier(pkg.id)}
                    className={`p-2.5 rounded-xs border text-center transition-colors cursor-pointer text-xs ${
                      selectedTier === pkg.id
                        ? 'bg-[#121417] text-white font-bold border-[#121417]'
                        : 'bg-[#F5F4F0] text-[#555A63] border-[#E2E4E8] hover:bg-white'
                    }`}
                  >
                    <span className="capitalize block">{pkg.tier}</span>
                    <span className="font-mono text-[11px]">${pkg.pricePerSqFt}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Estimate output box */}
            <div className="p-4 bg-[#F5F4F0] border border-[#E2E4E8] rounded-xs text-center">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#71767E] block mb-1">
                Estimated Project Turnkey Value
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-display text-[#121417] tabular-nums">
                ${estimatedCost.toLocaleString()}
              </span>
              <span className="text-[11px] text-[#71767E] block mt-0.5">
                Includes Civil Structure, MEP, and {activePkg.name} Specifications
              </span>
            </div>

            {/* Homeowner info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-[#121417] mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. David Miller"
                  className="w-full px-3 py-2 text-xs bg-[#FAFAF8] border border-[#E2E4E8] rounded-xs focus:outline-none focus:border-[#121417]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#121417] mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2 text-xs bg-[#FAFAF8] border border-[#E2E4E8] rounded-xs focus:outline-none focus:border-[#121417]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Receive Detailed Itemized BOQ</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B38E5D]" />
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
