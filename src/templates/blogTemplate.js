import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';

import Seo from '../components/seo/seo';
import BaseLayout from '../components/layouts/baseLayout';

const TemplateEl = 
    styled.div`
        direction: ${props => props?.dir ?? 'unset'};
        margin-bottom: 50px;
        color: var(--font-color);
        line-height: 23px;
        
        .title {
            line-height: 38px;
            Margin: 30px 0 15px;
        }

        .date {
            color: var(--ref-color);
            padding-bottom: 7px;
            margin-bottom: 45px;
            border-bottom: 1px solid var(--font-color);
        }

        a {
            color: var(--list-color);
        }

        p {
            text-align: justify;
        }

        hr {
            width: 250px;
            margin: 0 auto;
        }

        ol {
            padding: 0 25px;
        }
    `;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
        <BaseLayout>
            <TemplateEl dir={frontmatter.dir}>
                <Seo frontmatter={frontmatter}
                    isBlogPost={false} />
                <h1 className="title">{frontmatter.title}</h1>
                <h4 className="date">{frontmatter?.jdate ?? frontmatter?.date}</h4>
                <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
                />
            </TemplateEl>
        </BaseLayout>
  )
}
export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                description
                tags
                dir
                jdate
            }
        }
    }
`