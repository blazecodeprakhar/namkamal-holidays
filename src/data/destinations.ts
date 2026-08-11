import type { Destination } from '../types';

export const DOMESTIC_DESTINATIONS: Destination[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    category: "domestic",
    shortDesc: "Land of Royals, Majestic Forts, Palaces & Thar Desert Forts.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Jaipur", "Jodhpur", "Jaisalmer", "Udaipur", "Pushkar"],
    startingPrice: "₹8,499",
    packageCount: 6,
    badge: "Most Popular"
  },
  {
    id: "kerala",
    name: "Kerala",
    category: "domestic",
    shortDesc: "God's Own Country – Serene Backwaters, Tea Gardens & Pristine Beaches.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Munnar", "Alleppey", "Thekkady", "Cochin", "Varkala"],
    startingPrice: "₹11,999",
    packageCount: 4,
    badge: "Trending"
  },
  {
    id: "goa",
    name: "Goa",
    category: "domestic",
    shortDesc: "Sun-Kissed Beaches, Portuguese Heritage, Nightlife & Water Sports.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Baga", "Calangute", "Anjuna", "Old Goa Churches", "Dona Paula"],
    startingPrice: "₹6,999",
    packageCount: 3,
    badge: "Best Seller"
  },
  {
    id: "kashmir",
    name: "Jammu & Kashmir",
    category: "domestic",
    shortDesc: "Paradise on Earth – Dal Lake, Gondola Ride in Gulmarg & Betaab Valley.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
    startingPrice: "₹14,499",
    packageCount: 3,
    badge: "Top Choice"
  },
  {
    id: "gujarat",
    name: "Gujarat",
    category: "domestic",
    shortDesc: "Statue of Unity, White Rann of Kutch, Dwarka & Somnath Jyotirlinga.",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Dwarka", "Somnath", "Statue of Unity", "Ahmedabad", "Rann of Kutch"],
    startingPrice: "₹10,999",
    packageCount: 3
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    category: "domestic",
    shortDesc: "Snow Peaks, Pinewood Valleys, Solang Adventures & Colonial Charm.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Shimla", "Manali", "Solang Valley", "Kufri", "Dharamshala"],
    startingPrice: "₹9,999",
    packageCount: 4,
    badge: "Seasonal Deal"
  }
];

export const INTERNATIONAL_DESTINATIONS: Destination[] = [
  {
    id: "uae",
    name: "United Arab Emirates",
    category: "international",
    shortDesc: "Futuristic Dubai Skyscrapers, Desert Safari, Burj Khalifa & Abu Dhabi.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Burj Khalifa", "Dubai Mall", "Desert Safari", "Palm Jumeirah", "Sheikh Zayed Mosque"],
    startingPrice: "₹34,999",
    packageCount: 3,
    badge: "Hot Destination"
  },
  {
    id: "thailand",
    name: "Thailand",
    category: "international",
    shortDesc: "Vibrant Bangkok Temples, Coral Island Pattaya & Exotic Tropical Beaches.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Bangkok", "Pattaya", "Coral Island", "Phuket", "Phi Phi Islands"],
    startingPrice: "₹24,999",
    packageCount: 3,
    badge: "Budget Friendly"
  },
  {
    id: "bali",
    name: "Indonesia (Bali)",
    category: "international",
    shortDesc: "Tropical Bliss – Tegallalang Rice Terraces, Nusa Penida & Uluwatu Temple.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Ubud", "Nusa Penida", "Kintamani", "Uluwatu", "Tanah Lot"],
    startingPrice: "₹29,999",
    packageCount: 2,
    badge: "Honeymoon Special"
  },
  {
    id: "singapore",
    name: "Singapore",
    category: "international",
    shortDesc: "Garden City Wonders – Marina Bay Sands, Sentosa Island & Gardens by the Bay.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Gardens by the Bay", "Sentosa Island", "Merlion Park", "Universal Studios"],
    startingPrice: "₹39,999",
    packageCount: 2
  },
  {
    id: "maldives",
    name: "Maldives",
    category: "international",
    shortDesc: "Luxury Water Villas, Turquoise Lagoons & World-Class Marine Life.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Overwater Resorts", "Male City", "Snorkeling Reefs", "Private Beaches"],
    startingPrice: "₹49,999",
    packageCount: 2,
    badge: "Luxury Getaway"
  },
  {
    id: "switzerland",
    name: "Switzerland",
    category: "international",
    shortDesc: "Alpine Panorama – Mt. Titlis Snow Peak, Lake Lucerne & Interlaken.",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Zurich", "Lucerne", "Interlaken", "Mount Titlis", "Jungfraujoch"],
    startingPrice: "₹89,999",
    packageCount: 2,
    badge: "Dream Europe"
  }
];

export const ALL_DESTINATIONS = [...DOMESTIC_DESTINATIONS, ...INTERNATIONAL_DESTINATIONS];
