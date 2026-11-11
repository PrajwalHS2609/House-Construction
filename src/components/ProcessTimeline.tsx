import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, ChevronRight, FileCheck, ShieldAlert, Award } from 'lucide-react';
import { PROCESS_STEPS } from '../data/constructionData.ts';

interface ProcessTimelineProps {
  onRequestConsultation: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onRequestConsultation }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[selectedStepIndex];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
              04 · Methodical Project Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance]">
              Your Dream Home, Step by Step.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555A63] max-w-md leading-relaxed">
            No guesswork, no contractor disappearing acts. A phased, stage-gated roadmap with rigorous quality checks before every payment milestone.
          </p>
        </div>

        {/* Horizontal Desktop Stepper Navigation (1 to 6) */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = idx === selectedStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setSelectedStepIndex(idx)}
                className={`p-4 text-left border rounded-sm transition-all cursor-pointer relative ${
                  isCurrent
                    ? 'bg-[#121417] text-white border-[#121417] shadow-sm'
                    : 'bg-[#F5F4F0] text-[#121417] border-[#E2E4E8] hover:bg-white hover:border-[#DFD8CC]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-[#B38E5D]' : 'text-[#71767E]'}`}>
                    0{step.step}
                  </span>
                  <span className={`text-[11px] font-mono ${isCurrent ? 'text-[#DFD8CC]' : 'text-[#71767E]'}`}>
                    {step.duration}
                  </span>
                </div>
                <h4 className="text-xs font-bold leading-snug line-clamp-2">
                  {step.title}
                </h4>

                {isCurrent && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-[#121417] [clip-path:polygon(50%_100%,0_0,100%_0)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Step Selector Pills */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-3 mb-8 no-scrollbar">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = idx === selectedStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setSelectedStepIndex(idx)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm whitespace-nowrap shrink-0 transition-colors cursor-pointer border ${
                  isCurrent
                    ? 'bg-[#121417] text-white border-[#121417]'
                    : 'bg-[#F5F4F0] text-[#555A63] border-[#E2E4E8]'
                }`}
              >
                Step 0{step.step}: {step.title.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* Deep Step Detail Inspector Card */}
        <div className="bg-white border border-[#E2E4E8] rounded-sm p-6 sm:p-10 shadow-xs mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step Overview (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs font-mono text-[#B38E5D] mb-2 uppercase tracking-wider">
                <span>Phase 0{activeStep.step} of 06</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-[#71767E]">
                  <Clock className="w-3.5 h-3.5" />
                  {activeStep.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#121417] mb-3">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base text-[#555A63] leading-relaxed mb-6">
                {activeStep.description}
              </p>

              <div className="p-4 bg-[#F5F4F0] rounded-xs border border-[#E2E4E8]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#121417] mb-1">
                  Homeowner Value
                </div>
                <p className="text-xs text-[#555A63] leading-normal">
                  {activeStep.summary}
                </p>
              </div>
            </div>

            {/* Deliverables & QA Checks (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Tangible Deliverables */}
              <div className="p-5 bg-[#FAFAF8] border border-[#E2E4E8] rounded-xs">
                <div className="flex items-center gap-2 mb-3">
                  <FileCheck className="w-4 h-4 text-[#B38E5D]" />
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#121417]">
                    Tangible Deliverables
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs text-[#555A63]">
                  {activeStep.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B38E5D] font-mono font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Civil & QA Inspections */}
              <div className="p-5 bg-[#FAFAF8] border border-[#E2E4E8] rounded-xs">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="w-4 h-4 text-[#B38E5D]" />
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#121417]">
                    Stage-Gate Civil Checks
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs text-[#555A63]">
                  {activeStep.keyChecks.map((check, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#121417] font-mono font-bold mt-0.5">›</span>
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Stepper Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-[#E2E4E8] flex items-center justify-between">
            <button
              onClick={() => setSelectedStepIndex(Math.max(0, selectedStepIndex - 1))}
              disabled={selectedStepIndex === 0}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#E2E4E8] transition-colors ${
                selectedStepIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-[#71767E]'
                  : 'hover:bg-[#F5F4F0] text-[#121417] cursor-pointer'
              }`}
            >
              Previous Step
            </button>

            <span className="text-xs font-mono text-[#71767E]">
              {selectedStepIndex + 1} / {PROCESS_STEPS.length}
            </span>

            {selectedStepIndex < PROCESS_STEPS.length - 1 ? (
              <button
                onClick={() => setSelectedStepIndex(selectedStepIndex + 1)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] rounded-sm transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Next Step</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onRequestConsultation}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#2C3E35] hover:bg-[#1F2E27] rounded-sm transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Initiate Step 1 Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
