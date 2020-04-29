import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/global/layout"
import styles from "./vacancy.module.scss"

export default function Vacancy({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={styles.container}>
        {/* <img src={``} alt="img"></img> */}
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`
