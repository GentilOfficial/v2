import { motion } from "framer-motion";

export default function TailwindLogo({ className }) {
    const path = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fillOpacity: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1.5,
            fillOpacity: 1,
        },
    };

    return (
        <>
            <motion.svg
                viewBox="0 0 32 32"
                stroke="currentColor"
                strokeWidth={0.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            >
                <motion.path
                    d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                    fill="#44a8b3"
                    variants={path}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    }}
                />
            </motion.svg>
        </>
    );
}
