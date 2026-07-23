import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
    try {
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
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                            border: "1px solid #e5e5e5",
                        }}
                    >
                        <div
                            style={{
                                width: "120px",
                                height: "120px",
                                backgroundColor: "#171717",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ffffff",
                                fontSize: "52px",
                                fontWeight: 900,
                                letterSpacing: "-3px",
                                marginBottom: "32px",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            GZ_
                        </div>
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