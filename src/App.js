import React from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import CustomNavbar from "./components/CustomNavbar";
import PagesPath from "./hooks/PagesPath";
import Footer from "./components/Footer";
import EasterEgg from "./components/EasterEgg";
import NavigationGesture from "./hooks/NavigationGesture";

export default function App() {
    const [playing, setPlaying] = React.useState(false);
    const isIT =
        useLocation().pathname.slice(1).split("/")[0] === "it" ? true : false;
    isIT
        ? (document.documentElement.lang = "it")
        : (document.documentElement.lang = "en");

    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme={
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
            }
        >
            <EasterEgg playing={playing} setPlaying={setPlaying} />
            <div className="scroll-smooth text-foreground bg-background">
                <CustomNavbar url="https://www.fgentili.it/" isIT={isIT} />
                <NavigationGesture isIT={isIT} isPlaying={playing}>
                    <div className="bg-background overflow-x-hidden">
                        <div className="mx-auto max-w-5xl px-6 min-h-[calc(100vh-21rem)] sm:min-h-[calc(100vh-18rem)]">
                            <PagesPath isIT={isIT} isPlaying={playing} />
                        </div>
                    </div>
                </NavigationGesture>
                <Footer
                    toggleEasterEgg={setPlaying}
                    isEasterEggPlaying={playing}
                    isIT={isIT}
                />
            </div>
        </NextThemesProvider>
    );
}
