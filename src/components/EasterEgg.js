import React from "react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";
import MindBlown from "../assets/images/mindBlown.png";

export default function EasterEgg({ playing, setPlaying }) {
    const [audio] = React.useState(new Audio("/easter_egg.mp3"));
    audio.volume = 0.05;

    React.useEffect(() => {
        audio.currentTime = 0;
        playing ? audio.play() : audio.pause();
    });

    React.useEffect(() => {
        audio.addEventListener("ended", () => {
            setPlaying(false);
            document.body.style.overflow = "unset";
        });
        return () => {
            audio.removeEventListener("ended", () => {
                setPlaying(false);
                document.body.style.overflow = "unset";
            });
        };
    });

    const handleKeyPress = (event) => {
        if (event.ctrlKey === true && event.key === "Insert") {
            setPlaying(!playing);
            !playing
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "unset");
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("bind", handleKeyPress);
        };
    });
    return (
        <>
            {playing ? (
                <motion.section
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <motion.div
                        className="fixed top-0 left-0 right-0 z-50 flex justify-center items-end h-screen backdrop-blur"
                        initial={{ scale: 1 }}
                        animate={{ scale: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 48,
                        }}
                    >
                        <button
                            className="fixed right-5 text-xl top-5 z-50 flex items-center justify-center cursor-pointer rounded-full bg-foreground-200/50 p-2"
                            onClick={() => {
                                setPlaying(!playing);
                                document.body.style.overflow = "unset";
                            }}
                        >
                            <IoClose />
                        </button>
                        <motion.div
                            className="z-50"
                            initial={{ y: 300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 17.5 }}
                        >
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: 300, opacity: 0 }}
                                transition={{ delay: 46.5 }}
                            >
                                <Image
                                    isBlurred
                                    width={300}
                                    alt="MindBlown image"
                                    src={MindBlown}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.section>
            ) : (
                ""
            )}
        </>
    );
}
