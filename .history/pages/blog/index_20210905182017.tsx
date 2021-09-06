import { GetStaticProps } from "next";
import Head from "next/head";
import { createClient } from "contentful";

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.C,
    accessToken: "",
    host: "",
  });

  return { props: { posts: null } };
};

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>BLOG</title>
      </Head>
    </>
  );
};
export default Blog;
