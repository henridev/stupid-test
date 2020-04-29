import React from "react"
import Item from "../spotlight/item"
import styles from "../styles/spotlight.module.scss"
import { graphql, StaticQuery } from "gatsby"

export default function Spotlight({ title }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/promotions/*.md" } }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                excerpt
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
        return (
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Promoties en spotlight</h2>
            <div className={styles.promotions}>
              <div className={styles.slides}>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                  console.log("node", node)
                  return (
                    <Item
                      to={node.fields.slug}
                      title={node.frontmatter.title}
                      imgSrc={node.frontmatter.image}
                      data={node.frontmatter.date}
                    />
                  )
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
