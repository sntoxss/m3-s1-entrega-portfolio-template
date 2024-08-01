import "../../styles/global.css";
import "../../styles/background.css";
import Github from "../../assets/github-icon-banner.png";
import "../../data/technologies.js"
import styles from "./style.module.css"
import banner from "../../assets/banner.png"
import { BannerList } from "./BannerList/index.jsx";
import { user } from "../../data/user.js"
import { imgPerson } from "../../data/user.js"
import { AboutMeSection } from "../AboutMeSection/index.jsx";

export const BannerSection = () => {
  return (
    <section className={`${styles.bannerSection}`}>
      <div className={`${styles.container} white`}>
        <div className={`${styles.blockName}`}>
          <img src={imgPerson} alt="icone perfil" className={`${styles.imageIcon}`} />
          <p>Hello, my name is {user}</p>
        </div>
        <h1 className={styles.titlePrincipal}>I <span className={`${styles.blue}`}>love</span> creating and <span className={`${styles.blue}`}>developing</span> projects</h1>
        <p className={`${styles.grey}`}>Discover here in this environment, created especially for you, all my projects and technologies</p>
        <div>
          <div className={`${styles.blockButton} `}>
            <a href="#projects"><button className={`${styles.button}`}>See Projects</button></a>
            <img src={Github} alt="Pérfil do github" className={`${styles.img}`} />
          </div>
          <div>
            <BannerList />
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <img src={banner} alt="foto banner" />
      </div>
    </section>
  )
}