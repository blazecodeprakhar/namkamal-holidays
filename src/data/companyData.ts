import type { ServiceItem } from '../types';

export const COMPANY_INFO = {
  name: "Namkamal Holidays",
  tagline: "Your Journey Our Commitment",
  founder: "Mr. Shubham Bomble",
  role: "CEO / Founder",
  address: "S.No.5, Nath Nagar, Hanumangad Rd, Nanded, Maharashtra 431605",
  phone: "+91 95453 99825",
  rawPhone: "919545399825",
  whatsapp: "+91 95453 99825",
  email: "info.namkamalholidays@gmail.com",
  website: "namkamal.com",
  workingHours: "9:00 AM – 9:00 PM (Mon - Sun)",
  
  socials: {
    googleBusiness: "https://share.google/HBSOYIfHxQB0tBQjK",
    instagram: "https://www.instagram.com/namkamal_holidays/",
    facebook: "https://www.facebook.com/share/1HBvsVFaCM/",
    youtube: "https://www.youtube.com/@NamkamalHolidays",
    reviews: "https://share.google/OM4fQjvXxu8oBE98S"
  },

  aboutSummary: `Welcome to Namkamal Holidays, your gateway to unforgettable travel experiences at incredibly reasonable prices. We are a dedicated team of travel enthusiasts committed to providing you with exceptional tours and holiday packages that won't break the bank.`,
  
  aboutFull: `Welcome to Namkamal Holidays, your gateway to unforgettable travel experiences at incredibly reasonable prices. We are a dedicated team of travel enthusiasts committed to providing you with exceptional tours and holiday packages that won't break the bank.

We believe that travel is not just about visiting new places, but about creating lasting memories and forging meaningful connections with the world around us. Our team of experienced travel experts is dedicated to curating unique itineraries that showcase the best of each destination while catering to your individual preferences and interests.

According to us, everyone deserves to explore the world without compromising on quality or cost. That's why we specialize in crafting affordable travel solutions that allow you to see the world without burning a hole in your pocket.

Our mission is simple: to make travel accessible, enjoyable, and affordable for all. From budget-friendly group tours to customized private packages, we offer a wide range of options to suit every traveler's preferences and budget constraints.

With a focus on transparency, integrity, and customer satisfaction, we work tirelessly to ensure that every aspect of your journey is seamless and stress-free. Our team of experienced travel experts is here to assist you at every stage of your trip, providing personalized recommendations, insider tips, and round-the-clock support to guarantee a memorable travel experience.`,

  whyChooseUs: [
    {
      title: "Thoughtfully Planned Itineraries",
      desc: "Every package is hand-crafted with exact sightseeing points, balanced travel timings, and comfortable hotel stays.",
      icon: "Compass"
    },
    {
      title: "Unbeatable Price & Transparency",
      desc: "Get premium holiday experiences at direct B2B pricing with zero hidden charges and clear inclusion breakdown.",
      icon: "ShieldCheck"
    },
    {
      title: "24/7 Dedicated Support",
      desc: "Our travel experts provide round-the-clock assistance before, during, and after your trip for complete peace of mind.",
      icon: "Headphones"
    },
    {
      title: "100% Customized Solutions",
      desc: "Tailor your itinerary according to your dates, budget, hotel preferences (3★, 4★, 5★) and meal plans.",
      icon: "CheckCircle2"
    }
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "domestic-packages",
    title: "Domestic Holiday Packages",
    description: "Explore the magical diversity of India with curated packages covering heritage, beaches, mountains, and backwaters.",
    iconName: "MapPin"
  },
  {
    id: "international-packages",
    title: "International Holiday Packages",
    description: "Embark on global adventures to Dubai, Thailand, Bali, Singapore, Maldives, Switzerland, and beyond.",
    iconName: "Globe"
  },
  {
    id: "customized-holidays",
    title: "Customized Holidays",
    description: "Personalized trip planning tailored precisely to your budget, travel dates, hotel choices, and sightseeing preferences.",
    iconName: "Sliders"
  },
  {
    id: "honeymoon-packages",
    title: "Honeymoon Packages",
    description: "Romantic getaways with candlelit dinners, luxury stay inclusions, flower decorations, and private transfers.",
    iconName: "Heart"
  },
  {
    id: "family-tours",
    title: "Family Tours",
    description: "Relaxed, wholesome itineraries designed for families with kid-friendly activities and comfortable stays.",
    iconName: "Users"
  },
  {
    id: "group-tours",
    title: "Group Tours",
    description: "Fun, budget-optimized group trips for corporate outings, friends, student tours, and pilgrimage groups.",
    iconName: "UserGroup"
  },
  {
    id: "flight-booking",
    title: "Flight Booking",
    description: "Best fare assistance for domestic and international flights with flexible seat selection and baggage guidance.",
    iconName: "Plane"
  },
  {
    id: "railway-booking",
    title: "Railway Booking",
    description: "Hassle-free train ticket reservations across Indian Railways with confirmed seating assistance.",
    iconName: "Train"
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    description: "Curated 3-star, 4-star, 5-star, resort, and houseboat stays with verified guest reviews and best room rates.",
    iconName: "Hotel"
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    description: "End-to-end guidance for tourist visas, e-visas, document verification, and submission.",
    iconName: "FileCheck"
  },
  {
    id: "passport-assistance",
    title: "Passport Assistance",
    description: "Support for fresh passport applications, renewals, address changes, and appointment booking.",
    iconName: "BookOpen"
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    description: "Comprehensive medical and travel protection policies covering flight delays, lost luggage, and trip cancellations.",
    iconName: "Shield"
  },
  {
    id: "cruise-booking",
    title: "Cruise Booking",
    description: "Unforgettable ocean and river cruise holidays in Singapore, Dubai, Europe, and domestic waters.",
    iconName: "Anchor"
  }
];
