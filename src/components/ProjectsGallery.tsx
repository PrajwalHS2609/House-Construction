import React, { useState } from 'react';
import { ArrowRight, MapPin, Maximize2, Layers, CheckCircle, Clock } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/constructionData.ts';
import { ProjectCaseStudy } from '../types/index.ts';

interface ProjectsGalleryProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
  onRequestEstimate: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onSelectProject,
  onRequestEstimate,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'villa', label: 'Contemporary Villas' },
    { id: 'independent', label: 'Independent Houses' },
    { id: 'duplex', label: 'Duplex Residences' },
    { id: 'luxury', label: 'Signature Estates' },
    { id: 'urban', label: 'Urban Compact' },
    { id: 'renovation', label: 'Renovations' },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (selectedFilter === 'all') return true;
    return proj.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F5F4F0] border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
              05 · Verified Residential Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance]">
              Every Project Tells a Story of Quality and Craftsmanship.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555A63] max-w-md leading-relaxed">
            Explore authentic completed and active residential builds. Each home is a reflection of structural rigor, bespoke architectural planning, and transparent execution.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EFECE6] border border-[#DFD8CC] rounded-sm mb-12 overflow-x-auto">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === opt.id
                  ? 'bg-[#121417] text-white shadow-xs'
                  : 'text-[#555A63] hover:text-[#121417]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeaturedLarge = index === 0 && selectedFilter === 'all';
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group bg-white border border-[#E2E4E8] hover:border-[#121417] rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isFeaturedLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Media Container */}
                <div className={`relative overflow-hidden bg-[#EFECE6] ${
                  isFeaturedLarge ? 'h-72 sm:h-96' : 'h-64 sm:h-72'
                }`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Top Status & Year Pill-Free Unboxed Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white">
                    <span className="bg-[#121417]/80 px-2.5 py-1 backdrop-blur-xs border border-white/10">
                      {project.categoryLabel}
                    </span>
                    <span className="bg-black/60 px-2 py-0.5 backdrop-blur-xs">
                      {project.status} · {project.completionYear}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#DFD8CC] mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#B38E5D]" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className={`font-bold font-display text-white ${
                      isFeaturedLarge ? 'text-2xl sm:text-3xl' : 'text-xl'
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Architectural Metadata */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-[#555A63] line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Architectural Specs Row */}
                    <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-[#F5F4F0] mb-4">
                      <div>
                        <span className="text-[#71767E] block text-[11px] uppercase tracking-wider">Built-Up Area</span>
                        <span className="font-semibold text-[#121417] tabular-nums">{project.builtUpArea}</span>
                      </div>
                      <div>
                        <span className="text-[#71767E] block text-[11px] uppercase tracking-wider">Floors</span>
                        <span className="font-semibold text-[#121417]">{project.floors}</span>
                      </div>
                    </div>

                    <div className="text-[12px] text-[#71767E] mb-2">
                      <span className="font-medium text-[#121417]">Style: </span>
                      {project.architecturalStyle}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-[#F5F4F0] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#71767E] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B38E5D]" />
                      <span>{project.timeline}</span>
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-wider text-[#121417] group-hover:text-[#B38E5D] transition-colors flex items-center gap-1">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B38E5D] group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onRequestEstimate}
            className="px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] rounded-sm transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Plan a Similar Residence on Your Land</span>
            <ArrowRight className="w-4 h-4 text-[#B38E5D]" />
          </button>
        </div>

      </div>
    </section>
  );
};
