import { useRouter } from "next/router";
import { Progress } from "@nextui-org/react";
import { translate, skillsList } from "@/data/site.config";
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {skillsList.map((skill, index) => (
                        <Progress
                            key={`${skill}-${index}`}
                            label={skill.title}
                            value={skill.percentage}
                            showValueLabel
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
