import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'
import './styles/common.css'

/**
 * Main App component that serves as the container for all other components
 */
function App() {
  return (
    <div className="page-container">
      {/* Fixed Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Content Section */}
      <section id="content-section" className="section" style={{ minHeight: '101vh' }}>
        <div className="platform-info">
          <h2>Reach the right audience</h2>
          <p>Make every word count by reaching the audience that’s already looking for what you offer.</p>
        </div>
      </section>
    </div>
  )
}

export default App
