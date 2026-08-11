import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, ChevronDown, Globe, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { DOMESTIC_DESTINATIONS, INTERNATIONAL_DESTINATIONS } from '../data/destinations';

import logoIcon from '../assets/logo_icon.PNG';
import logoText from '../assets/logo_text.PNG';

interface HeaderProps {
  onOpenEnquiry: (prefillDestination?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domesticDropdown, setDomesticDropdown] = useState(false);
  const [intDropdown, setIntDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDomesticDropdown(false);
    setIntDropdown(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header shadow-md' : 'bg-white border-b border-gray-100'}`}>
      {/* Top Banner Bar for Trust & Fast Contact */}
      <div className="hidden lg:block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-xs py-1.5 px-4 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#F7941D]" /> Nanded, Maharashtra
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300 whitespace-nowrap">Hours: {COMPANY_INFO.workingHours}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300 flex items-center gap-1 whitespace-nowrap">
              CEO: {COMPANY_INFO.founder}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY_INFO.rawPhone}`} className="hover:text-[#F7941D] transition-colors flex items-center gap-1 font-medium whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 text-[#F7941D]" /> {COMPANY_INFO.phone}
            </a>
            <span className="text-gray-500">|</span>
            <a href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays,%20I%20want%20to%20plan%20a%20trip.`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-medium whitespace-nowrap">
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Tagline Using Assets */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0 py-0.5">
            <img 
              src={logoIcon} 
              alt="Namkamal Holidays Icon" 
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
            />
            <img 
              src={logoText} 
              alt="Namkamal Holidays™ - Your Journey Our Commitment" 
              className="h-8 sm:h-10 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-gray-700">
            <Link 
              to="/" 
              className={`whitespace-nowrap px-3 py-2 rounded-lg transition-colors ${isActive('/') ? 'text-[#F7941D] bg-orange-50 font-bold' : 'hover:text-[#F7941D] hover:bg-gray-50'}`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`whitespace-nowrap px-3 py-2 rounded-lg transition-colors ${isActive('/about') ? 'text-[#F7941D] bg-orange-50 font-bold' : 'hover:text-[#F7941D] hover:bg-gray-50'}`}
            >
              About Us
            </Link>

            {/* Domestic Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDomesticDropdown(true)}
              onMouseLeave={() => setDomesticDropdown(false)}
            >
              <Link 
                to="/destinations/domestic"
                className={`whitespace-nowrap px-3 py-2 rounded-lg flex items-center gap-1 transition-colors ${location.pathname.includes('/domestic') ? 'text-[#F7941D] bg-orange-50 font-bold' : 'hover:text-[#F7941D] hover:bg-gray-50'}`}
              >
                India Tours <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${domesticDropdown ? 'rotate-180 text-[#F7941D]' : ''}`} />
              </Link>

              {domesticDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-xs font-bold text-[#E91E63] uppercase tracking-wider px-3 pb-2 border-b border-gray-100 mb-1 flex items-center justify-between">
                    <span>Popular India Packages</span>
                    <span className="bg-pink-100 text-[#E91E63] text-[10px] px-1.5 py-0.5 rounded">6 Destinations</span>
                  </div>
                  {DOMESTIC_DESTINATIONS.map((dest) => (
                    <Link
                      key={dest.id}
                      to={`/destinations/domestic/${dest.id}`}
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#F7941D] text-gray-700 text-sm transition-colors"
                    >
                      <span className="font-medium">{dest.name}</span>
                      <span className="text-xs font-semibold text-[#F7941D] bg-orange-100 px-2 py-0.5 rounded-full">{dest.startingPrice}</span>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-gray-100 px-3">
                    <Link to="/destinations/domestic" className="text-xs font-bold text-[#F7941D] hover:underline flex items-center justify-between">
                      View All India Destinations →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* International Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIntDropdown(true)}
              onMouseLeave={() => setIntDropdown(false)}
            >
              <Link 
                to="/destinations/international"
                className={`whitespace-nowrap px-3 py-2 rounded-lg flex items-center gap-1 transition-colors ${location.pathname.includes('/international') ? 'text-[#F7941D] bg-orange-50 font-bold' : 'hover:text-[#F7941D] hover:bg-gray-50'}`}
              >
                International <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${intDropdown ? 'rotate-180 text-[#F7941D]' : ''}`} />
              </Link>

              {intDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-xs font-bold text-[#E91E63] uppercase tracking-wider px-3 pb-2 border-b border-gray-100 mb-1 flex items-center justify-between">
                    <span>Global Destinations</span>
                    <Globe className="w-3.5 h-3.5 text-[#E91E63]" />
                  </div>
                  {INTERNATIONAL_DESTINATIONS.map((dest) => (
                    <Link
                      key={dest.id}
                      to={`/destinations/international/${dest.id}`}
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-[#E91E63] text-gray-700 text-sm transition-colors"
                    >
                      <span className="font-medium">{dest.name}</span>
                      <span className="text-xs font-semibold text-[#E91E63] bg-pink-100 px-2 py-0.5 rounded-full">{dest.startingPrice}</span>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-gray-100 px-3">
                    <Link to="/destinations/international" className="text-xs font-bold text-[#E91E63] hover:underline flex items-center justify-between">
                      View All International Packages →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/services" 
              className={`whitespace-nowrap px-3 py-2 rounded-lg transition-colors ${isActive('/services') ? 'text-[#F7941D] bg-orange-50 font-bold' : 'hover:text-[#F7941D] hover:bg-gray-50'}`}
            >
              Services
            </Link>

            <Link 
              to="/reviews" 
              className={`whitespace-nowrap px-3 py-2 rounded-lg transition-colors ${isActive('/reviews') ? 'text-[#F7941D] bg-orange-50 font-bold' : 'hover:text-[#F7941D] hover:bg-gray-50'}`}
            >
              Reviews
            </Link>

            <Link 
              to="/contact" 
              className={`whitespace-nowrap px-3 py-2 rounded-lg transition-colors ${isActive('/contact') ? 'text-[#F7941D] bg-orange-50 font-bold' : 'hover:text-[#F7941D] hover:bg-gray-50'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a 
              href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays,%20I%20am%20interested%20in%20planning%20a%20tour.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-full font-semibold text-xs border border-emerald-200 transition-all hover:scale-105 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" /> WhatsApp
            </a>

            <button 
              onClick={() => onOpenEnquiry()}
              className="bg-gradient-to-r from-[#F7941D] to-[#E91E63] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Plan Your Trip
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button 
              onClick={() => onOpenEnquiry()}
              className="bg-[#F7941D] text-white font-bold text-xs px-3 py-2 rounded-lg shadow"
            >
              Plan Trip
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:text-[#F7941D] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-white border-b border-gray-200 shadow-2xl z-50 p-5 max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3 font-semibold text-gray-800">
            <Link to="/" className="py-2.5 px-3 rounded-lg bg-gray-50 hover:bg-orange-50 hover:text-[#F7941D]">
              Home
            </Link>

            <Link to="/about" className="py-2.5 px-3 rounded-lg bg-gray-50 hover:bg-orange-50 hover:text-[#F7941D]">
              About Us
            </Link>

            {/* Mobile Domestic Section */}
            <div className="bg-orange-50/50 p-3 rounded-xl border border-orange-100">
              <div className="flex items-center justify-between text-[#F7941D] font-bold text-xs uppercase tracking-wider mb-2">
                <span>Top India Packages</span>
                <Link to="/destinations/domestic" className="underline text-[11px]">View All</Link>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {DOMESTIC_DESTINATIONS.map(d => (
                  <Link 
                    key={d.id} 
                    to={`/destinations/domestic/${d.id}`}
                    className="text-xs bg-white p-2 rounded-lg shadow-sm border border-gray-100 font-medium text-gray-800 hover:text-[#F7941D]"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile International Section */}
            <div className="bg-pink-50/50 p-3 rounded-xl border border-pink-100">
              <div className="flex items-center justify-between text-[#E91E63] font-bold text-xs uppercase tracking-wider mb-2">
                <span>Top International Packages</span>
                <Link to="/destinations/international" className="underline text-[11px]">View All</Link>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {INTERNATIONAL_DESTINATIONS.map(d => (
                  <Link 
                    key={d.id} 
                    to={`/destinations/international/${d.id}`}
                    className="text-xs bg-white p-2 rounded-lg shadow-sm border border-gray-100 font-medium text-gray-800 hover:text-[#E91E63]"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/services" className="py-2.5 px-3 rounded-lg bg-gray-50 hover:bg-orange-50 hover:text-[#F7941D]">
              Services
            </Link>

            <Link to="/reviews" className="py-2.5 px-3 rounded-lg bg-gray-50 hover:bg-orange-50 hover:text-[#F7941D]">
              Customer Reviews
            </Link>

            <Link to="/contact" className="py-2.5 px-3 rounded-lg bg-gray-50 hover:bg-orange-50 hover:text-[#F7941D]">
              Contact Us
            </Link>

            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5 mt-2">
              <a 
                href={`tel:${COMPANY_INFO.rawPhone}`} 
                className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-[#F7941D]" /> Call {COMPANY_INFO.phone}
              </a>

              <a 
                href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 bg-emerald-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Us Now
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
