'use client'
import { useState, useRef, useEffect, useMemo } from 'react'
import styles from './Gallery.module.scss'

const imageFilenames = Array.from({ length: 18 }, (_, i) => `${i + 1}.jpeg`)
const spans = [
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 2, row: 1 },
  { col: 2, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 2, row: 1 },
  { col: 2, row: 1 },
  { col: 2, row: 1 },
  { col: 2, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 2, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
]

const getRandomScale = () => 0.8 + Math.random() * 0.4
const getRandomDisplacement = () => Math.floor(Math.random() * 61) - 30

const BLUR_THRESHOLD = 100
const BLUR_MAX_DIST = 1000

export const Gallery = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])

  // Store initial random transforms for each image
  const initialTransforms = useMemo(
    () =>
      imageFilenames.map(() => ({
        scale: getRandomScale(),
        dx: getRandomDisplacement(),
        dy: getRandomDisplacement(),
      })),
    []
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {imageFilenames.map((filename, idx) => {
          let blur = 0
          let ghostOpacity = 0
          let ghostOffset = 0
          const imgRef = imgRefs.current[idx]

          if (imgRef) {
            const rect = imgRef.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            const dx = mouse.x - centerX
            const dy = mouse.y - centerY
            const dist = Math.sqrt(dx * dx + dy * dy)

            const distFromThreshold = Math.max(dist - BLUR_THRESHOLD, 0)
            const dizzy = Math.min(
              distFromThreshold / (BLUR_MAX_DIST - BLUR_THRESHOLD),
              1
            )

            blur = 9 * dizzy
            ghostOpacity = dizzy * 0.7
            ghostOffset = 10 * dizzy
          }

          const { scale, dx, dy } = initialTransforms[idx]

          return (
            <div
              key={filename}
              style={{
                gridColumn: `span ${spans[idx % spans.length].col}`,
                gridRow: `span ${spans[idx % spans.length].row}`,
                position: 'relative',
                transform: `scale(${scale}) translate(${dx}px, ${dy}px)`,
              }}
            >
              <img
                ref={(el) => {
                  imgRefs.current[idx] = el
                }}
                src={`/images/gallery/${filename}`}
                alt=''
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'filter 0.5s cubic-bezier(.25,.8,.25,1)',
                  filter: `blur(${blur}px)`,
                  zIndex: 1,
                  position: 'relative',
                }}
              />
              <img
                src={`/images/gallery/${filename}`}
                alt=''
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  opacity: ghostOpacity,
                  pointerEvents: 'none',
                  zIndex: 2,
                  transition:
                    'opacity 0.5s cubic-bezier(.25,.8,.25,1), transform 0.5s cubic-bezier(.25,.8,.25,1)',
                  transform: `translateX(${
                    idx % 2 === 0 ? ghostOffset : -ghostOffset
                  }px)`,
                  filter: `blur(${blur}px)`,
                }}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
