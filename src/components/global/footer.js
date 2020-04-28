import React from "react"
import styles from "../styles/footer.module.scss"
import Button from "./button"
import SocialButton from "./socialbutton"

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.row1}>
        <h2 className={styles.title}>Spring gerust eens binnen!</h2>
        <div className={styles.actions}>
          <Button style={styles.contactbutton} text="contacteer" />
          <Button style={styles.orderbutton} text="plaats bestelling" />
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.companyinfo}>
          <div className={styles.company}>
            <div style={{ display: "flex" }}>
              <img
                src="/assets/images/svg/logo.svg"
                alt="logo"
                className={styles.logo}
              />
              <span className={styles.name}>Delhaize Dok Noord</span>
            </div>
            <div className={styles.address}>
              BVBA Bello Dok <br />
              Dok-Noord 7 <br />
              9000 Gent
            </div>
          </div>
          <div className={styles.socials}>
            <div className={styles.contacts}>
              tel: 09 224 11 19 <br />
              mail: bello.dok@gmail.com
              <br />
            </div>
            <SocialButton socialnetwork="facebook" />
          </div>
        </div>
      </div>
    </footer>
  )
}
