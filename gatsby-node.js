const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  switch (node.internal.type) {
    case "MarkdownRemark":
      const { createNodeField } = actions
      const slug = createFilePath({ node, getNode, basePath: "markdown" })
      console.log("slug", slug)
      createNodeField({
        node,
        name: "slug",
        value: slug,
      })
      break

    default:
      break
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/vacancy.js"),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
