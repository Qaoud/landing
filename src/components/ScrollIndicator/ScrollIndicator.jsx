import React, { useEffect, useState, useRef } from 'react';
import './ScrollIndicator.css';

/**
 * Scroll indicator component that disappears only when scrolling down
 */
const ScrollIndicator = () => {
  // State to control visibility
  const [showIndicator, setShowIndicator] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const indicatorRef = useRef(null);
  const lastScrollY = useRef(0);

  // Handle initial fade-in and scroll reset
  useEffect(() => {
    // Force scroll to top on component mount
    window.scrollTo(0, 0);

    // Small delay before showing the fade-in animation
    const fadeInTimer = setTimeout(() => {
      setFadeIn(true);

      // Double-check scroll position
      window.scrollTo(0, 0);
    }, 300);

    return () => clearTimeout(fadeInTimer);
  }, []);

  // Handle scroll detection
  useEffect(() => {
    // Store initial scroll position
    const initialScrollY = window.scrollY;
    lastScrollY.current = initialScrollY;

    // Flag to track if user has actually scrolled
    let hasUserScrolled = false;

    // Function to start the fade-out process
    const startFadeOut = () => {
      // Only proceed if user has actually scrolled
      if (!hasUserScrolled) return;

      // First set the fade-out state to trigger the CSS transition
      setFadeOut(true);

      // Then remove from DOM after the transition completes
      setTimeout(() => {
        setShowIndicator(false);
      }, 800); // This should match or exceed the CSS transition duration
    };

    // Function to check scroll direction and only hide on scroll down
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mark that user has scrolled if position changed by more than 20px
      // Using a higher threshold to be more tolerant of small browser adjustments
      if (Math.abs(currentScrollY - initialScrollY) > 20) {
        hasUserScrolled = true;
      }

      // Only hide the indicator when scrolling down and user has actually scrolled
      if (currentScrollY > lastScrollY.current && hasUserScrolled) {
        startFadeOut();
        // Remove event listeners after starting fade-out
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('wheel', handleWheelEvent);
        window.removeEventListener('touchmove', handleTouchMove);
      }

      lastScrollY.current = currentScrollY;
    };

    // Handle wheel events to detect direction
    const handleWheelEvent = (event) => {
      // Mark that user has scrolled
      hasUserScrolled = true;

      // Positive deltaY means scrolling down
      if (event.deltaY > 0) {
        startFadeOut();
        // Remove event listeners after starting fade-out
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('wheel', handleWheelEvent);
        window.removeEventListener('touchmove', handleTouchMove);
      }
    };

    // Handle touch events
    let touchStartY = 0;
    const handleTouchStart = (event) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      const touchY = event.touches[0].clientY;

      // Mark that user has scrolled
      hasUserScrolled = true;

      // If touch moved upward (scrolling down)
      if (touchY < touchStartY) {
        startFadeOut();
        // Remove event listeners after starting fade-out
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('wheel', handleWheelEvent);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchstart', handleTouchStart);
      }
      touchStartY = touchY;
    };

    // Add event listeners for all possible scroll events after a short delay
    // This ensures the page has fully loaded and any automatic scroll adjustments have completed
    const eventListenerTimer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('wheel', handleWheelEvent);
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
    }, 500); // 500ms delay

    // Cleanup
    return () => {
      clearTimeout(eventListenerTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheelEvent);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
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
