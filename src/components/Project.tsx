import React, { useEffect, useState } from 'react'

import styles from '../styles/project.module.sass'

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
    console.log(offsetHeight)
    console.log(offsetWidth)
    setImgOffset({ x: offsetWidth, y: offsetHeight })
  }
  // console.log(mousePosition)
  return (
    <>
      <img
        src={img}
        alt=""
        className={`${styles.image} ${active && !expanded && styles.active}`}
        style={{
          transform: `translate(${mousePosition.x - imgOffset.x / 2}px, ${
            mousePosition.y - imgOffset.y / 2
          }px)`,
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
        {expanded && (
          <div>
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
        )}
      </div>
    </>
  )
}
