import React, { useRef, forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import useMouseEffect from '../../hooks/useMouseEffect';
import './CloudBackground.css';

/**
 * Cloud background component with mouse movement effect
 */
const CloudBackground = forwardRef((props, ref) => {
  const cloudRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Expose the cloudRef to parent components
  useImperativeHandle(ref, () => ({
    getCloudElement: () => cloudRef.current
  }));

  // Trigger animation on component mount
  useEffect(() => {
    // Small delay before starting the animation
    const animationTimer = setTimeout(() => {
      setAnimate(true);
    }, 600);

    return () => clearTimeout(animationTimer);
  }, []);

  // Apply mouse effect to the cloud
  useMouseEffect({
    elementRef: cloudRef,
    sensitivity: 50,
    baseTransform: 'translate(-50%, -50%) rotate(3deg) skew(2deg, -1deg)'
  });

  return (
    <div
      className={`cloud-shape ${animate ? 'cloud-animate-in' : ''}`}
      ref={cloudRef}
    />
  );
});

export default CloudBackground;
