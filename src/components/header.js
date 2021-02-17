import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components";
import { Link } from "gatsby";

import { StateContext, ActionContext } from "../store/"
import { getTitle } from "../helper/getTitle";

const HeaderEl =
    styled.header`
        position: fixed;
        display: flex;
        align-items: center;
        background-color: var(--header-bg);
        height: var(--header-height);
        width: inherit;
        max-width: 1024px;
        z-index: 3;

        @media print {
            display: none;
        }

        * {
            color: #dbd7d7;
        }

        .right-side {
            display: flex;
            flex: 1 1 0%;
            justify-content: flex-end;
            align-items: center;
            
            .home {
                text-decoration: none;
                font-size: 33px;
                margin-right: 1rem;
            }

            .moon, .sun {
                width: 25px;
                height: 25px;
                margin: 0 1rem;
                fill:  #dbd7d7;
            }
        }

        .menu-icon {
            font-size: 30px;
            margin: 0 .7rem 0 1rem;

            .icon-bars:focus {
                outline: none;
            }
        }

        .page-title {
            font-size: 23px;
            line-height: 25px;
        }
    `;

const Header = props => {
    const { onMenuClick } = props;
    const state = useContext(StateContext);
    const dispatch = useContext(ActionContext);
    const [title, setTitle] = useState("");  
    useEffect(() => {
        setTitle(getTitle(window?.location?.pathname));
    }, [])
    const onChangeTheme = selectedTheme => dispatch({ type: "changeTheme", data: selectedTheme });

    return (
        <HeaderEl>
            <div className="cursor-pointer menu-icon no-focus-active-outline" id="menu-icon" onClick={onMenuClick} onKeyDown={onMenuClick} role="button" tabIndex={0}>
                <i className="icon-bars" id="icon-bars" />
            </div>
            <span className="page-title text-truncate">{ title }</span>
            <div className="right-side">
                {
                    state?.theme === "light" &&
                        <svg version="1.1" className="moon cursor-pointer" onClick={() => onChangeTheme("dark")} title="Dark Mode" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 312.812 312.812" style={{enableBackground:"new 0 0 312.812 312.812"}}>
                            <g className="moonchild">
                                <g><path d="M305.2,178.159c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.4,60-32.4,96c0,43.6,17.6,83.2,46.4,112s68,46.4,112,46.4c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314,184.959,310.8,179.359,305.2,178.159z"/></g>
                            </g>
                        </svg>
                }
                {
                    state?.theme === "dark" &&
                        <svg version="1.1" className="sun cursor-pointer" onClick={() => onChangeTheme("light")} title="Light Mode" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
                            <g><path d="M50.087,239.304H16.696C7.475,239.304,0,246.78,0,256s7.475,16.696,16.696,16.696h33.391c9.22,0,16.696-7.475,16.696-16.696S59.307,239.304,50.087,239.304z"/></g><g><path d="M495.304,239.304h-33.391c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h33.391c9.22,0,16.696-7.475,16.696-16.696S504.525,239.304,495.304,239.304z"/></g><g><path d="M256,445.217c-9.22,0-16.696,7.475-16.696,16.696v33.391c0,9.22,7.475,16.696,16.696,16.696s16.696-7.475,16.696-16.696v-33.391C272.696,452.693,265.22,445.217,256,445.217z"/></g><g><path d="M256,0c-9.22,0-16.696,7.475-16.696,16.696v33.391c0,9.22,7.475,16.696,16.696,16.696s16.696-7.475,16.696-16.696V16.696C272.696,7.475,265.22,0,256,0z"/></g><g><path d="M390.111,454.895l-16.696-28.917c-4.61-7.985-14.821-10.722-22.806-6.111c-7.985,4.61-10.721,14.821-6.111,22.806l16.696,28.917c4.612,7.989,14.826,10.719,22.806,6.111C391.985,473.091,394.721,462.88,390.111,454.895z"/></g><g><path d="M167.502,69.326l-16.696-28.917c-4.61-7.985-14.821-10.722-22.806-6.111c-7.985,4.61-10.721,14.821-6.111,22.806l16.696,28.917c4.612,7.989,14.826,10.72,22.806,6.111C169.376,87.522,172.112,77.311,167.502,69.326z"/></g><g><path d="M471.591,361.194l-28.917-16.696c-7.986-4.612-18.196-1.875-22.806,6.111c-4.61,7.985-1.874,18.196,6.111,22.806l28.917,16.696c7.981,4.609,18.194,1.878,22.806-6.111C482.312,376.015,479.576,365.804,471.591,361.194z"/></g><g><path d="M86.022,138.585l-28.917-16.696c-7.986-4.612-18.197-1.874-22.806,6.111c-4.61,7.985-1.874,18.196,6.111,22.806l28.917,16.696c7.981,4.609,18.194,1.878,22.806-6.111C96.742,153.406,94.007,143.195,86.022,138.585z"/></g><g><path d="M477.702,128c-4.61-7.985-14.82-10.722-22.806-6.111l-28.917,16.696c-7.985,4.61-10.721,14.821-6.111,22.806c4.612,7.989,14.826,10.719,22.806,6.111l28.917-16.696C479.576,146.196,482.312,135.985,477.702,128z"/></g><g><path d="M92.132,350.609c-4.609-7.985-14.821-10.721-22.806-6.111l-28.917,16.696c-7.985,4.61-10.721,14.821-6.111,22.806c4.612,7.989,14.826,10.719,22.806,6.111l28.917-16.696C94.007,368.805,96.742,358.594,92.132,350.609z"/></g><g><path d="M384,34.298c-7.986-4.612-18.196-1.874-22.806,6.111l-16.696,28.917c-4.61,7.985-1.874,18.196,6.111,22.806c7.981,4.609,18.194,1.879,22.806-6.111l16.696-28.917C394.721,49.12,391.985,38.909,384,34.298z"/></g><g><path d="M161.391,419.868c-7.985-4.612-18.197-1.875-22.806,6.111l-16.696,28.917c-4.61,7.985-1.874,18.196,6.111,22.806c7.981,4.609,18.194,1.878,22.806-6.111l16.696-28.917C172.112,434.689,169.376,424.478,161.391,419.868z"/></g><g><path d="M256,100.174c-85.922,0-155.826,69.904-155.826,155.826S170.078,411.826,256,411.826S411.826,341.922,411.826,256S341.923,100.174,256,100.174z M256,378.435c-67.51,0-122.435-54.924-122.435-122.435S188.49,133.565,256,133.565S378.435,188.49,378.435,256S323.511,378.435,256,378.435z"/></g>
                        </svg>
                }
                <Link to="/" className="home" title="Return to home page">
                    <i className="icon-home" />
                </Link>
            </div>
        </HeaderEl>
    )
}

export default Header;