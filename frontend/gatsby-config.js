/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 * CONFIGURATION FOR VERCEL DEPLOYMENT
 * - No LMDB flags (not supported in Gatsby 5.12.x)
 * - Filesystem datastore enforced via GATSBY_EXPERIMENTAL_FORCE_FS_STORE env var
 * - Safe for CI/serverless environments
 * - No flags object - completely safe from LMDB activation
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
}