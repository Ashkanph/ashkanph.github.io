import { createGlobalStyle } from "styled-components";

import Sahel from '../../static/fonts/sahel.woff';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'sahel';
    src: url(${Sahel}) format('woff2');
    font-display: swap;
}

img, svg {
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}

body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'sahel', 'Roboto';
    color: var(--font-color, #363030);
    background-color: var(--background-color, #f4f4f1);
}

html {
    font-size: 15px;
    line-height: 1.3rem;
}


body {
    --header-height: 50px;
    --icon-border: #bfbfbf;

    --header-height: 50px;
    --header-bg: #423c3c;
    --header-color: #5c5c5c;
}

.light {
    --background-color: #f4f4f1;
    --font-color: #363030;
    --list-of-titles-bg: #e4dede;
    --list-color: #1c11ee;
    --english-tr: #006400;
    --persian-tr: #8b0000;
    --french-tr: #800080;
    --other-tr: #00008b;
    --ref-color: #696969;
    --return-to-top-bg: #fff;
}

.dark {
    --background-color: #363030;
    --font-color: #f4f4f1;
    --list-of-titles-bg: #292424;
    --list-color: #bbb7fa;
    --english-tr: #c6ecc6;
    --persian-tr: #ffc299;
    --french-tr: #ffccff;
    --other-tr: #ccccff;
    --ref-color: #ccccb3;
    --return-to-top-bg: #363030;
}
`;

export default GlobalStyle;