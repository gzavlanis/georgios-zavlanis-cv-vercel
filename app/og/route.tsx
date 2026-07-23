import { ImageResponse } from "next/og";
import { BASE_URL } from "@/app/lib/constants";

export const runtime = "edge";

export async function GET() {
    try {
        const svgRes = await fetch(`${BASE_URL}/icon.svg`);
        const svgText = await svgRes.text();
        const svgDataUrl = `data:image/svg+xml;base64,${Buffer.from(svgText).toString("base64")}`;

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#f2f2f0",
                        position: "relative",
                        fontFamily: "sans-serif",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "12px",
                            backgroundColor: "#171717",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#ffffff",
                            padding: "60px 80px",
                            borderRadius: "16px",
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                            border: "1px solid #e5e5e5",
                        }}
                    >
                        <img
                            src={svgDataUrl}
                            alt="Logo"
                            width="140"
                            height="140"
                            style={{ marginBottom: "32px" }}
                        />

                        <div
                            style={{
                                fontSize: "48px",
                                fontWeight: "bold",
                                color: "#171717",
                                letterSpacing: "-0.02em",
                                marginBottom: "12px",
                            }}
                        >
                            Georgios Zavlanis
                        </div>

                        <div
                            style={{
                                fontSize: "24px",
                                color: "#525252",
                                fontWeight: 500,
                            }}
                        >
                            Full Stack Developer
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e) {
        console.error("Error generating OG image:", e);
        return new Response("Failed to generate image", { status: 500 });
    }
}