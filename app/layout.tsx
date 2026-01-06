import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import React from "react";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

// ΕΔΩ είναι συνήθως το πρόβλημα
const lato = Lato({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    variable: "--font-lato",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Georgios Zavlanis | CV",
    description: "Full Stack Developer Resume",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
            <body className="bg-[#f2f2f0] text-neutral-900 font-lato antialiased">
                {children}
            </body>
        </html>
    );
}