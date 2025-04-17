import { useEffect } from 'react';

/**
 * Custom hook to handle mouse movement effects
 * @param {Object} options - Configuration options
 * @param {React.RefObject} options.elementRef - Reference to the element to apply the effect to
 * @param {number} options.sensitivity - Sensitivity of the movement (lower = more movement)
 * @param {string} options.baseTransform - Base transform style to apply
 */
const useMouseEffect = ({
  elementRef,
  sensitivity = 50,
  baseTransform = 'translate(-50%, -50%) rotate(3deg) skew(2deg, -1deg)'
}) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!elementRef.current) return;

      const xAxis = (window.innerWidth / 2 - e.pageX) / sensitivity;
      const yAxis = (window.innerHeight / 2 - e.pageY) / sensitivity;

      elementRef.current.style.transform = `${baseTransform} translate(${xAxis}px, ${yAxis}px)`;
    };

    // Add event listener to the document
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [elementRef, sensitivity, baseTransform]);
};

export default useMouseEffect;
