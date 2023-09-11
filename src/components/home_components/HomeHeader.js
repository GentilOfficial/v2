import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";
import Welcome from "../../assets/images/welcome.webp";

export default function HomeHeader(x) {
    const headerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const headerItem = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <motion.section
            variants={headerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)]"
        >
            <motion.h1
                variants={headerItem}
                className="drop-shadow-lg font-bold text-center text-primary font-caveat tracking-widest text-xl md:text-2xl lg:text-3xl mt-6"
            >
                {x.isIT ? "Hey, io sono" : "Hey, I’m"}
            </motion.h1>
            <motion.h2
                variants={headerItem}
                className="drop-shadow-lg font-bold text-center font-caveat mt-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
            >
                Federico Gentili
            </motion.h2>
            <motion.h3
                variants={headerItem}
                className="drop-shadow-lg font-bold text-center font-caveat mt-1 mb-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground-500"
            >
                {x.isIT
                    ? "Benvenuto nel mio spazio digitale"
                    : "Welcome to my digital space"}
            </motion.h3>
            <motion.p
                variants={headerItem}
                className="drop-shadow-lg text-center text-xl md:text-2xl lg:text-3xl font-caveat mt-5 text-foreground-500"
            >
                {x.isIT ? (
                    <>
                        Sono uno{" "}
                        <span className="text-primary font-bold">
                            sviluppatore web fullstack
                        </span>
                        , proveniente da Ferrara, Italia.
                    </>
                ) : (
                    <>
                        I'm an italian{" "}
                        <span className="text-primary font-bold">
                            fullstack web developer
                        </span>
                        , based near Ferrara, Italy.
                    </>
                )}
            </motion.p>
            <motion.div variants={headerItem}>
                <Image
                    isBlurred
                    alt="Welcome"
                    width={350}
                    height={350}
                    src={Welcome}
                />
            </motion.div>
        </motion.section>
    );
}
