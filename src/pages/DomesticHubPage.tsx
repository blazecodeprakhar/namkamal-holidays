import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { DestinationCard } from '../components/DestinationCard';
import { PackageCard } from '../components/PackageCard';
import { DOMESTIC_DESTINATIONS } from '../data/destinations';
import { PACKAGES_DATA } from '../data/packages';

interface DomesticHubPageProps {
  onOpenEnquiry: (destinationName?: string) => void;
}

export const DomesticHubPage: React.FC<DomesticHubPageProps> = ({ onOpenEnquiry }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const domesticPackages = PACKAGES_DATA.filter(p => p.category === 'domestic');

  const filteredDestinations = DOMESTIC_DESTINATIONS.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SEOHead 
        title="Domestic Holiday Packages | Namkamal Holidays™ - India Tour Packages"
        description="Explore India's top holiday destinations: Rajasthan, Kerala, Goa, Kashmir, Gujarat, Himachal Pradesh. Customized family, couple & group itineraries at best prices."
      />

      {/* Header Banner */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D]/30 to-[#E91E63]/30 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
            🇮🇳 Explore Incredible India
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Domestic Tour Packages
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Discover royal forts of Rajasthan, backwaters of Kerala, beaches of Goa, paradise of Kashmir, culture of Gujarat & snow peaks of Himachal.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-8 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination (e.g. Rajasthan, Kerala, Goa...)"
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white text-gray-900 text-xs font-medium focus:outline-none shadow-xl"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
          </div>
        </div>
      </section>

      {/* Top 6 Flagship State Destinations Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-[#E91E63] uppercase tracking-widest block mb-1">
                State Destinations Navigation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Popular India Destinations
              </h2>
            </div>
            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              6 Flagship States
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {filteredDestinations.map(dest => (
              <div key={dest.id} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm">
                <DestinationCard destination={dest} />
              </div>
            ))}
          </div>

          {/* Featured Domestic Tour Packages */}
          <div className="pt-10 border-t border-gray-100">
            <div className="mb-10">
              <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-1">
                Curated Packages
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Domestic Package Circuit Master
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {domesticPackages.map(pkg => (
                <div key={pkg.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md">
                  <PackageCard pkg={pkg} onEnquire={onOpenEnquiry} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
