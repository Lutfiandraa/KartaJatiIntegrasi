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
    USE_LMDB: false,
  },
}