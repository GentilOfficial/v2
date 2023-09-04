import { useTheme } from "next-themes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    return (
        <HelmetProvider>
            <Helmet>
                <meta
                    name="theme-color"
                    content={theme === "dark" ? "#000000" : "#647c64"}
                />
                <meta
                    name="apple-mobile-web-app-status-bar"
                    content={theme === "dark" ? "#181818" : "#647c64"}
                />
            </Helmet>
            <button
                title={theme === "dark" ? "Light" : "Dark"}
                className="flex items-center text-2xl text-foreground-600 hover:text-foreground-500 duration-75"
                onClick={() => {
                    theme === "dark" ? setTheme("light") : setTheme("dark");
                }}
            >
                {theme === "dark" ? <TbSunFilled /> : <TbMoonFilled />}
            </button>
        </HelmetProvider>
    );
}
