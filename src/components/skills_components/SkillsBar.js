export default function SkillsBar(x) {
    return (
        <div className="space-y-1">
            <div
                className="flex justify-between items-center"
                style={{ width: x.percent + "%" }}
            >
                <h3 className="uppercase">{x.heading}</h3>
                <h4 className="translate-x-1/2 font-caveat text-lg">
                    {x.percent}%
                </h4>
            </div>
            <div className="w-full rounded-full overflow-hidden h-4 bg-neutral-500/30 shadow-inner">
                <div
                    className="h-full bg-primary"
                    style={{ width: x.percent + "%" }}
                ></div>
            </div>
        </div>
    );
}
