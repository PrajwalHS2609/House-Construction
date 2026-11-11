import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, MessageSquare, Phone } from 'lucide-react';
import { FAQS, WHATSAPP_NUMBER, PHONE_NUMBER, PHONE_CLEAN } from '../data/constructionData.ts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Services', 'Pricing', 'Design', 'Engineering', 'Timeline', 'Materials', 'Contracts'];

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5F4F0] border-t border-[#E2E4E8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
            11 · Clarity &amp; Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#555A63] leading-relaxed">
            Direct, practical answers regarding home building contracts, structural engineering, timelines, and material sourcing.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#121417] text-white shadow-xs'
                  : 'bg-white text-[#555A63] border border-[#E2E4E8] hover:text-[#121417]'
              }`}
            >
              {cat === 'all' ? 'All Questions' : cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#E2E4E8] rounded-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAFAF8] transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold font-display text-[#121417] leading-snug">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-xs bg-[#F5F4F0] text-[#121417] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-[#B38E5D]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#555A63] leading-relaxed border-t border-[#F5F4F0]">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[11px] font-mono text-[#B38E5D]">
                      Category: {faq.category} · Verified Valence Policy
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 p-6 bg-white border border-[#E2E4E8] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-[#121417]">Have a specific query about your plot or municipal bylaws?</h4>
            <p className="text-xs text-[#71767E] mt-0.5">Speak directly with our senior structural consultants.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_CLEAN}`}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#121417] border border-[#E2E4E8] hover:bg-[#F5F4F0] rounded-sm flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#B38E5D]" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Valence%20Residential,%20I'd%20like%20to%20ask%20a%20question%20about%20my%20plot.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#2C3E35] hover:bg-[#1F2E27] rounded-sm flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
