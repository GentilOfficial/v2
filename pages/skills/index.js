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
                className={`flex h-full flex-col items-center justify-center gap-12`}
            >
                <h1>{title}</h1>
                <p>title</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
                    {skillsList.top.map((skill) => (
                        <div className="text-center flex flex-col items-center justify-center">
                            <skill.logo className="w-1/4 sm:w-1/3 md:w-1/2" />
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
                <p>title</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {skillsList.technical.map((skill, index) => (
                        <Progress
                            key={`${skill}-${index}`}
                            label={skill.title}
                            value={skill.percentage}
                            showValueLabel
                        />
                    ))}
                </div>
                <p>title</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {skillsList.professional.map((skill, index) => (
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
