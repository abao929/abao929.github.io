import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Underlay from './Underlay'

const ContactContainer = styled.div`
  position: relative;
  padding: clamp(1rem, 2.5vw, 4rem) 0;
`

const ContactTitle = styled.div`
  text-align: right;
  padding-bottom: 0.5em;
`

const StyledUnderlay = styled(Underlay)`
  display: block;
  font: 500 clamp(2rem, 7vw, 10rem) forma-djr-display;
  opacity: 0.05;
  text-align: right;
`

const ContactContent = styled.div`
  width: 60%;
  text-align: right;
  & > *:not(:last-child) {
    padding-bottom: 40px;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    & > *:not(:last-child) {
      padding-bottom: 20px;
    }
  }
`

const LinkWrapper = styled.div`
  a {
    display: inline-block;
    overflow: hidden;
    position: relative;
    font: 500 clamp(1.5rem, 2vw, 4rem) helvetica-neue;
    text-transform: uppercase;
    text-decoration: none;
    padding-bottom: 0.05em;
    color: #000;
  }
  a:visited {
    color: #000;
  }
  a::after {
    transform: translateX(-100%);
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    opacity: 0;
    transition: all 0.3s;
  }
  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: translateX(0);
  }
  div {
    font: 100 clamp(1rem, 2vw, 1.25rem) helvetica-neue;
  }
`

export default function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactTitle>
        <Title
          titleText="Contact Me"
          subtitleText="please reach out I'm getting lonely out here"
        />
      </ContactTitle>
      <ContactContent>
        <LinkWrapper>
          <a href="https://www.linkedin.com/in/alex-bao/" target="_blank">
            LinkedIn
          </a>
          <div>
            Add me
            <br /> I lowkey need to expand my network
          </div>
        </LinkWrapper>
        <LinkWrapper>
          <a href="mailto:alexander_bao@brown.edu">Email</a>
          <div>
            Not sure if the mail link works <br />
            My email is alexander_bao@brown.edu
          </div>
        </LinkWrapper>
        <LinkWrapper>
          <a
            href="https://docs.google.com/file/d/1ZrYRPF4IyXtiuhcH4dc8jcnG7tLdQVwEjm9s7L3FJHo/view"
            target="_blank"
          >
            Résumé
          </a>
          <div>If you're a recruiter, please hire me lol</div>
        </LinkWrapper>
        <LinkWrapper>
          <a
            href="https://open.spotify.com/user/abao20?si=8ec0bab531554336"
            target="_blank"
            className="header"
          >
            Spotify
          </a>
          <div>I don't know what else to plug</div>
        </LinkWrapper>
      </ContactContent>
      <StyledUnderlay>联系方式</StyledUnderlay>
    </ContactContainer>
  )
}
