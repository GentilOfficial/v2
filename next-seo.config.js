const domain = process.env.NEXT_PUBLIC_DOMAIN;
const gSiteVerification = process.env.NEXT_PUBLIC_G_SITE_VERIFICATION;

export default {
    openGraph: {
        type: "website",
        locale: "en",
        siteName: "Federico Gentili",
    },
    languageAlternates: [
        {
            hrefLang: "en",
            href: `https://${domain}/`,
        },
        {
            hrefLang: "it",
            href: `https://${domain}/it/`,
        },
    ],
    additionalLinkTags: [
        {
            rel: "manifest",
            href: "/manifest.json",
        },
        {
            rel: "shortcut icon",
            href: "/images/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            href: "/icons/apple-touch-icon.png",
            sizes: "180x180",
        },
        {
            rel: "sitemap",
            type: "application/xml",
            href: "/sitemap.xml",
        },
    ],
    additionalMetaTags: [
        { property: "color-scheme", content: "light" },
        { name: "theme-color", content: "#FFFFFF" },
        { name: "apple-mobile-web-app-status-bar", content: "#FFFFFF" },
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
