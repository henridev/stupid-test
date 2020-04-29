import React from "react"
import { graphql } from "gatsby"
import Vacancy from "../components/vacancies/vacany"
import Navbar from "../components/global/navbar"

export default function Vacancies({ data }) {
  console.log("data", data)
  return (
    <div>
      <Navbar />
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <Vacancy
            to={node.fields.slug}
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            content={node.excerpt}
          />
        )
      })}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/vacancies/*.md" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
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
`
