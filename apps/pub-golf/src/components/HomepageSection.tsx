import styles from './HomepageSection.module.scss'

export const HomepageSection = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <div className={`${styles.title}`}>
        <h1 className='logo'>Pub Golf</h1>
        <h2 className='logo'>Reunion Edition</h2>
      </div>
      <div className={styles.description}>
        <h3>WELCOME BACK</h3>
        <p>
          Woohoo another year of binge drinking!!! As we embark on another round
          of pub golf, let's take a look back at some of the highlights and
          lowlights from previous years.
        </p>
        <h4 className='logo'>SCROLL</h4>
      </div>
    </div>
  </section>
)
