import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import type { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const targetUrl = `/destinations/${destination.category}/${destination.id}`;

  return (
    <Link 
      to={targetUrl}
      className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover-lift border border-gray-100 flex flex-col h-80 transition-all duration-500"
    >
      {/* Background Image with Overlay */}
      <img 
        src={destination.image} 
        alt={`${destination.name} Tour Packages - Namkamal Holidays`}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-1000 ease-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-colors duration-500" />

      {/* Top Badges */}
      <div className="relative p-4 flex items-center justify-between z-10">
        <span className="bg-white/90 backdrop-blur-md text-gray-900 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow animate-zoom-in">
          {destination.packageCount} Tour Packages
        </span>
        {destination.badge && (
          <span className="bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md animate-pulse">
            {destination.badge}
          </span>
        )}
      </div>

      {/* Bottom Info */}
      <div className="relative mt-auto p-6 z-10 flex flex-col justify-end text-white transform group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-1 text-xs text-[#F7941D] font-bold mb-1 uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 animate-bounce" /> {destination.category === 'domestic' ? 'India' : 'International'}
        </div>

        <h3 className="text-2xl font-extrabold tracking-tight group-hover:text-[#F7941D] transition-colors duration-300 mb-1">
          {destination.name}
        </h3>

        <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-4 group-hover:text-white transition-colors">
          {destination.shortDesc}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-white/20">
          <div>
            <span className="text-[10px] text-gray-300 uppercase block font-medium">Starting From</span>
            <span className="text-lg font-extrabold text-[#F7941D]">{destination.startingPrice}</span>
          </div>

          <span className="w-9 h-9 rounded-full bg-white/20 group-hover:bg-gradient-to-r group-hover:from-[#F7941D] group-hover:to-[#E91E63] group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-md">
            <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </Link>
  );
};
