import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { CompanyIntro } from './components/CompanyIntro.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { ProcessTimeline } from './components/ProcessTimeline.tsx';
import { ProjectsGallery } from './components/ProjectsGallery.tsx';
import { ArchitecturalDesign } from './components/ArchitecturalDesign.tsx';
import { QualityAndMaterials } from './components/QualityAndMaterials.tsx';
import { PackagesAndEstimator } from './components/PackagesAndEstimator.tsx';
import { ResidentialExpertise } from './components/ResidentialExpertise.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ConversionCta } from './components/ConversionCta.tsx';
import { ContactAndEnquiry } from './components/ContactAndEnquiry.tsx';
import { GuidesSection } from './components/GuidesSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { EstimateModal } from './components/EstimateModal.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';
import { ProjectCaseStudy, ConstructionService, LeadEnquiry } from './types/index.ts';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [estimateModalOpen, setEstimateModalOpen] = useState<boolean>(false);
  const [leadInitialData, setLeadInitialData] = useState<Partial<LeadEnquiry>>({});
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEstimator = () => {
    // Scroll directly to the interactive cost estimator on page, or open modal
    const packagesEl = document.getElementById('packages');
    if (packagesEl) {
      scrollToSection('packages');
    } else {
      setEstimateModalOpen(true);
    }
  };

  const handleServiceQuoteRequest = (serviceTitle: string) => {
    setLeadInitialData({
      constructionType: serviceTitle,
      message: `I would like to receive a detailed scope and cost proposal for ${serviceTitle}.`,
    });
    scrollToSection('contact');
  };

  const handleEnquireSimilarProject = (projectTitle: string) => {
    setLeadInitialData({
      constructionType: 'Custom Architectural Villa',
      message: `I was inspired by your ${projectTitle} project and would like to build a similar home on my plot.`,
    });
    scrollToSection('contact');
  };

  const handlePackageEstimateApply = (packageId: string, estimatedTotal?: number, area?: number) => {
    const packageName = packageId === 'essential' ? 'Essential Package' : packageId === 'luxury' ? 'Luxury Architectural Package' : 'Premium Package';
    setLeadInitialData({
      constructionType: packageName,
      builtUpArea: area ? `${area.toLocaleString()} sq.ft` : '',
      estimatedBudget: estimatedTotal ? `$${Math.round(estimatedTotal / 1000)}k (Estimated)` : '',
      message: `I generated an estimate for ${area || 3500} sq.ft using the ${packageName}. Please prepare an itemized Bill of Quantities (BOQ).`,
    });
    scrollToSection('contact');
  };

  const handleQuickLeadSubmit = (data: { name: string; phone: string; area: number; packageId: string; total: number }) => {
    setLeadInitialData({
      fullName: data.name,
      phone: data.phone,
      builtUpArea: `${data.area} sq.ft`,
      constructionType: data.packageId === 'essential' ? 'Essential Package' : data.packageId === 'luxury' ? 'Luxury Package' : 'Premium Package',
      estimatedBudget: `$${Math.round(data.total / 1000)}k`,
      message: `Quick estimate requested for ${data.area} sq.ft at $${data.total.toLocaleString()}.`,
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#121417] flex flex-col font-sans selection:bg-[#B38E5D]/20 selection:text-[#121417]">
      
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenEstimator={handleOpenEstimator}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Section 1: Premium Hero Section */}
        <HeroSection
          onOpenEstimator={handleOpenEstimator}
          onExploreProjects={() => scrollToSection('projects')}
          onRequestConsultation={() => scrollToSection('contact')}
        />

        {/* Section 2: Company Introduction */}
        <CompanyIntro
          onLearnMore={() => scrollToSection('process')}
          onRequestConsultation={() => scrollToSection('contact')}
        />

        {/* Section 3: Our Construction Services (8 services) */}
        <ServicesSection
          onSelectService={(service: ConstructionService) => {
            handleServiceQuoteRequest(service.title);
          }}
          onRequestQuoteForService={handleServiceQuoteRequest}
        />

        {/* Section 4: Why Choose Our Construction Company? */}
        <WhyChooseUs
          onOpenEstimator={handleOpenEstimator}
          onRequestConsultation={() => scrollToSection('contact')}
        />

        {/* Section 5: Our Construction Process */}
        <ProcessTimeline
          onRequestConsultation={() => scrollToSection('contact')}
        />

        {/* Section 6: Featured Construction Projects */}
        <ProjectsGallery
          onSelectProject={(project) => setSelectedProject(project)}
          onRequestEstimate={handleOpenEstimator}
        />

        {/* Section 7: Architectural Design & Planning */}
        <ArchitecturalDesign
          onRequestDesignDiscussion={() => scrollToSection('contact')}
        />

        {/* Section 8: Construction Quality & Materials */}
        <QualityAndMaterials
          onRequestMaterialSpecs={() => scrollToSection('contact')}
        />

        {/* Section 9: Construction Packages & Live Cost Estimator */}
        <PackagesAndEstimator
          onSelectPackageForEnquiry={handlePackageEstimateApply}
        />

        {/* Section 10: Residential Construction Expertise */}
        <ResidentialExpertise
          onExploreCategory={(category) => {
            scrollToSection('projects');
          }}
        />

        {/* Section 11: Customer Testimonials */}
        <Testimonials />

        {/* Section 12: Frequently Asked Questions */}
        <FaqSection />

        {/* Construction Guides & Insights */}
        <GuidesSection />

        {/* Section 13: Strong Conversion CTA Banner */}
        <ConversionCta
          onRequestConsultation={() => scrollToSection('contact')}
          onOpenEstimator={handleOpenEstimator}
        />

        {/* Section 14: Contact & Comprehensive Construction Enquiry Form */}
        <ContactAndEnquiry initialData={leadInitialData} />

      </main>

      {/* Section 15: Professional Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenEstimator={handleOpenEstimator}
      />

      {/* Floating Action Controls (WhatsApp, Click-to-call, Quick Estimator) */}
      <FloatingActions onOpenEstimator={() => setEstimateModalOpen(true)} />

      {/* Project Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquireSimilar={handleEnquireSimilarProject}
      />

      {/* Quick Cost Estimate Modal */}
      <EstimateModal
        isOpen={estimateModalOpen}
        onClose={() => setEstimateModalOpen(false)}
        onSubmitLead={handleQuickLeadSubmit}
      />

    </div>
  );
}
