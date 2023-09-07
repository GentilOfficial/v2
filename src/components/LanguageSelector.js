import { useState } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
} from "@nextui-org/react";
import { IoLanguage } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { SiteConfig } from "../data/SiteConfig";

export default function LanguageSelector(x) {
    const now = useLocation().pathname;
    const navigate = useNavigate();

    const indexOfNow = SiteConfig.navItems.findIndex(
        x.isIT
            ? (i) => i.hrefIT.replaceAll("/", "") === now.replaceAll("/", "")
            : (i) => i.href.replaceAll("/", "") === now.replaceAll("/", "")
    );

    const [selectedKeys, setSelectedKeys] = useState(
        new Set([x.isIT ? "it" : "en"])
    );

    return (
        <Dropdown showArrow>
            <DropdownTrigger>
                <button
                    title={x.isIT ? "Cambia lingua" : "Change language"}
                    className="flex items-center text-2xl text-foreground-600 hover:text-foreground-500 duration-75"
                >
                    <IoLanguage />
                </button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label={
                    x.isIT
                        ? "Scegli un'altra lingua"
                        : "Choose another language"
                }
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownSection
                    title={
                        x.isIT
                            ? "Scegli un'altra lingua"
                            : "Choose another language"
                    }
                >
                    <DropdownItem
                        key="it"
                        onPress={() =>
                            navigate(
                                indexOfNow === -1
                                    ? x.isIT
                                        ? now
                                        : `/it${now}`
                                    : SiteConfig.navItems[indexOfNow].hrefIT
                            )
                        }
                        onKeyDown={(event) =>
                            event.key === "Enter" &&
                            navigate(
                                indexOfNow === -1
                                    ? x.isIT
                                        ? now
                                        : `/it${now}`
                                    : SiteConfig.navItems[indexOfNow].hrefIT
                            )
                        }
                    >
                        Italiano
                    </DropdownItem>
                    <DropdownItem
                        key="en"
                        onPress={() =>
                            navigate(
                                indexOfNow === -1
                                    ? x.isIT
                                        ? now.slice(3)
                                        : now
                                    : SiteConfig.navItems[indexOfNow].href
                            )
                        }
                        onKeyDown={(event) =>
                            event.key === "Enter" &&
                            navigate(
                                indexOfNow === -1
                                    ? x.isIT
                                        ? now.slice(3)
                                        : now
                                    : SiteConfig.navItems[indexOfNow].href
                            )
                        }
                    >
                        English
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}
