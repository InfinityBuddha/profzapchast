module.exports = {
    siteMetadata: {
        title: 'Gatsby + Netlify CMS Starter',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images',
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `rcbeq2umetwd`,
                accessToken: `82c0f8d58cd2dcd8eb4399466e81a59950e0dfcb62f509be15626a4e33da1951`,
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [],
            },
        }
    ],
};
