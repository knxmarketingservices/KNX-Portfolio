export interface StatItem {
  id: string;
  value: string;
  label: string;
  metricLabel: string;
}

export interface ChartDataPoint {
  period: string;
  metric: number;
}

export interface CaseStudy {
  id: string;
  category: string;
  tag: string;
  location: string;
  clientName: string;
  title: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  showcaseImages?: {
    src: string;
    label: string;
  }[];
  captions: string[];
  mockChartTitle: string;
  mockChartData: ChartDataPoint[];
}

export interface Testimonial {
  id: string;
  via: "WhatsApp" | "Email" | "Briefing";
  feedback: string;
  clientName: string;
  brand: string;
  date?: string;
  avatar?: string;
}

export interface Capability {
  id: string;
  index: string;
  title: string;
  description: string;
  tag?: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  pills: string[];
  description: string;
  status: "In Development" | "Beta Live" | "Backlog";
}
