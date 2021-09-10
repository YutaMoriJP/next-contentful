import Head from "next/head";
import Layout from "../components/Layout/Layout";
import style from "../styles/Home.module.css";
const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <Layout>
        <section className={style.section}>
          <div className={style.content}>
            <h1 className={style.title}>Next.JS 🤝 Contentful</h1>
            <p className={style.text}>
              This blog was created with Next.JS and uses Contentful as the data
              source. Navigate to the blog page to see some dummy blog content.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
