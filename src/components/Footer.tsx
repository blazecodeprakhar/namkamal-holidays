import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { DOMESTIC_DESTINATIONS, INTERNATIONAL_DESTINATIONS } from '../data/destinations';

import logoIcon from '../assets/logo_icon.PNG';
import logoText from '../assets/logo_text.PNG';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-12 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand & Founder */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <Link 
                to="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-3.5 mb-5 bg-white p-3.5 px-5 rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group"
                title="Back to Top Hero Section"
              >
                <img 
                  src={logoIcon} 
                  alt="Namkamal Holidays Icon" 
                  className="h-12 sm:h-14 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform" 
                />
                <img 
                  src={logoText} 
                  alt="Namkamal Holidays™" 
                  className="h-10 sm:h-12 w-auto object-contain shrink-0" 
                />
              </Link>

              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Namkamal Holidays is your dedicated travel partner offering domestic and international tour packages, customized itineraries, honeymoon getaways, and seamless travel assistance at unbeatable prices.
              </p>

              <div className="bg-gray-800/60 p-3 rounded-2xl border border-gray-700/50 mb-4">
                <span className="text-[11px] text-gray-400 block font-medium">Founder / CEO</span>
                <span className="text-sm font-extrabold text-white flex items-center gap-1.5 mt-0.5">
                  {COMPANY_INFO.founder}
                </span>
              </div>

              {/* In-Footer WhatsApp Quick Quote Button */}
              <a
                href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays,%20I%20want%20to%20inquire%20about%20a%20holiday%20package.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 px-5 rounded-full shadow-lg border-2 border-white/20 transition-all duration-300 hover:scale-105 mb-4 group"
              >
                <MessageSquare className="w-5 h-5 fill-white text-white shrink-0 group-hover:animate-bounce" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-medium leading-none text-emerald-100">Need Quick Quote?</span>
                  <span className="text-xs font-extrabold leading-tight">Chat on WhatsApp</span>
                </div>
              </a>
            </div>

            {/* Premium Social Media Icons Row */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Connect With Us</span>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a 
                  href={COMPANY_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow Namkamal Holidays on Instagram"
                  title="Instagram @namkamal_holidays"
                  className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700/60 hover:border-pink-500 hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-500 hover:to-amber-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover-lift hover:scale-110 shadow-md group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href={COMPANY_INFO.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow Namkamal Holidays on Facebook"
                  title="Facebook Page"
                  className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700/60 hover:border-blue-500 hover:bg-[#1877F2] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover-lift hover:scale-110 shadow-md group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href={COMPANY_INFO.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Subscribe to Namkamal Holidays YouTube Channel"
                  title="YouTube Channel"
                  className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700/60 hover:border-red-500 hover:bg-[#FF0000] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover-lift hover:scale-110 shadow-md group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Google Reviews Profile */}
                <a 
                  href={COMPANY_INFO.socials.googleBusiness} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit Namkamal Holidays on Google Business Profile"
                  title="Google Business Reviews"
                  className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700/60 hover:border-amber-400 hover:bg-gradient-to-r hover:from-[#F7941D] hover:to-[#E91E63] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover-lift hover:scale-110 shadow-md group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.013 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links & Services */}
          <div>
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider mb-5 text-[#F7941D] pb-1 border-b border-gray-800 inline-block">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F7941D] group-hover:translate-x-1 transition-transform" /> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F7941D] group-hover:translate-x-1 transition-transform" /> About Namkamal Holidays
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F7941D] group-hover:translate-x-1 transition-transform" /> Travel Services (13 Offerings)
                </Link>
              </li>
              <li>
                <Link to="/destinations/domestic" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F7941D] group-hover:translate-x-1 transition-transform" /> India Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/destinations/international" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F7941D] group-hover:translate-x-1 transition-transform" /> International Holiday Packages
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F7941D] group-hover:translate-x-1 transition-transform" /> Customer Reviews & Ratings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F7941D] group-hover:translate-x-1 transition-transform" /> Contact Us & Branch Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Destinations */}
          <div>
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider mb-5 text-[#E91E63] pb-1 border-b border-gray-800 inline-block">
              Featured Destinations
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">India Tours</span>
                <ul className="space-y-2 text-gray-400">
                  {DOMESTIC_DESTINATIONS.map(d => (
                    <li key={d.id}>
                      <Link to={`/destinations/domestic/${d.id}`} className="hover:text-[#F7941D] transition-colors block">
                        {d.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">International</span>
                <ul className="space-y-2 text-gray-400">
                  {INTERNATIONAL_DESTINATIONS.map(d => (
                    <li key={d.id}>
                      <Link to={`/destinations/international/${d.id}`} className="hover:text-[#E91E63] transition-colors block">
                        {d.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Col 4: Official Contact Information */}
          <div>
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider mb-5 text-emerald-400 pb-1 border-b border-gray-800 inline-block">
              Official Head Office
            </h3>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F7941D] shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-normal">{COMPANY_INFO.address}</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F7941D] shrink-0" />
                <a href={`tel:${COMPANY_INFO.rawPhone}`} className="hover:text-[#F7941D] transition-colors font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors font-semibold">
                  WhatsApp: {COMPANY_INFO.phone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E91E63] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#E91E63] transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>

            <div className="mt-5 pt-3.5 border-t border-gray-800">
              <a 
                href={COMPANY_INFO.socials.reviews} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 font-bold"
              >
                ⭐ Read Google Customer Reviews <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Namkamal Holidays™. All Rights Reserved. Tagline: "{COMPANY_INFO.tagline}".</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <Link to="/privacy-policy" className="hover:text-[#F7941D] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-[#F7941D] transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/cancellation-refund-policy" className="hover:text-[#F7941D] transition-colors">Cancellation & Refund Policy</Link>
            <span>•</span>
            <Link to="/travel-booking-terms" className="hover:text-[#F7941D] transition-colors">Travel Booking Terms</Link>
            <span>•</span>
            <Link to="/disclaimer" className="hover:text-[#F7941D] transition-colors">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
