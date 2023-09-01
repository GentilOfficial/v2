import React from "react";
import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { BsArrowDownShort } from "react-icons/bs";
import HomeHeader from "./components/HomeHeader";
import HomeFeatureSection from "./components/HomeFeatureSection";

export default function HomeIndex(x) {
    return (
        <div className="space-y-16">
            <HomeHeader isIT={x.isIT} />
            <section className="flex items-center justify-center gap-2 text-primary">
                <Divider className="w-1/2" />
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
                <Divider className="w-1/2" />
            </section>
            <HomeFeatureSection isIT={x.isIT} />
        </div>
    );
}
