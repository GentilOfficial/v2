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

        const fontData = await fetch(
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
                            fontSize: 80,
                            fontFamily: '"Caveat"',
                            fontWeight: "bold",
                            letterSpacing: "-0.025em",
                            color: "white",
                            textShadow: "5px 5px 7px rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        <img
                            alt="Logo"
                            width={130}
                            height={130}
                            src={imageData}
                            style={{
                                margin: "0 12px",
                            }}
                        />
                        Federico Gentili
                    </div>
                    <div
                        style={{
                            fontSize: 40,
                            fontFamily: '"Caveat"',
                            fontWeight: "bold",
                            letterSpacing: "-0.025em",
                            lineHeight: 1.4,
                            whiteSpace: "pre-wrap",
                            padding: "0 40px",
                            margin: searchParams.has("title") ? "25px" : "0",
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                            borderRadius: "9999px",
                            color: "rgba(0, 0, 0, 0.8)",
                            textShadow: "5px 5px 10px rgba(0, 0, 0, 0.7)",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {title}
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: "Caveat",
                        data: fontData,
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
