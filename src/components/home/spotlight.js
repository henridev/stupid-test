import React from "react"
import Item from "../spotlight/item"
import styles from "../styles/spotlight.module.scss"
import { graphql, StaticQuery } from "gatsby"

export default function Spotlight({ title }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                id
                excerpt
                headings {
                  value
                }
                frontmatter {
                  date
                  title
                  image
                }
              }
            }
          }
        }
      `}
      render={data => {
        console.log("data", data)
        return (
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Promoties en spotlight</h2>
            <div className={styles.promotions}>
              <div className={styles.slides}>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                  return <Item />
                })}
                <span></span>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}
