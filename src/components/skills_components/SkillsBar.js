import { Progress } from "@nextui-org/progress";

export default function SkillsBar(x) {
    return (
        <Progress
            label={x.heading}
            value={x.percent}
            maxValue={100}
            showValueLabel={true}
        />
    );
}
