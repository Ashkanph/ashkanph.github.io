import * as React from "react";
import styled from 'styled-components';

import { latToPerNumbers } from "../helper/numbers";

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
            margin:15px;
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

const BookDescriptions = props => {
    const { books } = props;

    return books.map(
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
                        <img className="book-cover" src={require(`../images/books/${book.imageAddress}`)} alt={book.oname} />
                }
                <p dangerouslySetInnerHTML={{__html: book.description}} />
            </BookDescriptionEl>
    );
}

export default BookDescriptions;