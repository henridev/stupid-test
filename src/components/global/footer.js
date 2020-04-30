import React from "react"
import styles from "../styles/footer.module.scss"
import Button from "./button"
import SocialButton from "./socialbutton"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={styles.wrapper}>
      <div className={styles.row1}>
        <h2 className={styles.title}>Spring gerust eens binnen!</h2>
        <div className={styles.actions}>
          <Link to="/contact">
            <Button style={styles.contactbutton} text="contacteer" />
          </Link>
          {/* <Link to="/order">
            <Button style={styles.orderbutton} text="plaats bestelling" />
          </Link> */}
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
          <img
            width="300"
            src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-marker+ff0000(3.733121,51.066234)/3.733121,51.066234,15,0/500x500@2x?access_token=pk.eyJ1IjoiYmVsa2UwNSIsImEiOiJjazBzNDFnY2owYzQ0M21xbGxwZnNqZW91In0.uiusgRl10zeCVqvUH6PtMg"
            alt="Mapbox Map of 3.733121,51.066234"
          />
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
      <div className={styles.copyright}>
        © Created by {data.site.siteMetadata.author}, 2020
      </div>
    </footer>
  )
}
