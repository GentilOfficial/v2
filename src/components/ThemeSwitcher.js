import { useTheme } from "next-themes";
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
        <button
            title={theme === "dark" ? "Light" : "Dark"}
            className="flex items-center text-2xl text-foreground-600 hover:text-foreground-500 duration-75"
            onClick={() => {
                theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
        >
            {theme === "dark" ? <TbSunFilled /> : <TbMoonFilled />}
        </button>
    );
}
