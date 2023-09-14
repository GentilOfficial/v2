import React from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import CustomNavbar from "./components/CustomNavbar";
import PagesPath from "./hooks/PagesPath";
import Footer from "./components/Footer";
import NavigationGesture from "./hooks/NavigationGesture";

export default function App() {
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
            <div className="scroll-smooth text-foreground bg-background">
                <CustomNavbar url="https://www.fgentili.it/" isIT={isIT} />
                <NavigationGesture isIT={isIT}>
                    <div className="mx-auto max-w-5xl px-6 min-h-[calc(100vh-21rem)] sm:min-h-[calc(100vh-18rem)] flex items-center">
                        <section className="w-full">
                            <PagesPath isIT={isIT} />
                        </section>
                    </div>
                </NavigationGesture>
                <Footer isIT={isIT} />
            </div>
        </NextThemesProvider>
    );
}
