import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    Array.from(document.getElementsByTagName("META")).forEach((meta, index) => {
        if (meta.name === "color-scheme") {
            document.getElementsByTagName("META")[index].content = theme;
        }
        if (meta.name === "theme-color") {
            document.getElementsByTagName("META")[index].content =
                theme === "dark" ? "#000000" : "#647c64";
        }
        if (meta.name === "apple-mobile-web-app-status-bar") {
            document.getElementsByTagName("META")[index].content =
                theme === "dark" ? "#000000" : "#647c64";
        }
    });
    return (
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
    );
}
