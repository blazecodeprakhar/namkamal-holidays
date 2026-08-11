import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import type { Package } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface PackageCardProps {
  pkg: Package;
  onEnquire: (packageTitle: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onEnquire }) => {
  const whatsappMessage = encodeURIComponent(`Hello Namkamal Holidays, I am interested in booking/enquiring for: ${pkg.name} (${pkg.code}). Please share itinerary details & price quotation.`);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover-lift transition-all duration-500 border border-gray-100 flex flex-col group h-full">
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img 
          src={pkg.gallery[0] || "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"} 
          alt={`${pkg.name} - Namkamal Holidays`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 group-hover:from-black/80 transition-colors duration-300" />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
          <span className="bg-gray-900/85 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
            {pkg.code}
          </span>
          {pkg.isFeatured && (
            <span className="bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md animate-pulse">
              <CheckCircle2 className="w-3 h-3" /> Featured
            </span>
          )}
        </div>

        {/* Bottom Destination & Duration Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs z-10">
          <span className="flex items-center gap-1 font-semibold bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-[#F7941D]" /> {pkg.destinationName}
          </span>
          <span className="flex items-center gap-1 font-bold bg-[#F7941D] text-white px-2.5 py-1 rounded-lg shadow-md group-hover:scale-105 transition-transform">
            <Clock className="w-3.5 h-3.5" /> {pkg.duration}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <Link to={`/packages/${pkg.id}`} className="group-hover:text-[#F7941D] transition-colors duration-300">
            <h3 className="text-lg font-extrabold text-gray-900 line-clamp-1 mb-2">
              {pkg.name}
            </h3>
          </Link>

          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
            {pkg.overview}
          </p>

          {/* Highlights Preview */}
          <div className="space-y-1.5 mb-5 bg-orange-50/50 p-3.5 rounded-2xl border border-orange-100/60 group-hover:border-orange-200 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#E91E63] block mb-1">
              Package Sightseeing Highlights
            </span>
            {pkg.tourHighlights.slice(0, 3).map((hl, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="line-clamp-1 font-medium">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Dual Action Footer */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[10px] text-gray-500 block uppercase font-medium">Starting From</span>
              <span className="text-2xl font-extrabold text-[#F7941D] tracking-tight group-hover:text-[#E91E63] transition-colors">
                {pkg.startingPrice}
              </span>
              <span className="text-[10px] text-gray-400 font-normal ml-1">/ person</span>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-emerald-50 hover:bg-emerald-500 text-emerald-600 hover:text-white transition-all shadow-sm hover:scale-110"
              title="Quick WhatsApp Enquiry"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <Link 
              to={`/packages/${pkg.id}`}
              className="w-full text-center py-2.5 px-3 rounded-xl border border-gray-300 hover:border-[#F7941D] hover:text-[#F7941D] font-bold text-xs transition-all hover:bg-orange-50"
            >
              View Itinerary
            </Link>

            <button 
              onClick={() => onEnquire(pkg.name)}
              className="w-full text-center py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#F7941D] to-[#E91E63] hover:opacity-95 text-white font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
            >
              Enquire Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
