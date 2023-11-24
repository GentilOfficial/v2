/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
    i18n: {
        locales: ["en", "it"],
        defaultLocale: "en",
        localeDetection: false,
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
