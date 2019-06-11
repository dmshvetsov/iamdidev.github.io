module.exports = {
  siteMetadata: {
    title: 'Dmitry Shvetsov, Fullstack Developer',
    description: 'Full stack web developer. I use with love Ruby, Node.js, JavaScript, SQL, NoSQL databases. Based in Vladivostok, Russia.',
    host: 'https://shvetsovdm.github.io/',
    gravatar: 'https://www.gravatar.com/avatar/b8c8cd15abf09e505baec08c61a054a7'
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            // options: {
            //   Class prefix for <pre> tags containing syntax highlighting;
            //   defaults to 'language-' (eg <pre class="language-js">).
            //   If your site loads Prism into the browser at runtime,
            //   (eg for use with libraries like react-live),
            //   you may use this to prevent Prism from re-processing syntax.
            //   This is an uncommon use-case though;
            //   If you're unsure, it's best to use the default value.
            //   classPrefix: 'language-',
            //   This is used to allow setting a language for inline code
            //   (i.e. single backticks) by creating a separator.
            //   This separator is a string and will do no white-space
            //   stripping.
            //   A suggested value for English speakers is the non-ascii
            //   character '›'.
            //   inlineCodeMarker: null,
            //   This lets you set up language aliases.  For example,
            //   setting this to '{ sh: "bash" }' will let you use
            //   the language "sh" which will highlight using the
            //   bash highlighter.
            //   aliases: {},
            //   This toggles the display of line numbers globally alongside the code.
            //   To use it, add the following line in src/layouts/index.js
            //   right after importing the prism color scheme:
            //    `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
            //   Defaults to false.
            //   If you wish to only show line numbers on certain code blocks,
            //   leave false and use the {numberLines: true} syntax below
            //   showLineNumbers: false,
            //   If setting this to true, the parser won't handle and highlight inline
            //   code used in markdown i.e. single backtick code like `this`.
            //   noInlineHighlight: false,
            //   This adds a new language definition to Prism or extend an already
            //   existing language definition. More details on this option can be
            //   found under the header "Add new language definition or extend an
            //   existing language" below.
            //   languageExtensions: [],
            // },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
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