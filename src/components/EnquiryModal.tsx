import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ShieldCheck } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillDestination?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ 
  isOpen, 
  onClose, 
  prefillDestination = '' 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 bg-black/65 transition-opacity duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 flex flex-col max-h-[88vh] sm:max-h-[90vh] overflow-hidden transition-transform duration-200 transform scale-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Modal Header (Always visible, never scrolls away) */}
        <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-gray-100 flex items-start justify-between shrink-0 bg-white z-10">
          <div className="pr-3">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#E91E63] uppercase tracking-widest flex items-center gap-1.5 mb-0.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Instant Travel Assistance
            </span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-snug">
              Plan Your Dream Holiday with Namkamal Holidays™
            </h2>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
              Fill in your preferred travel details below to receive a custom day-wise itinerary & best pricing.
            </p>
          </div>

          {/* Close Button - Stays Pinned in Header */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer active:scale-95 shrink-0"
            aria-label="Close enquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body with Refined Scrollbar (Cleanly clipped inside rounded-3xl) */}
        <div className="p-4 sm:p-6 sm:p-8 overflow-y-auto overscroll-contain flex-1 custom-modal-scrollbar">
          <EnquiryForm prefillDestination={prefillDestination} onSuccess={onClose} />
        </div>
      </div>
    </div>,
    document.body
  );
};
