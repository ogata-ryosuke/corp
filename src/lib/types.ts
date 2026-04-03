export interface CompanyData {
  companyName: string;
  companyNameEn: string;
  tagline: string;
  subtitle: string;
  contact: {
    email: string;
    phone: string;
  };
  overview: OverviewItem[];
  message: string[];
  services: Service[];
  achievements: Achievement[];
  techStack: TechCategory[];
  recruit: {
    description: string;
    indeedUrl: string;
    freelance: {
      title: string;
      description: string[];
    };
  };
}

export interface OverviewItem {
  label: string;
  value: string;
  isLink?: boolean;
}

export interface Service {
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  subtitle: string;
  description: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}
