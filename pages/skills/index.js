import { useRouter } from "next/router";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";

export default function SkillsPage() {
    const { locale } = useRouter();

    const { title, description } = translate.skills[locale];

    return (
        <>
            <SEO title={title} description={description} />
            <section
                className={`flex h-full flex-col items-center justify-center`}
            >
                <h1>{title}</h1>
            </section>
        </>
    );
}
