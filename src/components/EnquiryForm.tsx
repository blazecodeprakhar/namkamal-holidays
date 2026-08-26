import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle, MapPin, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ALL_DESTINATIONS } from '../data/destinations';
import type { EnquiryFormData } from '../types';

interface EnquiryFormProps {
  prefillDestination?: string;
  onSuccess?: () => void;
}

const POPULAR_DEPARTURE_CITIES = [
  'Nanded',
  'Mumbai',
  'Pune',
  'Hyderabad',
  'Delhi',
  'Bangalore',
  'Nagpur',
  'Chhatrapati Sambhajinagar'
];

const POPULAR_DESTINATIONS = [
  { label: 'Rajasthan', value: 'Rajasthan', icon: '🏰' },
  { label: 'Kerala', value: 'Kerala', icon: '🌴' },
  { label: 'Goa', value: 'Goa', icon: '🏖️' },
  { label: 'Kashmir', value: 'Jammu & Kashmir', icon: '🏔️' },
  { label: 'Himachal', value: 'Himachal Pradesh', icon: '🌲' },
  { label: 'Dubai', value: 'United Arab Emirates', icon: '🏙️' },
  { label: 'Thailand', value: 'Thailand', icon: '🏝️' },
  { label: 'Bali', value: 'Indonesia (Bali)', icon: '🌺' }
];

const WEB3FORMS_ACCESS_KEY = "e27a2f36-5f10-4a25-8132-b86ed780267d";

// Helper to map destination IDs or partial names to official destination names
const resolveDestinationName = (input: string): string => {
  if (!input) return '';
  const trimmed = input.trim().toLowerCase();
  const match = ALL_DESTINATIONS.find(
    d => d.id.toLowerCase() === trimmed || 
         d.name.toLowerCase() === trimmed ||
         (trimmed.includes('kashmir') && d.id === 'kashmir') ||
         (trimmed.includes('dubai') && d.id === 'uae') ||
         (trimmed.includes('bali') && d.id === 'bali')
  );
  return match ? match.name : input;
};

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ 
  prefillDestination = '', 
  onSuccess 
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    destination: resolveDestinationName(prefillDestination) || '',
    departureCity: '',
    travelDate: '',
    duration: '5 Nights / 6 Days',
    adults: 2,
    children: 0,
    hotelCategory: '3★',
    mealPlan: 'Breakfast & Dinner',
    approxBudget: 'Standard',
    travelType: 'Family Tour',
    message: ''
  });

  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update destination if prefillDestination prop changes
  useEffect(() => {
    if (prefillDestination) {
      setFormData(prev => ({
        ...prev,
        destination: resolveDestinationName(prefillDestination)
      }));
    }
  }, [prefillDestination]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectDepartureCity = (city: string) => {
    setFormData(prev => ({ ...prev, departureCity: city }));
  };

  const handleSelectDestination = (destValue: string) => {
    setFormData(prev => ({ ...prev, destination: destValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Spam Honeypot Check
    if (honeypot) {
      console.warn("Spam detected!");
      return;
    }

    // Required Field Validations (Full Name & Phone)
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your Full Name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit Mobile / WhatsApp Number.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Build FormData for Web3Forms API
      const web3FormData = new FormData();
      web3FormData.append("access_key", WEB3FORMS_ACCESS_KEY);
      web3FormData.append("subject", `New Holiday Enquiry: ${formData.fullName} (${formData.destination || 'General Enquiry'})`);
      web3FormData.append("from_name", "Namkamal Holidays Website");
      web3FormData.append("name", formData.fullName);
      web3FormData.append("phone", formData.phone);
      web3FormData.append("email", formData.email || "Not Provided");
      web3FormData.append("destination", formData.destination || "Flexible / General Enquiry");
      web3FormData.append("departure_city", formData.departureCity || "Not Specified");
      web3FormData.append("travel_date", formData.travelDate || "Flexible");
      web3FormData.append("passengers", `${formData.adults} Adult(s), ${formData.children} Child(ren)`);
      web3FormData.append("hotel_category", formData.hotelCategory);
      web3FormData.append("meal_plan", formData.mealPlan);
      web3FormData.append("travel_type", formData.travelType);
      web3FormData.append("message", formData.message || "Custom itinerary quotation request");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        setErrorMsg(data.message || "Failed to send enquiry. Please try again or contact us directly on WhatsApp.");
      }
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setErrorMsg("Network error. Please check your internet connection or connect via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate WhatsApp Deep Link with pre-filled lead details
  const whatsappLeadText = encodeURIComponent(
    `Hello Namkamal Holidays! I submitted a website enquiry:\n` +
    `👤 Name: ${formData.fullName}\n` +
    `📞 Phone: ${formData.phone}\n` +
    `📍 Destination: ${formData.destination || 'Flexible / General Enquiry'}\n` +
    `✈️ Departure City: ${formData.departureCity || 'Not specified'}\n` +
    `📅 Travel Date: ${formData.travelDate || 'Flexible'}\n` +
    `👥 Passengers: ${formData.adults} Adults, ${formData.children} Children\n` +
    `🏨 Hotel: ${formData.hotelCategory} (${formData.mealPlan})\n` +
    `📝 Notes: ${formData.message || 'Custom itinerary quotation request'}`
  );

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-3xl text-center space-y-5 animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900">Enquiry Received Successfully!</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-gray-900">{formData.fullName}</strong>! Your enquiry has been sent to our team at Namkamal Holidays. We are reviewing your trip details{formData.destination ? <> for <strong className="text-[#F7941D]">{formData.destination}</strong></> : ''}.
        </p>

        <div className="bg-orange-50 border border-orange-200 p-4 rounded-2xl text-xs text-gray-700 text-left space-y-1 max-w-md mx-auto">
          <p className="font-bold text-[#F7941D] flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> What happens next?
          </p>
          <p>• You will receive a customized itinerary & price quote on your WhatsApp ({formData.phone}).</p>
          <p>• Dedicated travel officer: <strong>{COMPANY_INFO.phone}</strong></p>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${whatsappLeadText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white" /> Connect on WhatsApp Instantly
          </a>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                destination: '',
                departureCity: '',
                travelDate: '',
                duration: '5 Nights / 6 Days',
                adults: 2,
                children: 0,
                hotelCategory: '3★',
                mealPlan: 'Breakfast & Dinner',
                approxBudget: 'Standard',
                travelType: 'Family Tour',
                message: ''
              });
            }}
            className="py-3 px-5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-xs transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* Hidden Honeypot Field */}
      <input 
        type="text" 
        name="website_url_check" 
        value={honeypot} 
        onChange={(e) => setHoneypot(e.target.value)} 
        className="hidden" 
        autoComplete="off" 
      />

      {errorMsg && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Row 1: Name & Phone (Required) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Shubham Bomble"
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] focus:border-[#F7941D] text-xs font-medium outline-none transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Mobile / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 95453 99825"
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] focus:border-[#F7941D] text-xs font-medium outline-none transition-all"
            required
          />
        </div>
      </div>

      {/* Row 2: Destination of Interest (Optional with Suggestions) */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-xs font-bold text-gray-700">
            Destination of Interest <span className="text-gray-400 font-normal ml-1">(Optional)</span>
          </label>
        </div>
        <select 
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] focus:border-[#F7941D] text-xs font-medium outline-none transition-all bg-white"
        >
          <option value="">-- Select or Choose Suggestion Below --</option>
          <optgroup label="Popular Domestic Tours">
            {ALL_DESTINATIONS.filter(d => d.category === 'domestic').map(d => (
              <option key={d.id} value={d.name}>{d.name} Package</option>
            ))}
          </optgroup>
          <optgroup label="International Tours">
            {ALL_DESTINATIONS.filter(d => d.category === 'international').map(d => (
              <option key={d.id} value={d.name}>{d.name} Package</option>
            ))}
          </optgroup>
          <option value="Other / Customized Circuit">Other / Customized Circuit</option>
        </select>

        {/* Destination Quick Suggestions Chips */}
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 mr-1">
            Suggestions:
          </span>
          {POPULAR_DESTINATIONS.map((dest) => {
            const isSelected = resolveDestinationName(formData.destination) === resolveDestinationName(dest.value);
            return (
              <button
                key={dest.value}
                type="button"
                onClick={() => handleSelectDestination(dest.value)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 border ${
                  isSelected 
                    ? 'bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white border-transparent shadow-sm'
                    : 'bg-gray-50 hover:bg-orange-50 text-gray-700 border-gray-200 hover:border-orange-300'
                }`}
              >
                <span>{dest.icon}</span>
                <span>{dest.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 3: Departure City (Optional with City Suggestions) */}
      <div>
        <label className="block text-xs font-bold text-gray-700 mb-1">
          Departure City <span className="text-gray-400 font-normal ml-1">(Optional)</span>
        </label>
        <div className="relative">
          <input 
            type="text" 
            name="departureCity"
            list="departure-city-suggestions"
            value={formData.departureCity}
            onChange={handleChange}
            placeholder="Type your city e.g. Nanded, Mumbai, Pune..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] focus:border-[#F7941D] text-xs font-medium outline-none transition-all"
          />
          <datalist id="departure-city-suggestions">
            {POPULAR_DEPARTURE_CITIES.map(city => (
              <option key={city} value={city} />
            ))}
          </datalist>
        </div>

        {/* Departure City Quick Suggestions Chips */}
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 mr-1">
            <MapPin className="w-3 h-3 text-[#E91E63]" /> City Suggestions:
          </span>
          {POPULAR_DEPARTURE_CITIES.map(city => {
            const isSelected = formData.departureCity === city;
            return (
              <button
                key={city}
                type="button"
                onClick={() => handleSelectDepartureCity(city)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 border ${
                  isSelected
                    ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
              >
                <span>{city}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 4: Email & Preferred Travel Date (Optional) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Email Address <span className="text-gray-400 font-normal ml-1">(Optional)</span>
          </label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] focus:border-[#F7941D] text-xs font-medium outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Preferred Travel Date <span className="text-gray-400 font-normal ml-1">(Optional)</span>
          </label>
          <input 
            type="date" 
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] focus:border-[#F7941D] text-xs font-medium outline-none transition-all"
          />
        </div>
      </div>

      {/* Row 5: Passengers (Adults & Children) (Optional) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Number of Adults <span className="text-gray-400 font-normal ml-1">(Optional)</span>
          </label>
          <select
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] text-xs font-medium outline-none bg-white"
          >
            {[1,2,3,4,5,6,7,8,9,10, '10+ Group'].map(num => (
              <option key={num} value={num}>{num} Adult(s)</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Children (0-12 yrs) <span className="text-gray-400 font-normal ml-1">(Optional)</span>
          </label>
          <select
            name="children"
            value={formData.children}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] text-xs font-medium outline-none bg-white"
          >
            {[0,1,2,3,4,5].map(num => (
              <option key={num} value={num}>{num} Child(ren)</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Hotel Category <span className="text-gray-400 font-normal ml-1">(Optional)</span>
          </label>
          <select
            name="hotelCategory"
            value={formData.hotelCategory}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] text-xs font-medium outline-none bg-white"
          >
            <option value="3★ Standard">3★ Deluxe Hotel</option>
            <option value="4★ Premium">4★ Luxury Hotel</option>
            <option value="5★ Royal">5★ Super Luxury Resort</option>
            <option value="Budget">Budget Stay</option>
          </select>
        </div>
      </div>

      {/* Row 6: Meal Plan & Travel Type (Optional) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Meal Plan <span className="text-gray-400 font-normal ml-1">(Optional)</span>
          </label>
          <select
            name="mealPlan"
            value={formData.mealPlan}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] text-xs font-medium outline-none bg-white"
          >
            <option value="Breakfast Only (CP)">Breakfast Only (CP)</option>
            <option value="Breakfast & Dinner (MAP)">Breakfast & Dinner (MAP)</option>
            <option value="All Meals (AP)">All Meals - Breakfast, Lunch & Dinner (AP)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Travel Type <span className="text-gray-400 font-normal ml-1">(Optional)</span>
          </label>
          <select
            name="travelType"
            value={formData.travelType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] text-xs font-medium outline-none bg-white"
          >
            <option value="Family Tour">Family Holiday</option>
            <option value="Honeymoon Package">Honeymoon / Couple</option>
            <option value="Group Tour">Group Tour / Friends</option>
            <option value="Corporate / MICE">Corporate Outing</option>
            <option value="Customized Itinerary">Customized Private Tour</option>
          </select>
        </div>
      </div>

      {/* Row 7: Additional Message (Optional) */}
      <div>
        <label className="block text-xs font-bold text-gray-700 mb-1">
          Additional Requirements / Message <span className="text-gray-400 font-normal ml-1">(Optional)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Mention special requests (e.g., flight preference, child bed, specific sightseeing, approximate budget...)"
          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] text-xs font-medium outline-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#F7941D] to-[#E91E63] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" /> Sending Lead to Web3Forms...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Free Quotation Request
          </>
        )}
      </button>

      <p className="text-[10px] text-gray-400 text-center">
        🔒 Your contact information is 100% confidential. Lead sent instantly.
      </p>

    </form>
  );
};
