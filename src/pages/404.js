import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  color: "var(--font-color)",
}

const paragraphStyles = {
  marginBottom: 48,
  color: "var(--font-color)",
}

// markup
const NotFoundPage = () => {
    return (
        <main style={pageStyles}>
            <title>Not found</title>
            <h1 style={headingStyles}>404: Page not found</h1>
            <p style={paragraphStyles}>
                Sorry, I can not find the page you want.
            </p>
        </main>
    )
};

export default NotFoundPage;