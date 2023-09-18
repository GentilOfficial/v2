import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { translate } from "@/data/site.config";

export default function Home() {
    const { locale, defaultLocale } = useRouter();

    const domain = process.env.NEXT_PUBLIC_DOMAIN;

    const { title, description } = translate[locale].projects;

    return (
        <>
            <NextSeo
                title={`Federico Gentili - ${title}`}
                description={description}
                openGraph={{
                    url: `https://${domain}${
                        locale !== defaultLocale ? "/it/projects" : "/projects"
                    }`,
                    images: [
                        {
                            url: `https://${domain}/api/og?title=${title}`,
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
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24`}
            >
                <h1>{title}</h1>
            </main>
        </>
    );
}
