import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.sass'
import Landing from './Landing/Landing'
import Gallery from './Gallery/Gallery'
import Landing2 from './Landing2/Landing2'
import Landing3 from './Landing3/Landing3'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Project from './components/Project'
import chobani from './images/chobani-form.png'
import a24 from './images/a24-form.png'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="test" element={<Landing3 />} />
        <Route
          path="project"
          element={
            <>
              <Landing3 />
              <Project
                title="huh"
                number={1}
                img={chobani}
                year="2022"
                desc="This is just fodder work that I'm putting here for now"
                link="huh"
              />
              <Project
                title="going"
                number={3}
                img={a24}
                year="2022"
                desc="does this work."
                link="huh"
              />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
