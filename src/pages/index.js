import React from "react"
import { graphql } from "gatsby"
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
          <Landing
            title={"Delhaize DokNoord"}
            subtitle={
              "Een combinatie van het gemak van een supermarkt met de service van een buurtwinkel."
            }
          />
          <Team
            title={"Ons team staat voor u klaar"}
            subtitle={
              "Ons top team staat steed paraat met raad en daad. Heeft u een vraag, vind u een product niet of wilt u gewoon een gezelge babbel slaan bij ons kan het zeker."
            }
          />
          <Features />
          <Spotlight />
        </main>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { glob: "**/home.md" }) {
      excerpt
    }
  }
`
