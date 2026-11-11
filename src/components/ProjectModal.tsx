import React from 'react';
import { X, MapPin, Maximize2, Shield, Clock, Check, ArrowRight, Building, Layers } from 'lucide-react';
import { ProjectCaseStudy } from '../types/index.ts';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onEnquireSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onEnquireSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-sm border border-[#E2E4E8] max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white bg-black/60 hover:bg-black rounded-full cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Photo Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#121417]">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/90 via-[#121417]/40 to-transparent pointer-events-none" />

          {/* Overlay details */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-mono text-[#DFD8CC] uppercase tracking-wider mb-1">
              <span className="bg-[#B38E5D] text-[#121417] px-2 py-0.5 font-bold rounded-xs">
                {project.categoryLabel}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B38E5D]" />
                {project.location}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold font-display text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F5F4F0] border border-[#E2E4E8] rounded-xs text-xs">
            <div>
              <span className="text-[#71767E] block text-[11px] uppercase tracking-wider">Built-Up Area</span>
              <span className="font-bold font-display text-[#121417] text-sm tabular-nums">{project.builtUpArea}</span>
            </div>
            <div>
              <span className="text-[#71767E] block text-[11px] uppercase tracking-wider">Plot Dimensions</span>
              <span className="font-bold text-[#121417] text-sm">{project.plotSize}</span>
            </div>
            <div>
              <span className="text-[#71767E] block text-[11px] uppercase tracking-wider">Floors</span>
              <span className="font-bold text-[#121417] text-sm">{project.floors}</span>
            </div>
            <div>
              <span className="text-[#71767E] block text-[11px] uppercase tracking-wider">Turnaround Time</span>
              <span className="font-bold text-[#121417] text-sm font-mono">{project.timeline}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#121417] mb-2">
              Architectural Concept &amp; Design Brief
            </h4>
            <p className="text-sm text-[#555A63] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Structural Highlights & Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 border border-[#E2E4E8] rounded-xs bg-[#FAFAF8]">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#121417] mb-3 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#B38E5D]" />
                <span>Structural &amp; Civil Innovations</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#555A63]">
                {project.structuralHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B38E5D] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 border border-[#E2E4E8] rounded-xs bg-[#FAFAF8]">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#121417] mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#B38E5D]" />
                <span>Verified Materials &amp; Finishes</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#555A63]">
                {project.materialsUsed.map((mat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#B38E5D] font-mono font-bold">›</span>
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Features Checklist */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#121417] mb-3">
              Included Spatial Amenities
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {project.features.map((feat, i) => (
                <div key={i} className="p-2.5 bg-[#F5F4F0] border border-[#E2E4E8] rounded-xs font-medium text-[#121417]">
                  {feat}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer CTAs */}
        <div className="p-6 bg-[#FAFAF8] border-t border-[#E2E4E8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#71767E]">
            Status: <strong className="text-[#121417]">{project.status}</strong> · Style: <strong className="text-[#121417]">{project.architecturalStyle}</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#121417] bg-white border border-[#E2E4E8] hover:bg-[#F5F4F0] rounded-sm cursor-pointer"
            >
              Back to Gallery
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquireSimilar(project.title);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] rounded-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Build A Similar Home</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B38E5D]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
