
import React from "react";
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";

import Seo from '../components/seo/seo';
import BaseLayout from '../components/layouts/baseLayout';

const SiriEl = 
    styled.div`
        direction: rtl;

        img {
            width: 121px;
            display: block;
            margin: 1rem auto;
        }

        p {
            line-height: 28px;
            text-align: justify;
            color: var(--font-color);
        }
    `;


export default function SiriRebellion() {
    const data = useStaticQuery(graphql`
        query SiriQuery {
            allFile(
                filter: {
                    internal: {
                        mediaType: {
                            eq: "text/markdown"
                        }
                    }, 
                    name: {
                        eq: "siri_rebellion"
                    }
                }
            ) {
                edges {
                    node {
                        id
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    `);
    let html = data?.allFile?.edges[0]?.node?.childMarkdownRemark?.html ?? "";

    const pageMeta = {
        title: "شورش سیری",
        description: "خلاصه ششمین فصل از کتاب علمی تخیلی هایپریون نوشته دن سیمونز - داستان کنسول",
        tags: "کتاب,علمی تخیلی,دن سیمونز,هایپریون",
        slug: "siri_rebellion",
        lang: "fa",
    };

    return (
        <BaseLayout>
            <SiriEl>
                <Seo pageMeta={pageMeta}
                    postImage={require(`../images/books/hyperion.jpg`)}
                    isBlogPost={false} />
                <div dangerouslySetInnerHTML={{ __html: html }}/>
            </SiriEl>
        </BaseLayout>
    )
}