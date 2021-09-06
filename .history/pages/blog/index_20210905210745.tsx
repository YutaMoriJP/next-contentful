import { GetStaticProps } from "next";
import Head from "next/head";
import { createClient, EntryCollection, Entry } from "contentful";
import { useRouter, NextRouter } from "next/router";

import Content from "../../components/BlogContent/Content";

type BlogProps =
  | {
      posts: Entry<unknown>[];
      success: true;
    }
  | {
      msg: string;
      success: false;
    };

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: BlogProps;
}> => {
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
    return { props: { msg: error.message, success: false } };
  }
};

const Blog = ({ posts, success }): JSX.Element => {
  console.log("posts", posts);
  console.log("success", success);
  const { asPath }: NextRouter = useRouter();
  return (
    <>
      <Head>
        <title>BLOG</title>
      </Head>
      {posts.map(post => {
        return <Content key={id} post={post} />;
      })}
    </>
  );
};
export default Blog;
