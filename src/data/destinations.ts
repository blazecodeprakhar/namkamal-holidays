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
    packageCount: 5,
    badge: "Seasonal Deal"
  },
  {
    id: "ladakh",
    name: "Leh Ladakh",
    category: "domestic",
    shortDesc: "Land of High Passes – Pangong Tso Lake, Khardung La & Nubra Valley.",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Leh", "Pangong Lake", "Nubra Valley", "Khardung La", "Magnetic Hill"],
    startingPrice: "₹22,999",
    packageCount: 2,
    badge: "Adventure Top Pick"
  },
  {
    id: "andaman",
    name: "Andaman Islands",
    category: "domestic",
    shortDesc: "Tropical Bay of Bengal – Radhanagar Beach, Cellular Jail & Havelock.",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Port Blair", "Havelock Island", "Radhanagar Beach", "Neil Island"],
    startingPrice: "₹19,999",
    packageCount: 2,
    badge: "Island Getaway"
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    category: "domestic",
    shortDesc: "Devbhoomi Pilgrimage – Kedarnath, Badrinath, Rishikesh & Haridwar.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Kedarnath", "Badrinath", "Rishikesh", "Haridwar", "Nainital"],
    startingPrice: "₹17,999",
    packageCount: 2,
    badge: "Holy Yatra"
  },
  {
    id: "northeast",
    name: "Meghalaya & Assam",
    category: "domestic",
    shortDesc: "Abode of Clouds – Living Root Bridges, Dawki Crystal River & Kaziranga Rhinos.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Shillong", "Cherrapunji", "Dawki", "Kaziranga", "Guwahati"],
    startingPrice: "₹21,999",
    packageCount: 2,
    badge: "Unexplored Beauty"
  },
  {
    id: "tamilnadu",
    name: "Tamil Nadu (Ooty)",
    category: "domestic",
    shortDesc: "Queen of Nilgiris – Tea Gardens, Toy Train, Kodaikanal Boating & Lakes.",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Ooty", "Kodaikanal", "Coonoor", "Madurai", "Rameswaram"],
    startingPrice: "₹12,499",
    packageCount: 2
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
    packageCount: 4,
    badge: "Hot Destination"
  },
  {
    id: "thailand",
    name: "Thailand",
    category: "international",
    shortDesc: "Vibrant Bangkok Temples, Coral Island Pattaya & Exotic Phuket Beaches.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Bangkok", "Pattaya", "Phuket", "Krabi", "Phi Phi Islands"],
    startingPrice: "₹24,999",
    packageCount: 4,
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
    packageCount: 3,
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
    packageCount: 3
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
    packageCount: 3,
    badge: "Dream Europe"
  },
  {
    id: "vietnam",
    name: "Vietnam",
    category: "international",
    shortDesc: "Heritage & Natural Marvels – Ha Long Bay Cruise, Ba Na Hills & Hanoi.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Hanoi", "Ha Long Bay", "Da Nang", "Golden Bridge", "Hoi An"],
    startingPrice: "₹32,999",
    packageCount: 2,
    badge: "Trending Asia"
  },
  {
    id: "srilanka",
    name: "Sri Lanka",
    category: "international",
    shortDesc: "Island of Serendib – Sigiriya Rock, Kandy Temple & Bentota Beaches.",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Colombo", "Kandy", "Bentota", "Pinnawala", "Sigiriya"],
    startingPrice: "₹27,999",
    packageCount: 2,
    badge: "Island Culture"
  },
  {
    id: "japan",
    name: "Japan",
    category: "international",
    shortDesc: "Land of the Rising Sun – Mt. Fuji, Shinkansen Bullet Train, Tokyo & Kyoto.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Tokyo", "Kyoto", "Mount Fuji", "Osaka", "Nara"],
    startingPrice: "₹1,49,999",
    packageCount: 2,
    badge: "Futuristic & Ancient"
  },
  {
    id: "egypt",
    name: "Egypt",
    category: "international",
    shortDesc: "Cradle of Civilization – Giza Pyramids, Nile River Cruise & Luxor Temples.",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Cairo", "Pyramids of Giza", "Luxor", "Aswan", "Nile River"],
    startingPrice: "₹79,999",
    packageCount: 2,
    badge: "Ancient Wonders"
  },
  {
    id: "turkey",
    name: "Turkey",
    category: "international",
    shortDesc: "Where East Meets West – Hot Air Balloons in Cappadocia & Hagia Sophia.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Istanbul", "Cappadocia", "Pamukkale", "Ephesus", "Antalya"],
    startingPrice: "₹69,999",
    packageCount: 2,
    badge: "Balloons & History"
  }
];

export const ALL_DESTINATIONS = [...DOMESTIC_DESTINATIONS, ...INTERNATIONAL_DESTINATIONS];
