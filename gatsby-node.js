
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
    if (getConfig().mode === 'production') {
        actions.setWebpackConfig({
            devtool: false  // To prevent creating source map for codes in production
        });
    }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if(node?.frontmatter?.slug) {   // Don't create the page when there is no slug in the md file
            createPage({
                path: node.frontmatter.slug,
                component: blogPostTemplate,
                context: {
                    // additional data can be passed via context
                    slug: node.frontmatter.slug,
                },
            })
        }
    });
};