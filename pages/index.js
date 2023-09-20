import { useRouter } from "next/router";
import { Caveat, Red_Hat_Display } from "next/font/google";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";

const caveat = Caveat({ subsets: ["latin"] });
const red_hat_display = Red_Hat_Display({ subsets: ["latin"] });

export default function HomePage() {
    const { locale } = useRouter();

    const { description, h1, h3, p } = translate.home[locale];

    return (
        <>
            <SEO description={description} />
            <section
                className={`flex h-full flex-col items-center justify-center drop-shadow-lg ${red_hat_display.className}`}
            >
                <h1
                    className={`font-bold text-center text-primary tracking-widest text-xl md:text-2xl lg:text-3xl mt-6 ${caveat.className}`}
                >
                    {h1}
                </h1>
                <div className="uppercase tracking-wide">
                    <h2 className="font-bold text-center mt-2 text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
                        Federico Gentili
                    </h2>

                    <h3 className="tracking-widest font-bold text-center mt-1 mb-1 text-xl xs:text-2xl md:text-4xl lg:text-5xl text-foreground/75">
                        {h3}
                    </h3>
                </div>
                <p
                    className={`text-center mx-auto max-w-xs sm:max-w-sm lg:max-w-lg text-xl md:text-2xl lg:text-3xl mt-5 text-foreground/60 ${caveat.className}`}
                >
                    {p}
                </p>
            </section>
        </>
    );
}
