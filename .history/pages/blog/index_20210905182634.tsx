import { GetStaticProps } from "next";
import Head from "next/head";
import { createClient, EntryCollection, Entry } from "contentful";

interface BlogProps {
  posts: Entry<unknown>;
  success: boolean;
}

export const getStaticProps: GetStaticProps = async () => {
  //connects to Contentful, allowing to communicate with contentful
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  //request data from contentful
  try {
    const res: EntryCollection<unknown> = await client.getEntries({
      content_type: "firstBlogPost",
    });
    return { props: { posts: res.items, success: true } };
  } catch (error) {
    return { props: { posts: error, success: false } };
  }
};

const Blog = ({ posts, success }) => {
  return (
    <>
      <Head>
        <title>BLOG</title>
      </Head>
    </>
  );
};
export default Blog;
