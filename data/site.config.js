import { FaInstagram, FaGithub, FaTelegramPlane } from "react-icons/fa";

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
        url: process.env.NEXT_PUBLIC_INSTAGRAM_LINK,
        icon: FaInstagram,
    },
    {
        title: "Telegram",
        url: process.env.NEXT_PUBLIC_TELEGRAM_LINK,
        icon: FaTelegramPlane,
    },
    {
        title: "Github",
        url: process.env.NEXT_PUBLIC_GITHUB_LINK,
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

export const translate = {
    home: {
        en: {
            title: "Home",
            description:
                "Hi, I'm Federico, a fullstack web developer based in Italy and welcome to my digital space, where I transform lines of code into engaging experiences and innovative functionalities.",
        },
        it: {
            title: "Casa",
            description:
                "Ciao, sono Federico, uno sviluppatore web fullstack con sede in Italia e benvenuto nel mio spazio digitale, dove trasformo linee di codice in esperienze coinvolgenti e funzionalità innovative.",
        },
    },
    skills: {
        en: {
            title: "Skills",
            description:
                "A list of all my skills divided by section: frontend, backend, frameworks and toolkits.",
        },
        it: {
            title: "Abilità",
            description:
                "Una lista di tutte le mie abilità divise per sezione: frontend, backend, frameworks e toolkits.",
        },
    },
    projects: {
        en: {
            title: "Projects",
            description: "Selection of my projects featured on github.",
        },
        it: {
            title: "Progetti",
            description: "Selezione dei miei progetti presenti su github.",
        },
    },
    about: {
        en: {
            title: "About",
            description:
                "Get to know me better, read my bio and find out who I am.",
        },
        it: {
            title: "Info",
            description:
                "Conoscimi meglio, leggi la mia biografia e scopri chi sono.",
        },
    },
    error: {
        en: {
            h1: "Error 404",
            h2: "Page not found",
            p: "Sorry, the page you are looking for doesn't exist or has been moved.",
            button: "Go Home",
        },
        it: {
            h1: "Errore 404",
            h2: "Pagina non trovata",
            p: "Mi spiace, la pagina che stai cercando non esiste oppure è stata spostata.",
            button: "Vai alla Home",
        },
    },
    languageChanger: {
        en: "Choose another language",
        it: "Scegli un'altra lingua",
    },
    credits: {
        en: "Designed & Built by",
        it: "Progettato & Realizzato da",
    },
};
