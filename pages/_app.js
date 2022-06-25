import "../public/assets/fonts/fontawesome-pro-5.15.1-web-ulabs/css/all.min.css";
import "../node_modules/bootstrap-css-only/css/bootstrap.min.css";
import "../node_modules/mdbreact/dist/css/mdb.css";
import "../styles/styles.scss";
import googleAnalytics from "../public/assets/scripts/googleAnalytics";
import Layout from "../Components/Layout";
import EnLayout from "../Components/EnLayout";
import Loader from "../Components/Loader";
import Script from "next/script";
import Head from "next/head";

import {useState, useEffect, useContext} from "react";
import Router from "next/router";

import {vendorContext} from "../Components/VendorContext";
import VendorTalk from "../Components/VendorTalk";

const layouts = {
    L1: Layout,
    L2: EnLayout,
};

export default function MyApp({Component, pageProps}) {

    const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);
    Router.events.on("routeChangeStart", (url) => {
        setLoading(true);
    });
    Router.events.on("routeChangeComplete", (url) => {
        setTimeout(() => setLoading(false), 2000);
    });

    const [vendor, setVendor] = useState({name: "", pass: "", signedin: false});
    return (
        <vendorContext.Provider value={{vendor, setVendor}}>
            <Loader loading={loading}/>
            <Head>
                <script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M5RFKZH')`
                }}></script>
            </Head>
            <Layout>
                <Component {...pageProps} />
                {vendor.signedin && <VendorTalk/>}
            </Layout>
            <Script src="../assets/scripts/customSelect.js"></Script>
            <Script src={googleAnalytics}></Script>
        </vendorContext.Provider>
    );
}
