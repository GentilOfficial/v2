import React from "react";
import { useInView } from "framer-motion";
import HomeFeatureSectionCard from "./HomeFeatureSectionCard";

export default function HomeFeatureSection(x) {
    const featureTitle = React.useRef(null);
    const featureSubs = React.useRef(null);

    const featureTitleIsInView = useInView(featureTitle, { once: true });
    const featureSubsAreInView = useInView(featureSubs, { once: true });

    return (
        <section className="flex flex-col gap-2">
            <h2
                ref={featureTitle}
                className="font-semibold text-4xl"
                style={{
                    transform: featureTitleIsInView
                        ? "none"
                        : "translateX(-200px)",
                    opacity: featureTitleIsInView ? 1 : 0,
                    transitionProperty: "transform, opacity",
                    transitionDuration: "0.9s",
                    ease: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
            >
                {x.isIT ? (
                    <span>
                        Usa queste <span className="text-primary">feature</span>
                    </span>
                ) : (
                    <span>
                        Use this <span className="text-primary">feature</span>
                    </span>
                )}
            </h2>
            <p
                ref={featureSubs}
                className="font-normal text-sm text-default-500 w-full md:w-2/3"
                style={{
                    transform: featureSubsAreInView
                        ? "none"
                        : "translateX(-200px)",
                    opacity: featureSubsAreInView ? 1 : 0,
                    transitionProperty: "transform, opacity",
                    transitionDuration: "0.9s",
                    ease: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                    transitionDelay: "0.2s",
                }}
            >
                {x.isIT
                    ? "Per semplificare la navigazione, ci sono due feature che permettono di muoversi fra le varie sezioni."
                    : "To simplify navigation, there are two features that allow you to move between sections."}
            </p>
            <HomeFeatureSectionCard isIT={x.isIT} />
        </section>
    );
}
