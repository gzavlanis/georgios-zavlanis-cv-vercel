import Script from "next/script";

export default function GoogleAnalytics() {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-N670ZE6G14"
                strategy="afterInteractive"
            />

            {/* Initialize Google Analytics */}
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N670ZE6G14');
        `}
            </Script>
        </>
    );
}