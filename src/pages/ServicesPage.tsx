import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Sliders, Heart, Users, Plane, Train, Hotel, FileCheck, BookOpen, Shield, Anchor, Banknote, CheckCircle2, Compass, ArrowRight, Layers } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SERVICES_LIST } from '../data/companyData';

interface ServicesPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="overflow-hidden bg-gray-50/50">
      <SEOHead 
        title="Our Services | Namkamal Holidays™ - Domestic, International, Forex & Visa"
        description="Explore 14 complete travel services by Namkamal Holidays: Domestic & International tour packages, customized holidays, honeymoon getaways, flight, train, hotel booking, forex exchange, visa & passport assistance."
      />

      {/* Header Banner - Premium Animated Hero Section */}
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
            <Compass className="w-4 h-4 text-[#F7941D]" />
            <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#F7941D] to-pink-400 uppercase tracking-widest">
              End-to-End Travel Solutions • 14 Services
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black text-white leading-tight"
          >
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-wider text-white mb-2">Our Complete</span>
            <span className="bg-gradient-to-r from-[#F7941D] via-amber-300 to-[#E91E63] bg-clip-text text-transparent block text-3xl sm:text-5xl lg:text-6xl tracking-tight">Travel Services</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            From customized tour packages to forex currency exchange, visa, passport, flight and hotel reservations – we handle every detail of your journey.
          </motion.p>

          {/* Quick Category Chips */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2.5 pt-4 max-w-3xl mx-auto"
          >
            {[
              "🇮🇳 Domestic Packages",
              "🌍 International Tours",
              "💱 Forex Exchange",
              "✈️ Flight & Train Tickets",
              "🏨 Hotel Reservations",
              "🛂 Visa & Passport"
            ].map((chip, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-full bg-gray-900/90 border border-gray-800 text-gray-300 text-xs font-semibold backdrop-blur-sm">
                {chip}
              </span>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap justify-center gap-8">
            {SERVICES_LIST.map((svc, idx) => (
              <motion.div 
                key={svc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md bg-white p-8 rounded-3xl border border-gray-100/90 shadow-sm hover:shadow-2xl hover:border-orange-200 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F7941D] to-[#E91E63] text-white p-0.5 mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#F7941D] group-hover:bg-gradient-to-r group-hover:from-[#F7941D] group-hover:to-[#E91E63] group-hover:text-white transition-all duration-300">
                      {idx === 0 && <MapPin className="w-8 h-8" />}
                      {idx === 1 && <Globe className="w-8 h-8" />}
                      {idx === 2 && <Sliders className="w-8 h-8" />}
                      {idx === 3 && <Heart className="w-8 h-8" />}
                      {idx === 4 && <Users className="w-8 h-8" />}
                      {idx === 5 && <Users className="w-8 h-8" />}
                      {idx === 6 && <Plane className="w-8 h-8" />}
                      {idx === 7 && <Train className="w-8 h-8 text-current" />}
                      {idx === 8 && <Hotel className="w-8 h-8" />}
                      {idx === 9 && <FileCheck className="w-8 h-8" />}
                      {idx === 10 && <BookOpen className="w-8 h-8" />}
                      {idx === 11 && <Shield className="w-8 h-8" />}
                      {idx === 12 && <Anchor className="w-8 h-8" />}
                      {idx === 13 && <Banknote className="w-8 h-8" />}
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-black text-[#E91E63] uppercase tracking-widest block">
                      Service {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-[#F7941D] transition-colors duration-300">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => onOpenEnquiry(svc.title)}
                    className="w-full py-3.5 rounded-xl bg-orange-50 hover:bg-gradient-to-r hover:from-[#F7941D] hover:to-[#E91E63] text-[#F7941D] hover:text-white font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Request Service Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Multi-Service Assistance Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F7941D] to-[#E91E63] text-white mx-auto flex items-center justify-center shadow-lg"
          >
            <Layers className="w-6 h-6" />
          </motion.div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Need Assistance With Multiple Services?</h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Get combined flight + hotel + tour package + forex exchange discounts for your entire family or group.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiry("Combined Multi-Service Quote")}
              className="px-8 py-4 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              Get Multi-Service Package Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
