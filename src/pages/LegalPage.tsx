import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/companyData';

export const LegalPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  let title = "Privacy Policy";
  let content = (
    <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
      <h3 className="text-lg font-bold text-gray-900">Privacy Policy for Namkamal Holidays</h3>
      <p>At Namkamal Holidays, accessible from namkamal.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Namkamal Holidays and how we use it.</p>
      
      <h4 className="font-bold text-gray-900 pt-2">Information We Collect</h4>
      <p>When you fill an enquiry form or request a holiday quotation, we collect personal information including your full name, mobile/WhatsApp number, email address, preferred travel dates, departure city, and destination interests.</p>

      <h4 className="font-bold text-gray-900 pt-2">How We Use Your Information</h4>
      <p>We use the collected information to send customized tour itineraries, hotel rate quotations, travel vouchers, visa processing updates, and 24/7 travel assistance before and during your journey.</p>
      
      <h4 className="font-bold text-gray-900 pt-2">Data Protection & Confidentiality</h4>
      <p>Namkamal Holidays does NOT sell, rent, or trade customer contact information to third-party marketing companies. All data shared with us is strictly used for tour operations and hotel/flight bookings.</p>
    </div>
  );

  if (type === 'terms-and-conditions') {
    title = "Terms & Conditions";
    content = (
      <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <h3 className="text-lg font-bold text-gray-900">Terms & Conditions of Travel Booking</h3>
        <p>By making a tour reservation with Namkamal Holidays, you agree to comply with the following travel booking terms:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Quotations & Rates:</strong> Final package price may vary based on travel dates, hotel room availability, flight fare fluctuations, and selected inclusions.</li>
          <li><strong>Identity Proof:</strong> Guests must present valid Govt photo ID (Aadhaar / Passport / Voter ID) at hotel check-in and during permit verifications.</li>
          <li><strong>Attraction & Permits:</strong> Entry permits, safaris, cable cars, boats, ropeways, and special darshan passes are subject to availability and operating authority rules.</li>
          <li><strong>Operational Adjustments:</strong> Day-wise sightseeing sequence may be adjusted by operations team due to local traffic, weather conditions, flight timings, or weekly museum closures.</li>
        </ul>
      </div>
    );
  } else if (type === 'cancellation-refund-policy') {
    title = "Cancellation & Refund Policy";
    content = (
      <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <h3 className="text-lg font-bold text-gray-900">Cancellation & Refund Policy</h3>
        <p>In case of trip cancellation or rescheduling, the following cancellation fee schedule applies:</p>
        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-xs space-y-2">
          <p>• <strong>30+ days prior to departure:</strong> 10% processing fee</p>
          <p>• <strong>15 to 29 days prior:</strong> 25% of total package cost</p>
          <p>• <strong>7 to 14 days prior:</strong> 50% of total package cost</p>
          <p>• <strong>Less than 7 days prior / No-Show:</strong> 100% cancellation charge (Non-refundable)</p>
        </div>
        <p className="text-xs text-gray-500 pt-2">* Flight tickets, train tickets, non-refundable hotel bookings, and tourist visas issued will be governed by respective airline/railway/hotel/embassy rules.</p>
      </div>
    );
  } else if (type === 'travel-booking-terms') {
    title = "Travel Booking Terms";
    content = (
      <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <h3 className="text-lg font-bold text-gray-900">Travel Booking Terms & Guidelines</h3>
        <p>Namkamal Holidays operates as a professional travel company offering domestic and international holiday solutions. All bookings are processed upon advance token receipt and confirmation vouchers issued via email/WhatsApp.</p>
        <p>Check-in time at hotels is generally 12:00 PM / 2:00 PM and Check-out time is 10:00 AM / 11:00 AM. Early check-in or late check-out is subject to hotel room availability.</p>
      </div>
    );
  } else if (type === 'disclaimer') {
    title = "Disclaimer";
    content = (
      <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <h3 className="text-lg font-bold text-gray-900">Website & Operation Disclaimer</h3>
        <p>Namkamal Holidays takes utmost care to ensure that itinerary descriptions, sightseeing points, hotel categories, and pricing details displayed on namkamal.com are accurate and up-to-date.</p>
        <p>However, Namkamal Holidays shall not be held liable for flight delays, road blockages due to landslides/natural events, political strikes, or unforeseen government permit suspensions.</p>
      </div>
    );
  }

  return (
    <div>
      <SEOHead title={`${title} | Namkamal Holidays™`} />

      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-extrabold">{title}</h1>
          <p className="text-xs text-gray-400 mt-1">Namkamal Holidays™ Legal & Trust Documentation</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
            {content}

            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center text-xs">
              <span className="text-gray-500">Official Head Office: {COMPANY_INFO.address}</span>
              <Link to="/contact" className="text-[#F7941D] font-bold hover:underline">Contact Support →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
