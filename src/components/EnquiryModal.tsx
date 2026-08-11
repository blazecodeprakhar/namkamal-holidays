import React from 'react';
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
          aria-label="Close enquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="text-[11px] font-bold text-[#E91E63] uppercase tracking-widest flex items-center gap-1.5 mb-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Instant Travel Assistance
          </span>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Plan Your Dream Holiday with Namkamal Holidays™
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Fill in your preferred travel details below to receive a custom day-wise itinerary & best pricing.
          </p>
        </div>

        {/* Form Body */}
        <EnquiryForm prefillDestination={prefillDestination} onSuccess={() => {}} />
      </div>
    </div>
  );
};
