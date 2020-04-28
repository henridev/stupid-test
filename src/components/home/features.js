import React from "react"
import Feature from "../features/feature"
import styles from "../styles/features.module.scss"

export default function features() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subtitle}>Onze troeven</h2>
      <p className={styles.paragraph}>
        Enkele van onze troeven vind u hier. Natuurlijk bieden we hiernaast nog
        veel meer.
      </p>
      <Feature />
      <Feature />
      <Feature />
      <Feature />
    </div>
  )
}
