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

export default function LanguageChanger() {
    const router = useRouter();

    const [selectedKeys, setSelectedKeys] = useState(new Set([router.locale]));

    return (
        <Dropdown showArrow>
            <DropdownTrigger>
                <Button
                    isIconOnly
                    variant="light"
                    size="sm"
                    aria-label="Change language"
                    title="Change language"
                    className="text-2xl"
                >
                    <IoLanguage />
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Choose another language"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownSection title="Choose another language">
                    <DropdownItem
                        key="it"
                        as={Link}
                        href={router.pathname}
                        locale="it"
                    >
                        Italiano
                    </DropdownItem>
                    <DropdownItem
                        key="en"
                        as={Link}
                        href={router.pathname}
                        locale="en"
                    >
                        English
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}
