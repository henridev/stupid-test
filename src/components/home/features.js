import React from "react"
import Feature from "../features/feature"
import styles from "../styles/features.module.scss"

export default function features() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2 className={styles.subtitle}>Onze troeven</h2>
        <p className={styles.paragraph}>
          Enkele van onze troeven vind u hier. Natuurlijk bieden we hiernaast
          nog veel meer.
        </p>
      </div>
      <div className={styles.features}>
        <Feature
          title="Verse Bakkerij"
          imgSrc="/jpg/koeken.jpg"
          paragraph="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
        />
        <Feature
          title="Verse Bakkerij"
          imgSrc="/jpg/koeken.jpg"
          paragraph="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
        />
        <Feature
          title="Verse Bakkerij"
          imgSrc="/jpg/koeken.jpg"
          paragraph="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
        />
        <Feature
          title="Verse Bakkerij"
          imgSrc="/jpg/koeken.jpg"
          paragraph="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
        />
      </div>
    </div>
  )
}
