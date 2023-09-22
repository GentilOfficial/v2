import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSwipeable } from "react-swipeable";
import { Button } from "@nextui-org/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useAnimate, motion } from "framer-motion";
import { routes } from "@/data/site.config";

export default function Gestures({ children }) {
    const router = useRouter();

    const { pathname, locale } = useRouter();

    const [mainElement, animateMain] = useAnimate();

    const indexOfNowPath = routes.findIndex((e) => e.url === pathname);

    const exsist = indexOfNowPath > -1 ? true : false;

    const isFirts = indexOfNowPath === 0 ? true : false;

    const isLast = indexOfNowPath + 1 === routes.length ? true : false;

    const preElement = exsist
        ? isFirts
            ? null
            : routes[indexOfNowPath - 1]
        : null;

    const nextElement = exsist
        ? isLast
            ? null
            : routes[indexOfNowPath + 1]
        : null;

    const goToPreElement = () => {
        router.push(preElement.url);
        animateMain(
            mainElement.current,
            {
                x: ["100%", "-100%", "0%"],
                scale: [0, 0, 1],
            },
            { duration: 0.3 }
        );
    };

    const goToNextElement = () => {
        router.push(nextElement.url);
        animateMain(
            mainElement.current,
            {
                x: ["100%", "100%", "0%"],
                scale: [0, 0, 1],
            },
            { duration: 0.3 }
        );
    };

    const handlers = useSwipeable({
        onSwipedRight: () => {
            if (exsist && !isFirts) goToPreElement();
        },
        onSwipedLeft: () => {
            if (exsist && !isLast) goToNextElement();
        },
        swipeDuration: 500,
        preventScrollOnSwipe: true,
    });

    const handleKeyPress = (event) => {
        if (exsist) {
            if (event.key === "ArrowLeft" && !isFirts) {
                goToPreElement();
            } else if (event.key === "ArrowRight" && !isLast) {
                goToNextElement();
            }
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    });

    return (
        <div
            {...handlers}
            className="flex flex-col min-h-full min-w-full justify-between overflow-x-hidden"
        >
            <div ref={mainElement} className="h-full">
                {children}
            </div>
            {exsist ? (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex items-center ${
                        isFirts
                            ? "justify-end"
                            : isLast
                            ? "justify-start"
                            : "justify-between"
                    }`}
                >
                    {isFirts ? null : (
                        <Button
                            variant="light"
                            color="default"
                            startContent={
                                <SlArrowLeft className="text-primary" />
                            }
                            onPress={goToPreElement}
                        >
                            {preElement.title[locale]}
                        </Button>
                    )}
                    {isLast ? null : (
                        <Button
                            variant="light"
                            color="default"
                            endContent={
                                <SlArrowRight className="text-primary" />
                            }
                            onPress={goToNextElement}
                        >
                            {nextElement.title[locale]}
                        </Button>
                    )}
                </motion.section>
            ) : null}
        </div>
    );
}
