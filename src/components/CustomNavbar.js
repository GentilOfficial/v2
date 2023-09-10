import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarItem,
} from "@nextui-org/navbar";
import { Button, Image, Link as LinkHref, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../assets/images/avatar.webp";
import LanguageSelector from "./LanguageSelector";
import ThemeSwitcher from "./ThemeSwitcher";
import { SiteConfig } from "../data/SiteConfig";

export default function CustomNavbar(x) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation().pathname;

    const navbarContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const navbarItemAnimation = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <Navbar
            as={motion.nav}
            variants={navbarContainer}
            initial="hidden"
            animate="visible"
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
        >
            <NavbarBrand
                as={motion.div}
                variants={navbarItemAnimation}
                className="select-none"
            >
                <LinkHref
                    href={SiteConfig.domain}
                    color="foreground"
                    className="flex items-center rounded"
                >
                    <Image
                        width={36}
                        height={36}
                        src={Avatar}
                        classNames="m-5"
                        alt="Site logo"
                    />
                    <p className="font-caveat text-lg font-bold mx-1">
                        Federico Gentili
                    </p>
                </LinkHref>
            </NavbarBrand>

            <NavbarContent
                as={motion.ul}
                variants={navbarItemAnimation}
                className="hidden sm:flex gap-4"
                justify="center"
            >
                {SiteConfig.navItems.map((item, index) => (
                    <NavbarItem
                        as={motion.li}
                        variants={navbarItemAnimation}
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
                    >
                        <LinkHref
                            as={Link}
                            to={x.isIT ? item.hrefIT : item.href}
                            className={`rounded
                                ${
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
                            `}
                        >
                            {x.isIT ? item.labelIT : item.label}
                        </LinkHref>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent
                as={motion.ul}
                variants={navbarItemAnimation}
                justify="end"
            >
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
                        href={x.isIT ? "/it/Curriculum.pdf" : "/Resume.pdf"}
                        variant="flat"
                        isExternal
                    >
                        {x.isIT ? "Curriculum" : "Resume"}
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
                {SiteConfig.navItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <LinkHref
                            as={Link}
                            to={x.isIT ? item.hrefIT : item.href}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`rounded ${index === 0 ? "mt-6" : ""} ${
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
                            {x.isIT ? item.labelIT : item.label}
                        </LinkHref>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem className="w-full gap-6 flex flex-col items-center mb-6">
                    <Divider className="w-3/5" />
                    <Button
                        as={LinkHref}
                        size="lg"
                        color="primary"
                        href={x.isIT ? "/it/Curriculum.pdf" : "/Resume.pdf"}
                        variant="flat"
                        isExternal
                    >
                        {x.isIT ? "Curriculum" : "Resume"}
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
