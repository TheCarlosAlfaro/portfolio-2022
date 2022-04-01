require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.carlosalfaro.dev`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'cikm7kfs',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-image`,
  ],
};
