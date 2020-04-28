import React from "react"
import { graphql } from "gatsby"
import Vacancy from "../components/vacancies/vacany"

export default function Vacancies({ data }) {
  console.log("data", data)
  return (
    <div>
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
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
