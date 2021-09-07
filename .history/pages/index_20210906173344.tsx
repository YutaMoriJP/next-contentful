import Head from "next/head";
import Layout from "../components/Layout/Layout";
import style from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <Layout>
        <button
          onClick={async () => {
            const router = (await import("next/router")).default;
            router.reload()();
          }}
        >
          RE-LOAD
        </button>
        <h1 className={style.title}>Hello, Home Page.</h1>
      </Layout>
    </>
  );
};

export default Home;
