import React from "react"
import { Link } from "gatsby"
import Button from "../global/button"
import styles from "../styles/vacancy.module.scss"
import { FaInfoCircle } from "react-icons/fa"

export default function Vacancy({ title, content, to }) {
  return (
    <div className={styles.wrapper}>
      <article className={styles.article}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>{content}</div>
      </article>
      <Link className={styles.buttonwrapper} to={to}>
        <Button style={styles.button}>
          <FaInfoCircle></FaInfoCircle>
        </Button>
      </Link>
    </div>
  )
}
