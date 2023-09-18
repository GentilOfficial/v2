import Script from "next/script";

export default function GAnalytics() {
    const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
            <Script id="google-analytics">
                {`window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag("js", new Date()); gtag("config", "${id}");`}
            </Script>
        </>
    );
}
