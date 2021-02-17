import React, { useEffect } from "react";
import { navigate } from 'gatsby';

import BaseLayout from '../components/layouts/baseLayout';

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

const NotFoundPage = () => {
    // Implementing redirects
    useEffect(() => {
        if(typeof window !== "undefined") {
            const pathname = window?.location?.pathname;

            switch (pathname) {
                case "/book-recommendation.html":
                case "/book-recommendation.html/":
                    navigate("/book-recommendation");
                    break;
                case "/notes.html":
                case "/notes.html/":
                    navigate("/notes");
                    break;
                default:
                    break;
            }
        }
    }, []);

    return (
        <BaseLayout>
            <main style={pageStyles}>
                <title>Not found</title>
                <h1 style={headingStyles}>404: Page not found</h1>
                <p style={paragraphStyles}>
                    Sorry, I can not find the page you want.
                </p>
            </main>
        </BaseLayout>
    )
};

export default NotFoundPage;