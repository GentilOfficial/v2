import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarItem,
    Button,
    Image,
    Link as LinkHref,
    Divider,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../assets/images/avatar.webp";
import LanguageSelector from "./LanguageSelector";
import ThemeSwitcher from "./ThemeSwitcher";
import { SiteConfig } from "../data/SiteConfig";

export default function CustomNavbar(x) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation().pathname;

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            disableAnimation
            isMenuOpen={isMenuOpen}
        >
            <NavbarContent>
                <NavbarBrand className="select-none">
                    <LinkHref
                        href={x.href}
                        color="foreground"
                        className="flex gap-1 items-center rounded"
                    >
                        <Image
                            width={36}
                            height={36}
                            src={Avatar}
                            classNames="m-5"
                            alt="Site logo"
                        />
                        <p className="font-caveat text-lg font-bold mr-2">
                            Federico Gentili
                        </p>
                    </LinkHref>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {SiteConfig.navItems.map((item, index) => (
                    <NavbarItem
                        key={`${item}-${index}`}
                        isActive={
                            x.isIT
                                ? location.replaceAll("/", "") ===
                                  item.hrefIT.replaceAll("/", "")
                                    ? true
                                    : false
                                : location.replaceAll("/", "") ===
                                  item.href.replaceAll("/", "")
                                ? true
                                : false
                        }
                        className={
                            x.isIT
                                ? location.replaceAll("/", "") ===
                                  item.hrefIT.replaceAll("/", "")
                                    ? "text-primary"
                                    : "text-foreground-600 hover:text-foreground-500 duration-75"
                                : location.replaceAll("/", "") ===
                                  item.href.replaceAll("/", "")
                                ? "text-primary"
                                : "text-foreground-600 hover:text-foreground-500 duration-75"
                        }
                    >
                        <Link to={x.isIT ? item.hrefIT : item.href}>
                            {x.isIT ? item.labelIT : item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
                <NavbarItem>
                    <LanguageSelector isIT={x.isIT} />
                </NavbarItem>
                <NavbarItem className="hidden sm:block">
                    <Button
                        as={LinkHref}
                        color="primary"
                        href="/federico_gentili.pdf"
                        variant="flat"
                        isExternal
                    >
                        {x.isIT ? "Curriculum" : "Resume"}
                    </Button>
                </NavbarItem>
                <NavbarMenuToggle className="sm:hidden" />
            </NavbarContent>

            <NavbarMenu>
                <motion.div
                    className="flex flex-col gap-6 items-center justify-center min-h-[calc(100vh-25rem)]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
                >
                    {SiteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem
                            key={`${item}-${index}`}
                            className={`${index === 0 ? "mt-5" : ""} ${
                                x.isIT
                                    ? location.replaceAll("/", "") ===
                                      item.hrefIT.replaceAll("/", "")
                                        ? "text-primary font-bold text-4xl"
                                        : "text-foreground text-2xl"
                                    : location.replaceAll("/", "") ===
                                      item.href.replaceAll("/", "")
                                    ? "text-primary font-bold text-4xl"
                                    : "text-foreground text-2xl"
                            }`}
                        >
                            <Link
                                className="w-full"
                                to={x.isIT ? item.hrefIT : item.href}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {x.isIT ? item.labelIT : item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <NavbarItem className="w-full gap-4 flex flex-col items-center">
                        <Divider className="w-3/5" />
                        <Button
                            as={LinkHref}
                            size="lg"
                            color="primary"
                            href="/federico_gentili.pdf"
                            variant="flat"
                            isExternal
                        >
                            {x.isIT ? "Curriculum" : "Resume"}
                        </Button>
                    </NavbarItem>
                </motion.div>
            </NavbarMenu>
        </Navbar>
    );
}
