import { useRouter } from "next/router";
import { Caveat, Red_Hat_Display } from "next/font/google";
import { motion } from "framer-motion";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";

const caveat = Caveat({ subsets: ["latin"] });
const red_hat_display = Red_Hat_Display({ subsets: ["latin"] });

export default function HomePage() {
    const { locale } = useRouter();

    const sectionContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const sectionChild = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const { description, h1, h3, p } = translate.home[locale];

    return (
        <>
            <SEO description={description} />
            <motion.section
                variants={sectionContainer}
                initial="hidden"
                animate="visible"
                className={`flex h-full flex-col items-center justify-center drop-shadow-lg ${red_hat_display.className}`}
            >
                <motion.h1
                    variants={sectionChild}
                    className={`font-bold text-center text-primary tracking-widest text-xl md:text-2xl lg:text-3xl mt-6 ${caveat.className}`}
                >
                    {h1}
                </motion.h1>
                <motion.h2
                    variants={sectionChild}
                    className="uppercase tracking-wide font-bold text-center mt-2 text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl"
                >
                    Federico Gentili
                </motion.h2>

                <motion.h3
                    variants={sectionChild}
                    className="uppercase tracking-widest font-bold text-center mt-1 mb-1 text-xl xs:text-2xl md:text-4xl lg:text-5xl text-foreground/75"
                >
                    {h3}
                </motion.h3>
                <motion.p
                    variants={sectionChild}
                    className={`text-center mx-auto max-w-xs sm:max-w-sm lg:max-w-lg text-xl md:text-2xl lg:text-3xl mt-5 text-foreground/60 mb-6 ${caveat.className}`}
                >
                    {p}
                </motion.p>
            </motion.section>
        </>
    );
}
