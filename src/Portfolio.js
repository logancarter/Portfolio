import React from 'react';
import logo from './logo.svg';
import './Portfolio.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Portfolio() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="Portfolio">
    <header className="Portfolio-header">
      <span className="my-name">Logan Carter</span>
      <nav className="navigation">
        <Link to="/" id="portfolio">Portfolio</Link>
        <Link to="/about" id="about">About</Link>
      </nav>
    </header>

    <div className="hero-text">
      <div className="actual-text">
        <div>UX Designer </div>
        <div>with a background </div>
        <div>in Software Engineering</div>
      </div>
    </div>
  </div>
  )
}

function About() {
  return <h2>About</h2>;
}
