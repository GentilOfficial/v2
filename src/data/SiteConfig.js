import { FaInstagram, FaGithub, FaTelegramPlane } from "react-icons/fa";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import About from "../pages/About";

export const SiteConfig = {
    domain: "https://www.fgentili.it/",
    email: "federicogentili05@gmail.com",
    navItems: [
        {
            label: "Home",
            labelIT: "Home",
            href: "/",
            hrefIT: "/it/",
            component: Home,
            description:
                "Hi, I'm Federico, a fullstack web developer based in Italy and welcome to my digital space, where I transform lines of code into engaging experiences and innovative functionalities.",
            descriptionIT:
                "Ciao, sono Federico, uno sviluppatore web fullstack con sede in Italia e benvenuto nel mio spazio digitale, dove trasformo linee di codice in esperienze coinvolgenti e funzionalità innovative.",
        },
        {
            label: "Skills",
            labelIT: "Abilità",
            href: "/skills",
            hrefIT: "/it/abilita",
            component: Skills,
            description:
                "A list of all my skills divided by section: frontend, backend, frameworks and toolkits.",
            descriptionIT:
                "Una lista di tutte le mie abilità divise per sezione: frontend, backend, frameworks e toolkits.",
        },
        {
            label: "Projects",
            labelIT: "Progetti",
            href: "/projects",
            hrefIT: "/it/progetti",
            component: Projects,
            description: "Selection of my projects featured on github.",
            descriptionIT: "Selezione dei miei progetti presenti su github.",
        },
        {
            label: "About",
            labelIT: "Info",
            href: "/about",
            hrefIT: "/it/info",
            component: About,
            description:
                "Get to know me better, read my bio and find out who I am.",
            descriptionIT:
                "Conoscimi meglio, leggi la mia biografia e scopri chi sono.",
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
            icon: FaTelegramPlane,
        },
        {
            label: "Github",
            href: "https://github.com/GentilOfficial",
            icon: FaGithub,
        },
    ],
};
