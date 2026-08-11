export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities?: string[];
}

export interface Package {
  id: string;
  code: string;
  name: string;
  destinationId: string;
  destinationName: string;
  category: 'domestic' | 'international';
  duration: string;
  durationDays: number;
  startingPrice: string;
  travelType: string;
  overview: string;
  tourHighlights: string[];
  sightseeingPoints: string[];
  dayWiseItinerary: ItineraryDay[];
  hotelPlan: string;
  meals: string;
  transfers: string;
  inclusions: string[];
  exclusions: string[];
  importantNotes: string[];
  cancellationTerms: string[];
  gallery: string[];
  isFeatured?: boolean;
}

export interface Destination {
  id: string;
  name: string;
  category: 'domestic' | 'international';
  shortDesc: string;
  image: string;
  popularPlaces: string[];
  startingPrice: string;
  packageCount: number;
  badge?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
  location?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  destination: string;
  departureCity: string;
  travelDate: string;
  duration: string;
  adults: number;
  children: number;
  hotelCategory: string;
  mealPlan: string;
  approxBudget: string;
  travelType: string;
  message: string;
}
