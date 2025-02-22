import React from 'react'
import ReactDOM from 'react-dom/client'
import Gallery from './fodder/Gallery/Gallery'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Wat from './fodder/Gallery/Wat'
import Main from './components/Main'
import { Main as Beli } from './beli/Main'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/beli/*' element={<Beli />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='test' element={<Wat />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
