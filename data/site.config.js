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

export const translate = {
    en: {
        home: {
            title: "Home",
            description:
                "Hi, I'm Federico, a fullstack web developer based in Italy and welcome to my digital space, where I transform lines of code into engaging experiences and innovative functionalities.",
        },
        skills: {
            title: "Skills",
            description:
                "A list of all my skills divided by section: frontend, backend, frameworks and toolkits.",
        },
        projects: {
            title: "Projects",
            description: "Selection of my projects featured on github.",
        },
        about: {
            title: "About",
            description:
                "Get to know me better, read my bio and find out who I am.",
        },
        error: {
            h1: "Error 404",
            h2: "Page not found",
            p: "Sorry, the page you are looking for doesn't exist or has been moved.",
            button: "Go Home",
        },
        languageChanger: "Choose another language",
        credits: "Designed & Built by",
    },
    it: {
        home: {
            title: "Casa",
            description:
                "Ciao, sono Federico, uno sviluppatore web fullstack con sede in Italia e benvenuto nel mio spazio digitale, dove trasformo linee di codice in esperienze coinvolgenti e funzionalità innovative.",
        },
        skills: {
            title: "Abilità",
            description:
                "Una lista di tutte le mie abilità divise per sezione: frontend, backend, frameworks e toolkits.",
        },
        projects: {
            title: "Progetti",
            description: "Selezione dei miei progetti presenti su github.",
        },
        about: {
            title: "Info",
            description:
                "Conoscimi meglio, leggi la mia biografia e scopri chi sono.",
        },
        error: {
            h1: "Errore 404",
            h2: "Pagina non trovata",
            p: "Mi spiace, la pagina che stai cercando non esiste oppure è stata spostata.",
            button: "Vai alla Home",
        },
        languageChanger: "Scegli un'altra lingua",
        credits: "Progettato & Realizzato da",
    },
};
