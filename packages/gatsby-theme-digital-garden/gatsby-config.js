const path = require('path')

module.exports = options => {
  const { mdx = true, mdxLayouts = {}, remarkPlugins = [] } = options

  return {
    __experimentalThemes: [],
    plugins: [
      mdx && {
        resolve: 'gatsby-mdx',
        options: {
          extensions: [`.md`, `.mdx`],
          defaultLayouts: {
            default: require.resolve('./src/components/layout'),
            ...mdxLayouts
          },
          remarkPlugins
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.notes || `notes`,
          name: `notes`
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.resolve(`pages`)
        }
      },
      'gatsby-plugin-redirects',
      'gatsby-plugin-og-image',
      'gatsby-plugin-emotion',
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: ['theme-ui']
        }
      }
    ].filter(Boolean)
  }
}
