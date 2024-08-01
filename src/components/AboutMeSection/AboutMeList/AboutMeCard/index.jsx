import styles from "./style.module.css";
import gitHUb from "../../../../assets/github.png";
import share from "../../../../assets/share.png";
import "../../../../styles/typography.css"
export const AboutMeCard = ({ project }) => {
  return (
    <li className={styles.aboutMeCard}>
      <h2 className={`${styles.title}`}>{project.name}</h2>
      <div className={`${styles.blockLanguage}`}>
        <p className="grey">Language: </p>
        <span className="bg-grey-1 grey">JavaScript</span>
      </div>
      <p className={`${styles.projectPrincipal} grey-2`}>{project.description}</p >
      <div className={`${styles.blockButton}`}>
        <div><img src={gitHUb} alt="github icon" /><button className={"grey"}>Github Code</button></div>
        <div><img src={share} alt="share" /><button className={"grey"}>Aplication</button></div>
      </div>
    </li>
  )
}