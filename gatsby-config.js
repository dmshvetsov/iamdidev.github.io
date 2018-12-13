module.exports = {
  siteMetadata: {
    title: 'Dmitry Shvetsov, Fullstack Developer',
    description: 'Full stack web developer. I use with love Ruby, Node.js, JavaScript, SQL, NoSQL databases. Based in Vladivostok, Russia.',
    host: 'https://shvetsovdm.github.io/',
    gravatar: 'https://www.gravatar.com/avatar/b8c8cd15abf09e505baec08c61a054a7'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f9fbfb',
        theme_color: '#ef233c',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
