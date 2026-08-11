import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ALL_DESTINATIONS } from '../data/destinations';
import type { EnquiryFormData } from '../types';

interface EnquiryFormProps {
  prefillDestination?: string;
  onSuccess?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ 
  prefillDestination = '', 
  onSuccess 
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    destination: prefillDestination || '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Spam Honeypot Check
    if (honeypot) {
      console.warn("Spam detected!");
      return;
    }

    // Required Field Validations
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your Full Name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit Mobile / WhatsApp Number.');
      return;
    }
    if (!formData.destination) {
      setErrorMsg('Please select your Destination of Interest.');
      return;
    }
    if (!formData.travelDate) {
      setErrorMsg('Please select your Preferred Travel Date.');
      return;
    }

    setIsSubmitting(true);

    // Simulate fast API lead submission & notification
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 800);
  };

  // Generate WhatsApp Deep Link with pre-filled lead details
  const whatsappLeadText = encodeURIComponent(
    `Hello Namkamal Holidays! I submitted a website enquiry:\n` +
    `👤 Name: ${formData.fullName}\n` +
    `📞 Phone: ${formData.phone}\n` +
    `📍 Destination: ${formData.destination}\n` +
    `📅 Travel Date: ${formData.travelDate}\n` +
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
          Thank you, <strong className="text-gray-900">{formData.fullName}</strong>! Our travel experts at Namkamal Holidays are reviewing your trip requirements for <strong className="text-[#F7941D]">{formData.destination}</strong>.
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

      {/* Row 1: Name & Phone */}
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

      {/* Row 2: Email & Destination */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Email Address
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
            Destination of Interest <span className="text-red-500">*</span>
          </label>
          <select 
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] focus:border-[#F7941D] text-xs font-medium outline-none transition-all"
            required
          >
            <option value="">-- Select Destination --</option>
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
        </div>
      </div>

      {/* Row 3: Departure City & Preferred Travel Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Departure City
          </label>
          <input 
            type="text" 
            name="departureCity"
            value={formData.departureCity}
            onChange={handleChange}
            placeholder="e.g. Nanded / Mumbai / Pune"
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] focus:border-[#F7941D] text-xs font-medium outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Preferred Travel Date <span className="text-red-500">*</span>
          </label>
          <input 
            type="date" 
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] focus:border-[#F7941D] text-xs font-medium outline-none transition-all"
            required
          />
        </div>
      </div>

      {/* Row 4: Passengers (Adults & Children) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Number of Adults <span className="text-red-500">*</span>
          </label>
          <select
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] text-xs font-medium outline-none"
          >
            {[1,2,3,4,5,6,7,8,9,10, '10+ Group'].map(num => (
              <option key={num} value={num}>{num} Adult(s)</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Children (0-12 yrs)
          </label>
          <select
            name="children"
            value={formData.children}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] text-xs font-medium outline-none"
          >
            {[0,1,2,3,4,5].map(num => (
              <option key={num} value={num}>{num} Child(ren)</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Hotel Category
          </label>
          <select
            name="hotelCategory"
            value={formData.hotelCategory}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] text-xs font-medium outline-none"
          >
            <option value="3★ Standard">3★ Deluxe Hotel</option>
            <option value="4★ Premium">4★ Luxury Hotel</option>
            <option value="5★ Royal">5★ Super Luxury Resort</option>
            <option value="Budget">Budget Stay</option>
          </select>
        </div>
      </div>

      {/* Row 5: Meal Plan & Travel Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Meal Plan
          </label>
          <select
            name="mealPlan"
            value={formData.mealPlan}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] text-xs font-medium outline-none"
          >
            <option value="Breakfast Only (CP)">Breakfast Only (CP)</option>
            <option value="Breakfast & Dinner (MAP)">Breakfast & Dinner (MAP)</option>
            <option value="All Meals (AP)">All Meals - Breakfast, Lunch & Dinner (AP)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Travel Type
          </label>
          <select
            name="travelType"
            value={formData.travelType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F7941D] text-xs font-medium outline-none"
          >
            <option value="Family Tour">Family Holiday</option>
            <option value="Honeymoon Package">Honeymoon / Couple</option>
            <option value="Group Tour">Group Tour / Friends</option>
            <option value="Corporate / MICE">Corporate Outing</option>
            <option value="Customized Itinerary">Customized Private Tour</option>
          </select>
        </div>
      </div>

      {/* Row 6: Additional Message */}
      <div>
        <label className="block text-xs font-bold text-gray-700 mb-1">
          Additional Requirements / Message
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
        className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#F7941D] to-[#E91E63] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>Processing Lead...</span>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Free Quotation Request
          </>
        )}
      </button>

      <p className="text-[10px] text-gray-400 text-center">
        🔒 Your contact information is 100% confidential. No spam guaranteed.
      </p>

    </form>
  );
};
