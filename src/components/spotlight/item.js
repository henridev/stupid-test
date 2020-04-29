import React from "react"
import styles from "../styles/item.module.scss"
import { Link } from "gatsby"

export default function Item({ title, to }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div
        style={{
          backgroundImage: `Url(/assets/images/jpg/soep.jpg)`,
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
      <p>
        <Link to={to}>meer info</Link>
      </p>
    </div>
  )
}
