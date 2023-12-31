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

    const exist = indexOfNowPath > -1 ? true : false;

    const isFirts = indexOfNowPath === 0 ? true : false;

    const isLast = indexOfNowPath + 1 === routes.length ? true : false;

    const preElement = exist
        ? isFirts
            ? routes[routes.length - 1]
            : routes[indexOfNowPath - 1]
        : null;

    const nextElement = exist
        ? isLast
            ? routes[0]
            : routes[indexOfNowPath + 1]
        : null;

    const showMainElement = () => {
        animateMain(
            mainElement.current,
            {
                x: 0,
                opacity: 1,
            },
            { type: "spring", stiffness: 300, damping: 30 }
        );
    };

    const goToPreElement = async () => {
        await animateMain(
            mainElement.current,
            {
                x: "100%",
                opacity: 0,
            },
            { duration: 0.01 }
        );

        await animateMain(
            mainElement.current,
            { x: "-100%" },
            { duration: 0.01 }
        );

        await router.push(preElement.url);

        showMainElement();
    };

    const goToNextElement = async () => {
        await animateMain(
            mainElement.current,
            {
                x: "-100%",
                opacity: 0,
            },
            { duration: 0.1 }
        );

        await animateMain(
            mainElement.current,
            { x: "100%" },
            { duration: 0.1 }
        );

        await router.push(nextElement.url);

        showMainElement();
    };

    const handlers = useSwipeable({
        onSwipedRight: () => {
            if (exist) goToPreElement();
        },
        onSwipedLeft: () => {
            if (exist) goToNextElement();
        },
        swipeDuration: 500,
        preventScrollOnSwipe: true,
    });

    return (
        <div
            {...handlers}
            className="flex flex-col min-h-full w-full justify-between"
        >
            <div className="overflow-hidden h-full p-1">
                <div ref={mainElement} className="h-full">
                    {children}
                </div>
            </div>
            {exist ? (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex z-40 w-full h-16 items-center justify-between sticky bottom-0 inset-x-0"
                >
                    <Button
                        variant="light"
                        color="default"
                        className="backdrop-blur-lg backdrop-saturate-150 bg-background/70"
                        startContent={<SlArrowLeft className="text-primary" />}
                        onPress={goToPreElement}
                    >
                        {preElement.title[locale]}
                    </Button>
                    <Button
                        variant="light"
                        color="default"
                        className="backdrop-blur-lg backdrop-saturate-150 bg-background/70"
                        endContent={<SlArrowRight className="text-primary" />}
                        onPress={goToNextElement}
                    >
                        {nextElement.title[locale]}
                    </Button>
                </motion.section>
            ) : null}
        </div>
    );
}
