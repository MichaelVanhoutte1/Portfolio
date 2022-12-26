import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { HelmetProvider } from "react-helmet-async";
import "../styles/reset.scss";
import "../styles/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
    const helmetContext = {};

    return (
        <>
            <HelmetProvider context={helmetContext}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </HelmetProvider>
        </>
    );
}

export default MyApp;
