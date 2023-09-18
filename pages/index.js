import { useRouter } from "next/router";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";

export default function HomePage() {
    const { locale } = useRouter();

    const { title, description } = translate.home[locale];

    return (
        <>
            <SEO description={description} />
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24`}
            >
                <h1>{title}</h1>
            </main>
        </>
    );
}
