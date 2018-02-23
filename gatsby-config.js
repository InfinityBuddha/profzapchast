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
                spaceId: `wqo8bre17nk0`,
                accessToken: `351fbabffb9e5331a6c19c7918bf920ff4b82fd96483665feb013d071b6a4400`,
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
