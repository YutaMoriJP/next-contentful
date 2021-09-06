import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <AnimateSharedLayout
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </Layout>
    </>
  );
}

export default MyApp;
