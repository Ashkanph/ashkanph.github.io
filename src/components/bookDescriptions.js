import * as React from "react";
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";

import ListOfTitles from "../components/listOfTitles";
import { latToPerNumbers } from "../helper/numbers";
import books from "../helper/books";

const BookDescriptionEl = 
    styled.div`
        hr {
            margin: 50px 80px 40px;
        }

        .book-title {
            text-align: center;
            padding-top: 60px;

            &:first-child {
                margin-top: 50px;
            }

            .title-item {
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 26px;

                &:last-child {
                    margin-bottom: 20px;
                }
            }

            .return-to-top {
                display: inline-block;
            }
        }

        .book-cover{
            float:right; 
            margin: 22px 15px 15px;
            max-height: 230px;
        }

        p{
            padding:15px; 
            text-align:justify;
            line-height:1.6rem;

            a {
                color: var(--list-color);
            }
        }
    `;

export default function BookDescriptions () {
    const data = useStaticQuery(graphql`
        query booksImages {
            allFile(filter: {relativePath: {regex: "^/books/"}}) {
                edges {
                    node {
                        publicURL
                        base
                    }
                }
            }
        }
    `);
    const titles = books.map(
        book => ({
            anchorTitle: book.oname,
            title: book.pname
        })
    );

    const getSource = name => data.allFile.edges.find(
        item => item.node.base === name
    );

    return <>
        <ListOfTitles title="فهرست کتاب‌ها" list={titles} isBooks={true} />
        {
            books.map(
                (book, index) => <BookDescriptionEl key={`book-description-${index}`}>
                        { index !== 0 && <hr /> }
                        <div className="book-title" id={book.oname}>
                            <div className="title-item">
                                { latToPerNumbers(index + 1) }.&nbsp;
                                <strong>
                                    { book.pname }&nbsp;
                                    <bdi>
                                        ({book.oname})
                                    </bdi>
                                </strong>
                            </div>
                            <div className="title-item">
                                نویسنده:&nbsp;
                                <strong>
                                    <bdi>
                                        {book.creator}
                                    </bdi>
                                </strong>
                                &nbsp;&nbsp;
                                <a className="circled-triangle" href="#desc" title="برگشت به بالای صفحه" aria-hidden="true" />
                            </div>
                            <div className="title-item">
                                تاریخ اولین چاپ:&nbsp;
                                <strong>
                                    <bdi>
                                        {latToPerNumbers(book.year)}
                                    </bdi>
                                </strong>
                            </div>
                        </div>
                        {
                            book.imageAddress && 
                                <img className="book-cover" src={getSource(book.imageAddress)?.node?.publicURL} alt={book.oname} loading="lazy" />
                                // The following line, embed images smaller than 10KB into the built html page 
                                // <img className="book-cover" src={require(`../images/books/${book.imageAddress}`)} alt={book.oname} loading="lazy" />
                        }
                        <p dangerouslySetInnerHTML={{__html: book.description}} />
                    </BookDescriptionEl>
            )
        }
    </>;
};