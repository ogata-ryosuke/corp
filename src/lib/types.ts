export interface CompanyData {
  companyName: string;
  companyNameEn: string;
  contact: {
    email: string;
  };
  careerSheetUrl: string;
  contactFormUrl: string;
  heroMessaging: HeroMessaging;
  services: Service[];
  targetConsultations: string[];
  featuredWorks: FeaturedWork[];
  ctaVariants: CtaVariant[];
  contactExpectations: ContactExpectations;
  message: string[];
  overview: OverviewItem[];
  recruit: {
    freelance: {
      title: string;
      description: string[];
    };
  };
}

export interface HeroMessaging {
  headline: string;
  sub: string;
}

export interface OverviewItem {
  label: string;
  value: string;
  isLink?: boolean;
}

export interface Service {
  id: string;
  title: string;
  targetCustomer: string;
  problem: string;
  solution: string;
}

export interface FeaturedWork {
  slug: string;
  title: string;
  summary: string;
  background: string[];
  scope: string[];
  tech: string[];
  approach: string[];
  outcome: string[];
  idealFor: string[];
}

export type CtaContext = 'new' | 'improve' | 'ai';

export interface CtaVariant {
  context: CtaContext;
  label: string;
  description: string;
}

export interface ContactExpectations {
  preBrief: string[];
  afterBrief: string[];
}
