import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import useScrollEffect from '../../hooks/useScrollEffect';
import './Header.css';

/**
 * Header component with logo and social links
 */
const Header = () => {
  const { isScrolled } = useScrollEffect({ scrollThreshold: 10 });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  return (
    <header className={`fixed-header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Logo in the left */}
      <div className="logo" onClick={scrollToTop}>DeepRevel</div>

      {/* Social links in the right */}
      <SocialLinks />
    </header>
  );
};

export default Header;
