import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  font: 400 clamp(1rem, 1.25vw, 1.25rem) sans-serif;
  display: flex;
  flex-direction: row;
  & > div {
    flex: 1;
    padding: 0 2em;
  }
  .image {
    border: 2px solid blue;
  }
`

export default function About() {
  return (
    <AboutContainer>
      <div className="image">
        {/* <img src={require('../images/portrait.png')} alt="" /> */}
      </div>
      <div className="text">
        Hey I'm a junior at Brown University studying computer science. I'm
        passionate about front-end design and development. I'm currently a
        front-end engineering intern @ Morphic, and am looking for internships
        for the summer of 2023.
        <br />
        When I'm not working, I love to eat and cook for my friends, bike around
        scenic areas and play a multitude of sports poorly.
        <br />
        Since no one really teaches CSS at school, most of what I have learned
        in that regard is self-studied, so please give me feedback! Also please
        let me know if you're a recruiter looking at this, because I'd be sad if
        like no one saw this after I spent like a lot of time on this stuff.
        Feel free to reach out to me at alexander_bao@brown.edu if you have any
        feedback or ideas or if you just want to talk... Been kinda lonely
        lately...
      </div>
    </AboutContainer>
  )
}
