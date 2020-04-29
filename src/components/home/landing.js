import React from "react"
import styles from "../styles/landing.module.scss"
import Button from "../global/button"
import { graphql, useStaticQuery } from "gatsby"

export default function Landing({ title }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.title}>{data.site.siteMetadata.title}</h1>
        <p className={styles.paragraph}>
          Een combinatie van het gemak van een supermarkt met de service van een
          buurtwinkel.
        </p>
        <Button text="meer info" style={styles.button}></Button>
      </div>
      <img
        src={"/assets/images/svg/top.svg"}
        alt="store"
        className={styles.image}
      />
    </div>
  )
}
