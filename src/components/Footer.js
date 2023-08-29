import React from "react";
import { Link, Button } from "@nextui-org/react";
import { useInView } from "framer-motion";
import { FaInstagram, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { SiteConfig } from "../data/links";

export default function Footer(x) {
    const mail = React.useRef(null);
    const linkInstagram = React.useRef(null);
    const linkGithub = React.useRef(null);
    const linkTelegram = React.useRef(null);
    const credits = React.useRef(null);

    const mailIsInView = useInView(mail, { once: true });
    const linkInstagramIsInView = useInView(linkInstagram, { once: true });
    const linkGithubIsInView = useInView(linkGithub, { once: true });
    const linkTelegramIsInView = useInView(linkTelegram, { once: true });
    const creditsAreInView = useInView(credits, { once: true });

    return (
        <footer className="max-w-screen-lg mx-auto p-5 mt-5">
            <div className="flex flex-col items-center gap-4 text-default-500/75 text-sm text-center">
                <Link
                    ref={mail}
                    variant="bordered"
                    showAnchorIcon
                    target="_blank"
                    href={"mailto:" + x.mail}
                    className="text-sm text-default-500/75"
                    style={{
                        opacity: mailIsInView ? 1 : 0,
                        transitionProperty: "opacity",
                        transitionDuration: "0.9s",
                        ease: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                    }}
                >
                    {SiteConfig.email}
                </Link>
                <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-center">
                    <Button
                        style={{
                            transform: linkInstagramIsInView
                                ? "none"
                                : "translateY(20px)",
                            opacity: linkInstagramIsInView ? 1 : 0,
                            transitionProperty: "opacity, transform",
                            transitionDuration: "0.9s",
                            ease: "cubic-bezier(1.01, 0.2, 0.71, 0)",
                        }}
                        ref={linkInstagram}
                        size="sm"
                        as={Link}
                        showAnchorIcon
                        href={SiteConfig.links.instagram}
                        isExternal
                        className="bg-white/5 dark:bg-default-400/10 backdrop-blur shadow border dark:border-none"
                    >
                        <FaInstagram />
                        Instagram
                    </Button>
                    <Button
                        style={{
                            transform: linkTelegramIsInView
                                ? "none"
                                : "translateY(20px)",
                            opacity: linkTelegramIsInView ? 1 : 0,
                            transitionProperty: "opacity, transform",
                            transitionDuration: "0.9s",
                            transitionDelay: "0.2s",
                            ease: "cubic-bezier(1.01, 0.2, 0.71, 0)",
                        }}
                        ref={linkTelegram}
                        size="sm"
                        as={Link}
                        showAnchorIcon
                        href={SiteConfig.links.telegram}
                        isExternal
                        className="bg-white/5 dark:bg-default-400/10 backdrop-blur shadow border dark:border-none"
                    >
                        <FaTelegramPlane />
                        Telegram
                    </Button>
                    <Button
                        style={{
                            transform: linkGithubIsInView
                                ? "none"
                                : "translateY(20px)",
                            opacity: linkGithubIsInView ? 1 : 0,
                            transitionProperty: "opacity, transform",
                            transitionDuration: "0.9s",
                            transitionDelay: "0.4s",
                            ease: "cubic-bezier(1.01, 0.2, 0.71, 0)",
                        }}
                        ref={linkGithub}
                        size="sm"
                        as={Link}
                        showAnchorIcon
                        href={SiteConfig.links.github}
                        isExternal
                        className="bg-white/5 dark:bg-default-400/10 backdrop-blur shadow border dark:border-none col-span-2 sm:col-span-1"
                    >
                        <FaGithub />
                        GitHub
                    </Button>
                </section>
                <p
                    style={{
                        opacity: creditsAreInView ? 1 : 0,
                        transitionProperty: "opacity",
                        transitionDuration: "0.9s",
                        transitionDelay: "0.6s",
                        ease: "cubic-bezier(1.01, 0.2, 0.71, 0)",
                    }}
                    ref={credits}
                    className="w-44"
                >
                    {x.isIT
                        ? "Progettato e Realizzato da "
                        : "Designed & Built by "}
                    <span
                        className="text-primary cursor-pointer"
                        onClick={() => {
                            x.toggleEasterEgg(!x.isEasterEggPlaying);
                            !x.isEasterEggPlaying
                                ? (document.body.style.overflow = "hidden")
                                : (document.body.style.overflow = "unset");
                        }}
                    >
                        Federico Gentili
                    </span>
                </p>
            </div>
        </footer>
    );
}
