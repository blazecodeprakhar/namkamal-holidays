import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CUSTOMER_REVIEWS } from '../data/reviews';
import { COMPANY_INFO } from '../data/companyData';
import { UserAvatar } from '../components/UserAvatar';

export const ReviewsPage: React.FC = () => {
  return (
    <div>
      <SEOHead 
        title="Customer Reviews | Namkamal Holidays™ - 4.9 Star Google Rating"
        description="Read customer reviews for Namkamal Holidays. Rated 4.9 stars on Google Business. Real traveler experiences for Rajasthan, Kerala, Kashmir, Dubai, Bali & Thailand."
      />

      {/* Header Banner */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D]/20 to-[#E91E63]/20 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
            ⭐ 4.9 / 5.0 Rating on Google
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Customer Reviews & Feedback
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Read what our travelers have to say about their experience with Namkamal Holidays.
          </p>

          <div className="mt-6">
            <a 
              href={COMPANY_INFO.socials.reviews} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold text-xs rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              View Official Google Business Profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {CUSTOMER_REVIEWS.map(rev => (
              <div key={rev.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-2xl hover-lift transition-all duration-500 group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 group-hover:scale-110 transition-transform" />
                      ))}
                    </div>
                    <span className="text-[11px] text-gray-400 font-medium">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-8 whitespace-pre-line">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <UserAvatar name={rev.author} avatarUrl={rev.avatar} />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#F7941D] transition-colors">{rev.author}</h4>
                    <span className="text-xs text-gray-500">{rev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-3xl text-center max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-extrabold mb-2">Traveled With Namkamal Holidays?</h3>
            <p className="text-xs text-gray-300 mb-6">
              Your feedback inspires us to keep delivering exceptional holiday experiences.
            </p>
            <a 
              href={COMPANY_INFO.socials.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:scale-105 transition-all"
            >
              Write a Google Review <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};
