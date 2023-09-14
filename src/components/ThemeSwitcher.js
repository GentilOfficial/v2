import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";
import { Helmet } from "react-helmet";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <Helmet>
                <meta name="color-scheme" content={theme} />
                <meta
                    name="theme-color"
                    content={theme === "dark" ? "#000000" : "#548267"}
                />
                <meta
                    name="apple-mobile-web-app-status-bar"
                    content={theme === "dark" ? "#000000" : "#548267"}
                />
            </Helmet>
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
