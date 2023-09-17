import Script from "next/script";

export default function GAnalytics() {
    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-WWWBKY0G82" />
            <Script id="google-analytics">
                {`window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag("js", new Date()); gtag("config", "G-WWWBKY0G82");`}
            </Script>
        </>
    );
}
