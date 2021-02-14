import React, { useState } from "react"
import styled from "styled-components";

import Header from "../header";
import SideMenu from "../sideMenu";
import { useTheme } from "../../store/index";
import GlobalStyle from "./globalStyle";
import { getTitle, PAGE_NOT_FOUND } from "../../helper/getTitle";

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

            main {
                padding: calc(var(--header-height) + 1rem) 1rem 1rem;
            }
        }
    `;

const BaseLayout = props => {
    const { className, children, uri, notFound } = props;
    const [showSideMenu, setShowSideMenu] = useState(false);
    const { theme } = useTheme();
    const title = notFound ? PAGE_NOT_FOUND : getTitle(uri);

    return (
        <BaseLayoutEl className={theme}>
            <GlobalStyle />
            {
                uri === "/" ?
                    children :
                    <div className="limited-width">
                        <Header title={title ?? ''} onMenuClick={() => setShowSideMenu(!showSideMenu)} />
                        <SideMenu show={showSideMenu} setShowSideMenu={setShowSideMenu} />
                        <main className={ `${className ?? ''}` }>
                            { children }
                        </main>
                    </div>
            }
        </BaseLayoutEl>
    )
}

export default BaseLayout;