import React, { useState, useContext } from "react"
import styled from "styled-components";

import Header from "../header";
import SideMenu from "../sideMenu";
import { StateContext } from "../../store/index";
import GlobalStyle from "./globalStyle";

const BaseLayoutEl =
    styled.div`
        width: 100%;
        min-height: 100vh;
        height: 100%;
        background-color: var(--background-color);
        
        .limited-width {
            min-height: 100vh;
            margin: 0 auto;
            border-right: 1px solid var(--header-bg);
            border-left: 1px solid var(--header-bg);
            max-width: 1024px;
            width: 100%;

            main {
                padding: calc(var(--header-height) + 1rem) 1rem 1rem;
            }
        }
    `;

const BaseLayout = props => {
    const { children, indexPage } = props;
    const [showSideMenu, setShowSideMenu] = useState(false);
    const state = useContext(StateContext);

    return (
        <BaseLayoutEl className={state?.theme}>
            <GlobalStyle />
            {
                !!indexPage ?
                    children :
                    <div className="limited-width">
                        <Header onMenuClick={() => setShowSideMenu(!showSideMenu)} />
                        <SideMenu show={showSideMenu} setShowSideMenu={setShowSideMenu} />
                        <main>
                            { children }
                        </main>
                    </div>
            }
        </BaseLayoutEl>
    )
}

export default BaseLayout;