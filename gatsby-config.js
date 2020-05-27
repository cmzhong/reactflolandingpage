/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "reactFLO",
    description:
      "A react state visualization tool.",
    url: "https://www.reactflo.com", // No trailing slash allowed!
    image: "/images/logo.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@reactflo",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./images/logo.png`,
      },
    },
  ],
}
