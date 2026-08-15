import type { Destination } from '../types';

import ap5 from '../assets/Andrapradesh/5.jpg';
import gujaratImg from '../assets/Gujarat/ChatGPT Image Aug 15, 2026 at 03_28_18 PM.png';
import karnataka2 from '../assets/Karnataka/2.jpg';
import mp21 from '../assets/Mqadahypradesh/21.jpg';
import ne25 from '../assets/North east india/25.jpg';
import odisha14 from '../assets/Odisha/14.jpg';
import telangana7 from '../assets/Telangana/7.jpg';
import uttarakhand10 from '../assets/Uttarakhand/10.jpg';
import wb16 from '../assets/West bengal/16.jpg';

export const DOMESTIC_DESTINATIONS: Destination[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    category: "domestic",
    shortDesc: "Land of Royals, UNESCO Forts, Grand Palaces & Thar Desert Dunes.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Jaipur", "Jodhpur", "Jaisalmer", "Udaipur", "Pushkar", "Bikaner", "Mount Abu", "Ranthambore"],
    startingPrice: "₹8,499",
    packageCount: 6,
    badge: "Most Popular"
  },
  {
    id: "kerala",
    name: "Kerala",
    category: "domestic",
    shortDesc: "God's Own Country – Serene Backwaters, Houseboats & Tea Gardens.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Cochin", "Munnar", "Thekkady", "Alleppey", "Kumarakom", "Varkala", "Kovalam"],
    startingPrice: "₹11,999",
    packageCount: 2,
    badge: "Trending"
  },
  {
    id: "goa",
    name: "Goa",
    category: "domestic",
    shortDesc: "Sun-Kissed Beaches, Fort Aguada, UNESCO Churches & Coastal Vibe.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Baga Beach", "Anjuna", "Vagator", "Fort Aguada", "Old Goa Churches", "Colva"],
    startingPrice: "₹6,999",
    packageCount: 2,
    badge: "Best Seller"
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    category: "domestic",
    shortDesc: "Devbhoomi Gateway – Haridwar Aarti, Rishikesh, Mussoorie & Corbett Tiger Reserve.",
    image: uttarakhand10,
    popularPlaces: ["Haridwar", "Rishikesh", "Mussoorie", "Nainital", "Jim Corbett"],
    startingPrice: "₹11,499",
    packageCount: 2,
    badge: "Hills & Wildlife"
  },
  {
    id: "karnataka",
    name: "Karnataka",
    category: "domestic",
    shortDesc: "UNESCO Hampi Ruins, Mysore Palace, Coorg Coffee Estates & Coastal Shrines.",
    image: karnataka2,
    popularPlaces: ["Bengaluru", "Mysore", "Coorg", "Hampi", "Udupi", "Murudeshwar", "Gokarna"],
    startingPrice: "₹12,499",
    packageCount: 2
  },
  {
    id: "kashmir",
    name: "Jammu & Kashmir",
    category: "domestic",
    shortDesc: "Paradise on Earth – Dal Lake Shikara, Gulmarg Gondola & Betaab Valley.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
    startingPrice: "₹14,499",
    packageCount: 1,
    badge: "Top Pick"
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    category: "domestic",
    shortDesc: "Pine Valleys, Shimla Mall Road, Solang Adventures & Dharamshala Monastery.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Shimla", "Manali", "Kufri", "Solang Valley", "Dharamshala", "Dalhousie"],
    startingPrice: "₹13,999",
    packageCount: 2
  },
  {
    id: "delhi",
    name: "Delhi",
    category: "domestic",
    shortDesc: "Capital Heritage – Red Fort, Qutub Minar, India Gate & Akshardham.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Red Fort", "Jama Masjid", "India Gate", "Qutub Minar", "Akshardham"],
    startingPrice: "₹7,999",
    packageCount: 1
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    category: "domestic",
    shortDesc: "Spiritual Heart of India – Taj Mahal Agra, Ayodhya Ram Mandir & Kashi Aarti.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Agra", "Mathura", "Vrindavan", "Ayodhya", "Prayagraj", "Varanasi"],
    startingPrice: "₹13,499",
    packageCount: 1,
    badge: "Spiritual Trail"
  },
  {
    id: "andaman",
    name: "Andaman Islands",
    category: "domestic",
    shortDesc: "Tropical Bay of Bengal – Radhanagar Beach, Cellular Jail & Neil Island.",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Port Blair", "Havelock Island", "Radhanagar Beach", "Neil Island"],
    startingPrice: "₹19,999",
    packageCount: 1,
    badge: "Island Getaway"
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    category: "domestic",
    shortDesc: "Vizag Coastal Charm – RK Beach, Submarine Museum & Araku Valley Caves.",
    image: ap5,
    popularPlaces: ["Visakhapatnam", "RK Beach", "Kailasagiri", "Araku Valley", "Borra Caves"],
    startingPrice: "₹9,999",
    packageCount: 1
  },
  {
    id: "telangana",
    name: "Telangana",
    category: "domestic",
    shortDesc: "City of Pearls – Charminar, Golconda Fort & World's Largest Ramoji Film City.",
    image: telangana7,
    popularPlaces: ["Charminar", "Golconda Fort", "Chowmahalla Palace", "Ramoji Film City"],
    startingPrice: "₹8,999",
    packageCount: 1
  },
  {
    id: "northeast",
    name: "North East India",
    category: "domestic",
    shortDesc: "Unexplored Eastern Frontiers – Meghalaya Root Bridges, Kaziranga & Tawang.",
    image: ne25,
    popularPlaces: ["Shillong", "Cherrapunjee", "Dawki", "Kaziranga", "Tawang", "Gangtok", "Darjeeling"],
    startingPrice: "₹15,999",
    packageCount: 4,
    badge: "Unexplored Frontiers"
  },
  {
    id: "odisha",
    name: "Odisha",
    category: "domestic",
    shortDesc: "Golden Triangle Heritage – Konark Sun Temple, Jagannath Puri & Chilika Lake.",
    image: odisha14,
    popularPlaces: ["Bhubaneswar", "Konark Sun Temple", "Puri Jagannath Temple", "Chilika Lake"],
    startingPrice: "₹9,499",
    packageCount: 1
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    category: "domestic",
    shortDesc: "Cultural Heritage & Wildlife – Victoria Memorial, Darjeeling Toy Train & Sundarbans.",
    image: wb16,
    popularPlaces: ["Kolkata", "Darjeeling", "Kalimpong", "Sundarbans National Park"],
    startingPrice: "₹8,999",
    packageCount: 2
  },
  {
    id: "gujarat",
    name: "Gujarat",
    category: "domestic",
    shortDesc: "Vibrant Western Realm – Statue of Unity, White Rann of Kutch & Dwarka Somnath.",
    image: gujaratImg,
    popularPlaces: ["Ahmedabad", "Statue of Unity", "Dwarka", "Somnath", "Rann of Kutch", "Gir"],
    startingPrice: "₹10,999",
    packageCount: 2
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    category: "domestic",
    shortDesc: "Heart of Sacred India – Mahakaleshwar Ujjain, Sanchi Stupa & Bhedaghat Marble Rocks.",
    image: mp21,
    popularPlaces: ["Indore", "Ujjain Mahakal", "Omkareshwar", "Bhopal", "Sanchi", "Jabalpur Bhedaghat"],
    startingPrice: "₹9,999",
    packageCount: 2,
    badge: "Spiritual & Heritage"
  }
];

export const INTERNATIONAL_DESTINATIONS: Destination[] = [
  {
    id: "uae",
    name: "United Arab Emirates",
    category: "international",
    shortDesc: "Dubai Burj Khalifa, Desert Safari Dunes, Marina Cruises & Abu Dhabi Mosque.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Burj Khalifa", "Dubai Mall", "Desert Safari", "Palm Jumeirah", "Sheikh Zayed Mosque"],
    startingPrice: "₹34,999",
    packageCount: 2,
    badge: "Hot Seller"
  },
  {
    id: "thailand",
    name: "Thailand",
    category: "international",
    shortDesc: "Vibrant Bangkok Temples, Coral Island Speedboats & Sanctuary of Truth Pattaya.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Bangkok", "Pattaya", "Coral Island", "Grand Palace", "Wat Pho"],
    startingPrice: "₹24,999",
    packageCount: 1,
    badge: "Budget Friendly"
  },
  {
    id: "bali",
    name: "Indonesia (Bali)",
    category: "international",
    shortDesc: "Island of Gods – Ubud Terraces, Nusa Penida Kelingking & Uluwatu Sunset.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Ubud", "Nusa Penida", "Kintamani", "Uluwatu Temple", "Jimbaran"],
    startingPrice: "₹29,999",
    packageCount: 1,
    badge: "Tropical Paradise"
  },
  {
    id: "singapore",
    name: "Singapore",
    category: "international",
    shortDesc: "Futuristic Garden City – Gardens by the Bay, Marina Bay & Sentosa Cable Car.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Gardens by the Bay", "Sentosa Island", "Merlion Park", "Universal Studios"],
    startingPrice: "₹39,999",
    packageCount: 1
  },
  {
    id: "malaysia",
    name: "Malaysia",
    category: "international",
    shortDesc: "Kuala Lumpur Petronas Towers, Genting Cable Car & Langkawi SkyBridge.",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Petronas Twin Towers", "Batu Caves", "Genting Highlands", "Langkawi SkyBridge"],
    startingPrice: "₹27,999",
    packageCount: 1
  },
  {
    id: "vietnam",
    name: "Vietnam",
    category: "international",
    shortDesc: "Emerald Ha Long Bay Cruise, Da Nang Dragon Bridge & Hoi An Lanterns.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Hanoi", "Ha Long Bay", "Da Nang", "Hoi An Ancient Town"],
    startingPrice: "₹32,999",
    packageCount: 1,
    badge: "Trending Asia"
  },
  {
    id: "switzerland",
    name: "Switzerland",
    category: "international",
    shortDesc: "Alpine Panorama – Lake Lucerne, Interlaken Mountains & Historic Zurich.",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    popularPlaces: ["Zurich", "Lucerne", "Interlaken", "Old Town Bahnhof"],
    startingPrice: "₹89,999",
    packageCount: 1,
    badge: "Dream Europe"
  }
];

export const ALL_DESTINATIONS = [...DOMESTIC_DESTINATIONS, ...INTERNATIONAL_DESTINATIONS];
