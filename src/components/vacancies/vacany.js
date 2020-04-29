import React from "react"
import { Link } from "gatsby"
import Button from "../global/button"
import styles from "../styles/vacancy.module.scss"

export default function Vacancy({ title, content, to }) {
  return (
    <article>
      <h2>{title}</h2>
      <div>{content}</div>
      <Link to={to}>
        <Button style={styles.button} text={"meer info"}></Button>
      </Link>
    </article>
  )
}
