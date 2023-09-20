import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSwipeable } from "react-swipeable";
import { Link as LinkUI } from "@nextui-org/react";
import { Link } from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";
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
            if (event.key === "ArrowLeft") {
                router.push(preElement.url);
            } else if (event.key === "ArrowRight") {
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
        <div {...handlers}>
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
                            <ChevronLeftIcon
                                size={24}
                                className="text-primary"
                            />
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
                            <ChevronRightIcon
                                size={24}
                                className="text-primary"
                            />
                        </LinkUI>
                    )}
                </section>
            ) : null}
        </div>
    );
}
