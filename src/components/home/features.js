import React from "react"
import Feature from "../features/feature"
import styles from "../styles/features.module.scss"

export default function features({ title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2 className={styles.subtitle}>{title}</h2>
        <p className={styles.paragraph}>{subtitle}</p>
      </div>
      <div className={styles.features}>
        <Feature
          title="Verse Bakkerij"
          imgSrc="/assets/images/uploads/feature1.jpg"
          paragraph="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
        />
        <Feature
          title="Verse Bakkerij"
          imgSrc="/assets/images/uploads/feature2.jpg"
          paragraph="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
        />
        <Feature
          title="Verse Bakkerij"
          imgSrc="/assets/images/uploads/feature3.jpg"
          paragraph="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
        />
        <Feature
          title="Verse Bakkerij"
          imgSrc="/assets/images/uploads/feature4.jpg"
          paragraph="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
        />
      </div>
    </div>
  )
}
