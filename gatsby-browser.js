import React from "react";

import BaseLayout from "./src/components/layouts/baseLayout";
import StateProvider from "./src/store/index";

import "./src/styles/myIconFont.css";
import "./src/styles/common.css";
import "./src/styles/bootstrap4.5.1.css";

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => 
    <BaseLayout notFound={element?.key === "/404.html"} {...props}>
        { element }
    </BaseLayout>;

export const wrapRootElement = ({ element }) => {
    return  <StateProvider>
                { element }
            </StateProvider>
};