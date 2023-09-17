import { Link, Button } from "@nextui-org/react";
import { translate, links } from "@/data/site.config";

export default function Footer() {
    return (
        <footer className="max-w-screen-lg mx-auto p-5 mt-5">
            <div className="flex flex-col items-center gap-4 text-foreground-500 text-sm text-center">
                <Link
                    showAnchorIcon
                    target="_blank"
                    href={"mailto:federicogentili05@gmail.com"}
                    className="text-sm text-foreground"
                >
                    federicogentili05@gmail.com
                </Link>
                <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-center">
                    {links.map((link, index) => (
                        <Button
                            key={`${link}-${index}`}
                            size="sm"
                            as={Link}
                            showAnchorIcon
                            href={link.url}
                            isExternal
                            className={`${
                                links.length % 2 === 0
                                    ? "col-span-1"
                                    : links.length === index + 1
                                    ? "col-span-2 sm:col-span-1"
                                    : "col-span-1"
                            } bg-white/5 dark:bg-default-400/10 backdrop-blur shadow border dark:border-none w-full`}
                        >
                            <link.icon />
                            {link.title}
                        </Button>
                    ))}
                </section>
                <section className="w-44">
                    Designed & Built by
                    <p className="text-primary">Federico Gentili</p>
                </section>
            </div>
        </footer>
    );
}
