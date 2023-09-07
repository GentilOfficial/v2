import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { SiteConfig } from "../data/SiteConfig";
import { useEffect } from "react";

export default function PagesPath({ isIT, isPlaying }) {
    const { pathname } = useLocation();

    const indexOfNow = SiteConfig.navItems.findIndex(
        isIT
            ? (i) =>
                  i.hrefIT.replaceAll("/", "") === pathname.replaceAll("/", "")
            : (i) => i.href.replaceAll("/", "") === pathname.replaceAll("/", "")
    );

    useEffect(() => {
        document.title =
            indexOfNow === -1
                ? "Federico Gentili - 404"
                : SiteConfig.navItems[indexOfNow].href === "/"
                ? "Federico Gentili"
                : isIT
                ? "Federico Gentili - " +
                  SiteConfig.navItems[indexOfNow].labelIT
                : "Federico Gentili - " + SiteConfig.navItems[indexOfNow].label;
    }, [pathname, indexOfNow, isIT]);

    return (
        <Routes>
            {SiteConfig.navItems.map((item, index) => (
                <Route
                    key={`${item}-${index}`}
                    path={item.href}
                    element={
                        <item.component isIT={isIT} isPlaying={isPlaying} />
                    }
                />
            ))}
            {SiteConfig.navItems.map((item, index) => (
                <Route
                    key={`${item}-${index}`}
                    path={item.hrefIT}
                    element={
                        <item.component isIT={isIT} isPlaying={isPlaying} />
                    }
                />
            ))}
            <Route
                path="*"
                element={<NotFound isIT={isIT} isPlaying={isPlaying} />}
            />
        </Routes>
    );
}
