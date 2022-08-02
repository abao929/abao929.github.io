import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.sass'
import Landing from './fodder/Landing/Landing'
import Gallery from './fodder/Gallery/Gallery'
import Landing2 from './fodder/Landing2/Landing2'
import Landing3 from './fodder/Landing3/Landing3'
import Wat from './fodder/Gallery/Wat'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="test" element={<Wat />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
