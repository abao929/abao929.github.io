import React from 'react'
import styles from './Teams.module.scss'
import { Team } from './Team'

const data = [
  {
    name: 'Brown Town',
    golfers: [
      {
        name: 'Anusha',
        description:
          'Excited for Campus Dance so we can watch her hit on the twin towers like its 01 again. Real Plans for Real People',
      },
      {
        name: 'Suraj',
        description:
          'The only thing better than a golf ball is a golf ball with a hole in it',
      },
      {
        name: 'Vignesh',
        description:
          'Aside from his ex, the only thing that hit on him this past year was a T`oyota corolla',
      },
    ],
  },
  {
    name: 'Team Doctors and Patient 0',
    golfers: [
      {
        name: 'Chaerim',
        description:
          "God's sleepiest golfer. We'll see if she makes it through all 9 holes or pulls an Irish goodbye Waterman style",
      },
      {
        name: 'Om',
        description:
          "Continuing to complete college bucketlist items at Sinai. While he hasn't gotten laid yet, he has finally won an IM Chip!!",
      },
      {
        name: 'Tanya',
        description:
          'The only thing stinkier than her feet are the hours she works',
      },
    ],
  },
  {
    name: 'Uhhhh like an inside out vanilla oreo?',
    golfers: [
      {
        name: 'Alex',
        description:
          "Looking to 4peat in a game that I run and score yearly. Yeah I'm the wunderkind of drinking beer or of fudging data like I'm in high school chem",
      },
      {
        name: 'Annika',
        description:
          'Continuing her legacy as crustiest Daytime friend. Recently got caught using spilt makeup and eating straight cheese poured into a bowl',
      },
      {
        name: 'Neil',
        description:
          "There's been numerous bets on when he'll finally marry Sophie and have kids. The lines set at 2026 but no one would've expected him to father a 22 year old Asian kid called Derek at work",
      },
    ],
  },
]

export const Teams = () => {
  return (
    <section>
      <h1>Teams</h1>
      <div className={styles.teams}>
        {data.map((team) => (
          <Team key={team.name} team={team} />
        ))}
      </div>
    </section>
  )
}
