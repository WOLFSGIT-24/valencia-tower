export interface LeadSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  budget?: string;
  siteVisitDate?: string;
  preferredDate?: string;
  preferredTime?: string;
  planningToFinalise?: string;
  submittedAt: string;
  source: string;
  status: "Pending" | "Contacted" | "Scheduled" | "Completed";
  notes?: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  level: string;
  levelNumber: string;
  description: string;
  imageUrl: string;
  images?: string[];
  bullets: string[];
}

export interface FloorPlanUnit {
  id: string;
  title: string;
  type: string;
  area: string;
  imageUrl: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  highlights: string[];
}

export interface CommuteDestination {
  id: string;
  name: string;
  distance: string;
  icon: string;
  times: {
    driving: number;
    transit: number;
    walking: number;
  };
}
