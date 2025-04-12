import './App.css';

function App() {
  const handleMouseMove = (e) => {
    const cloud = document.querySelector('.cloud-shape');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    cloud.style.transform = `translate(-50%, -50%) rotate(3deg) skew(2deg, -1deg) translate(${xAxis}px, ${yAxis}px)`;
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      {/* Logo in the top left */}
      <div className="logo">DeepRevel</div>
      
      {/* Social links in the top right */}
      <div className="social-links">
        <a href="https://twitter.com/deeprevel" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/x_logo.png" alt="X (Twitter)" className="social-logo" />
        </a>
        <a href="https://instagram.com/deeprevel" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/instagram_logo.png" alt="Instagram" className="social-logo" />
        </a>
        <a href="https://linkedin.com/company/deeprevel" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/linkedin_logo.png" alt="LinkedIn" className="social-logo" />
        </a>
      </div>

      <div className="content">
        <div className="cloud-shape"></div>
        <p className="tagline">Brewing brilliance behind the scenes… stay tuned!</p>
      </div>
    </div>
  );
}

export default App;
