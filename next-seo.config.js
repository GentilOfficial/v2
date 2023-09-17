export default {
    openGraph: {
        type: "website",
        locale: "en",
        images: [
            {
                url: "https://fgentili.it/images/og.png",
                width: 1200,
                height: 630,
                alt: "Federico Gentili Logo",
            },
        ],
        siteName: "Federico Gentili",
    },
    additionalLinkTags: [
        {
            rel: "manifest",
            href: "/manifest.json",
        },
        {
            rel: "icon",
            href: "/images/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            href: "/icons/apple-touch-icon.png",
            sizes: "180x180",
        },
        {
            rel: "alternate",
            hrefLang: "en",
            href: "https://fgentili.it/",
        },
        {
            rel: "alternate",
            hrefLang: "it",
            href: "https://fgentili.it/it/",
        },
        {
            rel: "sitemap",
            type: "application/xml",
            href: "/sitemap.xml",
        },
    ],
    additionalMetaTags: [
        { property: "color-scheme", content: "light" },
        { name: "theme-color", content: "#548267" },
        { name: "apple-mobile-web-app-status-bar", content: "#548267" },
        {
            name: "google-site-verification",
            content: "onsZqPWSdeqaD41sJ2P1cvrFBBTSL6MI_uLkJ8lLAC8",
        },
        { property: "og:locale:alternate", content: "it" },
    ],
    twitter: {
        cardType: "summary_large_image",
    },
};
