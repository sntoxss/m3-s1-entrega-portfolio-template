import styles from "./style.module.css"

export const BannerCard = ({ technologie }) => {
  return (
    <li className={styles.technologieCard}>
      <img src={technologie.img} alt={technologie.name} />
    </li>
  )
}