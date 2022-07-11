import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.sass'
import Landing from './Landing/Landing'
import Gallery from './Gallery/Gallery'
import Landing2 from './Landing2/Landing2'
import Landing3 from './Landing3/Landing3'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="test" element={<Landing3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
