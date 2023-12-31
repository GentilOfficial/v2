import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default async function handler(request) {
    try {
        const { searchParams } = new URL(request.url);

        const fontDataCaveat = await fetch(
            new URL("./assets/fonts/Caveat.ttf", import.meta.url)
        ).then((res) => res.arrayBuffer());

        const title = searchParams.has("title")
            ? searchParams.get("title")
            : "";

        return new ImageResponse(
            (
                <div
                    style={{
                        background: "#548267",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            justifyItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                justifyItems: "center",
                                fontSize: 130,
                                fontFamily: '"Caveat"',
                                fontWeight: "bold",
                                letterSpacing: "-0.025em",
                                color: "rgba(255, 255, 255, 1)",
                                textShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            Federico Gentili
                        </div>
                        <div
                            style={{
                                fontSize: 80,
                                fontFamily: '"Caveat"',
                                fontWeight: "bold",
                                letterSpacing: "-0.025em",
                                color: "rgba(255, 255, 255, 0.8)",
                                textShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            {title}
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: "Caveat",
                        data: fontDataCaveat,
                        style: "normal",
                    },
                ],
            }
        );
    } catch (e) {
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
