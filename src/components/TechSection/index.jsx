import { TechList } from "./TechList"
import styles from "./style.module.css"
import "../../styles/global.css"
export const TechSection = () => {
  return (
    <section className={`${styles.techSection}`}>
      <div className={` ${styles.blockInformation} white`}>
        <h2 className={"title hg"}>Let's set up a conversation and <span className="blue">develop our creativity</span> together?</h2>
        <p className={styles.paragraphTech}>Advertise your brand organically within Dribbble’s design inspiration feed.</p>
      </div>
      <div>
        <TechList />
      </div>
    </section>
  )
}