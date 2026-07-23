import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { BASE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/app/lib/constants";
import "./globals.css";
import React from "react";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import CookieConsent from "@/app/components/CookieConsent";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: SITE_NAME,
        template: `%s | Georgios Zavlanis`,
    },
    description: SITE_DESCRIPTION,
    keywords: ["Full Stack Developer", "Software Engineer", "React", "Next.js", "Node.js", "Python", "Georgios Zavlanis", "Athens", "Resume", "CV", "Γεώργιος Ζαβλάνης"],
    authors: [{ name: "Georgios Zavlanis" }],
    creator: "Georgios Zavlanis",

    openGraph: {
        type: "website",
        locale: "en_US",
        alternateLocale: ["el_GR"],
        url: BASE_URL,
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        siteName: SITE_NAME,
        images: [
            {
                url: "/og",
                width: 1200,
                height: 630,
                alt: "Georgios Zavlanis Logo Preview",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        images: ["/og"],
    },

    icons: {
        icon: '/icon.svg',
    },

    verification: {
        google: 'bC0O_L9ND2sJAyd5ibD7uOZR7V32tr_Ul6jXAZ4FyfA',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${montserrat.variable} ${inter.variable}`} suppressHydrationWarning>
            <body className="bg-[#f2f2f0] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-body antialiased transition-colors duration-300">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <SpeedInsights />
                    <GoogleAnalytics />
                    <Analytics />
                </ThemeProvider>
            <CookieConsent />
            </body>
        </html>
    );
}