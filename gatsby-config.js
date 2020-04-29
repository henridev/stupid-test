/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Delhaize dok noord",
    author: "Henri De Bel",
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content-src",
        path: `${__dirname}/content`, // the path to source from
      },
    },
    `gatsby-transformer-remark`,
  ],
}
