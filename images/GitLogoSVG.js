import { motion } from "framer-motion";

export default function GitLogoSVG({ className }) {
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
                fill="none"
                stroke="currentColor"
                strokeWidth={0.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            >
                <motion.path
                    d="M29.472,14.753,17.247,2.528a1.8,1.8,0,0,0-2.55,0L12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314,2.528,14.7a1.8,1.8,0,0,0,0,2.551L14.753,29.472a1.8,1.8,0,0,0,2.55,0L29.472,17.3a1.8,1.8,0,0,0,0-2.551"
                    fill="#EE513B"
                    variants={path}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    }}
                />
                <motion.path
                    d="M12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314"
                    fill="none"
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
