import React from "react";
import { useInView } from "framer-motion";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Fly from "../../../assets/images/fly.png";
import Hello from "../../../assets/images/hello.png";

export default function HomeHeader(x) {
    const headerTitle = React.useRef(null);
    const headerSubs = React.useRef(null);

    const headerTitleIsInView = useInView(headerTitle, { once: true });
    const headerSubsAreInView = useInView(headerSubs, { once: true });

    return (
        <section className="py-16 flex relative h-[calc(100vh-4rem)]">
            <div className="flex flex-col gap-6 items-center md:items-start md:justify-center w-full md:w-1/2 z-10">
                <div
                    ref={headerTitle}
                    style={{
                        transform: headerTitleIsInView
                            ? "none"
                            : "translateX(-200px)",
                        opacity: headerTitleIsInView ? 1 : 0,
                        transitionProperty: "opacity, transform",
                        transitionDuration: "0.9s",
                        ease: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                    }}
                    className="flex flex-col gap-1 items-center"
                >
                    <Image
                        isBlurred
                        width={200}
                        className="md:hidden"
                        alt="Hi image"
                        src={Hello}
                    />
                    <h3 className="text-4xl lg:text-5xl font-bold uppercase text-center md:text-start mb-2 mt-1">
                        {x.isIT ? "Hey, io sono " : "Hey, I’m "}
                        <span className="text-primary block">
                            FEDERICO GENTILI
                        </span>
                        {x.isIT ? " benvenuto nel mio " : " welcome to my "}
                        <span className="text-primary inline min-[600px]:block md:inline">
                            PORTFOLIO
                        </span>
                    </h3>
                </div>
                <p
                    ref={headerSubs}
                    style={{
                        transform: headerSubsAreInView
                            ? "none"
                            : "translateX(200px)",
                        opacity: headerSubsAreInView ? 1 : 0,
                        transitionProperty: "opacity, transform",
                        transitionDuration: "0.9s",
                        transitionDelay: "0.2s",
                        ease: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                    }}
                    className="text-xl md:text-2xl text-default-500 font-caveat text-center md:text-start max-w-sm"
                >
                    {x.isIT
                        ? "Sono uno sviluppatore web fullstack, proveniente da Ferrara, Italia."
                        : "I'm an italian fullstack web developer, based near Ferrara, Italy."}
                </p>
            </div>
            <div className="hidden md:flex w-1/2 items-center">
                <motion.div
                    initial={{ x: 1000, y: -1000, scale: 0.5, opacity: 0.5 }}
                    animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                    transition={{
                        duration: 8,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, 20],
                            rotate: [0, -5, 2, 0],
                        }}
                        transition={{
                            delay: 1,
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatType: "reverse",
                            },
                            rotate: {
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatType: "loop",
                            },
                        }}
                    >
                        <Image isBlurred alt="Fly image" src={Fly} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
