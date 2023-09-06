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
            labelIT: "Home",
            href: "/",
            hrefIT: "/it/",
            component: Home,
        },
        {
            label: "Skills",
            labelIT: "Abilità",
            href: "/skills",
            hrefIT: "/it/abilita",
            component: Skills,
        },
        {
            label: "Projects",
            labelIT: "Progetti",
            href: "/projects",
            hrefIT: "/it/progetti",
            component: Projects,
        },
        {
            label: "About",
            labelIT: "Info",
            href: "/about",
            hrefIT: "/it/info",
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
