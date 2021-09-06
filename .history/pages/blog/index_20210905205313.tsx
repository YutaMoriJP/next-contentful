import { GetStaticProps } from "next";
import Head from "next/head";
import { createClient, EntryCollection, Entry } from "contentful";
import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import style from "./style.module.css";

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
        console.log("post", post);
        const { title, slug, readingTime } = post.fields;
        const { id, createdAt } = post.sys;
        const date = new Date(createdAt).toLocaleDateString();
        const time = new Date(createdAt).toLocaleTimeString();

        return (
          <article key={id} className={style.card}>
            <h1 className={style.title}>{title}</h1>
            <p>{new Date(createdAt).toLocaleTimeString("en-US")}</p>
            <p className={style.readingTime}>
              Reading Time {readingTime} minute.
            </p>
            <Link href={`${asPath}/${slug}`}>
              <a className={style.link}>Read Post</a>
            </Link>
          </article>
        );
      })}
    </>
  );
};
export default Blog;
