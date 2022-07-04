import React from 'react';
import './Gallery.sass';

export default function Gallery() {
  return (
    // I should make the items a component, pass in the orientation, 1st color, 2nd color
    <div className="gallery-container">
      <div className="top">
        <div className="v-split">
          <div className="orange"></div>
          <div className="black"></div>
          <div className="white"></div>
        </div>
      </div>
      <div className="double what">
        <div className="v-split">
          <div className="orange"></div>
          <div className="black"></div>
          <div className="white"></div>
        </div>
        <div className="h-split">
          <div className="orange"></div>
          <div className="black"></div>
          <div className="white"></div>
        </div>
      </div>
      <div className="mid">
        <div className="v-split">
          <div className="orange"></div>
          <div className="black"></div>
          <div className="white"></div>
        </div>
      </div>
      <div className="double">
        <div className="v-split">
          <div className="orange"></div>
          <div className="black"></div>
          <div className="white"></div>
        </div>
        <div className="v-split">
          <div className="white"></div>
          <div className="black"></div>
          <div className="orange"></div>
        </div>
      </div>
      <div className="top">
        <div className="h-split">
          <div className="orange"></div>
          <div className="black"></div>
          <div className="white"></div>
        </div>
      </div>
      <div className="bot">
        <div className="v-split">
          <div className="orange"></div>
          <div className="black"></div>
          <div className="white"></div>
        </div>
      </div>
      <div className="mid">
        <div className="v-split">
          <div className="white"></div>
          <div className="black"></div>
          <div className="orange"></div>
        </div>
      </div>
    </div>
  );
}
