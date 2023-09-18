import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Caveat } from "next/font/google";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";

const caveat = Caveat({ subsets: ["latin"] });

export default function Error404() {
    const { locale } = useRouter();

    const { h1, h2, p, button } = translate.error[locale];

    return (
        <>
            <SEO title={h1} description={p} />
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
                    href="/"
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
