import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

const HERO_IMAGES = [
  { id: 1, src: "/hero images/new/Couple's sunset getaway by airplane.webp", title: "Couple's Sunset Getaway" },
  { id: 2, src: "/hero images/new/Discover Incredible India_ A Colorful Journey.webp", title: "Discover Incredible India" },
  { id: 3, src: "/hero images/new/Everything You Need, One Travel Partner.webp", title: "Everything You Need, One Travel Partner" },
  { id: 4, src: "/hero images/new/Memories That Last, Journeys That Matter.webp", title: "Memories That Last, Journeys That Matter" },
  { id: 5, src: "/hero images/new/Your World, Your Holiday.webp", title: "Your World, Your Holiday" },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 280, damping: 30 },
      opacity: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'spring' as const, stiffness: 280, damping: 30 },
      opacity: { duration: 0.3 },
    },
  }),
};

interface MobileHeroSliderProps {
  onOpenEnquiry?: (prefillDestination?: string) => void;
}

export const MobileHeroSlider: React.FC<MobileHeroSliderProps> = ({ onOpenEnquiry }) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isInteracting, setIsInteracting] = useState(false);
  const dragDistance = useRef(0);

  const imageIndex = Math.abs(page % HERO_IMAGES.length);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  const goToSlide = (targetIndex: number) => {
    if (targetIndex === imageIndex) return;
    const dir = targetIndex > imageIndex ? 1 : -1;
    setPage([targetIndex, dir]);
  };

  // Preload all 5 slide images immediately on mount
  useEffect(() => {
    HERO_IMAGES.forEach((img) => {
      const imageObj = new Image();
      imageObj.src = img.src;
    });
  }, []);

  // Auto-advance slideshow every 4.5s (pauses while user touches/swipes)
  useEffect(() => {
    if (isInteracting) return;
    const timer = setInterval(() => {
      setPage(([prevPage]) => [prevPage + 1, 1]);
    }, 4500);

    return () => clearInterval(timer);
  }, [isInteracting]);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=Hello%20Namkamal%20Holidays,%20I%20want%20to%20inquire%20about%20a%20holiday%20package.`;

  return (
    <div className="w-full bg-white select-none">
      {/* Invisible preloader */}
      <div className="hidden" aria-hidden="true">
        {HERO_IMAGES.map((img) => (
          <img key={img.id} src={img.src} alt="" />
        ))}
      </div>

      {/* Pure Seamless Slide Container */}
      <div 
        className="relative w-full aspect-[1200/587] overflow-hidden bg-white touch-pan-y"
        onTouchStart={() => {
          setIsInteracting(true);
          dragDistance.current = 0;
        }}
        onTouchEnd={() => setIsInteracting(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.65}
            onDrag={(_e, info) => {
              dragDistance.current = Math.abs(info.offset.x);
            }}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipeThreshold = 35;
              if (offset.x < -swipeThreshold || (offset.x < 0 && velocity.x < -200)) {
                paginate(1);
              } else if (offset.x > swipeThreshold || (offset.x > 0 && velocity.x > 200)) {
                paginate(-1);
              }
            }}
            onClick={() => {
              // Only trigger click if user tapped without dragging
              if (dragDistance.current < 10) {
                onOpenEnquiry?.(HERO_IMAGES[imageIndex].title);
              }
            }}
            className="absolute inset-0 w-full h-full cursor-pointer bg-white"
          >
            <img
              src={HERO_IMAGES[imageIndex].src}
              alt={HERO_IMAGES[imageIndex].title}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="w-full h-full object-cover block select-none pointer-events-none"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Minimalist Floating Pagination Dots at Bottom Center */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 shadow-md">
          {HERO_IMAGES.map((img, idx) => {
            const isActive = idx === imageIndex;
            return (
              <button
                key={img.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-6 h-1.5 bg-gradient-to-r from-[#F7941D] to-[#E91E63] shadow-sm'
                    : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Clean & Professional Mobile Hero Action Hub */}
      <div className="px-4 pt-4 pb-6 bg-gradient-to-b from-orange-50/30 via-white to-gray-50/60 border-b border-gray-100">
        {/* Title and Tagline */}
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-0.5 rounded-full bg-orange-100/80 text-[#F7941D] text-[10px] font-extrabold uppercase tracking-wider mb-2 border border-orange-200/50">
            Official Travel Partner
          </span>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">
            Your Journey, <span className="text-brand-gradient">Our Commitment</span>
          </h1>
          <p className="text-xs text-gray-600 mt-1.5 font-medium leading-relaxed max-w-sm mx-auto">
            Handcrafted domestic & international holiday packages with transparent pricing and 24/7 travel care.
          </p>
        </div>

        {/* Primary Call-to-Action Button */}
        <button
          onClick={() => onOpenEnquiry?.()}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#F7941D] to-[#E91E63] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <span>Plan Your Trip Now</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>

        {/* Secondary Action Row: Explore Packages & WhatsApp */}
        <div className="grid grid-cols-2 gap-2 mt-2.5">
          <a
            href="#featured-packages"
            className="py-2.5 px-3 rounded-xl bg-white text-gray-800 font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs border border-gray-200/90 active:scale-95 transition-transform"
          >
            <Compass className="w-3.5 h-3.5 text-[#F7941D]" />
            <span>View Packages</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-transform"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* 4 Trust Highlights Grid */}
        <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-gray-100 shadow-xs">
            <span className="text-base font-extrabold text-[#F7941D]">100%</span>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-900 leading-tight">Customized</span>
              <span className="text-[9px] text-gray-500 leading-tight">Tailored to you</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-gray-100 shadow-xs">
            <span className="text-base font-extrabold text-[#E91E63]">24/7</span>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-900 leading-tight">Assistance</span>
              <span className="text-[9px] text-gray-500 leading-tight">Always with you</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-gray-100 shadow-xs">
            <span className="text-base font-extrabold text-amber-500">Best</span>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-900 leading-tight">Price Deal</span>
              <span className="text-[9px] text-gray-500 leading-tight">Direct operator</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-gray-100 shadow-xs">
            <span className="text-base font-extrabold text-emerald-500">4.9★</span>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-900 leading-tight">Google Rating</span>
              <span className="text-[9px] text-gray-500 leading-tight">Verified reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
