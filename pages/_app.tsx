import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Andrew | Full Stack Dev"
        titleTemplate="Andrew | Full Stack Dev"
        defaultTitle="Andrew | Full Stack Dev"
        description="Hey! I'm Andrew, A Full Stack Developer!"
        openGraph={{
          url: "https://www.andrewh.xyz/",
          title: "Andrew | Full Stack Developer",
          description: "Hey! I'm Andrew, A Full Stack Developer!",
          images: [
            {
              url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1643532760/og-image_dwcwhp.png",
              width: 800,
              height: 420,
              alt: "Andrew | Full Stack Developer",
            },
          ],
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Full Stack Developer, andrewh, andrew, ajhenry, Web Developer, web development, web developer, app developer, contributor, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
