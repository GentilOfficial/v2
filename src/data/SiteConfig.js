import { FaInstagram, FaGithub, FaTelegramPlane } from "react-icons/fa";

export const SiteConfig = {
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Skills",
            href: "/skills",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "About",
            href: "/about",
        },
    ],
    navItemsIT: [
        {
            label: "Home",
            href: "/it/",
        },
        {
            label: "Abilità",
            href: "/it/skills",
        },
        {
            label: "Progetti",
            href: "/it/projects",
        },
        {
            label: "Info",
            href: "/it/about",
        },
    ],
    links: [
        {
            label: "Instagram",
            icon: FaInstagram,
            href: "https://www.instagram.com/federico.gnt/",
        },
        {
            label: "Telegram",
            icon: FaGithub,
            href: "https://t.me/gentil104",
        },
        {
            label: "Github",
            icon: FaTelegramPlane,
            href: "https://github.com/GentilOfficial",
        },
    ],
    email: "federicogentili05@gmail.com",
};
