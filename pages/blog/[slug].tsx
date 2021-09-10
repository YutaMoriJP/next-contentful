import { createClient, Entry } from "contentful";
import Post from "../../components/BlogCard/BlogPost";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";

export const getStaticPaths = async (): Promise<{
  paths: { params: { slug: string } }[];
  fallback: false;
}> => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "firstBlogPost",
  });
  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async context => {
  const { slug } = context.params;
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const { items } = await client.getEntries({
    content_type: "firstBlogPost",
    "fields.slug": slug,
  });
  const [item]: Entry<unknown>[] = items;
  return {
    props: { item },
    revalidate: 600,
  };
};

export interface PostProps {
  item: {
    fields: {
      title: string;
      readingTime: string;
      featuredImage: { fields: { file: { url: string } } };
      mainPost: { content: any[] };
    };
    sys: {
      createdAt: string;
    };
  };
}

interface BlogPostProps {
  item: Entry<unknown>;
}

const BlogPost = ({ item }: PostProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{item.fields.title}</title>
      </Head>
      <Layout>
        <article>
          <Post item={item} />
        </article>
      </Layout>
    </>
  );
};

export default BlogPost;
