import React from "react"
import styles from "../styles/item.module.scss"

export default function Item({ title, imgSrc }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div
        style={{
          backgroundImage: `Url(${imgSrc}`,
          width: "90%",
          height: "80%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "20px",
          position: "relative",
          right: "0px",
          margin: "0 auto",
        }}
      ></div>
    </div>
  )
}
