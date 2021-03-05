import React from "react";

import StateProvider from "./src/store/index";

import "./src/styles/global.css";
import "./src/styles/myIconFont.css";
import "./src/styles/common.css";

// // Wraps every page in a component
// export const wrapPageElement = ({ element, props }) => 
//     <BaseLayout notFound={element?.key === "/404.html"} {...props}>
//         { element }
//     </BaseLayout>;

export const wrapRootElement = ({ element }) => {
    return  <StateProvider>
                { element }
            </StateProvider>
};

export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___loader").style.display = "none"
    }, 500)
}