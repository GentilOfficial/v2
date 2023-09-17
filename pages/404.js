import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import content from "@/locale/common";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export default function Error404() {
    const { locale, defaultLocale } = useRouter();

    const { h1, h2, p, button } = content[locale].error;

    return (
        <>
            <NextSeo title={`Federico Gentili - ${h1}`} />
            <main className="min-h-screen flex flex-col items-center justify-center text-center p-5">
                <h1 className="text-xl font-medium text-primary mt-6">{h1}</h1>
                <h2 className="mt-3 text-4xl font-semibold">{h2}</h2>
                <p
                    className={`mt-2 text-xl text-foreground/80 ${caveat.className}`}
                >
                    {p}
                </p>
                <Button
                    as={Link}
                    href={locale === defaultLocale ? "/" : `/${locale}`}
                    variant="flat"
                    color="primary"
                    size="lg"
                    className="mx-auto mt-5 mb-10"
                >
                    {button}
                </Button>
            </main>
        </>
    );
}
