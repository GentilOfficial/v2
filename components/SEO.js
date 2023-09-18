import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function SEO({ title, description }) {
    const { locale, defaultLocale, pathname } = useRouter();

    const domain = process.env.NEXT_PUBLIC_DOMAIN;

    return (
        <NextSeo
            title={`Federico Gentili${title ? ` - ${title}` : ""}`}
            description={description}
            openGraph={{
                url: `https://${domain}${
                    locale !== defaultLocale ? `/it${pathname}` : pathname
                }`,
                images: [
                    {
                        url: `https://${domain}/api/og${
                            title ? `?title=${title}` : ""
                        }`,
                        width: 1200,
                        height: 630,
                        alt: "Federico Gentili Open Graph",
                    },
                ],
            }}
            additionalMetaTags={[
                { property: "twitter:description", content: description },
            ]}
        />
    );
}
