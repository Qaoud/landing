import React, { useEffect, useState } from 'react';
import './BoxesLoader.css';

/**
 * 3D Boxes Loader animation component
 */
const BoxesLoader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay before showing the boxes loader
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`boxes-container ${visible ? 'boxes-visible' : ''}`}>

      <div className="boxes">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BoxesLoader;
