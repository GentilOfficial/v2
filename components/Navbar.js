import { useState } from "react";
import { Caveat } from "next/font/google";
import {
    Navbar as NextNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarItem,
} from "@nextui-org/navbar";
import { Button, Link as LinkUI, Divider } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeChanger from "./ThemeChanger";
import LanguageChanger from "./LanguageChanger";
import { routes, resume } from "@/data/site.config";

const caveat = Caveat({ subsets: ["latin"] });

export default function Navbar() {
    const { pathname, locale } = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const domain = process.env.NEXT_PUBLIC_DOMAIN;

    return (
        <NextNavbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
            <NavbarBrand className="select-none">
                <Link
                    href={`https://${domain}`}
                    className={`text-2xl font-bold mx-1 ${caveat.className}`}
                >
                    Federico Gentili
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {routes.map((route, index) => (
                    <NavbarItem
                        key={`${route}-${index}`}
                        isActive={pathname === route.url ? true : false}
                    >
                        <LinkUI
                            as={Link}
                            href={route.url}
                            className={`rounded-md ${
                                pathname === route.url
                                    ? "text-primary"
                                    : "text-foreground/80"
                            }`}
                        >
                            {route.title[locale]}
                        </LinkUI>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeChanger />
                </NavbarItem>
                <NavbarItem>
                    <LanguageChanger />
                </NavbarItem>
                <NavbarItem className="hidden sm:block">
                    <Button
                        as={Link}
                        href={resume[locale].url}
                        color="primary"
                        variant="flat"
                    >
                        {resume[locale].title}
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
                {routes.map((route, index) => (
                    <NavbarMenuItem key={`${route}-${index}`}>
                        <LinkUI
                            as={Link}
                            href={route.url}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`${
                                index === 0 ? "rounded-md mt-12" : "rounded-md"
                            } ${
                                pathname === route.url
                                    ? "text-primary font-semibold text-4xl"
                                    : "text-foreground/80 text-2xl"
                            }`}
                        >
                            {route.title[locale]}
                        </LinkUI>
                    </NavbarMenuItem>
                ))}

                <NavbarMenuItem className="w-full gap-6 flex flex-col items-center mb-6">
                    <Divider className="w-3/5" />
                    <Button
                        as={Link}
                        href={resume[locale].url}
                        color="primary"
                        variant="flat"
                    >
                        {resume[locale].title}
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </NextNavbar>
    );
}
