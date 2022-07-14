import React from 'react'
import About from './About'
import Projects from './Projects'
import Landing from './Landing'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 clamp(20px, 4vw, 40px);
  box-sizing: border-box;
  /* Border underneath each element idk how I feel abt it tho */
  /* & > *:not(:last-child):after {
    content: '';
    position: absolute;
    left: calc(50% - 10vw);
    bottom: -1px;
    width: 20vw;
    border-bottom: 2px solid black;
  } */
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
