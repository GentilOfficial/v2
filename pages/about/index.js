import { useRouter } from "next/router";
import { Divider, Image } from "@nextui-org/react";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";

export default function AboutPage() {
    const { locale } = useRouter();

    const { title, description } = translate.about[locale];

    return (
        <>
            <SEO title={title} description={description} />
            <section
                className={`flex h-full flex-col items-center justify-center`}
            >
                <div className="grid grid-cols-2 w-full">
                    <Image src="https://nextui-docs-v2.vercel.app/images/album-cover.png" />
                    <div>
                        <h1 className="text-2xl">{title}</h1>
                        <Divider />
                    </div>
                </div>
            </section>
        </>
    );
}
