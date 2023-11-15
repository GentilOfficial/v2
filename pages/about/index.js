import { useRouter } from "next/router";
import { Divider, Image } from "@nextui-org/react";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";
import { Caveat } from "next/font/google";

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
                <div className="flex w-full h-full mt-20 gap-4">
                    <div className="w-1/2">
                        <Image src="https://images.unsplash.com/photo-1600793575654-910699b5e4d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
                    </div>
                    <div className="flex flex-col w-1/2 gap-4">
                        <h2 className="text-2xl">{background.title}</h2>
                        <Divider />
                        <p>{background.p}</p>
                        <h2 className="text-2xl">{experiences.title}</h2>
                        <Divider />
                        {experiences.list.map((item, index) => (
                            <div key={`${item}-${index}`}>
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                                <p>{item.start}</p>
                                <p>{item.end}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
