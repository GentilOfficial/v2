import {
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoJavascript,
    BiLogoPhp,
    BiLogoNodejs,
    BiLogoGit,
    BiLogoReact,
} from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { LuBoxes } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";
import { FaPencilRuler } from "react-icons/fa";

export const SkillsData = [
    {
        title: "Frontend",
        items: [
            {
                heading: "HTML",
                percent: 92,
                icon: BiLogoHtml5,
            },
            {
                heading: "CSS",
                percent: 80,
                icon: BiLogoCss3,
            },
            {
                heading: "JavaScript",
                percent: 88,
                icon: BiLogoJavascript,
            },
        ],
        icon: FaPencilRuler,
    },
    {
        title: "Backend",
        items: [
            {
                heading: "PHP",
                percent: 78,
                icon: BiLogoPhp,
            },
            {
                heading: "MySQL",
                percent: 83,
                icon: SiMysql,
            },
        ],
        icon: AiFillDatabase,
    },
    {
        title: "Frameworks",
        items: [
            {
                heading: "React",
                percent: 72,
                icon: BiLogoReact,
            },
        ],
        icon: LuBoxes,
    },
    {
        title: "Toolkits",
        items: [
            {
                heading: "Node.js",
                percent: 75,
                icon: BiLogoNodejs,
            },
            {
                heading: "Git",
                percent: 69,
                icon: BiLogoGit,
            },
        ],
        icon: BsTools,
    },
];
