module.exports = {
    siteMetadata: {
        title: `Ashkan P. Personal Website`,
        description: `Ashkan P. Personal Website`,
        author: `Ashkan P.`,
        siteUrl: `https://ashkanph.github.io`,
        image: "src/images/icon.jpg",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }
                    allSitePage {
                        nodes {
                            path
                        }
                    }
                }`,
                serialize: ({ site, allSitePage }) =>
                    allSitePage.nodes.map(node => {
                        return {
                            url: `${site.siteMetadata.siteUrl}${node.path}`,
                            changefreq: `monthly`,  // I just wanted to change this from daily to monthly
                            priority: 0.7,
                        }
                    })
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blogPosts`,
                path: `${__dirname}/src/static/markdown-files/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `notes`,
                path: `${__dirname}/src/static/notes.md`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `siri_rebellion`,
                path: `${__dirname}/src/static/siri_rebellion.md`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Ashkan P. Webpage",
                short_name: "Ashkanph web",
                icon: "src/images/icon.jpg",
                cache_busting_mode: 'none',  
                theme_color: "#423c3c",
                background_color: "#f4f4f1",
                display: "standalone",
                orientation: "portrait",
                Scope: "/",
            },
        },
        {
            resolve: 'gatsby-plugin-offline', // Must come after the gatsby-plugin-manifest
        }
    ],
};