import React from 'react'
import Landing3 from '../Landing3/Landing3'
import About from './About'
import Projects from './Projects'
import Landing from './Landing'
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
      <Projects />
    </Container>
  )
}
