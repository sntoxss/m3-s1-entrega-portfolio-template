import { technologies } from "../../../data/technologies.js";
import { BannerCard } from "./BannerCard/index.jsx";
import styles from "./style.module.css"

export const BannerList = () => {
  return (

    <ul className={styles.technologieList}>
      {technologies.map(technologie => {
        return <BannerCard key={technologie.id} technologie={technologie} />
      })}
    </ul>

  )
}