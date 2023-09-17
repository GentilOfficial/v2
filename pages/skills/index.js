import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import content from "@/locale/common";

export default function Home() {
    const { locale, defaultLocale } = useRouter();

    const { title, description } = content[locale].skills;

    return (
        <>
            <NextSeo
                title={`Federico Gentili - ${title}`}
                description={description}
                openGraph={{
                    url: `https://fgentili.it${
                        locale !== defaultLocale ? "/it/skills" : "/skills"
                    }`,
                    images: [
                        {
                            url: `https://fgentili.it/api/og?title=${title}`,
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
                <Button>{title}</Button>
            </main>
        </>
    );
}
