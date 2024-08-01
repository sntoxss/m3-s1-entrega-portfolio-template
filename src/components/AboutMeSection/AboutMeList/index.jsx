import { projects } from "../../../data/projects.js"
import { AboutMeCard } from "./AboutMeCard"
import styles from "./style.module.css"

export const AboutMeList = () => {
  return (
    <ul className={styles.aboutMeList}>
      {projects.map(project => (
        <AboutMeCard key={project.id} project={project} />
      ))}
    </ul>
  )
}