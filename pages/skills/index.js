import { Caveat } from "next/font/google";
import { useRouter } from "next/router";
import { Divider, Progress } from "@nextui-org/react";
import { FaStar, FaGear, FaUser } from "react-icons/fa6";
import { translate, skillsList } from "@/data/site.config";
import SEO from "@/components/SEO";

const caveat = Caveat({ subsets: ["latin"] });

export default function SkillsPage() {
    const { locale } = useRouter();

    const { title, description } = translate.skills[locale];

    return (
        <>
            <SEO title={title} description={description} />
            <section
                className={`flex h-full flex-col items-center justify-center text-center mb-36`}
            >
                <h1
                    className={`text-6xl text-primary font-bold ${caveat.className}`}
                >
                    {title}
                </h1>
                <div className="flex flex-col gap-12 h-full w-full items-center justify-start md:justify-center mt-12 md:mt-0">
                    <Divider />
                    <div className="flex flex-col gap-8 w-full">
                        <h2 className="uppercase font-bold text-2xl flex items-center justify-center gap-2">
                            {skillsList.top.title[locale]}{" "}
                            <FaStar className="text-amber-400" />
                        </h2>
                        <div className="grid grid-cols-3 gap-8">
                            {skillsList.top.skills.map((skill, index) => (
                                <div
                                    key={`${skill}-${index}`}
                                    className="text-center flex flex-col items-center justify-center"
                                >
                                    <skill.logo className="w-1/2" />
                                    <p>{skill.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Divider />
                    <div className="flex flex-col gap-8 w-full">
                        <h2 className="uppercase font-bold text-2xl flex items-center justify-center gap-2">
                            {skillsList.technical.title[locale]} <FaGear />
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skillsList.technical.skills.map((skill, index) => (
                                <Progress
                                    key={`${skill}-${index}`}
                                    label={skill.title}
                                    value={skill.percentage}
                                    showValueLabel
                                />
                            ))}
                        </div>
                    </div>
                    <Divider />
                    <div className="flex flex-col gap-8 w-full">
                        <h2 className="uppercase font-bold text-2xl flex items-center justify-center gap-2">
                            {skillsList.professional.title[locale]} <FaUser />
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skillsList.professional.skills.map(
                                (skill, index) => (
                                    <Progress
                                        key={`${skill}-${index}`}
                                        label={skill.title[locale]}
                                        value={skill.percentage}
                                        showValueLabel
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
