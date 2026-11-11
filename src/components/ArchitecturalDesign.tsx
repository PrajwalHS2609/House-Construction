import React, { useState } from 'react';
import { ArrowRight, Compass, Sun, Wind, Grid3X3, Layers, CheckCircle2, Eye } from 'lucide-react';
import { IMAGES } from '../data/constructionData.ts';

interface ArchitecturalDesignProps {
  onRequestDesignDiscussion: () => void;
}

export const ArchitecturalDesign: React.FC<ArchitecturalDesignProps> = ({ onRequestDesignDiscussion }) => {
  const [activeLayer, setActiveLayer] = useState<'layout' | 'structural' | 'solar' | 'mep'>('layout');

  const capabilities = [
    { title: "2D Working Floor Plans", desc: "Millimeter-accurate architectural plans optimized for furniture clearances and zero space waste." },
    { title: "3D Elevation & Day/Dusk Renders", desc: "High-resolution architectural renders showing exact materials, textures, and ambient lighting." },
    { title: "Vastu & Solar Microclimate Study", desc: "Scientific wind flow and sun path orientation aligning master suites and kitchens for comfort." },
    { title: "Structural Load Coordination", desc: "Synchronizing beam depths with architectural false ceilings to eliminate awkward visible beams." }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
              06 · Architectural Planning Studio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance]">
              Thoughtful Design. Intelligent Space Planning.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555A63] max-w-md leading-relaxed">
            Great construction begins with exceptional spatial intelligence. We sculpt homes that feel expansive, naturally cool, and intuitively suited to daily rituals.
          </p>
        </div>

        {/* Blueprint Studio Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-14">
          
          {/* Left Column: Interactive Architectural Blueprint Visualizer (7 Cols) */}
          <div className="lg:col-span-7 bg-[#121417] text-white rounded-sm overflow-hidden border border-[#2C3036] flex flex-col justify-between">
            
            {/* Blueprint Header Bar */}
            <div className="p-4 sm:p-5 border-b border-[#2C3036] flex flex-wrap items-center justify-between gap-3 bg-[#1A1D21]">
              <div className="flex items-center gap-2">
                <Grid3X3 className="w-4 h-4 text-[#B38E5D]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  CAD Layer Viewer: Project Residence 04
                </span>
              </div>

              {/* Layer Switcher Tabs */}
              <div className="flex items-center gap-1 bg-[#121417] p-1 rounded-xs border border-[#2C3036]">
                <button
                  onClick={() => setActiveLayer('layout')}
                  className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                    activeLayer === 'layout' ? 'bg-[#B38E5D] text-[#121417] font-bold' : 'text-[#DFD8CC] hover:text-white'
                  }`}
                >
                  Layout
                </button>
                <button
                  onClick={() => setActiveLayer('structural')}
                  className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                    activeLayer === 'structural' ? 'bg-[#B38E5D] text-[#121417] font-bold' : 'text-[#DFD8CC] hover:text-white'
                  }`}
                >
                  Structural
                </button>
                <button
                  onClick={() => setActiveLayer('solar')}
                  className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                    activeLayer === 'solar' ? 'bg-[#B38E5D] text-[#121417] font-bold' : 'text-[#DFD8CC] hover:text-white'
                  }`}
                >
                  Solar/Vastu
                </button>
                <button
                  onClick={() => setActiveLayer('mep')}
                  className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                    activeLayer === 'mep' ? 'bg-[#B38E5D] text-[#121417] font-bold' : 'text-[#DFD8CC] hover:text-white'
                  }`}
                >
                  MEP
                </button>
              </div>
            </div>

            {/* Simulated Architectural Drafting Canvas */}
            <div className="p-6 sm:p-8 relative min-h-[360px] flex items-center justify-center bg-[#0F1114]">
              {/* Technical Blueprint Grid Pattern */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#B38E5D_1px,transparent_1px),linear-gradient(to_bottom,#B38E5D_1px,transparent_1px)] bg-[size:24px_24px]" />

              {/* Dynamic Interactive Layer Rendering */}
              <div className="relative z-10 w-full max-w-lg border border-[#B38E5D]/40 bg-[#121417]/90 p-5 rounded-xs backdrop-blur-xs">
                
                {activeLayer === 'layout' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#DFD8CC] pb-2 border-b border-[#2C3036]">
                      <span className="font-mono text-[#B38E5D]">Ground Floor Space Zoning</span>
                      <span className="font-mono">Carpet Area: 2,450 sq.ft</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-4 border border-dashed border-[#DFD8CC]/30 bg-white/5 rounded-xs">
                        <span className="font-bold block text-white">Master Suite</span>
                        <span className="text-[10px] text-[#71767E]">16' x 20'</span>
                      </div>
                      <div className="p-4 border border-solid border-[#B38E5D]/60 bg-[#B38E5D]/10 rounded-xs">
                        <span className="font-bold block text-[#B38E5D]">Open Atrium</span>
                        <span className="text-[10px] text-[#DFD8CC]">Double Height</span>
                      </div>
                      <div className="p-4 border border-dashed border-[#DFD8CC]/30 bg-white/5 rounded-xs">
                        <span className="font-bold block text-white">Gourmet Kitchen</span>
                        <span className="text-[10px] text-[#71767E]">14' x 16'</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center text-xs">
                      <div className="p-3 border border-dashed border-[#DFD8CC]/30 bg-white/5 rounded-xs">
                        <span className="font-bold block text-white">Formal Living</span>
                        <span className="text-[10px] text-[#71767E]">18' x 24'</span>
                      </div>
                      <div className="p-3 border border-dashed border-[#DFD8CC]/30 bg-white/5 rounded-xs">
                        <span className="font-bold block text-white">Dining Pavilion</span>
                        <span className="text-[10px] text-[#71767E]">14' x 18'</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#DFD8CC] leading-relaxed pt-2">
                      Optimized for uninterrupted sightlines through the central landscaped courtyard to rear garden.
                    </p>
                  </div>
                )}

                {activeLayer === 'structural' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#DFD8CC] pb-2 border-b border-[#2C3036]">
                      <span className="font-mono text-[#B38E5D]">Structural Framing &amp; Column Grid</span>
                      <span className="font-mono text-emerald-400">Seismic Zone IV Safe</span>
                    </div>
                    <div className="p-4 bg-black/40 border border-emerald-500/30 rounded-xs space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[#DFD8CC]">
                        <span>RCC Primary Columns</span>
                        <span className="font-mono text-white">16 Nos. (300mm x 600mm)</span>
                      </div>
                      <div className="flex items-center justify-between text-[#DFD8CC]">
                        <span>Longest Clear Span</span>
                        <span className="font-mono text-white">11.8 Meters (Post-Tensioned)</span>
                      </div>
                      <div className="flex items-center justify-between text-[#DFD8CC]">
                        <span>Rebar Specification</span>
                        <span className="font-mono text-white">Tata Tiscon Fe550D SD</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#DFD8CC] leading-relaxed">
                      Zero internal columns in the primary entertainment pavilion, preserving architectural purity.
                    </p>
                  </div>
                )}

                {activeLayer === 'solar' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#DFD8CC] pb-2 border-b border-[#2C3036]">
                      <span className="font-mono text-[#B38E5D]">Sun Path &amp; Vastu Verification</span>
                      <span className="font-mono text-amber-400">100% Orientation Match</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-white/5 border border-amber-500/30 rounded-xs">
                        <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-1">
                          <Sun className="w-3.5 h-3.5" />
                          <span>Solar Shading</span>
                        </div>
                        <p className="text-[11px] text-[#DFD8CC]">Deep overhangs shield southern facade from harsh summer solar heat gain.</p>
                      </div>
                      <div className="p-3 bg-white/5 border border-cyan-500/30 rounded-xs">
                        <div className="flex items-center gap-1.5 text-cyan-400 font-semibold mb-1">
                          <Wind className="w-3.5 h-3.5" />
                          <span>Ventilation</span>
                        </div>
                        <p className="text-[11px] text-[#DFD8CC]">North-East to South-West breeze path through stack-effect courtyard.</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#DFD8CC]">
                      Kitchen positioned in South-East (Agni), Master in South-West (Nairutya), Entrance North-East (Ishanya).
                    </p>
                  </div>
                )}

                {activeLayer === 'mep' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#DFD8CC] pb-2 border-b border-[#2C3036]">
                      <span className="font-mono text-[#B38E5D]">Concealed MEP Infrastructure</span>
                      <span className="font-mono text-indigo-400">Smart Home Wired</span>
                    </div>
                    <div className="p-4 bg-black/40 border border-[#2C3036] rounded-xs space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[#DFD8CC]">
                        <span>Acoustic Drainage Stacks</span>
                        <span className="font-mono text-white">Astral Silencio Multi-Layer</span>
                      </div>
                      <div className="flex items-center justify-between text-[#DFD8CC]">
                        <span>Electrical Conduiting</span>
                        <span className="font-mono text-white">Fire-Retardant FRLS with Cat6A data</span>
                      </div>
                      <div className="flex items-center justify-between text-[#DFD8CC]">
                        <span>HVAC Integration</span>
                        <span className="font-mono text-white">Concealed VRV slots in drop beams</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#DFD8CC] leading-relaxed">
                      Every service shaft is acoustically isolated and accessible via hidden maintenance panels.
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="p-4 bg-[#1A1D21] border-t border-[#2C3036] flex items-center justify-between text-xs text-[#71767E]">
              <span className="font-mono">Precision CAD Architecture · Valence Studio</span>
              <span className="text-[#B38E5D] font-mono">BIM Level 2 Verified</span>
            </div>

          </div>

          {/* Right Column: Drafting Desk Photography & Capabilities (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-sm overflow-hidden border border-[#E2E4E8] bg-white mb-6">
              <img
                src={IMAGES.blueprint}
                alt="Architectural drafting desk with 2D blueprints and wooden scale model"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-4 bg-white border-t border-[#E2E4E8]">
                <div className="text-xs font-bold text-[#121417]">
                  From Physical Maquette to Digital Twin
                </div>
                <p className="text-xs text-[#71767E] mt-0.5">
                  We blend hand-drawn spatial proportion studies with BIM software and 3D virtual walkthroughs.
                </p>
              </div>
            </div>

            {/* 4 Capabilities List */}
            <div className="space-y-3 mb-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="p-3 bg-white border border-[#E2E4E8] rounded-sm">
                  <div className="text-xs font-bold text-[#121417] mb-0.5">{cap.title}</div>
                  <div className="text-[11px] text-[#555A63] leading-snug">{cap.desc}</div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button
              onClick={onRequestDesignDiscussion}
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Discuss Your Home Design With an Architect</span>
              <ArrowRight className="w-4 h-4 text-[#B38E5D]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
