import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Red_Hat_Text } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import GlobalNavbar from "@/components/GlobalNavbar";
import Footer from "@/components/Footer";
import GAnalytics from "@/components/GAnalytics";

const red_hat_text = Red_Hat_Text({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <DefaultSeo {...SEO} />
            <NextThemesProvider attribute="class">
                <div
                    className={`bg-background text-foreground ${red_hat_text.className}`}
                >
                    <GlobalNavbar />
                    <Component {...pageProps} />
                    <Footer />
                </div>
            </NextThemesProvider>
            <GAnalytics />
            <Analytics />
        </NextUIProvider>
    );
}
