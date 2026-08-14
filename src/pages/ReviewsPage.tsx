import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, MessageSquareQuote, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CUSTOMER_REVIEWS } from '../data/reviews';
import { COMPANY_INFO } from '../data/companyData';
import { UserAvatar } from '../components/UserAvatar';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gray-50/50">
      <SEOHead 
        title="Customer Reviews | Namkamal Holidays™ - 4.9 Star Google Rating"
        description="Read customer reviews for Namkamal Holidays. Rated 4.9 stars on Google Business. Real traveler experiences for Rajasthan, Kerala, Kashmir, Dubai, Bali & Thailand."
      />

      {/* Header Banner - Premium Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-16 sm:py-24 overflow-hidden border-b border-gray-800/60">
        {/* Glow Effects */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-r from-[#F7941D]/20 via-amber-500/15 to-[#E91E63]/20 blur-3xl pointer-events-none rounded-full opacity-60" />
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#F7941D]/10 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#E91E63]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Top Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F7941D]/15 via-amber-500/15 to-[#E91E63]/15 border border-[#F7941D]/30 backdrop-blur-md"
          >
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#F7941D] to-pink-400 uppercase tracking-widest">
              4.9 / 5.0 Rating • Verified Google Reviews
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
          >
            Traveler <span className="bg-gradient-to-r from-[#F7941D] via-amber-300 to-[#E91E63] bg-clip-text text-transparent">Stories & Reviews</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Read authentic experiences and heartfelt feedback from travelers who booked their dream vacations with Namkamal Holidays.
          </motion.p>

          {/* Quick Trust Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <div className="bg-gray-900/80 border border-gray-800 p-3.5 rounded-2xl backdrop-blur-sm flex items-center justify-center gap-3">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
              <div className="text-left">
                <span className="text-base font-black text-white block leading-none">4.9 Stars</span>
                <span className="text-[10px] text-gray-400 font-medium">Google Rating</span>
              </div>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 p-3.5 rounded-2xl backdrop-blur-sm flex items-center justify-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <span className="text-base font-black text-white block leading-none">100% Verified</span>
                <span className="text-[10px] text-gray-400 font-medium">Real Guests</span>
              </div>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 p-3.5 rounded-2xl backdrop-blur-sm flex items-center justify-center gap-3 col-span-2 md:col-span-1">
              <Award className="w-5 h-5 text-[#F7941D] shrink-0" />
              <div className="text-left">
                <span className="text-base font-black text-white block leading-none">Top Choice</span>
                <span className="text-[10px] text-gray-400 font-medium">Tour Operator</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Link to Google Business */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2"
          >
            <a 
              href={COMPANY_INFO.socials.reviews} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xl hover:scale-105 transition-all"
            >
              View Official Google Profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap justify-center gap-8">
            {CUSTOMER_REVIEWS.map((rev, idx) => (
              <motion.div 
                key={rev.id} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md bg-white p-8 rounded-3xl border border-gray-100/90 shadow-sm hover:shadow-2xl hover:border-orange-200 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Quote Background Mark */}
                <div className="absolute right-4 top-2 text-7xl text-gray-100 font-serif select-none pointer-events-none group-hover:text-orange-100/70 transition-colors">
                  “
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 group-hover:scale-110 transition-transform" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {rev.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-8 whitespace-pre-line relative z-10">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 relative z-10">
                  <UserAvatar name={rev.author} avatarUrl={rev.avatar} />
                  <div>
                    <h4 className="text-sm font-extrabold text-gray-900 group-hover:text-[#F7941D] transition-colors">{rev.author}</h4>
                    <span className="text-xs text-gray-500">{rev.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white p-8 sm:p-10 rounded-3xl text-center max-w-4xl mx-auto shadow-2xl border border-gray-800/80 relative overflow-hidden"
          >
            <div className="relative z-10 space-y-3">
              <MessageSquareQuote className="w-10 h-10 text-[#F7941D] mx-auto animate-pulse" />
              <h3 className="text-2xl sm:text-3xl font-extrabold">Traveled With Namkamal Holidays?</h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
                Your feedback inspires us to keep delivering exceptional, transparent holiday experiences.
              </p>
              <div className="pt-2">
                <a 
                  href={COMPANY_INFO.socials.reviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg hover:scale-105 transition-all"
                >
                  Write a Google Review <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
