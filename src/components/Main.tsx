import React from 'react'
import Landing3 from '../Landing3/Landing3'
import About from './About'
import Project from './Project'
import Landing from './Landing'

// Images
import chobani from '../images/chobani-form.png'
import a24 from '../images/a24-form.png'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 clamp(20px, 4vw, 40px);
  box-sizing: border-box;
`

export default function Main() {
  return (
    <Container>
      <Landing />
      <About />
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
    </Container>
  )
}
