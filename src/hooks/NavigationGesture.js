import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { SiteConfig } from "../data/SiteConfig";

export default function NavigationGesture({ children, isPlaying, isIT }) {
    const navigate = useNavigate();

    const now = useLocation().pathname;

    const indexOfNow = isIT
        ? SiteConfig.navItemsIT.findIndex(
              (i) => i.href.replaceAll("/", "") === now.replaceAll("/", "")
          )
        : SiteConfig.navItems.findIndex(
              (i) => i.href.replaceAll("/", "") === now.replaceAll("/", "")
          );

    const itemsArrayLength = isIT
        ? SiteConfig.navItemsIT.length
        : SiteConfig.navItems.length;

    const handlers = useSwipeable({
        onSwipedRight: () => {
            if (!isPlaying && indexOfNow - 1 > -1 && indexOfNow !== -1) {
                isIT
                    ? navigate(SiteConfig.navItemsIT[indexOfNow - 1].href)
                    : navigate(SiteConfig.navItems[indexOfNow - 1].href);
            }
        },
        onSwipedLeft: () => {
            if (
                !isPlaying &&
                indexOfNow + 1 < itemsArrayLength &&
                indexOfNow !== -1
            ) {
                isIT
                    ? navigate(SiteConfig.navItemsIT[indexOfNow + 1].href)
                    : navigate(SiteConfig.navItems[indexOfNow + 1].href);
            }
        },
        swipeDuration: 500,
        preventScrollOnSwipe: true,
    });

    const handleKeyPress = (event) => {
        if (
            event.key === "ArrowLeft" &&
            !isPlaying &&
            indexOfNow - 1 > -1 &&
            indexOfNow !== -1
        ) {
            isIT
                ? navigate(SiteConfig.navItemsIT[indexOfNow - 1].href)
                : navigate(SiteConfig.navItems[indexOfNow - 1].href);
        }
        if (
            event.key === "ArrowRight" &&
            !isPlaying &&
            indexOfNow + 1 < itemsArrayLength &&
            indexOfNow !== -1
        ) {
            isIT
                ? navigate(SiteConfig.navItemsIT[indexOfNow + 1].href)
                : navigate(SiteConfig.navItems[indexOfNow + 1].href);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    });

    return (
        <main {...handlers}>
            {children}
            <section
                className={`flex ${
                    indexOfNow - 1 < 0 ? "justify-end" : "justify-between"
                } mx-auto max-w-5xl ${
                    indexOfNow === -1 ? "px-6 py-5" : "px-6"
                }`}
            >
                {indexOfNow - 1 < 0 ? (
                    <></>
                ) : (
                    <Button
                        as={Link}
                        className={`${indexOfNow === -1 ? "hidden" : "flex"}`}
                        to={
                            isIT
                                ? SiteConfig.navItemsIT[indexOfNow - 1].href
                                : SiteConfig.navItems[indexOfNow - 1].href
                        }
                        variant="light"
                    >
                        <IoIosArrowBack className="text-primary" />{" "}
                        {isIT
                            ? SiteConfig.navItemsIT[indexOfNow - 1].label
                            : SiteConfig.navItems[indexOfNow - 1].label}
                    </Button>
                )}

                {indexOfNow + 1 >= itemsArrayLength ? (
                    <></>
                ) : (
                    <Button
                        as={Link}
                        className={`${indexOfNow === -1 ? "hidden" : "flex"}`}
                        to={
                            isIT
                                ? SiteConfig.navItemsIT[indexOfNow + 1].href
                                : SiteConfig.navItems[indexOfNow + 1].href
                        }
                        variant="light"
                    >
                        {isIT
                            ? SiteConfig.navItemsIT[indexOfNow + 1].label
                            : SiteConfig.navItems[indexOfNow + 1].label}{" "}
                        <IoIosArrowForward className="text-primary" />
                    </Button>
                )}
            </section>
        </main>
    );
}
