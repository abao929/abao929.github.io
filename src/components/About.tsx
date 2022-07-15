import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Underlay from './Underlay'

const AboutContainer = styled.div`
  position: relative;
  /* border: 2px solid red; */
  padding: clamp(1rem, 4vw, 8rem) 0;
  .image-text {
    /* border: 2px solid red; */
    padding: 0 clamp(1rem, 4vw, 4rem);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    .image {
      /* border: 1px solid blue; */
      margin: clamp(2rem, 8vh, 6rem) 0 0 clamp(1rem, 4vw, 3rem);
      flex: 1;
      background: url(${require('./assets/images/portrait.png')}) center
        no-repeat;
      background-size: auto 100%;
      @media (max-width: 992px) {
        display: none;
      }
    }
    .text {
      /* border: 1px solid green; */
      flex: 1;
      /* .title-container {
        font: 400 clamp(2rem, 7vw, 8rem) scotch-display;
        text-transform: lowercase;
      } */
      .body {
        padding-left: clamp(1rem, 4vw, 3rem);
        font: 300 clamp(1rem, 1.25vw, 1.5rem) / 1.5em sans-serif;
        a:visited {
          color: #000;
        }
      }
    }
  }
`

const StyledTitle = styled(Title)`
  padding-bottom: 1em;
  .subtitle {
    padding-left: 1em;
  }
`

const StyledUnderlay = styled(Underlay)`
  font: 500 clamp(2rem, 10vw, 10rem) forma-djr-display;
  opacity: 0.05;
`

export default function About() {
  return (
    <AboutContainer id="about">
      <div className="image-text">
        <div className="text">
          <StyledTitle titleText="about me" subtitleText="a brief summary" />
          <div className="body">
            Hey I'm a junior at Brown University studying computer science. I'm
            passionate about front-end design and development. I'm currently a
            front-end engineering intern at Morphic, and am looking for
            internship opportunities for the summer of 2023.
            <br /> <br />
            Outside of work, I enjoy eating, watching F1, and playing a
            multitude of sports poorly. I've been learning to cook though it's
            not going too great. I'm also trying to develop a better eye for
            design so send me interesting artwork/designs that you enjoy.
            <br /> <br />
            Since no one really teaches CSS at school, most of what I have
            learned in that regard is self-studied, so please give me feedback,
            especially about responsive design, media queries, and proper
            clamping techniques. Also please let me know if you're a recruiter
            looking at this because I have no idea if people actually look at
            this. Feel free to <a href="#contact">reach out to me,</a>
            if you have any feedback, ideas or if you just want to talk...
          </div>
        </div>
        <span className="image" />
      </div>

      <StyledUnderlay>个人简介</StyledUnderlay>
    </AboutContainer>
  )
}
