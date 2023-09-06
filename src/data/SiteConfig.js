import { FaInstagram, FaGithub, FaTelegramPlane } from "react-icons/fa";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import About from "../pages/About";

export const SiteConfig = {
    email: "federicogentili05@gmail.com",
    navItems: [
        {
            label: "Home",
            href: "/",
            component: Home,
        },
        {
            label: "Skills",
            href: "/skills",
            component: Skills,
        },
        {
            label: "Projects",
            href: "/projects",
            component: Projects,
        },
        {
            label: "About",
            href: "/about",
            component: About,
        },
    ],
    navItemsIT: [
        {
            label: "Home",
            href: "/it/",
            component: Home,
        },
        {
            label: "Abilità",
            href: "/it/skills",
            component: Skills,
        },
        {
            label: "Progetti",
            href: "/it/projects",
            component: Projects,
        },
        {
            label: "Info",
            href: "/it/about",
            component: About,
        },
    ],
    links: [
        {
            label: "Instagram",
            href: "https://www.instagram.com/federico.gnt/",
            icon: FaInstagram,
        },
        {
            label: "Telegram",
            href: "https://t.me/gentil104",
            icon: FaGithub,
        },
        {
            label: "Github",
            href: "https://github.com/GentilOfficial",
            icon: FaTelegramPlane,
        },
    ],
};
