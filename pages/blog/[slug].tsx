import { createClient, Entry } from "contentful";
import Post from "../../components/BlogCard/BlogPost";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import { Document } from "@contentful/rich-text-types";
import Skelton from "../../components/Skelton/Skelton";

export const getStaticPaths = async (): Promise<{
  paths: { params: { slug: string } }[];
  fallback: boolean;
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
  //404 page will not be rendered, but <Skelton/> fallback is rendered
  //and then getStaticProps is run again, and tries to inject data if the data is found
  return { paths, fallback: true };
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

  //items is empty, meaning data was not found
  //then the {fallback: true} triggers and the <Skelton/> component renders, but page is redirected
  //to destination '/'
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const [item]: Entry<unknown>[] = items;
  return {
    props: { item },
    revalidate: 1,
  };
};

export interface PostProps {
  item: {
    fields: {
      title: string;
      readingTime: string;
      featuredImage: { fields: { file: { url: string } } };
      mainPost: Document;
      method: any;
    };
    sys: {
      createdAt: string;
    };
  };
}

const BlogPost = ({ item }: PostProps): JSX.Element => {
  if (!item)
    return (
      <Layout>
        <Skelton />
      </Layout>
    );

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
