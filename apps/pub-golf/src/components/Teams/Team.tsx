'use client'
import React, { useEffect, useState } from 'react'
import styles from './Team.module.scss'

const SlidingGolferImage = ({ name }: { name: string }) => {
  const [showFirst, setShowFirst] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.slidingImageContainer}>
      <img
        src={`/images/golfers/${name}1.jpeg`}
        alt={name}
        className={`${styles.golferImage} ${
          showFirst ? styles.slideIn : styles.slideOut
        }`}
        style={{ left: showFirst ? 0 : '-100%' }}
      />
      <img
        src={`/images/golfers/${name}2.jpeg`}
        alt={name}
        className={`${styles.golferImage} ${
          !showFirst ? styles.slideIn : styles.slideOut
        }`}
        style={{ left: showFirst ? '100%' : 0 }}
      />
    </div>
  )
}

const Golfer = ({
  golfer,
}: {
  golfer: { name: string; description: string }
}) => {
  return (
    <div className={styles.golfer}>
      <h3>{golfer.name}</h3>
      <SlidingGolferImage name={golfer.name} />
      <p>{golfer.description}</p>
    </div>
  )
}

export const Team = ({
  team,
}: {
  team: { name: string; golfers: { name: string; description: string }[] }
}) => {
  return (
    <div className={styles.team}>
      <h2>{team.name}</h2>
      <div className={styles.golfers}>
        {team.golfers.map((golfer) => (
          <Golfer key={golfer.name} golfer={golfer} />
        ))}
      </div>
    </div>
  )
}
