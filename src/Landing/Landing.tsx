import React from 'react';
import './Landing.sass';

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="personal-container">Personal</div>
      <div className="name-container">
        <div className="red">b</div>
        <div className="blue">
          <span className="char">a</span>
          <span className="char">l</span>
          <span className="char">e</span>
          <span className="char">x</span>
          <span className="char">a</span>
          <span className="char">n</span>
          <span className="char">d</span>
          <span className="char">e</span>
          <span className="char">r</span>
        </div>
        <div className="green">o</div>
      </div>
      <div className="portfolio-container">Portfolio</div>
    </div>
  );
}
