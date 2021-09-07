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
        <h1 className={style.title}>Hello, Home Page.</h1>
      </Layout>
    </>
  );
};

export default Home;
