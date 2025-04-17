import React from 'react';
import './SocialLinks.css';

/**
 * Social media links component
 */
const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://twitter.com/deeprevel" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src={process.env.PUBLIC_URL + '/x_logo.png'} alt="X (Twitter)" className="social-logo" />
      </a>
      <a href="https://instagram.com/deeprevel" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src={process.env.PUBLIC_URL + '/instagram_logo.png'} alt="Instagram" className="social-logo" />
      </a>
      <a href="https://linkedin.com/company/deeprevel" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src={process.env.PUBLIC_URL + '/linkedin_logo.png'} alt="LinkedIn" className="social-logo" />
      </a>
    </div>
  );
};

export default SocialLinks;
