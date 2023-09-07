import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteConfig } from "../data/SiteConfig";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    const isIT = pathname.slice(1).split("/")[0] === "it" ? true : false;

    const indexOfNow = SiteConfig.navItems.findIndex(
        isIT
            ? (i) =>
                  i.hrefIT.replaceAll("/", "") === pathname.replaceAll("/", "")
            : (i) => i.href.replaceAll("/", "") === pathname.replaceAll("/", "")
    );

    useEffect(() => {
        document.title =
            SiteConfig.navItems[indexOfNow].href === "/"
                ? "Federico Gentili"
                : isIT
                ? "Federico Gentili - " +
                  SiteConfig.navItems[indexOfNow].labelIT
                : "Federico Gentili - " + SiteConfig.navItems[indexOfNow].label;
        window.scrollTo(0, 0);
    }, [pathname, indexOfNow, isIT]);

    return null;
}
