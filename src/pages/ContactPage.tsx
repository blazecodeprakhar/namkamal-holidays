import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Headphones } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/companyData';
import { EnquiryForm } from '../components/EnquiryForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gray-50/50">
      <SEOHead 
        title="Contact Us | Namkamal Holidays™ - Office Nanded Maharashtra"
        description="Contact Namkamal Holidays office in Nanded, Maharashtra. Phone: +91 95453 99825, Email: info.namkamalholidays@gmail.com. Hours: 9:00 AM - 9:00 PM."
      />

      {/* Header Banner - Premium Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-16 sm:py-24 overflow-hidden border-b border-gray-800/60">
        {/* Glow Effects */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-r from-[#F7941D]/20 via-amber-500/15 to-[#E91E63]/20 blur-3xl pointer-events-none rounded-full opacity-60" />
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#F7941D]/10 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#E91E63]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Top Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F7941D]/15 via-amber-500/15 to-[#E91E63]/15 border border-[#F7941D]/30 backdrop-blur-md"
          >
            <Headphones className="w-4 h-4 text-[#F7941D]" />
            <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#F7941D] to-pink-400 uppercase tracking-widest">
              24/7 Dedicated Support • Direct Consultation
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black text-white leading-tight"
          >
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] tracking-wider text-white mb-2">Contact</span>
            <span className="bg-gradient-to-r from-[#F7941D] via-amber-300 to-[#E91E63] bg-clip-text text-transparent block text-3xl sm:text-5xl lg:text-6xl tracking-tight">Namkamal Holidays™</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            We are here to assist you with tour planning, itinerary customizations, visa guidance, and instant reservations.
          </motion.p>

          {/* Quick Contact Chips */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <a 
              href={`tel:${COMPANY_INFO.rawPhone}`} 
              className="bg-gray-900/80 border border-gray-800 p-4 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-lg hover:border-[#F7941D]/50 transition-all hover:-translate-y-1 group"
            >
              <Phone className="w-5 h-5 text-[#F7941D] mb-1.5 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-extrabold text-white">{COMPANY_INFO.phone}</span>
              <span className="text-[10px] text-gray-400 font-medium">Direct Phone Call</span>
            </a>

            <a 
              href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays`} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/80 border border-gray-800 p-4 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-lg hover:border-emerald-500/50 transition-all hover:-translate-y-1 group"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400 mb-1.5 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-extrabold text-white">Instant WhatsApp</span>
              <span className="text-[10px] text-gray-400 font-medium">Quick Itinerary Chat</span>
            </a>

            <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-lg hover:border-pink-500/50 transition-all hover:-translate-y-1">
              <Clock className="w-5 h-5 text-pink-400 mb-1.5" />
              <span className="text-xs font-extrabold text-white">9:00 AM – 9:00 PM</span>
              <span className="text-[10px] text-gray-400 font-medium">Open 7 Days a Week</span>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-lg hover:border-amber-400/50 transition-all hover:-translate-y-1">
              <MapPin className="w-5 h-5 text-amber-400 mb-1.5" />
              <span className="text-xs font-extrabold text-white">Nanded, MH</span>
              <span className="text-[10px] text-gray-400 font-medium">Head Office Location</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Direct Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
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
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4 hover:border-orange-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-orange-100 text-[#F7941D] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">Office Address</h4>
                    <p className="text-xs text-gray-600 leading-normal">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4 hover:border-emerald-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
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

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4 hover:border-pink-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-pink-100 text-[#E91E63] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">Official Email</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs font-semibold text-gray-700 hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4 hover:border-amber-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
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
                  className="py-3.5 px-4 bg-gray-900 hover:bg-black text-white text-xs font-extrabold rounded-2xl text-center shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 text-[#F7941D]" /> Call Now
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold rounded-2xl text-center shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp
                </a>
              </div>

              {/* Embedded Google Maps Placeholder / Link */}
              <div className="bg-gradient-to-r from-orange-50/60 to-pink-50/60 p-5 rounded-3xl border border-orange-100 text-center space-y-3 shadow-sm">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-900">
                  <MapPin className="w-4 h-4 text-[#F7941D]" /> Google Business Profile Location
                </div>
                <a
                  href={COMPANY_INFO.socials.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-full font-bold text-xs hover:border-[#F7941D] hover:text-[#F7941D] transition-all shadow-sm hover:scale-105"
                >
                  Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>

            {/* Right: Embedded Enquiry Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xl"
            >
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
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};
