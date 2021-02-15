import React from "react";
import { graphql, Link } from "gatsby";
import styled from 'styled-components';

import Seo from '../components/seo/seo';
import BaseLayout from '../components/layouts/baseLayout';

const BlogEl = 
    styled.div`
        line-height: 1.7rem;
        color: var(--font-color);

        .list {
            display: flex;
            flex-direction: column;

            a {
                width: fit-content;
                color: var(--list-color);

                .title {
                    display: inline-block;
                }
    
                .date {
                    display: inline-block;
                    color: var(--ref-color);
                }
            }
        }
    `;

const allCategoriesTags = blogPosts => {
    let categories = new Set();
    let tags = new Set();

    for (const item of blogPosts) {
        if(item.categories && Array.isArray(item.categories)) {
            for (const cat of item.categories) {
                categories.add(cat);
            }
        }
        if(item.tags && Array.isArray(item.tags)) {
            for (const tag of item.tags) {
                tags.add(tag);
            }
        }
    }

    return {
        categories,
        tags,
    };
};

export default function Blog({
  data,
}) {
    let blogPosts = data?.allMarkdownRemark?.edges ?? [];
    blogPosts = blogPosts.map(
        item => item?.node?.frontmatter ?? item
    );
    const pageMeta = {
        title: "My blog posts",
        description: "The list of my blog posts",
        slug: "blog",
    };
    // const { categories, tags } = allCategoriesTags(blogPosts);

    return (
        <BaseLayout>
            <BlogEl>
                <Seo pageMeta={pageMeta}
                    isBlogPost={false} />
                <div className="list">
                    {
                        blogPosts.map (
                            (post, index) => 
                                <Link to={post.slug} key={`blog-${index}`}>
                                    <span className="title">
                                        { post.title }
                                    </span>{" - "}
                                    <span className="date">
                                        { post.date }
                                    </span>
                                </Link>
                        )
                    }
                </div>
            </BlogEl>
        </BaseLayout>
    )
}
  
export const query = graphql`
    query blogPage {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            filter: {frontmatter: {slug: {ne: null}}}
        ) {
            edges {
                node {
                    frontmatter {
                        slug
                        categories
                        tags
                        title
                        date
                        jdate
                    }
                }
            }
        }
    }
`;