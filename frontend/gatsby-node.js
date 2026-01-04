// Gatsby node configuration
// Force filesystem datastore for Vercel/CI environments
// This ensures LMDB is completely disabled

// Set environment variable if not already set (for CI environments)
if (!process.env.GATSBY_EXPERIMENTAL_FORCE_FS_STORE) {
  process.env.GATSBY_EXPERIMENTAL_FORCE_FS_STORE = 'true'
}

// Provide React globally for react-icons during SSR
exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.provide({
        React: require.resolve('react'),
      }),
    ],
  })
}

