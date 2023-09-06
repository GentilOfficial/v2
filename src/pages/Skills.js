import SkillsBar from "../components/skills_components/SkillsBar";
import { SkillsData } from "../data/SkillsData";

export default function Skills(x) {
    return (
        <section className="space-y-6">
            {SkillsData.map((item, index) => (
                <SkillsBar
                    key={`${item}-${index}`}
                    heading={item.heading}
                    percent={item.percent}
                />
            ))}
        </section>
    );
}
