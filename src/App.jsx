import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'
import ScrollReset from './components/ScrollReset/ScrollReset'
import './styles/common.css'

/**
 * Main App component that serves as the container for all other components
 */
function App() {
  return (
    <div className="page-container">
      {/* Scroll Reset Component */}
      <ScrollReset />

      {/* Fixed Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Content Section */}
      <section id="content-section" className="section" style={{ top: '800px' }}>
        <div className="platform-info">
          <h2>Reach the right audience</h2>
          <p>Make every word count by reaching the audience that’s already looking for what you offer.</p>
        </div>
      </section>
    </div>
  )
}

export default App
