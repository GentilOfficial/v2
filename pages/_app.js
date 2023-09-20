import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Red_Hat_Text } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GAnalytics from "@/components/GAnalytics";
import Gestures from "@/hooks/Gestures";

const red_hat_text = Red_Hat_Text({ subsets: ["latin"] });

console.log.apply(console, [
    "%c Designed & Built by Federico Gentili ",
    "background: #548267; color: #ffffff; padding: 2px; border-radius: 9999px;",
]);

export default function App({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <DefaultSeo {...SEO} />
            <NextThemesProvider attribute="class">
                <div
                    className={`bg-background text-foreground ${red_hat_text.className}`}
                >
                    <Navbar />
                    <Gestures>
                        <Component {...pageProps} />
                    </Gestures>
                    <Footer />
                </div>
            </NextThemesProvider>
            <GAnalytics />
            <Analytics />
        </NextUIProvider>
    );
}
