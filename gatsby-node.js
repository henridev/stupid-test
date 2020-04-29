const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = handleNodeCreation

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  response.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPages(node, createPage)
  })
}

function createPages(node, createPage, resolve) {
  if (node.fileAbsolutePath.includes("vacancies")) {
    const vacancyTemplate = path.resolve("./src/templates/vacancy.js")
    createPage({
      path: node.fields.slug,
      component: vacancyTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  }
  if (node.fileAbsolutePath.includes("promotions")) {
    const promoTemplate = path.resolve("./src/templates/promo.js")
    createPage({
      path: node.fields.slug,
      component: promoTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  }
}

function handleNodeCreation({ node, getNode, actions }) {
  switch (node.internal.type) {
    case "MarkdownRemark":
      console.log("new markdownremark", node)
      const { createNodeField } = actions
      const slug = createFilePath({ node, getNode, basePath: "markdown" })
      createNodeField({
        node,
        name: "slug",
        value: slug,
      })
      break
    case "SitePage":
      console.log("new site page", node)
      break
    default:
      break
  }
}
