import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DomesticHubPage } from './pages/DomesticHubPage';
import { InternationalHubPage } from './pages/InternationalHubPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { LegalPage } from './pages/LegalPage';

import logoIcon from './assets/logo_icon.PNG';
import logoText from './assets/logo_text.PNG';

// Initial Brand Splash Loader Component
const InitialLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-gray-950 flex flex-col items-center justify-center transition-all duration-500 ${
        isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
      }`}
    >
      <div className="relative flex flex-col items-center gap-4 text-center px-4">
        {/* Pulsing Lotus Aura */}
        <div className="relative mb-2">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F7941D] to-[#E91E63] rounded-full blur-2xl opacity-60 animate-pulse" />
          <img 
            src={logoIcon} 
            alt="Namkamal Holidays Lotus" 
            className="relative h-20 w-auto object-contain animate-float drop-shadow-2xl" 
          />
        </div>

        <img 
          src={logoText} 
          alt="Namkamal Holidays™" 
          className="h-10 w-auto object-contain brightness-0 invert" 
        />

        <p className="text-xs font-bold text-[#F7941D] tracking-widest uppercase mt-2">
          Your Journey, Our Commitment
        </p>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-gradient-to-r from-[#F7941D] to-[#E91E63] w-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// Scroll to top helper component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

// Page Entrance Animation Wrapper
const PageTransitionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fade-in-up duration-500">
      {children}
    </div>
  );
};

export function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [prefilledDestination, setPrefilledDestination] = useState<string>('');

  const handleOpenEnquiry = (destinationName?: string) => {
    if (destinationName) {
      setPrefilledDestination(destinationName);
    } else {
      setPrefilledDestination('');
    }
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <Router>
      <InitialLoader />
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans flex flex-col justify-between selection:bg-[#F7941D] selection:text-white">
        
        {/* Header */}
        <Header onOpenEnquiry={handleOpenEnquiry} />

        {/* Main Content Area with Route Entrance Animations */}
        <main className="flex-grow">
          <PageTransitionWrapper>
            <Routes>
              <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/services" element={<ServicesPage onOpenEnquiry={handleOpenEnquiry} />} />
              
              {/* Destination Hubs */}
              <Route path="/destinations/domestic" element={<DomesticHubPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/destinations/international" element={<InternationalHubPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/destinations/:category/:id text" element={<DestinationDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/destinations/:category/:id" element={<DestinationDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
              
              {/* Package Details */}
              <Route path="/packages/:slug" element={<PackageDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
              
              {/* Other Key Pages */}
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/enquire" element={<EnquiryPage />} />

              {/* Legal Pages */}
              <Route path="/privacy-policy" element={<LegalPage />} />
              <Route path="/terms-and-conditions" element={<LegalPage />} />
              <Route path="/cancellation-refund-policy" element={<LegalPage />} />
              <Route path="/travel-booking-terms" element={<LegalPage />} />
              <Route path="/disclaimer" element={<LegalPage />} />
            </Routes>
          </PageTransitionWrapper>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Floating Action Controls */}
        <FloatingWhatsApp onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Global Enquiry Modal */}
        <EnquiryModal 
          isOpen={isEnquiryModalOpen} 
          onClose={handleCloseEnquiry} 
          prefillDestination={prefilledDestination} 
        />

      </div>
    </Router>
  );
}

export default App;
