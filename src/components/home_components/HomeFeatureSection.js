import { useEffect, useRef } from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import HomeFeatureSectionCard from "./HomeFeatureSectionCard";

export default function HomeFeatureSection({ isIT }) {
    const feature = useRef(null);

    const featureSectionIsInView = useInView(feature, { once: true });

    const featureSectionAnimation = useAnimation();

    const featureContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const featureItem = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            },
        },
    };

    useEffect(() => {
        if (featureSectionIsInView) {
            featureSectionAnimation.start("visible");
        } else {
            featureSectionAnimation.start("hidden");
        }
    });

    return (
        <motion.section
            ref={feature}
            variants={featureContainer}
            initial="hidden"
            animate={featureSectionAnimation}
            className="flex flex-col gap-2"
        >
            <motion.h2
                variants={featureItem}
                className="font-semibold text-4xl"
            >
                {isIT ? (
                    <span>
                        Usa queste <span className="text-primary">feature</span>
                    </span>
                ) : (
                    <span>
                        Use this <span className="text-primary">feature</span>
                    </span>
                )}
            </motion.h2>
            <motion.p
                variants={featureItem}
                className="font-normal text-sm text-default-500 w-full md:w-2/3"
            >
                {isIT
                    ? "Per semplificare la navigazione, c'è una feature che permette di spostarsi fra le varie sezioni."
                    : "To simplify navigation, there are a feature that allow to move between sections."}
            </motion.p>
            <motion.div variants={featureItem}>
                <HomeFeatureSectionCard isIT={isIT} />
            </motion.div>
        </motion.section>
    );
}
