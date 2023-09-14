import { Divider } from "@nextui-org/react";
import SkillsBar from "../components/skills_components/SkillsBar";
import { SkillsData } from "../data/SkillsData";

export default function Skills({ isIT }) {
    return (
        <div className="flex flex-col items-center justify-center my-10 gap-12">
            <section className="text-center">
                <h1 className="text-6xl drop-shadow-lg font-caveat font-bold">
                    {isIT ? "Abilità" : "Skills"}
                </h1>
                <h2 className="drop-shadow-lg text-foreground/90 mt-3 max-w-md mx-auto">
                    {isIT
                        ? "Una lista di tutte le mie abilità divise per sezione: frontend, backend, frameworks e toolkits."
                        : "A list of all my skills divided by section: frontend, backend, frameworks and toolkits."}
                </h2>
            </section>
            <section className="w-full grid sm:grid-cols-2 gap-12">
                {SkillsData.map((section, index) => (
                    <div key={`${section}-${index}`} className="space-y-4">
                        <div className="flex items-center gap-2 text-xl">
                            <section.icon />
                            <h4 className="font-bold">{section.title}</h4>
                        </div>
                        <Divider />
                        <div className="space-y-6">
                            {section.items.map((item, index) => (
                                <SkillsBar
                                    key={`${item}-${index}`}
                                    heading={
                                        <span className="flex items-center gap-2">
                                            <item.icon className="text-xl" />
                                            {item.heading}
                                        </span>
                                    }
                                    percent={item.percent}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
