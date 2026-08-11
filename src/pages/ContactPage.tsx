import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/companyData';
import { EnquiryForm } from '../components/EnquiryForm';

export const ContactPage: React.FC = () => {
  return (
    <div>
      <SEOHead 
        title="Contact Us | Namkamal Holidays™ - Office Nanded Maharashtra"
        description="Contact Namkamal Holidays office in Nanded, Maharashtra. Phone: +91 95453 99825, Email: info.namkamalholidays@gmail.com. Hours: 9:00 AM - 9:00 PM."
      />

      {/* Header Banner */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D]/20 to-[#E91E63]/20 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Contact Namkamal Holidays™
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            We are here to assist you with tour planning, itinerary customizations, visa guidance & reservations.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Direct Contact Information */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-bold text-[#E91E63] uppercase tracking-widest block mb-1">
                  Official Communication
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Head Office Information
                </h2>
                <p className="text-xs text-gray-600 mt-1">
                  CEO & Founder: <strong className="text-gray-900">{COMPANY_INFO.founder}</strong>
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F7941D] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">Office Address</h4>
                    <p className="text-xs text-gray-600 leading-normal">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">Official Phone & WhatsApp</h4>
                    <a href={`tel:${COMPANY_INFO.rawPhone}`} className="text-xs font-bold text-[#F7941D] hover:underline block">
                      {COMPANY_INFO.phone}
                    </a>
                    <a href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays`} target="_blank" rel="noopener noreferrer" className="text-[11px] text-emerald-600 font-semibold hover:underline block mt-0.5">
                      💬 Connect via WhatsApp
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#E91E63] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">Official Email</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs font-semibold text-gray-700 hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">Working Hours</h4>
                    <p className="text-xs text-gray-600">{COMPANY_INFO.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="py-3.5 px-4 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-2xl text-center shadow flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F7941D]" /> Call Now
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-2xl text-center shadow flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp
                </a>
              </div>

              {/* Embedded Google Maps Placeholder / Link */}
              <div className="bg-gray-100 p-4 rounded-3xl border border-gray-200 text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-800">
                  <MapPin className="w-4 h-4 text-[#F7941D]" /> Google Business Profile Location
                </div>
                <a
                  href={COMPANY_INFO.socials.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-full font-bold text-xs hover:border-[#F7941D] hover:text-[#F7941D] transition-colors"
                >
                  Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right: Embedded Enquiry Form */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-1">
                  Send Travel Query
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  Plan Your Trip Enquiry
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your travel preferences and our travel specialist will contact you with a customized quotation.
                </p>
              </div>

              <EnquiryForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
