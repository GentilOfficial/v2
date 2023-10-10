import { useRouter } from "next/router";
import { Divider, Image } from "@nextui-org/react";
import { translate } from "@/data/site.config";
import SEO from "@/components/SEO";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export default function AboutPage() {
    const { locale } = useRouter();

    const { title, description } = translate.about[locale];

    return (
        <>
            <SEO title={title} description={description} />
            <section
                className={`flex h-full w-full flex-col items-center justify-center`}
            >
                <h1
                    className={`text-6xl text-primary font-bold ${caveat.className}`}
                >
                    {title}
                </h1>
                <div className="flex w-full h-full mt-20 gap-4">
                    <div className="w-1/2">
                        <Image src="https://images.unsplash.com/photo-1600793575654-910699b5e4d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
                    </div>
                    <div className="flex flex-col w-1/2 gap-4">
                        <h2 className="text-2xl">{title}</h2>
                        <Divider />
                        <p>
                            "Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?"
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
