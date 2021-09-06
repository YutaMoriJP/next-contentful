import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      {" "}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  );
}

export default MyApp;
