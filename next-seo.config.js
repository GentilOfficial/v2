const domain = process.env.NEXT_PUBLIC_DOMAIN;
const gSiteVerification = process.env.NEXT_PUBLIC_G_SITE_VERIFICATION;

export default {
    openGraph: {
        type: "website",
        locale: "en",
        siteName: "Federico Gentili",
    },
    additionalLinkTags: [
        {
            rel: "manifest",
            href: "/manifest.json",
        },
        {
            rel: "icon",
            href: "/images/favicon.png",
        },
        {
            rel: "apple-touch-icon",
            href: "/icons/apple-touch-icon.png",
            sizes: "180x180",
        },
        {
            rel: "alternate",
            hrefLang: "en",
            href: `https://${domain}/`,
        },
        {
            rel: "alternate",
            hrefLang: "it",
            href: `https://${domain}/it/`,
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
            content: gSiteVerification,
        },
        { property: "og:locale:alternate", content: "it" },
    ],
    twitter: {
        cardType: "summary_large_image",
    },
};
