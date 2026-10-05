export interface LeadSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  submittedAt: string;
  source: "brochure_form" | "modal_enquiry" | "site_visit_form";
  preferredDate?: string;
  preferredTime?: string;
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
