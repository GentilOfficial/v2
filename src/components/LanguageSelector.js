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

    const descriptionIT =
        "Federico Gentili è uno sviluppatore web fullstack con sede in Italia. La sua passione per la tecnologia e la creatività lo hanno portato a intraprendere un viaggio nel campo delle applicazioni web, dove esplora costantemente nuove sfide e opportunità per imparare e crescere.";
    const descriptionEN =
        "Federico Gentili is a fullstack web developer based in Italy. His passion for technology and creativity led him to embark on a journey in the field of web applications, where he is constantly exploring new challenges and opportunities to learn and grow.";

    Array.from(document.getElementsByTagName("META")).forEach((meta, index) => {
        if (meta.name === "description") {
            document.getElementsByTagName("META")[index].content = x.isIT
                ? descriptionIT
                : descriptionEN;
        }

        if (meta.name === "og:description") {
            document.getElementsByTagName("META")[index].content = x.isIT
                ? descriptionIT
                : descriptionEN;
        }

        if (meta.name === "twitter:description") {
            document.getElementsByTagName("META")[index].content = x.isIT
                ? descriptionIT
                : descriptionEN;
        }
    });

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
