import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

export default function ThemeChanger() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    });

    if (!mounted) {
        return null;
    }
    return (
        <>
            <NextSeo
                additionalMetaTags={[
                    { property: "color-scheme", content: theme },
                    {
                        name: "theme-color",
                        content: theme === "dark" ? "#000000" : "#548267",
                    },
                    {
                        name: "apple-mobile-web-app-status-bar",
                        content: theme === "dark" ? "#000000" : "#548267",
                    },
                ]}
            />
            <Button
                isIconOnly
                variant="light"
                size="sm"
                aria-label={theme === "dark" ? "Light" : "Dark"}
                title={theme === "dark" ? "Light" : "Dark"}
                onClick={() => {
                    theme === "dark" ? setTheme("light") : setTheme("dark");
                }}
                className="text-2xl"
            >
                {theme === "dark" ? <TbSunFilled /> : <TbMoonFilled />}
            </Button>
        </>
    );
}
