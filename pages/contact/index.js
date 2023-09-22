import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import { translate } from "@/data/site.config";

export default function ContactPage() {
    const { locale } = useRouter();

    const { title, description } = translate.contact[locale];

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
