import { useEffect, useState } from "react";

export const getFaviconName = () => {
    const [faviconHref, setFaviconHref] = useState("favicon.ico");

    const getFaviconPath = (isDarkMode = false) => {
        return isDarkMode ? "dark/favicon.ico" : "favicon.ico";
    };

    useEffect(() => {
        const matcher = window.matchMedia("(prefers-color-scheme: dark)");

        setFaviconHref(getFaviconPath(matcher.matches));
        matcher.onchange = () =>
            setFaviconHref(getFaviconPath(matcher.matches));
    }, [faviconHref]);

    return faviconHref;
};
