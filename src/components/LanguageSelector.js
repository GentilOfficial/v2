import React from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
} from "@nextui-org/react";
import { IoLanguage } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

export default function LanguageSelector(x) {
    const now = useLocation().pathname;
    const navigate = useNavigate();
    const location = x.isIT
        ? "/" + now.slice(1).split("/")[1]
        : "/it/" + now.slice(1).split("/")[0];

    const [selectedKeys, setSelectedKeys] = React.useState(
        new Set([x.isIT ? "it" : "en"])
    );

    return (
        <Dropdown showArrow>
            <DropdownTrigger>
                <button className="flex items-center text-2xl text-foreground-600 hover:text-foreground-500 duration-75">
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
                onClick={() => navigate("/skills")}
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
                        onPress={() => navigate(x.isIT ? now : location)}
                        onKeyDown={(event) =>
                            event.key === "Enter" &&
                            navigate(x.isIT ? now : location)
                        }
                    >
                        Italiano
                    </DropdownItem>
                    <DropdownItem
                        key="en"
                        onPress={() => navigate(x.isIT ? location : now)}
                        onKeyDown={(event) =>
                            event.key === "Enter" &&
                            navigate(x.isIT ? location : now)
                        }
                    >
                        English
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}
