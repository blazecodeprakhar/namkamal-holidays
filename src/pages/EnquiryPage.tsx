import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { EnquiryForm } from '../components/EnquiryForm';
import { ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';

export const EnquiryPage: React.FC = () => {
  return (
    <div>
      <SEOHead 
        title="Plan Your Trip - Free Quotation | Namkamal Holidays™"
        description="Request a free custom holiday package quotation from Namkamal Holidays. Choose domestic or international destinations and receive a customized itinerary."
      />

      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-1">
            Custom Holiday Planning
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Plan Your Vacation With Namkamal Holidays™
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mt-2">
            No booking fee • 100% Customized itineraries • Best Price Guarantee
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xl">
            <EnquiryForm />
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-xs">
              <ShieldCheck className="w-6 h-6 text-[#F7941D] mx-auto mb-1.5" />
              <span className="font-bold text-gray-900 block">Transparent Pricing</span>
              <span className="text-gray-500">Zero hidden costs</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-xs">
              <CheckCircle2 className="w-6 h-6 text-[#E91E63] mx-auto mb-1.5" />
              <span className="font-bold text-gray-900 block">Exact Sightseeing</span>
              <span className="text-gray-500">Named attractions list</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-xs">
              <MessageSquare className="w-6 h-6 text-emerald-600 mx-auto mb-1.5" />
              <span className="font-bold text-gray-900 block">WhatsApp Support</span>
              <span className="text-gray-500">Direct query response</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
