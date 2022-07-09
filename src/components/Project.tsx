import React, { useEffect, useState, useRef, Component } from 'react'

import styled from 'styled-components'

interface ProjectProp {
  title: string
  number: number
  img: string
  year: string
  desc: string
  link: string
}

interface Position {
  x: number
  y: number
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<Position>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const updateMousePosition = (event: { clientX: any; clientY: any }) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])
  return mousePosition
}

const MouseImage = styled.img`
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  max-width: 50vw;
  max-height: 50vh;
  object-fit: contain;
  pointer-events: none;
  z-index: 100;
  &.active {
    opacity: 1;
  }
`

const Panel = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin: 0 40px;
`

const PanelHeader = styled.div`
  cursor: pointer;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  font: 400 max(7vw, 4rem) scotch-display;
  word-break: break-word;
  text-transform: uppercase;
  transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    opacity: 0.5;
  }
  p {
    margin-top: auto;
    color: rgba(150, 150, 150);
    font: 500 1.5rem sans-serif;
  }
`

const PanelContent = styled.div`
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  .image-container {
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    padding: clamp(30px, 10vh, 300px) clamp(40px, 10vw, 400px);
    img {
      width: 100%;
      height: auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
  .text-container {
    padding: 40px 0;
    display: flex;
    flex-direction: row;
    & > * {
      flex: 1;
    }
    .description {
      & > *:first-child {
        padding-bottom: 20px;
      }
    }
  }
  &.hidden {
    display: none;
  }
`

// https://florentbiffi.com/ - use this for inspiration - on expanded change the video/demo into a slideshow component
export default function Project({
  title,
  number,
  img,
  year,
  desc,
  link,
}: ProjectProp) {
  const [expanded, toggleExpand] = useState(false)
  const [active, setActive] = useState(false)
  const mousePosition = useMousePosition()
  const [imgOffset, setImgOffset] = useState<Position>({ x: 0, y: 0 })
  const onImgLoad = ({ target: img }: any) => {
    const { offsetHeight, offsetWidth } = img
    setImgOffset({ x: offsetWidth, y: offsetHeight })
  }
  const elementRef = useRef(null)

  return (
    <>
      <MouseImage
        src={img}
        alt=""
        className={active && !expanded ? 'active' : ''}
        style={{
          transform: `translate(
          ${mousePosition.x - imgOffset.x / 2}px,
          ${mousePosition.y - imgOffset.y / 2}px
        )`,
        }}
        onLoad={onImgLoad}
      />
      <Panel>
        <PanelHeader
          onClick={() => toggleExpand(!expanded)}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          {title}
          <p>{`${number < 10 && 0}${number}`}</p>
        </PanelHeader>
        <PanelContent
          ref={elementRef}
          style={{
            height: expanded ? elementRef.current?.['scrollHeight'] : 0,
          }}
        >
          <div className="image-container">
            <img src={img} alt="" />
          </div>
          <div className="text-container">
            <div>{year}</div>
            <div className="description">
              <div>{desc}</div>
              <a href={link}>VISIT FULL VERSION</a>
            </div>
          </div>
        </PanelContent>
      </Panel>
    </>
  )
}
