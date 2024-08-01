import styles from "./style.module.css"
import { imgPerson } from "../../data/user"
import Facebook from "../../assets/facebook.svg"
import Instagram from "../../assets/instagram.svg"
import Linkedin from "../../assets/linkedin-iconzinho.svg"

export const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-black grey-2`} >
      <div className={`${styles.blockPerson}`}>
        <a href="">
          <img src={imgPerson} alt="picture person" />
        </a>
        <div className={styles.blockText}>
          <h3 className="title white">Thank you!</h3>
          <p>Follow me on my social networks and let's talk</p>
        </div>

      </div>
      <div className={styles.blockSocialMedia}>
        <span className={`${styles.facebook} `}><img src={Facebook} alt="facebook icon" /></span>
        <span className={`${styles.instagram} `}><img src={Instagram} alt="instagram icon" /></span>
        <span className={`${styles.linkedin} `}><img src={Linkedin} alt="linkedin icon" /></span>
      </div>
    </footer>
  )
}