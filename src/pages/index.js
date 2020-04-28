import React from "react"

import Navbar from "../components/global/navbar"
import Footer from "../components/global/footer"
import Landing from "../components/home/landing"
import Features from "../components/home/features"
import Team from "../components/home/team"
import Spotlight from "../components/home/spotlight"

import styles from "./styles/index.module.scss"

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.home}>
        <Landing title="Welcome" />
        <Team />
        <Features />
        <Spotlight />
      </main>
      <Footer />
    </div>
  )
}
