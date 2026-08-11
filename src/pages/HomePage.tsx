import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Compass, Headphones, Sliders, Star, CheckCircle, MessageSquare } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PackageCard } from '../components/PackageCard';
import { DestinationCard } from '../components/DestinationCard';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { DOMESTIC_DESTINATIONS, INTERNATIONAL_DESTINATIONS } from '../data/destinations';
import { PACKAGES_DATA } from '../data/packages';
import { CUSTOMER_REVIEWS } from '../data/reviews';

interface HomePageProps {
  onOpenEnquiry: (prefillDestination?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  const featuredPackages = PACKAGES_DATA.filter(p => p.isFeatured);

  return (
    <div>
      <SEOHead 
        title="Namkamal Holidays™ | Official Website - Your Journey Our Commitment"
        description="Discover India & International holiday packages with Namkamal Holidays. Explore Rajasthan, Kerala, Goa, Kashmir, Gujarat, Himachal, Dubai, Thailand, Bali, Singapore, Maldives & Switzerland."
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85" 
          alt="Namkamal Holidays Travel World"
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F7941D] text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 shadow-xl animate-in fade-in duration-500">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> OFFICIAL WEBSITE • NAMKAMAL HOLIDAYS™
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6">
            Your Journey, <span className="text-brand-gradient">Our Commitment</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
            Discover thoughtfully planned holidays, customized travel experiences, and seamless domestic & international travel assistance with Namkamal Holidays.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#F7941D] to-[#E91E63] hover:opacity-95 text-white font-extrabold text-sm uppercase tracking-wider shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              Plan Your Trip Now
            </button>

            <a
              href="#featured-packages"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm border border-white/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Explore Packages <ArrowRight className="w-4 h-4 text-[#F7941D]" />
            </a>
          </div>

          {/* Key Stat Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <span className="text-2xl font-extrabold text-[#F7941D]">100%</span>
              <span className="text-xs text-gray-300 block font-medium">Customized Plans</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <span className="text-2xl font-extrabold text-[#E91E63]">24/7</span>
              <span className="text-xs text-gray-300 block font-medium">Travel Assistance</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <span className="text-2xl font-extrabold text-[#F7941D]">Best</span>
              <span className="text-xs text-gray-300 block font-medium">Price Guarantee</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <span className="text-2xl font-extrabold text-emerald-400">4.9★</span>
              <span className="text-xs text-gray-300 block font-medium">Google Rating</span>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Holiday Packages Section */}
      <section id="featured-packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-[#E91E63] uppercase tracking-widest block mb-2">
                Handcrafted Itineraries
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Featured Holiday Packages
              </h2>
            </div>
            <p className="text-sm text-gray-600 max-w-md mt-2 md:mt-0">
              Hand-picked best selling packages with exact named sightseeing points, premium hotels, and transparent pricing.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {featuredPackages.map(pkg => (
              <div key={pkg.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md">
                <PackageCard pkg={pkg} onEnquire={onOpenEnquiry} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Domestic Destinations (India Flagship 6) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
              🇮🇳 Incredible India
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              Popular Domestic Destinations
            </h2>
            <p className="text-sm text-gray-600">
              Explore India's most famous holiday circuits: Rajasthan, Kerala, Goa, Kashmir, Gujarat & Himachal Pradesh.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {DOMESTIC_DESTINATIONS.map(dest => (
              <div key={dest.id} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm">
                <DestinationCard destination={dest} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular International Destinations (Global Flagship 6) */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E91E63]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F7941D]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#E91E63] uppercase tracking-widest block mb-2">
              🌍 Worldwide Vacations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Popular International Destinations
            </h2>
            <p className="text-sm text-gray-400">
              Fly to exotic holiday spots around the world: Dubai, Thailand, Bali, Singapore, Maldives & Switzerland.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {INTERNATIONAL_DESTINATIONS.map(dest => (
              <div key={dest.id} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm">
                <DestinationCard destination={dest} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Namkamal Holidays */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
              Our Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Choose Namkamal Holidays
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_INFO.whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F7941D] to-[#E91E63] text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {idx === 0 && <Compass className="w-7 h-7" />}
                  {idx === 1 && <ShieldCheck className="w-7 h-7" />}
                  {idx === 2 && <Headphones className="w-7 h-7" />}
                  {idx === 3 && <Sliders className="w-7 h-7" />}
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-[#F7941D] transition-colors">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services (13 Services Grid) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-[#E91E63] uppercase tracking-widest block mb-2">
                Comprehensive Travel Assistance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Our Travel Services
              </h2>
            </div>
            <Link to="/services" className="text-xs font-bold text-[#F7941D] hover:underline flex items-center gap-1 mt-2 md:mt-0">
              View All 13 Services Detailed →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.slice(0, 8).map(svc => (
              <div key={svc.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F7941D] group-hover:bg-gradient-to-r group-hover:from-[#F7941D] group-hover:to-[#E91E63] group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300 shadow-sm group-hover:scale-110">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-gray-900 mb-2 group-hover:text-[#F7941D] transition-colors">{svc.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-2">
              Verified Google Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              What Our Travelers Say
            </h2>
            <p className="text-xs text-gray-500">
              Real reviews from delighted customers who traveled with Namkamal Holidays.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {CUSTOMER_REVIEWS.slice(0, 3).map(rev => (
              <div key={rev.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-8">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <img src={rev.avatar} alt={rev.author} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{rev.author}</h4>
                    <span className="text-[11px] text-gray-500">{rev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a 
              href={COMPANY_INFO.socials.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all"
            >
              View All Google Reviews <ArrowRight className="w-3.5 h-3.5 text-[#F7941D]" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Strip */}
      <section className="py-12 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Follow Namkamal Holidays On Social Media</h3>
            <p className="text-xs text-gray-400">Stay updated with latest package deals, travel photos & holiday videos.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href={COMPANY_INFO.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow"
            >
              Instagram @namkamal_holidays
            </a>

            <a 
              href={COMPANY_INFO.socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-600 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow"
            >
              YouTube Channel
            </a>

            <a 
              href={COMPANY_INFO.socials.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow"
            >
              Facebook Page
            </a>
          </div>
        </div>
      </section>

      {/* Final Enquiry Banner */}
      <section className="py-16 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Ready to Plan Your Next Vacation?
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mb-8 font-medium">
            Contact Mr. Shubham Bomble and the team at Namkamal Holidays today for customized itineraries and instant best price quotes!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-extrabold text-xs uppercase tracking-wider rounded-full shadow-2xl transition-all hover:scale-105"
            >
              Send Free Enquiry Now
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-full shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp +91 95453 99825
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
