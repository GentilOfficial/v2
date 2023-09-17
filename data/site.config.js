import { FaInstagram, FaGithub, FaTelegramPlane } from "react-icons/fa";

export const email = "federicogentili05@gmail.com";

export const routes = [
    {
        title: {
            en: "Home",
            it: "Home",
        },
        url: "/",
    },
    {
        title: {
            en: "Skills",
            it: "Abilità",
        },
        url: "/skills",
    },
    {
        title: {
            en: "Projects",
            it: "Progetti",
        },
        url: "/projects",
    },
    {
        title: {
            en: "About",
            it: "Info",
        },
        url: "/about",
    },
];

export const links = [
    {
        title: "Instagram",
        url: "https://www.instagram.com/federico.gnt",
        icon: FaInstagram,
    },
    {
        title: "Telegram",
        url: "https://t.me/gentil104",
        icon: FaTelegramPlane,
    },
    {
        title: "Github",
        url: "https://github.com/GentilOfficial",
        icon: FaGithub,
    },
];

export const resume = {
    en: {
        title: "Resume",
        url: "/Resume.pdf",
    },
    it: {
        title: "Curriculum",
        url: "/it/Curriculum.pdf",
    },
};
