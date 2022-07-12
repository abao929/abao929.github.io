import React from 'react'

import Underlay from './Underlay'
import styled from 'styled-components'

const StyledLanding = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  .overlay {
    width: 100%;
    box-sizing: border-box;
    text-align: right;
    @media (max-width: 480px) {
      padding-right: 0;
      text-align: center;
    }
    padding-top: clamp(1rem, 4vh, 3rem);
    /* padding-right: clamp(1rem, 10vw, 6rem); */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font: 500 clamp(2rem, 5vw, 3rem) scotch-display;
      text-transform: lowercase;
      .links {
        font: 100 clamp(0.875rem, 2vw, 1.25rem) helvetica-neue;
        text-transform: uppercase;
        & span:nth-child(1) {
          padding-right: clamp(0.5rem, 2vw, 2rem);
        }
      }
    }
    .text {
      margin-top: 4rem;
      @media (max-width: 480px) {
        margin-top: 8rem;
      }
      .title {
        font: 400 clamp(2rem, 7vw, 5rem) scotch-display;
      }
      .subtitle {
        font: 100 clamp(1rem, 2vw, 2rem) helvetica-neue;
      }
    }
  }
`

const StyledUnderlay = styled(Underlay)`
  padding: 0 clamp(20px, 2vw, 40px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  div:nth-child(-n + 2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    font: 500 clamp(3rem, 14vw, 12rem) forma-djr-display;
    text-transform: lowercase;
    opacity: 0.05;
    &:nth-child(1) {
      justify-content: end;
      align-items: flex-start;
    }
    &:nth-child(2) {
      justify-content: start;
      align-items: flex-end;
    }
    @media (max-width: 480px) {
      &:nth-child(1) {
        align-items: center;
      }
      &:nth-child(2) {
        justify-content: center;
        align-items: center;
      }
    }
  }
  .svg-container {
    position: absolute;
    bottom: clamp(20px, 4vh, 60px);
    left: clamp(20px, 8vw, 80px);
    width: 50vw;
    height: 60vh;
    svg {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
    @media (max-width: 480px) {
      position: relative;
      left: 0;
      margin: 0 auto;
    }
  }
`

export default function Landing() {
  return (
    <StyledLanding>
      <div className="overlay">
        <div className="navbar">
          <span>Alex Bao</span>
          <div className="links">
            <span>About</span>
            <span>Work</span>
          </div>
        </div>
        <div className="text">
          <div className="title">
            front-end developer & <br />
            student at brown
          </div>
          <div className="subtitle">+ clock and bell tower enthusiast</div>
        </div>
      </div>
      <StyledUnderlay>
        <div>欢迎大家</div>
        <div>我叫鲍骏成</div>
        <div className="svg-container">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 506 669"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 447C44.1667 534.333 113 641.5 241.895 668C322.295 668 381.167 588.167 395.5 559.5C415.726 487.988 409.744 471.271 426 368.5M260 183C303.5 181.5 404.497 44 372.5 1C425.988 40.3814 444.797 134.772 437.371 256.086M260 183C244.518 183.534 224.477 182.674 204 183.983M260 183C292 185.577 310.667 199.907 314.5 214.5M309 257.5C314 368.5 253.454 412.213 191.5 394C104.802 368.5 96.5 326.5 104.802 257.5M309 257.5C309 212.3 280.5 190 204 183.983M309 257.5C318 253.5 320.5 250.5 330 249.5M204 183.983C166.942 186.351 128.458 195.82 113 233.5C109.889 241.083 107.089 249.144 104.802 257.5M204 183.983C159.2 184.769 67 225.322 26.5 245.5L104.802 257.5M372.5 257.5C363.985 250.533 341.584 248.647 330 249.5M372.5 257.5V269M372.5 257.5C406.533 185.852 480.269 191.607 500.682 256.086M426 368.5C480.5 380.106 505.5 345 505.5 281C504.717 271.917 503.062 263.603 500.682 256.086M426 368.5C385.074 359.785 367.449 313.823 372.5 269M426 368.5C431.818 331.72 435.333 289.389 437.371 256.086M372.5 269C396.5 297.5 438 288.5 446 265C444.234 261.374 441.222 258.388 437.371 256.086M372.5 269C387.56 249.056 420.512 246.01 437.371 256.086M104.802 257.5C150.201 239.667 240.3 219.4 237.5 281C204 302.5 147.868 291 104.802 257.5ZM330 249.5C374 419 372.5 447 280.5 431M233.868 531C298 531 341.5 529.5 385.5 506.5M233.868 531C265.5 536.5 267.194 548.961 318.5 544.5C353 541.5 373 524 385.5 506.5M233.868 531C245.868 522.5 281.5 500.5 309 506.5C327.5 510.536 324 504 342 500.5C356.5 502.5 368.144 499 385.5 506.5M437.371 256.086H500.682M377.717 223C381.884 209.333 403.205 192.1 438.805 194.5"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </div>
      </StyledUnderlay>
    </StyledLanding>
  )
}
