import { useEffect, useState } from "react";

export const getFaviconName = () => {
    const [faviconHref, setFaviconHref] = useState("favicon-light.png");

    const getFaviconPath = (isDarkMode = false) => {
        return isDarkMode ? "favicon-dark.png" : "favicon-light.png";
    };

    useEffect(() => {
        const matcher = window.matchMedia("(prefers-color-scheme: dark)");

        setFaviconHref(getFaviconPath(matcher.matches));
        matcher.onchange = () =>
            setFaviconHref(getFaviconPath(matcher.matches));
    }, [faviconHref]);

    return faviconHref;
};
