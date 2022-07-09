import React, { useEffect, useState, useRef } from 'react'

import styles from '../styles/project.module.sass'
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

/* transform: translate(
  ${mousePosition.x - imgOffset.x / 2}px,
  ${mousePosition.y - imgOffset.y / 2}px
); */

const Panel = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin: 0 40px;
`

const PanelHeader = styled.div``

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
  const [dropdownHeight, setDropdownHeight] = useState(0)
  const onImgLoad = ({ target: img }: any) => {
    const { offsetHeight, offsetWidth } = img
    setImgOffset({ x: offsetWidth, y: offsetHeight })
  }
  // const elementRef = useRef(null)
  // useEffect(() => {
  //   console.log(elementRef.current?.['clientHeight'])
  //   let height: number = elementRef.current?.['clientHeight'] ?? 0
  //   setDropdownHeight(height)
  // }, [])

  // console.log(mousePosition)
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
      <div className={styles.container}>
        <div
          className={styles.title}
          onClick={() => toggleExpand(!expanded)}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          {title}
          <p>{`${number < 10 && 0}${number}`}</p>
        </div>
        <div className={styles.dropdownContainer}>
          <div
            className={styles.dropdown}
            // ref={elementRef}
            // style={{ height: `${expanded ? dropdownHeight : 'auto'}` }}
          >
            <div className={styles.imgContainer}>
              <img src={img} alt="" />
            </div>
            <div className={styles.textContainer}>
              <div>{year}</div>
              <div className={styles.description}>
                <div>{desc}</div>
                <a href={link}>VISIT FULL VERSION</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
