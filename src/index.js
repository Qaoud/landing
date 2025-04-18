import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Reset scroll position using multiple techniques

// 1. Reset immediately
window.scrollTo(0, 0);

// 2. Reset on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  window.scrollTo(0, 0);

  // Replace current history state to clear saved scroll position
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  history.replaceState(null, document.title, window.location.href);
});

// 3. Reset on window load
window.onload = function() {
  window.scrollTo(0, 0);

  // Also reset after a short delay to catch any delayed scrolling
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 50);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
