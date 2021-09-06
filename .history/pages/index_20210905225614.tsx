import Head from "next/head";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <Layout>
        <h1>Hello, Home Page.</h1>
      </Layout>
    </>
  );
};

export default Home;
