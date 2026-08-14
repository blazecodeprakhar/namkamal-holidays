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
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
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
  },

  // --- HIMACHAL (NEW) ---
  {
    id: "namkamal-himachal-snow-escape",
    code: "NKHIM5N",
    name: "Namkamal Himachal Snow Escape",
    destinationId: "himachal-pradesh",
    destinationName: "Himachal Pradesh",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    startingPrice: "₹12,999",
    travelType: "Mountain Hills / Snow Adventure / Family & Friends",
    overview: "Explore Himachal's most iconic hill stations! Covers colonial Shimla, Kufri snow viewpoint, scenic Kullu Valley rafting point, Solang Valley adventure sports, and Atal Tunnel excursion.",
    tourHighlights: [
      "Shimla Mall Road & Ridge Walk",
      "Kufri fun world & Himalayan Nature Park",
      "Solang Valley Snow Sports (Paragliding, Skiing, Zorbing)",
      "Atal Tunnel & Sissu (Lahaul Valley photo stop)",
      "Hadimba Temple & Vashisht Hot Water Springs in Manali"
    ],
    sightseeingPoints: [
      "Shimla: Mall Road, Ridge, Christ Church, Kufri",
      "Kullu: Kullu Shawl Factory, River Rafting point",
      "Manali: Hadimba Temple, Vashisht Springs, Solang Valley, Atal Tunnel, Club House"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Delhi / Chandigarh Pickup | Drive to Shimla", description: "Pickup from Delhi/Chandigarh and scenic drive up to Shimla hill station. Check-in at hotel. Evening walk on famous Shimla Mall Road & Ridge." },
      { day: 2, title: "Shimla & Kufri Excursion", description: "Visit Kufri snow point, Himalayan Nature Park, and Green Valley viewpoint. Afternoon visit Jakhoo Temple and Christ Church." },
      { day: 3, title: "Shimla to Manali via Kullu Valley", description: "Drive to Manali along Beas River. En route stop at Kullu Shawl factory, Vaishno Devi temple, and optional river rafting." },
      { day: 4, title: "Solang Valley & Atal Tunnel Adventure", description: "Full day excursion to Solang Valley for adventure activities (Paragliding, Quad Biking, Cable Car). Drive through engineering marvel Atal Tunnel to Sissu." },
      { day: 5, title: "Manali Local Sightseeing", description: "Visit 450-year-old Hadimba Devi Temple, Vashisht Hot Springs, Tibetan Monastery, and Manali Mall Road for evening shopping." },
      { day: 6, title: "Departure to Delhi / Chandigarh", description: "Breakfast, check-out and scenic drive back to Chandigarh/Delhi for return journey." }
    ],
    hotelPlan: "2 Nights Shimla + 3 Nights Manali in 3★ / 4★ Mountain Resorts.",
    meals: "Daily Breakfast & Daily Dinner (MAP Plan included).",
    transfers: "Private AC Cab (Dzire / Etios / Innova) for all 6 days.",
    inclusions: ["5 Nights Accommodation", "Breakfast & Dinner daily", "Private Cab for all transfers & sightseeing", "Tolls, Parking, Driver allowances"],
    exclusions: ["Airfare/Train fare", "Adventure activities tickets (Paragliding, Skiing)", "Rohtang Pass permit (if opted)"],
    importantNotes: ["Solang Valley snow activities subject to weather conditions."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- KASHMIR HONEYMOON (NEW) ---
  {
    id: "namkamal-kashmir-honeymoon-special",
    code: "NKJK5N",
    name: "Namkamal Kashmir Honeymoon & Snow Special",
    destinationId: "kashmir",
    destinationName: "Jammu & Kashmir",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    startingPrice: "₹16,999",
    travelType: "Romantic Honeymoon / Snow Mountains & Houseboat",
    overview: "Unforgettable romance in Paradise! Stay in a luxury Dal Lake Houseboat with private Shikara ride, experience Gulmarg Gondola Cable Car Ride, and explore Pahalgam's Betaab Valley.",
    tourHighlights: [
      "1 Night Luxury Houseboat Stay on Dal Lake with Shikara Ride",
      "Gulmarg Gondola Ride Phase 1 & 2 Cable Car to Apharwat Peak",
      "Pahalgam Betaab Valley, Aru Valley & Chandanwari",
      "Mughal Gardens: Nishat Bagh & Shalimar Bagh in Srinagar"
    ],
    sightseeingPoints: [
      "Srinagar: Dal Lake, Houseboat, Nishat Bagh, Shalimar Bagh, Shankaracharya Temple",
      "Gulmarg: Meadow of Flowers, Gondola Cable Car, Golf Course",
      "Pahalgam: Valley of Shepherds, Betaab Valley, Aru Valley, Baisaran Valley"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Srinagar | Shikara Ride on Dal Lake", description: "Arrive Srinagar Airport. Warm welcome & transfer to luxury Houseboat on Dal Lake. Enjoy romantic 1-hour Shikara ride at sunset." },
      { day: 2, title: "Srinagar to Gulmarg Snow Excursion", description: "Drive to Gulmarg ('Meadow of Flowers'). Ride famous Gulmarg Gondola cable car up to Apharwat snow peak. Overnight in Gulmarg hotel." },
      { day: 3, title: "Gulmarg to Pahalgam (Valley of Shepherds)", description: "Scenic drive to Pahalgam along saffron fields of Pampore and Awantipora ruins. Check-in at riverside resort." },
      { day: 4, title: "Pahalgam Betaab & Aru Valley Exploration", description: "Visit Betaab Valley (named after movie Betaab), Aru Valley, and Chandanwari. Optional pony ride to Baisaran (Mini Switzerland)." },
      { day: 5, title: "Pahalgam to Srinagar | Mughal Gardens", description: "Return to Srinagar. Visit historic Nishat Bagh, Shalimar Bagh, Pari Mahal, and Shankaracharya Hill Temple overlooking Dal Lake." },
      { day: 6, title: "Departure Srinagar", description: "Breakfast, souvenir shopping for Kashmiri Shawls & Dry Fruits, transfer to Srinagar Airport." }
    ],
    hotelPlan: "1N Srinagar Houseboat + 1N Gulmarg + 1N Pahalgam + 2N Srinagar Hotel.",
    meals: "Daily Breakfast & Daily Dinner (MAP Plan).",
    transfers: "Private AC Cab for all airport pickups, drops, and inter-city transfers.",
    inclusions: ["5 Nights Accommodation", "Daily Breakfast & Dinner", "1 Hour Sunset Shikara Ride on Dal Lake", "Private vehicle transfers"],
    exclusions: ["Airfare", "Gulmarg Gondola tickets", "Pahalgam local union cab / pony charges"],
    importantNotes: ["Gondola tickets must be pre-booked online."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- RAJASTHAN MOUNT ABU (NEW) ---
  {
    id: "namkamal-udaipur-mount-abu",
    code: "NKRAJ4N-UDA",
    name: "Namkamal Udaipur & Mount Abu Haven",
    destinationId: "rajasthan",
    destinationName: "Rajasthan",
    category: "domestic",
    duration: "4 Nights / 5 Days",
    durationDays: 5,
    startingPrice: "₹11,499",
    travelType: "Lake City & Hill Station / Heritage Couple & Family",
    overview: "Combine Rajasthan's romantic Lake City Udaipur with Rajasthan's only hill station Mount Abu! Enjoy boat rides on Lake Pichola and Nakki Lake with Dilwara Jain Temple architecture.",
    tourHighlights: [
      "Udaipur City Palace & Lake Pichola sunset boat ride",
      "Jagdish Temple & Saheliyon Ki Bari royal gardens",
      "Mount Abu Nakki Lake & Sunset Point walk",
      "Dilwara Jain Temples intricate marble carvings"
    ],
    sightseeingPoints: [
      "Udaipur: City Palace, Lake Pichola, Saheliyon-ki-Bari, Fateh Sagar, Karni Mata Cable Car",
      "Mount Abu: Dilwara Temples, Nakki Lake, Sunset Point, Guru Shikhar Peak"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Udaipur | Lake Pichola Evening", description: "Arrive Udaipur Railway Station/Airport. Check in at hotel. Evening boat ride on Lake Pichola with view of Jag Mandir Palace." },
      { day: 2, title: "Udaipur Royal City Tour", description: "Explore magnificent Udaipur City Palace museum, Jagdish Temple, Crystal Gallery, Saheliyon-ki-Bari and Fateh Sagar Lake." },
      { day: 3, title: "Udaipur to Mount Abu Hill Station", description: "Scenic drive up to Mount Abu. Check in at hotel. Evening walk by Nakki Lake and view sunset from Sunset Point." },
      { day: 4, title: "Mount Abu Marble Temples & Peaks", description: "Visit world-famous Dilwara Jain Temples carved in white marble, Guru Shikhar (highest peak of Aravallis), and Achalgarh Fort." },
      { day: 5, title: "Departure Transfer", description: "Breakfast, check-out and transfer to Abu Road railway station or Udaipur airport for departure." }
    ],
    hotelPlan: "2 Nights Udaipur + 2 Nights Mount Abu in 3★ / 4★ Hotels.",
    meals: "Daily Breakfast.",
    transfers: "Private AC Cab for transfers & sightseeing.",
    inclusions: ["4 Nights Stay", "Daily Breakfast", "Private AC Cab transfers", "Tolls & parking"],
    exclusions: ["Airfare/Train fare", "Boat ride tickets", "Entry fees"],
    importantNotes: ["Mount Abu is pleasant year-round."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: false
  },

  // --- WAYANAD & COORG (NEW) ---
  {
    id: "namkamal-coorg-wayanad-trail",
    code: "NKSOU5N",
    name: "Namkamal Coorg & Wayanad Coffee Trail",
    destinationId: "kerala",
    destinationName: "Karnataka & Kerala",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    startingPrice: "₹13,499",
    travelType: "Nature Hills / Coffee Plantations / Waterfalls & Wildlife",
    overview: "Escape into the misty Western Ghats! Explore Coorg's aromatic coffee estates & Abbey Falls, Dubare Elephant Camp, and Wayanad's Banasura Sagar Dam & Edakkal Caves.",
    tourHighlights: [
      "Coorg Abbey Falls & Raja's Seat sunset viewpoint",
      "Dubare Elephant Camp interaction",
      "Bylakuppe Golden Temple (Largest Tibetan Monastery)",
      "Banasura Sagar Dam (Largest Earth Dam in India) & Edakkal Caves"
    ],
    sightseeingPoints: [
      "Coorg: Abbey Falls, Raja's Seat, Dubare Elephant Camp, Namdroling Monastery",
      "Wayanad: Banasura Sagar Dam, Edakkal Caves, Chembra Peak view, Lakkidi Viewpoint"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Bangalore / Mysore Pickup | Drive to Coorg", description: "Pickup from Bangalore/Mysore. En route visit Golden Temple Tibetan Monastery at Bylakuppe. Arrive Coorg, check in at resort." },
      { day: 2, title: "Coorg Sightseeing", description: "Visit Abbey Waterfalls, Omkareshwara Temple, Madikeri Fort, and sunset at Raja's Seat." },
      { day: 3, title: "Elephant Camp & Transfer to Wayanad", description: "Visit Dubare Elephant Camp on Cauvery river. Drive across Kerala border into lush Wayanad." },
      { day: 4, title: "Wayanad Wonders Tour", description: "Explore ancient Edakkal Caves with prehistoric rock etchings, Wayanad Heritage Museum, and Lakkidi Viewpoint." },
      { day: 5, title: "Banasura Dam & Tea Estates", description: "Visit Banasura Sagar Dam (enjoy speed boating), Karlad Lake, and tea plantation walks." },
      { day: 6, title: "Departure to Calicut / Mysore", description: "Breakfast, check-out and transfer to Calicut (Kozhikode) airport/railway station or Mysore." }
    ],
    hotelPlan: "2 Nights Coorg + 3 Nights Wayanad in 3★ / 4★ Nature Resorts.",
    meals: "Daily Breakfast.",
    transfers: "Private AC Sedan / SUV cab throughout.",
    inclusions: ["5 Nights Accommodation", "Daily Breakfast", "Private Vehicle for transfers & tours"],
    exclusions: ["Boating & entry tickets", "Personal expenses"],
    importantNotes: ["Edakkal Caves requires a short uphill walk."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: false
  },

  // --- GUJARAT RANN & SOMNATH (NEW) ---
  {
    id: "namkamal-gujarat-rann-jyotirlinga",
    code: "NKGUJ6N",
    name: "Namkamal Gujarat Jyotirlinga & Rann Utsav",
    destinationId: "gujarat",
    destinationName: "Gujarat",
    category: "domestic",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹15,999",
    travelType: "Spiritual Pilgrimage / White Desert Festival / Heritage",
    overview: "Complete Gujarat circuit! Features world's tallest Statue of Unity (182m), sacred Somnath & Dwarka Jyotirlinga temples, and sunset over the magical White Rann of Kutch.",
    tourHighlights: [
      "Statue of Unity Viewing Gallery Ticket & Light Show",
      "Somnath Temple Evening Light & Sound Show on Arabian Sea",
      "Dwarkadhish Temple & Nageshwar Jyotirlinga Darshan",
      "White Rann of Kutch sunset & Bhuj handicraft villages"
    ],
    sightseeingPoints: [
      "Kevadia: Statue of Unity, Valley of Flowers, Sardar Sarovar Dam",
      "Somnath: Somnath Temple, Triveni Sangam, Bhalka Tirth",
      "Dwarka: Dwarkadhish Temple, Nageshwar Jyotirlinga, Bet Dwarka, Rukmini Temple",
      "Kutch: White Rann, Kalo Dungar, Bhuj Fort, Handicraft Village"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Ahmedabad Pickup | Transfer to Statue of Unity", description: "Pickup at Ahmedabad airport/station. Drive to Kevadia (Statue of Unity). Visit 182m tall Statue of Unity & Laser Show." },
      { day: 2, title: "Kevadia to Somnath", description: "Drive to sacred coastal town Somnath. Check in, attend evening Aarti and Somnath temple illumination." },
      { day: 3, title: "Somnath to Dwarka via Porbandar", description: "En route visit Kirti Mandir (Gandhi's birthplace) in Porbandar. Continue to holy city Dwarka." },
      { day: 4, title: "Dwarka Darshan & Bet Dwarka", description: "Morning darshan at Dwarkadhish Temple. Visit Nageshwar Jyotirlinga, Gopi Talav, and boat ride to Bet Dwarka island." },
      { day: 5, title: "Dwarka to Bhuj (Gateway to Kutch)", description: "Drive to Bhuj. Visit Aina Mahal and Prag Mahal. Evening stroll in handicraft market." },
      { day: 6, title: "White Rann of Kutch Excursion", description: "Visit Kalo Dungar (Black Hill) for view of Great Rann. Afternoon enter White Salt Desert for unforgettable sunset." },
      { day: 7, title: "Departure Bhuj / Ahmedabad", description: "Breakfast, check-out and drop at Bhuj or Ahmedabad airport/railway station." }
    ],
    hotelPlan: "1N Kevadia + 1N Somnath + 2N Dwarka + 2N Bhuj / Rann Resort.",
    meals: "Daily Breakfast + 1 Dinner.",
    transfers: "Private AC Vehicle throughout.",
    inclusions: ["6 Nights Stay", "Daily Breakfast", "Statue of Unity basic ticket", "Private AC vehicle"],
    exclusions: ["Airfare/Train fare", "Viewing gallery express ticket top-up", "Bet Dwarka boat ticket"],
    importantNotes: ["White Rann is best visited from Nov to Mar."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- GOLDEN TRIANGLE (NEW) ---
  {
    id: "namkamal-golden-triangle-classic",
    code: "NKDEL5N",
    name: "Namkamal Golden Triangle Classic",
    destinationId: "rajasthan",
    destinationName: "Delhi, Agra & Jaipur",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    startingPrice: "₹14,999",
    travelType: "Golden Heritage Triangle / Monument Tour / First Time India",
    overview: "India's legendary Golden Triangle! Experience Delhi's Mughal monuments, Agra's breathtaking Taj Mahal at sunrise, and Jaipur's royal Pink City forts.",
    tourHighlights: [
      "Sunrise visit to Taj Mahal (UNESCO World Wonder)",
      "Agra Fort & Fatehpur Sikri deserted Mughal city",
      "Delhi Red Fort, Qutub Minar, Humayun's Tomb & India Gate",
      "Jaipur Amber Fort & City Palace guided tour"
    ],
    sightseeingPoints: [
      "Delhi: Qutub Minar, Humayun's Tomb, India Gate, Lotus Temple, Red Fort",
      "Agra: Taj Mahal, Agra Fort, Fatehpur Sikri",
      "Jaipur: Amber Fort, City Palace, Hawa Mahal, Jantar Mantar"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Delhi | Capital City Tour", description: "Arrive Delhi airport/station. Visit Qutub Minar, Humayun's Tomb, drive past India Gate and President House." },
      { day: 2, title: "Delhi to Agra | Agra Fort Tour", description: "Drive to Agra via Yamuna Expressway. Visit red sandstone Agra Fort and Mehtab Bagh sunset view of Taj Mahal." },
      { day: 3, title: "Taj Mahal Sunrise | Drive to Jaipur via Fatehpur Sikri", description: "Early morning sunrise visit to iconic Taj Mahal. Post breakfast drive to Jaipur, visiting UNESCO Fatehpur Sikri en route." },
      { day: 4, title: "Jaipur Pink City Heritage", description: "Explore Amber Fort, Jal Mahal, City Palace, Jantar Mantar observatory, and photo stop at Hawa Mahal." },
      { day: 5, title: "Jaipur Bazaars & Cultural Evening", description: "Free day for souvenir shopping in Johari Bazaar or optional visit to Chokhi Dhani ethnic village." },
      { day: 6, title: "Departure Delhi / Jaipur", description: "Breakfast and transfer to Jaipur or Delhi airport/station for departure." }
    ],
    hotelPlan: "1N Delhi + 1N Agra + 3N Jaipur 3★ / 4★ Hotels.",
    meals: "Daily Buffet Breakfast.",
    transfers: "Private AC Sedan / SUV for entire circuit.",
    inclusions: ["5 Nights Hotel Stay", "Daily Breakfast", "Private AC Vehicle", "All tolls & parking"],
    exclusions: ["Airfare/Train fare", "Taj Mahal & monument entry tickets", "Guides"],
    importantNotes: ["Taj Mahal is closed on Fridays."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- ANDAMAN (NEW) ---
  {
    id: "namkamal-andaman-tropical-escape",
    code: "NKAND4N",
    name: "Namkamal Andaman Tropical Escape",
    destinationId: "andaman",
    destinationName: "Andaman Islands",
    category: "domestic",
    duration: "4 Nights / 5 Days",
    durationDays: 5,
    startingPrice: "₹19,999",
    travelType: "Tropical Beach / Island Hopping / Coral Reef Snorkeling",
    overview: "Tropical paradise in the Bay of Bengal! Visit historic Cellular Jail in Port Blair, ferry cruise to Havelock Island, and relax on world-rated Radhanagar Beach.",
    tourHighlights: [
      "Cellular Jail Light & Sound Show in Port Blair",
      "High-Speed Cruise ferry to Havelock Island",
      "Radhanagar Beach (Voted Asia's Best Beach by TripAdvisor)",
      "Elephant Beach complimentary Snorkeling experience"
    ],
    sightseeingPoints: [
      "Port Blair: Cellular Jail, Corbyn's Cove Beach, Ross Island, Flag Point",
      "Havelock: Radhanagar Beach, Elephant Beach, Kalapathar Beach"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Port Blair | Cellular Jail & Sound Show", description: "Arrive Veer Savarkar Airport Port Blair. Visit historic Cellular Jail and watch light & sound show in evening." },
      { day: 2, title: "Port Blair to Havelock Island via Cruise", description: "Board high-speed catamaran cruise to Havelock Island. Check in at beach resort. Afternoon relax on famous Radhanagar Beach." },
      { day: 3, title: "Elephant Beach Snorkeling & Coral Tour", description: "Speedboat ride to Elephant Beach. Enjoy complimentary snorkeling session among vibrant living corals." },
      { day: 4, title: "Havelock to Port Blair | Ross Island Tour", description: "Return cruise to Port Blair. Afternoon trip to Ross Island (ancient British capital ruins)." },
      { day: 5, title: "Departure Port Blair", description: "Breakfast, check-out and airport transfer for flight home." }
    ],
    hotelPlan: "2N Port Blair + 2N Havelock Island Beach Resort.",
    meals: "Daily Breakfast.",
    transfers: "Private AC Cab on islands + AC Luxury Ferry tickets.",
    inclusions: ["4 Nights Stay", "Daily Breakfast", "Port Blair - Havelock inter-island cruise tickets", "Private cab transfers"],
    exclusions: ["Airfare", "Water sports (Scuba diving, Sea Walk)", "Personal expenses"],
    importantNotes: ["Ferry seats subject to availability at time of booking."],
    cancellationTerms: ["Ferry tickets non-refundable."],
    gallery: [
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- LADAKH (NEW) ---
  {
    id: "namkamal-ladakh-high-pass-expedition",
    code: "NKLAD6N",
    name: "Namkamal Ladakh High Pass Expedition",
    destinationId: "ladakh",
    destinationName: "Leh Ladakh",
    category: "domestic",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹22,999",
    travelType: "High Altitude Adventure / Pangong Lake / Double Hump Camel",
    overview: "The ultimate bucket list journey! Cross Khardung La pass (17,582 ft), stay overnight by blue Pangong Tso Lake, ride double-hump Bactrian camels in Nubra Valley sand dunes.",
    tourHighlights: [
      "Pangong Tso Lake overnight stay (3 Idiots movie climax spot)",
      "Drive across Khardung La Pass (World's highest motorable road)",
      "Nubra Valley Hunder Sand Dunes Double Hump Camel Ride",
      "Diskit Monastery 106ft Maitreya Buddha Statue",
      "Magnetic Hill & Confluence of Indus & Zanskar rivers"
    ],
    sightseeingPoints: [
      "Leh: Shanti Stupa, Leh Palace, Hall of Fame, Magnetic Hill, Sangam",
      "Nubra Valley: Khardung La, Diskit Monastery, Hunder Sand Dunes",
      "Pangong: Chang La Pass, Pangong Tso Lake"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Leh | Acclimatization Day", description: "Arrive Kushok Bakula Rimpoche Airport Leh. Transfer to hotel. Rest full day for mandatory high-altitude acclimatization." },
      { day: 2, title: "Leh Local Sightseeing", description: "Visit Hall of Fame, Magnetic Hill, Gurudwara Pathar Sahib, and Indus-Zanskar River Confluence (Sangam). Evening Shanti Stupa sunset." },
      { day: 3, title: "Leh to Nubra Valley via Khardung La Pass", description: "Drive over snow-clad Khardung La Pass (17,582 ft). Visit Diskit Monastery and enjoy camel safari at Hunder Sand Dunes. Camp overnight." },
      { day: 4, title: "Nubra Valley to Pangong Lake via Shyok Route", description: "Scenic drive along Shyok river to turquoise Pangong Tso Lake. Check in at deluxe lake camps." },
      { day: 5, title: "Pangong Lake Sunrise to Leh via Chang La", description: "Breathtaking sunrise at Pangong Lake. Return drive to Leh crossing Chang La Pass (17,590 ft)." },
      { day: 6, title: "Leh Leisure / Souvenir Shopping", description: "Free day in Leh market for Pashmina shawls, Tibetan prayer wheels, and dry fruits." },
      { day: 7, title: "Departure Leh", description: "Early morning transfer to Leh airport for flight back." }
    ],
    hotelPlan: "4 Nights Leh Hotel + 1 Night Nubra Camp + 1 Night Pangong Lake Camp.",
    meals: "Daily Breakfast & Daily Dinner (MAP Plan).",
    transfers: "Non-AC / AC Xylo / Scorpio / Tempo Traveler dedicated for Ladakh circuit.",
    inclusions: ["6 Nights Stay", "Daily Breakfast & Dinner", "Inner Line Permit & Wildlife fees", "Oxygen cylinder in vehicle"],
    exclusions: ["Airfare", "Camel ride / ATV quad biking charges", "Personal expenses"],
    importantNotes: ["Mandatory 24h acclimatization required on Day 1."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- PHUKET & KRABI THAILAND (NEW) ---
  {
    id: "namkamal-phuket-krabi-island-bliss",
    code: "NKTHA6N",
    name: "Namkamal Phuket & Krabi Island Bliss",
    destinationId: "thailand",
    destinationName: "Thailand",
    category: "international",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹28,999",
    travelType: "International Beach Paradise / Island Hopping & Coral Reefs",
    overview: "Tropical Thailand at its finest! Speedboat cruise to Phi Phi Islands, Maya Bay (The Beach movie spot), Krabi 4-Island Tour, Big Buddha Phuket, and Patong Beach nightlife.",
    tourHighlights: [
      "Phi Phi Island Full Day Speedboat Tour with Buffet Lunch",
      "Krabi 4-Island Tour: Phra Nang Cave, Tup Island, Chicken Island & Poda Island",
      "Phuket Big Buddha & Wat Chalong Temple City Tour",
      "Patong Beach & Bangla Road nightlife"
    ],
    sightseeingPoints: [
      "Phuket: Patong Beach, Karon Viewpoint, Big Buddha, Wat Chalong, Old Phuket Town",
      "Krabi: Ao Nang Beach, Phra Nang Cave, Poda Island, Chicken Island, Tup Island",
      "Phi Phi: Maya Bay, Viking Cave, Monkey Beach, Koh Phi Phi Don"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Phuket | Patong Beach", description: "Arrive Phuket International Airport. Transfer to Patong Beach hotel. Evening free to explore Patong Night Market." },
      { day: 2, title: "Phi Phi Islands Speedboat Tour", description: "Full day speedboat trip to Phi Phi Islands. Visit Maya Bay, Monkey Beach, Viking Cave, and enjoy snorkeling with buffet lunch." },
      { day: 3, title: "Phuket City Tour & Transfer to Krabi", description: "Visit Big Buddha, Wat Chalong Temple, and Karon Viewpoint. Afternoon scenic drive to Krabi resort." },
      { day: 4, title: "Krabi 4-Island Speedboat Excursion", description: "Island hopping tour covering Tup Island sandbar, Chicken Island, Poda Island, and sacred Phra Nang Cave Beach with lunch." },
      { day: 5, title: "Krabi Emerald Pool or Leisure Day", description: "Free day to relax on Ao Nang Beach or optional visit to Emerald Pool & Hot Springs." },
      { day: 6, title: "Krabi to Phuket Transfer", description: "Return to Phuket for last-minute souvenir shopping at Jungceylon Mall." },
      { day: 7, title: "Departure Phuket", description: "Breakfast, check-out and airport transfer for return flight." }
    ],
    hotelPlan: "3 Nights Phuket + 3 Nights Krabi 4★ Beach Resorts.",
    meals: "Daily Breakfast + 2 Island Buffet Lunches.",
    transfers: "AC Private / Shared transfers.",
    inclusions: ["6 Nights Accommodation", "Daily Breakfast & 2 Lunches", "Phi Phi Island Speedboat Tour", "Krabi 4-Island Tour", "Airport transfers"],
    exclusions: ["International Flights", "Thailand Visa Fee", "National Park Fees (approx 400 THB/pax)"],
    importantNotes: ["National Park entry fee paid directly at island."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- DUBAI & ABU DHABI (NEW) ---
  {
    id: "namkamal-dubai-abu-dhabi-grand",
    code: "NKUAE6N",
    name: "Namkamal Dubai & Abu Dhabi Grand Experience",
    destinationId: "uae",
    destinationName: "United Arab Emirates",
    category: "international",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹42,999",
    travelType: "Grand Luxury / Abu Dhabi Grand Mosque / Desert & Skyscrapers",
    overview: "The ultimate Emirates holiday! Features Burj Khalifa 124th floor, Sheikh Zayed Grand Mosque in Abu Dhabi, Louvre Museum, Dubai Frame, Marina Dhow Cruise, and 4x4 Desert Safari.",
    tourHighlights: [
      "Sheikh Zayed Grand Mosque Abu Dhabi guided visit",
      "Burj Khalifa 124/125th Floor At the Top Observation Deck",
      "Dubai Frame entry & Museum of the Future photo stop",
      "4x4 Desert Safari with Dune Bashing, Camel Ride & BBQ Dinner",
      "Luxury Dhow Cruise on Dubai Marina with Dinner"
    ],
    sightseeingPoints: [
      "Dubai: Burj Khalifa, Dubai Mall, Dubai Frame, Palm Jumeirah, Marina Dhow Cruise, Desert Safari",
      "Abu Dhabi: Sheikh Zayed Mosque, Corniche Beach, Heritage Village, Ferrari World photo stop"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Dubai | Marina Dhow Cruise", description: "Arrive Dubai International Airport. Transfer to hotel. Evening Marina Dhow Cruise with buffet dinner." },
      { day: 2, title: "Dubai City Tour, Dubai Frame & Burj Khalifa", description: "City tour of Palm Jumeirah, Burj Al Arab photo stop, Dubai Frame entrance. Afternoon visit Dubai Mall & Burj Khalifa 124th Floor." },
      { day: 3, title: "Free Morning & 4x4 Desert Safari", description: "Morning free for Gold Souk. 3:00 PM pickup for 4x4 Desert Safari dune bashing, camel rides & BBQ dinner camp." },
      { day: 4, title: "Full Day Abu Dhabi Grand Tour", description: "Drive to Abu Dhabi. Visit magnificent Sheikh Zayed Grand Mosque, Corniche drive, Heritage Village, and photo stop at Ferrari World." },
      { day: 5, title: "Museum of the Future & Global Village", description: "Visit iconic Museum of the Future and evening trip to multicultural Global Village theme park." },
      { day: 6, title: "Leisure / Shopping at Mall of the Emirates", description: "Day free for shopping at Mall of the Emirates or optional Atlantis Aquaventure Waterpark." },
      { day: 7, title: "Departure Dubai", description: "Breakfast, check-out and transfer to Dubai Airport." }
    ],
    hotelPlan: "6 Nights Stay in 4★ Deluxe Hotel in Dubai.",
    meals: "Daily Breakfast + 2 Dinners (Dhow Cruise & Desert BBQ).",
    transfers: "AC Coach / PVT transfers throughout.",
    inclusions: ["6 Nights 4★ Hotel", "Daily Breakfast", "Burj Khalifa 124th Floor Ticket", "Dubai Frame Ticket", "Abu Dhabi Tour", "Desert Safari & Dhow Cruise", "UAE Visa & Insurance"],
    exclusions: ["International Flights", "Tourism Dirham Fee"],
    importantNotes: ["Strict modest dress code required for Sheikh Zayed Mosque."],
    cancellationTerms: ["Visa non-refundable once applied."],
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- VIETNAM (NEW) ---
  {
    id: "namkamal-vietnam-heritage-halong",
    code: "NKVVN5N",
    name: "Namkamal Vietnam Heritage & Ha Long Bay Cruise",
    destinationId: "vietnam",
    destinationName: "Vietnam",
    category: "international",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    startingPrice: "₹32,999",
    travelType: "International Heritage / Ha Long Bay Cruise / Golden Hands Bridge",
    overview: "Vietnam's rising wonders! Stay overnight on a 4★ Ha Long Bay Cruise among limestone karst islands, ride cable car to Ba Na Hills Golden Hands Bridge in Da Nang, and explore Hanoi Old Quarter.",
    tourHighlights: [
      "Overnight 4★ Luxury Ha Long Bay Cruise with kayaking & cave exploration",
      "Ba Na Hills Cable Car & Golden Hands Bridge photo stop in Da Nang",
      "Hanoi Old Quarter & Hoan Kiem Lake walking tour",
      "Hoi An Ancient Town lantern-lit streets"
    ],
    sightseeingPoints: [
      "Hanoi: Hoan Kiem Lake, St. Joseph Cathedral, Train Street, Old Quarter",
      "Ha Long Bay: Sung Sot Cave, Ti Top Island, Kayaking lagoon",
      "Da Nang & Hoi An: Ba Na Hills, Golden Bridge, Marble Mountains, Hoi An Ancient Town"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Hanoi | Old Quarter Tour", description: "Arrive Noi Bai Airport Hanoi. Transfer to hotel. Walk through historic Hanoi Old Quarter and Hoan Kiem Lake." },
      { day: 2, title: "Hanoi to Ha Long Bay Cruise Boarding", description: "Drive to Ha Long Bay. Board 4★ luxury cruise at noon. Enjoy seafood lunch while sailing past thousand limestone islets. Kayaking & cave visit." },
      { day: 3, title: "Ha Long Bay Sunrise | Flight to Da Nang", description: "Morning Tai Chi on sun deck. Breakfast, visit Ti Top Island. Disembark cruise and transfer to airport for flight to Da Nang." },
      { day: 4, title: "Ba Na Hills & Golden Bridge Excursion", description: "Ride world's longest single-wire cable car to Ba Na Hills. Walk on iconic Golden Hands Bridge and French Village." },
      { day: 5, title: "Hoi An Ancient Town Day Trip", description: "Visit Marble Mountains and romantic Hoi An Ancient Town with yellow heritage buildings and lantern night market." },
      { day: 6, title: "Departure Da Nang", description: "Breakfast, souvenir coffee shopping, transfer to Da Nang Airport for return flight." }
    ],
    hotelPlan: "2N Hanoi Hotel + 1N Ha Long Bay Cruise + 2N Da Nang Resort.",
    meals: "Daily Breakfast + 2 Lunches & 1 Dinner on Cruise.",
    transfers: "AC Cab / Coach transfers throughout.",
    inclusions: ["5 Nights Accommodation", "Overnight Ha Long Bay Cruise with meals", "Ba Na Hills Cable Car & Golden Bridge ticket", "Airport transfers"],
    exclusions: ["International & Internal flights", "Vietnam E-Visa (approx $25)", "Personal tips"],
    importantNotes: ["Vietnam E-visa processed online within 3 working days."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- BALI VILLA (NEW) ---
  {
    id: "namkamal-bali-private-pool-villa",
    code: "NKBAL6N-VIL",
    name: "Namkamal Bali Private Pool Villa Experience",
    destinationId: "bali",
    destinationName: "Indonesia (Bali)",
    category: "international",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹34,999",
    travelType: "Luxury Honeymoon / Private Pool Villa / Island Excursion",
    overview: "Pure luxury indulgence in Bali! Features 2 nights stay in a luxury Private Pool Villa, floating breakfast option, Nusa Penida island tour, Kintamani Volcano, and Uluwatu sunset dinner.",
    tourHighlights: [
      "2 Nights Stay in Luxury Private Pool Villa with floating breakfast option",
      "Full Day Nusa Penida West Island Tour with lunch",
      "Kintamani Volcano view & Tegallalang Rice Terrace Swing",
      "Uluwatu Sunset Temple & Jimbaran Beach Candlelit Seafood Dinner"
    ],
    sightseeingPoints: [
      "Seminyak / Kuta: Private Villa, Seminyak Beach clubs",
      "Ubud: Rice Terraces, Monkey Forest, Bali Swing",
      "Nusa Penida: Kelingking T-Rex Beach, Broken Beach, Angel's Billabong"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Bali | Private Villa Check-in", description: "Arrival Denpasar Airport. Flower garland welcome & transfer to luxury Private Pool Villa. Romantic flower bed setup." },
      { day: 2, title: "Floating Breakfast & Ubud Swing Tour", description: "Enjoy floating breakfast in your private pool. Tour to Tegallalang Rice Terraces, Bali Jungle Swing, and Ubud Palace." },
      { day: 3, title: "Nusa Penida Island Speedboat Day Tour", description: "Early speedboat to Nusa Penida island. Visit Kelingking Beach cliff, Broken Beach, and Angel's Billabong." },
      { day: 4, title: "Transfer to Beach Hotel & Uluwatu Sunset", description: "Transfer to Kuta/Seminyak beach hotel. Evening visit cliff-top Uluwatu Temple and sunset seafood dinner at Jimbaran Bay." },
      { day: 5, title: "Benoa Water Sports & Balinese Spa", description: "Enjoy Banana Boat ride at Tanjung Benoa. Afternoon 2-hour authentic Balinese spa massage." },
      { day: 6, title: "Free Day for Beach Clubs & Shopping", description: "Free day to relax at Potato Head / Finns Beach Club or shop at Krisna souvenirs." },
      { day: 7, title: "Departure Bali", description: "Breakfast, check-out and transfer to Denpasar Airport for flight home." }
    ],
    hotelPlan: "2 Nights Private Pool Villa + 4 Nights 4★ Beach Resort.",
    meals: "Daily Breakfast + 1 Floating Breakfast + 1 Nusa Penida Lunch + 1 Jimbaran Dinner.",
    transfers: "Private AC Car with Balinese English-speaking driver guide.",
    inclusions: ["6 Nights Stay (2N Private Pool Villa)", "Daily Breakfast", "Nusa Penida Tour with Speedboat", "Uluwatu Sunset & Dinner", "2-hour Spa session"],
    exclusions: ["Airfare", "Bali VOA fee", "Personal expenses"],
    importantNotes: ["Villa floating breakfast included."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- SINGAPORE & MALAYSIA (NEW) ---
  {
    id: "namkamal-singapore-malaysia-combo",
    code: "NKSGKL6N",
    name: "Namkamal Singapore & Malaysia Twin Combo",
    destinationId: "singapore",
    destinationName: "Singapore & Malaysia",
    category: "international",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹46,999",
    travelType: "International Dual Country / Universal Studios / Genting Highlands",
    overview: "Two countries in one dream trip! Experience Singapore's Universal Studios & Gardens by the Bay, combined with Kuala Lumpur's Petronas Twin Towers, Batu Caves & Genting Highlands Cable Car.",
    tourHighlights: [
      "Universal Studios Singapore Full Day Pass",
      "Gardens by the Bay Flower Dome & Cloud Forest",
      "Kuala Lumpur Petronas Twin Towers photo stop",
      "Genting Highlands Cable Car ride & Batu Caves Hindu Shrine"
    ],
    sightseeingPoints: [
      "Singapore: Merlion Park, Marina Bay Sands, Gardens by the Bay, Universal Studios, Sentosa",
      "Kuala Lumpur: Petronas Twin Towers, Batu Caves, Genting Highlands, Independence Square"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Singapore | City Tour", description: "Arrive Changi Airport. Transfer to hotel. City tour of Merlion Park, Chinatown, Civic District, and Marina Bay Sands." },
      { day: 2, title: "Universal Studios Full Day Fun", description: "Full day pass to Universal Studios Singapore. Enjoy sci-fi rides, Hollywood Boulevard, and Shrek 4D adventure." },
      { day: 3, title: "Gardens by the Bay | Transfer to Kuala Lumpur", description: "Visit Gardens by the Bay glass domes. Afternoon coach / flight transfer to Kuala Lumpur, Malaysia." },
      { day: 4, title: "Kuala Lumpur City Tour & Petronas Towers", description: "Visit Petronas Twin Towers, King's Palace, National Mosque, Independence Square, and KL Tower." },
      { day: 5, title: "Batu Caves & Genting Highlands Excursion", description: "Visit Lord Murugan statue at Batu Caves. Ride scenic Genting SkyWay Cable Car to Genting Highlands indoor theme park & casino." },
      { day: 6, title: "Kuala Lumpur Free Shopping Day", description: "Free day for shopping in Bukit Bintang, Sunway Pyramid, or Pavilion Mall." },
      { day: 7, title: "Departure Kuala Lumpur", description: "Breakfast, check-out and transfer to KLIA Airport for departure." }
    ],
    hotelPlan: "3 Nights Singapore 4★ + 3 Nights Kuala Lumpur 4★ Hotel.",
    meals: "Daily Breakfast.",
    transfers: "AC Coach / Private transfers + Inter-city coach ticket.",
    inclusions: ["6 Nights Accommodation", "Daily Breakfast", "Universal Studios Ticket", "Gardens by the Bay Ticket", "Genting Cable Car Ticket", "Singapore & Malaysia City Tours"],
    exclusions: ["Airfare", "Singapore & Malaysia Visas", "Tourism tax"],
    importantNotes: ["Dual country visa required."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- SRI LANKA (NEW) ---
  {
    id: "namkamal-sri-lanka-pearl-tour",
    code: "NKSRI5N",
    name: "Namkamal Pearl of Sri Lanka",
    destinationId: "srilanka",
    destinationName: "Sri Lanka",
    category: "international",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    startingPrice: "₹27,999",
    travelType: "Island Culture & Beaches / Elephant Orphanage / UNESCO Heritage",
    overview: "Discover the Pearl of the Indian Ocean! Visit Pinnawala Elephant Orphanage, Kandy Temple of Tooth Relic, Tea Gardens of Nuwara Eliya, Bentota Water Sports Beach, and Galle Fort.",
    tourHighlights: [
      "Pinnawala Elephant Orphanage bathing session",
      "Kandy Temple of the Sacred Tooth Relic (UNESCO)",
      "Nuwara Eliya 'Little England' tea plantation & waterfall tour",
      "Bentota Beach, Madu River Mangrove Safari & Turtle Hatchery"
    ],
    sightseeingPoints: [
      "Kandy: Temple of Tooth, Royal Botanical Gardens, Pinnawala",
      "Nuwara Eliya: Tea Factory, Gregory Lake, Ramboda Falls",
      "Bentota: Beach, Madu River Safari, Sea Turtle Conservation",
      "Colombo: Gangaramaya Temple, Independence Square, Pettah Market"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Colombo | Transfer to Kandy via Pinnawala", description: "Arrive Bandaranaike Airport Colombo. Visit Pinnawala Elephant Orphanage to see elephants bathing. Continue drive to hill capital Kandy." },
      { day: 2, title: "Kandy Temple & Royal Botanical Gardens", description: "Visit Temple of the Sacred Tooth Relic, Peradeniya Royal Botanical Gardens, and evening Sri Lankan cultural dance show." },
      { day: 3, title: "Kandy to Nuwara Eliya (Tea Country)", description: "Drive through Ramboda Waterfalls to Nuwara Eliya tea estates. Visit tea factory with tea tasting session and Gregory Lake." },
      { day: 4, title: "Nuwara Eliya to Bentota Beach Resort", description: "Scenic drive down to coastal town Bentota. En route visit St. Clair waterfalls. Check in at beach resort." },
      { day: 5, title: "Madu River Boat Safari & Turtle Hatchery", description: "Enjoy Madu River mangrove boat safari, visit Kosgoda Sea Turtle Hatchery, and UNESCO Galle Dutch Fort." },
      { day: 6, title: "Colombo City Tour & Departure", description: "Drive to Colombo. Quick city tour of Gangaramaya Temple & Independence Square before airport transfer for flight home." }
    ],
    hotelPlan: "1N Kandy + 1N Nuwara Eliya + 2N Bentota Beach + 1N Colombo 4★ Hotels.",
    meals: "Daily Breakfast & Daily Dinner (MAP Plan).",
    transfers: "Private AC Car with English-speaking Chauffeur Guide.",
    inclusions: ["5 Nights Accommodation", "Daily Breakfast & Dinner", "Pinnawala entry ticket", "Madu River safari ticket", "Private AC Cab"],
    exclusions: ["Airfare", "Sri Lanka ETA Visa Fee (ETA online)", "Personal expenses"],
    importantNotes: ["Free ETA visa waivers apply as per Sri Lanka Tourism guidelines."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- EUROPE PARIS & SWITZERLAND (NEW) ---
  {
    id: "namkamal-wonders-of-europe-paris-swiss",
    code: "NKEUR7N",
    name: "Namkamal Wonders of Europe (Paris & Switzerland)",
    destinationId: "switzerland",
    destinationName: "France & Switzerland",
    category: "international",
    duration: "7 Nights / 8 Days",
    durationDays: 8,
    startingPrice: "₹1,19,999",
    travelType: "Grand Europe / Eiffel Tower / Swiss Alps & Lakes",
    overview: "The ultimate European dream holiday! Experience romantic Paris with Eiffel Tower 2nd Level tickets & Seine River Cruise, TGV High-Speed Bullet Train to Switzerland, Mt. Titlis cable car, and Interlaken.",
    tourHighlights: [
      "Eiffel Tower 2nd Level Access & Bateaux Parisiens Seine River Cruise",
      "Paris City Tour: Arc de Triomphe, Champs-Élysées, Louvre Pyramid photo stop",
      "TGV High-Speed Bullet Train ride from Paris to Switzerland",
      "Mount Titlis Snow Mountain Cable Car Rotair & Ice Flyer in Engelberg",
      "Lake Lucerne boat cruise & Interlaken scenic valley"
    ],
    sightseeingPoints: [
      "Paris: Eiffel Tower, Seine Cruise, Arc de Triomphe, Louvre Museum, Champs-Élysées",
      "Lucerne: Chapel Bridge, Lion Monument, Mt. Titlis Rotair",
      "Interlaken: Lake Thun, Lake Brienz, Hohematte, Harder Kulm"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Paris | City of Lights", description: "Arrive Paris Charles de Gaulle Airport. Transfer to hotel. Evening illuminated drive along Champs-Élysées." },
      { day: 2, title: "Eiffel Tower & Seine River Cruise", description: "Visit Eiffel Tower 2nd Level for panoramic views of Paris. Afternoon 1-hour Seine River Cruise past Notre Dame & Louvre." },
      { day: 3, title: "Paris City Landmarks & Louvre Area", description: "Guided orientation tour of Arc de Triomphe, Place de la Concorde, Louvre Pyramid, and Galeries Lafayette shopping." },
      { day: 4, title: "TGV High-Speed Train Paris to Switzerland (Lucerne)", description: "Board 300 km/h TGV Bullet Train crossing into Switzerland. Transfer to scenic Lucerne lake town." },
      { day: 5, title: "Mount Titlis Rotair Snow Peak Excursion", description: "Excursion to Mt. Titlis. Ride world's 1st revolving cable car 'Rotair', walk on Titlis Cliff Walk, and enjoy snow activities." },
      { day: 6, title: "Lucerne to Interlaken Scenic Valley", description: "Travel along Bernese Oberland mountains to Interlaken. Free time to explore local Swiss chocolate boutiques." },
      { day: 7, title: "Interlaken to Zurich | Rhine Falls Excursion", description: "Drive to Zurich. Visit majestic Rhine Falls at Neuhausen – Europe's largest waterfall." },
      { day: 8, title: "Departure Zurich", description: "Breakfast, check-out and transfer to Zurich Airport for flight back." }
    ],
    hotelPlan: "3 Nights Paris 4★ + 2 Nights Lucerne 4★ + 2 Nights Interlaken/Zurich 4★.",
    meals: "Daily Buffet Breakfast.",
    transfers: "AC Luxury Coach + TGV High-Speed Train Ticket.",
    inclusions: ["7 Nights 4★ Hotel Accommodation", "Daily Breakfast", "Eiffel Tower 2nd Level Ticket", "Seine River Cruise Ticket", "TGV Bullet Train Ticket", "Mt. Titlis Cable Car Ticket", "All transfers"],
    exclusions: ["International Flight Tickets", "Schengen Tourist Visa Fee", "City Tourist Taxes"],
    importantNotes: ["Schengen visa requires biometric appointment 30 days prior."],
    cancellationTerms: ["Visa rejection policy applies."],
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- UTTARAKHAND DO DHAM (NEW) ---
  {
    id: "namkamal-do-dham-kedarnath-badrinath",
    code: "NKUTT6N",
    name: "Namkamal Do Dham Kedarnath & Badrinath Yatra",
    destinationId: "uttarakhand",
    destinationName: "Uttarakhand",
    category: "domestic",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹17,999",
    travelType: "Spiritual Yatra / Himalayan Pilgrimage / Haridwar & Rishikesh",
    overview: "Sacred Himalayan pilgrimage! Complete Do Dham Yatra covering Kedarnath Dham (trek/helicopter options), Badrinath Dham, Haridwar Ganga Aarti, and Rishikesh Ram Jhula.",
    tourHighlights: [
      "Kedarnath Temple Darshan & Himalayan snow peaks view",
      "Badrinath Temple Darshan, Tapt Kund & Mana Village (Last Indian Village)",
      "Haridwar Har Ki Pauri Evening Ganga Aarti",
      "Rishikesh Ram Jhula, Laxman Jhula & Triveni Sangam"
    ],
    sightseeingPoints: [
      "Haridwar: Har Ki Pauri, Chandi Devi, Mansa Devi",
      "Rishikesh: Ram Jhula, Laxman Jhula, Beatles Ashram",
      "Guptkashi/Sonprayag: Kedarnath Base",
      "Kedarnath: Kedarnath Jyotirlinga Temple",
      "Badrinath: Badrinath Temple, Tapt Kund, Mana Village, Vyas Gufa"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Delhi Pickup | Drive to Haridwar", description: "Pickup from Delhi. Drive to holy city Haridwar. Check in at hotel. Attend divine evening Ganga Aarti at Har Ki Pauri." },
      { day: 2, title: "Haridwar to Guptkashi / Phata", description: "Scenic drive along Mandakini river to Guptkashi / Phata (base for Kedarnath). Check in at hotel & rest." },
      { day: 3, title: "Guptkashi to Kedarnath Dham Darshan", description: "Proceed to Sonprayag/Gaurikund. Trek / ride helicopter up to Kedarnath Temple (11,755 ft). Attend evening Aarti & stay overnight at Kedarnath camps/guesthouse." },
      { day: 4, title: "Kedarnath to Guptkashi Return", description: "Morning Abhishek at Kedarnath Temple. Trek down to Gaurikund and return drive to Guptkashi hotel." },
      { day: 5, title: "Guptkashi to Badrinath Dham", description: "Drive to Badrinath Dham via Joshimath. Holy dip in Tapt Kund thermal springs & evening Darshan at Badrinath Temple." },
      { day: 6, title: "Badrinath Mana Village to Rudraprayag / Rishikesh", description: "Visit Mana Village (Last Village of India), Vyas Gufa, and Saraswati River origin. Drive down to Rishikesh." },
      { day: 7, title: "Rishikesh Sightseeing & Departure to Delhi", description: "Visit Ram Jhula, Laxman Jhula, and Beatles Ashram. Transfer back to Delhi airport/railway station." }
    ],
    hotelPlan: "1N Haridwar + 2N Guptkashi + 1N Kedarnath + 1N Badrinath + 1N Rishikesh.",
    meals: "Daily Breakfast & Daily Dinner (Pure Veg MAP Plan).",
    transfers: "Private AC Cab (AC switched off in hill terrain).",
    inclusions: ["6 Nights Accommodation", "Daily Breakfast & Dinner", "Do Dham Yatra Registration assistance", "Private cab for circuit"],
    exclusions: ["Airfare/Train fare", "Helicopter tickets for Kedarnath", "Pony/Palki charges"],
    importantNotes: ["Yatra registration card mandatory."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- MEGHALAYA & ASSAM (NEW) ---
  {
    id: "namkamal-meghalaya-assam-explorer",
    code: "NKNE6N",
    name: "Namkamal Meghalaya & Assam Northeast Explorer",
    destinationId: "northeast",
    destinationName: "Meghalaya & Assam",
    category: "domestic",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹21,999",
    travelType: "Northeast Nature / Living Root Bridges / Wildlife Safari",
    overview: "Discover India's magical Northeast! Features Kaziranga National Park Rhino Jeep Safari, Cherrapunji Double Decker Living Root Bridge, Dawki Umngot Crystal River, and Elephant Falls Shillong.",
    tourHighlights: [
      "Kaziranga National Park Elephant & Jeep Safari (One-Horned Rhinoceros)",
      "Dawki Umngot River Boat Ride (Transparent Glass Water)",
      "Cherrapunji Nohkalikai Falls & Mawsmai Cave",
      "Double Decker Living Root Bridge trek in Nongriat",
      "Shillong Umiam Lake & Elephant Falls"
    ],
    sightseeingPoints: [
      "Kaziranga: Central/Western Safari Zone, Tea Gardens",
      "Shillong: Umiam Lake, Elephant Falls, Shillong Peak, Police Bazaar",
      "Cherrapunji: Nohkalikai Falls, Seven Sisters Falls, Mawsmai Cave, Living Root Bridge",
      "Dawki: Umngot River, Indo-Bangladesh Border, Mawlynnong (Cleanest Village)"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Guwahati Airport Pickup | Transfer to Kaziranga", description: "Arrive Guwahati Airport. En route visit Kamakhya Temple. Drive to Kaziranga National Park." },
      { day: 2, title: "Kaziranga Wildlife Safari & Transfer to Shillong", description: "Early morning Elephant / 4x4 Jeep Safari in Kaziranga to spot One-Horned Rhinos. Afternoon drive to Shillong ('Scotland of the East')." },
      { day: 3, title: "Shillong to Cherrapunji Waterfalls", description: "Drive to Cherrapunji. Visit Nohkalikai Falls (highest plunge waterfall in India), Seven Sisters Falls, and limestone Mawsmai Cave." },
      { day: 4, title: "Double Decker Living Root Bridge Trek", description: "Excursion trek to famous UNESCO Double Decker Living Root Bridge in Nongriat village." },
      { day: 5, title: "Cherrapunji to Dawki & Mawlynnong", description: "Drive to Dawki on Bangladesh border. Enjoy boat ride on crystal clear Umngot River. Visit Mawlynnong (Cleanest Village in Asia)." },
      { day: 6, title: "Dawki to Shillong Sightseeing", description: "Return to Shillong. Visit Elephant Falls, Umiam Lake (Barapani), and shopping at Police Bazaar." },
      { day: 7, title: "Departure Guwahati", description: "Breakfast, check-out and drop at Guwahati airport for return flight." }
    ],
    hotelPlan: "1N Kaziranga + 3N Shillong + 2N Cherrapunji 3★ / 4★ Nature Resorts.",
    meals: "Daily Breakfast.",
    transfers: "Private AC Vehicle dedicated for Northeast circuit.",
    inclusions: ["6 Nights Stay", "Daily Breakfast", "Kaziranga Safari basic permit", "Dawki boat ride ticket", "Private vehicle transfers"],
    exclusions: ["Airfare", "Camera fees", "Personal expenses"],
    importantNotes: ["Kaziranga Safari open Oct to May."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- OOTY & KODAIKANAL (NEW) ---
  {
    id: "namkamal-ooty-kodaikanal-queen-of-hills",
    code: "NKTN5N",
    name: "Namkamal Ooty & Kodaikanal Queen of Hills",
    destinationId: "tamilnadu",
    destinationName: "Tamil Nadu",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    durationDays: 6,
    startingPrice: "₹12,499",
    travelType: "Nilgiri Hills / Toy Train Ride / Lake Boating & Tea Gardens",
    overview: "Queen of Nilgiris! Experience Ooty Botanical Gardens, Doddabetta Peak, UNESCO Nilgiri Mountain Toy Train ride to Coonoor, Kodaikanal Lake boating & Pillar Rocks.",
    tourHighlights: [
      "Nilgiri Mountain Toy Train Ride from Ooty to Coonoor",
      "Ooty Botanical Garden, Rose Garden & Ooty Lake Boating",
      "Doddabetta Peak (Highest Peak of Nilgiris)",
      "Kodaikanal Star Lake Boating, Pillar Rocks & Coaker's Walk"
    ],
    sightseeingPoints: [
      "Ooty: Botanical Garden, Rose Garden, Ooty Lake, Doddabetta Peak, Tea Factory",
      "Coonoor: Sim's Park, Dolphin's Nose, Tea Gardens",
      "Kodaikanal: Kodai Lake, Coaker's Walk, Pillar Rocks, Green Valley View, Pine Forest"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Coimbatore / Bangalore Pickup | Drive to Ooty", description: "Pickup from Coimbatore or Bangalore. Scenic drive up Nilgiri hills to Ooty. Check-in at resort and evening leisure at Ooty Lake." },
      { day: 2, title: "Ooty Sightseeing & Tea Factory", description: "Visit Government Botanical Garden, Rose Garden, Tea Factory & Museum, and view sunset from Doddabetta Peak." },
      { day: 3, title: "UNESCO Toy Train Ride to Coonoor | Drive to Kodaikanal", description: "Board UNESCO Heritage Toy Train to Coonoor. Visit Sim's Park & Dolphin's Nose. Drive to Kodaikanal hill station." },
      { day: 4, title: "Kodaikanal Lake & Pine Forest Tour", description: "Visit star-shaped Kodai Lake (enjoy pedal boating), Coaker's Walk, Pillar Rocks, Green Valley View, and Silent Valley." },
      { day: 5, title: "Kodaikanal Waterfalls & Leisure", description: "Visit Silver Cascade Waterfalls, Bear Shola Falls, and local homemade chocolate shopping in Kodai market." },
      { day: 6, title: "Departure Coimbatore / Madurai", description: "Breakfast, check-out and drop at Madurai or Coimbatore airport/railway station." }
    ],
    hotelPlan: "2 Nights Ooty + 3 Nights Kodaikanal 3★ / 4★ Hill Resorts.",
    meals: "Daily Breakfast.",
    transfers: "Private AC Cab throughout.",
    inclusions: ["5 Nights Accommodation", "Daily Breakfast", "Toy Train ticket basic seats", "Private Cab transfers"],
    exclusions: ["Airfare/Train fare", "Boating charges", "Personal expenses"],
    importantNotes: ["Toy train tickets subject to IRCTC availability."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: false
  },

  // --- JAPAN (NEW) ---
  {
    id: "namkamal-jewel-of-japan-tokyo-kyoto",
    code: "NKJPN7N",
    name: "Namkamal Jewel of Japan (Tokyo, Mt Fuji & Kyoto)",
    destinationId: "japan",
    destinationName: "Japan",
    category: "international",
    duration: "7 Nights / 8 Days",
    durationDays: 8,
    startingPrice: "₹1,49,999",
    travelType: "Futuristic & Ancient / Bullet Train Shinkansen / Mount Fuji",
    overview: "Land of the Rising Sun! Experience Tokyo's Shibuya Crossing & Skytree, Mount Fuji 5th Station, Shinkansen Bullet Train ride, Kyoto Fushimi Inari thousand torii gates, and Osaka Castle.",
    tourHighlights: [
      "Tokyo Skytree Tembo Deck & Asakusa Sensoji Temple",
      "Mount Fuji 5th Station & Lake Kawaguchiko scenic view",
      "Shinkansen Bullet Train (300 km/h) experience from Tokyo to Kyoto",
      "Kyoto Fushimi Inari Taisha Shrine (10,000 Vermilion Gates) & Arashiyama Bamboo Grove",
      "Osaka Castle Park & Dotonbori Street Food walk"
    ],
    sightseeingPoints: [
      "Tokyo: Skytree, Shibuya Crossing, Sensoji Temple, Imperial Palace, Akihabara",
      "Mount Fuji: 5th Station, Lake Kawaguchiko, Hakone Ropeway",
      "Kyoto: Fushimi Inari, Arashiyama Bamboo Forest, Kinkakuji Golden Pavilion",
      "Osaka: Osaka Castle, Dotonbori, Shinsaibashi"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Tokyo | Futuristic Metropolis", description: "Arrive Tokyo Narita / Haneda Airport. Transfer to hotel. Evening visit famous Shibuya Crossing and Tokyo Skytree." },
      { day: 2, title: "Tokyo City Landmarks & Asakusa", description: "Explore historic Sensoji Temple in Asakusa, Imperial Palace gardens, and electronics district Akihabara." },
      { day: 3, title: "Mount Fuji & Hakone Excursion", description: "Full day excursion to Mount Fuji 5th Station. Enjoy Lake Ashi cruise in Hakone and Owakudani volcanic valley." },
      { day: 4, title: "Shinkansen Bullet Train to Kyoto", description: "Board famous Shinkansen Bullet Train to cultural capital Kyoto. Visit UNESCO Kinkakuji (Golden Pavilion)." },
      { day: 5, title: "Kyoto Torii Gates & Arashiyama Bamboo Grove", description: "Visit iconic Fushimi Inari Taisha (10,000 red torii gates) and walk through ethereal Arashiyama Bamboo Forest." },
      { day: 6, title: "Kyoto to Osaka via Nara Deer Park", description: "En route to Osaka, visit Nara Park to feed friendly wild bowing deer and Todaiji Giant Buddha Temple. Check in Osaka hotel." },
      { day: 7, title: "Osaka Castle & Dotonbori Street Food", description: "Visit historic Osaka Castle, Umeda Sky Building, and vibrant Dotonbori street food market." },
      { day: 8, title: "Departure Osaka", description: "Breakfast, check-out and transfer to Kansai International Airport Osaka for flight home." }
    ],
    hotelPlan: "3N Tokyo + 2N Kyoto + 2N Osaka 4★ City Hotels.",
    meals: "Daily Buffet Breakfast.",
    transfers: "7 Days JR Pass / Shinkansen Bullet Train + Private Coach.",
    inclusions: ["7 Nights 4★ Accommodation", "Daily Breakfast", "Shinkansen Bullet Train ticket", "Tokyo Skytree Ticket", "Mount Fuji Tour", "All transfers"],
    exclusions: ["International Flights", "Japan Tourist Visa", "Personal expenses"],
    importantNotes: ["Japan Tourist Visa processed in 4-5 working days."],
    cancellationTerms: ["Visa rejection terms apply."],
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- EGYPT (NEW) ---
  {
    id: "namkamal-egypt-pyramids-nile-cruise",
    code: "NKEGY6N",
    name: "Namkamal Grand Egypt & Nile River Cruise",
    destinationId: "egypt",
    destinationName: "Egypt",
    category: "international",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹79,999",
    travelType: "Ancient Wonders / 5★ Nile River Cruise / Pyramids & Pharaohs",
    overview: "Journey back 5,000 years in time! Visit Pyramids of Giza & Sphinx in Cairo, Egyptian Museum Tutankhamun treasures, and 3-Night 5★ Nile River Cruise from Aswan to Luxor.",
    tourHighlights: [
      "Pyramids of Giza & Great Sphinx of Giza guided tour",
      "Egyptian Museum Cairo & Tutankhamun Gold Mask",
      "3 Nights 5★ Luxury Nile River Cruise with all meals",
      "Valley of the Kings Luxor pharaoh tombs & Karnak Temple",
      "Abu Simbel Temples optional excursion"
    ],
    sightseeingPoints: [
      "Cairo: Great Pyramids, Sphinx, Egyptian Museum, Khan el-Khalili Bazaar",
      "Aswan: Philae Temple, High Dam, Felucca Sailboat",
      "Kom Ombo & Edfu: Temple of Sobek & Horus",
      "Luxor: Valley of the Kings, Hatshepsut Temple, Karnak Temple, Luxor Temple"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Cairo | Cradle of Civilization", description: "Arrive Cairo International Airport. VIP meeting & assistance. Transfer to Cairo hotel." },
      { day: 2, title: "Pyramids of Giza, Sphinx & Egyptian Museum", description: "Full day tour to Pyramids of Giza, Great Sphinx, Egyptian Museum housing King Tutankhamun treasures, and Khan el-Khalili bazaar." },
      { day: 3, title: "Flight Cairo to Aswan | Board 5★ Nile Cruise", description: "Fly to Aswan. Visit Philae Temple on Agilkia Island & Aswan High Dam. Board 5★ luxury Nile Cruise ship at noon." },
      { day: 4, title: "Nile Cruise Sailing | Kom Ombo & Edfu Temples", description: "Sail along Nile River. Visit twin Temple of Kom Ombo (Sobek & Horus) and Edfu Temple via horse carriage." },
      { day: 5, title: "Nile Cruise to Luxor | East & West Bank", description: "Sail into ancient capital Luxor. Visit Valley of the Kings (King Tut's tomb area), Queen Hatshepsut Temple, and Colossi of Memnon." },
      { day: 6, title: "Luxor Temples | Flight to Cairo", description: "Visit massive Karnak Temple complex & Luxor Temple. Disembark cruise and fly back to Cairo." },
      { day: 7, title: "Departure Cairo", description: "Breakfast, check-out and airport transfer for return flight." }
    ],
    hotelPlan: "3 Nights Cairo 5★ Hotel + 3 Nights 5★ Deluxe Nile River Cruise Ship.",
    meals: "Daily Breakfast + Full Board Meals (Breakfast, Lunch, Dinner) on Nile Cruise.",
    transfers: "AC Private Coach + Egypt Domestic Flight Tickets (Cairo-Aswan / Luxor-Cairo).",
    inclusions: ["6 Nights Accommodation (3N 5★ Nile Cruise)", "Daily Breakfast + Full Board on Cruise", "Domestic Flights inside Egypt", "Pyramids & Temples entrance tickets", "Private Egyptologist Guide"],
    exclusions: ["International Flights", "Egypt Entry Visa (On Arrival / E-Visa $25)", "Abu Simbel excursion"],
    importantNotes: ["Egyptologist licensed guide included."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  },

  // --- TURKEY (NEW) ---
  {
    id: "namkamal-turkey-cappadocia-hot-air-balloon",
    code: "NKTUR6N",
    name: "Namkamal Enchanting Turkey & Cappadocia",
    destinationId: "turkey",
    destinationName: "Turkey",
    category: "international",
    duration: "6 Nights / 7 Days",
    durationDays: 7,
    startingPrice: "₹69,999",
    travelType: "Where East Meets West / Hot Air Balloons / Bosphorus Cruise",
    overview: "Turkey's fairytale landscape! Experience Istanbul's Hagia Sophia & Blue Mosque, Bosphorus Strait Cruise, Grand Bazaar, and famous Cappadocia Hot Air Balloon flight over Fairy Chimneys.",
    tourHighlights: [
      "Cappadocia Sunrise Hot Air Balloon Flight over Fairy Chimneys",
      "Goreme Open Air Museum UNESCO rock-cut churches & Kaymakli Underground City",
      "Istanbul Hagia Sophia, Blue Mosque & Topkapi Palace",
      "Bosphorus Strait Cruise bridging Europe & Asia",
      "Grand Bazaar shopping (4,000 shops)"
    ],
    sightseeingPoints: [
      "Istanbul: Hagia Sophia, Blue Mosque, Topkapi Palace, Grand Bazaar, Bosphorus Cruise",
      "Cappadocia: Goreme Open Air Museum, Pasabag Fairy Chimneys, Uchisar Castle, Underground City"
    ],
    dayWiseItinerary: [
      { day: 1, title: "Arrival Istanbul | Bosphorus Evening", description: "Arrive Istanbul Airport. Transfer to hotel. Evening walk along Istiklal Street in Taksim Square." },
      { day: 2, title: "Istanbul Sultanahmet Old City Tour", description: "Visit Hagia Sophia Grand Mosque, Blue Mosque, Hippodrome, Topkapi Palace, and shopping at Grand Bazaar." },
      { day: 3, title: "Bosphorus Cruise | Flight to Cappadocia", description: "Morning scenic Bosphorus Strait Cruise separating Europe and Asia. Afternoon flight to Cappadocia land of fairy chimneys." },
      { day: 4, title: "Cappadocia Hot Air Balloon & Goreme Tour", description: "Early morning bucket list Hot Air Balloon flight at sunrise. Full day tour of Goreme Open Air Museum, Pasabag Valley, and Uchisar Castle." },
      { day: 5, title: "Underground City & Pottery Village", description: "Explore Kaymakli Underground City carved 8 levels beneath earth, Avanos pottery village, and Pigeon Valley." },
      { day: 6, title: "Flight Cappadocia to Istanbul", description: "Fly back to Istanbul. Afternoon free for Turkish Delight shopping and Spice Bazaar." },
      { day: 7, title: "Departure Istanbul", description: "Breakfast, check-out and transfer to Istanbul Airport for return flight." }
    ],
    hotelPlan: "3 Nights Istanbul 4★ + 3 Nights Cappadocia Cave Hotel / Resort.",
    meals: "Daily Breakfast + 2 Lunches in Cappadocia.",
    transfers: "AC Coach + Domestic Flights (Istanbul-Cappadocia-Istanbul).",
    inclusions: ["6 Nights Stay (including Cave Hotel)", "Daily Breakfast & 2 Lunches", "Domestic Flights inside Turkey", "Istanbul City Tour & Bosphorus Cruise", "Cappadocia Tour"],
    exclusions: ["International Flights", "Hot Air Balloon Ticket (payable directly)", "Turkey E-Visa"],
    importantNotes: ["Hot Air Balloon is weather-dependent."],
    cancellationTerms: ["Standard policy."],
    gallery: [
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true
  }
];
