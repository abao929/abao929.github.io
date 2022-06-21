import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './Landing/Landing';
import Gallery from './Gallery/Gallery';
import Landing2 from './Landing2/Landing2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Landing2 />
  </React.StrictMode>
);
