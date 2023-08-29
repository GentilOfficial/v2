import React from "react";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { motion, useInView } from "framer-motion";
import {
    TbSquareRoundedChevronRightFilled,
    TbSquareRoundedChevronLeftFilled,
    TbSquareRoundedChevronUpFilled,
    TbSquareRoundedChevronDownFilled,
} from "react-icons/tb";
import { MdSwipeLeft, MdSwipeRight } from "react-icons/md";
import {
    HiOutlineArrowNarrowLeft,
    HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export default function HomeFeatureSectionCard(x) {
    const featureCard = React.useRef(null);
    const featureCardBody = React.useRef(null);

    const featureCardIsInView = useInView(featureCard, { once: true });
    const featureCardBodyIsInView = useInView(featureCardBody, { once: true });

    return (
        <Card
            ref={featureCard}
            shadow="md"
            className="text-primary w-full max-w-screen-lg mx-auto bg-white/5 dark:bg-default-400/10 mb-10"
            style={{
                transform: featureCardIsInView ? "none" : "translateX(200px)",
                opacity: featureCardIsInView ? 1 : 0,
                transitionProperty: "transform, opacity",
                transitionDuration: "0.9s",
                ease: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                transitionDelay: "0.4s",
            }}
        >
            <CardBody
                ref={featureCardBody}
                className="flex flex-col sm:flex-row justify-between"
                style={{
                    opacity: featureCardBodyIsInView ? 1 : 0,
                    transitionProperty: "opacity",
                    transitionDuration: "0.5s",
                    ease: "cubic-bezier(0.17, 0.55, 0.55, 1)",
                    transitionDelay: "0.4s",
                }}
            >
                <div className="gap-2 flex flex-col sm:w-2/5">
                    <div className="text-center text-xl text-default-500 font-caveat">
                        {x.isIT ? (
                            <p>
                                Usa le{" "}
                                <span className="text-primary font-bold">
                                    frecce
                                </span>{" "}
                                sulla tastiera
                            </p>
                        ) : (
                            <p>
                                Use{" "}
                                <span className="text-primary font-bold">
                                    arrow keys
                                </span>{" "}
                                on your keyboard
                            </p>
                        )}
                    </div>
                    <div className="text-4xl">
                        <div className="flex items-center justify-center">
                            <TbSquareRoundedChevronUpFilled className="opacity-50" />
                        </div>
                        <div className="flex gap-1 items-center justify-center">
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: 10 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 2,
                                    delay: 3,
                                    ease: [1.01, 0.2, 0.71, 0],
                                }}
                            >
                                <TbSquareRoundedChevronLeftFilled className="drop-shadow-lg" />
                            </motion.div>
                            <TbSquareRoundedChevronDownFilled className="opacity-50" />
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: 10 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 2,
                                    delay: 2,
                                    ease: [1.01, 0.2, 0.71, 0],
                                }}
                            >
                                <TbSquareRoundedChevronRightFilled className="drop-shadow-lg" />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:flex flex-col items-center gap-2 justify-center">
                    <Divider className="h-1/3" orientation="vertical" />
                    <p className="text-default-500">
                        {x.isIT ? "OPPURE" : "OR"}
                    </p>
                    <Divider className="h-1/3" orientation="vertical" />
                </div>
                <div className="flex items-center gap-2 justify-center sm:hidden my-6">
                    <Divider className="w-1/3" />
                    <p className="text-default-500">
                        {x.isIT ? "OPPURE" : "OR"}
                    </p>
                    <Divider className="w-1/3" />
                </div>
                <div className="gap-3 flex flex-col sm:w-2/5">
                    <div className="text-center text-xl text-default-500 font-caveat">
                        {x.isIT ? (
                            <p>
                                <span className="text-primary font-bold">
                                    Scorri
                                </span>{" "}
                                col dito sullo schermo
                            </p>
                        ) : (
                            <p>
                                <span className="text-primary font-bold">
                                    Swipe
                                </span>{" "}
                                on your screen
                            </p>
                        )}
                    </div>
                    <div className="text-4xl flex flex-col gap-2">
                        <div className="flex gap-10 items-center justify-center">
                            <motion.div
                                initial={{ x: 0, rotate: -5 }}
                                animate={{ x: 10, rotate: 10 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 2,
                                    delay: 3,
                                    ease: [1.01, 0.2, 0.71, 0],
                                }}
                            >
                                <MdSwipeRight className="drop-shadow-lg" />
                            </motion.div>
                            <motion.div
                                initial={{ x: 0, rotate: 5 }}
                                animate={{ x: -10, rotate: -10 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 2,
                                    delay: 2,
                                    ease: [1.01, 0.2, 0.71, 0],
                                }}
                            >
                                <MdSwipeLeft className="drop-shadow-lg" />
                            </motion.div>
                        </div>
                        <div className="flex gap-10 items-center justify-center">
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: -10 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 2,
                                    delay: 3,
                                    ease: [1.01, 0.2, 0.71, 0],
                                }}
                            >
                                <HiOutlineArrowNarrowLeft className="drop-shadow-lg" />
                            </motion.div>
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: 10 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 2,
                                    delay: 2,
                                    ease: [1.01, 0.2, 0.71, 0],
                                }}
                            >
                                <HiOutlineArrowNarrowRight className="drop-shadow-lg" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
