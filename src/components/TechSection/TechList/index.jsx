import styles from "./style.module.css";
import WhatsApp from "../../../assets/whatsapp.svg";
import Email from "../../../assets/email.svg"
import Linkedin from "../../../assets/linkedin.svg"

export const TechList = () => {
  return (
    <ul className={`${styles.techList} white`}>
      <li>
        <div className={`${styles.itemSocialMedia} ${styles.green} ${styles.blockMedia}`} >
          <img src={WhatsApp} alt="" />
        </div>
        <div className={styles.blockAll}>
          <h3>My phone</h3>
          <p className="grey-2">I'm available for a voice chat, let's about creativity together?</p>
          <span>Call Now</span>
        </div>
      </li>
      <li >
        <div className={`${styles.itemSocialMedia} ${styles.pink} ${styles.blockMedia}`} >
          <img src={Email} alt="" />
        </div>
        <div className={styles.blockAll}>
          <h3>My email</h3>
          <p className="grey-2">Send me an email reporting feedbacks, suggestions and ideas</p>
          <span>Send email now</span>
        </div>
      </li>
      <li>
        <div className={`${styles.itemSocialMedia} ${styles.blue} ${styles.blockMedia}`}>
          <img src={Linkedin} alt="" />
        </div>
        <div className={styles.blockAll}>
          <h3>My LinkedIn</h3>
          <p className="grey-2">We can create more constant interactions as well as a sharing network</p>
          <span>Go to Telegram Now</span>
        </div>
      </li>
    </ul>
  )
}