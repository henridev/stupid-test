import React from "react"
import { graphql } from "gatsby"
import styles from "./vacancy.module.scss"

export default function Vacancy({ data }) {
  const post = data.markdownRemark
  return (
    <div className={styles.container}>
      <img src={``} alt="img"></img>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
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
