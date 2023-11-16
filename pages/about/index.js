import { useRouter } from "next/router";
import { Divider, Image } from "@nextui-org/react";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";
import { Caveat } from "next/font/google";
import { FaRegClock, FaLocationDot } from "react-icons/fa6";
import { RxDividerHorizontal } from "react-icons/rx";

const caveat = Caveat({ subsets: ["latin"] });

export default function AboutPage() {
    const { locale } = useRouter();

    const { title, description, background, experiences } =
        translate.about[locale];

    return (
        <>
            <SEO title={title} description={description} />
            <section className="w-full h-full">
                <h1
                    className={`text-6xl text-primary font-bold text-center ${caveat.className}`}
                >
                    {title}
                </h1>
                <div className="grid lg:grid-cols-2 w-full h-full mt-12 gap-4 ">
                    <div className="order-last lg:order-none">
                        <Image src="" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <section className="space-y-3">
                            <h2 className="text-3xl font-bold">
                                {background.title}
                            </h2>
                            <Divider />
                            <p className="text-justify">{background.p}</p>
                        </section>
                        <section className="space-y-3">
                            <h2 className="text-3xl font-bold">
                                {experiences.title}
                            </h2>
                            <Divider />
                            {experiences.list.map((item, index) => (
                                <div key={`${item}-${index}`}>
                                    <div className="flex justify-between">
                                        <div className="flex flex-col justify-center col-span-2">
                                            <h3 className="italic font-semibold">
                                                {item.description}
                                            </h3>
                                            <h4 className="text-sm flex items-center gap-1 ml-2">
                                                <RxDividerHorizontal className="text-primary" />{" "}
                                                {item.title}
                                            </h4>
                                        </div>
                                        <div className="space-y-1 font-semibold text-sm">
                                            <p className="flex gap-2 items-center">
                                                <FaRegClock className="text-primary" />
                                                {item.start}-{item.end}
                                            </p>
                                            <Divider />
                                            <p className="flex gap-2 items-center">
                                                <FaLocationDot className="text-primary" />
                                                {item.location}
                                            </p>
                                        </div>
                                    </div>
                                    {index ==
                                    experiences.list.length - 1 ? null : (
                                        <Divider />
                                    )}
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}
