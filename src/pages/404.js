import React from "react"

import styles from "./styles/404.module.scss"

import { Link } from "gatsby"

export default function () {
  return (
    <div className={styles.errorr}>
      <section id="not-found">
        <div className={styles.content}>
          <p>
            404
            <br />
            <small>PAGE NOT FOUND</small>
            <Link to="/">terug naar home</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
