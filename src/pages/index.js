import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/global/layout"

import styles from "./styles/index.module.scss"

export default function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.home}>hello from main</main>
      </div>
    </Layout>
  )
}
