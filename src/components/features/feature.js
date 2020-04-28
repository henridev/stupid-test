import React from "react"
import styles from "../styles/feature.module.scss"

export default function Feature({ title, imgSrc, paragraph }) {
  return (
    <div className={styles.item}>
      <div
        style={{
          backgroundImage: `Url(${imgSrc})`,
          width: "600px",
          height: "300px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "20px",
          position: "relative",
          right: "70px",
        }}
      />
      <div>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}
