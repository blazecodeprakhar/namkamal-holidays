import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, MapPin, CheckCircle2, XCircle, ChevronDown, ChevronUp, MessageSquare, Send, ShieldCheck, Hotel, Utensils, Car, AlertTriangle, Image as ImageIcon } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PACKAGES_DATA } from '../data/packages';
import { COMPANY_INFO } from '../data/companyData';

interface PackageDetailPageProps {
  onOpenEnquiry: (packageTitle: string) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const [activeDay, setActiveDay] = useState<number | null>(1);

  const pkg = PACKAGES_DATA.find(p => p.id === slug);

  if (!pkg) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h2>
        <Link to="/" className="text-[#F7941D] font-bold hover:underline">Return to Home</Link>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Hello Namkamal Holidays, I want to book/enquire about package: ${pkg.name} (Code: ${pkg.code}). Please send me full itinerary PDF & price quote.`);

  return (
    <div>
      <SEOHead 
        title={`${pkg.name} (${pkg.duration}) | Namkamal Holidays™`}
        description={`${pkg.name} (${pkg.code}) - ${pkg.duration}. Highlights: ${pkg.tourHighlights.slice(0, 3).join(', ')}. Starting from ${pkg.startingPrice}.`}
      />

      {/* Package Header Breadcrumb */}
      <div className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to={`/destinations/${pkg.category}`} className="hover:text-white uppercase">{pkg.category}</Link>
            <span>/</span>
            <span className="text-[#F7941D] font-semibold">{pkg.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="bg-[#F7941D] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Code: {pkg.code}
            </span>
            <span className="bg-white/10 text-gray-200 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#F7941D]" /> {pkg.duration}
            </span>
            <span className="bg-white/10 text-gray-200 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#E91E63]" /> {pkg.destinationName}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {pkg.name}
          </h1>

          <p className="text-xs sm:text-sm text-gray-300 mt-2 font-medium">
            Travel Type: <strong className="text-white">{pkg.travelType}</strong>
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left 2 Cols: Main Package Details */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Photo Gallery Grid */}
              <div>
                <h3 className="text-xs font-bold text-[#E91E63] uppercase tracking-widest block mb-3 flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4" /> Package Photo Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-3xl overflow-hidden">
                  {pkg.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="relative aspect-[16/10] overflow-hidden bg-gray-100 group">
                      <img 
                        src={imgUrl} 
                        alt={`${pkg.name} sight ${idx+1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Overview */}
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-4">
                <h3 className="text-xl font-extrabold text-gray-900">Package Overview</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {pkg.overview}
                </p>

                {/* Tour Highlights Pills */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#F7941D] mb-2">Tour Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pkg.tourHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Day-Wise Detailed Itinerary Accordion */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-extrabold text-gray-900">Day-Wise Detailed Itinerary</h3>
                  <span className="text-xs font-bold text-gray-500">{pkg.durationDays} Days Circuit</span>
                </div>

                <div className="space-y-3">
                  {pkg.dayWiseItinerary.map((dayItem) => {
                    const isOpen = activeDay === dayItem.day;
                    return (
                      <div key={dayItem.day} className="border border-gray-200 rounded-2xl overflow-hidden transition-colors">
                        <button
                          onClick={() => setActiveDay(isOpen ? null : dayItem.day)}
                          className="w-full p-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-9 h-9 rounded-xl bg-gray-900 text-[#F7941D] font-extrabold text-xs flex items-center justify-center shrink-0">
                              Day {dayItem.day}
                            </span>
                            <span className="text-sm font-bold text-gray-900">{dayItem.title}</span>
                          </div>
                          {isOpen ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                        </button>

                        {isOpen && (
                          <div className="p-5 bg-white border-t border-gray-200 text-xs sm:text-sm text-gray-700 leading-relaxed">
                            {dayItem.description}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sightseeing Points Named List */}
              <div className="bg-orange-50/60 p-6 rounded-3xl border border-orange-100 space-y-3">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F7941D]" /> Named Sightseeing Attractions Included
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium">
                  {pkg.sightseeingPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D] mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Inclusions */}
                <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100">
                  <h4 className="text-base font-extrabold text-emerald-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Package Inclusions
                  </h4>
                  <ul className="space-y-2.5 text-xs text-gray-700">
                    {pkg.inclusions.map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-red-50/50 p-6 rounded-3xl border border-red-100">
                  <h4 className="text-base font-extrabold text-red-900 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" /> Package Exclusions
                  </h4>
                  <ul className="space-y-2.5 text-xs text-gray-700">
                    {pkg.exclusions.map((exc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Hotel, Meals & Transfers Summary Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                  <Hotel className="w-6 h-6 text-[#F7941D] mb-2" />
                  <h5 className="text-xs font-bold text-gray-900 uppercase">Hotel Category</h5>
                  <p className="text-xs text-gray-600 mt-1">{pkg.hotelPlan}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                  <Utensils className="w-6 h-6 text-[#E91E63] mb-2" />
                  <h5 className="text-xs font-bold text-gray-900 uppercase">Meal Inclusions</h5>
                  <p className="text-xs text-gray-600 mt-1">{pkg.meals}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                  <Car className="w-6 h-6 text-emerald-600 mb-2" />
                  <h5 className="text-xs font-bold text-gray-900 uppercase">Transfers</h5>
                  <p className="text-xs text-gray-600 mt-1">{pkg.transfers}</p>
                </div>
              </div>

              {/* Important Notes & Cancellation Terms */}
              <div className="bg-amber-50/60 p-6 rounded-3xl border border-amber-200 space-y-4">
                <h4 className="text-sm font-extrabold text-amber-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" /> Important Notes & Terms
                </h4>
                
                <div className="space-y-1 text-xs text-amber-800">
                  {pkg.importantNotes.map((note, idx) => (
                    <p key={idx}>• {note}</p>
                  ))}
                  <p className="font-semibold pt-1">
                    * Pricing note: Final price may vary based on travel dates, availability, hotel category and selected inclusions.
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-200">
                  <span className="text-xs font-bold text-gray-900 block mb-1">Cancellation Terms:</span>
                  <ul className="text-[11px] text-gray-600 space-y-1">
                    {pkg.cancellationTerms.map((ct, idx) => (
                      <li key={idx}>• {ct}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar Box */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 space-y-6">
                
                <div className="border-b border-gray-100 pb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase block">Starting Price</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-extrabold text-[#F7941D]">{pkg.startingPrice}</span>
                    <span className="text-xs text-gray-400">/ person</span>
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1 block">Taxes & transfers included per quotation</span>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => onOpenEnquiry(pkg.name)}
                    className="w-full py-4 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Enquire for this Package
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Itinerary Quote
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs space-y-2 text-gray-600">
                  <p className="font-bold text-gray-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Book With Confidence
                  </p>
                  <p>• 100% Customized Day-wise plan</p>
                  <p>• Direct support from Mr. Shubham Bomble ({COMPANY_INFO.phone})</p>
                  <p>• Verified hotel choices & instant confirmation</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
