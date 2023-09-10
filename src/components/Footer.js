import { useRef, useEffect } from "react";
import { Link, Button } from "@nextui-org/react";
import { useInView, useAnimation, motion } from "framer-motion";
import { SiteConfig } from "../data/SiteConfig";

export default function Footer(x) {
    const mail = useRef(null);
    const links = useRef(null);
    const credits = useRef(null);

    const mailIsInView = useInView(mail, { once: true });
    const linksAreInView = useInView(links, { once: true });
    const creditsAreInView = useInView(credits, { once: true });

    const linkContainerAnimation = useAnimation();

    const linkContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const linkAnimation = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    useEffect(() => {
        if (linksAreInView) {
            linkContainerAnimation.start("visible");
        } else {
            linkContainerAnimation.start("hidden");
        }
    });

    return (
        <footer className="max-w-screen-lg mx-auto p-5 mt-5">
            <div className="flex flex-col items-center gap-4 text-foreground-500 text-sm text-center">
                <Link
                    ref={mail}
                    variant="bordered"
                    showAnchorIcon
                    target="_blank"
                    href={"mailto:" + x.mail}
                    className="text-sm text-foreground"
                    style={{
                        opacity: mailIsInView ? 1 : 0,
                        transitionProperty: "opacity",
                        transitionDuration: "0.9s",
                        ease: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                    }}
                >
                    {SiteConfig.email}
                </Link>
                <motion.section
                    ref={links}
                    variants={linkContainer}
                    initial="hidden"
                    animate={linkContainerAnimation}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-center"
                >
                    {SiteConfig.links.map((item, index) => (
                        <motion.div
                            variants={linkAnimation}
                            key={`${item}-${index}`}
                            className={
                                SiteConfig.links.length % 2 === 0
                                    ? "col-span-1"
                                    : SiteConfig.links.length === index + 1
                                    ? "col-span-2 sm:col-span-1"
                                    : "col-span-1"
                            }
                        >
                            <Button
                                size="sm"
                                as={Link}
                                showAnchorIcon
                                href={item.href}
                                isExternal
                                className="bg-white/5 dark:bg-default-400/10 backdrop-blur shadow border dark:border-none w-full"
                            >
                                <item.icon />
                                {item.label}
                            </Button>
                        </motion.div>
                    ))}
                </motion.section>
                <section
                    ref={credits}
                    className="w-44"
                    style={{
                        opacity: creditsAreInView ? 1 : 0,
                        transitionProperty: "opacity",
                        transitionDuration: "0.9s",
                        ease: "cubic-bezier(1.01, 0.2, 0.71, 0)",
                    }}
                >
                    {x.isIT
                        ? "Progettato e Realizzato da "
                        : "Designed & Built by "}
                    <p className="text-primary">Federico Gentili</p>
                </section>
            </div>
        </footer>
    );
}
