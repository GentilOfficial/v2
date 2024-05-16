import { useRouter } from "next/router";
import NextImage from "next/image";
import { Divider, Image } from "@nextui-org/react";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";
import { Caveat } from "next/font/google";
import { FaRegClock, FaLocationDot } from "react-icons/fa6";
import { RxDividerHorizontal } from "react-icons/rx";

const caveat = Caveat({ subsets: ["latin"] });

export default function AboutPage() {
    const { locale } = useRouter();

    const avatar = process.env.NEXT_PUBLIC_GITHUB_AVATAR;

    const { title, description, background, experiences } =
        translate.about[locale];

    return (
        <>
            <SEO title={title} description={description} />
            <section className="w-full">
                <h1
                    className={`text-6xl text-primary font-bold text-center ${caveat.className}`}
                >
                    {title}
                </h1>
                <div className="w-full h-full mt-12 gap-4">
                    <div className="flex flex-col gap-5 mb-20">
                        <section className="sm:grid grid-cols-5 gap-4 space-y-3">
                            <div className="col-span-3 space-y-3">
                                <h2 className="text-3xl font-bold">
                                    {background.title}
                                </h2>
                                <Divider />
                                <p className="text-justify">{background.p}</p>
                            </div>
                            <div className="col-span-2 flex justify-center items-start">
                                <Image
                                    as={NextImage}
                                    src={avatar}
                                    alt="avatar"
                                    width={460}
                                    height={460}
                                />
                            </div>
                        </section>
                        <section className="space-y-3">
                            <h2 className="text-3xl font-bold">
                                {experiences.title}
                            </h2>
                            <Divider />
                            {experiences.list.map((item, index) => (
                                <div key={`${item}-${index}`}>
                                    <h3 className="italic font-semibold text-lg text-primary">
                                        {item.title}
                                    </h3>
                                    <h4 className="text-md">
                                        {item.description}
                                    </h4>
                                    <p className="text-foreground/80">
                                        {item.start} - {item.end}
                                    </p>
                                    <p className="text-foreground/80 mb-2">
                                        {item.location}
                                    </p>
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
