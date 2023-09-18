import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default async function handler(request) {
    try {
        const { searchParams } = new URL(request.url);

        const imageData = await fetch(
            new URL("./assets/images/logo.png", import.meta.url)
        ).then((res) => res.arrayBuffer());

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
                            background: "rgba(255, 255, 255, 0.75)",
                            width: "90%",
                            height: "80%",
                            borderRadius: "30px",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                justifyItems: "center",
                                fontSize: 100,
                                fontFamily: '"Caveat"',
                                fontWeight: "bold",
                                letterSpacing: "-0.025em",
                                color: "rgba(0, 0, 0, 1)",
                                textShadow:
                                    "5px 5px 5px rgba(255, 255, 255, 0.5)",
                            }}
                        >
                            <img
                                alt="Logo"
                                width={180}
                                height={180}
                                src={imageData}
                            />
                            Federico Gentili
                        </div>
                        <div
                            style={{
                                fontSize: 80,
                                fontFamily: '"Caveat"',
                                fontWeight: "bold",
                                letterSpacing: "-0.025em",
                                color: "rgba(0, 0, 0, 0.8)",
                                textShadow:
                                    "5px 5px 5px rgba(255, 255, 255, 0.5)",
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
