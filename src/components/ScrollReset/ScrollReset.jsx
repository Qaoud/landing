import { useEffect } from 'react';

/**
 * Component that resets scroll position on mount and on page reload
 * This is a more React-centric approach to ensure scroll position is reset
 */
const ScrollReset = () => {
  useEffect(() => {
    // Reset scroll position immediately
    window.scrollTo(0, 0);
    
    // Reset scroll position after a short delay
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    // Cleanup
    return () => clearTimeout(timer);
  }, []);
  
  // This is a functional component that doesn't render anything
  return null;
};

export default ScrollReset;
