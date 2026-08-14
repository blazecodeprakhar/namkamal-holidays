import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 50px 0px',
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Cap max delay to 120ms so animations feel instant & crisp
  const cappedDelay = Math.min(delay, 120);

  const getInitialStyle = () => {
    switch (direction) {
      case 'down':
        return 'opacity-0 -translate-y-4';
      case 'left':
        return 'opacity-0 -translate-x-4';
      case 'right':
        return 'opacity-0 translate-x-4';
      case 'zoom':
        return 'opacity-0 scale-95';
      case 'up':
      default:
        return 'opacity-0 translate-y-4';
    }
  };

  const getVisibleStyle = () => {
    switch (direction) {
      case 'zoom':
        return 'opacity-100 scale-100';
      case 'up':
      case 'down':
      case 'left':
      case 'right':
      default:
        return 'opacity-100 translate-y-0 translate-x-0';
    }
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${cappedDelay}ms` }}
      className={`transition-all duration-300 ease-out transform-gpu will-change-transform ${
        isVisible ? getVisibleStyle() : getInitialStyle()
      } ${className}`}
    >
      {children}
    </div>
  );
};
