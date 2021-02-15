import * as React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

import Seo from '../components/seo/seo';
import BaseLayout from '../components/layouts/baseLayout';

const IndexEl =
    styled.main`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: inherit;
        width: 100%;
        background-color: var(--background-color);
        color: var(--font-color);

        .main-image {
            margin-bottom: 4rem;
            min-height: 100px;

            img {
                border-radius: 100%;

                @media screen and (max-height: 880px){
                    height: 40vh;
                }
                @media screen and (max-height: 550px){
                    height: 45vh;
                }
                @media screen and (min-height: 881px){
                    height: 35vh;
                }
            }
        }

        .name {
            @media screen and (max-height: 880px){
                font-size: 25px;
                margin-bottom: 1rem;
            }
            @media screen and (min-height: 881px){
                font-size: 35px;
                margin-bottom: 2rem;
            }
        }

        .job-title {
            @media screen and (max-height: 880px){
                font-size: 18px;
                margin-bottom: 2rem;
            }
            @media screen and (min-height: 881px){
                font-size: 22px;
                margin-bottom: 3rem;
            }
        }

        .social-icons {
            display: flex;

            a {
                font-size: 35px;
                color: var(--font-color);
                border: 1px solid var(--font-color);
                opacity: 0.65;
                padding: 5px 8px;

                &:hover {
                    opacity: 1;
                }

                @media screen and (max-width: 769px){
                    border-radius: 5px;
                    font-size: 20px;
                    margin: 0 8px;
                    padding: 3px 6px;
                }

                @media screen and (min-height: 770px){
                    border-radius: 10px;
                    font-size: 35px;
                    margin: 0 8px;
                }
            }
        }
        
        .pages {
            display: flex;
            font-size: 20px;

            @media screen and (max-width: 769px){
                flex-direction: column;
                padding-top: 25px;
            }

            a {
                color: var(--font-color);
                margin: 35px 8px;
                font-size: 18px;
                text-decoration: underline;
                
                @media screen and (max-width: 769px){
                    font-size: 17px;
                    margin: 7px 0;
                    text-align: center;
                }

                @media screen and (min-height: 770px){
                }
            }
        }
    `;

const IndexPage = () => {
    const pageMeta = {
        title: "Ashkan P. Personal Webpage",
        description: "Ashkan P. personal webpage",
    };

    return (
        <BaseLayout indexPage={true}>
            <IndexEl>
                <Seo pageMeta={pageMeta}
                    isBlogPost={false} />
                <picture className="main-image">
                    <source alt="my portrait" srcSet="https://user-images.githubusercontent.com/22937754/31787999-381baef4-b51a-11e7-9ddc-e11976dbae7c.jpg" media="screen and (max-width: 450px)" />
                    <source alt="my portrait" srcSet="https://user-images.githubusercontent.com/22937754/31788032-59a4b610-b51a-11e7-9c28-a2a96f007df7.jpg" media="screen and (max-width: 1281px)" />
                    <source alt="my portrait" srcSet="https://user-images.githubusercontent.com/22937754/31788055-6baa5f54-b51a-11e7-9bf3-4a9652d05055.jpg" media="screen and (min-width: 1282px)" />
                    <img src="https://user-images.githubusercontent.com/22937754/31788032-59a4b610-b51a-11e7-9c28-a2a96f007df7.jpg" alt="my portrait"/>
                </picture>
                <div className="name text-bold">Ashkan Ph.</div>
                <div className="job-title">Web developer</div>
                <div className="social-icons">
                    <a target="_blank" rel="noreferrer" href="https://www.github.com/Ashkanph" title="My Github profile">
                        <i className="icon-gh" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://ir.linkedin.com/in/ashkan-paleganeh" title="My Linkedin profile">
                        <i className="icon-in" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/7338291/ashkan" title="My Stackoverflow profile">
                        <i className="icon-so" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="mailto:ashkanpaleganeh@gmail.com?Subject=HiFromYourWebsite" title="My Email">
                        <i className="icon-email" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/User:Ashkan_P." title="My Wikipedia profile">
                        <i className="icon-wp" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.goodreads.com/Ashkanph" title="My Goodreads profile">
                        <i className="icon-gr" />
                    </a>
                </div>
                <div className="pages">
                    <Link to="/skills">Skills</Link>
                    <Link to="/notes">Notes</Link>
                    <Link to="/book-recommendation">Book Recommendations</Link>
                </div>
            </IndexEl>
        </BaseLayout> 
    )
}

export default IndexPage;