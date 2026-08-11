import React from 'react';
import { ShieldCheck, Heart, Users, MapPin, Phone, Mail, Award } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/companyData';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div>
      <SEOHead 
        title="About Us | Namkamal Holidays™ - CEO Mr. Shubham Bomble"
        description="Learn about Namkamal Holidays, founded by Mr. Shubham Bomble. Our mission is to make travel accessible, enjoyable, and affordable for all with transparency and 24/7 support."
      />

      {/* Header Banner */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D]/20 to-[#E91E63]/20 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
            Company Overview
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            About Namkamal Holidays™
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            {COMPANY_INFO.tagline} • Developer Handover & Content Master Version 3.1
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
            
            {/* Left 2 Cols: Main Copy */}
            <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Welcome to Namkamal Holidays
              </h2>

              <p className="font-medium text-gray-800">
                Welcome to Namkamal Holidays, your gateway to unforgettable travel experiences at incredibly reasonable prices. We are a dedicated team of travel enthusiasts committed to providing you with exceptional tours and holiday packages that won't break the bank.
              </p>

              <p>
                We believe that travel is not just about visiting new places, but about creating lasting memories and forging meaningful connections with the world around us. Our team of experienced travel experts is dedicated to curating unique itineraries that showcase the best of each destination while catering to your individual preferences and interests.
              </p>

              <div className="p-5 bg-orange-50 rounded-2xl border-l-4 border-[#F7941D]">
                <p className="text-sm font-semibold text-gray-900 italic">
                  "According to us everyone deserves to explore the world without compromising on quality or cost. That's why we specialize in crafting affordable travel solutions that allow you to see the world without burning a hole in your pocket."
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 pt-4">Our Core Mission</h3>
              <p>
                Our mission is simple: to make travel accessible, enjoyable, and affordable for all. From budget-friendly group tours to customized private packages, we offer a wide range of options to suit every traveler's preferences and budget constraints.
              </p>

              <p>
                With a focus on transparency, integrity, and customer satisfaction, we work tirelessly to ensure that every aspect of your journey is seamless and stress-free. Our team of experienced travel experts is here to assist you at every stage of your trip, providing personalized recommendations, insider tips, and round-the-clock support to guarantee a memorable travel experience.
              </p>

              <p className="font-bold text-[#E91E63]">
                Join us at Namkamal Holidays and embark on incredible journeys at unbeatable prices. Your dream vacation awaits!
              </p>
            </div>

            {/* Right Col: Leadership & Office Box */}
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              
              <div className="text-center pb-6 border-b border-gray-200">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#F7941D] to-[#E91E63] p-1 mx-auto mb-3">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[#F7941D]">
                    <Users className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900">{COMPANY_INFO.founder}</h3>
                <span className="text-xs font-bold text-[#E91E63] uppercase tracking-wider block">{COMPANY_INFO.role}</span>
                <p className="text-xs text-gray-500 mt-2">Leading Namkamal Holidays with a vision for quality & accessible travel.</p>
              </div>

              <div className="space-y-3 text-xs">
                <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[11px] text-[#F7941D]">Head Office Location</h4>
                <p className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-[#F7941D] shrink-0 mt-0.5" />
                  {COMPANY_INFO.address}
                </p>

                <p className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4 text-[#F7941D] shrink-0" />
                  <a href={`tel:${COMPANY_INFO.rawPhone}`} className="font-semibold text-gray-900 hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </p>

                <p className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4 text-[#E91E63] shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-gray-900 hover:underline break-all">
                    {COMPANY_INFO.email}
                  </a>
                </p>
              </div>

              <button
                onClick={onOpenEnquiry}
                className="w-full py-3 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all hover:scale-105"
              >
                Plan Trip with Us
              </button>

            </div>

          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
            <div className="bg-orange-50/50 p-6 rounded-3xl border border-orange-100 text-center hover-lift transition-all duration-500 hover:shadow-xl group">
              <ShieldCheck className="w-10 h-10 text-[#F7941D] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-base font-extrabold text-gray-900 mb-1 group-hover:text-[#F7941D] transition-colors">Transparency & Integrity</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Clear inclusion lists, named hotel categories, and zero hidden charges.</p>
            </div>

            <div className="bg-pink-50/50 p-6 rounded-3xl border border-pink-100 text-center hover-lift transition-all duration-500 hover:shadow-xl group">
              <Heart className="w-10 h-10 text-[#E91E63] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-base font-extrabold text-gray-900 mb-1 group-hover:text-[#E91E63] transition-colors">Customer First Approach</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Round-the-clock travel assistance and dedicated trip managers for every tour.</p>
            </div>

            <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 text-center hover-lift transition-all duration-500 hover:shadow-xl group">
              <Award className="w-10 h-10 text-emerald-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-base font-extrabold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">Best Price Guarantee</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Direct B2B rates passed to guests to ensure maximum value for your money.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
