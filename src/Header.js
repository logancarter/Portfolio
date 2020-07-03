import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="Portfolio-header">
      <span className="my-name">Logan Carter</span>
      <nav className="navigation">
        <Link to="/" className="nav-text" id="portfolio">Portfolio</Link>
        <Link to="/about" className="nav-text" id="about">About</Link>
      </nav>
    </header>
  );
}
