import React from 'react';
import logo from './logo.svg';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="Portfolio">
      <header className="Portfolio-header">
        <span className="my-name">Logan Carter</span>
        <div className="navigation">
          <span id="portfolio">Portfolio</span>
          <span id="about">About</span>
        </div>
      </header>

      <div className="hero-text">
        <div className="actual-text">
          <div>UX Designer </div>
          <div>with a background </div>
          <div>in Software Engineering</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
