import React from 'react'
import About from './About'
import Projects from './Projects'
import Landing from './Landing'
import Contact from './Contact'
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
      <Contact />
    </Container>
  )
}
