import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import NotFound from "../pages/NotFound";
import { SiteConfig } from "../data/SiteConfig";

export default function PagesPath({ isIT }) {
    const { pathname } = useLocation();

    const indexOfNow = SiteConfig.navItems.findIndex(
        isIT
            ? (i) =>
                  i.hrefIT.replaceAll("/", "") === pathname.replaceAll("/", "")
            : (i) => i.href.replaceAll("/", "") === pathname.replaceAll("/", "")
    );

    const title =
        indexOfNow === -1
            ? "Federico Gentili - 404"
            : SiteConfig.navItems[indexOfNow].href === "/"
            ? "Federico Gentili"
            : isIT
            ? "Federico Gentili - " + SiteConfig.navItems[indexOfNow].labelIT
            : "Federico Gentili - " + SiteConfig.navItems[indexOfNow].label;

    const description =
        indexOfNow === -1
            ? isIT
                ? "Mi spiace, la pagina che stai cercando non esiste oppure è stata spostata."
                : "Sorry, the page you are looking for doesn't exist or has been moved."
            : isIT
            ? SiteConfig.navItems[indexOfNow].descriptionIT
            : SiteConfig.navItems[indexOfNow].description;

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta
                    property="og:url"
                    content={SiteConfig.domain + pathname.slice(1)}
                    data-react-helmet="true"
                />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </Helmet>
            <Routes>
                {SiteConfig.navItems.map((item, index) => (
                    <Route
                        key={`${item}-${index}`}
                        path={item.href}
                        element={<item.component isIT={isIT} />}
                    />
                ))}
                {SiteConfig.navItems.map((item, index) => (
                    <Route
                        key={`${item}-${index}`}
                        path={item.hrefIT}
                        element={<item.component isIT={isIT} />}
                    />
                ))}
                <Route path="*" element={<NotFound isIT={isIT} />} />
            </Routes>
        </>
    );
}
