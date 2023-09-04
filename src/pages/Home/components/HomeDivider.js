import { motion } from "framer-motion";
import { BsArrowDownShort } from "react-icons/bs";

export default function HomeDivider(x) {
    return (
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
    );
}
