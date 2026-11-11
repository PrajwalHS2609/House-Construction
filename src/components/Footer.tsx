import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  PHONE_NUMBER,
  PHONE_CLEAN,
  EMAIL_ADDRESS,
  OFFICE_ADDRESS,
  SERVICES,
  SERVICE_AREAS,
} from '../data/constructionData.ts';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEstimator }) => {
  return (
    <footer className="bg-[#121417] text-[#FAFAF8] border-t border-[#2C3036] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2C3036]">
          
          {/* Brand & Introduction (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-6 bg-[#B38E5D]" />
              <span className="text-xl font-bold tracking-tight text-white font-display">
                VALENCE <span className="font-light text-[#DFD8CC]">RESIDENTIAL</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#DFD8CC] leading-relaxed max-w-sm">
              Architectural planning, structural engineering, and turnkey residential house construction. Creating enduring, generational homes through uncompromised craftsmanship and transparent execution.
            </p>

            <div className="pt-2 text-xs text-[#71767E] space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B38E5D]" />
                <span className="text-[#DFD8CC]">10-Year Post-Handover Structural Warranty</span>
              </div>
              <div className="text-[11px] font-mono text-[#71767E]">
                Licensed Civil Contractors · RERA &amp; Municipal Bylaw Compliant
              </div>
            </div>
          </div>

          {/* Construction Services Links (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#B38E5D] mb-4">
              Construction Services
            </h4>
            <ul className="space-y-2 text-xs text-[#DFD8CC]">
              {SERVICES.slice(0, 6).map((serv) => (
                <li key={serv.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {serv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation & Portfolio (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#B38E5D] mb-4">
              Explore &amp; Plan
            </h4>
            <ul className="space-y-2 text-xs text-[#DFD8CC]">
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors cursor-pointer">
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-white transition-colors cursor-pointer">
                  Construction Process
                </button>
              </li>
              <li>
                <button onClick={onOpenEstimator} className="hover:text-white transition-colors cursor-pointer text-[#B38E5D] font-semibold">
                  Cost Estimator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white transition-colors cursor-pointer">
                  Pricing Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('why-us')} className="hover:text-white transition-colors cursor-pointer">
                  Why Valence
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Frequently Asked
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Studio (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs text-[#DFD8CC]">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#B38E5D] mb-4">
              Studio &amp; Inquiries
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#B38E5D] shrink-0 mt-0.5" />
              <span>{OFFICE_ADDRESS}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#B38E5D] shrink-0" />
              <a href={`tel:${PHONE_CLEAN}`} className="hover:text-white font-mono tabular-nums">
                {PHONE_NUMBER}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#B38E5D] shrink-0" />
              <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white">
                {EMAIL_ADDRESS}
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#121417] bg-[#B38E5D] hover:bg-[#C5A06F] rounded-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book Site Audit</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#121417]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar (Quiet & Clean, No Telemetry Clutter) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71767E]">
          <div>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms &amp; Construction Warranties
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              RERA Disclosures
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
