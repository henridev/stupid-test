const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log(`I'm processing a node with type: ${node.internal.type}`)
  switch (node.internal.type) {
    case "MarkdownRemark":
      const slug = createFilePath({ node, getNode, basePath: "markdown" })
      console.log("slug", slug)
      break

    default:
      break
  }
}
