import React from "react";
import { motion } from "framer-motion";
import { BsArrowDownShort } from "react-icons/bs";
import HomeHeader from "./components/HomeHeader";
import HomeFeatureSection from "./components/HomeFeatureSection";

export default function HomeIndex(x) {
    return (
        <div className="space-y-16">
            <HomeHeader isIT={x.isIT} />
            <section className="flex items-center justify-center gap-2 text-primary">
                <div className="w-full h-px bg-neutral-500/30"></div>
                <motion.span
                    animate={{
                        y: [0, 5],
                    }}
                    transition={{
                        y: {
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "reverse",
                        },
                    }}
                >
                    <BsArrowDownShort />
                </motion.span>
                <div className="w-full h-px bg-neutral-500/30"></div>
            </section>
            <HomeFeatureSection isIT={x.isIT} />
        </div>
    );
}
