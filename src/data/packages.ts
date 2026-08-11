import type { Package } from '../types';

export const PACKAGES_DATA: Package[] = [
  // --- RAJASTHAN ---
  {
    id: "namkamal-jaipur-royal-escape",
    code: "NKRAJ2N",
    name: "Namkamal Jaipur Royal Escape",
    destinationId: "rajasthan",
    destinationName: "Rajasthan",
    category: "domestic",
    duration: "2 Nights / 3 Days",
    durationDays: 3,
    startingPrice: "₹8,499",
    travelType: "Heritage & Cultural / Family / Couple",
    overview: "Immerse yourself in the Pink City's regal heritage with private sightseeing of UNESCO World Heritage forts, grand palaces, vibrant bazaars, and iconic architectural marvels.",
    tourHighlights: [
      "Amber Fort grand palace tour",
      "City Palace & Jantar Mantar Observatory",
      "Hawa Mahal & Jal Mahal photo stops",
      "Albert Hall Museum & Birla Mandir visit",
      "Local handicraft & bazaars shopping"
    ],
    sightseeingPoints: [
      "Amber Fort",
      "City Palace",
      "Jantar Mantar",
      "Hawa Mahal (photo stop)",
      "Jal Mahal (photo stop)",
      "Albert Hall Museum",
      "Birla Mandir",
      "Nahargarh Fort (optional)"
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Arrival Jaipur | Pink City Sightseeing",
        description: "Welcome to Jaipur! Meet our representative at Airport/Railway Station and transfer to hotel. Post check-in, visit City Palace, Jantar Mantar, exterior photo of Hawa Mahal and Albert Hall Museum. Evening free to explore local colorful markets."
      },
      {
        day: 2,
        title: "Forts & Palaces Exploration",
        description: "After breakfast, embark on a royal tour starting with magnificent Amber Fort. Enjoy photostop at Jal Mahal in Man Sagar Lake. Proceed to Jaigarh/Nahargarh Fort for panoramic views of the city. Evening visit Birla Mandir."
      },
      {
        day: 3,
        title: "Shopping & Departure",
        description: "Enjoy breakfast at the hotel. Free time for souvenir shopping in Johari and Bapu Bazaars as per flight/train timing. Transfer to Jaipur airport or railway station for your onward journey."
      }
    ],
    hotelPlan: "3★ / 4★ Heritage Hotel Stay options available as per quotation.",
    meals: "Daily Breakfast included (CP Plan). MAP / AP plans optional.",
    transfers: "Private AC Sedan / SUV for airport transfers & all sightseeing.",
    inclusions: [
      "2 Nights AC Hotel Accommodation on twin sharing",
      "Daily Buffet Breakfast",
      "All transfer & sightseeing by Private AC Vehicle",
      "Toll Tax, Parking, Driver Allowance & Fuel charges",
      "Assistance at arrival & departure points"
    ],
    exclusions: [
      "Airfare / Train fare",
      "Monument Entry fees, Camera charges, Guide charges",
      "Personal expenses (laundry, beverages, tips)",
      "Anything not mentioned in inclusions"
    ],
    importantNotes: [
      "Attraction entry fees, elephant/jeep ride at Amber Fort are extra.",
      "Final price varies depending on exact dates, hotel category, and group size."
    ],
    cancellationTerms: [
      "30+ days prior to departure: 10% processing fee",
      "15-29 days prior: 25% of total package cost",
      "7-14 days prior: 50% of total package cost",
      "Less than 7 days: 100% cancellation charge"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },
  {
    id: "namkamal-best-of-rajasthan",
    code: "NKRAJ7N-JJU",
    name: "Namkamal Best of Rajasthan",
    destinationId: "rajasthan",
    destinationName: "Rajasthan",
    category: "domestic",
    duration: "7 Nights / 8 Days",
    durationDays: 8,
    startingPrice: "₹21,999",
    travelType: "Grand Heritage / Desert Safari / Lake City Tour",
    overview: "The ultimate 8-day royal circuit covering Pink City Jaipur, Holy Pushkar & Ajmer, Sun City Jodhpur, Golden Desert Jaisalmer with Sand Dunes Camp, and Lake City Udaipur.",
    tourHighlights: [
      "Jaipur Forts & Palaces circuit",
      "Ajmer Sharif Dargah & Pushkar Lake",
      "Mehrangarh Fort & Jaswant Thada Jodhpur",
      "Jaisalmer Golden Fort & Sam Sand Dunes Desert Camp with Folk Dance",
      "Udaipur City Palace & Lake Pichola Boat Ride"
    ],
    sightseeingPoints: [
      "Jaipur: Amber Fort, City Palace, Jantar Mantar, Hawa Mahal, Jal Mahal",
      "Pushkar/Ajmer: Brahma Temple, Pushkar Lake, Ajmer Sharif Dargah",
      "Jodhpur: Mehrangarh Fort, Jaswant Thada, Clock Tower Market",
      "Jaisalmer: Golden Fort, Patwon Ki Haveli, Gadisar Lake, Sam Sand Dunes",
      "Udaipur: City Palace, Lake Pichola, Jagdish Temple, Saheliyon-ki-Bari, Fateh Sagar Lake"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Jaipur Arrival & City Sightseeing", description: "Arrival at Jaipur. Visit City Palace, Jantar Mantar observatory, and photo stop at Hawa Mahal." },
      { day: 2, title: "Jaipur Forts & Cultural Highlights", description: "Visit Amber Fort, Jal Mahal, Albert Hall Museum, and Birla Mandir." },
      { day: 3, title: "Jaipur to Ajmer/Pushkar & Onward to Jodhpur", description: "Drive to Ajmer Sharif Dargah and holy Pushkar Lake & Brahma Temple. Continue drive to Jodhpur." },
      { day: 4, title: "Jodhpur Sun City Tour", description: "Explore colossal Mehrangarh Fort, Jaswant Thada marble cenotaph, and colorful Clock Tower market." },
      { day: 5, title: "Jodhpur to Jaisalmer & Desert Camp", description: "Drive to Jaisalmer. Visit Gadisar Lake in evening and check-in at Sam Sand Dunes desert camp with camel safari & Rajasthani cultural show." },
      { day: 6, title: "Jaisalmer Golden City Exploration", description: "Visit UNESCO Jaisalmer Fort, Patwon Ki Haveli, Salim Singh Ki Haveli, and local markets." },
      { day: 7, title: "Jaisalmer to Udaipur (Lake City)", description: "Scenic drive to Udaipur. Check-in at hotel and enjoy evening leisure walk around Lake Pichola." },
      { day: 8, title: "Udaipur Sightseeing & Departure", description: "Visit Udaipur City Palace, Jagdish Temple, Saheliyon-ki-Bari, and Fateh Sagar Lake. Departure transfer." }
    ],
    hotelPlan: "7 Nights Stay (6N Hotel + 1N Swiss Tent Desert Camp with DJ & Dinner)",
    meals: "Daily Breakfast + 1 Dinner at Desert Camp.",
    transfers: "Private AC Vehicle throughout the 8 days tour.",
    inclusions: [
      "7 Nights Accommodation (including 1 Night Desert Safari Camp)",
      "Daily Breakfast & 1 Gala Dinner in Jaisalmer Camp",
      "Camel Safari at Sam Sand Dunes",
      "Rajasthani Cultural Dance & DJ Show at Camp",
      "All transfer & sightseeing by Private AC Vehicle",
      "Tolls, Parking, Driver allowances included"
    ],
    exclusions: ["Airfare/Train fare", "Entry tickets & boat ride charges", "Personal expenses"],
    importantNotes: ["Desert safari tents subject to seasonal availability."],
    cancellationTerms: ["Standard cancellation policy applies."],
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- KERALA ---
  {
    id: "namkamal-kerala-highlights",
    code: "NKKER5N",
    name: "Namkamal Kerala Highlights",
    destinationId: "kerala",
    destinationName: "Kerala",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    startingPrice: "₹11,999",
    travelType: "Nature / Backwaters / Houseboat / Family & Honeymoon",
    overview: "Experience God's Own Country with Fort Kochi colonial charm, lush tea gardens of Munnar, wildlife and spice plantations of Thekkady, and a memorable Alleppey backwater houseboat cruise.",
    tourHighlights: [
      "Fort Kochi & Chinese Fishing Nets",
      "Munnar Tea Gardens, Tea Museum & Mattupetty Dam",
      "Periyar Wildlife Sanctuary & Spice Plantation in Thekkady",
      "Overnight Alleppey Backwater Houseboat Cruise with all meals"
    ],
    sightseeingPoints: [
      "Cochin: Fort Kochi, St. Francis Church, Chinese Fishing Nets, Mattancherry Palace",
      "Munnar: Tea Museum, Mattupetty Dam, Echo Point, Kundala Lake, Tea Gardens",
      "Thekkady: Periyar Lake / boating option, Spice Plantation tour",
      "Alleppey: Backwater cruise / Deluxe Houseboat stay"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Cochin | Transfer to Fort Kochi", description: "Arrive at Cochin airport/railway station. Visit Fort Kochi, Chinese Fishing Nets, St. Francis Church and Mattancherry Palace." },
      { day: 2, title: "Cochin to Munnar (Hill Station)", description: "Drive through scenic waterfalls (Cheeyappara & Valara) to Munnar tea country. Check-in and evening at leisure in Munnar town." },
      { day: 3, title: "Munnar Full Day Tea & Nature Tour", description: "Visit Tata Tea Museum, Mattupetty Dam, Echo Point, Kundala Lake, and photo stops in emerald tea gardens." },
      { day: 4, title: "Munnar to Thekkady (Wild & Spices)", description: "Scenic drive to Thekkady. Visit aromatic spice plantations and enjoy boat ride on Periyar Lake (subject to availability)." },
      { day: 5, title: "Thekkady to Alleppey Houseboat", description: "Drive to Alleppey. Board traditional Kerala Houseboat at 12:00 PM. Cruise along backwaters with freshly cooked lunch, evening tea & dinner on board." },
      { day: 6, title: "Check-out Houseboat & Departure", description: "Enjoy morning breakfast on houseboat. Disembark and transfer to Cochin airport/railway station for departure." }
    ],
    hotelPlan: "4N Hotel Stay (Cochin, Munnar, Thekkady) + 1N Private Deluxe Houseboat.",
    meals: "Daily Breakfast at Hotels + All Meals (Lunch, Dinner, Breakfast) on Houseboat.",
    transfers: "Private AC Vehicle (Cab) dedicated for all transfers.",
    inclusions: [
      "5 Nights Accommodation (4N Hotel + 1N Houseboat)",
      "Welcome drink on arrival",
      "Houseboat with all meals (Kerala Cuisine)",
      "Private AC Sedan/SUV for all transfers",
      "Spice plantation tour entrance fee"
    ],
    exclusions: ["Airfare/Train ticket", "Periyar boat ride tickets", "Personal tips"],
    importantNotes: ["Houseboat AC operates from 9:00 PM to 6:00 AM in Deluxe category."],
    cancellationTerms: ["As per standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- GOA ---
  {
    id: "namkamal-goa-beach-escape",
    code: "NKGOA3N",
    name: "Namkamal Goa Beach Escape",
    destinationId: "goa",
    destinationName: "Goa",
    category: "domestic",
    duration: "3 Nights / 4 Days",
    durationDays: 4,
    startingPrice: "₹6,999",
    travelType: "Beach / Leisure / Nightlife / Friends & Couples",
    overview: "The perfect short sun & sand holiday featuring classic North Goa beach vibes, fort viewpoints, UNESCO churches of Old Goa, and Mandovi river cruise experience.",
    tourHighlights: [
      "Fort Aguada & Sinquerim Beach view",
      "North Goa Beaches: Baga, Calangute, Anjuna, Vagator",
      "Old Goa UNESCO World Heritage Churches",
      "Dona Paula viewpoint & Miramar Beach",
      "Mandovi River Sunset Cruise"
    ],
    sightseeingPoints: [
      "North Goa: Fort Aguada, Sinquerim, Calangute, Baga, Anjuna, Vagator",
      "South Goa: Basilica of Bom Jesus, Se Cathedral, Miramar, Dona Paula, Colva"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Goa | Leisure at Resort", description: "Arrive at Goa Airport / Railway Station. Transfer to hotel/resort. Rest & spend evening relaxing at nearest beach." },
      { day: 2, title: "North Goa Beaches & Forts Tour", description: "Full day tour covering historic Fort Aguada, Calangute Beach, Baga Beach, Anjuna cliff viewpoints and Vagator." },
      { day: 3, title: "South Goa & Heritage Sightseeing", description: "Visit UNESCO Old Goa Basilica of Bom Jesus and Se Cathedral, Dona Paula bay, Miramar beach, and evening Mandovi sunset cruise." },
      { day: 4, title: "Leisure & Departure", description: "Breakfast at resort. Check-out and transfer to airport/railway station." }
    ],
    hotelPlan: "3 Nights Accommodation in 3★ / 4★ Resort with Swimming Pool.",
    meals: "Daily Breakfast.",
    transfers: "AC Cab for airport pickup/drop + 2 Days sightseeing on PVT/SIC basis.",
    inclusions: [
      "3 Nights Stay in Resort with pool",
      "Daily Breakfast",
      "Airport / Station Pickup & Drop",
      "1 Day North Goa Sightseeing",
      "1 Day South Goa Sightseeing"
    ],
    exclusions: ["Water sports, personal entry tickets, dinner/lunch."],
    importantNotes: ["Water sports activities can be booked directly on beach."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- KASHMIR ---
  {
    id: "namkamal-kashmir-paradise",
    code: "NKJK6N",
    name: "Namkamal Kashmir Paradise",
    destinationId: "kashmir",
    destinationName: "Jammu & Kashmir",
    category: "domestic",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹14,499",
    travelType: "Honeymoon / Nature & Snow / Family Scenic",
    overview: "Witness Heaven on Earth! Enjoy romantic Shikara ride on Dal Lake, night stay in a luxury Houseboat, World-Famous Gulmarg Gondola Ride, and picturesque Betaab Valley in Pahalgam.",
    tourHighlights: [
      "1 Night Luxury Houseboat stay on Dal Lake",
      "Shikara Ride at Sunset on Dal Lake",
      "Gulmarg Gondola Ride (World's Highest Cable Car)",
      "Pahalgam: Betaab Valley, Aru Valley & Chandanwari",
      "Sonmarg Thajiwas Glacier valley excursion",
      "Srinagar Mughal Gardens (Nishat & Shalimar)"
    ],
    sightseeingPoints: [
      "Srinagar: Mughal Gardens, Dal Lake, Shikara Ride, Shankaracharya Temple",
      "Gulmarg: Gondola cable car, Gulmarg meadows, St. Mary's Church",
      "Pahalgam: Betaab Valley, Aru Valley, Chandanwari",
      "Sonmarg: Thajiwas Glacier area, Sindh Valley"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Srinagar | Shikara Ride & Houseboat Stay", description: "Arrive Srinagar airport. Transfer to luxury Houseboat on Dal Lake. Enjoy 1-hour relaxing Shikara ride during sunset." },
      { day: 2, title: "Srinagar to Gulmarg (Meadow of Flowers)", description: "Drive to Gulmarg. Enjoy famous Gondola Ride to Phase 1 & Phase 2 snow points. Visit Gulmarg golf course & church." },
      { day: 3, title: "Gulmarg to Pahalgam (Valley of Shepherds)", description: "Drive to Pahalgam via Saffron fields of Pampore and Awantipora ruins. Check in to river-side hotel." },
      { day: 4, title: "Pahalgam Valley Exploration", description: "Visit scenic Betaab Valley, Aru Valley and Chandanwari by local taxi. Evening walk along Lidder River." },
      { day: 5, title: "Pahalgam to Srinagar | Sonmarg Excursion", description: "Day trip to Sonmarg 'Meadow of Gold'. Enjoy pony ride to Thajiwas Glacier snow point. Evening return to Srinagar." },
      { day: 6, title: "Srinagar Mughal Gardens & Temple", description: "Visit Shankaracharya Temple, Nishat Bagh, Shalimar Bagh and Chashme Shahi. Shopping at Lal Chowk." },
      { day: 7, title: "Departure Srinagar", description: "Breakfast at hotel. Transfer to Srinagar Airport for departure." }
    ],
    hotelPlan: "5 Nights Hotel Stay + 1 Night Deluxe Srinagar Houseboat.",
    meals: "Daily Breakfast & Dinner (MAP Plan).",
    transfers: "Private Non-AC / AC Vehicle throughout the tour.",
    inclusions: [
      "6 Nights Accommodation (5N Hotel + 1N Houseboat)",
      "Daily Breakfast & Dinner",
      "1 Hour Shikara Ride on Dal Lake",
      "All inter-city transfers by Private Cab",
      "Driver allowance, toll, parking"
    ],
    exclusions: ["Airfare", "Gondola ride tickets (Phase 1 & 2)", "Pahalgam local union cab fee", "Sonmarg pony charges"],
    importantNotes: ["Gondola tickets must be booked online in advance."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- GUJARAT ---
  {
    id: "namkamal-gujarat-highlights",
    code: "NKGJ5N",
    name: "Namkamal Gujarat Highlights",
    destinationId: "gujarat",
    destinationName: "Gujarat",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    startingPrice: "₹10,999",
    travelType: "Pilgrimage / Heritage / Monumental Wonders",
    overview: "Discover Gujarat's proud icon: Statue of Unity (World's Tallest Statue), holy Dwarkadhish Temple, Nageshwar Jyotirlinga, Somnath Temple, and Sabarmati Ashram.",
    tourHighlights: [
      "Statue of Unity & Laser Light Show in Kevadiya",
      "Dwarkadhish Temple & Bet Dwarka Ferry",
      "Nageshwar Jyotirlinga Darshan",
      "Somnath Jyotirlinga & Evening Sound Show",
      "Sabarmati Ashram & Adalaj Stepwell in Ahmedabad"
    ],
    sightseeingPoints: [
      "Ahmedabad: Sabarmati Ashram, Adalaj Stepwell, Sidi Saiyyed Mosque",
      "Kevadiya: Statue of Unity, Valley of Flowers, Viewing Gallery",
      "Dwarka: Dwarkadhish Temple, Bet Dwarka, Nageshwar Jyotirlinga, Shivrajpur Beach",
      "Somnath: Somnath Temple, Triveni Sangam, Bhalka Tirth"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Ahmedabad & Kevadiya (Statue of Unity)", description: "Arrive Ahmedabad. Drive to Kevadiya. Visit Statue of Unity viewing gallery, Valley of Flowers & evening Light Show." },
      { day: 2, title: "Kevadiya to Dwarka Transfer", description: "Morning drive to holy city of Dwarka. Check in hotel and attend evening Aarti at Dwarkadhish Temple." },
      { day: 3, title: "Dwarka - Bet Dwarka & Nageshwar", description: "Visit Bet Dwarka by boat, Nageshwar Jyotirlinga, Rukmini Temple, and blue-flag Shivrajpur Beach." },
      { day: 4, title: "Dwarka to Somnath via Porbandar", description: "Drive to Somnath via Kirti Mandir (Gandhi ji birthplace) in Porbandar. Visit Somnath Temple & Triveni Sangam." },
      { day: 5, title: "Somnath to Ahmedabad", description: "Drive back to Ahmedabad. Visit Sabarmati Ashram, Sidi Saiyyed Mosque and Adalaj Stepwell." },
      { day: 6, title: "Departure Ahmedabad", description: "Breakfast and departure transfer to Ahmedabad Airport/Railway Station." }
    ],
    hotelPlan: "5 Nights Stay in 3★ / 4★ Hotels.",
    meals: "Daily Breakfast.",
    transfers: "Private AC Vehicle for complete circuit.",
    inclusions: ["5 Nights Accommodation", "Daily Breakfast", "Private AC Cab", "All driver allowances & parking"],
    exclusions: ["Airfare/Train ticket", "Statue of Unity entry ticket", "Boating & darshan passes"],
    importantNotes: ["Statue of Unity is closed on Mondays."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: false
  },

  // --- HIMACHAL PRADESH ---
  {
    id: "namkamal-himachal-highlights",
    code: "NKHP6N",
    name: "Namkamal Himachal Highlights",
    destinationId: "himachal-pradesh",
    destinationName: "Himachal Pradesh",
    category: "domestic",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹9,999",
    travelType: "Hill Station / Adventure / Family & Couple",
    overview: "Escape to snow-capped peaks! Explore Shimla Mall Road, Kufri pine hills, Manali scenic Solang Valley adventure hub, Hadimba Temple, and Kasol/Kullu river rafting.",
    tourHighlights: [
      "Shimla Mall Road, Ridge & Christ Church",
      "Kufri fun park & Green Valley view",
      "Manali Hadimba Temple & Vashisht Hot Springs",
      "Solang Valley snow sports & ropeway",
      "Kullu Shawl Factory & Beas River Rafting spot"
    ],
    sightseeingPoints: [
      "Shimla: Mall Road, Ridge, Christ Church, Jakhu Temple, Kufri, Green Valley",
      "Manali: Hadimba Temple, Vashisht, Manu Temple, Mall Road, Solang Valley",
      "Rohtang Pass: (Optional subject to NGT permit & weather)"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Delhi / Chandigarh | Drive to Shimla", description: "Pickup from Delhi/Chandigarh and scenic drive to Queen of Hills, Shimla. Evening stroll on Mall Road." },
      { day: 2, title: "Shimla & Kufri Excursion", description: "Visit Kufri, Green Valley, Jakhu Hanuman Temple, Christ Church, Ridge and Scandal Point." },
      { day: 3, title: "Shimla to Manali via Kullu Valley", description: "Drive to Manali along Beas River. Visit Kullu Shawl Factory & Rafting point en route." },
      { day: 4, title: "Manali Local Sightseeing", description: "Visit wooden Hadimba Temple, Vashisht Hot Water Springs, Manu Temple, and Club House." },
      { day: 5, title: "Solang Valley Adventure Day", description: "Full day excursion to Solang Valley for paragliding, zorbing, ropeway, and snow activities." },
      { day: 6, title: "Manali Leisure & Shopping", description: "Leisure day for Mall Road shopping or optional trip to Atal Tunnel / Sissu village." },
      { day: 7, title: "Manali to Delhi/Chandigarh Departure", description: "Breakfast and drive back for departure drop." }
    ],
    hotelPlan: "2 Nights Shimla + 4 Nights Manali.",
    meals: "Daily Breakfast & Dinner (MAP Plan).",
    transfers: "Private AC / Non-AC Vehicle throughout.",
    inclusions: ["6 Nights Stay", "Daily Breakfast & Dinner", "All sightseeing by Private Cab", "Tolls & parking"],
    exclusions: ["Airfare/Train", "Adventure activities charges", "Rohtang Pass NGT permit fee"],
    importantNotes: ["Rohtang Pass requires separate permits."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- UAE (DUBAI) ---
  {
    id: "namkamal-dubai-delight",
    code: "NKUAE4N",
    name: "Namkamal Dubai Delight",
    destinationId: "uae",
    destinationName: "United Arab Emirates",
    category: "international",
    duration: "4 Nights / 5 Days",
    durationDays: 5,
    startingPrice: "₹34,999",
    travelType: "International Luxury / Shopping / City & Desert",
    overview: "Experience the city of super-structures! Includes Burj Khalifa 124th floor observation deck tickets, Dubai Mall, Marina Dhow Cruise with Dinner, and thrilling 4x4 Desert Safari.",
    tourHighlights: [
      "Burj Khalifa 124/125th Floor Observation Deck Ticket",
      "Dubai Mall & Dubai Fountain Show",
      "4x4 Desert Safari with Dune Bashing, Camel Ride & BBQ Dinner",
      "Luxury Dhow Cruise on Dubai Marina with Buffet Dinner & Tanoura Show",
      "Dubai City Tour: Palm Jumeirah, Burj Al Arab photo stop, Jumeirah Beach"
    ],
    sightseeingPoints: [
      "Burj Khalifa 124/125",
      "Dubai Mall & Dubai Fountain",
      "Jumeirah Mosque & Beach",
      "Burj Al Arab (Photo stop)",
      "Palm Jumeirah & Atlantis",
      "Dubai Marina Dhow Cruise",
      "Desert Safari & BBQ Camp"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Dubai | Marina Dhow Cruise", description: "Arrive at Dubai International Airport. Transfer to hotel. In evening, board traditional Dhow Cruise on Dubai Marina with buffet dinner and live entertainment." },
      { day: 2, title: "Dubai Half Day City Tour & Burj Khalifa", description: "Explore Dubai city highlights: Jumeirah Beach, Burj Al Arab photo stop, Atlantis Palm Jumeirah. Afternoon visit Dubai Mall & go up to 124th Floor of Burj Khalifa for breathtaking views." },
      { day: 3, title: "Free Morning & Evening 4x4 Desert Safari", description: "Morning free for shopping at Gold Souk. At 3:00 PM, pickup for thrilling Desert Safari featuring dune bashing, sandboarding, camel rides, belly dance & BBQ dinner." },
      { day: 4, title: "Day at Leisure / Optional Global Village or Miracle Garden", description: "Leisure day to explore Dubai Frame, Museum of the Future, Global Village or Aquaventure Waterpark." },
      { day: 5, title: "Departure Dubai", description: "Breakfast at hotel. Free time until airport transfer for your flight home." }
    ],
    hotelPlan: "4 Nights Stay in 4★ Hotel in Bur Dubai / Deira / Al Barsha.",
    meals: "Daily Breakfast + 2 Dinners (Dhow Cruise Dinner & Desert Safari BBQ Dinner).",
    transfers: "Airport transfers & tours on Sharing / Private basis.",
    inclusions: [
      "4 Nights 4★ Hotel Stay with Breakfast",
      "Burj Khalifa 124th Floor At the Top ticket (Non-prime hours)",
      "Dubai Marina Dhow Cruise with Dinner",
      "4x4 Desert Safari with BBQ Dinner & Shows",
      "Half Day Dubai City Tour",
      "UAE Tourist Visa with Insurance"
    ],
    exclusions: ["International Flight Tickets", "Tourism Dirham Fee (payable at hotel direct)", "Personal expenses"],
    importantNotes: ["Visa processing takes 3-4 working days."],
    cancellationTerms: ["Visa fee & attraction tickets non-refundable once issued."],
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- THAILAND ---
  {
    id: "namkamal-bangkok-pattaya",
    code: "NKTHA5N",
    name: "Namkamal Bangkok Pattaya",
    destinationId: "thailand",
    destinationName: "Thailand",
    category: "international",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    startingPrice: "₹24,999",
    travelType: "International Beach & City / Nightlife & Temples",
    overview: "Thailand's classic gateway! Enjoy Pattaya's pristine Coral Island speed boat tour, Alcazar Show, Bangkok City Temples (Marble & Golden Buddha), and shopping in MBK / CentralWorld.",
    tourHighlights: [
      "Speedboat Coral Island tour in Pattaya with Lunch",
      "Alcazar Cabaret Show entry",
      "Bangkok City Temple Tour (Wat Traimit & Wat Pho)",
      "Chao Phraya River view & Shopping districts",
      "All transfers included"
    ],
    sightseeingPoints: [
      "Bangkok: Wat Pho, Wat Traimit (Golden Buddha), Chao Phraya River",
      "Pattaya: Coral Island, Alcazar Show, Sanctuary of Truth, Beach Road",
      "Shopping: MBK / CentralWorld / Pratunam Market"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Bangkok | Transfer to Pattaya", description: "Arrive Bangkok Suvarnabhumi/Don Mueang Airport. Transfer to Pattaya resort. Evening walk on Pattaya Beach Road." },
      { day: 2, title: "Coral Island Speedboat Tour", description: "Speedboat ride to Coral Island (Koh Larn). Enjoy crystal waters, sea swimming, and optional water sports. Indian lunch included." },
      { day: 3, title: "Pattaya to Bangkok Transfer & Temple Tour", description: "Drive to Bangkok. En route visit Golden Buddha Temple (Wat Traimit) and Reclining Buddha (Wat Pho). Check-in at Bangkok hotel." },
      { day: 4, title: "Bangkok Free Day for Shopping", description: "Full day free to explore MBK Center, Platinum Fashion Mall, CentralWorld, and Siam Paragon." },
      { day: 5, title: "Optional Safari World & Marine Park", description: "Optional full day trip to Safari World & Marine Park with animal shows and buffet lunch." },
      { day: 6, title: "Departure Bangkok", description: "Breakfast, check-out, and transfer to airport for departure." }
    ],
    hotelPlan: "2 Nights Pattaya + 3 Nights Bangkok in 3★ / 4★ Hotels.",
    meals: "Daily Breakfast + 1 Indian Lunch at Coral Island.",
    transfers: "AC Cab / Coach transfers.",
    inclusions: ["5 Nights Accommodation", "Daily Breakfast & 1 Lunch", "Coral Island tour by Speedboat", "Bangkok City Temple Tour", "Airport transfers"],
    exclusions: ["Airfare", "Thailand Visa fee (On arrival or e-visa)", "Personal water sports"],
    importantNotes: ["Indian passport holders get Visa on Arrival / Fee waiver per Govt policy."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- BALI ---
  {
    id: "namkamal-bali-bliss",
    code: "NKBAL5N",
    name: "Namkamal Bali Bliss",
    destinationId: "bali",
    destinationName: "Indonesia (Bali)",
    category: "international",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    startingPrice: "₹29,999",
    travelType: "Honeymoon & Romantic / Island Beach & Culture",
    overview: "Tropical romantic getaway featuring Kintamani Volcano view, Tegallalang Rice Terrace Swing, Nusa Penida West island tour (Kelingking Beach), and Uluwatu Temple Sunset.",
    tourHighlights: [
      "Full Day Kintamani Volcano & Tegallalang Rice Terraces",
      "Famous Bali Jungle Swing photo experience",
      "Nusa Penida West Island Tour: Kelingking T-Rex Beach, Broken Beach, Angel's Billabong",
      "Uluwatu Sunset Temple & Jimbaran Beach Seafood Dinner"
    ],
    sightseeingPoints: [
      "Ubud: Ubud Palace, Saraswati Temple, Tegallalang Rice Terrace, Swing",
      "Kintamani: Mount Batur viewpoint",
      "Nusa Penida: Kelingking Beach, Broken Beach, Angel's Billabong",
      "South Bali: Uluwatu Temple, Kecak Dance, Jimbaran Bay"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Bali | Sunset Leisure", description: "Warm Swastyastu welcome at Denpasar Airport. Transfer to luxury villa / hotel. Evening free to relax." },
      { day: 2, title: "Kintamani Volcano, Ubud & Bali Swing", description: "Visit Mount Batur view at Kintamani, Ubud art village, Tegallalang Rice Terraces, and famous Bali Swing." },
      { day: 3, title: "Nusa Penida Island Excursion", description: "Speedboat ride to Nusa Penida. Visit iconic Kelingking Beach (T-Rex Cliff), Broken Beach & Angel's Billabong with local lunch." },
      { day: 4, title: "Uluwatu Cliff Temple & Jimbaran Dinner", description: "Visit Uluwatu Temple perched on a 70m cliff over Indian Ocean. Enjoy romantic sunset dinner on Jimbaran Beach." },
      { day: 5, title: "Free Day for Water Sports or Spa", description: "Day free for Benoa water sports (Banana Boat, Jet Ski) or Balinese massage spa treatment." },
      { day: 6, title: "Departure Bali", description: "Breakfast, souvenir shopping at Krisna Souvenir Center, transfer to airport." }
    ],
    hotelPlan: "3N Ubud Hotel / Resort + 2N Private Pool Villa / Beach Hotel.",
    meals: "Daily Breakfast + 2 Special Lunches/Dinners.",
    transfers: "Private AC Car with English-speaking Balinese driver guide.",
    inclusions: [
      "5 Nights Accommodation",
      "Daily Breakfast",
      "Kintamani & Ubud Tour with Swing",
      "Nusa Penida Tour with Speedboat & Lunch",
      "Uluwatu Sunset Tour",
      "Private transfers throughout"
    ],
    exclusions: ["Airfare", "Bali VOA (approx 500,000 IDR)", "Personal expenses"],
    importantNotes: ["Nusa Penida includes fast boat transfers."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- SINGAPORE ---
  {
    id: "namkamal-singapore-highlights",
    code: "NKSG4N",
    name: "Namkamal Singapore Highlights",
    destinationId: "singapore",
    destinationName: "Singapore",
    category: "international",
    duration: "4 Nights / 5 Days",
    durationDays: 5,
    startingPrice: "₹39,999",
    travelType: "International Family & Futuristic City Tour",
    overview: "Explore Asia's greenest metropolis! Features Gardens by the Bay (Flower Dome & Cloud Forest), Sentosa Island Cable Car & Wings of Time, Universal Studios option, and Night Safari.",
    tourHighlights: [
      "Gardens by the Bay (Avatar Glass Domes)",
      "Sentosa Island Cable Car + Wings of Time Laser Show",
      "Singapore City Tour: Merlion Park, Marina Bay Sands, Chinatown",
      "Optional Universal Studios full day pass"
    ],
    sightseeingPoints: [
      "Marina Bay Sands & Merlion Park",
      "Gardens by the Bay (Flower Dome + Cloud Forest)",
      "Sentosa Cable Car & Wings of Time",
      "Universal Studios Singapore (Optional)"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Singapore | Night Safari", description: "Arrive Singapore Changi Airport. Transfer to hotel. Evening pickup for world-first Night Safari tram tour." },
      { day: 2, title: "City Tour & Gardens by the Bay", description: "Photo stop at Merlion Park, Civic District, Chinatown. Afternoon visit Gardens by the Bay Flower Dome & Cloud Forest." },
      { day: 3, title: "Sentosa Island Experience", description: "Afternoon transfer to Sentosa via scenic Cable Car. Visit Madame Tussauds, Siloso beach and watch spectacular Wings of Time laser light show." },
      { day: 4, title: "Universal Studios Full Day (Optional)", description: "Day free or optional full day fun at Universal Studios Singapore featuring Transformers 3D ride, Battlestar Galactica rollercoasters." },
      { day: 5, title: "Jewel Changi & Departure", description: "Breakfast, check-out and visit Jewel Changi Rain Vortex waterfall before flight back." }
    ],
    hotelPlan: "4 Nights Stay in 4★ City Hotel.",
    meals: "Daily Breakfast.",
    transfers: "AC Coach / Private transfers.",
    inclusions: ["4 Nights 4★ Stay", "Daily Breakfast", "Night Safari ticket", "Gardens by the Bay 2 Domes", "Sentosa Cable Car + Wings of Time"],
    exclusions: ["Airfare", "Singapore Tourist Visa", "Universal Studios tickets"],
    importantNotes: ["Changi airport is consistently voted World's Best Airport."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: false
  },

  // --- MALDIVES ---
  {
    id: "namkamal-maldives-escape",
    code: "NKMDV4N",
    name: "Namkamal Maldives Escape",
    destinationId: "maldives",
    destinationName: "Maldives",
    category: "international",
    duration: "4 Nights / 5 Days",
    durationDays: 5,
    startingPrice: "₹49,999",
    travelType: "Luxury Honeymoon / Overwater Villa / Island Paradise",
    overview: "Pure luxury amidst turquoise waters! Stay in iconic overwater villas with all-inclusive meal plan, speedboat airport transfers, complimentary snorkeling equipment, and sunset cruise.",
    tourHighlights: [
      "Stay in Deluxe Beach Villa / Water Villa with ocean view",
      "Roundtrip Speedboat airport transfers",
      "Full Board Meal Plan (Breakfast, Lunch & Dinner)",
      "Complimentary snorkeling gear & water gear access",
      "Honeymoon freebies (Bed decoration, fruit basket, candlelit dinner)"
    ],
    sightseeingPoints: [
      "Private Island Lagoon & Coral Reefs",
      "Water Sports & Snorkeling",
      "Dolphin Watching Cruise"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Male | Speedboat to Island Resort", description: "Arrive Velana International Airport in Male. Warm greeting and speedboat transfer to private island resort. Check into your villa." },
      { day: 2, title: "Beach Bliss & Snorkeling", description: "Enjoy infinity pool, turquoise lagoon, free snorkeling gear to explore colorful house reef." },
      { day: 3, title: "Overwater Villa Experience & Sunset", description: "Experience iconic Overwater Villa living. Enjoy sunset views right from your private sun deck." },
      { day: 4, title: "Spa & Water Sports Leisure", description: "Relax with Balinese spa treatment or enjoy jet-skiing and paddle boarding." },
      { day: 5, title: "Departure Male", description: "Breakfast, speedboat transfer to Male airport for flight home." }
    ],
    hotelPlan: "4 Nights Resort Stay (2N Beach Villa + 2N Water Villa).",
    meals: "Full Board (Breakfast, Lunch, Dinner).",
    transfers: "Roundtrip Speedboat Airport Transfers.",
    inclusions: ["4 Nights Stay", "Full Board Meals", "Roundtrip Speedboat transfers", "All Maldives taxes & Green tax"],
    exclusions: ["International Flight Tickets", "Motorized water sports", "Personal expenses"],
    importantNotes: ["Free Visa on Arrival for Indian passport holders (30 days)."],
    cancellationTerms: ["Resort policy applies."],
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- SWITZERLAND ---
  {
    id: "namkamal-switzerland-panorama",
    code: "NKSWI6N",
    name: "Namkamal Switzerland Panorama",
    destinationId: "switzerland",
    destinationName: "Switzerland",
    category: "international",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹89,999",
    travelType: "Alpine Scenic / Luxury Europe / Lakes & Snow",
    overview: "The Swiss dream holiday! Experience Mt. Titlis Rotair revolving cable car, Ice Flyer snow park, Lake Lucerne cruise, Interlaken & Jungfraujoch Top of Europe excursion.",
    tourHighlights: [
      "Mount Titlis Cable Car with Rotair & Ice Flyer",
      "Lucerne Chapel Bridge & Lion Monument walk",
      "Scenic Swiss Rail / Private Coach transfers",
      "Interlaken & option for Jungfraujoch (Top of Europe)",
      "Zurich Old Town & Lake Zurich promenade"
    ],
    sightseeingPoints: [
      "Zurich: Old Town, Bahnhofstrasse, Lake Zurich",
      "Lucerne: Chapel Bridge, Lion Monument, Lake Lucerne",
      "Mount Titlis: Rotair cable car, Cliff Walk",
      "Interlaken: Hohematte, Harder Kulm"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Zurich | Transfer to Lucerne", description: "Arrive Zurich International Airport. Board train/coach to Lucerne. Check in hotel and enjoy walk by Chapel Bridge." },
      { day: 2, title: "Mt. Titlis Snow Mountain Excursion", description: "Full day trip to Engelberg and Mt. Titlis via world's first revolving cable car 'Rotair'. Walk on Titlis Cliff Walk bridge." },
      { day: 3, title: "Lucerne to Interlaken via Golden Pass route", description: "Travel along emerald lakes to Interlaken tucked between Lake Thun and Lake Brienz." },
      { day: 4, title: "Interlaken | Optional Jungfraujoch (Top of Europe)", description: "Day free to explore Interlaken or optional cogwheel train ride to Jungfraujoch (3,454m height) with Sphinx observatory." },
      { day: 5, title: "Interlaken to Zurich", description: "Return to Zurich. Enjoy shopping on world-famous Bahnhofstrasse and cruise on Lake Zurich." },
      { day: 6, title: "Rhine Falls Day Trip", description: "Visit Rhine Falls at Neuhausen – Europe's largest waterfall." },
      { day: 7, title: "Departure Zurich", description: "Breakfast, check-out and transfer to Zurich Airport for flight back." }
    ],
    hotelPlan: "2N Lucerne + 2N Interlaken + 2N Zurich 3★ / 4★ Hotels.",
    meals: "Daily Breakfast.",
    transfers: "Swiss Travel Pass 8 Days OR Private Coach.",
    inclusions: ["6 Nights Hotel Accommodation", "Daily Breakfast", "Mt. Titlis Cable Car Ticket", "Swiss Pass or Coach transfers"],
    exclusions: ["Airfare", "Schengen Visa Fee", "Jungfraujoch ticket top-up"],
    importantNotes: ["Schengen visa processing requires 15-20 working days."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  }
];
