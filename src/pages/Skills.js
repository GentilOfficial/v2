import SkillsBar from "../components/skills_components/SkillsBar";
import { SkillsData } from "../data/SkillsData";

export default function Skills(x) {
    return (
        <section className="flex items-center justify-center py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                {SkillsData.map((item, index) => (
                    <SkillsBar
                        key={`${item}-${index}`}
                        heading={item.heading}
                        percent={item.percent}
                    />
                ))}
            </div>
        </section>
    );
}
