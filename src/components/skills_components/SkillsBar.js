import { Progress } from "@nextui-org/progress";

export default function SkillsBar({ heading, percent }) {
    return (
        <Progress
            label={heading}
            value={percent}
            maxValue={100}
            showValueLabel={true}
            className="drop-shadow-lg"
        />
    );
}
