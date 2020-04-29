import React from "react"
import styles from "../styles/landing.module.scss"
import Button from "../global/button"

export default function Landing({ title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.paragraph}> {subtitle}</p>
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
