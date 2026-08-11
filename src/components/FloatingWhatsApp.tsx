import React, { useEffect, useState } from 'react';
import { MessageSquare, Phone, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FloatingWhatsAppProps {
  onOpenEnquiry: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenEnquiry }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footerElement = document.querySelector('footer');
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05, // Trigger as soon as top of footer appears
      }
    );

    observer.observe(footerElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays,%20I%20want%20to%20inquire%20about%20a%20holiday%20package.`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 px-5 rounded-full shadow-2xl transition-all duration-300 border-2 border-white group ${
          isFooterVisible 
            ? 'opacity-0 translate-y-8 scale-90 pointer-events-none' 
            : 'opacity-100 translate-y-0 scale-100 pointer-events-auto hover:scale-110'
        }`}
        aria-label="Chat on WhatsApp with Namkamal Holidays"
      >
        <MessageSquare className="w-6 h-6 fill-white text-white animate-bounce" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-medium leading-none text-emerald-100">Need Quick Quote?</span>
          <span className="text-xs font-extrabold leading-tight">Chat on WhatsApp</span>
        </div>
      </a>

      {/* Mobile Sticky Bottom Action Bar */}
      <div 
        className={`md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2 grid grid-cols-3 gap-2 shadow-2xl transition-all duration-300 ${
          isFooterVisible 
            ? 'opacity-0 translate-y-full pointer-events-none' 
            : 'opacity-100 translate-y-0 pointer-events-auto'
        }`}
      >
        <a 
          href={`tel:${COMPANY_INFO.rawPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-gray-900 text-white rounded-xl font-bold text-[11px]"
        >
          <Phone className="w-4 h-4 text-[#F7941D] mb-0.5" />
          <span>Call Now</span>
        </a>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-500 text-white rounded-xl font-bold text-[11px]"
        >
          <MessageSquare className="w-4 h-4 fill-white mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button 
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center py-2 px-1 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white rounded-xl font-bold text-[11px] shadow-sm"
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span>Enquire</span>
        </button>
      </div>
    </>
  );
};
