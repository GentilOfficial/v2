import { useState } from "react";
import {
    Dropdown,
    Button,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
} from "@nextui-org/react";
import { IoLanguage } from "react-icons/io5";
import { useLocation, Link } from "react-router-dom";
import { SiteConfig } from "../data/SiteConfig";

export default function LanguageSelector({ isIT }) {
    const now = useLocation().pathname;

    const indexOfNow = SiteConfig.navItems.findIndex(
        isIT
            ? (i) => i.hrefIT.replaceAll("/", "") === now.replaceAll("/", "")
            : (i) => i.href.replaceAll("/", "") === now.replaceAll("/", "")
    );

    const [selectedKeys, setSelectedKeys] = useState(
        new Set([isIT ? "it" : "en"])
    );

    return (
        <Dropdown showArrow>
            <DropdownTrigger>
                <Button
                    isIconOnly
                    variant="light"
                    size="sm"
                    aria-label={isIT ? "Cambia lingua" : "Change language"}
                    title={isIT ? "Cambia lingua" : "Change language"}
                    className="text-2xl"
                >
                    <IoLanguage />
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label={
                    isIT ? "Scegli un'altra lingua" : "Choose another language"
                }
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownSection
                    title={
                        isIT
                            ? "Scegli un'altra lingua"
                            : "Choose another language"
                    }
                >
                    <DropdownItem
                        key="it"
                        as={Link}
                        to={
                            indexOfNow === -1
                                ? isIT
                                    ? now
                                    : `/it${now}`
                                : SiteConfig.navItems[indexOfNow].hrefIT
                        }
                    >
                        Italiano
                    </DropdownItem>
                    <DropdownItem
                        key="en"
                        as={Link}
                        to={
                            indexOfNow === -1
                                ? isIT
                                    ? now.slice(3)
                                    : now
                                : SiteConfig.navItems[indexOfNow].href
                        }
                    >
                        English
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}
