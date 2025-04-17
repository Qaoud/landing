import React, { useRef, useState, useEffect } from 'react';
import BoxesLoader from '../BoxesLoader/BoxesLoader';
import CloudBackground from '../CloudBackground/CloudBackground';
import './HeroSection.css';

/**
 * Hero section component with cloud background, 3D boxes loader, and tagline
 */
const HeroSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const cloudRef = useRef(null);

  // Animation states
  const [animate, setAnimate] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    // Small delay before starting the animation
    const animationTimer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(animationTimer);
  }, []);

  return (
    <section
      id="hero"
      className={`hero-section ${animate ? 'animate-in' : ''}`}
      ref={sectionRef}
    >
      {/* 3D Boxes Loader */}
      <BoxesLoader />

      <div
        className={`content ${animate ? 'content-animate-in' : ''}`}
        ref={contentRef}
      >
        <CloudBackground ref={cloudRef} />
        <p className={`tagline ${animate ? 'tagline-animate-in' : ''}`}>Brewing brilliance behind the scenes… stay tuned!</p>
      </div>
    </section>
  );
};

export default HeroSection;
