import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
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
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <Home isIT={isIT} isPlaying={playing} />
                                    }
                                />
                                <Route
                                    path="/skills"
                                    element={
                                        <Skills
                                            isIT={isIT}
                                            isPlaying={playing}
                                        />
                                    }
                                />
                                <Route
                                    path="/projects"
                                    element={
                                        <Projects
                                            isIT={isIT}
                                            isPlaying={playing}
                                        />
                                    }
                                />
                                <Route
                                    path="/about"
                                    element={
                                        <About
                                            isIT={isIT}
                                            isPlaying={playing}
                                        />
                                    }
                                />
                                <Route
                                    path="*"
                                    element={
                                        <NotFound
                                            isIT={isIT}
                                            isPlaying={playing}
                                        />
                                    }
                                />

                                <Route
                                    path="/it/"
                                    element={
                                        <Home isIT={isIT} isPlaying={playing} />
                                    }
                                />
                                <Route
                                    path="/it/skills"
                                    element={
                                        <Skills
                                            isIT={isIT}
                                            isPlaying={playing}
                                        />
                                    }
                                />
                                <Route
                                    path="/it/projects"
                                    element={
                                        <Projects
                                            isIT={isIT}
                                            isPlaying={playing}
                                        />
                                    }
                                />
                                <Route
                                    path="/it/about"
                                    element={
                                        <About
                                            isIT={isIT}
                                            isPlaying={playing}
                                        />
                                    }
                                />
                                <Route
                                    path="/it/*"
                                    element={
                                        <NotFound
                                            isIT={isIT}
                                            isPlaying={playing}
                                        />
                                    }
                                />
                            </Routes>
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
