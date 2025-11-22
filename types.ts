export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  imageUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

export interface ContributionDay {
  date: Date;
  count: number;
}