import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = "Namkamal Holidays™ | Your Journey Our Commitment", 
  description = "Discover domestic and international holiday packages with Namkamal Holidays. Premium travel planning, customized itineraries, honeymoon tours, and 24/7 travel assistance." 
}) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};
