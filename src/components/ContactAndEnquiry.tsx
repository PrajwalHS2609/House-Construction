import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Phone, Mail, MapPin, Clock, MessageSquare, Shield, AlertCircle } from 'lucide-react';
import { PHONE_NUMBER, PHONE_CLEAN, EMAIL_ADDRESS, OFFICE_ADDRESS, WHATSAPP_NUMBER, SERVICE_AREAS } from '../data/constructionData.ts';
import { LeadEnquiry } from '../types/index.ts';

interface ContactAndEnquiryProps {
  initialData?: Partial<LeadEnquiry>;
}

export const ContactAndEnquiry: React.FC<ContactAndEnquiryProps> = ({ initialData }) => {
  const [formData, setFormData] = useState<LeadEnquiry>({
    fullName: '',
    phone: '',
    email: '',
    projectLocation: '',
    plotSize: '',
    builtUpArea: '',
    floors: 'G + 1 Floor',
    constructionType: 'Turnkey Home Construction',
    estimatedBudget: '$250k - $500k',
    expectedStartDate: 'Within 1-3 Months',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [activeAreaIndex, setActiveAreaIndex] = useState<number>(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = 'Valid phone number required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email address required';
    if (!formData.projectLocation.trim()) newErrors.projectLocation = 'Location/City is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate realistic asynchronous lead submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedRef = `VAL-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectLocation: '',
      plotSize: '',
      builtUpArea: '',
      floors: 'G + 1 Floor',
      constructionType: 'Turnkey Home Construction',
      estimatedBudget: '$250k - $500k',
      expectedStartDate: 'Within 1-3 Months',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAF8] relative border-t border-[#E2E4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#71767E] font-semibold mb-2">
            12 · Project Consultation &amp; Site Visits
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#121417] tracking-tight [text-wrap:balance] mb-4">
            Request a Free Consultation &amp; Construction Estimate.
          </h2>
          <p className="text-sm sm:text-base text-[#555A63] leading-relaxed">
            Fill in your plot and building specifications. A Senior Architectural Project Director will review your parameters and prepare an initial feasibility review within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Comprehensive Lead Capture Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E2E4E8] rounded-sm p-6 sm:p-10 shadow-xs">
            
            {isSubmitted ? (
              <div className="text-center py-10 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[#121417] mb-2">
                  Enquiry Successfully Registered
                </h3>
                <p className="text-xs sm:text-sm text-[#555A63] max-w-md mx-auto mb-4">
                  Thank you, <strong className="text-[#121417]">{formData.fullName}</strong>. Your residential project enquiry has been logged in our project planning system.
                </p>

                <div className="bg-[#F5F4F0] border border-[#E2E4E8] p-4 rounded-xs max-w-sm mx-auto mb-6 text-left text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#71767E]">Reference ID:</span>
                    <span className="font-mono font-bold text-[#121417]">{referenceId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71767E]">Location:</span>
                    <span className="font-semibold text-[#121417]">{formData.projectLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71767E]">Type:</span>
                    <span className="text-[#121417]">{formData.constructionType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71767E]">Estimated Budget:</span>
                    <span className="font-mono text-[#B38E5D] font-bold">{formData.estimatedBudget}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Valence%20Residential,%20I%20just%20submitted%20project%20enquiry%20${referenceId}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2C3E35] hover:bg-[#1F2E27] rounded-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm via WhatsApp</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#121417] bg-white border border-[#E2E4E8] hover:bg-[#F5F4F0] rounded-sm transition-colors cursor-pointer"
                  >
                    Submit Another Project
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Information */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#121417] mb-3 pb-2 border-b border-[#F5F4F0]">
                    1. Contact &amp; Homeowner Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#121417] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Robert Vance"
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#FAFAF8] border rounded-xs text-[#121417] focus:outline-none focus:border-[#121417] ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E4E8]'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#121417] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#FAFAF8] border rounded-xs text-[#121417] focus:outline-none focus:border-[#121417] ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E4E8]'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-[#121417] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="robert.vance@example.com"
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#FAFAF8] border rounded-xs text-[#121417] focus:outline-none focus:border-[#121417] ${
                          errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E4E8]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>
                </div>

                {/* Plot & Building Parameters */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#121417] mb-3 pb-2 border-b border-[#F5F4F0]">
                    2. Plot &amp; Construction Parameters
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#121417] mb-1">
                        Project Location / City *
                      </label>
                      <input
                        type="text"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        placeholder="e.g. Highland Estates, Sector 4"
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#FAFAF8] border rounded-xs text-[#121417] focus:outline-none focus:border-[#121417] ${
                          errors.projectLocation ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E4E8]'
                        }`}
                      />
                      {errors.projectLocation && <p className="text-[11px] text-rose-500 mt-1">{errors.projectLocation}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#121417] mb-1">
                        Plot Size / Dimensions
                      </label>
                      <input
                        type="text"
                        name="plotSize"
                        value={formData.plotSize}
                        onChange={handleChange}
                        placeholder="e.g. 50x80 ft or 4,000 sq.ft"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAFAF8] border border-[#E2E4E8] rounded-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#121417] mb-1">
                        Expected Built-Up Area (sq.ft)
                      </label>
                      <input
                        type="text"
                        name="builtUpArea"
                        value={formData.builtUpArea}
                        onChange={handleChange}
                        placeholder="e.g. 3,500 sq.ft"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAFAF8] border border-[#E2E4E8] rounded-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#121417] mb-1">
                        Number of Floors
                      </label>
                      <select
                        name="floors"
                        value={formData.floors}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAFAF8] border border-[#E2E4E8] rounded-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                      >
                        <option>Ground Floor Only</option>
                        <option>G + 1 Floor</option>
                        <option>G + 2 Floors</option>
                        <option>G + 3 Floors</option>
                        <option>Basement + G + 2 Floors</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#121417] mb-1">
                        Construction Type
                      </label>
                      <select
                        name="constructionType"
                        value={formData.constructionType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAFAF8] border border-[#E2E4E8] rounded-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                      >
                        <option>Turnkey Home Construction</option>
                        <option>Independent House Construction</option>
                        <option>Custom Architectural Villa</option>
                        <option>Duplex Residence</option>
                        <option>Architectural Planning Only</option>
                        <option>Home Renovation &amp; Remodeling</option>
                        <option>Vertical Floor Extension</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#121417] mb-1">
                        Estimated Budget
                      </label>
                      <select
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAFAF8] border border-[#E2E4E8] rounded-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                      >
                        <option>$100k - $250k</option>
                        <option>$250k - $500k</option>
                        <option>$500k - $1M</option>
                        <option>$1M+ (Luxury Estate)</option>
                        <option>Seeking Guidance / Undecided</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Timeline & Project Scope */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#121417] mb-3 pb-2 border-b border-[#F5F4F0]">
                    3. Target Timeline &amp; Specific Requirements
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#121417] mb-1">
                        Expected Start Date
                      </label>
                      <select
                        name="expectedStartDate"
                        value={formData.expectedStartDate}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAFAF8] border border-[#E2E4E8] rounded-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                      >
                        <option>Immediate / Within 30 Days</option>
                        <option>Within 1-3 Months</option>
                        <option>Within 3-6 Months</option>
                        <option>Currently Plot Hunting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#121417] mb-1">
                        Message / Architectural Requirements
                      </label>
                      <textarea
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your family requirements (e.g. courtyard, solar setup, home elevator, Vastu orientation, special finishing preferences)..."
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAFAF8] border border-[#E2E4E8] rounded-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#121417] hover:bg-[#2C3036] active:bg-black rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Validating Plot Parameters...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#B38E5D]" />
                        <span>Submit Construction Enquiry</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#71767E] mt-3">
                    <Shield className="w-3.5 h-3.5 text-[#B38E5D]" />
                    <span>Your plot details remain strictly confidential. No spam, guaranteed.</span>
                  </div>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Office Credentials, Interactive Service Areas, & WhatsApp Direct (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-white border border-[#E2E4E8] rounded-sm p-6 sm:p-7 shadow-xs">
              <h3 className="text-lg font-bold font-display text-[#121417] mb-4">
                Headquarters &amp; Design Studio
              </h3>

              <div className="space-y-4 text-xs text-[#555A63]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B38E5D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#121417] block">Studio Address:</span>
                    <span>{OFFICE_ADDRESS}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B38E5D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#121417] block">Direct Consultation Line:</span>
                    <a href={`tel:${PHONE_CLEAN}`} className="hover:text-[#121417] font-mono tabular-nums">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B38E5D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#121417] block">Email Inquiries:</span>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-[#121417]">
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B38E5D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#121417] block">Studio &amp; Site Visit Hours:</span>
                    <span>Monday – Saturday: 8:30 AM – 7:00 PM (By Appointment)</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Card */}
              <div className="mt-6 pt-5 border-t border-[#F5F4F0]">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Valence%20Residential,%20I'd%20like%20to%20discuss%20my%20home%20construction%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#2C3E35] hover:bg-[#1F2E27] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire Directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Interactive Regional Service Area & Territory Map */}
            <div className="bg-[#121417] text-white rounded-sm p-6 border border-[#2C3036]">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#DFD8CC]">
                  Active Construction Territories
                </h4>
                <span className="text-[10px] font-mono text-[#B38E5D]">
                  8 Municipal Zones
                </span>
              </div>

              <p className="text-xs text-[#DFD8CC] leading-relaxed mb-4">
                We manage sanctioned residential projects across all premier metropolitan and suburban townships:
              </p>

              {/* Service Areas Interactive Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {SERVICE_AREAS.map((area, idx) => {
                  const isActive = idx === activeAreaIndex;
                  return (
                    <button
                      key={area}
                      onClick={() => setActiveAreaIndex(idx)}
                      className={`p-2 rounded-xs border text-left transition-colors cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'bg-[#B38E5D] text-[#121417] font-bold border-[#B38E5D]'
                          : 'bg-white/5 border-[#2C3036] text-[#DFD8CC] hover:bg-white/10'
                      }`}
                    >
                      <span className="truncate">{area}</span>
                      <span className="text-[10px] font-mono">Zone 0{idx + 1}</span>
                    </button>
                  );
                })}
              </div>

              {/* Territory Status Tag */}
              <div className="mt-4 pt-3 border-t border-[#2C3036] text-[11px] text-[#DFD8CC] flex items-center justify-between">
                <span>Selected: <strong className="text-white">{SERVICE_AREAS[activeAreaIndex]}</strong></span>
                <span className="text-emerald-400 font-mono">Site Inspections Available</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
