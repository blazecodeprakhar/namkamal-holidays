import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { DOMESTIC_DESTINATIONS, INTERNATIONAL_DESTINATIONS } from '../data/destinations';

import logoIcon from '../assets/logo_icon.PNG';
import logoText from '../assets/logo_text.PNG';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-16 pb-12 border-t-4 border-[#F7941D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand & Founder */}
          <div>
            <div className="inline-flex items-center gap-3.5 mb-5 bg-white p-3.5 px-5 rounded-2xl shadow-lg border border-white/20">
              <img 
                src={logoIcon} 
                alt="Namkamal Holidays Icon" 
                className="h-12 sm:h-14 w-auto object-contain shrink-0" 
              />
              <img 
                src={logoText} 
                alt="Namkamal Holidays™" 
                className="h-10 sm:h-12 w-auto object-contain shrink-0" 
              />
            </div>

            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Namkamal Holidays is your dedicated travel partner offering domestic and international tour packages, customized itineraries, honeymoon getaways, and seamless travel assistance at unbeatable prices.
            </p>

            <div className="bg-gray-800/60 p-3 rounded-xl border border-gray-700/50 mb-4">
              <span className="text-[11px] text-gray-400 block font-medium">CEO / Founder</span>
              <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
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

            {/* Social Media Channels */}
            <div className="flex items-center gap-2.5">
              <a 
                href={COMPANY_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow Namkamal Holidays on Instagram"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:from-[#F7941D] hover:to-[#E91E63] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover-lift hover:scale-110 shadow-md"
              >
                IG
              </a>
              <a 
                href={COMPANY_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow Namkamal Holidays on Facebook"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-[#F7941D] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover-lift hover:scale-110 shadow-md"
              >
                FB
              </a>
              <a 
                href={COMPANY_INFO.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Subscribe to Namkamal Holidays YouTube Channel"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover-lift hover:scale-110 shadow-md"
              >
                YT
              </a>
              <a 
                href={COMPANY_INFO.socials.googleBusiness} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit Namkamal Holidays on Google Business Profile"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover-lift hover:scale-110 shadow-md"
              >
                G
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links & Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#F7941D]">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5">
                  › Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5">
                  › About Namkamal Holidays
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5">
                  › Travel Services (13 Offerings)
                </Link>
              </li>
              <li>
                <Link to="/destinations/domestic" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5">
                  › India Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/destinations/international" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5">
                  › International Holiday Packages
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5">
                  › Customer Reviews & Ratings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5">
                  › Contact Us & Branch Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Destinations */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#E91E63]">
              Featured Destinations
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1.5">India Tours</span>
                <ul className="space-y-1.5 text-gray-400">
                  {DOMESTIC_DESTINATIONS.map(d => (
                    <li key={d.id}>
                      <Link to={`/destinations/domestic/${d.id}`} className="hover:text-[#F7941D] transition-colors">
                        {d.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1.5">International</span>
                <ul className="space-y-1.5 text-gray-400">
                  {INTERNATIONAL_DESTINATIONS.map(d => (
                    <li key={d.id}>
                      <Link to={`/destinations/international/${d.id}`} className="hover:text-[#E91E63] transition-colors">
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
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-emerald-400">
              Official Head Office
            </h3>
            <ul className="space-y-3 text-xs">
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

            <div className="mt-4 pt-3 border-t border-gray-800">
              <a 
                href={COMPANY_INFO.socials.reviews} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold"
              >
                ⭐ Read Google Customer Reviews <ExternalLink className="w-3 h-3" />
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
