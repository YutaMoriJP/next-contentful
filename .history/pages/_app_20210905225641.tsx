import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={(): void => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
