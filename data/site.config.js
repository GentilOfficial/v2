import {
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaTelegramPlane,
} from "react-icons/fa";
import ReactLogoSVG from "@/images/ReactLogoSVG";
import NodeLogoSVG from "@/images/NodeLogoSVG";
import GitLogoSVG from "@/images/GitLogoSVG";

export const languageName = {
    en: "English",
    it: "Italiano",
};

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
    {
        title: {
            en: "Contact",
            it: "Contattami",
        },
        url: "/contact",
    },
];

export const links = [
    {
        title: "Linkedin",
        url: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
        icon: FaLinkedin,
    },
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

export const skillsList = {
    top: {
        title: { en: "Top", it: "Migliori" },
        skills: [
            {
                title: "React",
                logo: ReactLogoSVG,
            },
            {
                title: "Git",
                logo: GitLogoSVG,
            },
            {
                title: "Node JS",
                logo: NodeLogoSVG,
            },
        ],
    },
    technical: {
        title: { en: "Technical", it: "Tecniche" },
        skills: [
            {
                title: "C",
                percentage: 100,
            },
            {
                title: "HTML",
                percentage: 100,
            },
            {
                title: "CSS",
                percentage: 100,
            },
            {
                title: "JavaScript",
                percentage: 100,
            },
            {
                title: "PHP",
                percentage: 90,
            },
            {
                title: "SQL",
                percentage: 80,
            },
        ],
    },
    professional: {
        title: { en: "Professionals", it: "Professionali" },
        skills: [
            {
                title: { en: "Comunication", it: "Comunicazione" },
                percentage: 85,
            },
            {
                title: { en: "Team Working", it: "Lavoro di Squadra" },
                percentage: 85,
            },
            {
                title: {
                    en: "Project Management",
                    it: "Gestione dei Progetti",
                },
                percentage: 85,
            },
            {
                title: { en: "Ceativity", it: "Creatività" },
                percentage: 85,
            },
        ],
    },
};

export const translate = {
    home: {
        en: {
            description:
                "Hi, I'm Federico, a fullstack web developer based in Italy and welcome to my digital space.",
            h1: "Hey, I’m",
            h3: "Welcome to my digital space",
            p: "I'm an italian fullstack web developer based near Ferrara, Italy.",
        },
        it: {
            description:
                "Ciao, sono Federico, uno sviluppatore web fullstack con sede in Italia e benvenuto nel mio spazio digitale.",
            h1: "Hey, sono",
            h3: "Benvenuto nel mio spazio digitale",
            p: "Sono uno sviluppatore web fullstack proveniente da Ferrara, Italia.",
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
            background: {
                title: "Background",
                p: "Hi, I'm Federico, a fullstack web developer based in Italy. My passion for technology and creativity has led me along a journey in the field of web applications, where I'm constantly searching new challenges and opportunities to learn and grow. Welcome to my digital space, where I transform lines of code into engaging experiences and innovative functionalities.",
            },
            experiences: {
                title: "Experiences",
                list: [
                    {
                        title: "IIS N.Copernicus A.Carpeggiani.",
                        description:
                            "Technical and Professional Institute Graduation, IT",
                        location: "Ferrara, IT",
                        start: "Sep 2018",
                        end: "Jun 2023",
                    },
                    {
                        title: "Logikamente S.r.l.",
                        description: "Web Developer - Stage",
                        location: "Ferrara, IT",
                        start: "Feb 2022",
                        end: "Feb 2023",
                    },
                    {
                        title: "University of Ferrara",
                        description:
                            "Bachelor's degree in Computer Science and Technology, IT",
                        location: "Ferrara, IT",
                        start: "Set 2023",
                        end: "Set 2026",
                    },
                    {
                        title: "TECNOMAT",
                        description: "logistics employee",
                        location: "Ferrara, IT",
                        start: "Jan 2024",
                        end: "Today",
                    },
                ],
            },
        },
        it: {
            title: "Info",
            description:
                "Conoscimi meglio, leggi la mia biografia e scopri chi sono.",
            background: {
                title: "Background",
                p: "Ciao, sono Federico, uno sviluppatore web fullstack con sede in Italia. La mia passione per la tecnologia e la creatività mi ha portato a intraprendere un viaggio nel campo delle web applications, dove sono costantemente alla ricerca di nuove sfide e opportunità per imparare e crescere. Benvenuto nel mio spazio digitale, dove trasformo linee di codice in esperienze coinvolgenti e funzionalità innovative.",
            },
            experiences: {
                title: "Esperienze",
                list: [
                    {
                        title: "IIS N.Copernico A.Carpeggiani",
                        description:
                            "Diploma Istituto Tecnico e Professionale, Informatica",
                        location: "Ferrara, IT",
                        start: "Set 2018",
                        end: "Giu 2023",
                    },
                    {
                        title: "Logikamente S.r.l.",
                        description: "Sviluppatore Web - Stage",
                        location: "Ferrara, IT",
                        start: "Feb 2022",
                        end: "Feb 2023",
                    },
                    {
                        title: "Università degli Studi di Ferrara",
                        description:
                            "Laurea triennale in Scienze e Tecnologie Informatiche, Informatica",
                        location: "Ferrara, IT",
                        start: "Set 2023",
                        end: "Set 2026",
                    },
                    {
                        title: "TECNOMAT",
                        description: "Addetto alla logistica",
                        location: "Ferrara, IT",
                        start: "Gen 2024",
                        end: "Oggi",
                    },
                ],
            },
        },
    },
    contact: {
        en: {
            title: "Contact",
            description:
                "Feel free to reach out if you'd like to collaborate or just say hello.",
            formTitle: "Get In Touch",
            inputs: {
                firstName: {
                    label: "First Name",
                    placeholder: "John",
                },
                lastName: {
                    label: "Last Name",
                    placeholder: "Smith",
                },
                email: {
                    label: "Email",
                    placeholder: "example@email.com",
                    errorMessage: "Please enter a valid email",
                },
                message: {
                    label: "Message",
                    placeholder: "Write what you want to say to me ...",
                },
            },
            send: "Send",
            wasSent: "Sent",
            wasNotSent: "Error",
            cancel: "Clear",
        },
        it: {
            title: "Contattami",
            description:
                "Non esitate a contattarmi se vuoi collaborare o semplicemente salutarmi.",
            formTitle: "Contattami Ora",
            inputs: {
                firstName: {
                    label: "Nome",
                    placeholder: "Mario",
                },
                lastName: {
                    label: "Cognome",
                    placeholder: "Rossi",
                },
                email: {
                    label: "Email",
                    placeholder: "esempio@email.com",
                    errorMessage: "Inserisci un'email valida",
                },
                message: {
                    label: "Messaggio",
                    placeholder: "Scrivi quello che mi vuoi dire ...",
                },
            },
            send: "Invia",
            wasSent: "Inviato",
            wasNotSent: "Errore",
            cancel: "Cancella",
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
