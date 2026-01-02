/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Karta Jati Integrasi`,
    description: `Solusi Integrasi Teknologi dan Digitalisasi Kebutuhan anda`,
    siteUrl: `https://kartajati.co.id`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
  ],
  flags: {
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
    DETECT_NODE_MUTATIONS: false,
  },
}
