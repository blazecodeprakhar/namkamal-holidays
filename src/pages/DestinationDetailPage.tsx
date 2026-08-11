import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, MessageSquare } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PackageCard } from '../components/PackageCard';
import { ALL_DESTINATIONS } from '../data/destinations';
import { PACKAGES_DATA } from '../data/packages';
import { COMPANY_INFO } from '../data/companyData';

interface DestinationDetailPageProps {
  onOpenEnquiry: (destinationName?: string) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ onOpenEnquiry }) => {
  const { id } = useParams<{ id: string; category: string }>();

  const destination = ALL_DESTINATIONS.find(d => d.id === id);
  const destinationPackages = PACKAGES_DATA.filter(p => p.destinationId === id);

  if (!destination) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Destination Not Found</h2>
        <Link to="/" className="text-[#F7941D] font-bold hover:underline">Return to Home</Link>
      </div>
    );
  }

  const samplePackage = destinationPackages[0];

  return (
    <div>
      <SEOHead 
        title={`${destination.name} Tour Packages | Namkamal Holidays™`}
        description={`Explore best ${destination.name} holiday packages with Namkamal Holidays. Popular places: ${destination.popularPlaces.join(', ')}. Starting from ${destination.startingPrice}.`}
      />

      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden bg-gray-900">
        <img 
          src={destination.image} 
          alt={`${destination.name} Tour Packages`}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
            {destination.category === 'domestic' ? '🇮🇳 India Destination' : '🌍 International Gateway'}
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            {destination.name} Tour Packages
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {destination.shortDesc}
          </p>
        </div>
      </section>

      {/* Overview & Popular Places */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            <div className="md:col-span-2">
              <span className="text-xs font-bold text-[#E91E63] uppercase tracking-wider block mb-1">
                Destination Overview
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Experience the Magic of {destination.name}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Namkamal Holidays brings you thoughtfully crafted {destination.name} holiday itineraries with verified hotel stays, private transfers, and exact named sightseeing points. Whether traveling with family, on honeymoon, or with a group of friends, we customize every detail.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-bold text-gray-700 block w-full mb-1">Must Visit Sightseeing Points:</span>
                {destination.popularPlaces.map((place, idx) => (
                  <span key={idx} className="bg-orange-50 text-[#F7941D] text-xs font-bold px-3 py-1.5 rounded-full border border-orange-100 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {place}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Price CTA Box */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-3xl shadow-xl text-center">
              <span className="text-xs text-gray-400 font-medium uppercase block mb-1">Starting From Price</span>
              <span className="text-4xl font-extrabold text-[#F7941D]">{destination.startingPrice}</span>
              <span className="text-xs text-gray-300 block mb-5">per person on twin sharing</span>

              <button
                onClick={() => onOpenEnquiry(destination.name)}
                className="w-full py-3.5 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:scale-105 transition-all mb-3"
              >
                Request Custom Quotation
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays,%20I%20want%20price%20quotation%20for%20${destination.name}%20packages.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:underline flex items-center justify-center gap-1 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Instant WhatsApp Quote
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Package Cards for this Destination */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-1">
              Handcrafted Circuits
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Featured {destination.name} Packages
            </h2>
          </div>

          {destinationPackages.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8">
              {destinationPackages.map(pkg => (
                <div key={pkg.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md">
                  <PackageCard pkg={pkg} onEnquire={onOpenEnquiry} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl text-center border border-gray-200">
              <p className="text-gray-600 text-sm">Multiple custom itineraries available for {destination.name}.</p>
              <button
                onClick={() => onOpenEnquiry(destination.name)}
                className="mt-4 px-6 py-2.5 bg-[#F7941D] text-white rounded-xl text-xs font-bold"
              >
                Enquire for Custom {destination.name} Itinerary
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Sample Itinerary Teaser Section */}
      {samplePackage && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#E91E63] uppercase tracking-widest block mb-1">
                Day-Wise Preview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Sample Itinerary: {samplePackage.name} ({samplePackage.duration})
              </h2>
            </div>

            <div className="space-y-4">
              {samplePackage.dayWiseItinerary.map((dayItem) => (
                <div key={dayItem.day} className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-xl bg-gray-900 text-[#F7941D] font-extrabold text-sm flex items-center justify-center shrink-0">
                    Day {dayItem.day}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-1">{dayItem.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{dayItem.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link 
                to={`/packages/${samplePackage.id}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-full font-bold text-xs hover:bg-black transition-colors"
              >
                View Full Package Inclusions & Terms →
              </Link>
            </div>

          </div>
        </section>
      )}

    </div>
  );
};
