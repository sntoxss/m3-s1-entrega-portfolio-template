import styles from "./style.module.css"
import "../../styles/reset.css"
import "../../styles/global.css"
import { AboutMeList } from "./AboutMeList"

export const AboutMeSection = () => {
  return (
    <section className={`${styles.container} white bg-black`}>
      <div className={`${styles.AboutMeSection} white bg-black`} id="projects">
        <h2>My projects</h2>
        <p>Projects created a <span className={styles.red}>Kenzie academy</span></p>
      </div>
      <div>
        <AboutMeList />
      </div>
    </section>
  )
}