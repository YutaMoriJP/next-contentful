import { GetStaticProps } from "next";
import Head from "next/head";
import { createClient, EntryCollection, Entry } from "contentful";
import Content from "../../components/BlogCard/BlogCard";
import Layout from "../../components/Layout/Layout";

export type BlogProps = {
  posts: Entry<unknown>[];
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: BlogProps;
  revalidate: number | false;
}> => {
  //connects to Contentful, allowing to communicate with contentful
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  //request data from contentful
  const { items }: EntryCollection<unknown> = await client.getEntries({
    content_type: "firstBlogPost",
  });
  return { props: { posts: items }, revalidate: 600 };
};

const Blog = ({ posts }: BlogProps): JSX.Element => {
  console.log("posts", posts);
  return (
    <>
      <Head>
        <title>BLOG</title>
      </Head>
      <Layout>
        {posts.map(post => {
          const { id } = post.sys;
          return <Content key={id} post={post} />;
        })}
      </Layout>
    </>
  );
};
export default Blog;
