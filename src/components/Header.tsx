import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, ChevronDown, Globe, MapPin, Sparkles } from 'lucide-react';
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

  const [mobileDomesticOpen, setMobileDomesticOpen] = useState(true);
  const [mobileIntOpen, setMobileIntOpen] = useState(true);

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

  // Close menus on route change & prevent scroll when mobile menu open
  useEffect(() => {
    setMobileMenuOpen(false);
    setDomesticDropdown(false);
    setIntDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

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
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group shrink-0 py-0.5 cursor-pointer"
          >
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
              className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-full font-semibold text-xs border border-emerald-200 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-sm hover:shadow-md"
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

          {/* Mobile Hamburger Button Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button 
              onClick={() => onOpenEnquiry()}
              className="bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-extrabold text-xs px-3.5 py-2 rounded-full shadow-md active:scale-95 transition-all"
            >
              Plan Trip
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-gray-100 text-gray-800 hover:text-[#F7941D] hover:bg-orange-50 focus:outline-none transition-all duration-300 active:scale-90"
              aria-label="Toggle Navigation Menu"
            >
              <div className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#E91E63]" /> : <Menu className="w-6 h-6 text-gray-800" />}
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/65 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Menu - Sliding From Right Side */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-[85vw] sm:w-[380px] max-w-full bg-white z-50 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
          <Link 
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={logoIcon} alt="Namkamal Lotus" className="h-9 w-auto object-contain" />
            <img src={logoText} alt="Namkamal Holidays" className="h-7 w-auto object-contain" />
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#E91E63] hover:border-pink-200 transition-all shadow-sm active:scale-90"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body - Nav Items with Staggered Animations & Accordions */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between p-3 rounded-2xl font-bold text-sm transition-all ${
              isActive('/') ? 'bg-orange-50 text-[#F7941D] border border-orange-100 shadow-sm' : 'bg-gray-50 text-gray-800 hover:bg-orange-50 hover:text-[#F7941D]'
            }`}
          >
            <span>Home</span>
            <span className="text-xs text-[#F7941D]">→</span>
          </Link>

          <Link 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between p-3 rounded-2xl font-bold text-sm transition-all ${
              isActive('/about') ? 'bg-orange-50 text-[#F7941D] border border-orange-100 shadow-sm' : 'bg-gray-50 text-gray-800 hover:bg-orange-50 hover:text-[#F7941D]'
            }`}
          >
            <span>About Us</span>
            <span className="text-xs text-[#F7941D]">→</span>
          </Link>

          {/* India Tours Accordion */}
          <div className="bg-orange-50/60 rounded-2xl border border-orange-100 overflow-hidden">
            <button 
              onClick={() => setMobileDomesticOpen(!mobileDomesticOpen)}
              className="w-full flex items-center justify-between p-3.5 font-extrabold text-xs uppercase tracking-wider text-[#F7941D]"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Top India Packages
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDomesticOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileDomesticOpen && (
              <div className="p-3 pt-0 grid grid-cols-2 gap-2 animate-fade-in-down duration-200">
                {DOMESTIC_DESTINATIONS.map(d => (
                  <Link 
                    key={d.id} 
                    to={`/destinations/domestic/${d.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 font-semibold text-gray-800 hover:text-[#F7941D] transition-colors flex flex-col gap-0.5"
                  >
                    <span>{d.name}</span>
                    <span className="text-[10px] font-bold text-[#F7941D]">{d.startingPrice}</span>
                  </Link>
                ))}
                <Link 
                  to="/destinations/domestic"
                  onClick={() => setMobileMenuOpen(false)}
                  className="col-span-2 text-center text-xs font-bold text-[#F7941D] underline pt-1"
                >
                  View All 6 India Destinations →
                </Link>
              </div>
            )}
          </div>

          {/* International Vacations Accordion */}
          <div className="bg-pink-50/60 rounded-2xl border border-pink-100 overflow-hidden">
            <button 
              onClick={() => setMobileIntOpen(!mobileIntOpen)}
              className="w-full flex items-center justify-between p-3.5 font-extrabold text-xs uppercase tracking-wider text-[#E91E63]"
            >
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4" /> Global Vacations
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileIntOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileIntOpen && (
              <div className="p-3 pt-0 grid grid-cols-2 gap-2 animate-fade-in-down duration-200">
                {INTERNATIONAL_DESTINATIONS.map(d => (
                  <Link 
                    key={d.id} 
                    to={`/destinations/international/${d.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 font-semibold text-gray-800 hover:text-[#E91E63] transition-colors flex flex-col gap-0.5"
                  >
                    <span>{d.name}</span>
                    <span className="text-[10px] font-bold text-[#E91E63]">{d.startingPrice}</span>
                  </Link>
                ))}
                <Link 
                  to="/destinations/international"
                  onClick={() => setMobileMenuOpen(false)}
                  className="col-span-2 text-center text-xs font-bold text-[#E91E63] underline pt-1"
                >
                  View All International Packages →
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/services" 
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between p-3 rounded-2xl font-bold text-sm transition-all ${
              isActive('/services') ? 'bg-orange-50 text-[#F7941D] border border-orange-100 shadow-sm' : 'bg-gray-50 text-gray-800 hover:bg-orange-50 hover:text-[#F7941D]'
            }`}
          >
            <span>All 13 Travel Services</span>
            <span className="text-xs text-[#F7941D]">→</span>
          </Link>

          <Link 
            to="/reviews" 
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between p-3 rounded-2xl font-bold text-sm transition-all ${
              isActive('/reviews') ? 'bg-orange-50 text-[#F7941D] border border-orange-100 shadow-sm' : 'bg-gray-50 text-gray-800 hover:bg-orange-50 hover:text-[#F7941D]'
            }`}
          >
            <span>Customer Reviews (4.9★)</span>
            <span className="text-xs text-[#F7941D]">→</span>
          </Link>

          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between p-3 rounded-2xl font-bold text-sm transition-all ${
              isActive('/contact') ? 'bg-orange-50 text-[#F7941D] border border-orange-100 shadow-sm' : 'bg-gray-50 text-gray-800 hover:bg-orange-50 hover:text-[#F7941D]'
            }`}
          >
            <span>Contact Head Office</span>
            <span className="text-xs text-[#F7941D]">→</span>
          </Link>

        </div>

        {/* Drawer Footer - Action Buttons */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/80 space-y-2.5">
          <a 
            href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays,%20I%20am%20interested%20in%20planning%20a%20tour.`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Support
          </a>

          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className="w-full py-3.5 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white rounded-2xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4" /> Plan Customized Trip
          </button>
        </div>

      </div>

    </header>
  );
};
