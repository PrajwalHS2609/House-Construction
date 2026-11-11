export interface ConstructionService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyBenefits: string[];
  deliverables: string[];
  image: string;
  idealFor: string;
  timeline: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'independent' | 'villa' | 'duplex' | 'luxury' | 'urban' | 'renovation';
  categoryLabel: string;
  location: string;
  builtUpArea: string;
  plotSize: string;
  floors: string;
  architecturalStyle: string;
  completionYear: string;
  status: 'Completed' | 'Under Construction';
  coverImage: string;
  description: string;
  structuralHighlights: string[];
  materialsUsed: string[];
  features: string[];
  timeline: string;
}

export interface ConstructionPackage {
  id: string;
  name: string;
  tier: 'essential' | 'premium' | 'luxury';
  pricePerSqFt: number;
  currency: string;
  badge?: string;
  summary: string;
  inclusions: {
    category: string;
    items: string[];
  }[];
  specifications: {
    steel: string;
    cement: string;
    masonry: string;
    flooring: string;
    electrical: string;
    plumbing: string;
    paint: string;
    doorsWindows: string;
  };
  exclusions: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  duration: string;
  summary: string;
  deliverables: string[];
  keyChecks: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  projectType: string;
  builtUpArea: string;
  year: string;
  quote: string;
  highlight: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  category: string;
  answer: string;
}

export interface ConstructionGuide {
  id: string;
  title: string;
  readTime: string;
  date: string;
  category: string;
  summary: string;
  content: string[];
}

export interface LeadEnquiry {
  fullName: string;
  phone: string;
  email: string;
  projectLocation: string;
  plotSize: string;
  builtUpArea: string;
  floors: string;
  constructionType: string;
  estimatedBudget: string;
  expectedStartDate: string;
  message: string;
}
