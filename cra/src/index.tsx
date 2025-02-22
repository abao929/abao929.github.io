import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.sass'
import Gallery from './fodder/Gallery/Gallery'
import Wat from './fodder/Gallery/Wat'
import Quiz from './fodder/Quiz/Quiz'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import New from './fodder/New/New'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='test' element={<Wat />} />
        <Route path='quiz' element={<Quiz />} />
        <Route path='new' element={<New />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
