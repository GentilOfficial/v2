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
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/icons/apple-touch-icon.png",
        },
        {
            rel: "apple-touch-startup-image",
            sizes: "192x192",
            href: "/icons/logo-192.png",
        },
        {
            rel: "apple-touch-startup-image",
            sizes: "512x512",
            href: "/icons/logo-512.png",
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
        { name: "HandheldFriendly", content: "true" },
        { name: "MobileOptimized", content: "320" },
    ],
    twitter: {
        cardType: "summary_large_image",
    },
};
