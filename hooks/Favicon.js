import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";

const getFaviconName = (isDarkMode = false) => {
    return `favicon-${isDarkMode ? "dark" : "light"}.png`;
};

export default function Favicon() {
    const [faviconName, setFaviconName] = useState("favicon-light.png");

    useEffect(() => {
        const matcher = window.matchMedia("(prefers-color-scheme: dark)");
        setFaviconName(getFaviconName(matcher.matches));
        matcher.onchange = () =>
            setFaviconName(getFaviconName(matcher.matches));
    }, [faviconName]);

    return (
        <NextSeo
            additionalLinkTags={[
                {
                    rel: "icon",
                    href: `/images/${faviconName}`,
                },
            ]}
        />
    );
}
