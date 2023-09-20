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
import { useRouter } from "next/router";
import Link from "next/link";
import { translate, languageName } from "@/data/site.config";

export default function LanguageChanger() {
    const { locale, pathname, locales } = useRouter();

    const [selectedKeys, setSelectedKeys] = useState(new Set([locale]));

    const languageChanger = translate.languageChanger[locale];

    return (
        <Dropdown showArrow>
            <DropdownTrigger>
                <Button
                    isIconOnly
                    variant="light"
                    size="sm"
                    aria-label={languageChanger}
                    title={languageChanger}
                    className="text-2xl"
                >
                    <IoLanguage />
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label={languageChanger}
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownSection title={languageChanger}>
                    {locales.map((loc) => (
                        <DropdownItem
                            key={loc}
                            as={Link}
                            href={pathname}
                            locale={loc}
                        >
                            {languageName[loc]}
                        </DropdownItem>
                    ))}
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}
