import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import { translate } from "@/data/site.config";

export default function ProjectsPage() {
    const { locale } = useRouter();

    const { title, description } = translate.projects[locale];

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
