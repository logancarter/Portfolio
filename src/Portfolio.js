import React from 'react';
import './Portfolio.css';
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function Portfolio() {
  return (
    <Router>
    <Header></Header>
      <div>
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
