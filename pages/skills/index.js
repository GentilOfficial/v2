import { useRouter } from "next/router";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";

export default function SkillsPage() {
    const { locale } = useRouter();

    const { title, description } = translate.skills[locale];

    return (
        <>
            <SEO title={title} description={description} />
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24`}
            >
                <h1>{title}</h1>
            </main>
        </>
    );
}
