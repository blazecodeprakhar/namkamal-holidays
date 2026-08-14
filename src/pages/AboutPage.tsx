import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Users, MapPin, Phone, Mail, Award, Calendar, Star, Compass, CheckCircle2, ArrowRight, Globe, Sliders } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/companyData';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="overflow-hidden bg-gray-50/50">
      <SEOHead 
        title="About Us | Namkamal Holidays™ - CEO Mr. Shubham Bomble"
        description="Learn about Namkamal Holidays, founded in 2019 by Mr. Shubham Bomble. Our mission is to make travel accessible, enjoyable, and affordable for all with transparency and 24/7 support."
      />

      {/* Header Banner - Premium Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-16 sm:py-24 overflow-hidden border-b border-gray-800/60">
        {/* Glow Ambient Effects */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#F7941D]/20 to-[#E91E63]/20 blur-3xl pointer-events-none rounded-full opacity-60" />
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-[#F7941D]/10 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-[#E91E63]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Since 2019 Badge - Clean Compass Icon */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F7941D]/15 to-[#E91E63]/15 border border-[#F7941D]/30 backdrop-blur-md"
          >
            <Compass className="w-4 h-4 text-[#F7941D]" />
            <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#F7941D] to-pink-400 uppercase tracking-widest">
              Since 2019 • Trusted Travel Partner
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
          >
            About <span className="bg-gradient-to-r from-[#F7941D] via-amber-300 to-[#E91E63] bg-clip-text text-transparent">Namkamal Holidays™</span>
          </motion.h1>

          {/* Subheading / Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            {COMPANY_INFO.tagline}
          </motion.p>

          {/* Animated Trust Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-lg hover:border-[#F7941D]/50 transition-all hover:-translate-y-1">
              <Calendar className="w-5 h-5 text-[#F7941D] mb-1.5" />
              <span className="text-lg sm:text-xl font-black text-white">Since 2019</span>
              <span className="text-[11px] text-gray-400 font-medium">Years of Excellence</span>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-lg hover:border-[#F7941D]/50 transition-all hover:-translate-y-1">
              <Star className="w-5 h-5 text-amber-400 mb-1.5 fill-amber-400" />
              <span className="text-lg sm:text-xl font-black text-white">4.9 / 5.0</span>
              <span className="text-[11px] text-gray-400 font-medium">Google Rated Service</span>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-lg hover:border-[#E91E63]/50 transition-all hover:-translate-y-1">
              <Users className="w-5 h-5 text-pink-400 mb-1.5" />
              <span className="text-lg sm:text-xl font-black text-white">1000s+</span>
              <span className="text-[11px] text-gray-400 font-medium">Happy Travelers</span>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-lg hover:border-emerald-500/50 transition-all hover:-translate-y-1">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1.5" />
              <span className="text-lg sm:text-xl font-black text-white">100% Verified</span>
              <span className="text-[11px] text-gray-400 font-medium">Transparent Pricing</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
            
            {/* Left 2 Cols: Main Story Copy */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base"
            >
              <div className="inline-block px-3 py-1 bg-orange-100/80 text-[#F7941D] font-extrabold text-xs rounded-full uppercase tracking-wider">
                Our Journey & Legacy
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                Welcome to Namkamal Holidays
              </h2>

              <p className="font-medium text-gray-800 leading-relaxed text-base">
                Established in 2019, Namkamal Holidays is your gateway to unforgettable travel experiences at incredibly reasonable prices. We are a dedicated team of travel enthusiasts committed to providing you with exceptional tours and holiday packages that won't break the bank.
              </p>

              <p>
                We believe that travel is not just about visiting new places, but about creating lasting memories and forging meaningful connections with the world around us. Our team of experienced travel experts is dedicated to curating unique itineraries that showcase the best of each destination while catering to your individual preferences and interests.
              </p>

              {/* Founder Quote Card */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="p-6 bg-gradient-to-r from-orange-50 via-amber-50 to-pink-50 rounded-2xl border-l-4 border-[#F7941D] shadow-sm space-y-2 relative overflow-hidden"
              >
                <div className="absolute right-4 top-2 text-6xl text-orange-200/50 font-serif select-none pointer-events-none">“</div>
                <p className="text-sm font-semibold text-gray-900 italic relative z-10">
                  "According to us, everyone deserves to explore the world without compromising on quality or cost. That's why we specialize in crafting affordable travel solutions that allow you to see the world without burning a hole in your pocket."
                </p>
                <span className="block text-xs font-extrabold text-[#F7941D] uppercase tracking-wider pt-1">
                  — Shubham Bomble, Founder & CEO
                </span>
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#E91E63]" />
                Our Core Mission
              </h3>
              
              <p>
                Our mission is simple: to make travel accessible, enjoyable, and affordable for all. From budget-friendly group tours to customized private packages, we offer a wide range of options to suit every traveler's preferences and budget constraints.
              </p>

              <p>
                With a focus on transparency, integrity, and customer satisfaction, we work tirelessly to ensure that every aspect of your journey is seamless and stress-free. Our team of experienced travel experts is here to assist you at every stage of your trip, providing personalized recommendations, insider tips, and round-the-clock support to guarantee a memorable travel experience.
              </p>

              <div className="p-4 bg-gray-900 text-white rounded-2xl flex items-center justify-between gap-4 shadow-lg">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-[#F7941D] uppercase tracking-wider">Ready to Explore?</span>
                  <p className="text-xs sm:text-sm text-gray-300">Embark on incredible journeys at unbeatable direct pricing.</p>
                </div>
                <button 
                  onClick={onOpenEnquiry}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-bold text-xs rounded-xl shadow-md hover:scale-105 transition-all shrink-0 flex items-center gap-1.5"
                >
                  Book Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>

            {/* Right Col: Leadership & Office Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xl space-y-6 sticky top-24"
            >
              
              <div className="text-center pb-6 border-b border-gray-100">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#F7941D] via-amber-400 to-[#E91E63] p-1 mx-auto mb-4 shadow-lg">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[#F7941D]">
                    <Users className="w-12 h-12" />
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">{COMPANY_INFO.founder}</h3>
                <span className="text-xs font-bold text-[#E91E63] uppercase tracking-wider block mt-0.5">{COMPANY_INFO.role}</span>
                <p className="text-xs text-gray-500 mt-2">Leading Namkamal Holidays since 2019 with a vision for quality & accessible travel.</p>
              </div>

              <div className="space-y-4 text-xs">
                <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[11px] text-[#F7941D] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Head Office Location
                </h4>
                <p className="text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
                  {COMPANY_INFO.address}
                </p>

                <div className="space-y-2 pt-1">
                  <a 
                    href={`tel:${COMPANY_INFO.rawPhone}`} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-orange-50/60 border border-orange-100 hover:bg-orange-100/60 transition-colors text-gray-700"
                  >
                    <Phone className="w-4 h-4 text-[#F7941D] shrink-0" />
                    <div>
                      <span className="block text-[10px] text-gray-400 font-medium">Direct Phone Call</span>
                      <span className="font-bold text-gray-900">{COMPANY_INFO.phone}</span>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-pink-50/60 border border-pink-100 hover:bg-pink-100/60 transition-colors text-gray-700"
                  >
                    <Mail className="w-4 h-4 text-[#E91E63] shrink-0" />
                    <div className="overflow-hidden">
                      <span className="block text-[10px] text-gray-400 font-medium">Official Email</span>
                      <span className="font-bold text-gray-900 truncate block">{COMPANY_INFO.email}</span>
                    </div>
                  </a>
                </div>
              </div>

              <button
                onClick={onOpenEnquiry}
                className="w-full py-3.5 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Plan Trip with Us <ArrowRight className="w-4 h-4" />
              </button>

            </motion.div>

          </div>

          {/* Unique Timeline / Milestone Section */}
          <div className="py-12 border-t border-gray-200">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold text-[#F7941D] uppercase tracking-widest block mb-2">Our Evolution</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Growing Strong Since 2019</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">From local customized tours to pan-India and international holiday packages.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { year: "2019", title: "Foundation", desc: "Started Namkamal Holidays in Nanded with a vision of affordable, transparent travel." },
                { year: "2021", title: "Group & Student Tours", desc: "Expanded into college convocation trips, student outings, and corporate group packages." },
                { year: "2023", title: "Pan-India Reach", desc: "Successfully organized 30+ member group tours to Rajasthan, Kashmir, Kerala, & Ladakh." },
                { year: "2026+", title: "Global Expansion", desc: "Curating luxury & budget international trips to Dubai, Bali, Thailand, and Europe." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 shadow-sm relative group hover:border-[#F7941D] transition-colors"
                >
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] to-[#E91E63] block mb-1">
                    {item.year}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-[#F7941D] transition-colors">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pillars & Core Values Grid */}
          <div className="pt-12 border-t border-gray-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-extrabold text-[#E91E63] uppercase tracking-widest block mb-2">Core Principles</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Why Guests Trust Namkamal</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                whileHover={{ y: -6 }}
                className="bg-orange-50/50 p-6 rounded-3xl border border-orange-100 text-center hover:shadow-xl transition-all group"
              >
                <ShieldCheck className="w-10 h-10 text-[#F7941D] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-base font-extrabold text-gray-900 mb-1 group-hover:text-[#F7941D] transition-colors">Transparency & Integrity</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Clear inclusion lists, named hotel categories, and zero hidden charges.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -6 }}
                className="bg-pink-50/50 p-6 rounded-3xl border border-pink-100 text-center hover:shadow-xl transition-all group"
              >
                <Heart className="w-10 h-10 text-[#E91E63] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-base font-extrabold text-gray-900 mb-1 group-hover:text-[#E91E63] transition-colors">Customer First Approach</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Round-the-clock travel assistance and dedicated trip managers for every tour.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -6 }}
                className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 text-center hover:shadow-xl transition-all group"
              >
                <Award className="w-10 h-10 text-emerald-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-base font-extrabold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">Best Price Guarantee</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Direct B2B rates passed to guests to ensure maximum value for your money.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -6 }}
                className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100 text-center hover:shadow-xl transition-all group"
              >
                <Sliders className="w-10 h-10 text-indigo-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-base font-extrabold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">100% Customized Trips</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Customized itineraries according to your exact budget, dates, and stay preferences.</p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-white border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <Globe className="w-10 h-10 text-[#F7941D] mx-auto animate-bounce" />
          <h3 className="text-2xl sm:text-3xl font-black">Plan Your Next Journey With Us</h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Whether it's a family vacation, a romantic honeymoon, or a group convocation tour, we are here to craft your perfect itinerary.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenEnquiry}
              className="px-8 py-3.5 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              Get Free Tour Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
