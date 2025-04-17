import { useEffect, useState } from 'react';

/**
 * Custom hook to handle scroll effects
 * @param {Object} options - Configuration options
 * @param {number} options.scrollThreshold - Threshold for scroll effects (in pixels)
 * @returns {Object} - Scroll state and utility functions
 */
const useScrollEffect = ({ scrollThreshold = 5 }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > scrollThreshold);
    };

    // Initial call to set correct state
    handleScroll();

    // Add event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return {
    scrollY,
    isScrolled
  };
};

export default useScrollEffect;
