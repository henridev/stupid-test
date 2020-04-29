import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/global/layout"
import Landing from "../components/home/landing"
import Features from "../components/home/features"
import Team from "../components/home/team"
import Spotlight from "../components/home/spotlight"

import styles from "./styles/index.module.scss"

export default function HomePage({ data }) {
  console.log("data", data)
  const {
    markdownRemark: {
      frontmatter: {
        subtitle_two,
        subtitle_three,
        subtitle_one,
        title_three,
        title_two,
        title_one,
        titleOneSpot,
        titleTwoSpot,
        titleThreeSpot,
      },
    },
  } = data
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.home}>
          <Landing title={title_one} subtitle={subtitle_one} />
          <Team title={title_two} subtitle={subtitle_two} />
          <Features title={title_three} subtitle={subtitle_three} />
          <Spotlight
            titleOneSpot={titleOneSpot}
            titleTwoSpot={titleTwoSpot}
            titleThreeSpot={titleThreeSpot}
          />
        </main>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { glob: "**/home.md" }) {
      frontmatter {
        subtitle_two
        subtitle_three
        subtitle_one
        title_three
        title_two
        title_one
        titleOneSpot
        titleTwoSpot
        titleThreeSpot
      }
    }
  }
`
