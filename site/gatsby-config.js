const remarkPlugins = [require('remark-emoji')]

module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-digital-garden',
      options: {
        notesPath: '/txt',
        remarkPlugins
      }
    },
    {
      resolve: 'gatsby-theme-digital-garden-blog',
      options: {
        postsPath: '/writing'
      }
    },
    {
      resolve: '@mdx-deck/gatsby-theme',
      options: {
        mdx: false,
        path: 'decks'
      }
    }
  ],
  siteMetadata: {
    title: 'Digital Garden',
    email: 'johnotander@gmail.com',
    social: {
      twitter: '4lpine',
      github: 'johno'
    }
  }
}
