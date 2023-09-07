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

    const navContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const navItems = {
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

    const navItemsChild = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <Navbar
            as={motion.nav}
            variants={navContainer}
            initial="hidden"
            animate="visible"
            onMenuOpenChange={setIsMenuOpen}
            disableAnimation
            isMenuOpen={isMenuOpen}
        >
            <NavbarBrand
                as={motion.div}
                variants={navItems}
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
                variants={navItems}
                className="hidden sm:flex gap-4"
                justify="center"
            >
                {SiteConfig.navItems.map((item, index) => (
                    <NavbarItem
                        key={`${item}-${index}`}
                        as={motion.li}
                        variants={navItemsChild}
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

            <NavbarContent as={motion.ul} variants={navItems} justify="end">
                <NavbarItem as={motion.li} variants={navItemsChild}>
                    <ThemeSwitcher />
                </NavbarItem>
                <NavbarItem as={motion.li} variants={navItemsChild}>
                    <LanguageSelector isIT={x.isIT} />
                </NavbarItem>
                <NavbarItem
                    as={motion.li}
                    variants={navItemsChild}
                    className="hidden sm:block"
                >
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
            </NavbarContent>

            <NavbarMenuToggle
                as={motion.button}
                variants={navItems}
                className="sm:hidden"
            />

            <NavbarMenu>
                <motion.div
                    className="flex flex-col gap-6 items-center justify-center min-h-[calc(100vh-25rem)]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
                >
                    {SiteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <LinkHref
                                as={Link}
                                to={x.isIT ? item.hrefIT : item.href}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`rounded ${
                                    index === 0 ? "mt-5" : ""
                                } ${
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
                    <NavbarItem className="w-full gap-4 flex flex-col items-center">
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
                    </NavbarItem>
                </motion.div>
            </NavbarMenu>
        </Navbar>
    );
}
