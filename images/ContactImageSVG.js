import { motion } from "framer-motion";

export default function ContactImageSVG({ className }) {
    const mainPath = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fillOpacity: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1.5,
            fillOpacity: 0.5,
        },
    };

    const secondPath = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fillOpacity: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1.5,
            fillOpacity: 0.8,
        },
    };

    return (
        <>
            <motion.svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={0.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            >
                <motion.path
                    d="M7.6921 11.8974L9.10263 12.3675L9.10264 12.3675C10.0337 12.6779 10.4992 12.8331 10.8331 13.1669C11.1669 13.5008 11.3221 13.9663 11.6325 14.8974L11.6325 14.8974L12.1026 16.3079C12.887 18.6611 13.2792 19.8377 14 19.8377C14.7208 19.8377 15.113 18.6611 15.8974 16.3079L15.8974 16.3079L18.7351 7.79473C19.287 6.13894 19.563 5.31105 19.126 4.87403C18.689 4.43702 17.8611 4.71298 16.2053 5.26491L7.6921 8.10263C5.33889 8.88704 4.16228 9.27924 4.16228 10C4.16228 10.7208 5.33888 11.113 7.69209 11.8974L7.6921 11.8974Z"
                    fill="currentColor"
                    variants={mainPath}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    }}
                />
                <motion.path
                    d="M9.52566 13.8419L7.46399 13.1547C7.17123 13.0571 6.84982 13.1001 6.59306 13.2713L5.50471 13.9969C4.92684 14.3821 5.08067 15.2702 5.75444 15.4386L7.70896 15.9272C7.8881 15.972 8.02798 16.1119 8.07276 16.291L8.56139 18.2456C8.72983 18.9193 9.6179 19.0732 10.0031 18.4953L10.7287 17.4069C10.8999 17.1502 10.9429 16.8288 10.8453 16.536L10.1581 14.4743C10.0586 14.1757 9.82426 13.9414 9.52566 13.8419Z"
                    fill="currentColor"
                    variants={secondPath}
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
