import React, { useEffect, useState, useRef } from 'react';
import './ScrollIndicator.css';

/**
 * Scroll indicator component that disappears on scroll
 */
const ScrollIndicator = () => {
  // State to control visibility
  const [showIndicator, setShowIndicator] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const indicatorRef = useRef(null);

  // Handle initial fade-in
  useEffect(() => {
    // Small delay before showing the fade-in animation
    const fadeInTimer = setTimeout(() => {
      setFadeIn(true);
    }, 300);

    return () => clearTimeout(fadeInTimer);
  }, []);

  // Handle scroll detection
  useEffect(() => {
    // Function to start the fade-out process
    const startFadeOut = () => {
      // First set the fade-out state to trigger the CSS transition
      setFadeOut(true);

      // Then remove from DOM after the transition completes
      setTimeout(() => {
        setShowIndicator(false);
      }, 800); // This should match or exceed the CSS transition duration
    };

    // Add event listeners for all possible scroll events
    window.addEventListener('scroll', startFadeOut, { once: true });
    window.addEventListener('wheel', startFadeOut, { once: true });
    window.addEventListener('touchmove', startFadeOut, { once: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', startFadeOut);
      window.removeEventListener('wheel', startFadeOut);
      window.removeEventListener('touchmove', startFadeOut);
    };
  }, []);

  // Don't render anything if not showing
  if (!showIndicator) return null;

  return (
    <div
      ref={indicatorRef}
      className={`section-indicator ${fadeIn ? 'fade-in' : ''} ${fadeOut ? 'fade-out' : ''}`}
      id="scroll-indicator"
    >
      <div className="scroll-arrow">↓</div>
    </div>
  );
};

export default ScrollIndicator;
