import React from 'react'
import styles from './Landing3.module.sass'

export default function Landing3() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div>Alex Bao</div>
        <div>
          Currently Design <br />
          Engineer @ Morphic
        </div>
        <div>
          Based in Boston <br />
          Massachusetts
        </div>
        <div>
          <a href="">Work,</a>
          <a href="">About,</a>
          <a href="">Contact</a>
        </div>
      </div>
      <div className={styles.top}>
        <div>Alex Bao</div>
      </div>
      <div className={styles.mid}></div>
      <div>
        Front-end <br />
        Developer
      </div>
    </div>
  )
}
