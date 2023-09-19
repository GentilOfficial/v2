import { useEffect, useState } from "react";
import Head from "next/head";

export default function Favicon() {
    const [faviconHref, setFaviconHref] = useState("favicon.png");

    const getFaviconPath = (isDarkMode = false) => {
        return isDarkMode ? "favicon-dark.png" : "favicon.png";
    };

    useEffect(() => {
        const matcher = window.matchMedia("(prefers-color-scheme: dark)");

        setFaviconHref(getFaviconPath(matcher.matches));
        matcher.onchange = () =>
            setFaviconHref(getFaviconPath(matcher.matches));
    }, [faviconHref]);

    return (
        <Head>
            <link rel="icon" href={`/images/${faviconHref}`} />
        </Head>
    );
}
