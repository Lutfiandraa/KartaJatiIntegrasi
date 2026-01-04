// Gatsby node configuration
// Force filesystem datastore for Vercel/CI environments
// This ensures LMDB is completely disabled

// Set environment variable if not already set (for CI environments)
if (!process.env.GATSBY_EXPERIMENTAL_FORCE_FS_STORE) {
  process.env.GATSBY_EXPERIMENTAL_FORCE_FS_STORE = 'true'
}

