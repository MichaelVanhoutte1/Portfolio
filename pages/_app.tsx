import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { HelmetProvider } from "react-helmet-async";
import "../styles/reset.scss";
import "../styles/app.scss";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

function MyApp({ Component, pageProps }: AppProps) {
    const helmetContext = {};
    i18next.init({
        interpolation: { escapeValue: false }, // React already does escaping
    });

    return (
        <>
            <I18nextProvider i18n={i18next}>
                <HelmetProvider context={helmetContext}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </HelmetProvider>
            </I18nextProvider>
        </>
    );
}

export default MyApp;
