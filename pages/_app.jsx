import "../styles/globals.css";

import {ChakraProvider} from "@chakra-ui/react";
import Head from "next/head";
import {useRouter} from "next/router";
import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import theme from "../theme";

const SiteHead = ({title}) => (
    <Head>
        <title>{title}</title>
        <meta name="title" content="Manu Karthik" />
        <meta name="description" content="Manu Karthik - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#252934" />
        <meta property="og:type" content="website" />
        <script
            async
            defer
            src="https://scripts.simpleanalyticscdn.com/latest.js"
        />
        <noscript>
            <img
                src="https://queue.simpleanalyticscdn.com/noscript.gif"
                alt=""
                referrerPolicy="no-referrer-when-downgrade"
            />
        </noscript>
    </Head>
);

const PageWrapper = ({children, title}) => (
    <div className="container">
        <SiteHead title={title} />
        <NavBar />
        <main className="main">{children}</main>
        <Footer />
    </div>
);

function App({Component, pageProps}) {
    const {pathname} = useRouter();

    const pathToTitle = {
        "/": "Manu Karthik - Full Stack Developer",
    };

    return (
        <ChakraProvider theme={theme}>
            <PageWrapper title={pathToTitle[pathname]}>
                <Component {...pageProps} />
            </PageWrapper>
        </ChakraProvider>
    );
}

export default App;
