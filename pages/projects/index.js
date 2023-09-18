import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import { translate } from "@/data/site.config";

export default function ProjectsPage() {
    const { locale } = useRouter();

    const { title, description } = translate.projects[locale];

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
