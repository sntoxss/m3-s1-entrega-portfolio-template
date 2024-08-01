import styles from "./style.module.css";
import "../../styles/global.css";
import "../../styles/reset.css";
import "../../styles/background.css";
import "../../styles/typography.css"
import { username } from "../../data/user"
import menu from "../../assets/menu.svg"
export const Header = () => {
  return (
    <header className={`${styles.header} bg-black`} >
      <h2 className="title bg white">{username}</h2 >
      <nav className={`${styles.nav}`}>
        <div className={styles.iconMenu}>
          <img src={menu} alt="" />
        </div>
        <ul className={`${styles.menu} grey`}>
          <li className={`${styles.select}`}>Home</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Social Media</li>
        </ul>
      </nav>
    </header >
  )
}