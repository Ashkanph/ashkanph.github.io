import React from "react";
import PropTypes from "prop-types";
import { Helmet } from 'react-helmet';

import MyIconFont from "./static/fonts/myIconFont.woff"
import Sahel from "./static/fonts/sahel.woff"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <Helmet>
            <link   rel="preload"
                    as="font"
                    href={MyIconFont}
                    type="font/woff"
                    crossOrigin="anonymous" />
            <link   rel="preload"
                    as="font"
                    href={Sahel}
                    type="font/woff"
                    crossOrigin="anonymous" />
        </Helmet>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        {/* <!-- Default Statcounter code for my personal website --> */}
        <Helmet>
            <script type="text/javascript">var sc_project=11198962;var sc_invisible=1;var sc_security="fb004402";</script>
            <script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async />
        </Helmet>
        <noscript>
            <div className="statcounter">
                <a title="Web Analytics Made Easy - StatCounter" href="https://statcounter.com/"
                    target="_blank">
                        <img className="statcounter"
                                src="https://c.statcounter.com/11198962/0/fb004402/1/"
                                alt="Web Analytics Made Easy - StatCounter" />
                </a>
            </div>
        </noscript>
        {/* <!-- End of Statcounter Code --> */}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
