
import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

import ListOfTitles from "../components/listOfTitles";
import Seo from '../components/seo/seo';
import BaseLayout from '../components/layouts/baseLayout';

const NotesEl = 
    styled.div`
        direction: rtl;
        counter-reset: hrcounter 1;
        line-height: 1.7rem;
        color: var(--font-color);

        #notes-desc {
            padding-top: 30px;
        }

        h3 {
            display: block;
            padding-top: 3.8rem;
            padding-bottom: 12px;
            text-align: center;
        }

        .ref {
            text-align: center !important;
            letter-spacing: 2px;
            color: var(--ref-color);
            clear: both;
            font-size: 14px;
            line-height: 21px;
        }

        .english, .french, .other{
            direction: ltr;
        }

        .french.tr{
            color: var(--french-tr);
            float:  left;
        }

        .other.tr{
            color: var(--other-tr);
            float:  left;
        }

        .english.tr{
            color: var(--english-tr);
            float:  left;
        }

        .persian.tr{
            color: var(--persian-tr);
        }

        .two-column{ 
            margin: 0  auto;
        }

        p {
            padding: .5rem;
        }

        code {
            font-family: "sahel";
            white-space: pre;
            word-wrap: normal;
            padding: 1px 6px 1px 4px;
            color: var(--ref-color,#696969);
            background-color: rgba(27,31,35,.12);
            border-radius: 3px;
            font-size: 1rem;
            font-style: italic;
        }

        a {
            color: var(--list-color,#1c11ee);
        }

        hr {
            text-align: center;
            margin: 1.5rem 0 0;

            &:first-child {
                display: none;
            }

            &:before {
                content: counter(hrcounter);
                counter-increment: hrcounter;
                background-color: var(--background-color,#f4f4f1);
                position: absolute;
                margin-top: -11px;
                padding: 0 5px;
                font-size: 14px;
            }
        }
    `;

export default function Notes({
  data,
}) {
    let html = data?.allFile?.edges[0]?.node?.childMarkdownRemark?.html ?? "";
    var match, regex = /<h3>(.*?)<\/h3>/ig;
    let titles = [], index = 1;
    const pageMeta = {
        title: "My notes",
        description: "My notes from books - یادداشت‌های من از کتاب‌های مختلف",
        tags: "یادداشت,کتاب,شعر",
        slug: "notes",
        lang: "fa",
    };

    while (match = regex.exec(html)) {
        titles.push({
            title: match[1],
            anchorTitle: `note-${index}`,
        });

        html = html.replace(match[0], `<h3 id="note-${index++}">${match[1]}<a class="circled-triangle" href="#notes-desc" title="برگشت به بالای صفحه"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.365 382.365" enableBackground="new 0 0 382.365 382.365" height="13px" width="13px"><g><path d="m378.248,312.399l-162.38-271.915c-5.239-8.774-14.468-14.011-24.686-14.011s-19.446,5.237-24.685,14.011l-162.379,271.915c-5.375,8.999-5.494,19.815-0.32,28.932s14.522,14.561 25.005,14.561h324.76c10.482,0 19.831-5.443 25.005-14.561 5.174-9.116 5.054-19.932-0.32-28.932z"/></g></svg></a></h3>`);
    }

    return (
        <BaseLayout>
            <NotesEl>
                <Seo pageMeta={pageMeta}
                    isBlogPost={false} />
                <div id="notes-desc">کتاب‌هایی خوانده‌ام و یادداشت‌هایی از آنها نگاه داشته‌ام. جملات زیر، برخی از آن یادداشت‌هاست. مطالب جدیدتر را هربار به بالای صفحه اضافه می‌کنم.</div>
                <ListOfTitles title="فهرست یادداشت‌ها" list={titles} />
                <div className="blog-post-container">
                    <div className="blog-post">
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}/>
                    </div>
                </div>
            </NotesEl>
        </BaseLayout>
    )
}

export const query = graphql`
    query NotesQuery {
        allFile(
            filter: {
                internal: {
                    mediaType: {
                        eq: "text/markdown"
                    }
                }, 
                name: {
                    eq: "notes"
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
`;