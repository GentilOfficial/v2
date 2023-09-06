import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { SiteConfig } from "../data/SiteConfig";

export default function PagesPath({ isIT, isPlaying }) {
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
            {SiteConfig.navItemsIT.map((item, index) => (
                <Route
                    key={`${item}-${index}`}
                    path={item.href}
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
