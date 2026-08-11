import React from 'react';
import { MapPin, Globe, Sliders, Heart, Users, Plane, Train, Hotel, FileCheck, BookOpen, Shield, Anchor, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SERVICES_LIST } from '../data/companyData';

interface ServicesPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div>
      <SEOHead 
        title="Our Services | Namkamal Holidays™ - Domestic, International, Visa & Tickets"
        description="Explore 13 complete travel services by Namkamal Holidays: Domestic & International tour packages, customized holidays, honeymoon getaways, flight, train, hotel booking, visa & passport assistance."
      />

      {/* Header Banner */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D]/20 to-[#E91E63]/20 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#E91E63] uppercase tracking-widest block mb-2">
            End-to-End Travel Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Our 13 Travel Services
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            From customized tour packages to visa, passport, flight and hotel reservations – we handle every detail of your journey.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap justify-center gap-8">
            {SERVICES_LIST.map((svc, idx) => (
              <div 
                key={svc.id}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover-lift transition-all duration-500 flex flex-col justify-between group"
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
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-[#E91E63] uppercase tracking-widest block mb-1">
                    Service {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>

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
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Assistance Banner */}
      <section className="py-12 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Need Assistance With Multiple Services?</h3>
          <p className="text-xs text-gray-600 mb-6">
            Get combined flight + hotel + tour package discounts for your entire family or group.
          </p>
          <button
            onClick={() => onOpenEnquiry("Combined Multi-Service Quote")}
            className="px-8 py-3.5 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:scale-105 transition-all"
          >
            Get Multi-Service Quote
          </button>
        </div>
      </section>
    </div>
  );
};
