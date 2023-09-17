import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import content from "@/locale/common";

export default function Home() {
    const { locale, defaultLocale } = useRouter();

    const { title, description } = content[locale].home;

    return (
        <>
            <NextSeo
                title="Federico Gentili"
                description={description}
                openGraph={{
                    url: `https://www.fgentili.it${
                        locale !== defaultLocale ? "/it/" : "/"
                    }`,
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