import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSwipeable } from "react-swipeable";
import { Link as LinkUI } from "@nextui-org/react";
import { Link } from "next/link";
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
            if (exsist && !isFirts)
                router.push(preElement.url, { scroll: false });
        },
        onSwipedLeft: () => {
            if (exsist && !isLast)
                router.push(nextElement.url, { scroll: false });
        },
        swipeDuration: 500,
        preventScrollOnSwipe: true,
    });

    const handleKeyPress = (event) => {
        if (exsist) {
            if (event.key === "ArrowLeft") {
                router.push(preElement.url, { scroll: false });
            } else if (event.key === "ArrowRight") {
                router.push(nextElement.url, { scroll: false });
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
                            as={Link}
                            href={preElement.url}
                            isBlock
                            color="foreground"
                            className="gap-1.5"
                        >
                            <SlArrowLeft className="text-primary h-3.5" />
                            {preElement.title[locale]}
                        </LinkUI>
                    )}
                    {isLast ? null : (
                        <LinkUI
                            as={Link}
                            href={nextElement.url}
                            isBlock
                            color="foreground"
                            className="gap-1.5"
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
