import React from "react"
import { Link } from "gatsby"
import Button from "../global/button"
import styles from "../styles/vacancy.module.scss"

export default function Vacancy({ title, content, to }) {
  return (
    <div>
      <article className={styles.article}>
        <h2>{title}</h2>
        <div>{content}</div>
      </article>

      <Link to={to}>
        <Button style={styles.button} text={"meer info"}></Button>
      </Link>
    </div>
  )
}
