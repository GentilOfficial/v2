import { useRouter } from "next/router";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";
import Favicon from "@/hooks/Favicon";

export default function HomePage() {
    const { locale } = useRouter();

    const { title, description } = translate.home[locale];

    return (
        <>
            <SEO description={description} />
            <Favicon />
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24`}
            >
                <h1>{title}</h1>
            </main>
        </>
    );
}
