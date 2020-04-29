import React from "react"

import Layout from "../components/global/layout"
import Landing from "../components/home/landing"
import Features from "../components/home/features"
import Team from "../components/home/team"
import Spotlight from "../components/home/spotlight"

import styles from "./styles/index.module.scss"

export default function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.home}>
          <Landing title="Welcome" />
          <Team />
          <Features />
          <Spotlight />
        </main>
      </div>
    </Layout>
  )
}
