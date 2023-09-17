import { useState } from "react";
import { Caveat } from "next/font/google";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarItem,
} from "@nextui-org/navbar";
import { Button, Image, Link as LinkUI, Divider } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeChanger from "./ThemeChanger";
import LanguageChanger from "./LanguageChanger";
import AvatarIcon from "@/images/avatar.webp";

const caveat = Caveat({ subsets: ["latin"] });

export default function GlobalNavbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
            <NavbarBrand className="select-none">
                <Image
                    width={36}
                    height={36}
                    src={AvatarIcon.src}
                    classNames="m-5"
                    alt="Site logo"
                />
                <p className={`text-lg font-bold mx-1 ${caveat.className}`}>
                    Federico Gentili
                </p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={router.pathname === "/" ? true : false}>
                    <LinkUI
                        as={Link}
                        href="/"
                        className={`rounded-md ${
                            router.pathname === "/"
                                ? "text-primary"
                                : "text-foreground/80"
                        }`}
                    >
                        Home
                    </LinkUI>
                </NavbarItem>
                <NavbarItem
                    isActive={router.pathname === "/skills" ? true : false}
                >
                    <LinkUI
                        as={Link}
                        href="/skills"
                        className={`rounded-md ${
                            router.pathname === "/skills"
                                ? "text-primary"
                                : "text-foreground/80"
                        }`}
                    >
                        Skills
                    </LinkUI>
                </NavbarItem>
                <NavbarItem
                    isActive={router.pathname === "/projects" ? true : false}
                >
                    <LinkUI
                        as={Link}
                        href="/projects"
                        className={`rounded-md ${
                            router.pathname === "/projects"
                                ? "text-primary"
                                : "text-foreground/80"
                        }`}
                    >
                        Projects
                    </LinkUI>
                </NavbarItem>
                <NavbarItem
                    isActive={router.pathname === "/about" ? true : false}
                >
                    <LinkUI
                        as={Link}
                        href="/about"
                        className={`rounded-md ${
                            router.pathname === "/about"
                                ? "text-primary"
                                : "text-foreground/80"
                        }`}
                    >
                        About
                    </LinkUI>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeChanger />
                </NavbarItem>
                <NavbarItem>
                    <LanguageChanger />
                </NavbarItem>
                <NavbarItem className="hidden sm:block">
                    <Button color="primary" variant="flat">
                        Resume
                    </Button>
                </NavbarItem>
                <Button
                    as={NavbarMenuToggle}
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="block sm:hidden"
                />
            </NavbarContent>

            <NavbarMenu className="text-center gap-6 py-0">
                <NavbarItem>
                    <LinkUI
                        as={Link}
                        href="/"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`rounded-md mt-6 ${
                            router.pathname === "/"
                                ? "text-primary font-semibold text-4xl"
                                : "text-foreground/80 text-2xl"
                        }`}
                    >
                        Home
                    </LinkUI>
                </NavbarItem>
                <NavbarItem>
                    <LinkUI
                        as={Link}
                        href="/skills"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`rounded-md ${
                            router.pathname === "/skills"
                                ? "text-primary font-semibold text-4xl"
                                : "text-foreground/80 text-2xl"
                        }`}
                    >
                        Skills
                    </LinkUI>
                </NavbarItem>
                <NavbarItem>
                    <LinkUI
                        as={Link}
                        href="/projects"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`rounded-md ${
                            router.pathname === "/projects"
                                ? "text-primary font-semibold text-4xl"
                                : "text-foreground/80 text-2xl"
                        }`}
                    >
                        Projects
                    </LinkUI>
                </NavbarItem>
                <NavbarItem>
                    <LinkUI
                        as={Link}
                        href="/about"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`rounded-md ${
                            router.pathname === "/about"
                                ? "text-primary font-semibold text-4xl"
                                : "text-foreground/80 text-2xl"
                        }`}
                    >
                        About
                    </LinkUI>
                </NavbarItem>

                <NavbarMenuItem className="w-full gap-6 flex flex-col items-center mb-6">
                    <Divider className="w-3/5" />
                    <Button size="lg" color="primary" variant="flat">
                        Resume
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
