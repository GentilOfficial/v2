import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSwipeable } from "react-swipeable";
import { Link as LinkUI } from "@nextui-org/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { routes } from "@/data/site.config";

export default function Gestures({ children }) {
    const router = useRouter();

    const { pathname, locale } = useRouter();

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

    const handlers = useSwipeable({
        onSwipedRight: () => {
            if (exsist && !isFirts) router.push(preElement.url);
        },
        onSwipedLeft: () => {
            if (exsist && !isLast) router.push(nextElement.url);
        },
        swipeDuration: 500,
        preventScrollOnSwipe: true,
    });

    const handleKeyPress = (event) => {
        if (exsist) {
            if (event.key === "ArrowLeft" && !isFirts) {
                router.push(preElement.url);
            } else if (event.key === "ArrowRight" && !isLast) {
                router.push(nextElement.url);
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
            className="flex flex-col min-h-full min-w-full justify-between"
        >
            {children}
            {exsist ? (
                <section
                    className={`flex items-center ${
                        isFirts
                            ? "justify-end"
                            : isLast
                            ? "justify-start"
                            : "justify-between"
                    }`}
                >
                    {isFirts ? null : (
                        <LinkUI
                            onClick={() => {
                                router.push(preElement.url, {
                                    scroll: false,
                                });
                            }}
                            isBlock
                            color="foreground"
                            className="gap-1.5 cursor-pointer"
                        >
                            <SlArrowLeft className="text-primary h-3.5" />
                            {preElement.title[locale]}
                        </LinkUI>
                    )}
                    {isLast ? null : (
                        <LinkUI
                            onClick={() => {
                                router.push(nextElement.url, {
                                    scroll: false,
                                });
                            }}
                            isBlock
                            color="foreground"
                            className="gap-1.5 cursor-pointer"
                        >
                            {nextElement.title[locale]}
                            <SlArrowRight className="text-primary h-3.5" />
                        </LinkUI>
                    )}
                </section>
            ) : null}
        </div>
    );
}
